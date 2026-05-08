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
```

## 7. Réserve évolutive

Les personnages et lieux récurrents constituent une réserve d'univers.

Cette réserve sert à proposer des repères narratifs possibles pour les scénarios futurs. Elle ne doit pas être utilisée comme une liste obligatoire à intégrer dans chaque enquête.

Un scénario doit donc distinguer :

- personnage récurrent disponible : personnage présent dans la réserve, mais pas nécessairement mobilisé ;
- personnage effectivement utilisé dans un scénario : personnage récurrent choisi parce qu'il sert l'enquête, le lieu, le registre de langue ou la progression ludique ;
- personnage ponctuel créé pour une enquête : personnage propre à un scénario, sans obligation de revenir ensuite.

La même logique s'applique aux lieux :

- lieu récurrent disponible ;
- lieu effectivement utilisé dans un scénario ;
- lieu ponctuel créé pour une enquête.

## 8. Règle de non-systématicité

Les agents ne doivent jamais utiliser automatiquement tous les personnages ou tous les lieux de la réserve.

Avant d'intégrer un personnage ou un lieu récurrent dans un scénario, l'agent doit vérifier :

- son utilité narrative ;
- son utilité pédagogique ;
- son utilité ludique ;
- sa cohérence avec la chronologie et les preuves ;
- le risque d'alourdir inutilement l'enquête.

Si aucun de ces critères n'est satisfait, le personnage ou le lieu doit rester dans la réserve.

## 9. Usage pertinent des informations associées

Les informations associées à un personnage récurrent sont des ressources, pas des contraintes définitives.

Un agent doit :

- sélectionner seulement les informations utiles au scénario ;
- adapter le niveau de détail au contexte B1/B2 ;
- éviter de figer définitivement le personnage trop tôt ;
- éviter de transformer une fiche de réserve en fiche exhaustive dans l'interface joueur ;
- laisser de la marge pour de futures évolutions.

Un détail biographique, professionnel ou relationnel ne doit être utilisé que s'il aide vraiment l'enquête, la compréhension, l'immersion ou l'objectif FLE/FOU.

## 10. Réserve initiale de personnages

Réserve disponible à ce stade :

- Delphine ;
- Yaqiu ;
- Thi-Thai ;
- François ;
- Rodolphe ;
- Heïdi ;
- Clément ;
- Marine ;
- Annie ;
- Mickaël ;
- Candice ;
- Chen ;
- Xiaotong.

Cette liste pourra évoluer. Elle peut accueillir de nouveaux personnages, fusionner certains rôles ou laisser certains noms inutilisés pendant plusieurs scénarios.

## 11. Réserve initiale de lieux

Réserve disponible à ce stade :

- ISPA Amiens ;
- accueil ;
- salles de classe ;
- salle informatique ;
- couloir ;
- administration ;
- salle des profs ;
- cafétéria ;
- cave ;
- bibliothèque universitaire ;
- restaurant universitaire ;
- café ;
- salle de gym.

Cette liste pourra évoluer selon les besoins des scénarios et de l'identité visuelle du jeu.

## 12. Règle pour les scénarios futurs

Lorsqu'un agent crée ou modifie un scénario, il peut consulter cette réserve, mais il ne doit pas remplacer les personnages existants sans demande explicite.

La présence d'un nom dans la réserve ne signifie pas qu'il doit apparaître dans `Le dossier disparu`.

Exemple validé : Delphine est mobilisée dans `Le dossier disparu` parce que son rôle au secrétariat et en organisation administrative sert directement l'enquête. Cette utilisation ne rend pas les autres personnages de la réserve obligatoires.

Pour chaque utilisation d'un personnage ou lieu récurrent, l'agent doit pouvoir formuler une raison simple :

- pourquoi ce personnage est utile ici ;
- pourquoi ce lieu est utile ici ;
- ce que son usage apporte au joueur ;
- ce qui doit rester implicite ou non utilisé.
