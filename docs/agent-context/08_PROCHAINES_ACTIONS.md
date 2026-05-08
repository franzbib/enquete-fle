# Prochaines actions — Jeu d’enquête FLE/FOU

## 1. Objet du document

Ce document indique les prochaines actions concrètes du projet `enquete-fle`.

Une prochaine action doit rester limitée, claire, vérifiable et utile.

Ce document sert au chef d’orchestre pour reprendre le projet rapidement, identifier l’état réel d’avancement et préparer la prochaine intervention de Codex, Antigravity ou d’un autre agent.

## 2. État actuel

**Version actuelle : V0.11 — jeu complet, exploitable pédagogiquement, avec deux enquêtes prototypes, sélection de scénario et sauvegarde / chargement explicite à trois slots par scénario.**

Le dépôt GitHub existe :

`https://github.com/franzbib/enquete-fle`

Les scénarios prototypes **Le dossier disparu** et **Le message effacé** sont jouables. Le deuxième scénario reste court et sert à tester réellement l'architecture multi-enquêtes.

Le jeu contient actuellement :

- exploration par lieux ;
- départ à l’Accueil ;
- personnages et documents contextualisés ;
- inventaire dynamique ;
- objets observables, objets trouvés, objets reposables ;
- badge visiteur présenté dans la salle informatique ;
- salle informatique fermée puis ouverte ;
- historique d’impression visible dès ouverture de la salle informatique ;
- énigme de chronologie ;
- énigme de contradiction ;
- indices progressifs ;
- résolution finale prudente ;
- fin heureuse ;
- fiche enseignant ;
- fiche élève imprimable ;
- direction artistique initiale ;
- portraits harmonisés ;
- vignettes temporaires de lieux ;
- icônes d’objets ;
- icônes de statuts UI ;
- registre central des scénarios ;
- modèle de scénario pour futures enquêtes.
- sauvegarde / chargement explicite de progression par scénario avec trois slots locaux ;
- sélection minimale de scénario sur la page d'accueil ;
- deuxième enquête prototype `Le message effacé`.

## 3. Actions réalisées

### V0.1 — Squelette technique

Statut : fait.

Livrables :

- React + Vite + TypeScript ;
- Tailwind CSS ;
- structure `src/components`, `src/engine`, `src/data/scenarios`, `src/types` ;
- page d’accueil ;
- briefing ;
- architecture initiale.

### V0.2 — Moteur minimal de scénario

Statut : fait.

Livrables :

- types de scénario ;
- chargement local ;
- lieux, personnages, documents ;
- navigation accueil / briefing / enquête.

### V0.3 — Première enquête minimale

Statut : fait.

Livrables :

- deux énigmes ;
- progression locale ;
- feedbacks ;
- premiers documents débloqués.

### V0.3.1 / V0.3.3 — Ajustements UX et cohérence narrative

Statut : fait.

Livrables :

- navigation recentrée sur les lieux ;
- séparation exploration / déductions ;
- correction de la contradiction Fahad ;
- cohérence des documents ;
- énigme de contradiction par sélection de deux pièces du dossier.

### V0.4 — Inventaire minimal

Statut : fait.

Livrables :

- objets observables ;
- panneau `Objets trouvés` ;
- badge visiteur ;
- ticket de bus ;
- clé USB d’ambiance ;
- salle informatique verrouillée puis accessible.

### V0.5 — Indices progressifs

Statut : fait.

Livrables :

- champ `Puzzle.hints` ;
- bouton `Voir un indice` ;
- indices progressifs sans score ni pénalité.

### V0.5.1 / V0.6.2 — Stabilisation de jouabilité

Statut : fait.

Livrables :

- badge utilisé dans son contexte spatial ;
- bouton `Présenter le badge` ;
- brouillon de mail retiré de l’énigme 2 avant sa découverte ;
- départ à l’Accueil ;
- historique d’impression disponible dès ouverture de la salle informatique ;
- métadonnées déductives masquées dans l’interface joueur.

### V0.5.2 — Décor vivant contrôlé

Statut : fait.

Livrables :

- ajout de l’Accueil ;
- ajout de Thi-Thai ;
- ajout d’une affiche décorative sur les inscriptions aux examens ;
- règle : ajouter du monde autour de l’enquête, pas une nouvelle enquête dans l’enquête.

### V0.6 — Résolution finale prudente

Statut : fait.

Livrables :

- hypothèse finale ;
- sélection de trois pièces justificatives ;
- feedbacks non accusateurs ;
- fin heureuse ;
- dossier de Chen validé.

### V0.7 — Fiche enseignant

Statut : fait.

Livrable :

- `docs/teacher-guide-v0.7.md`.

### V0.7.1 — Fiche élève imprimable

Statut : fait.

Livrable :

- `docs/student-investigation-sheet-v0.7.1.md`.

### V0.9.0 — Cadrage graphique initial

Statut : fait.

Livrables :

- `docs/visual-audit-v0.9.0.md` ;
- `docs/visual-guidelines-v0.9.0.md` ;
- direction artistique : carnet d’enquête clair dans un campus vivant ;
- première passe UI légère.

### V0.9.1 — Progression masquable et guidage intégré

Statut : fait.

Livrables :

- bandeau `Que faire maintenant ?` intégré dans `Progression` ;
- panneau progression masquable ;
- progression masquée par défaut.

### V0.9.2 — Portraits harmonisés

Statut : fait.

Livrables :

- type `Character.portraitUrl` ;
- portraits récurrents dans `public/assets/portraits/` ;
- intégration dans `CharacterDetail` ;
- fallback par initiale ;
- documentation `docs/portrait-system-v0.9.2.md`.

