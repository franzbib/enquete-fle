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
Conséquence : Le projet reste sans backend, sans base de données, sans moteur de jeu lourd et sans animation décorative.
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

## Décision 14 — Créer un répertoire séparé de personnages et lieux récurrents

Date : 2026-05-07

Décision :

Le projet devra prévoir un répertoire évolutif de personnages récurrents et de lieux récurrents.

Ces personnages et lieux pourront revenir d’un scénario à l’autre et posséder progressivement une identité narrative et visuelle stable.

Raison :

Le jeu ne doit pas être seulement une succession d’enquêtes isolées. Il doit pouvoir construire un univers reconnaissable, avec certains personnages et certains lieux que les joueurs retrouveront au fil des scénarios.

Cela permettra de renforcer :

- la cohérence de l’univers ;
- l’attachement aux personnages ;
- la lisibilité des scénarios ;
- la continuité narrative ;
- la future identité graphique du jeu.

Conséquence :

Les personnages récurrents et les lieux récurrents devront être traités séparément des scénarios.

Un scénario pourra donc :

- utiliser un personnage récurrent ;
- utiliser un lieu récurrent ;
- ajouter un personnage spécifique ;
- ajouter un lieu spécifique ;
- personnaliser certains éléments sans casser le moteur du jeu.

À terme, l’architecture devra prévoir une distinction entre :

- données du moteur ;
- données des scénarios ;
- répertoire des personnages récurrents ;
- répertoire des lieux récurrents ;
- assets visuels associés.

Cette décision ne signifie pas que tous les personnages et lieux devront être récurrents. Les scénarios pourront toujours créer des personnages et lieux spécifiques.

Statut : validée.

À réévaluer :

Lors de la V0.4 ou V0.5, quand Codex commencera à structurer davantage les objets, personnages, lieux et données de scénario.

```text
Date : 2026-05-07
Décision : Les micro-animations fonctionnelles sont autorisées, par exemple auto-scroll, clignotement léger ou fade-in.
Raison : Aider l’orientation visuelle de l’apprenant B1/B2, notamment pour indiquer qu’une action a bien eu lieu ou qu’un contenu a changé.
Conséquence : La contrainte “sans animation” est réinterprétée : pas d’animation décorative ou spectaculaire, mais les micro-animations utiles et sobres sont acceptables.
Statut : validé
À réévaluer : si ces animations s’avèrent trop distrayantes.
```

## Décision 15 — Créer un agent contrôleur de cohérence narrative

Date : 2026-05-07

Décision :

Le projet doit intégrer un agent spécialisé nommé `Contrôleur de cohérence narrative`.

Cet agent est chargé de vérifier systématiquement la cohérence interne des scénarios, notamment après toute modification narrative importante et avant l’ajout de fonctionnalités qui s’appuient sur le scénario, comme l’inventaire, les indices ou l’accusation finale.

Raison :

Un jeu d’enquête peut rester provisoire graphiquement ou techniquement, mais il ne peut pas reposer sur une intrigue incohérente. Les incohérences narratives involontaires fragilisent immédiatement la jouabilité, la crédibilité des preuves et la motivation du joueur.

Des problèmes déjà rencontrés montrent la nécessité de ce rôle :

- personnage semblant présent dans deux lieux ;
- témoignage placé dans un lieu peu crédible ;
- trace technique accusant trop directement ou artificiellement un personnage ;
- contradiction insuffisamment claire pour le joueur.

Conséquence :

Avant chaque étape importante qui ajoute de la logique d’enquête, le chef d’orchestre pourra demander un audit narratif.

Le contrôleur de cohérence narrative devra vérifier notamment :

- la chronologie des faits ;
- la présence des personnages dans les lieux ;
- la distinction entre personnage présent, lié, mentionné ou impliqué ;
- la localisation des documents ;
- la vraisemblance des témoignages ;
- la cohérence des traces techniques ;
- la fonction des objets ;
- la force réelle des contradictions ;
- la justice des fausses pistes ;
- le lien entre preuves et solution finale.

Statut : validée.

À réévaluer :

Après les premiers tests utilisateurs, pour ajuster la grille d’audit narratif si certains types d’incohérences reviennent régulièrement.
