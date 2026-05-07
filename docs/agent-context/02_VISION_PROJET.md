# Vision du projet — Jeu d’enquête FLE/FOU

## Nom provisoire du projet

`enquete-fle`

Le nom définitif du jeu pourra être choisi plus tard. Pour le moment, le nom du dépôt désigne le projet de manière fonctionnelle.

## Intention générale

Le projet consiste à créer un jeu d’enquête en ligne destiné à des apprenants de français langue étrangère et de français sur objectif universitaire, principalement de niveau B1/B2.

Le jeu doit être jouable sur navigateur, en 2D statique, sans animation, avec une interface sobre, lisible et exploitable en classe.

Le joueur doit incarner un enquêteur ou une petite cellule d’enquête. Il devra explorer des lieux, consulter des documents, lire ou écouter des témoignages, collecter quelques objets, repérer des contradictions, construire des hypothèses et résoudre une affaire.

## Principe fondamental

La langue française doit être un outil de déduction.

Le jeu ne doit pas présenter des exercices de grammaire décorés par une intrigue. Il doit proposer une véritable enquête dans laquelle la compréhension fine de la langue permet d’avancer.

Le joueur ne doit pas avoir l’impression de répondre à une fiche scolaire. Il doit avoir l’impression de mener une enquête.

## Formule directrice

> Faire du français non pas un prétexte pédagogique, mais la condition même de l’enquête.

## Genre du jeu

Le jeu relève d’un genre hybride :

- jeu d’enquête documentaire ;
- escape game léger ;
- fiction interactive ;
- outil pédagogique FLE/FOU ;
- support de compréhension, de déduction et d’argumentation.

Il ne s’agit pas d’un escape game pur, car la finalité principale n’est pas de sortir d’une pièce ou d’ouvrir une succession de cadenas.

Il ne s’agit pas non plus d’un simple jeu narratif, car le joueur doit manipuler des preuves, des objets, des documents et des hypothèses.

Le modèle recherché est celui d’une enquête courte, dense, claire et stimulante.

## Public cible

Le jeu vise principalement :

- des apprenants FLE de niveau B1/B2 ;
- des étudiants internationaux en préparation universitaire ;
- des groupes de deux à quatre étudiants ;
- des classes en semi-autonomie ;
- des enseignants souhaitant travailler la langue à partir d’une activité motivante.

Le jeu doit pouvoir être utilisé :

- en salle de classe ;
- sur ordinateur ;
- avec vidéoprojecteur ;
- en petits groupes ;
- en autonomie guidée ;
- comme support de prolongement oral ou écrit.

## Objectifs pédagogiques généraux

Le jeu doit permettre de travailler notamment :

- la compréhension écrite ;
- la compréhension de témoignages ;
- la reconstitution d’une chronologie ;
- la distinction entre informations explicites et implicites ;
- l’identification de contradictions ;
- la formulation d’hypothèses ;
- la justification d’un raisonnement ;
- la comparaison de versions divergentes ;
- la prise de notes ;
- la médiation orale en groupe ;
- l’argumentation finale.

## Objectifs linguistiques possibles

Selon les scénarios, le jeu pourra intégrer :

- passé composé ;
- imparfait ;
- plus-que-parfait ;
- conditionnel présent ;
- conditionnel passé ;
- futur simple ;
- futur antérieur ;
- discours rapporté ;
- voix passive ;
- connecteurs de cause ;
- connecteurs de conséquence ;
- opposition et concession ;
- hypothèse ;
- modalisation ;
- lexique administratif ;
- lexique universitaire ;
- lexique de la ville ;
- registres de langue ;
- compréhension de mails, messages, formulaires, témoignages, plannings, rapports.

Ces objectifs doivent rester intégrés à l’enquête.

## Exemple de transformation pédagogique

À éviter :

> Complétez les verbes au passé composé ou à l’imparfait.

À privilégier :

> Trois témoins racontent la même scène. L’un d’eux se trompe ou ment. Comparez les temps utilisés, les horaires et les actions décrites pour trouver la contradiction.

Dans ce second cas, la grammaire sert la déduction.

## Contraintes techniques

Le jeu doit respecter les contraintes suivantes :

- application web ;
- 2D uniquement ;
- aucune animation ;
- pas de moteur de jeu lourd ;
- pas de 3D ;
- pas de backend dans la première version ;
- architecture simple ;
- code maintenable ;
- scénarios séparés du moteur de jeu ;
- possibilité d’ajouter de nouvelles enquêtes sans réécrire le moteur.

