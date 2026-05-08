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
Décision : La V0.2 charge “Le dossier disparu” depuis un fichier de données TypeScript structuré.
Raison : Garder les scénarios séparés de l’interface et préparer un moteur réutilisable sans ajouter de backend.
Conséquence : Les lieux, personnages et documents peuvent être modifiés dans les données sans réécrire les composants.
Statut : validé
À réévaluer : lors de l’ajout futur de plusieurs scénarios.
```

```text
Date : 2026-05-07
Décision : La V0.3 ajoute deux énigmes jouables localement, sans moteur complexe.
Raison : Créer une première boucle d’enquête testable tout en respectant la progression du projet.
Conséquence : Le joueur peut valider une chronologie, repérer une contradiction et débloquer des documents.
Statut : validé
À réévaluer : lors de la généralisation éventuelle du moteur d’énigmes.
```

```text
Date : 2026-05-07
Décision : La progression reste stockée dans l’état React local.
Raison : Éviter localStorage, backend, base de données ou architecture prématurée.
Conséquence : La progression est suffisante pour tester le parcours, mais n’est pas persistée.
Statut : validé
À réévaluer : quand une sauvegarde locale deviendra utile.
```

## Décision 14 — Répertoire de personnages et lieux récurrents

Date : 2026-05-07

Décision :
Le projet prévoit une réserve évolutive de personnages récurrents et de lieux récurrents.

Raison :
Le jeu doit pouvoir construire progressivement un univers reconnaissable, avec certains personnages et lieux retrouvés d’un scénario à l’autre.

Conséquence :
- Les personnages et lieux récurrents ne sont pas utilisés systématiquement.
- Un scénario peut utiliser un personnage récurrent, un lieu récurrent, ou créer ses propres éléments ponctuels.
- Les agents doivent sélectionner seulement les informations pertinentes pour le scénario.

Statut : validée.

À réévaluer : quand plusieurs scénarios partageront les mêmes lieux et personnages.

## Décision 15 — Contrôleur de cohérence narrative

Date : 2026-05-07

Décision :
Le projet intègre un agent spécialisé nommé `Contrôleur de cohérence narrative`.

Raison :
Un jeu d’enquête peut rester provisoire graphiquement ou techniquement, mais il ne peut pas reposer sur une intrigue incohérente.

Conséquence :
Avant chaque étape importante, le chef d’orchestre peut demander un audit narratif portant sur la chronologie, les lieux, les témoignages, les objets, les contradictions et les preuves.

Statut : validée.

À réévaluer : après tests utilisateurs.

```text
Date : 2026-05-08
Décision : La V0.4 introduit un inventaire minimal en état React local.
Raison : Rendre les objets utiles sans créer de système RPG, de sauvegarde, de backend ou de combinaison d'objets.
Conséquence : Le joueur peut prendre des objets dans les lieux, les voir dans `Objets trouvés`, utiliser le badge visiteur pour débloquer la salle informatique et conserver des objets contextuels sans effet majeur.
Statut : validé
À réévaluer : si certains objets doivent devenir des preuves sélectionnables.
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
Les objets d’accès doivent être utilisés dans leur contexte spatial, et non depuis n’importe quel endroit de l’interface.

Raison :
Éviter l’utilisation abstraite d’un objet. Présenter le badge depuis la salle informatique fermée renforce la logique spatiale et narrative.

Conséquence :
- La salle informatique est visible dès le départ mais fermée.
- Sans le badge, elle indique qu’elle est fermée.
- Avec le badge, le bouton `Présenter le badge` apparaît dans l’écran de la salle.
- Après utilisation, le contenu du lieu devient accessible et le badge passe au statut utilisé.
- L’inventaire ne propose plus de bouton d’utilisation générique pour les objets débloquant un lieu.

Statut : validée.

À réévaluer : si le jeu introduit des objets à usage multiple ou combiné.

## Décision 17 — Décor vivant contrôlé

Date : 2026-05-08

Décision :
Les scénarios peuvent comporter des éléments de décor vivant : lieux secondaires, personnages secondaires, documents d’ambiance, touches d’humour et interactions non décisives.

Raison :
L’univers ne doit pas donner l’impression que chaque élément existe uniquement pour résoudre l’énigme.

Conséquence :
- Ces éléments restent facultatifs.
- Ils ne doivent pas créer de fausse piste injuste.
- Ils ne doivent pas bloquer la progression.
- Ils ne doivent pas parasiter la chaîne des preuves.
- Ils doivent rester compatibles avec le niveau B1/B2.

Statut : validée.

À réévaluer : si des éléments d’ambiance sont interprétés comme des preuves importantes.

## Décision 18 — Résolution finale prudente

Date : 2026-05-08

Décision :
La V0.6 conclut `Le dossier disparu` par une résolution finale prudente, et non par une accusation violente ou une désignation publique d’un coupable.

Raison :
Le contexte scolaire et FLE/FOU demande une conclusion réparatrice.

Conséquence :
- Le joueur choisit l’explication la plus plausible.
- Le joueur sélectionne les pièces qui soutiennent cette explication.
- La bonne conclusion parle d’une confusion de documents et d’un retard de signalement.
- Fahad n’est pas présenté comme voleur.
- Delphine aide Chen à remettre le dossier en ordre.

