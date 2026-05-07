# Feuille de route progressive — Jeu d’enquête FLE/FOU

## 1. Objet du document

Ce document définit la progression du projet `enquete-fle`.

Il doit empêcher les agents IA de vouloir produire trop vite une version finale trop ambitieuse.

Le projet doit avancer par versions successives, chacune stable, testable et documentée.

## 2. Principe général

Le développement doit suivre une logique progressive :

1. cadrer ;
2. prototyper ;
3. tester ;
4. corriger ;
5. enrichir ;
6. documenter ;
7. recommencer.

La priorité absolue est de créer rapidement un prototype jouable, même très sobre.

Le jeu ne doit pas attendre son identité graphique finale pour devenir testable.

## 3. Ordre général du projet

L’ordre recommandé est le suivant :

1. Dossier documentaire.
2. Squelette technique.
3. Moteur minimal de scénario.
4. Première enquête minimale.
5. Système d’objets.
6. Système d’indices.
7. Accusation finale.
8. Tests de parcours.
9. Amélioration UX.
10. Mode enseignant.
11. Espace graphique enrichi.
12. Identité graphique.
13. Deuxième scénario.
14. Version publiable.

## 4. Version V0.0 — Cadrage documentaire

### Objectif

Créer une base de vérité documentaire pour les agents IA.

### Livrables

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

### Critère de validation

Un agent IA doit pouvoir lire le dossier `docs/agent-context/` et comprendre :

- la vision du projet ;
- les contraintes ;
- les interdits ;
- la progression ;
- la prochaine action utile.

### Statut

En cours.

## 5. Version V0.1 — Squelette technique

### Objectif

Créer une application React/Vite/TypeScript minimale.

### Agent principal

Codex.

### Livrables attendus

- projet React + Vite + TypeScript ;
- Tailwind configuré ;
- structure `/src` ;
- structure `/src/components` ;
- structure `/src/engine` ;
- structure `/src/data/scenarios` ;
- structure `/src/types` ;
- page d’accueil minimale ;
- écran de briefing minimal ;
- documentation d’architecture.

### Ce qui ne doit pas encore être fait

- pas de moteur complexe ;
- pas de backend ;
- pas d’identité graphique finale ;
- pas d’animation ;
- pas de deuxième scénario.

### Critère de validation

Le projet doit pouvoir se lancer localement.

L’interface doit afficher au minimum :

- un titre ;
- un bouton commencer ;
- un écran de briefing provisoire.

## 6. Version V0.2 — Moteur minimal de scénario

### Objectif

Permettre au jeu de charger une enquête depuis un fichier de données.

### Agent principal

Codex.

### Livrables attendus

Types TypeScript :

- `Scenario`
- `Location`
- `Character`
- `InvestigationDocument`
- `InventoryObject`
- `Puzzle`
- `Hint`

Fonctionnalités :

- charger un scénario ;
- afficher les lieux ;
- afficher les personnages ;
- afficher les documents ;
- afficher un briefing ;
- naviguer entre les sections.

### Critère de validation

Une enquête très simple doit pouvoir être modifiée dans les données sans modifier le moteur.

## 7. Version V0.3 — Première enquête jouable minimale

### Objectif

Créer une première version jouable de “Le dossier disparu”.

### Agent principal

Codex, avec supervision du chef d’orchestre.

### Contenu minimal

- 3 lieux ;
- 3 personnages ;
- 4 documents ;
- 2 objets ;
- 2 énigmes ;
- une accusation finale simple.

### Critère de validation

Un joueur doit pouvoir commencer et terminer l’enquête en 20 à 30 minutes.

Le jeu peut être graphiquement très simple.

## 8. Version V0.4 — Inventaire et objets

### Objectif

Rendre les objets fonctionnels.

### Agent principal

Codex.

### Fonctionnalités

- obtenir un objet ;
- afficher l’inventaire ;
- utiliser un objet ;
- débloquer un lieu ou un document ;
- marquer un objet comme preuve possible ;
- utiliser un objet dans l’accusation finale.

### Types d’objets à prévoir

- objet d’accès ;
- objet de preuve ;
- objet d’interaction ;
- objet linguistique.

### Critère de validation

