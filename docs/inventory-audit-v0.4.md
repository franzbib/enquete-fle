# Audit inventaire V0.4

## Résumé général

La V0.4 remplit son objectif principal : elle ajoute une manipulation d'objets simple, lisible et compatible avec l'enquête documentaire. L'inventaire ne devient pas un système RPG, ne crée pas de combinaison d'objets, ne mélange pas directement les témoignages avec les objets matériels et donne un vrai petit geste d'exploration au joueur.

Le parcours `secrétariat -> badge visiteur -> salle informatique` fonctionne et semble naturel dans le cadre administratif de l'ISPA. La salle informatique est bien inaccessible au départ, puis devient disponible après usage du badge. Les documents de la salle informatique restent des pièces du dossier, pas des objets d'inventaire.

La V0.4 est validable avec réserves légères. Les points à surveiller concernent surtout la lisibilité du verrouillage, le statut exact du ticket de bus et l'intérêt de rendre la clé USB récupérable plutôt que seulement observable.

## Parcours testé

Parcours testé localement dans le navigateur :

1. Ouverture de l'accueil V0.4.
2. Entrée dans le briefing, puis dans l'enquête.
3. Observation du secrétariat.
4. Prise du badge visiteur.
5. Vérification de l'apparition du badge dans `Objets trouvés`.
6. Passage au couloir et prise du ticket de bus.
7. Utilisation du badge visiteur depuis l'inventaire.
8. Vérification du passage de la salle informatique de `Accès limité` à `Disponible`.
9. Entrée dans la salle informatique.
10. Observation de la clé USB "Exercices B1".
11. Résolution de la chronologie.
12. Vérification de l'apparition de l'historique d'impression comme document lié à la salle informatique.
13. Ouverture de l'énigme 2 pour vérifier que les pièces du dossier restent des documents et témoignages, non des objets d'inventaire.

Build vérifié :

```powershell
npm.cmd run build
```

## Points positifs

- Le badge visiteur est crédible au secrétariat et son usage pour accéder à la salle informatique est cohérent.
- L'inventaire reste sobre : nom, type, statut, description, lieu d'origine et action éventuelle.
- Les objets observables sont affichés dans les lieux, ce qui renforce l'impression d'exploration.
- Les documents de la salle informatique restent bloqués par la progression documentaire : le badge ouvre le lieu, mais ne remplace pas le raisonnement.
- L'historique d'impression reste une pièce du dossier, pas un objet matériel.
- La clé USB est clairement non accusatoire dans sa description.
- L'énigme 2 continue de manipuler des pièces du dossier : témoignage de Fahad, historique d'impression, planning, note, brouillon.

## Problèmes observés

| Gravité | Problème | Pourquoi c’est gênant | Recommandation |
|---|---|---|---|
| Moyen | La salle informatique est affichée en `Accès limité`, mais le bouton est désactivé. | Le joueur ne peut pas cliquer dessus pour obtenir un feedback expliquant quoi chercher. L'information existe indirectement via le badge, mais le verrouillage pourrait être plus explicite. | Rendre le bouton non désactivé avec un feedback, ou ajouter un libellé visible du type `Accès limité : badge requis`. |
| Moyen | Le ticket de bus est récupérable mais sans usage actuel. | Il peut attirer l'attention comme une preuve importante alors qu'il ne sert pas encore à une déduction. Cela risque de créer une attente non satisfaite. | Le garder comme preuve faible seulement si la V0.5 ou V0.6 lui donne un rôle ; sinon le reporter ou le transformer en pièce du dossier consultable plus tard. |
| Mineur | Le bandeau `Que faire maintenant ?` ne mentionne pas explicitement l'objet d'accès quand la salle informatique reste bloquée. | Après avoir résolu la chronologie, un joueur peut voir la salle comme piste prioritaire mais oublier le badge s'il ne l'a pas encore pris. | Ajouter plus tard une aide contextuelle : `La salle informatique demande peut-être un objet d'accès.` |
| Mineur | La clé USB est récupérable alors qu'elle n'a aucun effet. | Même si elle est marquée `Ambiance`, le geste `Prendre` peut laisser penser qu'elle servira plus tard dans cette version. | Soit la laisser récupérable avec la mention `Sans utilité apparente`, soit envisager en V0.5/V0.6 une action `Observer` pour les objets d'ambiance. |
| Mineur | Le statut `Preuve faible` du ticket est clair pour un joueur avancé, mais un peu abstrait pour B1. | L'expression peut faire très métajeu, moins naturelle qu'un libellé d'enquête. | Tester avec apprenants ; alternative possible : `Contexte` ou `Indice secondaire`. |

## Analyse objet par objet

### Badge visiteur

Le badge est l'objet le plus réussi de la V0.4.

Il est placé dans un lieu crédible : le comptoir du secrétariat. Sa description est claire, son action est explicite et son effet est immédiatement compréhensible. Le chemin `secrétariat -> badge -> salle informatique` est naturel, car il correspond à une logique administrative simple.

Le feedback après utilisation est clair :