### V0.9.3 — Vignettes de lieux et icônes d’objets

Statut : fait.

Livrables :

- type `Location.vignetteUrl` ;
- type `InventoryObject.iconUrl` ;
- vignettes temporaires de lieux dans `public/assets/locations/` ;
- icônes d’objets dans `public/assets/objects/` ;
- intégration dans `LocationDetail` et `InventoryPanel` ;
- documentation `docs/location-vignettes-and-object-icons-v0.9.3.md`.

### V0.9.4 — Icônes de statuts d’interface

Statut : fait.

Livrables :

- `src/components/icons/StatusIcons.tsx` avec SVG intégrés ;
- icônes pour lieux fermés ou ouverts ;
- icônes pour documents nouveaux ou lus ;
- icônes pour objets trouvés ou utilisés ;
- icônes pour énigmes validées et indices disponibles ;
- documentation `docs/ui-status-icons-v0.9.4.md`.

### V0.10 — Préparation multi-enquêtes

Statut : fait.

Livrables :

- registre central `src/data/scenarios/index.ts` ;
- fonction de récupération par identifiant ;
- fonction de récupération du scénario par défaut ;
- `Le dossier disparu` conservé comme seul scénario enregistré ;
- modèle `src/data/scenarios/scenarioTemplate.ts` non enregistré ;
- documentation `docs/multi-scenario-architecture-v0.10.md`.

### V0.10.1 / V0.10.2 / V0.10.3 — Relecture de mission et sauvegarde locale

Statut : fait.

Livrables :

- bouton `Relire la mission` sans sortie de `InvestigationPage` ;
- note de cadrage `docs/progress-save-load-notes-v0.10.1.md` ;
- module `src/engine/progressStorage.ts` ;
- V0.10.2 : sauvegarde automatique `localStorage` par scenario ;
- V0.10.3 : sauvegarde / chargement explicite avec trois slots locaux ;
- cle active `enquete-fle:progress:<scenarioId>:slot:<slotNumber>` ;
- documentation `docs/progress-save-load-v0.10.3.md`.

### V0.11 — Deuxième enquête prototype

Statut : fait.

Livrables :

- scénario `Le message effacé` dans `src/data/scenarios/messageEfface.ts` ;
- enregistrement dans `src/data/scenarios/index.ts` ;
- sélection minimale de scénario sur l'accueil ;
- réutilisation des mécaniques existantes sans nouveau moteur ;
- documentation `docs/second-scenario-message-efface-v0.11.md`.

## 4. Action immédiate recommandée

### Action 21 — Auditer la V0.11 multi-enquêtes

Statut : à faire.

Objectif :

Vérifier que les deux enquêtes sont accessibles, que `Le dossier disparu` n'est pas cassé, que `Le message effacé` reste court et cohérent, et que les sauvegardes locales restent séparées par scénario.

Commande :

```powershell
cd C:\dev\enquete-fle
npm.cmd run dev -- --host 127.0.0.1 --port 5173
```

À vérifier :

- les deux enquêtes apparaissent-elles sur l'accueil ?
- `Le dossier disparu` reste-t-il jouable de bout en bout ?
- `Le message effacé` se lance-t-il correctement ?
- les lieux, personnages, documents et objets de la deuxième enquête sont-ils lisibles ?
- les deux énigmes de `Le message effacé` sont-elles jouables ?
- la résolution finale reste-t-elle prudente et non accusatrice ?
- les clés `enquete-fle:progress:le-dossier-disparu:slot:1/2/3` et `enquete-fle:progress:le-message-efface:slot:1/2/3` restent-elles séparées ?
- aucun crash n'apparaît-il si un scénario réutilise des assets existants ?

Décision attendue après audit :

- si la V0.11 est stable : préparer un audit pédagogique ou une correction légère V0.11.1 ;
- si la sélection ou les sauvegardes sont fragiles : corriger avant toute nouvelle enquête.

## 5. Action suivante recommandée

### Action 22 — Auditer la sauvegarde explicite avec deux scénarios

Statut : à faire.

Objectif :

Tester en détail les trois slots locaux sur les deux enquêtes et vérifier qu'aucune sauvegarde ne se charge dans le mauvais scénario.

### Action 23 — Préparer une correction légère V0.11.1 si l'audit le demande

Statut : à faire.

Objectif :

Corriger uniquement les libellés, incohérences ou problèmes d'accès révélés par l'audit V0.11, sans ajouter de nouvelle mécanique.

## 6. Action pédagogique suivante possible

### Action 24 — Préparer la V0.7.2 : version simplifiée B1

Statut : à faire.

Objectif :

Préparer une version plus accessible B1 de certains textes longs, sans appauvrir la logique d’enquête ni modifier les mécaniques.

À vérifier :

- longueur des fiches personnages ;
- longueur des documents de témoignage ;
- lisibilité de la conclusion finale ;
- maintien de la prudence argumentative ;
- distinction entre simplification linguistique et simplification excessive de l’enquête.

## 7. Actions reportées

Les actions suivantes sont importantes mais ne doivent pas être lancées sans décision explicite :

- consultation parallèle document / énigme ;
- mode enseignant intégré ;
- deuxième scénario ;
- outil d’édition de scénarios ;
- suivi des résultats étudiants ;
- backend ;
- base de données ;
- sons ;
- identité graphique définitive des lieux.

## 8. Règle de priorité

À chaque reprise du projet, commencer par demander :

> Quelle est la prochaine action limitée, utile et vérifiable ?

Si une action ne répond pas à cette question, elle doit être reportée ou reformulée.
