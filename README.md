# Jeu d’enquête FLE/FOU

Prototype de jeu d’enquête en ligne destiné à des apprenants de français B1/B2. Le joueur explore des lieux, lit des documents, interroge des personnages, repère des contradictions et formule une résolution prudente.

Principe directeur : **la langue française doit être un outil de déduction, non un prétexte scolaire**.

## État actuel

Trois scénarios sont enregistrés :

- **Le dossier disparu** — scénario historique de référence pour le moteur ;
- **Le message effacé** — scénario court servant surtout de test multi-enquêtes ;
- **La salle fantôme** — scénario de référence actuel pour la qualité narrative et pédagogique.

Le jeu est une application React / Vite / TypeScript / Tailwind, sans backend. La progression peut être sauvegardée localement dans trois emplacements par scénario.

## Commandes

```bash
npm ci
npm run validate
npm run build
npm run audit:assets
npm run dev
```

`npm run validate` doit passer avant toute fusion vers `main`.

## Documentation canonique

Pour reprendre le projet, lire dans cet ordre :

1. `docs/STATUS.md` — état réel et priorités ;
2. `docs/DESIGN_PRINCIPLES.md` — principes de conception ;
3. `docs/architecture.md` — architecture actuelle ;
4. `docs/DECISIONS.md` — décisions actives et décisions remplacées.

Les documents versionnés plus anciens et `docs/agent-context/` restent utiles comme **historique**, mais ils ne doivent plus être considérés seuls comme la vérité actuelle.

## Règles de contribution

- Ne pas modifier directement `main` pour un chantier non trivial.
- Utiliser une branche courte et une pull request.
- Ne pas ajouter de backend, de moteur de jeu lourd ou de nouvelle mécanique sans justification explicite.
- Préférer une correction locale à une refonte.
- Toute modification générique du moteur doit préserver les trois scénarios.
- Les choix créatifs importants restent des décisions d’auteur ; les corrections de cohérence, tests et maintenance peuvent être automatisés.

## Déploiement

Le dépôt déclare `https://enquete-fle.vercel.app` comme URL de production. L’accès automatisé au déploiement doit être vérifié séparément de la validation du code source.
