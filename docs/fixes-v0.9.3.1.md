# Corrections V0.9.3.1

## Résumé

La V0.9.3.1 est une micro-version de synchronisation documentaire et de petites corrections non fonctionnelles. Elle ne modifie ni le gameplay, ni l'enquête, ni les énigmes, ni l'inventaire, ni la résolution finale.

## Corrections appliquées

- `package.json` et `package-lock.json` indiquent désormais `"version": "0.9.3"`.
- Les documents d'état récupérés depuis GitHub indiquent bien V0.9.3 comme version actuelle.
- `docs/architecture.md` est synchronisé avec l'état V0.9.3 : boucle complète, départ à l'Accueil, inventaire dynamique, résolution finale prudente, portraits harmonisés, vignettes temporaires de lieux et icônes d'objets.
- La fiche élève remplace "Monsieur Armand" par "M. Rodolphe".
- La fiche enseignant signale que la fiche élève imprimable existe maintenant en document externe V0.7.1.
- Le cadrage `object-top` dans `CharacterDetail.tsx` est conservé : il améliore le cadrage vertical des portraits sans changer la structure de la fiche personnage.

## Assets lourds

L'audit V0.9.3 signale que plusieurs portraits sont lourds pour un affichage UI. Aucune image n'est compressée, régénérée ou modifiée en V0.9.3.1.

Cette optimisation est reportée afin d'éviter de dégrader les portraits sans validation visuelle. Une future passe pourra produire des versions web plus légères ou redimensionnées, tout en conservant les fichiers sources si nécessaire.

## Limites volontaires

La V0.9.3.1 ne crée pas :

- nouvelle fonctionnalité ;
- nouvelle mécanique ;
- nouveau scénario ;
- nouvel asset ;
- refonte graphique ;
- modification narrative.

## Validation attendue

La micro-version est considérée comme réussie si :

- le projet compile ;
- les documents actifs ne présentent plus V0.9.0 comme version actuelle ;
- la fiche élève utilise M. Rodolphe ;
- les mentions d'Armand restantes appartiennent à des documents historiques ou à l'audit qui les signale ;
- aucune mécanique de jeu n'a été modifiée.
