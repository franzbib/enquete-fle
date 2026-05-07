# Prochaines actions — Jeu d’enquête FLE/FOU

## 1. Objet du document

Ce document indique les prochaines actions concrètes du projet `enquete-fle`.

Il doit permettre à François, au chef d’orchestre et aux agents IA de savoir quoi faire sans devoir tout redéfinir à chaque session.

La règle est simple :

> Une prochaine action doit être limitée, claire, vérifiable et utile.

## 2. État actuel

Version actuelle : V0.0 — cadrage documentaire.

Le dépôt GitHub existe.

Le dossier documentaire `docs/agent-context/` est en cours de constitution.

## 3. Actions déjà réalisées

### Action 1 — Créer le dépôt GitHub

Statut : fait.

Dépôt :

`https://github.com/franzbib/enquete-fle`

### Action 2 — Créer le dossier documentaire

Statut : fait.

Dossier :

`docs/agent-context/`

### Action 3 — Créer le document de l’agent chef d’orchestre

Statut : fait.

Fichier :

`00_AGENT_CHEF_ORCHESTRE.md`

### Action 4 — Créer le document d’état du projet

Statut : fait.

Fichier :

`01_ETAT_DU_PROJET.md`

### Action 5 — Créer le document de vision du projet

Statut : fait.

Fichier :

`02_VISION_PROJET.md`

### Action 6 — Créer le cahier des charges général

Statut : fait.

Fichier :

`03_CAHIER_DES_CHARGES_GENERAL.md`

### Action 7 — Créer la feuille de route progressive

Statut : fait.

Fichier :

`04_FEUILLE_DE_ROUTE.md`

### Action 8 — Créer le document sur l’espace graphique progressif

Statut : fait.

Fichier :

`05_ESPACE_GRAPHIQUE_PROGRESSIF.md`

### Action 9 — Créer le document sur les rôles des agents

Statut : fait.

Fichier :

`06_ROLES_AGENTS.md`

### Action 10 — Créer le modèle du premier scénario

Statut : fait.

Fichier :

`07_MODELE_SCENARIO_DOSSIER_DISPARU.md`

## 4. Action immédiate

### Action 11 — Créer le journal des décisions

Statut : à faire.

Fichier à créer :

`09_DECISIONS_LOG.md`

Objectif :

Garder une trace des décisions importantes du projet, afin que les agents IA ne remettent pas sans cesse en question des choix déjà validés.

Contenu attendu :

- décisions validées ;
- raisons de ces décisions ;
- conséquences pour le projet ;
- points à réévaluer plus tard.

## 5. Action suivante

### Action 12 — Mettre à jour l’état du projet

Statut : à faire après création du journal des décisions.

Fichier à modifier :

`01_ETAT_DU_PROJET.md`

Objectif :

Indiquer que le cadrage documentaire initial est presque complet.

## 6. Action technique suivante

### Action 13 — Demander à Codex de créer le squelette technique

Statut : à faire après finalisation du dossier documentaire.

Agent concerné :

Codex.

Objectif :

Créer une première application React/Vite/TypeScript minimale.

Prompt prévu :

```text
Agis comme architecte technique du projet `enquete-fle`.

Lis d’abord tous les documents du dossier `docs/agent-context`.

Crée le squelette technique du projet.

Contraintes :
- React + Vite + TypeScript
- Tailwind CSS
- jeu 2D statique
- aucune animation
- pas de backend
- pas de moteur de jeu lourd
- scénarios séparés du moteur
- architecture simple, maintenable et progressive

Crée :
- une application Vite React TypeScript ;
- Tailwind CSS ;
- un dossier `src/components` ;
- un dossier `src/engine` ;
- un dossier `src/data/scenarios` ;
- un dossier `src/types` ;
- une page d’accueil minimale ;
- un écran de briefing minimal ;
- un document `docs/architecture.md`.

Ne crée pas encore le moteur complet.
Ne crée pas encore l’inventaire.
Ne crée pas encore l’identité graphique finale.
Ne crée aucune animation.

À la fin, indique :
- les fichiers créés ;
- les choix techniques faits ;
- les commandes à lancer ;
- ce qui reste à faire.
