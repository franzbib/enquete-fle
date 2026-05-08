# Architecture multi-enquêtes V0.10

## Objectif

La V0.10 prépare `enquete-fle` à accueillir plusieurs enquêtes sans créer immédiatement une deuxième enquête complète.

Cette version ne modifie pas :

- la narration de `Le dossier disparu` ;
- les mécaniques de jeu ;
- les énigmes ;
- l'inventaire ;
- la résolution finale ;
- les assets graphiques.

Elle ajoute seulement un cadre technique et documentaire pour les futures enquêtes.

## Principe

Chaque enquête reste un objet `Scenario` complet, placé dans `src/data/scenarios/`.

Un registre central liste les scénarios disponibles :

```text
src/data/scenarios/index.ts
```

Ce registre exporte :

- `scenarios` : liste des scénarios enregistrés ;
- `defaultScenarioId` : identifiant du scénario lancé par défaut ;
- `getScenarioById(id)` : récupération d'un scénario par identifiant ;
- `getDefaultScenario()` : récupération du scénario par défaut.

En V0.10, le seul scénario enregistré reste :

```text
le-dossier-disparu
```

## Fichiers ajoutés

### Registre des scénarios

```text
src/data/scenarios/index.ts
```

Ce fichier importe `dossierDisparuScenario`, l'ajoute à `scenarios`, puis expose les fonctions de récupération.

### Modèle de scénario

```text
src/data/scenarios/scenarioTemplate.ts
```

Ce fichier contient un objet `scenarioTemplate` conforme au type `Scenario`.

Important : ce modèle n'est pas enregistré dans `scenarios`. Il sert de point de départ pour créer une nouvelle enquête, mais ne doit pas apparaître dans le jeu tant qu'il n'a pas été transformé en scénario réel.

## Loader

Le fichier :

```text
src/engine/scenarioLoader.ts
```

ne contient plus de registre local. Il délègue la récupération des scénarios au registre central.

Il conserve les fonctions utilitaires existantes :

- `loadScenario(id)` ;
- `loadDefaultScenario()` ;
- `getScenarioBriefing(scenario)` ;
- `findLocation(scenario, locationId)` ;
- `findCharacter(scenario, characterId)` ;
- `findDocument(scenario, documentId)`.

## Application

`src/App.tsx` charge désormais le scénario par défaut via :

```ts
loadDefaultScenario()
```

Tant qu'un seul scénario est enregistré, aucune interface de sélection de scénario n'est ajoutée. Cela évite une complexité UX prématurée.

## Créer une nouvelle enquête plus tard

Pour créer une nouvelle enquête :

1. Copier la structure du modèle `scenarioTemplate` ou créer un nouveau fichier dans `src/data/scenarios/`.
2. Exporter un objet conforme au type `Scenario`.
3. Choisir un `id` unique, stable et en kebab-case.
4. Renseigner au minimum `title`, `level`, `duration`, `briefing`, `locations`, `characters`, `documents` et `evidence`.
5. Ajouter progressivement, si nécessaire, `inventoryObjects`, `puzzles` et `finalResolution`.
6. Importer le scénario dans `src/data/scenarios/index.ts`.
7. Ajouter le scénario à la liste `scenarios`.
8. Ne changer `defaultScenarioId` que si le nouveau scénario doit devenir l'enquête lancée par défaut.

## Règles de maintenabilité

- Ne pas coder un scénario directement dans les composants.
- Ne pas dupliquer `InvestigationPage` pour chaque enquête.
- Ne pas ajouter de logique spécifique à un scénario dans les composants si elle peut rester dans les données.
- Garder les IDs stables après publication d'une enquête.
- Vérifier les références croisées : lieux, personnages, documents, objets, énigmes et résolution finale.
- Ne pas enregistrer un scénario incomplet dans `scenarios`.

## Limites volontaires de la V0.10

La V0.10 ne crée pas encore :

- deuxième enquête complète ;
- sélection visible de scénario ;
- éditeur de scénario ;
- validation automatique de cohérence ;
- sauvegarde multi-scénario ;
- backend ;
- base de données.

Ces éléments pourront être étudiés plus tard, une fois le cadre multi-enquêtes stabilisé.

## Tests recommandés

```powershell
npm.cmd run build
rg -n "loadScenario|loadDefaultScenario|getScenarioById|getDefaultScenario|scenarios" src
```

Vérifier aussi que `Le dossier disparu` reste le scénario lancé par défaut.
