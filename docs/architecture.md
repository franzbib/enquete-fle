# Architecture technique — V0.5.2

## Objectif

La V0.5 ajoute un système d'indices progressifs à la première boucle d'enquête. La V0.5.2 ajoute un décor vivant contrôlé autour de l'enquête principale.

Le joueur peut consulter les lieux, personnages et documents disponibles, sélectionner deux énigmes simples, répondre localement, recevoir un feedback sobre, obtenir quelques objets, utiliser le badge visiteur pour accéder à la salle informatique et demander des indices gradués en cas de blocage.

Cette version reste volontairement limitée : pas de backend, pas de base de données, pas de moteur de jeu lourd, pas d’animation décorative, pas de combinaison d’objets, pas de score lié aux indices, pas d’accusation finale et pas de deuxième scénario.

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
    HomePage.tsx
    InventoryPanel.tsx
    InvestigationPage.tsx
    LocationDetail.tsx
    PuzzleDetail.tsx
    ScenarioList.tsx
  data/
    scenarios/
      dossierDisparu.ts
  engine/
    scenarioLoader.ts
  types/
    scenario.ts
```

## Données de scénario

Les données sont dans `src/data/scenarios/dossierDisparu.ts`.

Le scénario contient désormais :

- 4 lieux ;
- 6 personnages ;
- 9 documents courts ;
- 3 objets utiles ou contextuels ;
- 2 énigmes simples ;
- 3 indices progressifs par énigme ;
- des éléments de preuve textuels.

Certains documents sont disponibles dès le départ. D’autres sont débloqués après résolution d’une énigme.

La V0.5.2 ajoute `accueil`, un lieu secondaire accessible dès le départ, avec Thi-Thai et une affiche administrative. Ces éléments enrichissent l'univers sans modifier la chronologie, les énigmes, les indices, l'inventaire ou l'accès à la salle informatique.

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
Un temoignage ne doit pas introduire un indice materiel important si cet indice n'est pas observable, documente ou recuperable ailleurs dans l'enquete. En V0.3.3, la declaration de M. Armand reste donc neutre : elle signale une imprimante deja utilisee, pas une pochette absente des autres pieces.

Dans la vue d'un lieu, seuls les personnages de `presentCharacterIds` sont affiches.
`relatedCharacterIds` reste disponible dans les donnees pour les preuves et evolutions futures, mais ne doit pas creer une rubrique visible qui suggere une presence physique.
Dans la fiche d'un personnage, seuls les lieux ou le personnage est physiquement rencontre sont affiches. Les liens de type `relatedLocationIds` restent internes et doivent etre deduits par les documents, traces techniques ou temoignages, pas reveles directement par l'interface joueur.
Les objets d'ambiance peuvent etre declares comme `InventoryObject` de type `ambient` et rattaches a un lieu via `objectIds`. Ils peuvent etre pris et consultes, mais n'ont pas forcement d'effet de deblocage.
Depuis la V0.4, `available: false` peut vraiment limiter un lieu. La salle informatique apparait dans la liste, mais reste en acces limite tant que le badge visiteur n'a pas ete utilise depuis la vue de ce lieu.

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
- déblocage de l’historique d’impression.

### Énigme 2 — Contradiction

Le joueur compare le témoignage de Fahad avec l’historique d’impression.

Réussite :

- feedback “Contradiction repérée” ;
- déblocage du brouillon de mail non envoyé.

## Ajouter plus tard un nouveau scénario

Quand le projet autorisera plusieurs enquêtes :

1. Créer un fichier dans `src/data/scenarios/`.
2. Exporter un objet conforme au type `Scenario`.
3. Ajouter le scénario au registre de `src/engine/scenarioLoader.ts`.
4. Ajouter une sélection de scénario dans l’interface.

La V0.5 ne crée pas de deuxième scénario.

## Direction V0.6

La V0.6 devra introduire une accusation finale enrichie.

Objectif recommandé :

- vérifier une hypothèse finale ;
- demander des preuves pertinentes ;
- garder une interprétation prudente ;
- éviter une accusation automatique ou trop scolaire.

Le mode enseignant, le score complet et le deuxième scénario restent à traiter plus tard.
