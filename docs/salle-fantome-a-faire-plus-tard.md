# La salle fantôme — Chantiers à reprendre plus tard

Ce document regroupe les éléments volontairement remis à plus tard pour l'enquête `La salle fantôme`.

Il ne s'agit pas de tâches à lancer immédiatement. Le but est de conserver la mémoire des décisions prises pendant les audits humains, sans disperser le développement ni provoquer de refonte prématurée.

## 1. Documents et objets visuels

### 1.1 Convocation TCF graphique

À produire plus tard :

- une vraie mise en page de convocation ;
- un rendu administratif plus crédible ;
- une hiérarchie claire des informations : candidat, date, heure, lieu, pièce d'identité, consigne de présence ;
- éventuellement un logo ou en-tête sobre de l'ISPA ou du service des examens ;
- une présentation visuelle qui rende le document plus authentique sans alourdir la lecture.

La convocation doit rester le point d'entrée dramatique de l'enquête. Elle ne doit pas dévoiler la solution, mais elle doit attirer l'attention sur le lieu indiqué.

### 1.2 Plan graphique des salles

À produire plus tard :

- un plan graphique simple, lisible, affiché dans le hall ou près du panneau d'affichage ;
- les salles actuelles : Beffroi, Cathédrale, Gambetta ;
- le secrétariat ;
- éventuellement la salle informatique, les Hortillonnages, Jules Verne ou d'autres salles utiles ;
- aucun ancien nom : pas de Jaurès, pas de Rimbaud, pas de Choderlos de Laclos.

Objectif : que le joueur puisse réellement regarder un plan, et non seulement lire une liste textuelle.

### 1.3 Note interne de Marine

À améliorer plus tard :

- présentation visuelle plus crédible ;
- style de note de service plus authentique ;
- possibilité d'un document légèrement froissé, scanné ou annoté ;
- conservation stricte des correspondances :
  - Jaurès -> Beffroi ;
  - Rimbaud -> Cathédrale ;
  - Choderlos de Laclos -> Gambetta.

## 2. Progression dans la fenêtre principale

L'intention de conception est que l'enquête progresse dans la fenêtre principale : lieux, documents, personnages, dialogues, panneau, plan.

Le tableau d'enquête ne doit pas rester le lieu principal où le joueur accomplit toutes les étapes.

### 2.1 Énigmes déjà contextualisées

Déjà fait :

- `lire-convocation-tcf` est rattachée au document `convocation-tcf` ;
- `verifier-plan-actuel` est rattachée au document `plan-actuel-salles`.

Ces deux énigmes apparaissent sous les documents concernés et sont masquées du tableau tant qu'elles ne sont pas résolues.

### 2.2 Étapes à contextualiser plus tard

À reprendre plus tard :

- `formuler-probleme-heidi` devrait se jouer directement dans le bureau de Heïdi ou dans la fiche/dialogue de Heïdi ;
- `identifier-beffroi` devrait se jouer à partir de la note de Marine ou dans le couloir avec Marine ;
- `comprendre-erreur-thi-thai` devrait se jouer au secrétariat, dans la scène avec Thi Thai ;
- la rectification finale devrait se faire au panneau d'affichage, non comme simple action abstraite du tableau.

### 2.3 Tableau d'enquête

À transformer progressivement :

- ne plus l'utiliser comme liste visible de toutes les étapes ;
- le réserver aux grandes déductions ;
- en faire un espace de synthèse ;
- garder éventuellement la résolution finale ou la solution de l'énigme dans cet espace ;
- éviter que le tableau révèle trop tôt la structure de l'enquête.

## 3. Affichage des énigmes contextualisées

Actuellement, `PuzzleDetail` est réutilisé sous les documents. C'est robuste, mais peut être trop volumineux visuellement.

À améliorer plus tard :

- créer un rendu compact pour les énigmes intégrées ;
- titre court : À vérifier ou Action possible ;
- question brève ;
- choix simples ;
- feedback immédiat ;
- moins d'encombrement visuel que `PuzzleDetail` complet.

Objectif : préserver la robustesse du moteur tout en réduisant l'impression de quiz scolaire.

## 4. Dialogues à retravailler

Les dialogues doivent être repris après test humain, scène par scène.

### 4.1 Delphine

À améliorer :

- la rendre plus vivante ;
- conserver son rôle : confirmer les oraux sans résoudre l'énigme ;
- éviter qu'elle semble simplement bloquer le joueur ;
- faire sentir qu'elle est débordée, mais polie.

### 4.2 Ning Yi

À conserver :

- son étrangeté ;
- son hypothèse presque délirante ;
- la phrase : « En France, l'administration est parfois plus difficile que la grammaire. »

