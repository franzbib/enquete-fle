# Ajustement UX V0.3.1

## Problèmes identifiés dans la V0.3
L'interface de la V0.3 affichait l'ensemble des Lieux, Personnages, Documents et Énigmes dans un menu latéral unique. 
Cela créait une surcharge cognitive pour le joueur et rendait la navigation peu logique par rapport à une véritable enquête, où les personnages et documents sont découverts au sein d'un lieu, et où les énigmes constituent une étape de déduction distincte.

## Objectifs de la V0.3.1
Clarifier l'interface pour guider le joueur plus naturellement dans son enquête :
1. Le joueur voit d'abord les lieux.
2. Les personnages et documents sont intégrés à la vue du lieu.
3. Les énigmes sont séparées du menu d'exploration.

## Choix d'implémentation
1. **Menu d'exploration centré sur les Lieux** :
   - Le menu latéral (`<aside>`) de `InvestigationPage` a été allégé. Il ne contient plus que la liste des `Lieux`.
2. **Navigation contextuelle** :
   - Les listes statiques de `Documents liés` et `Personnages présents` dans `LocationDetail` ont été remplacées par des boutons interactifs.
   - Cliquer sur un document ou un personnage depuis un lieu met à jour la sélection principale et affiche ses détails.
   - Des liens de retour vers les `Lieux associés` ont été ajoutés dans `DocumentDetail` et `CharacterDetail` pour faciliter la navigation transversale.
3. **Espace de déduction séparé** :
   - Les `Énigmes` ont été extraites du menu latéral.
   - Elles apparaissent désormais dans un bandeau horizontal intitulé `Tableau d'enquête - Déductions`, situé au-dessus de la zone principale d'exploration.
   - Les énigmes non disponibles sont grisées, avec une indication visuelle pour indiquer au joueur qu'il manque des documents.

## Fichiers modifiés
- `src/components/InvestigationPage.tsx` : Restructuration de l'interface principale et ajout du bandeau des énigmes.
- `src/components/LocationDetail.tsx` : Remplacement des listes par des boutons navigables.
- `src/components/CharacterDetail.tsx` : Ajout de la navigation vers les lieux.
- `src/components/DocumentDetail.tsx` : Ajout de la navigation vers les lieux et personnages associés.

## Ce qui reste à faire
- Implémenter le système d'inventaire d'objets (V0.4).
- Les objets pourront s'intégrer dans le `Tableau d'enquête` ou disposer de leur propre bandeau.

## Commandes pour tester
```bash
npm run dev
```
