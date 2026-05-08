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

```text
Date : 2026-05-08
Décision : La V0.4 introduit un inventaire minimal en état React local.
Raison : Rendre les objets utiles sans créer de système RPG, de sauvegarde, de backend ou de combinaison d'objets.
Conséquence : Le joueur peut prendre des objets dans les lieux, les voir dans `Objets trouvés`, utiliser le badge visiteur pour débloquer la salle informatique et conserver des objets contextuels sans effet majeur.
Statut : validé
À réévaluer : lors de l'accusation finale, si certains objets doivent devenir des preuves sélectionnables.
```

```text
Date : 2026-05-08
Décision : La salle informatique devient réellement limitée tant que le badge visiteur n'est pas utilisé.
Raison : La V0.3.3 documentait ce verrouillage comme une dette volontaire ; la V0.4 peut maintenant l'assumer avec un objet d'accès simple.
Conséquence : Les documents rattachés à la salle informatique ne deviennent consultables que si le lieu est accessible et si la progression documentaire les a débloqués.
Statut : validé
À réévaluer : si un futur scénario nécessite plusieurs types d'accès ou plusieurs objets de déverrouillage.
```

```text
Date : 2026-05-08
Décision : Les fiches personnages affichent une parole directe, tandis que les documents de témoignage utilisent un compte rendu indirect.
Raison : Donner plus de présence aux personnages et intégrer discrètement un objectif FLE/FOU sur le discours rapporté, sans transformer l'enquête en exercice scolaire.
Conséquence : `Character.directSpeech` sert à la fiche personnage ; les documents `testimony` restent des pièces du dossier formulées au discours indirect.
Statut : validé
À réévaluer : lors d'un futur mode enseignant ou d'un moteur de dialogue plus riche.
```

```text
Date : 2026-05-08
Décision : Les personnages et lieux récurrents forment une réserve évolutive, non une liste obligatoire.
Raison : Préparer un univers reconnaissable sans forcer chaque scénario à réutiliser tous les noms, lieux ou détails fournis.
Conséquence : Un agent doit distinguer personnage disponible, personnage effectivement utilisé et personnage ponctuel. Il doit sélectionner seulement les informations utiles au contexte narratif, pédagogique ou ludique.
Statut : validé
À réévaluer : quand la réserve deviendra une structure de données dédiée ou quand plusieurs scénarios partageront les mêmes lieux et personnages.
```

```text
Date : 2026-05-08
Décision : Dans `Le dossier disparu`, Delphine remplace le personnage générique du secrétariat.
Raison : Delphine est un personnage récurrent pertinent pour ce scénario : son rôle administratif donne plus de présence au secrétariat sans modifier l'enquête.
Conséquence : L'identifiant de scénario devient `delphine`. Le remplacement ne rend pas l'usage des autres personnages récurrents systématique.
Statut : validé
À réévaluer : si un futur scénario donne à Delphine un rôle incompatible avec cette première apparition.
```

```text
Date : 2026-05-08
Décision : La V0.5 introduit des indices progressifs directement dans `Puzzle.hints`.
Raison : Éviter les blocages sur les énigmes principales sans créer un moteur d'aide complexe, un score ou une sauvegarde.
Conséquence : Chaque énigme peut afficher jusqu'à trois indices, un par un, avec un état React local `revealedHintCounts`. Les indices ne sont pas pénalisants en V0.5.
Statut : validé
À réévaluer : lors du mode enseignant ou si un futur score doit tenir compte des aides consultées.
```

## Décision 16 — Utilisation contextuelle des objets d’accès

Date : 2026-05-08

Décision :
Les objets d’accès doivent être utilisés dans leur contexte spatial, et non depuis n’importe quel endroit de l’interface. L'inventaire affiche le statut du badge mais ne propose plus de bouton d'utilisation générique si l'objet permet de débloquer un lieu. Le bouton d'utilisation est affiché dans le lieu fermé ciblé.

Raison :
Éviter l'utilisation abstraite d'un objet (ex. utiliser le badge depuis le couloir pour ouvrir la salle informatique). Transformer l’utilisation du badge en une action contextualisée dans le lieu "Salle informatique" renforce la logique spatiale et narrative du jeu.

Conséquence :
- La salle informatique est visible dès le départ mais s'affiche comme fermée.
- Sans le badge, elle indique simplement qu'elle est fermée.
- Avec le badge, le bouton "Utiliser le badge visiteur" apparaît dans l'écran de la salle.
- Après utilisation, le contenu du lieu devient accessible et le badge passe au statut "utilisé" dans l'inventaire.
- L'inventaire ne propose plus de bouton d'utilisation pour les objets débloquant un lieu.

