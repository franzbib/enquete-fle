# Deuxième enquête prototype — Le message effacé — V0.11

## Intention

La V0.11 ajoute une deuxième enquête courte afin de tester réellement l'architecture multi-enquêtes sans créer de nouvelle mécanique.

`Le message effacé` est une enquête de 15 à 25 minutes. Elle reprend les mécaniques existantes :

- exploration par lieux ;
- personnages et documents contextualisés ;
- objet d'accès simple ;
- salle informatique fermée puis ouverte ;
- énigme de chronologie ;
- énigme de comparaison de pièces ;
- indices progressifs ;
- résolution finale prudente ;
- sauvegarde / chargement local par scénario avec trois slots.

Cette enquête ne remplace pas `Le dossier disparu` et ne modifie pas sa narration.

## Résumé narratif

Marine affirme avoir envoyé un message important pour confirmer une démarche universitaire. Pourtant, le secrétariat ne trouve aucun message reçu.

Le joueur doit comprendre si le message a été effacé, oublié, mal envoyé ou laissé en brouillon. La conclusion attendue reste prudente : Marine a probablement préparé le message, mais il n'a pas été envoyé correctement.

La fin est réparatrice : Delphine et M. Rodolphe aident Marine à renvoyer le message avec la pièce jointe. La demande est prise en compte.

## Objectifs FLE/FOU implicites

L'enquête travaille discrètement :

- la compréhension d'un échange de mails ;
- la distinction entre déclaration et trace numérique ;
- la reconstitution d'une chronologie numérique simple ;
- la comparaison entre témoignage et brouillon ;
- le discours indirect dans les documents de témoignage ;
- la formulation prudente d'une hypothèse ;
- le lexique administratif numérique : message, brouillon, pièce jointe, boîte de réception, session, confirmation.

Ces objectifs ne sont pas affichés comme exercices dans l'interface joueur.

## Lieux

- `accueil` : lieu secondaire, affiche d'ambiance sur les ordinateurs partagés.
- `secretariat` : vérification de la boîte de réception et badge visiteur.
- `couloir` : témoignages de Marine et Mathias, objet d'ambiance.
- `salle-informatique` : lieu verrouillé au départ, contient les traces numériques.

Les vignettes temporaires existantes sont réutilisées. Aucun nouvel asset n'est créé.

## Personnages

- Marine : étudiante concernée par le message.
- Mathias : étudiant ayant aidé à ajouter la pièce jointe.
- Delphine : secrétariat, vérifie la réception.
- M. Rodolphe : enseignant qui attendait la confirmation.

Les personnages récurrents sont utilisés avec retenue. Le scénario ne rend pas Mathias suspect et n'accuse pas Marine.

## Documents

- `Affiche — Ordinateurs partagés` : document d'ambiance.
- `Boîte de réception du secrétariat` : absence de message reçu.
- `Note de M. Rodolphe` : message attendu avant 16h00.
- `Témoignage de Marine` : elle croit avoir envoyé le message.
- `Témoignage de Mathias` : il a aidé pour la pièce jointe, sans confirmer l'envoi.
- `Historique du poste 12` : brouillon modifié à 15h36, aucune trace d'envoi confirmée.
- `Brouillon retrouvé` : message complet mais non envoyé.

La preuve décisive n'est pas un objet matériel : elle repose sur la comparaison des pièces du dossier.

## Objets

- `Badge visiteur` : objet d'accès, trouvé au secrétariat, utilisé pour ouvrir la salle informatique.
- `Post-it d'identifiant` : objet d'ambiance, sans effet de déblocage.

L'inventaire reste minimal. Aucun objet ne résout seul l'enquête.

## Énigmes

### Énigme 1 — Reconstituer la chronologie numérique

Le joueur remet trois événements dans l'ordre :

1. Marine prépare le message depuis le poste 12.
2. Le poste 12 indique un brouillon modifié à 15h36.
3. Le secrétariat ne trouve aucun message reçu de Marine.

Les indices guident vers les heures et vers la différence entre ce que Marine pense avoir fait et ce que la trace montre.

### Énigme 2 — Comparer les pièces du message

Le joueur sélectionne deux pièces :

- `Témoignage de Marine` ;
- `Brouillon retrouvé`.

Interprétation correcte :

> Marine a probablement préparé le message, mais il n'a pas été envoyé correctement.

Les mauvaises interprétations accusent trop directement Mathias ou Delphine. Le feedback rappelle que les preuves ne permettent pas d'affirmer une suppression volontaire.

## Résolution finale

Hypothèse correcte :

> Marine a probablement rédigé le message, mais il est resté dans les brouillons ou n'a pas été envoyé correctement.

Pièces justificatives principales :

- `Témoignage de Marine` ;
- `Brouillon retrouvé` ;
- `Historique du poste 12`.

La `Boîte de réception du secrétariat` et le `Témoignage de Mathias` peuvent soutenir le raisonnement, mais ne sont pas les trois pièces attendues par la résolution finale.

## Sauvegarde locale

La sauvegarde explicite V0.10.3 fonctionne par scénario et par slot.

Exemples de clés attendues :

- `enquete-fle:progress:le-dossier-disparu:slot:1` ;
- `enquete-fle:progress:le-message-efface:slot:1`.

Les sauvegardes des deux enquêtes ne doivent pas interférer.

## Limites volontaires

La V0.11 ne crée pas :

- de nouvelle mécanique ;
- de deuxième enquête longue ;
- de backend ;
- de compte utilisateur ;
- de mode enseignant intégré ;
- de nouveaux assets définitifs ;
- d'éditeur de scénario.

Le but est de valider le cadre multi-enquêtes avec un prototype court.

## Tests effectués

Commande exécutée :

```powershell
npm.cmd run build
```

Résultat :

- compilation TypeScript réussie ;
- build Vite réussi.
- test navigateur automatisé : les deux enquêtes apparaissent sur l'accueil ;
- test navigateur automatisé : `Le dossier disparu` ouvre toujours son briefing ;
- test navigateur automatisé : `Le message effacé` se lance, ouvre la salle informatique avec le badge, affiche le brouillon et l'historique, valide les deux énigmes, valide la résolution finale et crée une clé `enquete-fle:progress:le-message-efface:slot:1`.

Tests manuels recommandés :

1. Lancer l'application.
2. Vérifier que les deux enquêtes apparaissent sur l'accueil.
3. Lancer `Le dossier disparu` et vérifier qu'il reste jouable.
4. Lancer `Le message effacé`.
5. Prendre le badge au secrétariat.
6. Ouvrir la salle informatique.
7. Lire le brouillon et l'historique du poste 12.
8. Résoudre les deux énigmes.
9. Valider la résolution finale.
10. Sauvegarder dans un slot et vérifier que la clé localStorage contient `le-message-efface`.

## Prochaine étape

Avant d'étendre le contenu, il faudra auditer la V0.11 :

- robustesse du changement de scénario ;
- séparation des sauvegardes ;
- clarté de l'accueil avec deux enquêtes ;
- cohérence narrative du message effacé ;
- niveau B1/B2 des nouveaux textes.
