# Audit général V0.9.3

## Résumé général

La V0.9.3 est fonctionnelle et cohérente côté jeu : la compilation passe, les assets référencés existent, la boucle d'enquête reste complète et la direction graphique commence à enrichir l'expérience sans modifier les mécaniques. L'enquête conserve son ton prudent : Fahad n'est pas présenté comme coupable, la résolution reste réparatrice et les éléments décoratifs ne parasitent pas la chaîne de preuves.

La principale réserve concerne l'alignement documentaire et de version : plusieurs documents actifs de pilotage parlent encore de V0.9.0 ou de futures étapes déjà réalisées, `package.json` indique encore `"version": "0.4.0"`, et la fiche élève mentionne encore "Monsieur Armand" alors que le scénario utilise maintenant "M. Rodolphe". Ces points ne bloquent pas le jeu, mais ils peuvent induire les prochains agents en erreur.

Validation recommandée : **V0.9.3 validée avec réserves**, avec une petite V0.9.3.1 de synchronisation documentaire et métadonnées avant de lancer V0.9.4.

## Version auditée

- Version fonctionnelle annoncée : V0.9.3.
- Branche locale : `main`.
- Dernier commit observé : `b9fdedf refactor(scenario): replace Monsieur Armand with M. Rodolphe`.
- État Git observé : une modification locale non commitée sur `src/components/CharacterDetail.tsx`, limitée à l'ajout de `object-top` sur les portraits.
- Application servie localement sur `http://127.0.0.1:5173/`.

## Méthode d'audit

L'audit a combiné :

- lecture des documents de contexte dans `docs/agent-context/` ;
- lecture des documents d'architecture, pédagogie, résolution finale et charte graphique ;
- inspection des types, données de scénario et composants principaux ;
- vérification des chemins d'assets référencés dans le scénario ;
- compilation de production ;
- vérification HTTP du serveur local.

Commandes principales lancées :

```powershell
npm.cmd run build
Invoke-WebRequest -Uri http://127.0.0.1:5173/ -UseBasicParsing
rg -n "V0\.9\.0|V0\.9\.2|V0\.9\.3|portraitUrl|vignetteUrl|iconUrl|0\.4\.0" docs package.json src
rg -n "Armand|Rodolphe" docs src
```

## Audit technique

La compilation réussit correctement avec `npm.cmd run build`. Les types structurants restent cohérents : `Scenario`, `Location`, `Character`, `InventoryObject`, `Puzzle` et `FinalResolution` correspondent bien aux usages observés dans les composants.

Les propriétés graphiques ajoutées sont correctement déclarées et utilisées :

- `Character.portraitUrl` dans `CharacterDetail.tsx` ;
- `Location.vignetteUrl` dans `LocationDetail.tsx` ;
- `InventoryObject.iconUrl` dans `LocationDetail.tsx` et `InventoryPanel.tsx` ;
- `FinalResolution.iconUrl` est prévu dans le type, mais non exploité dans l'interface actuelle.

Les assets référencés par `src/data/scenarios/dossierDisparu.ts` existent tous dans `public/assets/`. Les vignettes de lieux, portraits et icônes d'objets sont donc raccordés correctement au scénario.

La logique d'inventaire reste simple et locale. Le badge visiteur s'utilise dans la salle informatique fermée, ce qui respecte la décision de contexte spatial. La possibilité de reposer les objets est présente, mais reste contenue et ne crée pas de système RPG.

Points de dette technique à surveiller :

- `InvestigationPage.tsx` concentre beaucoup d'états locaux : progression, inventaire, documents lus, lieux débloqués, indices, résolution finale. C'est acceptable pour un scénario unique, mais cela deviendra fragile pour plusieurs enquêtes.
- `package.json` affiche encore `"version": "0.4.0"`, ce qui contredit l'état V0.9.3 du projet.
- Plusieurs portraits pèsent plus de 1 Mo, certains plus de 3 Mo. Ce n'est pas bloquant dans le prototype, mais une compression ou génération de variantes web sera nécessaire avant diffusion large.
- Une modification locale non commitée sur `CharacterDetail.tsx` améliore probablement le cadrage vertical des portraits avec `object-top`, mais elle doit être explicitement intégrée ou abandonnée avant la prochaine version.

