# Architecture technique — V0.10.3

## Objectif

La V0.10 conserve la boucle d'enquête complète construite jusqu'à la V0.6, prolonge les supports pédagogiques V0.7/V0.7.1, conserve l'intégration graphique V0.9.x et prépare l'architecture multi-enquêtes.

Le joueur commence à l'Accueil, consulte les lieux, personnages et documents disponibles, utilise un inventaire dynamique, présente le badge visiteur dans la salle informatique fermée, demande des indices gradués en cas de blocage, résout deux énigmes, puis formule une explication finale prudente.

Cette version reste volontairement limitée : pas de backend, pas de base de données, pas de moteur de jeu lourd, pas d’animation décorative complexe, pas de combinaison d’objets, pas de score lié aux indices, pas d'accusation punitive, pas encore de deuxième scénario complet et pas encore d'éditeur de scénario.

## Stack

- React
- Vite
- TypeScript
- Tailwind CSS

## Structure

```text
src/
  components/
    BriefingPage.tsx
    CharacterDetail.tsx
    DocumentDetail.tsx
    FinalResolutionDetail.tsx
    HomePage.tsx
    InventoryPanel.tsx
    InvestigationPage.tsx
    LocationDetail.tsx
    PuzzleDetail.tsx
    ScenarioList.tsx
  data/
    scenarios/
      dossierDisparu.ts
      index.ts
      scenarioTemplate.ts
  engine/
    progressStorage.ts
    scenarioLoader.ts
  types/
    scenario.ts
  styles.css
```

## Données de scénario

Les données sont dans `src/data/scenarios/dossierDisparu.ts`.

Le scénario contient désormais :

- 4 lieux ;
- 6 personnages ;
- 9 documents courts ;
- 3 objets utiles ou contextuels ;
- 2 énigmes simples ;
- 1 résolution finale prudente ;
- 3 indices progressifs par énigme ;
- des éléments de preuve textuels.

Certains documents sont disponibles dès le départ. D’autres sont débloqués après résolution d’une énigme.

La V0.5.2 ajoute `accueil`, un lieu secondaire accessible dès le départ, avec Thi-Thai et une affiche administrative. Ces éléments enrichissent l'univers sans modifier la chronologie, les énigmes, les indices, l'inventaire ou l'accès à la salle informatique.

## Registre multi-enquêtes V0.10

La V0.10 ajoute un registre central des scénarios dans `src/data/scenarios/index.ts`.

Ce registre exporte :

- `scenarios` : liste des scénarios disponibles ;
- `defaultScenarioId` : identifiant du scénario lancé par défaut ;
- `getScenarioById(id)` : récupération d'un scénario par identifiant ;
- `getDefaultScenario()` : récupération du scénario par défaut.

En V0.10, le seul scénario enregistré reste `le-dossier-disparu`. Le fichier `src/data/scenarios/scenarioTemplate.ts` fournit un modèle conforme à `Scenario`, mais il n'est pas enregistré dans le jeu.

`src/engine/scenarioLoader.ts` délègue désormais la récupération au registre central et conserve les utilitaires de recherche utilisés par les composants.

La documentation détaillée est dans `docs/multi-scenario-architecture-v0.10.md`.

## Types

Les types sont dans `src/types/scenario.ts`.

Types principaux :

- `Scenario`
- `Location`
- `Character`
- `InvestigationDocument`
- `EvidenceText`
- `InventoryObject`
- `Puzzle`
- `PuzzleAnswer`
- `FinalResolution`
- `Hint`

`InventoryObject` pilote désormais un inventaire minimal. `Hint` reste préparatoire.
Depuis la V0.5, `Puzzle.hints` contient directement les indices progressifs affichés dans chaque énigme. Cette structure simple évite un moteur d'indices séparé tant que le prototype ne gère qu'un scénario.

Pour les lieux, la V0.3.1 distingue desormais :

