# Prochaines actions — Jeu d’enquête FLE/FOU

## 1. Objet du document

Ce document indique les prochaines actions concrètes du projet `enquete-fle`.

Une prochaine action doit rester limitée, claire, vérifiable et utile.

## 2. État actuel

Version actuelle : V0.3 — première boucle d’enquête minimale.

Le dépôt GitHub existe.

Le dossier documentaire `docs/agent-context/` est constitué pour piloter la suite.

L’application React/Vite/TypeScript existe, avec Tailwind CSS, une page d’accueil, un écran de briefing et un écran d’enquête. Le joueur peut consulter les documents, résoudre deux énigmes simples et débloquer de nouvelles pistes.

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

### Action 6 — Créer la première enquête minimale V0.3

Statut : fait.

Livrables :

- scénario enrichi avec documents utiles ;
- deux objets préparatoires ;
- deux énigmes simples ;
- progression locale ;
- feedback sobre ;
- déblocage de documents.

## 4. Action immédiate

### Action 7 — Créer l’inventaire minimal V0.4

Statut : à faire.

Agent concerné : Codex.

Objectif :

Rendre les objets préparatoires visibles et utiles sans créer un système complexe.

Contenu attendu :

- affichage sobre des objets ;
- obtention d’un objet ;
- statut simple trouvé / utilisé ;
- utilisation d’un objet pour débloquer un document ou une piste ;
- maintien d’un nombre d’objets limité.

À ne pas faire encore :

- système d’indices complet ;
- accusation finale enrichie ;
- deuxième scénario ;
- animation ;
- backend.

## 5. Prompt prévu pour la prochaine étape

```text
Agis comme architecte technique du projet `enquete-fle`.

Lis d’abord tous les documents du dossier `docs/agent-context`.

Crée la V0.4 : inventaire minimal et objets utiles.

Contraintes :
- jeu 2D statique
- aucune animation
- pas de backend
- pas de moteur de jeu lourd
- scénarios séparés du moteur
- architecture simple, maintenable et progressive

Crée :
- un affichage sobre des objets ;
- une obtention locale d’objet ;
- un statut trouvé / utilisé ;
- une utilisation simple d’objet pour débloquer une piste ;
- une documentation sobre de l’avancement.

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