## Audit UX

Le départ à l'Accueil est naturel : il donne une entrée moins mécanique dans l'univers et présente Thi-Thai comme élément vivant non décisif. Le joueur voit immédiatement la liste des lieux, avec la salle informatique marquée comme accès limité.

La salle informatique fermée est compréhensible : le message indique qu'un badge est nécessaire et les documents internes ne sont pas affichés avant ouverture. Après obtention du badge, l'action d'accès est contextualisée dans le lieu, ce qui renforce la logique spatiale.

Le panneau Progression masqué par défaut est une bonne décision pour alléger l'écran, mais elle a un coût : le feedback initial et l'orientation dynamique sont moins visibles pour un joueur novice. Le bouton "Afficher la progression" reste présent, mais une classe B1 fragile pourrait ne pas penser à l'ouvrir.

L'inventaire masquable reste clair. Les objets observables dans les lieux et les objets trouvés sont bien séparés. Les icônes d'objets améliorent la reconnaissance, sans transformer l'interface en inventaire RPG.

Les vignettes de lieux enrichissent l'interface sans la surcharger. Les portraits s'intègrent correctement dans les fiches personnages, avec une réserve : tous les personnages n'ont pas encore un portrait dédié, et Xiaoyu utilise actuellement l'asset `yaqiu.png`, ce qui peut créer une ambiguïté si Yaqiu doit devenir un personnage récurrent distinct.

Les documents restent lisibles et les énigmes sont faciles à trouver dans le tableau d'enquête. La résolution finale arrive au bon moment, après validation des deux énigmes principales.

## Audit narratif

La chronologie générale reste cohérente :

1. Chen vérifie son dossier.
2. Fahad passe au secrétariat pour une attestation.
3. Xiaoyu observe Fahad avec une pochette ou quelques feuilles.
4. La salle informatique révèle une impression à 16h48 depuis une session Fahad.
5. Le brouillon de mail suggère une confusion de documents.
6. La résolution finale formule une hypothèse prudente.

Fahad n'est pas rendu trop explicitement coupable. Les formulations parlent de chronologie problématique, de confusion possible et de retard de signalement. Le brouillon de mail reste prudent : il oriente l'enquête, mais ne constitue pas un aveu.

Delphine joue un rôle crédible : elle est liée au secrétariat, aux dossiers et à la résolution administrative, sans être omnisciente. Thi-Thai et l'Accueil restent décoratifs et n'ajoutent pas de fausse piste injuste.

Les objets d'ambiance ne deviennent pas des preuves fortes. La clé USB "Exercices B1" est clairement sans lien direct avec le dossier disparu ; le ticket de bus reste faible et contextuel.

La fin heureuse est naturelle : Delphine reprend le dossier avec Chen, les pièces sont vérifiées et le dossier est validé sans sanction publique. L'histoire peut être reconstruite uniquement à partir des pièces disponibles.

Réserve narrative mineure : l'observation de Xiaoyu mentionne une "pochette ou quelques feuilles". Ce n'est pas une contradiction en soi, car le document reste incertain et non décisif, mais il faut éviter de transformer cette pochette en objet matériel important sans la rendre observable ou documentée.

## Audit pédagogique FLE/FOU

Le niveau B1+/B2 reste réaliste. Les consignes principales sont claires, et les compétences implicites restent intégrées au jeu :

- repérage temporel avec la chronologie ;
- comparaison de documents avec la contradiction ;
- distinction entre parole directe et compte rendu indirect ;
- formulation prudente d'hypothèse ;
- justification par pièces du dossier.

Certains textes restent longs pour un B1 fragile, notamment la parole de Thi-Thai, la conclusion finale et quelques documents. La fiche enseignant anticipe déjà ce risque, et la future version simplifiée B1 reste pertinente.

