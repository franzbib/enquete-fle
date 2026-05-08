# Audit de jouabilité V0.6

## Résumé général

La V0.6 donne enfin une boucle complète à `Le dossier disparu` : briefing, exploration, objets, salle verrouillée, deux énigmes, indices progressifs et résolution finale prudente. L'ensemble est cohérent, jouable et fidèle à l'objectif central : faire raisonner le joueur à partir de documents, sans transformer le jeu en exercice scolaire.

La version est globalement solide. Les principaux points de vigilance concernent le guidage entre certaines étapes, la lisibilité B1/B2 de quelques textes longs et la souplesse attendue dans la sélection des pièces finales. Aucun problème bloquant n'a été observé.

Conclusion recommandée : **V0.6 validée avec réserves**.

## Version auditée

Version auditée : V0.6, commit local correspondant à la version poussée `d2177ba feat(v0.6): ajouter la résolution finale prudente`.

Vérifications effectuées :

- lecture des documents de contexte demandés ;
- lecture du scénario `src/data/scenarios/dossierDisparu.ts` ;
- lecture des composants `InvestigationPage`, `LocationDetail`, `InventoryPanel`, `PuzzleDetail`, `FinalResolutionDetail` ;
- vérification de la compilation ;
- smoke test local du serveur Vite.

Commandes exécutées :

```bash
npm.cmd run build
```

Résultat : build réussi.

Smoke test :

```text
http://127.0.0.1:5173/ -> HTTP 200
```

## Parcours testé

Parcours testé par lecture du code, des données et simulation mentale du chemin joueur :

1. Entrée dans le jeu, accès au briefing.
2. Lecture du contexte et de la mission.
3. Arrivée dans l'enquête sur le secrétariat.
4. Exploration du secrétariat, du couloir et de l'accueil.
5. Consultation des personnages : Chen, Delphine, Fahad, Xiaoyu, Thi-Thai, M. Armand.
6. Lecture des documents initiaux.
7. Repérage et prise du badge visiteur au secrétariat.
8. Consultation de la salle informatique fermée.
9. Présentation du badge depuis la salle informatique.
10. Ouverture de la salle et apparition des éléments internes.
11. Résolution de la chronologie.
12. Déblocage de l'historique d'impression.
13. Résolution de la contradiction Fahad / historique.
14. Déblocage du brouillon de mail.
15. Accès à la conclusion de l'enquête.
16. Choix de l'hypothèse finale.
17. Sélection des trois pièces justificatives.
18. Lecture du feedback final et de la fin heureuse.

Le parcours est réalisable sans incohérence technique apparente.

## Points forts

- La boucle V0.6 est complète et donne une vraie sensation de clôture.
- La résolution finale évite le vocabulaire de culpabilité et privilégie l'explication.
- Le badge est contextualisé : il s'utilise dans la salle fermée, pas depuis n'importe où.
- La salle informatique ne révèle pas ses documents avant ouverture.
- Le brouillon de mail reste une pièce d'interprétation, pas un aveu direct.
- L'accueil et Thi-Thai ajoutent de la vie sans devenir une branche d'enquête.
- L'affiche d'inscriptions aux examens fonctionne comme bruit documentaire léger.
- L'inventaire reste séparé des pièces du dossier.
- Les indices progressifs aident à relire sans donner immédiatement la solution.
- La fin heureuse est cohérente avec le cadre scolaire : réparation administrative, validation du dossier, absence de sanction.

## Problèmes bloquants

Aucun problème bloquant observé.

Le jeu compile, le parcours principal peut être reconstruit, et la résolution finale est accessible après les deux énigmes principales.

## Problèmes majeurs

Aucun problème majeur observé.

La chaîne narrative reste globalement déductible à partir des pièces disponibles.

## Problèmes moyens

