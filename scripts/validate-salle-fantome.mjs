import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const scenarioPath = resolve(rootDir, 'src/data/scenarios/salleFantome.ts');
const indexPath = resolve(rootDir, 'src/data/scenarios/index.ts');
const scenarioSource = readFileSync(scenarioPath, 'utf8');
const indexSource = readFileSync(indexPath, 'utf8');

const failures = [];

function assert(condition, message) {
  if (!condition) {
    failures.push(message);
  }
}

function getBlockById(id) {
  const marker = `id: '${id}'`;
  const markerIndex = scenarioSource.indexOf(marker);

  if (markerIndex === -1) {
    return '';
  }

  const start = scenarioSource.lastIndexOf('{', markerIndex);
  let depth = 0;

  for (let index = start; index < scenarioSource.length; index += 1) {
    const char = scenarioSource[index];

    if (char === '{') {
      depth += 1;
    }

    if (char === '}') {
      depth -= 1;

      if (depth === 0) {
        return scenarioSource.slice(start, index + 1);
      }
    }
  }

  return '';
}

function getFinalResolutionBlock() {
  const marker = 'finalResolution: {';
  const markerIndex = scenarioSource.indexOf(marker);

  if (markerIndex === -1) {
    return '';
  }

  const start = scenarioSource.indexOf('{', markerIndex);
  let depth = 0;

  for (let index = start; index < scenarioSource.length; index += 1) {
    const char = scenarioSource[index];

    if (char === '{') {
      depth += 1;
    }

    if (char === '}') {
      depth -= 1;

      if (depth === 0) {
        return scenarioSource.slice(start, index + 1);
      }
    }
  }

  return '';
}

function fieldContains(block, fieldName, forbiddenText) {
  const match = block.match(new RegExp(`${fieldName}:\\s*["'\`]([\\s\\S]*?)["'\`]`));

  return match ? match[1].includes(forbiddenText) : false;
}

const requiredCharacters = [
  'delphine',
  'ning-yi',
  'heidi',
  'marine',
  'thi-thai',
];

const requiredDocuments = [
  'convocation-tcf',
  'plan-actuel-salles',
  'temoignage-delphine',
  'temoignage-ning-yi',
  'archive-entrainements-tcf',
  'note-changement-noms',
  'temoignage-thi-thai',
  'message-rectification',
];

for (const id of requiredCharacters) {
  assert(getBlockById(id), `Missing character: ${id}`);
}

for (const id of requiredDocuments) {
  assert(getBlockById(id), `Missing document: ${id}`);
}

assert(
  scenarioSource.includes("id: 'salle-fantome'"),
  'Missing scenario id: salle-fantome',
);
assert(
  scenarioSource.includes("title: 'La salle fantôme'"),
  'Missing scenario title: La salle fantôme',
);
assert(
  scenarioSource.includes('Salle Jaures -> Salle Beffroi'),
  'Missing correspondence: Salle Jaures -> Salle Beffroi',
);
assert(
  indexSource.includes('salleFantomeScenario'),
  'Scenario is not registered in src/data/scenarios/index.ts',
);

const couloirMarine = getBlockById('couloir-marine');
const secretariatThiThai = getBlockById('secretariat-thi-thai');
const formulerProblemeHeidi = getBlockById('formuler-probleme-heidi');
const identifierBeffroi = getBlockById('identifier-beffroi');
const comprendreErreurThiThai = getBlockById('comprendre-erreur-thi-thai');
const finalResolution = getFinalResolutionBlock();

assert(couloirMarine.includes('available: false'), 'couloir-marine must be locked initially');
assert(
  secretariatThiThai.includes('available: false'),
  'secretariat-thi-thai must be locked initially',
);
assert(
  formulerProblemeHeidi.includes("unlocksLocationIds: ['couloir-marine']"),
  'formuler-probleme-heidi must unlock couloir-marine',
);
assert(
  formulerProblemeHeidi.includes("'temoignage-ning-yi'"),
  'formuler-probleme-heidi must require temoignage-ning-yi',
);
assert(
  identifierBeffroi.includes("'secretariat-thi-thai'"),
  'identifier-beffroi must unlock secretariat-thi-thai',
);
assert(
  !identifierBeffroi.includes("unlocksDocumentIds: ['message-rectification']"),
  'identifier-beffroi must not unlock message-rectification directly',
);
assert(
  comprendreErreurThiThai,
  'Missing puzzle: comprendre-erreur-thi-thai',
);
assert(
  comprendreErreurThiThai.includes("requiredDocumentIds: ['temoignage-thi-thai']"),
  'comprendre-erreur-thi-thai must require temoignage-thi-thai',
);
assert(
  comprendreErreurThiThai.includes("unlocksDocumentIds: ['message-rectification']"),
  'comprendre-erreur-thi-thai must unlock message-rectification',
);
assert(
  finalResolution.includes("'comprendre-erreur-thi-thai'"),
  'finalResolution.requiredPuzzleIds must include comprendre-erreur-thi-thai',
);

for (const id of ['delphine', 'ning-yi', 'heidi']) {
  const block = getBlockById(id);
  assert(
    !fieldContains(block, 'directSpeech', 'Beffroi'),
    `${id} directSpeech must not mention Beffroi`,
  );
  assert(
    !fieldContains(block, 'testimony', 'Beffroi'),
    `${id} testimony must not mention Beffroi`,
  );
}

if (failures.length > 0) {
  console.error('Validation failed for La salle fantôme.');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log('La salle fantôme scenario validation passed.');
