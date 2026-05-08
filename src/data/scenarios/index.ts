import type { Scenario } from '../../types/scenario';
import { dossierDisparuScenario } from './dossierDisparu';

export const scenarios: Scenario[] = [
  dossierDisparuScenario,
];

export const defaultScenarioId = dossierDisparuScenario.id;

export function getScenarioById(id: string): Scenario | undefined {
  return scenarios.find((scenario) => scenario.id === id);
}

export function getDefaultScenario(): Scenario {
  const scenario = getScenarioById(defaultScenarioId) ?? scenarios[0];

  if (!scenario) {
    throw new Error('No scenario registered.');
  }

  return scenario;
}
