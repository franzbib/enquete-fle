# Architecture technique — V0.3

## Objectif

La V0.3 transforme l’affichage statique du scénario en première boucle d’enquête minimale.

Le joueur peut consulter les lieux, personnages et documents disponibles, sélectionner deux énigmes simples, répondre localement, recevoir un feedback sobre et débloquer de nouveaux documents.

Cette version reste volontairement limitée : pas de backend, pas de base de données, pas de moteur de jeu lourd, pas d’animation, pas d’inventaire complet, pas de système d’indices à trois niveaux, pas d’accusation finale et pas de deuxième scénario.

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

- 3 lieux ;
- 5 personnages ;
- 8 documents courts ;
- 2 objets préparatoires ;
- 2 énigmes simples ;
- des éléments de preuve textuels.

Certains documents sont disponibles dès le départ. D’autres sont débloqués après résolution d’une énigme.

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

`InventoryObject` et `Hint` restent préparatoires. Ils ne pilotent pas encore une interface complète.

Pour les lieux, la V0.3.1 distingue desormais :

- `presentCharacterIds` : personnages physiquement presents et consultables dans ce lieu ;
- `relatedCharacterIds` : personnages seulement relies au lieu par une preuve, une trace ou un document.

Cette distinction evite de laisser croire qu'un meme personnage se trouve simultanement dans plusieurs lieux.

Les temoignages sont rattaches au personnage qui parle ou au lieu ou il est interroge.
Les lieux techniques, comme la salle informatique, doivent contenir plutot des traces materielles ou numeriques : historique d'impression, brouillon de mail, journal d'activite, trace de connexion ou fichier ouvert.
Les traces techniques doivent creer une contradiction credible sans accuser trop directement un personnage : elles peuvent prouver une presence, une session active ou un horaire incoherent, sans prouver a elles seules la manipulation du dossier disparu.

Dans la vue d'un lieu, seuls les personnages de `presentCharacterIds` sont affiches.
`relatedCharacterIds` reste disponible dans les donnees pour les preuves et evolutions futures, mais ne doit pas creer une rubrique visible qui suggere une presence physique.
Dans la fiche d'un personnage, seuls les lieux ou le personnage est physiquement rencontre sont affiches. Les liens de type `relatedLocationIds` restent internes et doivent etre deduits par les documents, traces techniques ou temoignages, pas reveles directement par l'interface joueur.
Les objets d'ambiance peuvent etre declares comme `InventoryObject` de type `ambient` et rattaches a un lieu via `objectIds`, sans logique d'inventaire tant que la V0.4 n'est pas lancee.
La coexistence provisoire de `kind: 'locked'` et `available: true` signale seulement une intention narrative de verrouillage. Le vrai verrouillage par objet d'acces est reporte a la V0.4 avec l'inventaire.

## Progression V0.3

La progression est locale à `InvestigationPage`.

État React utilisé :

- énigmes validées ;
- documents débloqués ;
- feedback de progression ;
- sélection courante.

Les énigmes ne constituent pas encore un moteur complet. Elles utilisent seulement deux formes de réponse :

- ordre de trois événements ;
- choix d’une contradiction parmi trois propositions.

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

La V0.3 ne crée pas de deuxième scénario.

## Direction V0.4

La V0.4 devra introduire un inventaire simple et des objets fonctionnels.

Objectif recommandé :

- afficher les objets préparatoires ;
- permettre d’obtenir un objet ;
- marquer un objet comme trouvé ou utilisé ;
- utiliser un objet pour débloquer un lieu ou un document ;
- garder les objets peu nombreux et utiles à la déduction.

L’accusation finale et le système d’indices complet restent à traiter plus tard.
