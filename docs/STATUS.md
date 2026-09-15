# État actuel du projet

Dernière consolidation : septembre 2026.

## Version de travail

Le dépôt contient trois enquêtes enregistrées et une architecture multi-scénarios opérationnelle.

### 1. Le dossier disparu

Statut : jouable et utile comme scénario de référence historique.

Points forts :
- inventaire et objet d’accès ;
- salle verrouillée ;
- chronologie ;
- contradiction déclaration / trace technique ;
- résolution finale prudente fondée sur des pièces du dossier.

Réserve actuelle : Xiaoyu utilise encore un portrait de Yaqiu dans les données ; ce point doit être corrigé ou le portrait retiré.

### 2. Le message effacé

Statut : jouable, court, surtout utile comme scénario technique de non-régression multi-enquêtes.

Réserve actuelle : la solution est plus explicite que dans les deux autres scénarios. Ne pas l’utiliser comme unique modèle de qualité narrative.

### 3. La salle fantôme

Statut : scénario de référence actuel pour la qualité narrative et pédagogique.

Progression principale : convocation → plan → Heïdi → archive → Marine → note interne → Beffroi → Thi Thai → rectification → panneau.

La consolidation V0.11.1 corrige un blocage possible : la note de Marine reste désormais accessible dans le couloir après son premier déblocage, même si le joueur quitte le document avant de résoudre l’énigme contextualisée.

## Moteur

Points solides :
- React / Vite / TypeScript strict ;
- scénarios séparés des composants ;
- sauvegardes locales séparées par `scenarioId` et slot ;
- progression locale sans backend ;
- énigmes contextualisées ;
- interface mobile dédiée.

Corrections V0.11.1 :
- guidage initial rendu générique, sans supposer l’existence d’un lieu `accueil` ;
- `Puzzle.requiredObjectIds` réellement pris en compte ;
- chronologies rendues compatibles avec un nombre variable d’événements ;
- zoom des documents graphiques rendu accessible au clavier ;
- validation transversale des scénarios ajoutée ;
- CI GitHub ajoutée ;
- audit automatisé du poids des images ajouté.

## Tests et validation

Commandes de référence :

```bash
npm run validate
npm run build
npm run audit:assets
```

La CI exécute ces contrôles sur les pull requests et sur `main`.

## Documentation

Documents canoniques :
- `README.md` ;
- `docs/STATUS.md` ;
- `docs/DESIGN_PRINCIPLES.md` ;
- `docs/architecture.md` ;
- `docs/DECISIONS.md`.

Les documents de `docs/agent-context/` et les anciens audits restent conservés comme historique et contexte de décision.

## Chantiers encore ouverts

1. Vérifier la CI sur la pull request de consolidation.
2. Mettre Vite à jour dans la branche 7.x avec lockfile reproductible.
3. Retirer ou remplacer le faux portrait Xiaoyu/Yaqiu.
4. Optimiser les images lourdes, surtout les portraits et le plan graphique.
5. Ajouter `prefers-reduced-motion` aux animations restantes.
6. Ajouter progressivement des tests de sauvegarde et des tests de parcours navigateur.
7. Vérifier le déploiement Vercel lorsque l’accès automatisé est disponible.
8. Après seulement : décider d’éventuelles évolutions créatives, notamment le degré de QCM dans `La salle fantôme` et le statut futur de `Le message effacé`.

## Règle de reprise

Avant toute nouvelle fonctionnalité, demander :

> Quelle est la plus petite action qui rend le jeu plus jouable, plus clair, plus robuste ou plus fidèle à sa vision ?
