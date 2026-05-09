# La salle fantome - chantiers a reprendre plus tard

Ce document regroupe les elements volontairement remis a plus tard pour l enquete `La salle fantome`.

Il ne s agit pas de taches a lancer immediatement. Le but est de conserver la memoire des decisions prises pendant les audits humains, sans disperser le developpement ni provoquer de refonte prematuree.

## 1. Documents et objets visuels

### 1.1 Convocation TCF graphique

A produire plus tard :

- une vraie mise en page de convocation ;
- un rendu administratif plus credible ;
- une hierarchie claire des informations : candidat, date, heure, lieu, piece d identite, consigne de presence ;
- eventuellement un logo ou en-tete sobre de l ISPA ou du service des examens ;
- une presentation visuelle qui rende le document plus authentique sans alourdir la lecture.

La convocation doit rester le point d entree dramatique de l enquete. Elle ne doit pas devoiler la solution, mais elle doit attirer l attention sur le lieu indique.

### 1.2 Plan graphique des salles

A produire plus tard :

- un plan graphique simple, lisible, affiche dans le hall ou pres du panneau d affichage ;
- les salles actuelles : Beffroi, Cathedrale, Gambetta ;
- le secretariat ;
- eventuellement la salle informatique, les Hortillonnages, Jules Verne ou d autres salles utiles ;
- aucun ancien nom : pas de Jaures, pas de Rimbaud, pas de Choderlos de Laclos.

Objectif : que le joueur puisse reellement regarder un plan, et non seulement lire une liste textuelle.

### 1.3 Note interne de Marine

A ameliorer plus tard :

- presentation visuelle plus credible ;
- style de note de service plus authentique ;
- possibilite d un document legerement froisse, scanne ou annote ;
- conservation stricte des correspondances :
  - Jaures -> Beffroi ;
  - Rimbaud -> Cathedrale ;
  - Choderlos de Laclos -> Gambetta.

## 2. Progression dans la fenetre principale

L intention de conception est que l enquete progresse dans la fenetre principale : lieux, documents, personnages, dialogues, panneau, plan.

Le tableau d enquete ne doit pas rester le lieu principal ou le joueur accomplit toutes les etapes.

### 2.1 Enigmes deja contextualisees

Deja fait :

- `lire-convocation-tcf` est rattachee au document `convocation-tcf` ;
- `verifier-plan-actuel` est rattachee au document `plan-actuel-salles` ;
- `formuler-probleme-heidi` est rattachee au personnage `heidi` ;
- `identifier-beffroi` est rattachee au document `note-changement-noms`.

Ces enigmes apparaissent sous les documents ou personnages concernes et sont masquees du tableau tant qu elles ne sont pas resolues.

### 2.2 Etapes a contextualiser plus tard

A reprendre plus tard :

- `comprendre-erreur-thi-thai` devrait se jouer au secretariat, dans la scene avec Thi Thai ;
- la rectification finale devrait se faire au panneau d affichage, non comme simple action abstraite du tableau.

### 2.3 Tableau d enquete

A transformer progressivement :

- ne plus l utiliser comme liste visible de toutes les etapes ;
- le reserver aux grandes deductions ;
- en faire un espace de synthese ;
- garder eventuellement la resolution finale ou la solution de l enigme dans cet espace ;
- eviter que le tableau revele trop tot la structure de l enquete.

## 3. Affichage des enigmes contextualisees

Actuellement, `PuzzleDetail` est reutilise sous les documents et les personnages. C est robuste, mais peut etre trop volumineux visuellement.

A ameliorer plus tard :

- creer un rendu compact pour les enigmes integrees ;
- titre court : A verifier ou Action possible ;
- question breve ;
- choix simples ;
- feedback immediat ;
- moins d encombrement visuel que `PuzzleDetail` complet.

Objectif : preserver la robustesse du moteur tout en reduisant l impression de quiz scolaire.

## 4. Dialogues a retravailler

Les dialogues doivent etre repris apres test humain, scene par scene.

### 4.1 Delphine

A ameliorer :

- la rendre plus vivante ;
- conserver son role : confirmer les oraux sans resoudre l enigme ;
- eviter qu elle semble simplement bloquer le joueur ;
- faire sentir qu elle est debordee, mais polie.

### 4.2 Ning Yi

A conserver :

- son etrangete ;
- son hypothese presque delirante ;
- la phrase : "En France, l administration est parfois plus difficile que la grammaire."

A eviter :