- `presentCharacterIds` : personnages physiquement presents et consultables dans ce lieu ;
- `relatedCharacterIds` : personnages seulement relies au lieu par une preuve, une trace ou un document.

Cette distinction evite de laisser croire qu'un meme personnage se trouve simultanement dans plusieurs lieux.

Les temoignages sont rattaches au personnage qui parle ou au lieu ou il est interroge.
Depuis la V0.4, les fiches personnages et les documents de temoignage ne portent pas le meme type de parole :

- `Character.directSpeech` contient la parole directe affichee dans la fiche personnage ;
- `Character.testimony` conserve un resume indirect rattache au personnage ;
- les documents `documentType: 'testimony'` utilisent un discours indirect ou un compte rendu.

Cette distinction renforce l'immersion narrative et introduit discretement un travail FLE/FOU sur le passage du discours direct au discours indirect. Elle ne doit pas apparaitre dans l'interface comme un exercice scolaire.
Les lieux techniques, comme la salle informatique, doivent contenir plutot des traces materielles ou numeriques : historique d'impression, brouillon de mail, journal d'activite, trace de connexion ou fichier ouvert.
Les traces techniques doivent creer une contradiction credible sans accuser trop directement un personnage : elles peuvent prouver une presence, une session active ou un horaire incoherent, sans prouver a elles seules la manipulation du dossier disparu.
Un temoignage ne doit pas introduire un indice materiel important si cet indice n'est pas observable, documente ou recuperable ailleurs dans l'enquete. La declaration du personnage present en salle informatique reste donc neutre : M. Rodolphe signale une imprimante deja utilisee, pas une pochette absente des autres pieces.

Dans la vue d'un lieu, seuls les personnages de `presentCharacterIds` sont affiches.
`relatedCharacterIds` reste disponible dans les donnees pour les preuves et evolutions futures, mais ne doit pas creer une rubrique visible qui suggere une presence physique.
Dans la fiche d'un personnage, seuls les lieux ou le personnage est physiquement rencontre sont affiches. Les liens de type `relatedLocationIds` restent internes et doivent etre deduits par les documents, traces techniques ou temoignages, pas reveles directement par l'interface joueur.
Les objets d'ambiance peuvent etre declares comme `InventoryObject` de type `ambient` et rattaches a un lieu via `objectIds`. Ils peuvent etre pris et consultes, mais n'ont pas forcement d'effet de deblocage.
Depuis la V0.4, `available: false` peut vraiment limiter un lieu. La salle informatique apparait dans la liste, mais reste en acces limite tant que le badge visiteur n'a pas ete utilise depuis la vue de ce lieu.
Un document situé dans un lieu devient consultable dès que le lieu est accessible, sauf justification narrative explicite. Par exemple, l'historique d'impression ne dépend pas d'une énigme, mais devient disponible dès que la salle informatique est ouverte.
L’interface joueur ne doit pas afficher automatiquement les métadonnées déductives comme les personnages ou lieux cités. Ces liens peuvent rester dans les données internes, mais le joueur doit les déduire à partir du contenu des documents.

## Inventaire V0.4

La progression d'inventaire reste locale a `InvestigationPage`.

Etat React utilise :

- `ownedObjectIds` : objets pris par le joueur ;
- `usedObjectIds` : objets deja utilises ;
- `unlockedLocationIds` : lieux ouverts par un objet ;
- `unlockedDocumentIds` : documents ouverts par une enigme ou un objet.

`InventoryPanel` affiche seulement les objets trouves. Le detail d'un lieu affiche les objets observables dans ce lieu et permet de les prendre. L'inventaire ne propose plus de bouton d'utilisation générique pour les objets d'accès. Ces objets doivent être utilisés dans leur contexte spatial.

Les objets V0.4 du scenario prototype sont :

- `badge-visiteur` : objet d'acces trouve au secretariat, utilise pour ouvrir la salle informatique ;
- `ticket-bus` : objet de preuve faible trouve dans le couloir, consultable sans effet majeur ;
- `cle-usb-exercices-b1` : objet d'ambiance trouve en salle informatique, sans lien direct avec la culpabilite de Fahad.

