# Architecture technique — V0.2

## Objectif

La V0.2 ajoute un moteur minimal de scénario au squelette React/Vite/TypeScript.

Le jeu peut maintenant charger une enquête depuis un fichier de données structuré et afficher sobrement ses lieux, personnages et documents. Cette version reste volontairement statique : pas d’inventaire fonctionnel, pas de système d’indices, pas d’énigmes jouables, pas d’accusation finale, pas de backend et aucune animation.

## Stack

- React
- Vite
- TypeScript
- Tailwind CSS

## Structure

```text
src/
  components/
    BriefingPage.tsx
    CharacterDetail.tsx
    DocumentDetail.tsx
    HomePage.tsx
    InvestigationPage.tsx
    LocationDetail.tsx
    ScenarioList.tsx
  data/
    scenarios/
      dossierDisparu.ts
  engine/
    scenarioLoader.ts
  types/
    scenario.ts
  App.tsx
  main.tsx
  styles.css
```

## Données de scénario

Les données de scénario sont dans :

`src/data/scenarios/`

Le fichier `src/data/scenarios/dossierDisparu.ts` contient le scénario “Le dossier disparu” sous forme d’objet TypeScript typé. Il décrit :

- le briefing ;
- les lieux ;
- les personnages ;
- les documents ;
- quelques objets et énigmes uniquement comme données préparatoires.

Les objets, énigmes et indices ne sont pas encore affichés ni jouables.

## Types

Les types partagés sont dans :

`src/types/scenario.ts`

Types principaux :

- `Scenario`
- `Location`
- `Character`
- `InvestigationDocument`
- `InventoryObject`
- `Puzzle`
- `Hint`

`InventoryObject`, `Puzzle` et `Hint` existent pour préparer les versions suivantes, sans moteur complet associé.

## Loader

Le loader minimal est dans :

`src/engine/scenarioLoader.ts`

Il fournit :

- `loadScenario` ;
- `getScenarioBriefing` ;
- `findLocation` ;
- `findCharacter` ;
- `findDocument`.

Le loader reste volontairement simple : il charge un scénario local depuis un registre interne et ne fait aucun appel réseau.

## Interface

L’application propose une navigation provisoire :

- accueil ;
- briefing ;
- écran d’enquête.

L’écran d’enquête permet de sélectionner :

- un lieu ;
- un personnage ;
- un document.

Chaque sélection affiche un panneau de détail sobre. L’interface est fonctionnelle et provisoire, sans identité graphique finale.

## Ajouter plus tard un nouveau scénario

Quand le premier scénario sera stabilisé, un nouveau scénario pourra être ajouté en suivant cette logique :

1. Créer un fichier dans `src/data/scenarios/`.
2. Exporter un objet conforme au type `Scenario`.
3. Ajouter ce scénario au registre interne de `src/engine/scenarioLoader.ts`.
4. Ajouter ensuite un choix de scénario dans l’interface, seulement quand le projet autorisera plusieurs enquêtes.

La V0.2 ne crée pas de deuxième scénario.

## Direction V0.3

La V0.3 devra transformer cette structure en première enquête minimale plus jouable.

Travail attendu :

- enrichir “Le dossier disparu” avec un contenu minimal mais cohérent ;
- rendre quelques lieux et documents utiles à une progression ;
- introduire des énigmes simples mais non scolaires ;
- préparer une première boucle de déduction ;
- éviter encore toute identité graphique finale.

L’inventaire complet, le système d’indices et l’accusation finale restent à traiter dans des versions ultérieures selon la feuille de route.
