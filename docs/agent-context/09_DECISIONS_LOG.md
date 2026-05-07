# Journal des décisions — Jeu d’enquête FLE/FOU

## 1. Objet du document

Ce document garde la trace des décisions importantes prises pour le projet `enquete-fle`.

Il doit permettre :

- d’éviter de rediscuter sans cesse les mêmes choix ;
- de donner une mémoire stable aux agents IA ;
- de comprendre pourquoi certains choix ont été faits ;
- de savoir ce qui est validé, reporté ou à réévaluer plus tard.

Chaque agent travaillant sur le projet doit respecter les décisions indiquées ici.

## 2. Format des décisions

Chaque décision doit être documentée selon le modèle suivant :

```text
Date :
Décision :
Raison :
Conséquence :
Statut :
À réévaluer :
```

## 3. Décisions validées

```text
Date : 2026-05-07
Décision : La V0.1 utilise React, Vite, TypeScript et Tailwind CSS.
Raison : Cette stack répond au cahier des charges et permet un prototype navigateur simple, statique et maintenable.
Conséquence : Le projet reste sans backend, sans base de données, sans moteur de jeu lourd et sans animation.
Statut : validé
À réévaluer : seulement si une contrainte technique majeure apparaît.
```

```text
Date : 2026-05-07
Décision : Les dossiers `src/components`, `src/engine`, `src/data/scenarios` et `src/types` sont séparés dès la V0.1.
Raison : Préparer le futur moteur de scénario sans le coder trop tôt.
Conséquence : Les composants d’interface, les données de scénario et les types partagés ont des responsabilités distinctes.
Statut : validé
À réévaluer : lors de la V0.2 si le modèle de scénario exige un ajustement.
```

```text
Date : 2026-05-07
Décision : La V0.1 se limite à l’accueil et au briefing de “Le dossier disparu”.
Raison : Respecter la feuille de route et éviter de créer prématurément l’inventaire, les indices ou l’accusation finale.
Conséquence : La prochaine étape technique est le moteur minimal de scénario V0.2.
Statut : validé
À réévaluer : non, sauf changement explicite de feuille de route.
```

```text
Date : 2026-05-07
Décision : La V0.2 charge “Le dossier disparu” depuis un fichier de données TypeScript structuré.
Raison : Garder les scénarios séparés de l’interface et préparer un moteur réutilisable sans ajouter de backend.
Conséquence : Les lieux, personnages et documents peuvent être modifiés dans les données sans réécrire les composants.
Statut : validé
À réévaluer : lors de l’ajout futur de plusieurs scénarios.
```

```text
Date : 2026-05-07
Décision : `InventoryObject`, `Puzzle` et `Hint` existent comme types préparatoires seulement.
Raison : Préparer les versions suivantes sans créer prématurément l’inventaire, les énigmes jouables ou le système d’indices.
Conséquence : La V0.2 reste un moteur minimal de consultation, pas encore une enquête complète.
Statut : validé
À réévaluer : à partir de la V0.3 pour les énigmes, puis des versions dédiées aux objets et indices.
```

```text
Date : 2026-05-07
Décision : La V0.3 ajoute deux énigmes jouables localement, sans moteur complexe.
Raison : Créer une première boucle d’enquête testable tout en respectant la progression du projet.
Conséquence : Le joueur peut valider une chronologie, repérer une contradiction et débloquer deux documents.
Statut : validé
À réévaluer : lors de la généralisation éventuelle du moteur d’énigmes.
```

```text
Date : 2026-05-07
Décision : La progression V0.3 reste stockée dans l’état React local.
Raison : Éviter localStorage, backend, base de données ou architecture prématurée.
Conséquence : La progression est suffisante pour tester le parcours, mais n’est pas persistée.
Statut : validé
À réévaluer : quand une sauvegarde locale deviendra utile.
```