La distinction discours direct / discours indirect est exploitable sans être affichée comme exercice scolaire dans le jeu. La fiche enseignant et la fiche élève soutiennent bien cette exploitation.

Deux incohérences pédagogiques documentaires sont à corriger :

- `docs/student-investigation-sheet-v0.7.1.md` mentionne encore "Monsieur Armand" alors que le scénario utilise "M. Rodolphe".
- `docs/teacher-guide-v0.7.md` indique dans ses limites qu'il n'y a "pas encore de fiche élève imprimable", alors que la V0.7.1 l'a créée.

## Audit graphique

La direction artistique "carnet d'enquête clair dans un campus vivant" est respectée. La palette papier, encre sombre, vert administratif, bleu dossier et ambre indice reste cohérente et sobre.

Les panneaux sont lisibles, différenciés par fonction et compatibles avec un usage projeté en classe. Les états de progression, lieux, objets, énigmes et résolution finale sont visuellement séparés sans surcharge.

Les portraits sont suffisamment grands pour une fiche personnage. La modification locale `object-top` sur `CharacterDetail.tsx` semble aller dans le bon sens pour éviter des cadrages trop bas, mais elle n'est pas encore commitée.

Les vignettes de lieux sont bien marquées comme temporaires par leur nommage `-temp`. Elles enrichissent l'interface sans paraître trop définitives, à condition de conserver cette convention dans la documentation.

Les icônes d'objets sont lisibles dans les cartes d'objets. Le point à surveiller est plutôt technique : leur poids est élevé pour des images affichées à petite taille. Les portraits récurrents dépassent souvent 1 Mo, et certains dépassent 3 Mo.

Le système graphique est prêt pour V0.9.4 sur le plan directionnel, mais il gagnerait à passer d'abord par une micro-synchronisation documentaire et une optimisation légère des assets.

## Audit documentaire

La documentation est riche, mais elle n'est plus parfaitement alignée avec la V0.9.3.

Documents actifs à mettre à jour :

- `docs/agent-context/01_ETAT_DU_PROJET.md` annonce encore V0.9.0 comme version actuelle et recommande des actions graphiques déjà dépassées.
- `docs/agent-context/08_PROCHAINES_ACTIONS.md` annonce encore V0.9.0 et présente V0.9.1 comme prochaine étape, alors que V0.9.2 et V0.9.3 existent.
- `docs/architecture.md` est titré V0.9.0 et ne documente pas encore pleinement l'intégration effective de `portraitUrl`, `vignetteUrl` et `iconUrl`.
- `docs/visual-guidelines-v0.9.0.md` contient bien des sections V0.9.2 et V0.9.3, mais conserve aussi une section "Étapes graphiques suivantes" qui présente V0.9.2 et V0.9.3 comme futures.
- `docs/student-investigation-sheet-v0.7.1.md` mentionne encore "Monsieur Armand".
- `docs/teacher-guide-v0.7.md` contient une limite devenue obsolète sur l'absence de fiche élève imprimable.

Documents à conserver comme historiques :

- `docs/visual-audit-v0.9.0.md` ;
- `docs/playability-audit-v0.6.md` ;
- `docs/narrative-coherence-audit-v0.3.1.md` ;
- autres audits et ajustements de versions antérieures.

Ces documents peuvent mentionner d'anciens états, à condition que leur statut historique soit clair pour les agents.

## Problèmes bloquants

Aucun problème bloquant observé.

Le projet compile, les assets référencés existent, le serveur local répond, et la boucle d'enquête reste cohérente.

## Problèmes majeurs

| Problème | Pourquoi c'est gênant | Recommandation |
|---|---|---|
| Documents de pilotage actifs désalignés avec V0.9.3 | Les prochains agents risquent de croire que le projet est encore en V0.9.0 ou que les portraits/vignettes/icônes restent à créer. | Créer une V0.9.3.1 documentaire : mettre à jour `01_ETAT_DU_PROJET.md`, `08_PROCHAINES_ACTIONS.md`, `architecture.md` et la fin de `visual-guidelines-v0.9.0.md`. |
| Fiche élève encore liée à "Monsieur Armand" | Le support distribué en classe ne correspond plus au scénario actuel, qui utilise M. Rodolphe. | Remplacer "Monsieur Armand" par "M. Rodolphe" dans la fiche élève. |

