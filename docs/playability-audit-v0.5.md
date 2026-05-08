# Audit de jouabilité V0.5

## Résumé général

La V0.5 est jouable et cohérente dans son intention principale : le joueur explore des lieux, consulte des personnages et des documents, récupère un objet d'accès, débloque la salle informatique, puis résout deux énigmes avec des indices progressifs. Le parcours reste sobre, compatible avec un prototype B1/B2, et ne transforme pas l'enquête en exercice scolaire.

La version est validable avant V0.6, mais avec réserves. Les réserves portent surtout sur le guidage entre la chronologie et l'accès à la salle informatique, ainsi que sur la visibilité d'une pièce du dossier encore non consultée dans l'énigme de contradiction.

## Parcours testé

Parcours audité par lecture des données, des composants React et des documents de conception :

1. Page d'accueil puis briefing.
2. Entrée dans l'écran d'enquête.
3. Consultation des lieux disponibles : secrétariat et couloir.
4. Lecture des personnages, documents et objets observables.
5. Prise du badge visiteur au secrétariat.
6. Résolution de l'énigme de chronologie.
7. Utilisation du badge pour accéder à la salle informatique.
8. Consultation de l'historique d'impression et des éléments de la salle informatique.
9. Résolution de l'énigme de contradiction par sélection de deux pièces du dossier.
10. Demande d'indices progressifs sur les deux énigmes.
11. Vérification de la séparation entre inventaire, documents et déductions.

Vérification technique effectuée :

```bash
npm.cmd run build
```

Résultat : compilation réussie.

## Points forts

- Le briefing donne une mission claire : consulter les lieux, reconstituer la chronologie, puis comparer les documents.
- La navigation par lieux reste lisible et donne une impression d'exploration sans surcharger l'interface.
- Le chemin `secrétariat -> badge visiteur -> salle informatique` est compréhensible et narrativement crédible.
- Le badge sert une progression simple, sans créer un inventaire RPG.
- L'inventaire reste séparé des pièces du dossier : le badge, le ticket et la clé USB ne remplacent pas les témoignages ou les documents.
- Les indices progressifs aident à relire, comparer et repérer les horaires sans donner toute la réponse dès le premier clic.
- L'énigme de contradiction conserve une interprétation prudente : Fahad n'est pas déclaré coupable.
- La distinction discours direct / discours indirect fonctionne bien pour l'immersion et l'objectif FLE discret.
- Delphine est intégrée de manière pertinente au secrétariat sans prendre trop de place dans l'enquête.

## Problèmes bloquants

Aucun problème bloquant observé.

Le projet compile, le parcours principal est compréhensible et aucune incohérence narrative majeure ne bloque la progression.

## Problèmes moyens

| Problème | Pourquoi c'est gênant | Recommandation |
|---|---|---|
| L'énigme de contradiction affiche `Brouillon de mail` parmi les pièces sélectionnables alors que ce document est débloqué après cette énigme. | Le joueur voit le nom d'une pièce qu'il n'a pas encore consultée. Cela peut révéler trop tôt une piste documentaire et brouiller la logique des "pièces disponibles". | En V0.6 ou V0.5.1, limiter la liste aux pièces déjà disponibles ou renommer la liste en évitant de suggérer que tout a déjà été lu. |
| Le guidage persistant après la chronologie peut rester trop général si le joueur n'a pas encore utilisé le badge. | Le feedback de succès mentionne bien le badge, mais l'encart "Que faire maintenant ?" peut ensuite inviter à résoudre une énigme alors que la contradiction dépend encore de la salle informatique. | Ajouter un guidage contextuel : "La salle informatique est prioritaire, mais elle demande un objet d'accès." |
| La salle informatique est affichée comme verrouillée, mais le bouton de lieu est désactivé. | Le joueur voit l'accès limité, mais ne peut pas cliquer pour recevoir le feedback prévu par `handleSelect`. Le message existe dans le code mais reste difficile à déclencher. | Soit rendre le lieu cliquable avec un panneau d'accès limité, soit conserver le bouton désactivé mais afficher une explication plus visible. |
| Le ticket de bus reste ambigu. | Le libellé "Preuve faible" peut faire croire à un rôle plus décisif qu'il n'en a en V0.5. | Décider avant V0.6 s'il devient une vraie pièce secondaire, un simple contexte, ou s'il est reporté. |

## Problèmes mineurs

| Problème | Pourquoi c'est gênant | Recommandation |
|---|---|---|
| L'énigme de chronologie est disponible dès que les documents sont visibles, même si le joueur ne les a pas lus. | Un joueur pressé peut tenter l'énigme avant d'avoir vraiment exploré. | Garder ce choix si l'on accepte l'essai-erreur, ou ajouter une micro-incitation à lire les documents listés. |
| Le statut de la clé USB est clair dans son texte, mais son bouton "Prendre" peut lui donner une importance excessive. | Certains joueurs peuvent attendre une utilité mécanique qui n'existe pas encore. | À tester avec apprenants ; alternative possible : rendre l'objet seulement observable plus tard. |
| La fin "vous avez terminé cette première enquête" peut sembler un peu définitive avant l'accusation finale. | La V0.6 doit justement introduire une étape de conclusion plus structurée. | Remplacer plus tard par une conclusion de prototype ou préparer l'accusation finale V0.6. |
| Certaines phrases restent un peu longues pour B1. | Le sens reste accessible, mais la charge de lecture augmente. | Lors d'une passe FLE, raccourcir quelques témoignages sans perdre les indices temporels. |

## Recommandations avant V0.6

1. Corriger la disponibilité de `Brouillon de mail` dans l'énigme de contradiction, ou clarifier que la liste ne représente pas uniquement des documents déjà consultés.
2. Renforcer le guidage après la chronologie quand la salle informatique est encore verrouillée.
3. Clarifier le comportement du lieu verrouillé : bouton désactivé très explicite ou lieu cliquable avec message d'accès limité.
4. Décider du statut du ticket de bus avant l'accusation finale : contexte, preuve faible réellement exploitable, ou objet à reporter.
5. Conserver les indices progressifs dans leur forme actuelle : ils soutiennent bien le raisonnement sans résoudre l'enquête.
6. Préparer la V0.6 autour d'une conclusion prudente, sans transformer l'étape finale en accusation automatique.

## Validation

V0.5 validée avec réserves.

Le projet peut passer à la V0.6 si les réserves sont acceptées comme points de vigilance. La priorité avant l'accusation finale est de ne pas laisser l'interface révéler trop tôt le `Brouillon de mail` et de mieux accompagner le passage `chronologie -> badge -> salle informatique -> contradiction`.

## Corrections

- **Mise à jour (V0.5.1)** : La logique du badge a été contextualisée (correction effectuée séparément). Le brouillon de mail a été retiré des pièces proposées dans l'énigme de contradiction pour éviter de révéler un document non découvert. Le feedback de validation de la chronologie a été modifié pour mieux orienter le joueur vers l'accès à la salle informatique. Les détails sont dans `docs/playability-fixes-v0.5.1.md`.

Le rapport initial signalait des corrections recommandées, mais elles touchent au guidage et à la disponibilité perçue des pièces du dossier. Elles ont été en grande partie adressées en V0.5.1, préparant un terrain plus propre pour la V0.6.
