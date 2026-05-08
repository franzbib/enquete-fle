# Prochaines actions — Jeu d’enquête FLE/FOU

## 1. Objet du document

Ce document indique les prochaines actions concrètes du projet `enquete-fle`.

Une prochaine action doit rester limitée, claire, vérifiable et utile.

Ce document sert au chef d’orchestre pour reprendre le projet rapidement, identifier l’état réel d’avancement et préparer la prochaine intervention de Codex, Antigravity ou d’un autre agent.

## 2. État actuel

Version actuelle : V0.5 — système d'indices progressifs.

Le dépôt GitHub existe.

Le dossier documentaire `docs/agent-context/` est constitué pour piloter la suite.

L’application React/Vite/TypeScript existe, avec Tailwind CSS, une page d’accueil, un écran de briefing et un écran d’enquête. Le joueur peut consulter les documents, résoudre deux énigmes simples, obtenir quelques objets, utiliser le badge visiteur pour accéder à la salle informatique et demander des indices progressifs.

Un audit UX de la V0.3 a été réalisé. Des corrections légères ont été ajoutées pour clarifier le briefing, guider le joueur, signaler les documents nouveaux ou lus, et mieux confirmer les interactions.

Le projet intègre désormais explicitement l’idée d’un univers récurrent : certains personnages et certains lieux pourront revenir d’un scénario à l’autre, avec une identité narrative et visuelle stable, tout en laissant chaque scénario ajouter ses propres personnages et lieux spécifiques.

## 3. Actions déjà réalisées

### Action 1 — Créer le dépôt GitHub

Statut : fait.

Dépôt :

`https://github.com/franzbib/enquete-fle`

### Action 2 — Créer le dossier documentaire

Statut : fait.

Dossier :

`docs/agent-context/`

### Action 3 — Créer les documents de contexte agent

Statut : fait.

Fichiers :

- `00_AGENT_CHEF_ORCHESTRE.md`
- `01_ETAT_DU_PROJET.md`
- `02_VISION_PROJET.md`
- `03_CAHIER_DES_CHARGES_GENERAL.md`
- `04_FEUILLE_DE_ROUTE.md`
- `05_ESPACE_GRAPHIQUE_PROGRESSIF.md`
- `06_ROLES_AGENTS.md`
- `07_MODELE_SCENARIO_DOSSIER_DISPARU.md`
- `08_PROCHAINES_ACTIONS.md`
- `09_DECISIONS_LOG.md`
- `10_PERSONNAGES_ET_LIEUX_RECURRENTS.md`

### Action 4 — Créer le squelette technique V0.1

Statut : fait.

Livrables :

- application React + Vite + TypeScript ;
- Tailwind CSS configuré ;
- dossiers `src/components`, `src/engine`, `src/data/scenarios` et `src/types` ;
- page d’accueil minimale ;
- écran de briefing minimal ;
- document `docs/architecture.md`.

### Action 5 — Créer le moteur minimal de scénario V0.2

Statut : fait.

Livrables :

- types `Scenario`, `Location`, `Character`, `InvestigationDocument`, `InventoryObject`, `Puzzle` et `Hint` ;
- scénario enrichi “Le dossier disparu” ;
- loader local simple ;
- affichage des lieux, personnages et documents ;
- navigation accueil / briefing / enquête.

### Action 6 — Créer la première enquête minimale V0.3

Statut : fait.

Livrables :

- scénario enrichi avec documents utiles ;
- deux objets préparatoires ;
- deux énigmes simples ;
- progression locale ;
- feedback sobre ;
- déblocage de documents.

### Action 7 — Réaliser un audit UX de la V0.3

Statut : fait.

Agent concerné : Antigravity.

Livrables :

- rapport `docs/ux-audit-v0.3.md` ;
- clarification du briefing ;
- encadré “Votre objectif” ;
- encadré “Que faire maintenant ?” ;
- indicateurs `✨ Nouveau` et `✓ Lu` ;
- micro-animations fonctionnelles et discrètes ;
- mise à jour du journal des décisions.

Point reporté :