Statut : validée.

À réévaluer :
Si le jeu introduit des objets à usage multiple ou combiné qui ne dépendent pas d'un contexte spatial strict.

## Décision 17 — Décor vivant contrôlé

Date : 2026-05-08

Décision :
Les scénarios peuvent comporter des éléments de décor vivant : lieux secondaires, personnages secondaires, documents d'ambiance, touches d'humour et interactions non décisives.

Raison :
L'enquête doit rester claire, mais l'univers ne doit pas donner l'impression que chaque élément existe uniquement pour résoudre l'énigme. Un décor vivant contrôlé renforce l'immersion, la crédibilité de l'ISPA et le plaisir d'exploration.

Conséquence :
- Ces éléments restent facultatifs.
- Ils ne doivent pas créer de fausse piste injuste.
- Ils ne doivent pas ressembler à des preuves fortes s'ils n'en sont pas.
- Ils ne doivent pas bloquer la progression.
- Ils ne doivent pas parasiter la chaîne des preuves.
- Ils doivent rester compatibles avec le niveau B1/B2.

Statut : validée.

À réévaluer :
Lors des tests utilisateurs, si des éléments d'ambiance sont interprétés comme des preuves importantes ou rendent l'enquête plus confuse.

## Décision 18 — Résolution finale prudente

Date : 2026-05-08

Décision :
La V0.6 conclut `Le dossier disparu` par une résolution finale prudente, et non par une accusation violente ou une désignation publique d'un coupable.

Raison :
Le contexte scolaire et FLE/FOU demande une conclusion réparatrice. L'enquête doit apprendre à formuler une hypothèse, à la soutenir par des pièces du dossier et à distinguer preuve, interprétation et accusation.

Conséquence :
- Le joueur choisit l'explication la plus plausible.
- Le joueur sélectionne les pièces qui soutiennent cette explication.
- La bonne conclusion parle d'une confusion de documents et d'un retard de signalement.
- Fahad n'est pas présenté comme voleur.
- Delphine aide Chen à remettre le dossier en ordre.
- La fin reste heureuse, administrative et non humiliante.

Statut : validée.

À réévaluer :
Après tests utilisateurs, si la conclusion semble trop facile, trop morale ou encore trop accusatoire.

## Décision 19 — Fiche enseignant externe avant mode intégré

Date : 2026-05-08

Décision :
La V0.7 prend la forme d'une fiche enseignant externe, et non d'un mode enseignant intégré dans l'interface du jeu.

Raison :
Le scénario est jouable de bout en bout, mais l'exploitation pédagogique doit d'abord être clarifiée hors interface : objectifs, déroulement de classe, aides graduées, corrigé, prolongements et points de vigilance. Cela permet d'aider l'enseignant sans transformer l'expérience joueur en exercice scolaire.

Conséquence :
- `docs/teacher-guide-v0.7.md` devient la référence pédagogique de la première enquête.
- Le jeu, le code et les mécaniques restent inchangés en V0.7.
- Le futur mode enseignant pourra s'appuyer sur cette fiche, mais il n'est pas encore créé.

Statut : validée.

À réévaluer :
Lors de la V0.8, si un mode enseignant minimal est intégré dans l'application.

## Décision 20 — Fiche élève imprimable non résolutive

Date : 2026-05-08

Décision :
La V0.7.1 ajoute une fiche élève imprimable qui sert de carnet d'enquête, sans donner la solution ni indiquer directement les preuves décisives.

Raison :
Les apprenants B1+/B2 ont besoin d'un support de prise de notes pour organiser les lieux, personnages, documents, objets, contradictions et hypothèses. Ce support doit aider le raisonnement sans remplacer le jeu ni transformer l'enquête en corrigé distribué aux élèves.

Conséquence :
- `docs/student-investigation-sheet-v0.7.1.md` devient le support élève externe de la première enquête.
- La fiche distingue les objets d'inventaire et les pièces du dossier.
- La fiche prépare la chronologie, la contradiction et l'explication finale sans révéler les bonnes réponses.
- Le code, l'interface et la mécanique du jeu restent inchangés.

Statut : validée.

À réévaluer :
Après usage en classe, si la fiche guide trop fortement les élèves ou, au contraire, ne les aide pas assez à structurer leurs preuves.
