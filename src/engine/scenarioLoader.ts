import {
  getDefaultScenario,
  getScenarioById,
  scenarios,
} from '../data/scenarios';
import type {
  Character,
  InvestigationDocument,
  Location,
  Scenario,
  ScenarioBriefing,
} from '../types/scenario';

export { getDefaultScenario, getScenarioById, scenarios };

export function loadScenario(scenarioId: string): Scenario {
  const scenario = getScenarioById(scenarioId);

  if (!scenario) {
    throw new Error(`Scenario not found: ${scenarioId}`);
  }

  return scenario;
}

export function loadDefaultScenario(): Scenario {
  return getDefaultScenario();
}

export function getScenarioBriefing(scenario: Scenario): ScenarioBriefing {
  return scenario.briefing;
}

export function findLocation(
  scenario: Scenario,
  locationId: string,
): Location | undefined {
  return scenario.locations.find((location) => location.id === locationId);
}

export function findCharacter(
  scenario: Scenario,
  characterId: string,
): Character | undefined {
  return scenario.characters.find((character) => character.id === characterId);
}

export function findDocument(
  scenario: Scenario,
  documentId: string,
): InvestigationDocument | undefined {
  return scenario.documents.find((document) => document.id === documentId);
}
