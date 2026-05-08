# Corrections de jouabilité V0.5.1

Suite à l'audit de jouabilité de la V0.5, plusieurs ajustements ciblés ont été effectués pour améliorer l'expérience utilisateur et la cohérence narrative.

## 1. Utilisation contextuelle des objets d'accès

*(Cette correction a été traitée lors d'une intervention séparée)*
- Le badge visiteur n'est plus utilisable de manière générique depuis l'inventaire.
- L'utilisation se fait dorénavant directement depuis l'écran du lieu "Salle informatique" (qui apparaît comme fermé).
- Cela renforce la logique spatiale et narrative.

## 2. Ajustement de l'énigme de contradiction

**Problème :** Le "Brouillon de mail" était proposé parmi les pièces sélectionnables de l'énigme de contradiction, alors que ce document n'est débloqué *qu'après* la résolution de cette même énigme. Cela brisait la cohérence et révélait l'existence d'une piste trop tôt.

**Correction :** Le "Brouillon de mail" a été retiré de la liste des pièces proposées pour l'énigme de contradiction (`contradiction-fahad`).
- La combinaison correcte reste : *Témoignage de Fahad* + *Historique d'impression*.
- Le joueur ne voit plus de document qu'il n'est pas censé connaître.

## 3. Amélioration du guidage après la chronologie

**Problème :** Après avoir validé la chronologie, le joueur pouvait manquer de repères clairs sur les prochaines actions à effectuer (récupérer le badge, ouvrir la salle informatique, trouver l'historique d'impression).

**Correction :** Le feedback de succès de l'énigme `chronologie-initiale` a été réécrit pour être plus guidant sans donner directement la solution :
> "Chronologie validée. Certains éléments indiquent qu’il faut maintenant vérifier les accès aux salles et les traces laissées après le passage au secrétariat."

## Conclusion

L'enquête est désormais plus cohérente : elle ne spoile plus de documents futurs et guide mieux le joueur dans la phase intermédiaire. Le projet est prêt pour le développement de la V0.6 (conclusion de l'enquête).
