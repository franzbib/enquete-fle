# Icônes de Statuts UI (V0.9.4)

## Objectif

Dans le cadre de la V0.9.4, un système d'icônes de statuts a été introduit pour améliorer la lisibilité de l'interface et fluidifier l'expérience d'enquête sans surcharger visuellement l'application.

## Conventions techniques

- **Type de rendu** : Inline SVGs React (composants) et non images PNG ou SVG externes.
- **Pourquoi ?** :
  - Parfaite intégration avec TailwindCSS (`stroke-current`, `fill-current`, `text-amber-500`, etc.).
  - Qualité vectorielle irréprochable sur tous les écrans sans aucun temps de chargement.
  - Extrême facilité de maintenance et d'adaptation dynamique (ex: opacité, animation pulse).
- **Fichier source** : `src/components/icons/StatusIcons.tsx`.

## Statuts traités et intégration

### 1. Lieux (Location)
- **Fermé** (`IconLocked`) : Petit cadenas gris à côté du nom dans la navigation latérale.
- **Ouvert / Accessible** (`IconUnlocked`) : Petite porte ouverte verte dans la navigation latérale.

### 2. Documents (InvestigationDocument)
- **Nouveau / Non lu** (`IconDocumentNew`) : Petite pastille ambre animée d'un léger effet `pulse` dans les fiches lieux. Attire doucement l'œil sur les nouvelles informations.
- **Lu** (`IconDocumentRead`) : Coche discrète grise, confirmant que le document a été consulté.

### 3. Objets (InventoryObject)
- **Trouvé** (`IconObjectFound`) : Petit carton / boîte apparaissant dans la fiche lieu pour signaler qu'un objet est ramassé, et affiché dans le badge de l'inventaire.
- **Utilisé** (`IconObjectUsed`) : Coche de complétion dans le badge de l'inventaire.

### 4. Énigmes (Puzzle)
- **Indice disponible** (`IconHintAvailable`) : Petite ampoule grise à côté du titre des énigmes non résolues.
- **Validée** (`IconPuzzleSolved`) : Coche verte intégrée dans les boutons d'énigmes complétées et dans leurs fiches de détail.

## Directives pour les ajouts futurs

- Tout ajout d'icône d'interface pure (UI) doit passer par `StatusIcons.tsx` en tant que SVG.
- Utiliser la bibliothèque lucide-react (ou équivalent 24x24 `stroke="currentColor" strokeWidth="2"`) comme base d'inspiration graphique.
- Garder les assets PNG uniquement pour le contenu lourd et illustratif (portraits, vignettes, icônes d'objets en jeu).
