# Dialogue et temoignages V0.4

## Principe

La V0.4 distingue deux formes de parole dans le scenario prototype :

- la fiche personnage affiche une parole directe ;
- le document de temoignage affiche un discours indirect ou un compte rendu.

Cette regle donne plus de presence aux personnages sans modifier la mecanique principale de l'enquete.

## Fiche personnage

La fiche personnage utilise `Character.directSpeech`.

Le texte doit etre formule comme une parole immediatement adressee au joueur :

```text
Je suis passe au secretariat vers 16h30 pour demander une attestation...
```

Cette parole peut rester courte et accessible. Elle sert l'immersion et la memorisation des informations importantes.

## Document de temoignage

Le document de temoignage reste une piece du dossier. Il utilise un compte rendu au discours indirect :

```text
Fahad explique qu'il est passe au secretariat vers 16h30 pour demander une attestation...
```

Le document doit rester exploitable dans les enigmes. Pour l'enigme 2, le document `temoignage-fahad` conserve l'information centrale : Fahad affirme etre parti tout de suite apres son passage au secretariat.

## Objectif FLE/FOU

La distinction soutient discretement un travail sur le passage du discours direct au discours indirect.

Cet objectif ne doit pas etre nomme comme exercice dans l'interface joueur. Le joueur rencontre simplement deux formes naturelles d'une meme information :

- parole du personnage ;
- trace ecrite ou administrative du dossier.

## Contraintes narratives

Le discours indirect ne doit pas interpreter l'enquete a la place du joueur.

Les temoignages doivent rester prudents :

- pas d'accusation directe si les preuves ne la permettent pas ;
- pas d'objet materiel important introduit seulement par un temoignage ;
- pas de formulation qui rend Fahad explicitement coupable ;
- pas de contradiction pedagogique artificielle.

## Etat V0.4

Personnages concernes :

- Chen ;
- Fahad ;
- Xiaoyu ;
- Madame Delorme ;
- Monsieur Armand.

Documents de temoignage reformules :

- `temoignage-chen` ;
- `temoignage-xiaoyu` ;
- `temoignage-fahad`.

Cette evolution ne cree pas de nouvelle enigme, de systeme d'indices, d'accusation finale, de nouveau lieu ou de nouveau personnage.
