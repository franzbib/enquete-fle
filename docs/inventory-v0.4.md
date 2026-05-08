# Inventaire minimal V0.4

## Objectif

La V0.4 rend les objets consultables et utiles sans creer un inventaire complexe.

Le joueur peut :

- observer des objets dans les lieux accessibles ;
- prendre un objet ;
- voir les objets trouves dans un panneau `Objets trouves` ;
- utiliser un objet d'acces ;
- distinguer un objet trouve, utilise ou sans utilite apparente.

## Objets du prototype

### Badge visiteur

- Lieu : secretariat.
- Type : acces.
- Action : prendre, puis utiliser depuis la salle informatique fermée.
- Effet : debloque la salle informatique.
- Statut apres usage : utilise pour acceder a la salle informatique.

### Ticket de bus

- Lieu : couloir.
- Type : preuve faible.
- Action : prendre.
- Effet V0.4 : aucun deblocage majeur.
- Fonction : enrichir la chronologie sans resoudre la contradiction principale.

### Cle USB "Exercices B1"

- Lieu : salle informatique.
- Type : ambiance.
- Action : prendre.
- Effet V0.4 : aucun.
- Fonction : donner de la vie au lieu sans accuser Fahad.

## Regles de conception

L'inventaire V0.4 reste local a l'ecran d'enquete. Il n'utilise ni sauvegarde, ni backend, ni base de donnees.

Les objets ne se combinent pas entre eux. Ils ne donnent pas de score. Ils ne servent pas encore a l'accusation finale.

Un objet d'ambiance doit etre lisible comme tel. Il peut etre pris, mais l'interface indique qu'il est sans utilite apparente pour l'instant.

## Salle informatique

La salle informatique apparait dans la liste des lieux avec le statut `Acces limite`.

Le joueur doit prendre le badge visiteur au secretariat, puis l'utiliser depuis la salle informatique. Apres cette action, la salle informatique devient disponible.

Les documents de la salle informatique restent soumis a la progression documentaire : le badge donne l'acces au lieu, mais l'historique d'impression reste debloque par l'enigme de chronologie.

## Limites volontaires

La V0.4 ne cree pas :

- systeme de combinaison d'objets ;
- inventaire physique complexe ;
- score ;
- accusation finale ;
- systeme d'indices complet ;
- sauvegarde locale ;
- backend.
