import type { Scenario } from '../types/scenario';

export type ScenarioProgressSelection =
  | { type: 'location'; id: string }
  | { type: 'character'; id: string }
  | { type: 'document'; id: string }
  | { type: 'puzzle'; id: string }
  | { type: 'final-resolution'; id: string };

export type ScenarioProgressSlot = 1 | 2 | 3;

export type ScenarioProgressSave = {
  version: 1;
  scenarioId: string;
  slot: ScenarioProgressSlot;
  selection: ScenarioProgressSelection;
  solvedPuzzleIds: string[];
  unlockedDocumentIds: string[];
  readDocumentIds: string[];
  ownedObjectIds: string[];
  usedObjectIds: string[];
  droppedObjectLocations: Record<string, string>;
  unlockedLocationIds: string[];
  revealedHintCounts: Record<string, number>;
  finalResolutionSolved: boolean;
  inventoryVisible: boolean;
  progressionVisible: boolean;
  missionPanelVisible: boolean;
  savedAt: string;
};

export type ScenarioProgressSlotSummary = {
  slot: ScenarioProgressSlot;
  save: ScenarioProgressSave | null;
};

export const SCENARIO_PROGRESS_SLOTS: ScenarioProgressSlot[] = [1, 2, 3];

const PROGRESS_SAVE_VERSION = 1;
const STORAGE_KEY_PREFIX = 'enquete-fle:progress';

export function getScenarioProgressStorageKey(
  scenarioId: string,
  slot: ScenarioProgressSlot,
) {
  return `${STORAGE_KEY_PREFIX}:${scenarioId}:slot:${slot}`;
}

export function loadScenarioProgress(
  scenario: Scenario,
  fallbackSelection: ScenarioProgressSelection,
  slot: ScenarioProgressSlot,
): ScenarioProgressSave | null {
  const storage = getLocalStorage();

  if (!storage) {
    return null;
  }

  try {
    const rawProgress = storage.getItem(
      getScenarioProgressStorageKey(scenario.id, slot),
    );

    if (!rawProgress) {
      return null;
    }

    return parseScenarioProgress(scenario, fallbackSelection, slot, rawProgress);
  } catch {
    return null;
  }
}

export function loadScenarioProgressSlots(
  scenario: Scenario,
  fallbackSelection: ScenarioProgressSelection,
): ScenarioProgressSlotSummary[] {
  return SCENARIO_PROGRESS_SLOTS.map((slot) => ({
    slot,
    save: loadScenarioProgress(scenario, fallbackSelection, slot),
  }));
}

export function saveScenarioProgress(progress: ScenarioProgressSave) {
  const storage = getLocalStorage();

  if (!storage) {
    return false;
  }

  try {
    storage.setItem(
      getScenarioProgressStorageKey(progress.scenarioId, progress.slot),
      JSON.stringify(progress),
    );
    return true;
  } catch {
    // localStorage can be unavailable or full; the game must remain playable.
    return false;
  }
}

function parseScenarioProgress(
  scenario: Scenario,
  fallbackSelection: ScenarioProgressSelection,
  slot: ScenarioProgressSlot,
  rawProgress: string,
): ScenarioProgressSave | null {
  const parsedProgress: unknown = JSON.parse(rawProgress);

  if (!isRecord(parsedProgress)) {
    return null;
  }

  if (
    parsedProgress.version !== PROGRESS_SAVE_VERSION ||
    parsedProgress.scenarioId !== scenario.id ||
    parsedProgress.slot !== slot
  ) {
    return null;
  }

  return {
    version: PROGRESS_SAVE_VERSION,
    scenarioId: scenario.id,
    slot,
    selection: normalizeSelection(
      scenario,
      parsedProgress.selection,
      fallbackSelection,
    ),
    solvedPuzzleIds: filterKnownIds(
      parsedProgress.solvedPuzzleIds,
      getPuzzleIds(scenario),
    ),
    unlockedDocumentIds: filterKnownIds(
      parsedProgress.unlockedDocumentIds,
      getDocumentIds(scenario),
    ),
    readDocumentIds: filterKnownIds(
      parsedProgress.readDocumentIds,
      getDocumentIds(scenario),
    ),
    ownedObjectIds: filterKnownIds(
      parsedProgress.ownedObjectIds,
      getObjectIds(scenario),
    ),
    usedObjectIds: filterKnownIds(
      parsedProgress.usedObjectIds,
      getObjectIds(scenario),
    ),
    droppedObjectLocations: filterDroppedObjectLocations(
      parsedProgress.droppedObjectLocations,
      getObjectIds(scenario),
      getLocationIds(scenario),
    ),
    unlockedLocationIds: filterKnownIds(
      parsedProgress.unlockedLocationIds,
      getLocationIds(scenario),
    ),
    revealedHintCounts: filterRevealedHintCounts(
      parsedProgress.revealedHintCounts,
      scenario,
    ),
    finalResolutionSolved:
      typeof parsedProgress.finalResolutionSolved === 'boolean'
        ? parsedProgress.finalResolutionSolved
        : false,
    inventoryVisible:
      typeof parsedProgress.inventoryVisible === 'boolean'
        ? parsedProgress.inventoryVisible
        : true,
    progressionVisible:
      typeof parsedProgress.progressionVisible === 'boolean'
        ? parsedProgress.progressionVisible
        : false,
    missionPanelVisible:
      typeof parsedProgress.missionPanelVisible === 'boolean'
        ? parsedProgress.missionPanelVisible
        : false,
    savedAt:
      typeof parsedProgress.savedAt === 'string'
        ? parsedProgress.savedAt
        : new Date().toISOString(),
  };
}

