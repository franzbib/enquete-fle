# Ajustement narratif V0.3.3 - Enigme de contradiction

## Objectif

L'enigme 2 du scenario `Le dossier disparu` ne demande plus au joueur de choisir directement une contradiction formulee par l'interface.

Elle demande maintenant de mettre en relation deux pieces du dossier, puis d'interpreter ce que cette comparaison montre.

## Regle de coherence

Une contradiction d'enquete doit etre fondee sur au moins deux pieces consultables :

- un temoignage ;
- un planning ;
- une note ;
- une trace technique ;
- un brouillon ou document numerique.

Cette logique appartient au raisonnement d'enquete, pas a l'inventaire physique. Les pieces du dossier ne sont pas des objets materiels a obtenir ou utiliser.

## Enigme 2

Pieces pertinentes :

- `temoignage-fahad` ;
- `historique-impression`.

Interpretation attendue :

La trace technique ne prouve pas que Fahad a pris le dossier. Elle montre seulement qu'il n'est probablement pas parti tout de suite apres son passage au secretariat.

## Prudence narrative

Les feedbacks ne doivent pas conclure que Fahad est coupable.

La contradiction doit rester une indication de chronologie incomplete ou problematique. La solution finale reste volontairement non revelee a ce stade.

Les traces techniques doivent creer une contradiction credible sans accuser trop directement un personnage. Pour Fahad, la trace utile est une session a son nom qui imprime `attestation_scolarite.pdf` a 16h48, pas un document appartenant explicitement a Chen.

## Interface joueur

Les donnees internes peuvent conserver des liens deduits comme `relatedLocationIds`, `relatedCharacterIds` ou `relatedDocumentIds`.

L'interface joueur doit afficher les faits accessibles, pas les metadonnees deductives. Une fiche personnage indique donc les lieux ou le personnage est rencontre physiquement. Les autres liens doivent etre decouverts par les documents, les traces techniques ou les deductions.

## Temoignages et objets

Un temoignage ne doit pas introduire un indice materiel important si cet indice n'est pas observable, documente ou recuperable ailleurs dans l'enquete.

Pour la V0.3.3, la declaration de M. Armand ne mentionne donc pas de pochette pres de l'imprimante. Il constate seulement que l'imprimante avait deja ete utilisee et qu'il n'a vu personne pres du poste 03.

## Salle informatique

La salle informatique peut rester provisoirement `locked` et `available` en V0.3.3.

Le verrouillage reel par objet d'acces est reporte a la V0.4, avec l'inventaire et les objets fonctionnels. La V0.3.3 ne cree ni badge fonctionnel, ni systeme de deverrouillage, ni inventaire physique.

## Limite volontaire

Pour la V0.3.3, la liste des pieces proposees dans l'enigme est definie localement dans le scenario.

Un futur dossier de preuves pourra filtrer plus finement les pieces selon les documents vraiment consultes, mais cela est reporte a une version ulterieure pour eviter de creer un systeme complet avant l'inventaire, les indices et l'accusation finale.
