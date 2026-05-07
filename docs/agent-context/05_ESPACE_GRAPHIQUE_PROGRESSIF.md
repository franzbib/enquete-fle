# Espace graphique progressif — Jeu d’enquête FLE/FOU

## 1. Objet du document

Ce document définit la manière dont l’espace graphique du jeu doit être pensé dès le début du projet, sans figer trop tôt l’identité graphique finale.

Il sert de référence à l’agent chef d’orchestre, à Antigravity, à Codex et à tout agent travaillant sur l’interface ou les composants visuels.

## 2. Principe général

L’espace graphique doit être pensé dès les premières versions du jeu.

Cela signifie que l’interface doit prévoir clairement les zones nécessaires au gameplay :

- lieux ;
- documents ;
- suspects ;
- objets ;
- inventaire ;
- indices ;
- carnet d’enquête ;
- accusation finale.

Cependant, la véritable identité graphique du jeu ne sera conçue que dans une phase ultérieure.

Les personnages, objets, portraits, textures, icônes définitives, documents stylisés et graphismes d’interface ne doivent pas être figés avant validation du gameplay.

## 3. Distinction fondamentale

Il faut distinguer deux niveaux :

### Niveau 1 — Espace graphique fonctionnel

Ce niveau doit être conçu dès le début.

Il concerne :

- l’organisation de l’écran ;
- les proportions ;
- la lisibilité ;
- les zones réservées ;
- la hiérarchie visuelle ;
- les emplacements des futurs éléments graphiques ;
- les états visuels des éléments interactifs.

Ce niveau appartient aux versions V0.1 à V0.8.

### Niveau 2 — Identité graphique définitive

Ce niveau vient plus tard.

Il concerne :

- les portraits définitifs ;
- les illustrations de lieux ;
- les icônes d’objets ;
- les textures ;
- la palette finale ;
- la typographie finale ;
- les composants graphiques aboutis ;
- l’atmosphère visuelle complète.

Ce niveau appartient plutôt aux versions V0.9, V1.0 et suivantes.

## 4. Raison de cette distinction

Il serait dangereux de travailler trop tôt l’identité graphique finale.

Risques :

- figer une interface avant d’avoir testé le gameplay ;
- produire de beaux écrans peu pratiques ;
- adapter le jeu au graphisme plutôt que le graphisme au jeu ;
- perdre du temps sur des personnages ou objets qui changeront ;
- rendre les modifications futures plus coûteuses ;
- privilégier l’apparence au détriment de l’enquête.

Le projet doit donc d’abord vérifier :

- que l’enquête fonctionne ;
- que les objets sont utiles ;
- que les documents sont lisibles ;
- que le joueur comprend où agir ;
- que les énigmes sont justes ;
- que l’accusation finale est claire.

Ensuite seulement, l’identité graphique pourra être enrichie.

## 5. Contraintes graphiques générales

Le jeu doit rester :

- 2D ;
- statique ;
- sans animation ;
- lisible ;
- sobre ;
- exploitable en classe ;
- compatible avec une projection ;
- compatible avec un usage en petits groupes.

Aucune animation ne doit être ajoutée.

Les changements d’état doivent être visuels mais statiques :

- document consulté ;
- objet obtenu ;
- objet utilisé ;
- lieu verrouillé ;
- lieu débloqué ;
- indice disponible ;
- preuve sélectionnée ;
- suspect marqué comme possible ou innocenté.

## 6. Structure recommandée de l’écran principal

L’écran principal doit idéalement contenir plusieurs zones.

### Zone des lieux

Fonction :

- afficher la carte ;
- afficher la liste des lieux ;
- montrer les lieux disponibles ;
- montrer les lieux verrouillés ;
- permettre la navigation.

### Zone centrale

Fonction :

- afficher le document consulté ;
- afficher le lieu sélectionné ;
- afficher le témoignage ;
- afficher l’énigme active ;
- afficher un retour après une action.

### Zone du dossier d’enquête

Fonction :

- conserver les documents trouvés ;
- afficher les preuves disponibles ;
- rappeler les informations importantes.

### Zone des suspects

Fonction :

- présenter les personnages ;
- afficher leur statut ;
- accéder à leur témoignage ;
- marquer un suspect comme possible, douteux ou innocenté.

### Zone d’inventaire

Fonction :

- afficher les objets obtenus ;
- distinguer les objets non utilisés et utilisés ;
- permettre l’usage d’un objet si nécessaire ;
- identifier les objets pouvant servir de preuve.

### Zone des indices

Fonction :

- proposer des indices gradués ;
- afficher les indices déjà utilisés ;
- éviter le blocage.

### Zone du carnet

Fonction :

- permettre au joueur de conserver une trace ;
- éventuellement cocher ou associer des indices ;
- préparer l’accusation finale.

## 7. Priorité absolue : lisibilité

La lisibilité prime sur l’esthétique.

Les documents doivent être lisibles :

- sur ordinateur ;
- sur vidéoprojecteur ;
- en classe ;
- par des étudiants B1/B2.

Il faut éviter :

- textes trop petits ;
- polices décoratives difficiles ;
- contrastes insuffisants ;
- arrière-plans trop chargés ;
- documents trop longs ;
- effets graphiques inutiles.

## 8. Graphisme provisoire recommandé

Dans les premières versions, utiliser une esthétique de travail simple :

