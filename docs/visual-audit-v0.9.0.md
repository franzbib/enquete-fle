# Audit visuel V0.9.0

## Résumé

L'interface actuelle de `enquete-fle` est claire, fonctionnelle et exploitable en classe. Elle remplit bien son rôle de prototype : le joueur voit les lieux, consulte les documents, utilise l'inventaire, résout les énigmes et accède à la résolution finale.

La limite principale est visuelle : presque tous les éléments ont le même poids graphique. Les lieux, documents, objets, personnages, énigmes et résolution finale sont distingués par le texte, mais encore peu par leur traitement visuel. L'ensemble reste lisible, mais l'immersion d'enquête et l'identité ISPA / campus / administration ne sont pas encore incarnées.

## Interface observée

Éléments examinés :

- écran d'accueil ;
- briefing ;
- page d'enquête ;
- panneau de progression ;
- liste des lieux ;
- inventaire ;
- détail de lieu ;
- fiche personnage ;
- document ;
- énigmes ;
- résolution finale.

## Points positifs

- La structure générale est stable : en-tête, progression, déductions, colonne latérale, détail central.
- Les textes restent lisibles sur fond clair.
- Les boutons sont sobres et compréhensibles.
- Le badge et la salle informatique fermée sont contextualisés.
- L'inventaire reste séparé des pièces du dossier.
- L'interface n'est pas surchargée par des effets décoratifs.
- La palette actuelle donne déjà une base sobre avec pierre, ardoise, vert/bleu et ambre.

## Manques de hiérarchie visuelle

| Zone | Problème observé | Effet joueur | Amélioration V0.9.0 |
|---|---|---|---|
| Panneaux principaux | Tous les blocs blancs se ressemblent. | Le joueur doit lire les titres pour comprendre le type de contenu. | Introduire des surfaces différenciées par bordure, ombre légère et bande d'accent. |
| Détail central | Lieu, personnage, document et énigme partagent presque la même apparence. | Les catégories de contenu sont peu incarnées. | Ajouter une identité légère : document plus papier, personnage plus dialogué, énigme plus "dossier". |
| États | Nouveau, lu, fermé, utilisé, validé et disponible reposent surtout sur du texte. | Les états sont corrects mais pas très mémorables. | Renforcer les badges et statuts avec des couleurs fonctionnelles cohérentes. |
| Accueil / briefing | Le ton visuel reste très technique. | L'entrée dans l'univers manque de charme. | Ajouter une ambiance "bureau d'enquête pédagogique" sans créer de hero lourd. |
| Inventaire | Les objets ressemblent aux documents secondaires. | La distinction objet / pièce du dossier peut encore se brouiller. | Donner aux objets un traitement plus compact, avec type et statut plus visibles. |

## Ce qui paraît trop brut ou technique

- La mention de version dans l'accueil et l'enquête donne une impression de prototype interne.
- Les panneaux utilisent beaucoup les mêmes classes Tailwind (`bg-white`, `border-slate-300`, `rounded-md`) sans langage visuel propre.
- Les documents sont affichés comme des paragraphes génériques, alors qu'ils devraient évoquer des pièces de dossier.
- Les personnages n'ont pas encore de réserve visuelle pour leurs futurs portraits.
- La résolution finale est claire mais ne se distingue pas assez comme moment conclusif.

## Ce qui nuit à l'immersion

- Absence de signes graphiques liés au dossier, au campus, à l'administration ou à l'enquête documentaire.
- Manque de différenciation entre interaction d'exploration et raisonnement final.
- Peu de chaleur visuelle autour des personnages, alors que la narration repose de plus en plus sur Delphine, Thi-Thai et les futurs personnages récurrents.

## Ce qui peut être amélioré sans nuire à la lisibilité

- Définir une palette plus intentionnelle : papier chaud, encre, vert administratif, bleu dossier, ambre indice, bordeaux discret pour alerte.
- Ajouter une classe de surface commune pour les panneaux.
- Ajouter une classe de fiche principale pour les détails.
- Renforcer la hiérarchie des titres et sous-titres.
- Styliser les citations de personnages comme parole directe.
- Styliser les contenus de documents comme pièces papier.
- Créer une zone d'accueil visuelle plus chaleureuse sans image définitive.
- Distinguer les états avec des badges plus nets.

## Recommandation

La V0.9.0 doit rester une passe graphique initiale :

- pas de refonte UX ;
- pas d'assets finaux ;
- pas de portraits intégrés ;
- pas de nouvelle mécanique ;
- pas de surcharge décorative.

Elle doit installer une direction graphique et améliorer la perception de l'interface actuelle. Les portraits récurrents, vignettes de lieux et icônes d'objets devront être produits ensuite, une fois les règles d'harmonisation validées.

## Validation de l'audit

Audit validé pour une première amélioration légère.

La priorité V0.9.0 est :

1. poser une direction artistique commune ;
2. améliorer les surfaces et la hiérarchie ;
3. distinguer les catégories de contenu ;
4. préparer les futurs portraits récurrents à partir des références fournies.
