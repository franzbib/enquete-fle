# Prochaines actions — Jeu d’enquête FLE/FOU

## 1. Objet du document

Ce document indique les prochaines actions concrètes du projet `enquete-fle`.

Une prochaine action doit rester limitée, claire, vérifiable et utile.

## 2. État actuel

Version actuelle : V0.2 — moteur minimal de scénario.

Le dépôt GitHub existe.

Le dossier documentaire `docs/agent-context/` est constitué pour piloter la suite.

L’application React/Vite/TypeScript existe, avec Tailwind CSS, une page d’accueil, un écran de briefing pour “Le dossier disparu” et un écran d’enquête affichant les lieux, personnages et documents du scénario.

## 3. Actions déjà réalisées

### Action 1 — Créer le dépôt GitHub

Statut : fait.

### Action 2 — Créer le dossier documentaire

Statut : fait.

### Action 3 — Créer les documents de contexte agent

Statut : fait.

Fichiers :

- `00_AGENT_CHEF_ORCHESTRE.md`
- `01_ETAT_DU_PROJET.md`
- `02_VISION_PROJET.md`
- `03_CAHIER_DES_CHARGES_GENERAL.md`
- `04_FEUILLE_DE_ROUTE.md`
- `05_ESPACE_GRAPHIQUE_PROGRESSIF.md`
- `06_ROLES_AGENTS.md`
- `07_MODELE_SCENARIO_DOSSIER_DISPARU.md`
- `08_PROCHAINES_ACTIONS.md`
- `09_DECISIONS_LOG.md`

### Action 4 — Créer le squelette technique V0.1

Statut : fait.

Livrables :

- application React + Vite + TypeScript ;
- Tailwind CSS configuré ;
- dossiers `src/components`, `src/engine`, `src/data/scenarios` et `src/types` ;
- page d’accueil minimale ;
- écran de briefing minimal ;
- document `docs/architecture.md`.

### Action 5 — Créer le moteur minimal de scénario V0.2

Statut : fait.

Livrables :

- types `Scenario`, `Location`, `Character`, `InvestigationDocument`, `InventoryObject`, `Puzzle` et `Hint` ;
- scénario enrichi “Le dossier disparu” ;
- loader local simple ;
- affichage des lieux, personnages et documents ;
- navigation accueil / briefing / enquête.

## 4. Action immédiate

### Action 6 — Créer la première enquête minimale V0.3

Statut : à faire.

Agent concerné : Codex.

Objectif :

Transformer la structure actuelle en première enquête minimale plus jouable.

Contenu attendu :

- contenu narratif resserré pour trois lieux principaux ;
- premiers documents réellement exploitables ;
- premières contradictions à repérer ;
- progression simple entre consultation et déduction ;
- préparation des énigmes sans système avancé.

À ne pas faire encore :

- inventaire complet ;
- système d’indices complet ;
- accusation finale enrichie ;
- deuxième scénario ;
- animation ;
- backend.

## 5. Prompt prévu pour la prochaine étape

```text
Agis comme architecte technique du projet `enquete-fle`.

Lis d’abord tous les documents du dossier `docs/agent-context`.

Crée la V0.3 : première enquête minimale de “Le dossier disparu”.

Contraintes :
- jeu 2D statique
- aucune animation
- pas de backend
- pas de moteur de jeu lourd
- scénarios séparés du moteur
- architecture simple, maintenable et progressive

Crée :
- une progression minimale exploitable entre les lieux, documents et personnages déjà affichés ;
- des contenus plus précis pour permettre une première déduction ;
- deux énigmes simples comme étapes de raisonnement, sans moteur avancé ;
- une documentation sobre de l’avancement.

Ne crée pas encore l’inventaire complet.
Ne crée pas encore le système d’indices complet.
Ne crée pas encore l’accusation finale enrichie.
Ne crée pas de deuxième scénario.
Ne crée aucune animation.

À la fin, indique :
- les fichiers créés ;
- les fichiers modifiés ;
- les choix techniques faits ;
- les commandes à lancer ;
- ce qui reste à faire.
```
