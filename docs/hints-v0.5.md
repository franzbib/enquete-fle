# Indices progressifs V0.5

## Objectif

La V0.5 ajoute des indices progressifs aux énigmes principales du scénario `Le dossier disparu`.

Les indices aident le joueur à relire, comparer et raisonner sans résoudre l'enquête à sa place.

## Principe

Chaque énigme peut proposer jusqu'à trois indices :

- indice 1 : orientation légère ;
- indice 2 : aide plus précise vers les bons documents, lieux ou horaires ;
- indice 3 : aide forte, mais sans réponse complète.

Les indices apparaissent un par un quand le joueur clique sur `Voir un indice`.

Après le troisième indice, l'interface indique que tous les indices disponibles sont affichés.

## Choix technique

Les indices sont déclarés directement dans les données de scénario avec `Puzzle.hints`.

L'état d'affichage reste local à React :

- `revealedHintCounts` conserve le nombre d'indices affichés pour chaque énigme ;
- aucune sauvegarde locale n'est créée ;
- aucun backend n'est ajouté ;
- aucun score n'est calculé.

Cette solution reste volontairement simple pour le prototype.

## Règles de rédaction

Un indice peut :

- inviter à relire un témoignage ;
- attirer l'attention sur un horaire ;
- demander de comparer deux pièces du dossier ;
- rappeler la différence entre ce qui est dit et ce qui est prouvé ;
- encourager une interprétation prudente.

Un indice ne doit pas :

- accuser directement Fahad ;
- révéler la solution finale ;
- introduire un fait nouveau ;
- donner une combinaison sous forme de réponse à cliquer ;
- transformer l'énigme en exercice scolaire.

## Énigme 1 : chronologie

Indices ajoutés :

1. Commencez par repérer les heures et les expressions de temps dans les documents.
2. Le planning donne deux repères sûrs : Chen vérifie son dossier avant le passage de Fahad.
3. Relisez ensuite l'observation de Xiaoyu : elle se place après le passage de Fahad au secrétariat.

Ces indices travaillent implicitement le repérage temporel et l'ordre des événements.

## Énigme 2 : contradiction

Indices ajoutés :

1. Relisez ce que Fahad dit de son départ.
2. Cherchez une trace qui indique une heure précise après son passage au secrétariat.
3. Comparez ce que Fahad affirme avec une trace technique de la salle informatique.

Ces indices guident vers la comparaison entre témoignage et trace technique, sans écrire directement la réponse sous forme de consigne.

## Limites volontaires

La V0.5 ne crée pas :

- score ;
- pénalité ;
- mode enseignant ;
- sauvegarde d'indices ;
- accusation finale ;
- système d'aide adaptatif ;
- nouveau scénario.

L'objectif est seulement d'éviter les blocages dans les deux énigmes principales.