Cette logique n'est pas un inventaire RPG : pas de combinaison, pas de crafting, pas de score, pas d'accusation finale.

## Progression V0.5

La progression est locale à `InvestigationPage`.

État React utilisé :

- énigmes validées ;
- documents débloqués ;
- feedback de progression ;
- nombre d'indices révélés par énigme ;
- sélection courante.

Depuis la correction UX post-V0.10, le briefing peut être relu depuis l'écran d'enquête avec le bouton `Relire la mission`. Ce bouton affiche un panneau local dans `InvestigationPage` au lieu de revenir à l'écran de briefing. La progression locale n'est donc pas perdue quand le joueur relit la mission.

Depuis la V0.10.3, l'etat de progression peut etre sauvegarde et charge explicitement par scenario avec trois slots locaux dans `localStorage`. Cette sauvegarde reste minimale et locale : elle ne cree ni backend, ni compte utilisateur, ni suivi enseignant.

La cle de stockage suit le format `enquete-fle:progress:<scenarioId>:slot:<slotNumber>`. Le module `src/engine/progressStorage.ts` gere la lecture, la validation et l'ecriture de ces sauvegardes. Voir `docs/progress-save-load-v0.10.3.md`.

Les énigmes ne constituent pas encore un moteur complet. Elles utilisent seulement deux formes de réponse :

- ordre de trois événements ;
- choix d’une contradiction parmi trois propositions.

Depuis la V0.3.3, une énigme peut aussi demander une mise en relation de deux pièces du dossier avec `case-file-contradiction` :

- étape 1 : sélectionner deux documents, témoignages, notes ou traces techniques ;
- étape 2 : interpréter prudemment ce que leur comparaison montre.

Cette mécanique relève du raisonnement d'enquête et prépare un futur dossier de preuves. Elle ne doit pas être confondue avec l'inventaire physique : elle manipule des pièces consultées, pas des objets à obtenir ou utiliser.
Les feedbacks doivent rester prudents : une contradiction peut montrer une chronologie problématique sans accuser directement un personnage.

## Indices V0.5

Chaque énigme principale peut proposer jusqu'à trois indices dans `Puzzle.hints`.

L'affichage est progressif :

- premier clic : indice 1 ;
- deuxième clic : indice 2 ;
- troisième clic : indice 3 ;
- ensuite : message indiquant que tous les indices sont affichés.

L'état `revealedHintCounts` reste local à `InvestigationPage`. Il n'utilise ni sauvegarde, ni backend, ni score.

Les indices servent à relire et comparer :

- repérer les marqueurs temporels ;
- revenir aux témoignages ;
- chercher une trace horaire ;
- comparer une déclaration et un document technique ;
- formuler une interprétation prudente.

Ils ne doivent pas donner directement toute la réponse, accuser un personnage ou introduire un fait absent des pièces déjà disponibles.

## Décor vivant V0.5.2

Les scénarios peuvent intégrer des éléments de décor vivant : lieux secondaires, personnages secondaires, documents d'ambiance et touches d'humour. Ces éléments doivent ajouter du monde autour de l'enquête, pas une nouvelle enquête dans l'enquête.

Règles :

- rester facultatifs ;
- ne pas bloquer la progression ;
- ne pas ressembler à des preuves fortes ;
- ne pas créer de fausse piste injuste ;
- ne pas introduire d'objet matériel important non observable ailleurs ;
- rester compatibles avec le niveau B1/B2.

Dans `Le dossier disparu`, l'accueil et Thi-Thai jouent ce rôle. L'affiche d'inscription aux examens est un document d'ambiance et ne participe à aucune énigme.


## Énigmes

### Énigme 1 — Chronologie

Le joueur remet trois événements dans l’ordre.

Réussite :

