# Architecture technique — V0.1

## Objectif

La V0.1 fournit un squelette React/Vite/TypeScript minimal pour le projet `enquete-fle`.

Elle sert uniquement à valider la base technique, la séparation des dossiers et une navigation provisoire entre l'accueil et le briefing de la première enquête.

## Stack

- React
- Vite
- TypeScript
- Tailwind CSS

Le projet ne contient pas de backend, pas de base de données, pas de moteur de jeu lourd et aucune animation.

## Structure

```text
src/
  components/
    BriefingPage.tsx
    HomePage.tsx
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

## Responsabilités

- `src/components/` contient les composants d'interface.
- `src/data/scenarios/` contient les données de scénario.
- `src/engine/` prépare le futur moteur de scénario, sans le coder complètement en V0.1.
- `src/types/` contient les types partagés.

## Limites volontaires de la V0.1

La V0.1 ne crée pas encore :

- le moteur complet de scénario ;
- l'inventaire ;
- le système d'indices ;
- l'accusation finale ;
- un deuxième scénario ;
- une identité graphique finale.

## Direction V0.2

La V0.2 devra introduire un moteur minimal capable de charger une enquête depuis un fichier de données et d'afficher ses sections principales sans modifier les composants de base.
