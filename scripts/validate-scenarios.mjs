import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const scenarioDir = resolve(rootDir, 'src/data/scenarios');
const scenarioFiles = [
  'dossierDisparu.ts',
  'messageEfface.ts',
  'salleFantome.ts',
];
const failures = [];

function assert(condition, message) {
  if (!condition) failures.push(message);
}

function readScenario(file) {
  return readFileSync(resolve(scenarioDir, file), 'utf8');
}

function captureAll(source, pattern) {
  return [...source.matchAll(pattern)].map((match) => match[1]);
}

function unique(values) {
  return [...new Set(values)];
}

function duplicateValues(values) {
  const seen = new Set();
  const duplicates = new Set();
  for (const value of values) {
    if (seen.has(value)) duplicates.add(value);
    seen.add(value);
  }
  return [...duplicates];
}

function extractScenarioId(source) {
  return source.match(/export const \w+Scenario: Scenario = \{[\s\S]*?\bid:\s*'([^']+)'/)?.[1] ?? null;
}

function extractDeclaredIds(source) {
  return captureAll(source, /\bid:\s*'([^']+)'/g);
}

function extractReferenceIds(source) {
  const ids = [];
  const arrayFields = [
    'documentIds',
    'presentCharacterIds',
    'relatedCharacterIds',
    'objectIds',
    'requiredDocumentIds',
    'requiredObjectIds',
    'requiredPuzzleIds',
    'unlocksDocumentIds',
    'unlocksLocationIds',
    'unlocksObjectIds',
    'relatedLocationIds',
    'evidenceIds',
  ];

  for (const field of arrayFields) {
    const regex = new RegExp(`${field}:\\s*\\[([\\s\\S]*?)\\]`, 'g');
    for (const match of source.matchAll(regex)) {
      ids.push(...captureAll(match[1], /'([^']+)'/g));
    }
  }

  for (const field of ['originLocationId', 'unlocksAfterPuzzleId', 'usesObjectId']) {
    const regex = new RegExp(`${field}:\\s*'([^']+)'`, 'g');
    ids.push(...captureAll(source, regex));
  }

  return unique(ids);
}

for (const file of scenarioFiles) {
  const source = readScenario(file);
  const scenarioId = extractScenarioId(source);
  const declaredIds = extractDeclaredIds(source);
  const declared = new Set(declaredIds);
  const duplicateIds = duplicateValues(declaredIds);
  const references = extractReferenceIds(source);

  assert(scenarioId, `${file}: scenario id not found`);
  assert(duplicateIds.length === 0, `${file}: duplicate ids: ${duplicateIds.join(', ')}`);

  for (const reference of references) {
    assert(
      declared.has(reference),
      `${file}: reference '${reference}' does not resolve to a declared id`,
    );
  }

  assert(/locations:\s*\[/.test(source), `${file}: locations array missing`);
  assert(/characters:\s*\[/.test(source), `${file}: characters array missing`);
  assert(/documents:\s*\[/.test(source), `${file}: documents array missing`);
  assert(/puzzles:\s*\[/.test(source), `${file}: puzzles array missing`);
}

const registry = readFileSync(resolve(scenarioDir, 'index.ts'), 'utf8');
for (const expected of ['dossierDisparuScenario', 'messageEffaceScenario', 'salleFantomeScenario']) {
  assert(registry.includes(expected), `Scenario registry missing ${expected}`);
}

const investigationPage = readFileSync(
  resolve(rootDir, 'src/components/InvestigationPage.tsx'),
  'utf8',
);
assert(
  investigationPage.includes('puzzle.requiredObjectIds') ||
    !scenarioFiles.some((file) => readScenario(file).includes('requiredObjectIds:')),
  'Puzzle.requiredObjectIds is used by scenarios but is not enforced by InvestigationPage',
);

if (failures.length > 0) {
  console.error('Scenario validation failed.');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('Cross-scenario validation passed.');