Chaque objet présent dans l’enquête doit avoir une fonction claire.

Aucun objet ne doit être purement décoratif.

## 9. Version V0.5 — Système d’indices

### Objectif

Éviter les blocages.

### Agent principal

Codex.

### Fonctionnalités

Chaque énigme importante doit proposer :

- indice niveau 1 : orientation ;
- indice niveau 2 : raisonnement ;
- indice niveau 3 : déblocage.

Le système doit enregistrer les indices utilisés.

### Critère de validation

Un joueur bloqué doit toujours pouvoir progresser sans aide extérieure.

## 10. Version V0.6 — Accusation finale enrichie

### Objectif

Transformer la fin de l’enquête en véritable acte de déduction.

### Agent principal

Codex + agent scénariste.

### Fonctionnalités

Le joueur doit pouvoir :

- choisir un suspect ;
- choisir des preuves ;
- éventuellement sélectionner une justification ;
- recevoir un retour nuancé.

### Résultats possibles

- mauvais suspect ;
- bon suspect mais mauvaises preuves ;
- bonnes preuves mais justification incomplète ;
- résolution complète.

### Critère de validation

La fin doit vérifier la cohérence de l’hypothèse, pas seulement le nom du coupable.

## 11. Version V0.7 — Audit UX

### Objectif

Repérer les frictions.

### Agent principal

Antigravity.

### À vérifier

- navigation ;
- lisibilité ;
- boutons ;
- documents consultés ou non ;
- objets trouvés ou non ;
- lieux verrouillés ;
- accès aux indices ;
- clarté de l’accusation finale.

### Livrables

- rapport UX ;
- captures d’écran ;
- liste de corrections prioritaires.

### Critère de validation

Le joueur doit toujours comprendre :

- où il est ;
- ce qu’il peut faire ;
- ce qu’il a déjà trouvé ;
- ce qui reste à examiner.

## 12. Version V0.8 — Mode enseignant

### Objectif

Rendre le jeu exploitable en classe.

### Agent principal

Codex + agent didactique.

### Contenu

- niveau CECRL ;
- durée ;
- objectifs pédagogiques ;
- points de langue ;
- corrigé ;
- solution ;
- déroulement conseillé ;
- prolongements oraux ;
- grille d’observation.

### Critère de validation

Un autre enseignant doit pouvoir utiliser l’enquête sans explication externe.

## 13. Version V0.9 — Espace graphique enrichi

### Objectif

Améliorer la présence visuelle sans figer toute l’identité graphique.

### Agent principal

Antigravity.

### Travail attendu

- améliorer la hiérarchie visuelle ;
- organiser les zones de l’écran ;
- rendre les documents plus lisibles ;
- rendre l’inventaire plus clair ;
- prévoir des emplacements pour portraits ;
- prévoir des emplacements pour objets ;
- améliorer l’écran final.

### Critère de validation

Le jeu doit devenir visuellement plus confortable, sans être encore graphiquement définitif.

## 14. Version V1.0 — Première version publiable

### Objectif

Obtenir une version stable et partageable.

### Contenu attendu

- une enquête complète ;
- interface claire ;
- moteur stable ;
- inventaire fonctionnel ;
- indices gradués ;
- accusation finale ;
- mode enseignant ;
- documentation ;
- tests ;
- déploiement possible.

### Critère de validation

Le jeu peut être utilisé en classe avec des étudiants B1/B2.

## 15. Après V1.0 — Extension du projet

Après une première version stable, le projet pourra évoluer vers :

- deuxième enquête ;
- niveau B2 plus exigeant ;
- nouveaux objectifs linguistiques ;
- meilleure identité graphique ;
- portraits définitifs ;
- objets définitifs ;
- bibliothèque de scénarios ;
- outil d’édition de scénarios ;
- suivi enseignant éventuel ;
- export de résultats éventuel.

Ces évolutions ne doivent pas être lancées avant stabilisation du premier prototype.

## 16. Règle d’or

À chaque étape, demander :

> Quelle est la plus petite amélioration qui rend le jeu plus jouable, plus clair ou plus fidèle à sa vision ?

Si une proposition ne sert pas cette question, elle doit être reportée.
