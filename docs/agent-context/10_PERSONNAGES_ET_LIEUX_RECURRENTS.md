# Personnages et lieux récurrents — Jeu d’enquête FLE/FOU

## 1. Objet du document

Ce document définit la logique des personnages récurrents et des lieux récurrents dans le projet `enquete-fle`.

Il sert de référence à l’agent chef d’orchestre, à Codex, à Antigravity, à l’agent scénariste et à tout agent travaillant sur l’identité narrative ou visuelle du jeu.

## 2. Principe général

Le jeu doit pouvoir construire progressivement un univers reconnaissable.

Pour cela, certains personnages et certains lieux pourront revenir d’un scénario à l’autre.

Ces éléments récurrents ne doivent pas être figés trop tôt, mais ils doivent être prévus dans l’architecture du projet.

Le jeu doit donc distinguer :

- le moteur du jeu ;
- les scénarios ;
- les personnages récurrents ;
- les lieux récurrents ;
- les personnages spécifiques à un scénario ;
- les lieux spécifiques à un scénario ;
- les assets visuels associés.

## 3. Pourquoi prévoir des personnages récurrents ?

Les personnages récurrents permettent :

- de donner une continuité au jeu ;
- de créer une familiarité pour les joueurs ;
- de renforcer l’identité narrative ;
- de rendre l’univers plus mémorable ;
- de faciliter la création de scénarios futurs ;
- d’associer progressivement des portraits stables aux personnages ;
- de créer des fonctions narratives reconnaissables.

Un personnage récurrent peut revenir dans plusieurs enquêtes avec un rôle différent ou légèrement évolutif.

Exemples possibles :

- une secrétaire ;
- un professeur ;
- un étudiant régulier ;
- une responsable administrative ;
- un témoin souvent présent ;
- un personnage ressource ;
- un personnage ambigu ;
- un personnage spécialiste des documents.

## 4. Pourquoi prévoir des lieux récurrents ?

Les lieux récurrents permettent :

- de construire une géographie stable du jeu ;
- de donner au joueur des repères ;
- de renforcer l’identité visuelle ;
- de réutiliser des décors ;
- de faciliter la production de nouveaux scénarios ;
- de créer une atmosphère familière.

Un lieu récurrent peut accueillir différentes fonctions selon les enquêtes.

Exemples possibles :

- secrétariat ;
- salle informatique ;
- couloir principal ;
- bibliothèque ;
- salle de classe ;
- café voisin ;
- résidence étudiante ;
- hall d’accueil ;
- bureau d’un professeur.

## 5. Principe de non-exclusivité

Les personnages et lieux récurrents ne doivent pas limiter la créativité des scénarios.

Chaque scénario pourra utiliser :

- des personnages récurrents ;
- des lieux récurrents ;
- des personnages propres au scénario ;
- des lieux propres au scénario.

Le répertoire récurrent est une base d’univers, non une contrainte fermée.

## 6. Traitement séparé

Les personnages et lieux récurrents doivent être traités séparément des scénarios.

Cela signifie qu’ils devront être définis dans des fichiers ou structures spécifiques, afin de pouvoir être modifiés, enrichis ou illustrés sans réécrire tous les scénarios.

Structure technique possible à terme :

```text
src/data/world/
  recurringCharacters.ts
  recurringLocations.ts

src/data/scenarios/
  dossierDisparu.ts