Stack recommandée :

- React ;
- Vite ;
- TypeScript ;
- Tailwind CSS ;
- Zustand ou Context React ;
- données de scénario en TypeScript ou JSON ;
- sauvegarde locale par localStorage.

## Contraintes graphiques

L’espace graphique doit être pensé dès le début.

Cela signifie que l’interface doit prévoir :

- une zone pour la carte ou les lieux ;
- une zone pour les documents ;
- une zone pour les suspects ;
- une zone pour l’inventaire ;
- une zone pour les indices ;
- une zone pour le carnet d’enquête ;
- une zone pour l’accusation finale.

Cependant, la véritable identité graphique du jeu ne doit pas être figée immédiatement.

Les personnages, objets, graphismes d’interface, textures, portraits et éléments visuels définitifs seront conçus dans une phase ultérieure, après validation du gameplay et de l’ergonomie.

## Philosophie graphique provisoire

Dans les premières versions, le graphisme doit rester :

- sobre ;
- clair ;
- fonctionnel ;
- compatible avec une utilisation en classe ;
- suffisamment structuré pour accueillir une identité future.

Le style provisoire peut évoquer :

- un dossier d’enquête ;
- un bureau administratif ;
- une archive ;
- un polar sobre ;
- un environnement universitaire.

## Place des objets

Le jeu doit inclure un nombre restreint d’objets.

Les objets ne doivent pas être décoratifs. Ils doivent avoir une fonction dans l’enquête.

Ils peuvent servir à :

- débloquer un lieu ;
- ouvrir un document ;
- convaincre un personnage ;
- vérifier une hypothèse ;
- fournir une preuve ;
- établir une contradiction ;
- accéder à l’accusation finale.

Le joueur doit pouvoir obtenir des objets :

- par exploration ;
- par résolution d’énigme ;
- par dialogue ;
- par combinaison d’indices ;
- par choix stratégique.

Le nombre d’objets doit rester limité : idéalement trois à six objets par enquête.

## Difficulté recherchée

Le jeu doit être exigeant sans être opaque.

La difficulté doit venir :

- de la compréhension fine ;
- du croisement des informations ;
- de la sélection des preuves ;
- des fausses pistes crédibles ;
- de la construction d’une hypothèse ;
- de la justification finale.

La difficulté ne doit pas venir :

- d’une interface confuse ;
- d’un objet invisible ;
- d’une consigne ambiguë ;
- d’une réponse impossible à deviner ;
- d’un code arbitraire ;
- d’une surcharge documentaire.

## Système d’aide

Chaque énigme importante doit prévoir un système d’indices gradués :

1. orientation légère ;
2. aide au raisonnement ;
3. déblocage explicite.

L’objectif est d’éviter qu’un joueur reste bloqué, sans supprimer le sentiment de réussite.

## Première enquête prototype

La première enquête recommandée est :

**Le dossier disparu**

Cadre :

- ISPA ;
- Amiens ;
- secrétariat ;
- salle informatique ;
- couloir ;
- bibliothèque ;
- café voisin.

Intrigue :

Un dossier important pour une candidature universitaire a disparu. Plusieurs personnes sont passées dans le bâtiment. Le joueur doit reconstituer les faits, identifier les contradictions et déterminer ce qui s’est réellement passé.

Objectifs pédagogiques possibles :

- chronologie ;
- passé composé / imparfait ;
- plus-que-parfait ;
- conditionnel d’hypothèse ;
- connecteurs de justification ;
- compréhension de documents administratifs.

## Logique de progression du projet

Le projet doit avancer par versions successives.

Priorité absolue :

> Obtenir rapidement un prototype jouable, même sobre, avant de chercher une identité graphique définitive ou des fonctionnalités avancées.

Ordre général :

1. cadrage documentaire ;
2. squelette technique ;
3. moteur de scénario ;
4. première enquête minimale ;
5. inventaire ;
6. système d’indices ;
7. amélioration UX ;
8. mode enseignant ;
9. identité graphique ;
10. second scénario ;
11. version publiable.

## Critère de réussite principal

Le jeu sera réussi si un étudiant oublie momentanément qu’il travaille la grammaire et se met à raisonner ainsi :

> “Cette phrase change tout. Ce témoin ne peut pas dire la vérité.”

C’est à ce moment que le projet atteint son objectif : faire de la langue un véritable instrument d’enquête.