- qu il introduise l idee du vieux document ;
- qu il devienne le premier interlocuteur naturel du hall ;
- qu il donne une piste rationnelle trop tot.

### 4.3 Heidi

A ameliorer :

- reduire le cote trop scolaire ;
- conserver sa fonction methodologique ;
- faire en sorte que la formulation du probleme naisse davantage du dialogue que d un QCM exterieur ;
- integrer plus naturellement l archive.

### 4.4 Marine

A ameliorer :

- rendre son apparition plus incarnee ;
- mieux scenariser le moment ou elle intervient dans le couloir ;
- eviter qu elle soit seulement un distributeur de document ;
- conserver son role : donner la correspondance sans expliquer l origine de l erreur.

### 4.5 Thi Thai

A ameliorer :

- rendre son retour plus naturel ;
- conserver l explication du copier-coller depuis un ancien modele ;
- eviter l impression d explication automatique ;
- renforcer la demande d aide au joueur pour afficher la rectification.

## 5. Mini-jeux ou micro-interactions futures

Ne pas ajouter maintenant. A envisager apres stabilisation narrative.

Deux emplacements prioritaires :

### 5.1 Apres Marine : identifier Beffroi sur le plan

Principe : le joueur vient d obtenir la correspondance Jaures -> Beffroi. Il doit appliquer cette information au plan.

Mini-interaction possible :

- cliquer sur la salle Beffroi ;
- retrouver Beffroi dans un plan graphique ;
- associer visuellement ancien nom et nouveau nom.

### 5.2 Apres Thi Thai : afficher la rectification

Principe : Thi Thai demande au joueur de prevenir les autres candidats.

Mini-interaction possible :

- choisir le bon panneau ;
- placer l affiche au bon endroit ;
- agir avant une limite horaire legere ;
- eviter les mauvais emplacements.

Objectif : donner une fin plus active, sans transformer le projet en moteur de jeu complexe.

## 6. Moteur et architecture a surveiller

### 6.1 Documents visibles / documents lus

Limite actuelle : le moteur verifie surtout que certains documents sont visibles, pas forcement lus.

Decision actuelle : ne pas refondre maintenant.

A reexaminer plus tard si les tests montrent que les joueurs :

- sautent trop de scenes ;
- valident des enigmes sans lire les documents ;
- perdent le sens narratif de la progression.

### 6.2 Personnages conditionnels

Limite actuelle : certains personnages sont presents dans un lieu des que le lieu est accessible. Rendre les personnages conditionnels demanderait une evolution du moteur.

A envisager plus tard si necessaire :

- apparition conditionnelle d un personnage apres une etape ;
- personnage visible seulement apres lecture d un document ;
- meilleure gestion des scenes successives dans un meme lieu.

### 6.3 Non-regression multi-enquetes

A tester apres toute modification generique :

- `Le dossier disparu` ;
- `Le message efface` ;
- affichage du tableau d enquete ;
- puzzles contextualises ;
- progression des documents ;
- resolution finale.

## 7. Tests humains a prevoir

A mener regulierement :

- test des cinq premieres minutes ;
- test de la comprehension de la convocation ;
- test du plan ;
- test de la place de Ning Yi ;
- test de la progression vers Heidi ;
- test de la lisibilite du tableau d enquete ;
- test de la satisfaction de la resolution finale.

Questions de test :

1. Le joueur comprend-il qu il doit lire la convocation ?
2. Le plan est-il clairement consultable ?
3. Le joueur repere-t-il naturellement l absence de Jaures ?
4. Ning Yi arrive-t-il au bon moment ?
5. Le tableau d enquete reste-t-il trop central ?
6. L enquete donne-t-elle l impression d une investigation ou d un quiz ?
7. La conclusion est-elle satisfaisante ?

## 8. Documentation a maintenir

A tenir a jour :

- `docs/salle-fantome-investigation.md` ;
- ce fichier `docs/salle-fantome-a-faire-plus-tard.md` ;
- eventuellement un journal de decisions si les modifications deviennent nombreuses ;
- la fiche recapitulative utilisee dans le projet ChatGPT `Jeu d enquete`.

## 9. Regle de pilotage

Ne pas lancer tous ces chantiers en meme temps.

Pour chaque reprise, passer par l Agent 0 - Chef d orchestre :

1. identifier le probleme precis ;
2. choisir un seul agent ;
3. demander un livrable limite ;
4. verifier que le jeu n est pas casse ;
5. documenter ce qui reste a faire.