- possibilité de consulter simultanément un document et une énigme. Ce chantier est important, mais doit être traité plus tard pour éviter une refonte prématurée.

### Action 8 — Créer le document sur les personnages et lieux récurrents

Statut : fait.

Fichier :

`10_PERSONNAGES_ET_LIEUX_RECURRENTS.md`

Objectif :

Prévoir un noyau évolutif de personnages et lieux récurrents, traités séparément des scénarios, afin de construire progressivement une identité narrative et visuelle stable.

Conséquence pour la suite :

Codex devra éviter de coder les personnages, lieux, noms ou visuels en dur dans les composants. Les scénarios devront pouvoir référencer à terme des personnages et lieux récurrents, tout en ajoutant des éléments spécifiques.

La réserve récurrente ne doit pas être utilisée systématiquement. Avant d'intégrer un personnage ou un lieu de cette réserve, l'agent devra vérifier que sa présence sert réellement le scénario, la progression ludique ou l'objectif FLE/FOU.

## 4. Action immédiate

### Action 9 — Tester humainement la V0.3 stabilisée UX

Statut : à faire.

Objectif :

Vérifier localement que les améliorations UX de la V0.3 rendent le parcours plus clair avant d’ajouter l’inventaire.

Commande :

```powershell
cd C:\dev\enquete-fle
npm.cmd run dev
```

Puis ouvrir :

```text
http://localhost:5173/
```

À vérifier :

- le briefing est-il plus lisible ?
- l’objectif est-il bien identifié ?
- l’encadré “Que faire maintenant ?” aide-t-il réellement ?
- les documents sont-ils bien marqués `✨ Nouveau` puis `✓ Lu` ?
- les deux énigmes sont-elles compréhensibles ?
- les retours après réponse sont-ils clairs ?
- les micro-animations fonctionnelles restent-elles discrètes ?
- l’interface reste-t-elle sobre et provisoire ?

Décision attendue après test :

- si le parcours est assez clair : passer à la V0.4 ;
- si le parcours reste confus : demander une dernière micro-correction UX avant l’inventaire.

## 5. Action technique suivante

### Action 10 — Créer la V0.4 : inventaire minimal

Statut : fait.

Agent concerné : Codex.

Objectif :

Créer un inventaire minimal permettant d’afficher les objets, de les obtenir, de les marquer comme trouvés ou utilisés, et d’utiliser un objet pour débloquer une piste, un document ou un lieu.

Attention :

Codex devra tenir compte du document `10_PERSONNAGES_ET_LIEUX_RECURRENTS.md` pour éviter de coder les personnages, lieux ou visuels en dur.

Contenu attendu :

- affichage sobre des objets ;
- obtention d’un objet ;
- statut simple `non trouvé` / `trouvé` / `utilisé` ;
- utilisation d’un objet pour débloquer un document, un lieu ou une piste ;
- maintien d’un nombre d’objets limité ;
- logique compatible avec des scénarios futurs ;
- documentation de l’avancement.

Livrables réalisés :

- panneau `Objets trouvés` ;
- objets observables dans les lieux ;
- prise d’objet depuis le détail d’un lieu ;
- statut `trouvé` / `utilisé` ;
- badge visiteur qui débloque la salle informatique ;
- ticket de bus comme preuve faible ;
- clé USB d’ambiance sans effet de preuve forte ;
- documentation `docs/inventory-v0.4.md`.

À ne pas faire encore :

- système d’indices complet ;
- accusation finale enrichie ;
- deuxième scénario ;
- identité graphique finale ;
- backend ;
- base de données ;
- inventaire de type RPG.

## 6. Action technique suivante

### Action 11 — Créer la V0.5 : indices gradués

Statut : fait.

Agent concerné : Codex.

Objectif :

Créer un système d’indices minimal pour éviter les blocages sur les énigmes principales.

Livrables réalisés :

- champ `Puzzle.hints` ;
- trois indices progressifs pour la chronologie ;
- trois indices progressifs pour la contradiction ;
- bouton `Voir un indice` dans le détail d'une énigme ;
- affichage des indices un par un ;
- état React local `revealedHintCounts` ;
- absence de score et de pénalité ;
- documentation `docs/hints-v0.5.md`.

