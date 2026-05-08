import type { Scenario } from '../../types/scenario';

// Template only: do not register this object in `scenarios` until it becomes a real investigation.
export const scenarioTemplate: Scenario = {
  id: 'nouvelle-enquete-template',
  title: 'Nouvelle enquête',
  subtitle: 'Modèle de scénario à adapter',
  level: 'B1+ / B2',
  duration: 'À définir',
  briefing: {
    summary: "Résumé court de l'affaire.",
    context: 'Contexte narratif et institutionnel de l’enquête.',
    mission:
      'Mission du joueur, formulée comme une enquête à résoudre sans donner la solution.',
  },
  locations: [],
  characters: [],
  documents: [],
  evidence: [],
  inventoryObjects: [],
  puzzles: [],
};
