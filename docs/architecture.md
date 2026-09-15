# Architecture technique actuelle

## Objectif

Le projet est un jeu d’enquête FLE/FOU 2D principalement statique. L’architecture doit rester simple, lisible et suffisante pour plusieurs enquêtes courtes sans devenir un moteur de jeu généraliste.

## Stack

- React
- Vite
- TypeScript en mode strict
- Tailwind CSS
- `localStorage` pour les sauvegardes explicites

Pas de backend, de base de données, de moteur de jeu lourd ni de compte utilisateur.

## Structure principale

```text
src/
  components/
    BriefingPage.tsx
    CharacterDetail.tsx
    DocumentDetail.tsx
    FinalResolutionDetail.tsx
    HomePage.tsx
    InventoryPanel.tsx
    InvestigationPage.tsx
    LocationDetail.tsx
    PuzzleDetail.tsx
    ScenarioList.tsx
  data/
    scenarios/
      dossierDisparu.ts
      messageEfface.ts
      salleFantome.ts
      scenarioTemplate.ts
      index.ts
  engine/
    progressStorage.ts
    scenarioLoader.ts
  types/
    scenario.ts
  styles.css
scripts/
  validate-scenarios.mjs
  validate-salle-fantome.mjs
  audit-assets.mjs
```

## Registre des scénarios

`src/data/scenarios/index.ts` enregistre actuellement :

1. `le-dossier-disparu` ;
2. `le-message-efface` ;
3. `salle-fantome`.

`le-dossier-disparu` reste le scénario par défaut.

Le fichier `scenarioTemplate.ts` n’est pas enregistré dans le jeu.

## Modèle de scénario

Un scénario peut définir :
- briefing ;
- lieux ;
- personnages ;
- documents ;
- éléments de preuve ;
- objets d’inventaire ;
- énigmes ;
- résolution finale.

Les lieux peuvent être disponibles ou verrouillés. Des personnages et objets peuvent apparaître conditionnellement après certaines actions.

Les documents deviennent visibles lorsqu’ils sont disponibles et rattachés à au moins un lieu accessible.

## Énigmes

Le moteur gère actuellement :
- chronologie ordonnée ;
- choix simple utilisé pour contradiction, association ou déblocage ;
- contradiction en deux temps à partir de pièces du dossier.

Une énigme peut exiger :
- des documents visibles ;
- des objets possédés.

Elle peut débloquer :
- des documents ;
- des lieux ;
- des objets.

Depuis la consolidation V0.11.1, une chronologie n’est plus limitée à trois événements dans son interface.

## Contextualisation

Une énigme peut être attachée à un document ou un personnage. Les énigmes contextualisées non résolues ne sont pas exposées comme une liste globale afin de préserver l’impression d’enquête.

Conséquence importante : tout document indispensable qui ouvre une énigme contextualisée doit rester **reconsultable après sa découverte**.

`La salle fantôme` applique cette règle à la note de Marine : le document reste masqué avant déblocage mais devient ensuite accessible depuis le couloir.

## Inventaire

L’inventaire reste volontairement minimal.

États principaux :
- objets possédés ;
- objets utilisés ;
- objets reposés et localisation de dépôt ;
- lieux débloqués ;
- documents débloqués.

Pas de combinaison d’objets ni de crafting.

## Sauvegardes

`src/engine/progressStorage.ts` utilise trois slots par scénario.

Format de clé :

```text
enquete-fle:progress:<scenarioId>:slot:<1|2|3>
```

Au chargement :
- le scénario et le slot sont vérifiés ;
- les IDs inconnus sont filtrés ;
- les sélections invalides reviennent à une valeur sûre ;
- les nombres d’indices sont bornés.

L’absence ou la corruption du stockage local ne doit jamais empêcher de jouer.

## Interface

Sur grand écran :
- navigation par lieux à gauche ;
- inventaire latéral ;
- scène ou document principal ;
- tableau de déductions séparé.

Sur mobile :
- onglets fixes `Scène`, `Lieux`, `Inventaire`, `Déduire`.

Les documents graphiques zoomables doivent utiliser des contrôles accessibles au clavier.

## État central

`InvestigationPage.tsx` concentre encore une part importante de l’état et des règles de progression. Cette organisation reste acceptable pour le prototype, mais devra être extraite progressivement vers un hook ou reducer si le nombre de scénarios et de conditions augmente sensiblement.

Aucune refonte ne doit être lancée sans tests de non-régression suffisants.

## Validation

La commande canonique est :

```bash
npm run validate
```

Elle vérifie les références de scénarios et les contrats spécifiques de `La salle fantôme`.

La CI exécute ensuite :

```bash
npm ci
npm run validate
npm run build
npm run audit:assets
```

Toute modification générique du moteur doit préserver les trois scénarios.