- fond clair ;
- panneaux bien séparés ;
- cartes ou listes sobres ;
- portraits provisoires neutres ;
- icônes temporaires ;
- documents blancs ou légèrement stylisés ;
- couleurs limitées ;
- boutons explicites.

L’objectif n’est pas encore de produire un beau jeu, mais un jeu lisible et testable.

## 9. Ambiance visuelle future

L’identité graphique future pourra s’inspirer de plusieurs univers :

- dossier d’enquête ;
- polar classique ;
- archives administratives ;
- enquête universitaire ;
- bureau de secrétariat ;
- documents annotés ;
- ville d’Amiens ;
- atmosphère sobre, légèrement mystérieuse.

Le style devra rester compatible avec un usage pédagogique.

Il ne faut pas aller vers :

- horreur graphique ;
- esthétique trop enfantine ;
- surcharge cartoon ;
- interface de jeu vidéo trop spectaculaire ;
- ambiance trop sombre nuisant à la lecture.

## 10. Personnages

Les personnages devront être prévus dès le départ comme espaces fonctionnels.

Dans les premières versions :

- portraits provisoires ;
- silhouettes ;
- avatars simples ;
- initiales ;
- cartes neutres.

Dans les versions ultérieures :

- portraits dessinés ;
- cohérence de style ;
- expressions légères ;
- vêtements ou accessoires distinctifs ;
- intégration au contexte ISPA / Amiens / université.

Les portraits ne doivent pas véhiculer de stéréotypes culturels simplistes.

## 11. Objets

Les objets doivent être visuellement identifiables.

Dans les premières versions :

- icônes temporaires ;
- étiquettes textuelles ;
- statut clair.

Dans les versions ultérieures :

- objets dessinés ;
- cohérence graphique ;
- distinction entre objets d’accès, objets de preuve, objets d’interaction et objets linguistiques.

Un objet doit toujours être associé à une fonction claire.

## 12. Documents

Les documents constituent le cœur visuel du jeu.

Ils peuvent prendre la forme de :

- mail ;
- SMS ;
- planning ;
- formulaire ;
- note manuscrite ;
- règlement ;
- article ;
- rapport ;
- ticket ;
- reçu ;
- fiche administrative.

Dès les premières versions, il faut prévoir des composants documentaires différenciés.

Exemples :

- composant `EmailDocument` ;
- composant `MessageDocument` ;
- composant `FormDocument` ;
- composant `ReportDocument`;
- composant `ScheduleDocument`.

Ces composants peuvent être sobres au départ, puis enrichis graphiquement ensuite.

## 13. Interface provisoire et interface finale

L’interface provisoire doit répondre à la question :

> Où chaque élément du jeu doit-il se placer pour que l’enquête soit claire ?

L’interface finale répondra plus tard à la question :

> Quelle identité visuelle forte donnera envie d’entrer dans cet univers ?

Ces deux questions ne doivent pas être confondues.

## 14. Rôle d’Antigravity

Antigravity doit intervenir principalement sur :

- la structure visuelle ;
- les wireframes ;
- la lisibilité ;
- l’ergonomie ;
- la hiérarchie des zones ;
- les tests de parcours ;
- l’amélioration progressive de l’interface ;
- la préparation de l’identité graphique future.

Antigravity ne doit pas :

- ajouter d’animation ;
- figer trop tôt les personnages ;
- créer une identité finale avant validation du gameplay ;
- surcharger l’écran ;
- modifier le moteur sans nécessité ;
- casser la séparation entre données et interface.

## 15. Rôle de Codex

Codex doit préparer les composants pour que l’interface puisse évoluer.

Il doit notamment :

- créer des composants réutilisables ;
- séparer les données et l’affichage ;
- prévoir des emplacements pour les assets ;
- typer les objets, personnages, lieux et documents ;
- éviter les styles codés de manière trop rigide ;
- documenter la structure.

Codex ne doit pas imposer une identité graphique définitive.

## 16. Versions concernées

### V0.1 à V0.3

Objectif :

- interface minimale ;
- zones de base ;
- affichage des lieux, documents, personnages.

### V0.4 à V0.6

Objectif :

- inventaire plus clair ;
- objets visibles ;
- statut des preuves ;
- accusation finale lisible.

### V0.7 à V0.8

Objectif :

- audit UX ;
- amélioration de la lisibilité ;
- correction des frictions ;
- meilleure structure visuelle.

### V0.9 à V1.0

Objectif :

- enrichissement graphique ;
- identité plus marquée ;
- portraits ;
- icônes ;
- documents stylisés ;
- cohérence d’ensemble.

## 17. Critères de réussite

L’espace graphique est réussi si :

- le joueur comprend où il est ;
- il sait quoi faire ;
- il distingue les lieux, documents, objets et suspects ;
- il voit ce qu’il a déjà consulté ;
- il repère les objets obtenus ;
- il comprend quels éléments peuvent servir de preuve ;
- il peut lire les documents sans fatigue ;
- l’enseignant peut projeter le jeu en classe.

L’identité graphique sera réussie si :

- elle renforce l’immersion ;
- elle ne nuit pas à la lisibilité ;
- elle reste cohérente ;
- elle sert l’enquête ;
- elle donne au jeu une personnalité reconnaissable.

## 18. Principe final

L’espace graphique doit être pensé dès le début comme une architecture d’accueil.

L’identité graphique doit être construite plus tard comme une incarnation esthétique.

Formule à retenir :

> Prévoir la place du graphisme dès maintenant ; inventer son style définitif seulement après validation du jeu.
