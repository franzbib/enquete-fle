# Système de Portraits V0.9.2

## Intention

Afin d'enrichir le "carnet d'enquête" sans alourdir l'interface ni créer une esthétique discordante, `enquete-fle` utilise un système de portraits 2D semi-illustrés, cohérents et harmonisés.

## Format des Portraits

- **Ratio** : 1:1 (carré)
- **Cadrage** : Buste ou mi-buste, centré.
- **Rendu** : Illustration 2D, contours propres, couleurs en aplat avec ombrage très doux.
- **Interdits** : Pas de photoréalisme, pas de rendu pictural/peinture, pas de textures complexes en arrière-plan.
- **Fond** : Simple, chaud, neutre, légèrement texturé (type papier) mais discret.
- **Ton** : Amical mais sérieux, adapté au contexte universitaire / administratif.

## Le Prompt de Base (Générateur IA)

Pour garantir l'harmonisation (notamment pour ramener des références disparates à une charte commune), le prompt d'image génération utilise toujours cette base :

> `"2D semi-illustrated portrait, clean outlines, flat colors with very soft shading, no hyperrealism, no photographic textures, no painterly rendering, friendly but serious tone, simple light warm neutral background, chest-up portrait, centered, readable at small size, designed for a UI character card, same stylistic treatment for all characters."`

### Déclinaisons des personnages récurrents

- **Delphine** : `Woman, round glasses, light colored sweater. Welcoming, calm, studious expression. Secretary.`
- **François** : `Adult man, beard, mid-length hair, glasses. Smiling, warm, reassuring teacher presence.`
- **Heïdi** : `Young brunette woman, wearing a red scarf. Calm, serious, discreet authority, organized.`
- **Marine** : `Young woman with red hair, confident posture, assertive look. Clean stylized art, NOT realistic.`
- **Mathias** : `Young brunette man, casual student clothes. Open face, simple, natural, approachable.`
- **Rodolphe** : `Adult bearded man, serious and stable expression, intellectual look. Wearing a simple shirt.`

## Intégration Technique

1. **Type de donnée** : `Character` (dans `src/types/scenario.ts`) inclut la propriété optionnelle `portraitUrl?: string;`.
2. **Stockage** : Les images sont enregistrées dans `public/assets/portraits/` sous le format `{id-personnage}.png`.
3. **Affichage** : Le composant `CharacterDetail.tsx` gère l'affichage du portrait. Si le personnage ne dispose pas d'un portrait (par exemple, un personnage spécifique à une enquête non récurrent), un _placeholder_ visuel (ex: une initiale dans un cercle aux couleurs de la charte) est généré automatiquement.

## Étapes Suivantes

- **V0.9.3** : Création et harmonisation des vignettes de lieux récurrents.
- **V0.9.4** : Création d'un jeu d'icônes spécifiques pour les objets et statuts.
