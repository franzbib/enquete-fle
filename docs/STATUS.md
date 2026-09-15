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

La consolidation V0.11.1 retire la référence erronée au portrait de Yaqiu pour Xiaoyu. En l’absence de portrait spécifique, l’interface utilise désormais son fallback par initiale.

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
- respect de `prefers-reduced-motion` ;
- Vite mis à jour vers 7.3.6 avec lockfile reproductible ;
- validation transversale des scénarios ajoutée ;
- tests de régression des sauvegardes ajoutés ;
- CI GitHub ajoutée ;
- audit automatisé du poids des images ajouté ;
- variantes WebP sans perte générées pour les images lourdes réellement utilisées lorsque le fichier obtenu est plus petit, avec mise à jour des références du jeu ;
- PNG sources conservés dans le dépôt afin de ne pas perdre les originaux graphiques.

## Tests et validation

Commandes de référence :

```bash
npm run validate
npm run build
npm run audit:assets
```

`npm run validate` vérifie :
- les références structurantes des trois scénarios ;
- les invariants narratifs et de progression de `La salle fantôme` ;
- la séparation des sauvegardes par scénario et par slot ;
- le filtrage d’identifiants périmés ;
- le repli sûr d’une sélection invalide ;
- le bornage des indices ;
- la résistance à un JSON de sauvegarde corrompu.

La CI exécute ces contrôles sur les pull requests et sur `main`, puis compile l’application et audite le poids des images.

## Documentation

Documents canoniques :
- `README.md` ;
- `docs/STATUS.md` ;
- `docs/DESIGN_PRINCIPLES.md` ;
- `docs/architecture.md` ;
- `docs/DECISIONS.md` ;
- `docs/TEACHING.md`.

Les documents de `docs/agent-context/` et les anciens audits restent conservés comme historique et contexte de décision.

## Chantiers encore ouverts

1. Vérifier une dernière fois la CI sur l’état final de la pull request de consolidation.
2. Ajouter des tests de parcours navigateur quand un accès au déploiement ou un environnement de navigateur automatisé est disponible.
3. Vérifier le déploiement Vercel lorsque l’accès automatisé est disponible ; l’accès connecté actuel renvoie 403 et ne permet pas de conclure sur l’état public du site.
4. Réparer si utile l’encodage du journal historique `docs/agent-context/09_DECISIONS_LOG.md`; ce fichier n’est plus canonique.
5. Après seulement : décider d’éventuelles évolutions créatives, notamment le degré de QCM dans `La salle fantôme` et le statut futur de `Le message effacé`.

## Règle de reprise

Avant toute nouvelle fonctionnalité, demander :

> Quelle est la plus petite action qui rend le jeu plus jouable, plus clair, plus robuste ou plus fidèle à sa vision ?