## Problèmes moyens

| Problème | Pourquoi c'est gênant | Recommandation |
|---|---|---|
| `package.json` indique `"version": "0.4.0"` | La métadonnée contredit l'état V0.9.3 et brouille les audits ou livraisons. | Passer la version à `0.9.3` ou documenter explicitement que la version npm n'est pas synchronisée. |
| `InvestigationPage.tsx` concentre beaucoup d'état | Acceptable pour un prototype, mais fragile si plusieurs scénarios, sauvegarde ou mode enseignant arrivent. | Reporter une extraction progressive vers V0.10 ou V1.0, sans refonte immédiate. |
| Assets graphiques lourds pour une UI web | Les portraits et certains PNG sont volumineux par rapport à leur taille d'affichage. | Prévoir compression, redimensionnement ou variantes web en V0.9.4. |
| Progression masquée par défaut | L'écran respire mieux, mais l'orientation initiale devient moins visible. | Tester avec apprenants ; si nécessaire, afficher un court message initial hors panneau. |

## Problèmes mineurs

| Problème | Pourquoi c'est gênant | Recommandation |
|---|---|---|
| Modification locale non commitée sur `CharacterDetail.tsx` | L'état Git n'est pas propre, même si le changement semble utile. | Décider explicitement si `object-top` fait partie de V0.9.3.1, puis commit ou annulation. |
| `Character.portraitUrl` partiel | Chen et Fahad utilisent encore un placeholder ; Xiaoyu utilise `yaqiu.png`. | Clarifier le statut placeholder ou produire des portraits dédiés plus tard. |
| Fiche enseignant V0.7 indique encore "pas encore de fiche élève imprimable" | Contradiction mineure avec V0.7.1. | Corriger la section "Limites actuelles". |
| Documents historiques non marqués comme tels | Les anciens audits peuvent être pris pour l'état actuel. | Ajouter une courte note "document historique" dans les fichiers concernés ou dans un index documentaire. |

## Recommandations prioritaires

1. Faire une V0.9.3.1 courte de synchronisation documentaire.
2. Corriger la version `package.json` ou documenter la stratégie de version.
3. Remplacer "Monsieur Armand" par "M. Rodolphe" dans la fiche élève.
4. Mettre à jour `01_ETAT_DU_PROJET.md` et `08_PROCHAINES_ACTIONS.md` pour annoncer V0.9.3 comme état réel.
5. Clarifier dans `architecture.md` l'intégration effective de `portraitUrl`, `vignetteUrl` et `iconUrl`.
6. Décider du sort de la modification locale `object-top` sur les portraits.

## Recommandations reportables

1. Optimiser les images pour le web : poids, dimensions, formats.
2. Clarifier le statut du portrait de Xiaoyu si `yaqiu.png` est seulement un placeholder.
3. Préparer une version B1 simplifiée des textes les plus longs.
4. Réfléchir à une extraction légère de la progression hors `InvestigationPage.tsx` avant plusieurs scénarios.
5. Ajouter un petit index documentaire distinguant documents actifs et documents historiques.
6. Tester l'interface projetée en classe, surtout lisibilité des portraits, documents et boutons de progression.

## Validation finale

**V0.9.3 validée avec réserves.**

Le produit peut être considéré comme jouable et cohérent. La compilation passe, les assets sont raccordés, l'UX reste lisible, la narration reste prudente et les supports pédagogiques restent exploitables.

Avant V0.9.4, il est préférable de faire une **V0.9.3.1 de correction documentaire et métadonnées**, sans nouvelle mécanique :

- aligner les documents actifs sur V0.9.3 ;
- corriger la fiche élève après le remplacement d'Armand par Rodolphe ;
- corriger ou clarifier la version `package.json` ;
- décider du changement local sur `CharacterDetail.tsx` ;
- signaler les documents historiques comme historiques.