- feedback “Chronologie validée” ;
- oriente le joueur vers la vérification des accès et des traces.

### Énigme 2 — Contradiction

Le joueur compare le témoignage de Fahad avec l’historique d’impression.

Réussite :

- feedback “Contradiction repérée” ;
- déblocage du brouillon de mail non envoyé.

## Résolution finale V0.6

La V0.6 introduit `Scenario.finalResolution`.

La résolution finale n'est pas conçue comme une accusation brutale. Elle demande au joueur :

- de choisir l'explication la plus plausible ;
- de sélectionner trois pièces du dossier qui la soutiennent ;
- de valider une conclusion prudente.

Le composant `FinalResolutionDetail` gère cette interaction localement. Il vérifie :

- l'hypothèse choisie ;
- les pièces justificatives sélectionnées.

La bonne hypothèse est une confusion de documents après le passage de Fahad au secrétariat. Les pièces attendues sont :

- `temoignage-fahad` ;
- `historique-impression` ;
- `brouillon-mail`.

Le feedback final insiste sur une solution réparatrice : Delphine reprend le dossier avec Chen, les documents sont vérifiés, l'attestation est réimprimée et le dossier est validé. Fahad n'est pas publiquement accusé.

## Cadrage graphique V0.9.0 à V0.9.3

La V0.9.0 introduit une première couche de design system dans `src/styles.css`.

Elle ajoute des classes visuelles locales pour :

- structure de page : `app-shell`, `page-frame`, `page-header` ;
- surfaces : `case-panel`, `side-panel`, `progress-card` ;
- variantes de fiches : lieu, personnage, document, énigme, résolution finale ;
- boutons : `primary-button`, `secondary-button`, `link-button` ;
- états : `status-pill`, `status-callout` ;
- contenus : `document-paper`, `speech-card`, `info-strip`, `item-card`, `choice-card`, `hint-panel`.

Objectif :

- améliorer la hiérarchie sans refondre l'UX ;
- distinguer visuellement lieux, documents, personnages, objets, énigmes et résolution finale ;
- installer une palette cohérente avec l'univers administratif / campus / enquête ;
- préparer puis accueillir les portraits, vignettes de lieux et icônes d'objets sans figer toute l'identité graphique finale.

Les documents associés sont :

- `docs/visual-audit-v0.9.0.md` ;
- `docs/visual-guidelines-v0.9.0.md` ;
- `docs/portrait-system-v0.9.2.md` ;
- `docs/location-vignettes-and-object-icons-v0.9.3.md` ;
- `docs/ui-status-icons-v0.9.4.md`.

Depuis la V0.9.2, `Character.portraitUrl` permet d'afficher un portrait harmonisé dans `CharacterDetail`. Depuis la V0.9.3, `Location.vignetteUrl` affiche une vignette temporaire de lieu dans `LocationDetail`, et `InventoryObject.iconUrl` affiche une icône d'objet dans `LocationDetail` et `InventoryPanel`. Depuis la V0.9.4, `src/components/icons/StatusIcons.tsx` fournit des icônes SVG inline pour les statuts d'interface.

## Ajouter plus tard un nouveau scénario

Quand le projet autorisera plusieurs enquêtes :

1. Créer un fichier dans `src/data/scenarios/`.
2. Exporter un objet conforme au type `Scenario`.
3. Importer le scénario dans `src/data/scenarios/index.ts`.
4. Ajouter le scénario à la liste `scenarios`.
5. Ajouter une sélection de scénario dans l’interface seulement quand plusieurs scénarios réels seront prêts.

La V0.10 ne crée pas de deuxième scénario complet.

## Direction après V0.10

La prochaine étape recommandée est un audit technique du cadre multi-enquêtes, puis la création d'une deuxième enquête prototype si le registre V0.10 est validé.

Le score complet, les visuels définitifs de lieux, le mode enseignant intégré, la sélection visible de scénario et un éventuel éditeur de scénarios restent à traiter plus tard.