À ne pas faire encore :

- accusation finale ;
- score complet ;
- deuxième scénario ;
- backend ;
- base de données ;
- mode enseignant complet.

## 7. Action technique suivante

### Action 12 — Préparer la V0.6 : accusation finale enrichie

Statut : à faire.

Agent concerné : Codex + scénariste-enquête + contrôleur de cohérence narrative.

Objectif :

Créer une accusation finale minimale mais argumentée, qui demande au joueur de sélectionner une hypothèse et des preuves, sans transformer la fin en QCM scolaire.

À ne pas faire encore :

- score complet ;
- mode enseignant complet ;
- deuxième scénario ;
- backend ;
- base de données ;
- identité graphique finale.

## 8. Prompt archivé pour la V0.5

```text
Agis comme architecte technique du projet `enquete-fle`.

Dépôt GitHub :
https://github.com/franzbib/enquete-fle

Dossier local :
C:\dev\enquete-fle

Lis d’abord tous les documents du dossier `docs/agent-context`, en particulier :
- `03_CAHIER_DES_CHARGES_GENERAL.md`
- `04_FEUILLE_DE_ROUTE.md`
- `07_MODELE_SCENARIO_DOSSIER_DISPARU.md`
- `09_DECISIONS_LOG.md`
- `10_PERSONNAGES_ET_LIEUX_RECURRENTS.md`

Contexte :
Le projet est en V0.4. Le joueur peut consulter des lieux, personnages et documents, résoudre deux énigmes simples, obtenir quelques objets et utiliser le badge visiteur pour accéder à la salle informatique.

Objectif :
Créer la V0.5 : système d’indices minimal et gradué.

Contraintes :
- React + Vite + TypeScript
- Tailwind CSS
- jeu 2D principalement statique
- micro-animations fonctionnelles discrètes autorisées si elles aident l’orientation du joueur
- pas de backend
- pas de base de données
- pas de moteur de jeu lourd
- scénarios séparés du moteur
- architecture simple, maintenable et progressive
- ne pas coder en dur les personnages, lieux ou visuels dans les composants

À créer ou améliorer :
1. Trois niveaux d’indices pour chaque énigme principale.
2. Une interface sobre pour demander un indice.
3. Un suivi local des indices consultés.
4. Des feedbacks qui aident sans humilier le joueur.
5. Une documentation claire de la logique d’indices.

Ne crée pas encore :
- accusation finale enrichie ;
- score complet ;
- deuxième scénario ;
- identité graphique finale ;
- backend ;
- inventaire complexe.

Mets à jour sobrement :
- `docs/architecture.md` ;
- `docs/agent-context/01_ETAT_DU_PROJET.md` ;
- `docs/agent-context/08_PROCHAINES_ACTIONS.md` ;
- `docs/agent-context/09_DECISIONS_LOG.md` si une décision technique importante est prise.

À la fin, indique :
1. les fichiers créés ;
2. les fichiers modifiés ;
3. les choix techniques faits ;
4. les commandes à lancer ;
5. ce qui reste à faire pour la V0.6.
```

## 9. Actions reportées

Les actions suivantes sont importantes mais ne doivent pas être lancées maintenant :

- consultation parallèle document / énigme ;
- système d’indices complet ;
- accusation finale enrichie ;
- mode enseignant ;
- identité graphique définitive ;
- portraits définitifs ;
- visuels définitifs des lieux récurrents ;
- deuxième scénario ;
- outil d’édition de scénarios ;
- suivi des résultats étudiants ;
- backend ;
- base de données ;
- sons.

## 10. Règle de priorité

Tant que la première enquête n’est pas jouable de manière claire, la priorité est :

1. clarté du parcours ;
2. logique de progression ;
3. objets utiles ;
4. indices ;
5. accusation finale ;
6. exploitation enseignante ;
7. identité graphique.

## 11. Question à poser à chaque reprise

À chaque reprise du projet, commencer par demander :

> Quelle est la prochaine action limitée, utile et vérifiable ?

Si une action ne répond pas à cette question, elle doit être reportée.
