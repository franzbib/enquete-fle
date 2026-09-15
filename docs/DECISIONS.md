# Décisions actives

Ce fichier résume uniquement les décisions encore normatives. Les anciens journaux restent conservés comme historique.

## Architecture

### Stack légère
Statut : active.

React + Vite + TypeScript + Tailwind. Pas de backend, pas de base de données et pas de moteur de jeu lourd tant qu’un besoin concret ne le justifie pas.

### Scénarios séparés du moteur
Statut : active.

Les données de scénario restent dans `src/data/scenarios/`. Les composants génériques ne doivent pas contenir de logique narrative propre à une enquête sauf impossibilité clairement justifiée.

### Sauvegarde locale
Statut : active.

La progression est sauvegardée explicitement dans `localStorage`, avec trois slots séparés par `scenarioId`. Un compte utilisateur ou un suivi distant ne sont pas nécessaires à ce stade.

### Branches et validation
Statut : active depuis la reprise de septembre 2026.

Les changements non triviaux passent par une branche et une pull request. `npm run validate` et `npm run build` doivent réussir avant fusion.

## Game design

### Enquête avant exercice
Statut : active.

Le français est un outil de déduction. Les objectifs linguistiques ne doivent pas devenir des exercices isolés dans l’interface joueur.

### Inventaire minimal
Statut : active.

Pas de mécanique RPG, de combinaison d’objets ou de crafting. Les objets servent à accéder, préparer une action, apporter une preuve faible ou enrichir l’ambiance.

### Objets d’accès contextualisés
Statut : active.

Un objet d’accès s’utilise dans le lieu où il a un sens narratif plutôt que depuis n’importe quel endroit de l’interface.

### Indices progressifs
Statut : active.

Les indices servent à réorienter la lecture et le raisonnement. Ils ne sont pas pénalisants et ne doivent pas donner immédiatement la solution.

### Résolution prudente et réparatrice
Statut : active.

Le jeu privilégie une explication étayée et une réparation concrète. Il évite les accusations humiliantes ou les conclusions dépassant les preuves disponibles.

### Décor vivant contrôlé
Statut : active.

Des éléments facultatifs peuvent rendre l’ISPA plus vivant à condition de ne pas bloquer la progression ni ressembler à des preuves décisives.

## Scénarios

### Le dossier disparu
Statut : scénario de référence historique pour les mécaniques du moteur.

### Le message effacé
Statut : scénario technique de non-régression multi-enquêtes. Il n’est pas actuellement la référence de qualité narrative.

### La salle fantôme
Statut : scénario de référence actuel pour la qualité narrative et pédagogique.

La note interne de Marine doit rester relisible après sa découverte. Cette décision remplace l’ancienne contrainte qui imposait de ne pas la lier au couloir.

## Documentation

### Source de vérité
Statut : active depuis septembre 2026.

Les documents canoniques sont :
- `README.md` ;
- `docs/STATUS.md` ;
- `docs/DESIGN_PRINCIPLES.md` ;
- `docs/architecture.md` ;
- `docs/DECISIONS.md`.

Les fichiers anciens de `docs/agent-context/` et les audits versionnés ont une valeur historique mais ne peuvent pas, seuls, contredire l’état réel du code ou ces documents canoniques.

## Décisions remplacées

Les décisions suivantes sont historiques et ne sont plus normatives :
- « pas de sauvegarde » ;
- « un seul scénario » ou « deux scénarios » ;
- « deuxième scénario après V1.0 » ;
- « accusation finale » comme modèle général de fin ;
- impossibilité de rattacher `note-changement-noms` au couloir de Marine après déblocage.
