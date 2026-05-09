import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const scenarioPath = resolve(rootDir, 'src/data/scenarios/salleFantome.ts');
const indexPath = resolve(rootDir, 'src/data/scenarios/index.ts');
const scenarioSource = readFileSync(scenarioPath, 'utf8');
const indexSource = readFileSync(indexPath, 'utf8');

const requiredSnippets = [
  "id: 'salle-fantome'",
  "title: 'La salle fantôme'",
  "id: 'convocation-tcf'",
  "id: 'plan-actuel-salles'",
  "id: 'archive-entrainements-tcf'",
  "id: 'note-changement-noms'",
  "id: 'temoignage-thi-thai'",
  'Salle Jaures -> Salle Beffroi',
  "id: 'lire-convocation-tcf'",
  "id: 'verifier-plan-actuel'",
  "id: 'formuler-probleme-heidi'",
  "id: 'identifier-beffroi'",
  "id: 'resolution-salle-fantome'",
];

const missingSnippets = requiredSnippets.filter(
  (snippet) => !scenarioSource.includes(snippet),
);

if (!indexSource.includes('salleFantomeScenario')) {
  missingSnippets.push('salleFantomeScenario registration');
}

if (missingSnippets.length > 0) {
  console.error('Validation failed for La salle fantôme.');
  for (const snippet of missingSnippets) {
    console.error(`Missing: ${snippet}`);
  }
  process.exit(1);
}

console.log('La salle fantôme scenario validation passed.');
