# État du projet — Jeu d’enquête FLE/FOU

## Version actuelle

**V0.10.2 — jeu complet, exploitable pédagogiquement, avec préparation multi-enquêtes et sauvegarde locale minimale de progression.**

Le dépôt GitHub existe et le prototype est jouable dans le navigateur.

Dépôt : `https://github.com/franzbib/enquete-fle`

Dossier local de référence : `C:\dev\enquete-fle`

## Vision générale validée

Le projet consiste à créer un jeu d’enquête FLE/FOU en ligne, jouable sur navigateur, en 2D principalement statique, destiné à des apprenants de français de niveau B1+/B2.

Le jeu doit proposer une enquête documentaire : le joueur explore des lieux, consulte des documents, interroge des personnages, collecte un nombre restreint d’objets, repère des contradictions, formule des hypothèses et résout une affaire.

La langue française doit être un outil de déduction. Les objectifs pédagogiques doivent rester intégrés au jeu et ne pas apparaître comme des exercices scolaires isolés.

## Principe directeur

Le joueur doit avoir l’impression de mener une enquête, non de remplir une fiche de grammaire.

Les compétences linguistiques servent à :

- comprendre des témoignages ;
- reconstituer une chronologie ;
- comparer des versions contradictoires ;
- interpréter des documents ;
- distinguer objets et pièces du dossier ;
- formuler une hypothèse prudente ;
- justifier une conclusion par des preuves.

## État fonctionnel du jeu

Le scénario prototype **Le dossier disparu** est jouable de bout en bout.

La boucle principale est désormais :

1. accueil ;
2. briefing ;
3. exploration par lieux ;
4. consultation de personnages et documents ;
5. prise et gestion d’objets ;
6. utilisation contextualisée du badge pour ouvrir la salle informatique ;
7. résolution d’une chronologie ;
8. résolution d’une contradiction ;
9. indices progressifs ;
10. résolution finale prudente ;
11. fin heureuse avec validation du dossier de Chen.

## Ce qui est fait techniquement

- Squelette React / Vite / TypeScript.
- Tailwind CSS configuré.
- Structure `/src` organisée en composants, types, moteur minimal et scénarios.
- Chargement local du scénario `Le dossier disparu`.
- Navigation accueil / briefing / enquête.
- Exploration par lieux.
- Départ de l’enquête à l’Accueil.
- Lieux contextualisés avec documents, personnages présents et objets observables.
- Salle informatique visible mais fermée au départ.
- Badge visiteur à présenter depuis la salle informatique fermée.
- Historique d’impression visible dès que la salle informatique est ouverte.
- Inventaire dynamique : objets pris, masquage de l’inventaire, action `Reposer`, objets utilisés non reposables.
- Deux énigmes principales : chronologie et contradiction.
- Indices progressifs pour les énigmes.
- Résolution finale prudente, non accusatrice, fondée sur hypothèse + pièces justificatives.
- Fin heureuse : Delphine aide Chen à remettre le dossier en ordre.
- Métadonnées déductives masquées dans l’interface joueur : les personnages et lieux cités ne sont pas affichés automatiquement dans les documents.
- Registre central des scénarios pour préparer l'ajout futur d'autres enquêtes.
- Modèle de scénario non enregistré pour guider les futures créations.
- Sauvegarde locale minimale de progression par scénario avec `localStorage`.
- Clé de sauvegarde : `enquete-fle:progress:<scenarioId>`.

## État narratif et pédagogique

Sont validés :

- remplacement de Madame Delorme par Delphine ;
- distinction entre discours direct dans les fiches personnages et discours indirect dans les documents de témoignage ;
- ajout d’un décor vivant contrôlé avec l’Accueil et Thi-Thai ;
- résolution finale par explication prudente plutôt que par accusation ;
- fiche enseignant externe V0.7 ;
- fiche élève imprimable V0.7.1.

Documents pédagogiques existants :

- `docs/teacher-guide-v0.7.md` ;
- `docs/student-investigation-sheet-v0.7.1.md`.

## État graphique

La direction artistique actuelle est :

> Un carnet d’enquête clair dans un campus vivant.

Sont en place :

- audit visuel V0.9.0 ;
- charte visuelle V0.9.0 ;
- première passe UI : surfaces papier, encre sombre, vert administratif, bleu dossier, ambre indice ;
- progression masquable et guidage intégré ;
- bibliothèque de portraits harmonisés V0.9.2 ;
- portraits intégrés dans les fiches personnages via `portraitUrl` ;
- fallback par initiale pour les personnages sans portrait ;
- portraits agrandis dans `CharacterDetail` ;
- vignettes temporaires de lieux V0.9.3 ;
- icônes d’objets V0.9.3 ;
- système d'icônes de statuts UI (inline SVGs) V0.9.4.

Assets principaux :

- portraits dans `public/assets/portraits/` ;
- vignettes temporaires de lieux dans `public/assets/locations/` ;
- icônes d’objets dans `public/assets/objects/`.

Les vignettes de lieux sont explicitement temporaires et pourront être remplacées plus tard.

## Documents de pilotage présents

Le dossier `docs/agent-context/` contient notamment :

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
- `11_CONTROLE_COHERENCE_NARRATIVE.md`

## Ce qui reste à faire

Priorités possibles :

1. Audit technique et UX de la sauvegarde locale V0.10.2.
2. Audit technique et documentaire de la préparation multi-enquêtes V0.10.
3. Première enquête prototype supplémentaire, seulement après validation du cadre V0.10.
4. V0.7.2 — version simplifiée B1 des textes longs.
5. V0.8 — mode enseignant minimal, plus tard.
6. V1.0 — stabilisation du premier scénario complet.

## Points à surveiller

- Ne pas transformer le jeu en quiz grammatical.
- Ne pas multiplier les fonctionnalités avant stabilisation du premier scénario.
- Ne pas créer un inventaire trop complexe.
- Ne pas rendre l’interface trop décorative au détriment de la lisibilité.
- Ne pas utiliser systématiquement tous les personnages récurrents : ils restent une réserve évolutive.
- Maintenir la distinction entre preuve, indice, objet et interprétation.
- Vérifier régulièrement que la documentation de pilotage suit bien l’état réel du code.

## Dernière mise à jour

Mise à jour documentaire après la sauvegarde locale minimale V0.10.2.