Statut : validée.

À réévaluer : après tests utilisateurs.

## Décision 19 — Fiche enseignant externe avant mode intégré

Date : 2026-05-08

Décision :
La V0.7 prend la forme d’une fiche enseignant externe, et non d’un mode enseignant intégré dans l’interface du jeu.

Raison :
L’exploitation pédagogique doit d’abord être clarifiée hors interface.

Conséquence :
`docs/teacher-guide-v0.7.md` devient la référence pédagogique de la première enquête.

Statut : validée.

À réévaluer : lors de la V0.8.

## Décision 20 — Fiche élève imprimable non résolutive

Date : 2026-05-08

Décision :
La V0.7.1 ajoute une fiche élève imprimable qui sert de carnet d’enquête, sans donner la solution ni indiquer directement les preuves décisives.

Raison :
Les apprenants B1+/B2 ont besoin d’un support de prise de notes.

Conséquence :
`docs/student-investigation-sheet-v0.7.1.md` devient le support élève externe de la première enquête.

Statut : validée.

À réévaluer : après usage en classe.

## Décision 21 — Direction artistique progressive V0.9.0

Date : 2026-05-08

Décision :
La V0.9.0 adopte une direction artistique progressive fondée sur l’idée d’un carnet d’enquête clair dans un campus vivant.

Raison :
Le jeu est jouable et pédagogiquement exploitable ; il peut gagner une identité visuelle sans refonte totale.

Conséquence :
- L’interface reçoit une première couche de style : surfaces papier, encre sombre, vert administratif, bleu dossier, ambre indice.
- `docs/visual-audit-v0.9.0.md` documente les priorités visuelles.
- `docs/visual-guidelines-v0.9.0.md` définit la charte initiale.
- Les portraits récurrents doivent être harmonisés dans un style 2D commun.

Statut : validée.

À réévaluer : après test visuel sur écran projeté.

## Décision 22 — Progression masquable et guidage intégré

Date : 2026-05-08

Décision :
Le bandeau `Que faire maintenant ?` est intégré au panneau `Progression`, qui devient masquable et apparaît masqué par défaut.

Raison :
Alléger l’écran d’enquête et éviter la multiplication des zones de guidage.

Conséquence :
- L’orientation actuelle reste disponible dans le panneau `Progression`.
- Le joueur commence avec une interface plus dégagée.
- Le guidage reste accessible mais n’occupe plus constamment l’écran.

Statut : validée.

À réévaluer : après test utilisateur, si des joueurs se sentent perdus au lancement.

## Décision 23 — Bibliothèque de portraits harmonisés

Date : 2026-05-08

Décision :
La V0.9.2 crée une première bibliothèque de portraits harmonisés pour les personnages récurrents.

Raison :
Les personnages portent l’identité du jeu et doivent pouvoir revenir d’un scénario à l’autre avec une cohérence visuelle.

Conséquence :
- `Character.portraitUrl` permet de relier un personnage à son portrait.
- Les portraits sont stockés dans `public/assets/portraits/`.
- `CharacterDetail` affiche le portrait ou un fallback par initiale.
- Les portraits sont agrandis modérément pour rendre les personnages plus identifiables.

Statut : validée.

À réévaluer : si l’intégration visuelle gêne la lecture ou si les futurs portraits divergent du style commun.

## Décision 24 — Vignettes temporaires de lieux et icônes d’objets

Date : 2026-05-08

Décision :
La V0.9.3 ajoute des vignettes temporaires pour les lieux et des icônes d’objets plus durables.

Raison :
Les lieux doivent enrichir l’immersion sans être considérés comme définitifs ; les objets, plus simples et fonctionnels, peuvent recevoir une première base graphique stable.

Conséquence :
- `Location.vignetteUrl` permet d’afficher une image de lieu.
- `InventoryObject.iconUrl` permet d’afficher une icône d’objet.
- Les vignettes de lieux sont stockées dans `public/assets/locations/` avec un suffixe `-temp`.
- Les icônes d’objets sont stockées dans `public/assets/objects/`.
- Les lieux peuvent être remplacés plus tard sans modifier la logique du scénario.

Statut : validée.

À réévaluer : lors de la création des lieux définitifs ou si les images temporaires donnent une impression trop finalisée.

## Décision 25 — Micro-synchronisation V0.9.3.1

Date : 2026-05-08

Décision :
La V0.9.3.1 est une micro-version de synchronisation documentaire et de métadonnées, sans modification du gameplay.

Raison :
L'audit V0.9.3 a validé le jeu avec réserves, principalement à cause de documents actifs ou métadonnées encore désynchronisés avec l'état réel du projet.

Conséquence :
- `package.json` utilise une version cohérente avec l'état V0.9.3.
- Les documents actifs doivent présenter V0.9.3 comme version actuelle.
- La fiche élève doit utiliser M. Rodolphe, comme le scénario.
- Le cadrage vertical `object-top` sur les portraits est conservé car il améliore le cadrage sans modifier la structure de la fiche personnage.
- L'optimisation du poids des portraits est reportée pour éviter toute dégradation visuelle sans validation.

Statut : validée.

À réévaluer : avant V0.9.4, si une optimisation d'assets ou une nouvelle passe graphique modifie les fichiers visuels.
