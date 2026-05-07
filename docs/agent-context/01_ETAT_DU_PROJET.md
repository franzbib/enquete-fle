# État du projet — Jeu d’enquête FLE/FOU

## Version actuelle

V0.1 — Squelette technique initial créé.

Le dépôt GitHub existe.

Le dossier `docs/agent-context/` contient désormais les documents fondamentaux nécessaires au pilotage du projet par agents IA.

Le projet technique minimal existe.

## Dépôt

Nom du dépôt : `enquete-fle`

URL du dépôt : `https://github.com/franzbib/enquete-fle`

## Vision générale validée

Le projet consiste à créer un jeu d’enquête FLE/FOU en ligne, jouable sur navigateur, en 2D statique, sans animation, destiné à des apprenants de français de niveau B1/B2.

Le jeu doit proposer une enquête documentaire : le joueur explore des lieux, consulte des documents, interroge des personnages, collecte un nombre restreint d’objets, repère des contradictions, formule des hypothèses et résout une affaire.

La langue française doit être un outil de déduction. Les objectifs pédagogiques doivent rester intégrés au jeu et ne pas apparaître comme des exercices scolaires isolés.

## Principe directeur

Le joueur doit avoir l’impression de mener une enquête, non de remplir une fiche de grammaire.

Les compétences linguistiques doivent servir à :

- comprendre des témoignages ;
- reconstituer une chronologie ;
- comparer des versions contradictoires ;
- interpréter des documents ;
- utiliser des objets comme preuves ;
- formuler une hypothèse ;
- justifier une accusation.

## Contraintes validées

- Jeu en ligne.
- 2D uniquement.
- Aucune animation.
- Interface sobre et lisible.
- Développement progressif.
- Architecture simple et maintenable.
- Pas de backend dans la première version.
- Pas de moteur de jeu lourd.
- Graphisme pensé dès le départ, mais identité graphique finale repoussée à une phase ultérieure.
- Objets peu nombreux, utiles et liés à la logique d’enquête.
- Première enquête prototype : “Le dossier disparu”.

## Documents déjà produits hors dépôt

Les documents suivants existent déjà sous forme de dossier Word ou de notes préparatoires :

- cahier des charges général ;
- feuille de route progressive ;
- prompts Codex / Antigravity ;
- modèle de scénario “Le dossier disparu” ;
- document sur l’espace graphique et l’identité visuelle progressive ;
- analyses de jeux d’enquête courts ;
- analyses d’escape games pédagogiques existants ;
- plan d’exploitation agentique du projet ;
- définition du rôle de l’agent chef d’orchestre.

Ces documents doivent progressivement être intégrés ou résumés dans le dossier :

`docs/agent-context/`

## Documents déjà présents dans le dépôt

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

## Documents à créer prochainement

Aucun document fondamental supplémentaire n’est nécessaire avant la création du squelette technique.

Des documents complémentaires pourront être ajoutés plus tard :

- documentation d’architecture ;
- changelog ;
- liste des problèmes connus ;
- rapport de tests ;
- documentation enseignant.

## Ce qui est validé conceptuellement

Le jeu sera un jeu d’enquête documentaire FLE/FOU, et non un escape game pur.

Il devra combiner :

- lieux explorables ;
- personnages suspects ;
- documents d’enquête ;
- témoignages ;
- objets à obtenir ;
- indices gradués ;
- énigmes de déduction ;
- accusation finale argumentée.

Les objets devront pouvoir être obtenus :

- par exploration ;
- par résolution d’énigme ;
- par dialogue ;
- par combinaison d’indices ;
- par choix stratégique.

## Ce qui est fait techniquement

- Squelette React/Vite/TypeScript.
- Installation et configuration Tailwind CSS.
- Structure `/src`.
- Dossiers `src/components`, `src/engine`, `src/data/scenarios` et `src/types`.
- Page d’accueil minimale.
- Écran de briefing minimal pour “Le dossier disparu”.
- Documentation technique `docs/architecture.md`.

## Ce qui n’est pas encore fait

- Moteur de scénario.
- Système d’inventaire.
- Système d’indices.
- Énigmes.
- Première enquête jouable.
- Mode enseignant.
- Tests.
- Déploiement.

## Priorité actuelle

Passer à la V0.2 : créer un moteur minimal de scénario capable de charger les données d’une enquête et d’afficher ses sections principales.

## Prochaine action recommandée

Demander à Codex de créer le moteur minimal de scénario, sans inventaire, sans système d’indices, sans accusation finale et sans deuxième scénario.

## Dernière action réalisée

Création de la V0.1 technique :

- application React + Vite + TypeScript ;
- Tailwind CSS ;
- interface minimale accueil / briefing ;
- séparation initiale entre composants, données, types et futur moteur ;
- document `docs/architecture.md`.

## Risques à surveiller

- Transformer le jeu en quiz grammatical.
- Ajouter trop tôt une identité graphique définitive.
- Ajouter trop de fonctionnalités avant un premier prototype jouable.
- Créer un inventaire trop complexe.
- Produire des énigmes arbitraires sans lien narratif.
- Laisser les agents IA modifier le projet sans documentation.
- Multiplier les scénarios avant d’avoir stabilisé le premier.
