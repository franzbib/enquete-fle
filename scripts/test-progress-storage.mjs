import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = readFileSync(resolve(rootDir, 'src/engine/progressStorage.ts'), 'utf8');
const transpiled = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.ESNext,
    target: ts.ScriptTarget.ES2022,
  },
}).outputText;

const moduleUrl = `data:text/javascript;base64,${Buffer.from(transpiled).toString('base64')}`;
const storageModule = await import(moduleUrl);
const {
  getScenarioProgressStorageKey,
  loadScenarioProgress,
  saveScenarioProgress,
} = storageModule;

class MemoryStorage {
  #values = new Map();

  getItem(key) {
    return this.#values.has(key) ? this.#values.get(key) : null;
  }

  setItem(key, value) {
    this.#values.set(key, String(value));
  }

  removeItem(key) {
    this.#values.delete(key);
  }

  clear() {
    this.#values.clear();
  }
}

const storage = new MemoryStorage();
globalThis.window = { localStorage: storage };

function makeScenario(id) {
  return {
    id,
    title: id,
    subtitle: '',
    level: 'B1/B2',
    duration: '',
    briefing: { summary: '', context: '', mission: '' },
    locations: [
      {
        id: 'hall',
        name: 'Hall',
        kind: 'main',
        description: '',
        role: '',
        available: true,
        documentIds: ['doc-1'],
        presentCharacterIds: ['person-1'],
        objectIds: ['object-1'],
      },
    ],
    characters: [
      {
        id: 'person-1',
        name: 'Personne',
        role: '',
        profile: '',
        directSpeech: '',
        testimony: '',
        reliability: 'stable',
        relatedLocationIds: ['hall'],
      },
    ],
    documents: [
      {
        id: 'doc-1',
        title: 'Document',
        documentType: 'note',
        source: '',
        summary: '',
        content: '',
        initiallyAvailable: true,
        relatedLocationIds: ['hall'],
        relatedCharacterIds: [],
      },
    ],
    evidence: [],
    inventoryObjects: [
      {
        id: 'object-1',
        name: 'Objet',
        objectType: 'ambient',
        description: '',
        originLocationId: 'hall',
        initiallyVisible: true,
        initiallyOwned: false,
        isUseful: false,
      },
    ],
    puzzles: [
      {
        id: 'puzzle-1',
        title: 'Puzzle',
        puzzleType: 'contradiction',
        description: '',
        prompt: '',
        hints: ['a', 'b'],
        answer: {
          kind: 'single-choice',
          correctOptionId: 'yes',
          options: [{ id: 'yes', label: 'Oui' }],
        },
        successFeedback: '',
        failureFeedback: '',
      },
    ],
  };
}

function makeSave(scenarioId, slot) {
  return {
    version: 1,
    scenarioId,
    slot,
    selection: { type: 'location', id: 'hall' },
    solvedPuzzleIds: ['puzzle-1'],
    unlockedDocumentIds: ['doc-1'],
    readDocumentIds: ['doc-1'],
    visitedCharacterIds: ['person-1'],
    ownedObjectIds: ['object-1'],
    usedObjectIds: [],
    droppedObjectLocations: {},
    unlockedLocationIds: [],
    revealedHintCounts: { 'puzzle-1': 1 },
    finalResolutionSolved: false,
    inventoryVisible: true,
    progressionVisible: false,
    missionPanelVisible: false,
    savedAt: '2026-09-15T10:00:00.000Z',
  };
}

const scenarioA = makeScenario('scenario-a');
const scenarioB = makeScenario('scenario-b');
const fallback = { type: 'location', id: 'hall' };

assert.notEqual(
  getScenarioProgressStorageKey('scenario-a', 1),
  getScenarioProgressStorageKey('scenario-b', 1),
  'Different scenarios must have different storage keys',
);
assert.notEqual(
  getScenarioProgressStorageKey('scenario-a', 1),
  getScenarioProgressStorageKey('scenario-a', 2),
  'Different slots must have different storage keys',
);

assert.equal(saveScenarioProgress(makeSave('scenario-a', 1)), true);
assert.equal(saveScenarioProgress(makeSave('scenario-b', 1)), true);
assert.equal(saveScenarioProgress(makeSave('scenario-a', 2)), true);

assert.equal(loadScenarioProgress(scenarioA, fallback, 1)?.scenarioId, 'scenario-a');
assert.equal(loadScenarioProgress(scenarioB, fallback, 1)?.scenarioId, 'scenario-b');
assert.equal(loadScenarioProgress(scenarioA, fallback, 2)?.slot, 2);

const dirtySave = {
  ...makeSave('scenario-a', 3),
  selection: { type: 'document', id: 'unknown-document' },
  solvedPuzzleIds: ['puzzle-1', 'unknown-puzzle'],
  unlockedDocumentIds: ['doc-1', 'unknown-document'],
  ownedObjectIds: ['object-1', 'unknown-object'],
  revealedHintCounts: { 'puzzle-1': 99, 'unknown-puzzle': 5 },
};
storage.setItem(
  getScenarioProgressStorageKey('scenario-a', 3),
  JSON.stringify(dirtySave),
);

const normalized = loadScenarioProgress(scenarioA, fallback, 3);
assert.deepEqual(normalized?.selection, fallback, 'Invalid selections must fall back safely');
assert.deepEqual(normalized?.solvedPuzzleIds, ['puzzle-1']);
assert.deepEqual(normalized?.unlockedDocumentIds, ['doc-1']);
assert.deepEqual(normalized?.ownedObjectIds, ['object-1']);
assert.equal(normalized?.revealedHintCounts['puzzle-1'], 2, 'Hint counts must be clamped');
assert.equal(normalized?.revealedHintCounts['unknown-puzzle'], undefined);

storage.setItem(getScenarioProgressStorageKey('scenario-a', 1), '{not-json');
assert.equal(
  loadScenarioProgress(scenarioA, fallback, 1),
  null,
  'Corrupt JSON must not crash the game',
);

storage.setItem(
  getScenarioProgressStorageKey('scenario-a', 1),
  JSON.stringify(makeSave('scenario-b', 1)),
);
assert.equal(
  loadScenarioProgress(scenarioA, fallback, 1),
  null,
  'A save from another scenario must never load',
);

console.log('Progress storage regression tests passed.');