| Problème | Pourquoi c'est gênant | Recommandation |
|---|---|---|
| La résolution finale devient disponible dès que le brouillon de mail est visible, même si le joueur ne l'a pas encore lu. | Le bandeau `Que faire maintenant ?` invite bien à lire les nouveaux documents, mais le bouton de conclusion peut déjà être actif. Un joueur rapide peut donc tenter la conclusion sans avoir consulté la pièce finale la plus importante. | En V0.7 ou V0.6.1, envisager de rendre la conclusion disponible seulement quand les pièces finales requises ont été lues, pas seulement visibles. |
| Une mauvaise hypothèse disait que Delphine avait volontairement caché le dossier. | Cette formulation était plus accusatrice que le ton souhaité de la V0.6. Elle contredisait légèrement l'idée d'une fin non punitive et pouvait créer une suspicion trop forte contre Delphine. | Corrigé après le rapport : l'hypothèse parle maintenant d'une erreur interne au secrétariat qui expliquerait à elle seule la disparition. |
| Les pièces secondaires de la résolution finale sont proposées, mais ne sont pas acceptées comme combinaison partielle. | `Témoignage de Xiaoyu` et `Note manuscrite` enrichissent bien le raisonnement, mais si le joueur choisit deux pièces principales + une pièce secondaire, la réponse est refusée. Cela peut sembler strict alors que ces pièces soutiennent aussi l'ambiance de confusion. | Conserver la règle actuelle si l'on veut une réponse nette, ou documenter plus tard une validation plus souple avec pièces principales et secondaires. |
| Après la chronologie, le guidage persistant peut rester générique si la salle informatique n'est pas encore ouverte. | Le feedback de succès oriente vers les accès et les traces, mais le bandeau peut encore dire de résoudre une énigme disponible alors que la prochaine action concrète est parfois d'ouvrir la salle. | Ajouter plus tard un guidage contextuel spécifique quand `historique-impression` est débloqué mais inaccessible. |

## Problèmes mineurs

| Problème | Pourquoi c'est gênant | Recommandation |
|---|---|---|
| L'énigme de chronologie est techniquement disponible dès que les documents sont visibles, pas forcément lus. | Cela permet de tenter trop tôt, même si le jeu encourage la lecture. | À surveiller en test apprenant ; pas urgent si l'essai-erreur est accepté. |
| Certains textes restent longs pour B1. | Thi-Thai, Delphine et la conclusion finale contiennent des phrases riches. B2 suivra, mais certains B1 auront besoin de médiation. | En V0.7, prévoir une fiche enseignant avec aide lexicale ou découpage oral. |
| La conclusion finale est très satisfaisante mais un peu dense. | Le feedback et la fin heureuse sont proches en fonction : ils expliquent puis racontent. | Garder pour V0.6 ; envisager en V0.7 un affichage en deux temps : conclusion puis épilogue. |
| Le type `Puzzle` contient encore `final-accusation`. | Ce n'est pas visible côté joueur, mais le vocabulaire technique n'est plus aligné avec la décision V0.6. | Renommer plus tard si une passe de nettoyage des types est prévue. |

## Analyse UX

Le menu par lieux est clair. Le secrétariat reste naturellement le point de départ parce qu'il contient Chen, Delphine, les documents initiaux et le badge. Le couloir garde son rôle de comparaison des déplacements. L'accueil fonctionne comme respiration facultative. La salle informatique est visible dès le départ mais fermée, ce qui pose un objectif spatial clair.

Le bouton `Présenter le badge` est bien situé dans la fiche du lieu fermé. C'est plus naturel que l'ancienne utilisation depuis l'inventaire.

L'inventaire reste sobre et utile. Il ne concurrence pas les pièces du dossier. Les objets d'ambiance restent lisibles comme éléments secondaires.

La résolution finale arrive au bon moment : après les deux énigmes. L'interface est claire : hypothèse, pièces justificatives, validation. Le seul point UX à surveiller est l'accès possible à la conclusion avant lecture effective du brouillon.

## Analyse narrative

Le scénario reste cohérent du début à la fin. La contradiction autour de Fahad est prudente : il y a un écart de chronologie, pas une preuve directe de vol. Le brouillon de mail suggère une confusion sans constituer un aveu.

Delphine est crédible : elle travaille au secrétariat, connaît les dossiers, et son rôle administratif rend la fin heureuse plausible. Elle ne résout pas tout magiquement : la conclusion dépend des pièces réunies par le joueur.

Chen reste suffisamment présente comme enjeu : son dossier, son échéance et sa validation finale donnent un objectif humain clair.

Thi-Thai et l'accueil sont bien décoratifs. Ils ajoutent une présence sociale, un peu d'humour, et ne créent pas de fausse piste injuste. L'affiche d'inscriptions aux examens est clairement non décisive.

