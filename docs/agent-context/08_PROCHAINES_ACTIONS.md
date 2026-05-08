# Prochaines actions — Jeu d’enquête FLE/FOU

## 1. Objet du document

Ce document indique les prochaines actions concrètes du projet `enquete-fle`.

Une prochaine action doit rester limitée, claire, vérifiable et utile.

Ce document sert au chef d’orchestre pour reprendre le projet rapidement, identifier l’état réel d’avancement et préparer la prochaine intervention de Codex, Antigravity ou d’un autre agent.

## 2. État actuel

**Version actuelle : V0.10 — jeu complet, exploitable pédagogiquement, avec préparation multi-enquêtes.**

Le dépôt GitHub existe :

`https://github.com/franzbib/enquete-fle`

Le scénario prototype **Le dossier disparu** est jouable de bout en bout.

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

## 4. Action immédiate recommandée

### Action 21 — Auditer la préparation multi-enquêtes V0.10

Statut : à faire.

Objectif :

Vérifier que la préparation multi-enquêtes reste maintenable, que `Le dossier disparu` reste le scénario par défaut, et que le modèle de scénario ne crée pas de deuxième enquête visible.

Commande :

```powershell
cd C:\dev\enquete-fle
npm.cmd run dev -- --host 127.0.0.1 --port 5173
```

À vérifier :

- le registre contient-il uniquement les scénarios réels ?
- `scenarioTemplate` reste-t-il non enregistré ?
- `loadDefaultScenario()` lance-t-il toujours `Le dossier disparu` ?
- aucun composant ne dépend-il d'un scénario codé en dur ?
- la documentation suffit-elle pour créer une deuxième enquête proprement ?

Décision attendue après audit :

- si le cadre est clair : créer une deuxième enquête prototype en suivant la procédure V0.10 ;
- si le cadre reste fragile : demander une micro-correction d'architecture ou de documentation avant toute nouvelle enquête.

## 5. Action suivante recommandée

### Action 22 — V0.10.2 : sauvegarde locale minimale de progression

Statut : à faire.

Objectif :

Préparer une sauvegarde / chargement local de progression pour les futures enquêtes longues, sans backend ni comptes utilisateurs.

Note de cadrage :

- l'état actuel reste stocké dans `InvestigationPage` ;
- cela suffit pour une enquête courte ;
- une première solution raisonnable serait une sauvegarde `localStorage` par scénario ;
- la clé proposée est `enquete-fle:progress:<scenarioId>` ;
- les éléments à prévoir sont : sélection actuelle, documents lus, documents débloqués, objets possédés, objets utilisés, objets reposés et leur lieu, lieux déverrouillés, énigmes résolues, indices révélés, résolution finale validée et éventuellement état des panneaux masquables.

Document de suivi :

- `docs/progress-save-load-notes-v0.10.1.md`.

### Action 23 — Préparer une deuxième enquête prototype

Statut : à faire.

Objectif :

Créer une deuxième enquête courte en suivant strictement le cadre V0.10, sans refondre le moteur ni les composants.

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
