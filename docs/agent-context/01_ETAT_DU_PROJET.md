# État du projet — Jeu d’enquête FLE/FOU

## Version actuelle

V0.0 — Cadrage documentaire initial.

Le dépôt GitHub existe, mais le projet technique n’est pas encore créé.

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

## Documents à créer prochainement

- `02_VISION_PROJET.md`
- `03_CAHIER_DES_CHARGES_GENERAL.md`
- `04_FEUILLE_DE_ROUTE.md`
- `05_ESPACE_GRAPHIQUE_PROGRESSIF.md`
- `06_ROLES_AGENTS.md`
- `07_MODELE_SCENARIO_DOSSIER_DISPARU.md`
- `08_PROCHAINES_ACTIONS.md`
- `09_DECISIONS_LOG.md`

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

## Ce qui n’est pas encore fait

- Squelette React/Vite/TypeScript.
- Installation Tailwind.
- Structure `/src`.
- Moteur de scénario.
- Système d’inventaire.
- Système d’indices.
- Énigmes.
- Première enquête jouable.
- Mode enseignant.
- Tests.
- Déploiement.

## Priorité actuelle

Construire progressivement le dossier documentaire du projet dans GitHub.

La priorité immédiate n’est pas encore de coder, mais de donner aux agents IA une base de vérité suffisamment claire pour éviter les dérives.

## Prochaine action recommandée

Créer le fichier :

`02_VISION_PROJET.md`

Ce fichier devra résumer la vision générale du jeu, son intention pédagogique, ses limites techniques et sa philosophie ludique.

## Dernière action réalisée

Création du fichier :

`00_AGENT_CHEF_ORCHESTRE.md`

Ce fichier définit le rôle de l’agent de pilotage global du projet.

## Risques à surveiller

- Transformer le jeu en quiz grammatical.
- Ajouter trop tôt une identité graphique définitive.
- Ajouter trop de fonctionnalités avant un premier prototype jouable.
- Créer un inventaire trop complexe.
- Produire des énigmes arbitraires sans lien narratif.
- Laisser les agents IA modifier le projet sans documentation.
- Multiplier les scénarios avant d’avoir stabilisé le premier.
