import { dossierDisparuScenario } from '../data/scenarios/dossierDisparu';
import type {
  Character,
  InvestigationDocument,
  Location,
  Scenario,
  ScenarioBriefing,
} from '../types/scenario';

const scenarios: Record<string, Scenario> = {
  [dossierDisparuScenario.id]: dossierDisparuScenario,
};

export function loadScenario(scenarioId: string): Scenario {
  const scenario = scenarios[scenarioId];

  if (!scenario) {
    throw new Error(`Scenario not found: ${scenarioId}`);
  }

  return scenario;
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
