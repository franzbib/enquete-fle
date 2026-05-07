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
