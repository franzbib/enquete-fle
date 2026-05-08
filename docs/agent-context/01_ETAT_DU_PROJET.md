# État du projet — Jeu d’enquête FLE/FOU

## Version actuelle

V0.7 — Fiche enseignant externe créée pour l'exploitation pédagogique légère.

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
- résolution finale argumentée et prudente.

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
- Écran d’enquête minimal.
- Chargement local du scénario “Le dossier disparu”.
- Affichage sobre des lieux, personnages et documents.
- Deux énigmes simples : chronologie et contradiction.
- Feedback local de progression.
- Déblocage local de documents après réussite.
- Inventaire minimal avec objets trouvés et utilisés.
- Objets observables dans les lieux.
- Badge visiteur utilisable pour débloquer la salle informatique.
- Indices progressifs pour les deux énigmes principales.
- Décor vivant contrôlé avec l'accueil et Thi-Thai.
- Résolution finale fondée sur une explication prudente et des pièces justificatives.
- Fiche enseignant V0.7 avec déroulement de classe, corrigé, prolongements FLE/FOU et points de vigilance.
- Documentation technique `docs/architecture.md`.

## Ce qui n’est pas encore fait

- Moteur de scénario complet.
- Mode enseignant.
- Fiche élève imprimable.
- Version simplifiée B1.
- Tests.
- Déploiement.

## Priorité actuelle

Préparer la suite pédagogique : fiche élève imprimable V0.7.1 ou version simplifiée B1 V0.7.2, avant un éventuel mode enseignant intégré.

## Prochaine action recommandée

Demander à Codex de créer une fiche élève imprimable ou une version B1 simplifiée des textes, sans modifier la mécanique du jeu.

## Dernière action réalisée

Création de la V0.7 :

- fiche enseignant `docs/teacher-guide-v0.7.md` ;
- présentation du scénario pour un usage FLE/FOU ;
- objectifs pédagogiques et compétences travaillées ;
- déroulement conseillé en classe ;
- aides graduées pour l'enseignant ;
- corrigé complet de l'enquête ;
- points de langue et prolongements possibles ;
- limites actuelles et étapes futures.

## Risques à surveiller

- Transformer le jeu en quiz grammatical.
- Ajouter trop tôt une identité graphique définitive.
- Ajouter trop de fonctionnalités avant un premier prototype jouable.
- Créer un inventaire trop complexe.
- Produire des énigmes arbitraires sans lien narratif.
- Laisser les agents IA modifier le projet sans documentation.
- Multiplier les scénarios avant d’avoir stabilisé le premier.