À éviter :

- qu'il introduise l'idée du vieux document ;
- qu'il devienne le premier interlocuteur naturel du hall ;
- qu'il donne une piste rationnelle trop tôt.

### 4.3 Heïdi

À améliorer :

- réduire le côté trop scolaire ;
- conserver sa fonction méthodologique ;
- faire en sorte que la formulation du problème naisse davantage du dialogue que d'un QCM extérieur ;
- intégrer plus naturellement l'archive.

### 4.4 Marine

À améliorer :

- rendre son apparition plus incarnée ;
- mieux scénariser le moment où elle intervient dans le couloir ;
- éviter qu'elle soit seulement un distributeur de document ;
- conserver son rôle : donner la correspondance sans expliquer l'origine de l'erreur.

### 4.5 Thi Thai

À améliorer :

- rendre son retour plus naturel ;
- conserver l'explication du copier-coller depuis un ancien modèle ;
- éviter l'impression d'explication automatique ;
- renforcer la demande d'aide au joueur pour afficher la rectification.

## 5. Mini-jeux ou micro-interactions futures

Ne pas ajouter maintenant. À envisager après stabilisation narrative.

Deux emplacements prioritaires :

### 5.1 Après Marine : identifier Beffroi sur le plan

Principe : le joueur vient d'obtenir la correspondance Jaurès -> Beffroi. Il doit appliquer cette information au plan.

Mini-interaction possible :

- cliquer sur la salle Beffroi ;
- retrouver Beffroi dans un plan graphique ;
- associer visuellement ancien nom et nouveau nom.

### 5.2 Après Thi Thai : afficher la rectification

Principe : Thi Thai demande au joueur de prévenir les autres candidats.

Mini-interaction possible :

- choisir le bon panneau ;
- placer l'affiche au bon endroit ;
- agir avant une limite horaire légère ;
- éviter les mauvais emplacements.

Objectif : donner une fin plus active, sans transformer le projet en moteur de jeu complexe.

## 6. Moteur et architecture à surveiller

### 6.1 Documents visibles / documents lus

Limite actuelle : le moteur vérifie surtout que certains documents sont visibles, pas forcément lus.

Décision actuelle : ne pas refondre maintenant.

À réexaminer plus tard si les tests montrent que les joueurs :

- sautent trop de scènes ;
- valident des énigmes sans lire les documents ;
- perdent le sens narratif de la progression.

### 6.2 Personnages conditionnels

Limite actuelle : certains personnages sont présents dans un lieu dès que le lieu est accessible. Rendre les personnages conditionnels demanderait une évolution du moteur.

À envisager plus tard si nécessaire :

- apparition conditionnelle d'un personnage après une étape ;
- personnage visible seulement après lecture d'un document ;
- meilleure gestion des scènes successives dans un même lieu.

### 6.3 Non-régression multi-enquêtes

À tester après toute modification générique :

- `Le dossier disparu` ;
- `Le message effacé` ;
- affichage du tableau d'enquête ;
- puzzles contextualisés ;
- progression des documents ;
- résolution finale.

## 7. Tests humains à prévoir

À mener régulièrement :

- test des cinq premières minutes ;
- test de la compréhension de la convocation ;
- test du plan ;
- test de la place de Ning Yi ;
- test de la progression vers Heïdi ;
- test de la lisibilité du tableau d'enquête ;
- test de la satisfaction de la résolution finale.

Questions de test :

1. Le joueur comprend-il qu'il doit lire la convocation ?
2. Le plan est-il clairement consultable ?
3. Le joueur repère-t-il naturellement l'absence de Jaurès ?
4. Ning Yi arrive-t-il au bon moment ?
5. Le tableau d'enquête reste-t-il trop central ?
6. L'enquête donne-t-elle l'impression d'une investigation ou d'un quiz ?
7. La conclusion est-elle satisfaisante ?

## 8. Documentation à maintenir

À tenir à jour :

- `docs/salle-fantome-investigation.md` ;
- ce fichier `docs/salle-fantome-a-faire-plus-tard.md` ;
- éventuellement un journal de décisions si les modifications deviennent nombreuses ;
- la fiche récapitulative utilisée dans le projet ChatGPT `Jeu d'enquête`.

## 9. Règle de pilotage

Ne pas lancer tous ces chantiers en même temps.

Pour chaque reprise, passer par l'Agent 0 — Chef d'orchestre :

1. identifier le problème précis ;
2. choisir un seul agent ;
3. demander un livrable limité ;
4. vérifier que le jeu n'est pas cassé ;
5. documenter ce qui reste à faire.