```text
Le badge visiteur permet d’accéder à la salle informatique. Vous pouvez maintenant entrer dans la salle informatique.
```

Réserve : comme la salle informatique est désactivée au départ dans la liste des lieux, le joueur ne peut pas interroger directement le verrouillage. L'objet fonctionne, mais l'interface pourrait mieux signaler `badge requis`.

Recommandation : conserver le badge comme objet d'accès V0.4. Envisager seulement une micro-clarification du statut de la salle.

### Ticket de bus

Le ticket de bus est plausible dans le couloir et son texte évite de résoudre l'enquête :

```text
L'heure imprimée pourrait aider à vérifier un déplacement, mais il ne suffit pas à lui seul à résoudre l'enquête.
```

Cependant, son statut ludique est encore fragile. Il est récupérable, classé `Preuve faible`, mais il n'est utilisé par aucune énigme et ne débloque rien. Cela peut être acceptable comme bruit documentaire léger, mais il faut éviter que le joueur s'acharne dessus.

Recommandation : ne pas corriger immédiatement. Avant la V0.5 ou la V0.6, décider s'il doit :

- rester un objet contextuel ;
- devenir une vraie pièce du dossier ;
- servir plus tard à une fausse piste réfutable ;
- être reporté si son rôle reste trop faible.

### Clé USB “Exercices B1”

La clé USB enrichit bien la salle informatique. Son nom indique une fonction pédagogique banale et sa description précise qu'elle ne semble pas liée au dossier disparu. Elle ne rend pas Fahad plus coupable et ne contredit pas la chronologie.

Le risque est UX plutôt que narratif : le bouton `Prendre` donne une importance potentielle à un objet qui est surtout décoratif. Le panneau d'inventaire compense partiellement avec `Ambiance` et `Sans utilité apparente pour l’instant`.

Recommandation : garder en V0.4. Pour une version ultérieure, envisager une distinction entre `Prendre` et `Observer` pour les objets d'ambiance, si d'autres objets sans effet sont ajoutés.

## Distinction inventaire / pièces du dossier

La distinction est globalement bonne.

Objets d'inventaire :

- Badge visiteur ;
- Ticket de bus ;
- Clé USB "Exercices B1".

Pièces du dossier :

- Témoignages ;
- Planning ;
- Historique d'impression ;
- Brouillon de mail ;
- Note manuscrite.

L'historique d'impression ne devient pas un objet. Les témoignages ne deviennent pas des objets. L'énigme 2 utilise bien une liste de pièces du dossier, indépendante du panneau `Objets trouvés`.

Réserve : le ticket de bus est sémantiquement proche d'une pièce de dossier potentielle. Cela n'est pas bloquant, mais il faudra choisir sa famille exacte avant l'accusation finale : objet matériel récupéré, pièce du dossier, ou indice secondaire.

## Cohérence narrative

Les objets sont plausibles dans leurs lieux :

- Badge visiteur au secrétariat : crédible.
- Ticket de bus dans le couloir : plausible, mais source volontairement vague.
- Clé USB en salle informatique : crédible.

Aucun objet ne révèle trop tôt la solution. Aucun objet ne rend Fahad explicitement coupable. La salle informatique reste liée à Fahad par des traces techniques et non par l'inventaire.

Le badge, le ticket et la clé USB ont chacun une fonction distincte :

- accès ;
- contexte / preuve faible ;
- ambiance.

La cohérence narrative est donc solide pour une V0.4. Le seul point à surveiller est la multiplication future d'objets contextuels sans usage, qui pourrait affaiblir la confiance du joueur dans les manipulations.

## Recommandations avant V0.5

1. Clarifier le verrouillage de la salle informatique dans la liste des lieux ou via un feedback accessible.
2. Garder le ticket de bus pour l'instant, mais décider rapidement s'il deviendra objet de preuve faible, pièce du dossier ou élément reporté.
3. Garder la clé USB, mais surveiller si `Prendre` est trop fort pour un objet d'ambiance.
4. Ne pas ajouter de nouveaux objets avant que les trois objets V0.4 aient une fonction clairement comprise.
5. En V0.5, les indices devront aider à distinguer :
   - accès matériel ;
   - documents à comparer ;
   - objets contextuels.

## Validation

V0.4 validée avec réserves.

La version peut passer à la V0.5 si les réserves sont acceptées comme dettes UX légères. Aucune incohérence bloquante ne nécessite de refonte avant le système d'indices.

## Corrections appliquées après audit

Deux corrections locales ont été appliquées après la rédaction du rapport :

1. Le statut de la salle informatique dans la liste des lieux indique maintenant `Accès limité : badge requis` quand elle est verrouillée.
2. Un lieu accessible mais sans document consultable affiche maintenant `Aucun document disponible pour l’instant`, afin d'éviter de laisser croire que le lieu ne contiendra jamais de document.

Fichiers modifiés :

- `src/components/InvestigationPage.tsx`
- `src/components/LocationDetail.tsx`

Ces corrections ne créent aucune nouvelle mécanique et ne changent pas la logique de l'inventaire.