function getLocalStorage() {
  if (typeof window === 'undefined') {
    return null;
  }

  return window.localStorage;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === 'string');
}

function filterKnownIds(value: unknown, knownIds: Set<string>) {
  if (!isStringArray(value)) {
    return [];
  }

  return value.filter((id) => knownIds.has(id));
}

function getLocationIds(scenario: Scenario) {
  return new Set(scenario.locations.map((location) => location.id));
}

function getCharacterIds(scenario: Scenario) {
  return new Set(scenario.characters.map((character) => character.id));
}

function getDocumentIds(scenario: Scenario) {
  return new Set(scenario.documents.map((document) => document.id));
}

function getPuzzleIds(scenario: Scenario) {
  return new Set((scenario.puzzles ?? []).map((puzzle) => puzzle.id));
}

function getObjectIds(scenario: Scenario) {
  return new Set((scenario.inventoryObjects ?? []).map((object) => object.id));
}

function normalizeSelection(
  scenario: Scenario,
  value: unknown,
  fallbackSelection: ScenarioProgressSelection,
): ScenarioProgressSelection {
  if (!isRecord(value) || typeof value.type !== 'string' || typeof value.id !== 'string') {
    return fallbackSelection;
  }

  if (value.type === 'location' && getLocationIds(scenario).has(value.id)) {
    return { type: 'location', id: value.id };
  }

  if (value.type === 'character' && getCharacterIds(scenario).has(value.id)) {
    return { type: 'character', id: value.id };
  }

  if (value.type === 'document' && getDocumentIds(scenario).has(value.id)) {
    return { type: 'document', id: value.id };
  }

  if (value.type === 'puzzle' && getPuzzleIds(scenario).has(value.id)) {
    return { type: 'puzzle', id: value.id };
  }

  if (
    value.type === 'final-resolution' &&
    scenario.finalResolution?.id === value.id
  ) {
    return { type: 'final-resolution', id: value.id };
  }

  return fallbackSelection;
}

function filterDroppedObjectLocations(
  value: unknown,
  knownObjectIds: Set<string>,
  knownLocationIds: Set<string>,
) {
  if (!isRecord(value)) {
    return {};
  }

  return Object.entries(value).reduce<Record<string, string>>(
    (locations, [objectId, locationId]) => {
      if (
        knownObjectIds.has(objectId) &&
        typeof locationId === 'string' &&
        knownLocationIds.has(locationId)
      ) {
        locations[objectId] = locationId;
      }

      return locations;
    },
    {},
  );
}

function filterRevealedHintCounts(value: unknown, scenario: Scenario) {
  if (!isRecord(value)) {
    return {};
  }

  return Object.fromEntries(
    (scenario.puzzles ?? [])
      .map((puzzle) => {
        const savedCount = value[puzzle.id];
        const hintCount = puzzle.hints?.length ?? 0;

        if (typeof savedCount !== 'number' || !Number.isFinite(savedCount)) {
          return null;
        }

        return [
          puzzle.id,
          Math.max(0, Math.min(Math.floor(savedCount), hintCount)),
        ] as const;
      })
      .filter((entry): entry is readonly [string, number] => entry !== null),
  );
}