La solution peut être reconstruite à partir des pièces disponibles : témoignage de Fahad, historique d'impression, brouillon de mail, plus contexte administratif.

## Analyse pédagogique FLE/FOU

Le niveau global vise correctement B1+/B2 léger. Le jeu travaille discrètement :

- repérage temporel ;
- compréhension de témoignages ;
- comparaison de documents ;
- discours direct / discours indirect ;
- hypothèse prudente ;
- justification par preuves ;
- lexique administratif.

La distinction fiche personnage / document de témoignage est perceptible sans être nommée comme exercice. C'est une bonne intégration FLE.

La résolution finale soutient bien une compétence FOU : formuler une conclusion prudente à partir d'éléments écrits. Elle évite la logique scolaire directe.

Réserve : quelques textes sont longs pour B1. Cela peut être acceptable en classe, surtout en binôme ou avec enseignant, mais mérite une aide lexicale en V0.7.

## Analyse de la résolution finale

La résolution finale ne ressemble pas trop à une accusation. Les termes `explication`, `hypothèse`, `pièces justificatives` et `conclusion` dominent.

La bonne hypothèse est prudente : elle parle d'une récupération ou conservation par erreur, puis d'une hésitation à signaler la confusion.

Les trois pièces principales sont pertinentes :

- `Témoignage de Fahad` : déclaration de départ immédiat ;
- `Historique d'impression` : session à son nom à 16h48 ;
- `Brouillon de mail` : confusion de documents signalée.

Le feedback final est clair et réparateur. Il explique que les éléments ne montrent pas un vol, mais une confusion. La fin heureuse fonctionne : Delphine vérifie, réimprime, remet le dossier en ordre, et Chen voit son dossier validé.

Réserve initiale corrigée : l'hypothèse erronée sur Delphine a été reformulée pour ne plus lui attribuer d'intention de cacher le dossier.

## Analyse du niveau de difficulté

L'enquête est plutôt facile et linéaire, mais c'est cohérent avec une première boucle jouable. Le joueur doit tout de même :

- lire plusieurs documents ;
- identifier des horaires ;
- comparer une déclaration et une trace technique ;
- utiliser un objet au bon endroit ;
- choisir les bonnes pièces pour la contradiction ;
- justifier une hypothèse finale.

Le bruit contrôlé est suffisant pour V0.6 : accueil, Thi-Thai, affiche, ticket de bus, clé USB. Il enrichit le monde sans disperser l'enquête.

La rejouabilité reste limitée, comme attendu pour un prototype narratif court. En revanche, la fin donne envie de voir une autre enquête dans le même univers.

## Recommandations avant V0.7

1. Vérifier en test utilisateur que l'hypothèse reformulée sur le secrétariat reste compréhensible sans accuser Delphine.
2. Envisager un verrou léger de la résolution finale tant que le brouillon de mail n'a pas été lu.
3. Décider si les pièces secondaires de la résolution finale doivent rester de simples distracteurs ou devenir partiellement acceptées.
4. Préparer une fiche enseignant V0.7 : objectifs FLE/FOU, corrigé, aide lexicale, pistes de discussion orale.
5. Tester avec un petit groupe B1/B2 pour mesurer la charge de lecture.
6. Nettoyer plus tard les noms techniques liés à `final-accusation` si le vocabulaire interne doit suivre la nouvelle ligne narrative.

## Validation finale

**V0.6 validée avec réserves.**

Le projet peut passer à la V0.7, surtout si la V0.7 porte sur l'exploitation pédagogique et le mode enseignant léger.

Une correction locale évidente a été appliquée après la rédaction du rapport : la mauvaise hypothèse sur Delphine a été reformulée pour respecter le ton réparateur de la V0.6.

## Corrections éventuelles

Correction appliquée après le rapport :

- fichier modifié : `src/data/scenarios/dossierDisparu.ts` ;
- correction : l'hypothèse `Delphine a volontairement caché le dossier de Chen` devient `Une erreur interne au secrétariat explique à elle seule la disparition du dossier` ;
- raison : éviter une formulation trop accusatrice contre Delphine tout en conservant une mauvaise hypothèse plausible.
