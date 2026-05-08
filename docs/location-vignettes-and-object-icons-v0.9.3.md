# Vignettes de lieux et Icônes d'objets V0.9.3

## Intention

Dans la continuité de la V0.9.0 (charte graphique) et de la V0.9.2 (portraits), la V0.9.3 ajoute des visuels pour les lieux et les objets.

## Vignettes de lieux (Temporaires)

Les vignettes de lieux servent de _placeholders_ fonctionnels pour valider l'espace dans l'interface et donner plus de vie à l'enquête sans figer définitivement le rendu final des décors.

- **Ratio** : Paysage (3:2)
- **Style** : 2D vectoriel, aplats simples, très peu de détails, absence de personnages.
- **Organisation** : Enregistrées dans `public/assets/locations/`.
- **Remplaçabilité** : Le nommage (ex: `accueil-temp.png`) indique qu'elles peuvent et doivent être remplacées plus tard par des décors finaux sans casser l'interface ni le code (il suffit d'écraser le fichier ou de mettre à jour la valeur `vignetteUrl` dans le scénario).

Lieux couverts : Accueil, Secrétariat, Couloir, Salle informatique.

## Icônes d'objets (Durables)

Les objets de l'inventaire ont reçu un traitement plus abouti et sont conçus pour perdurer.

- **Ratio** : Carré (1:1)
- **Style** : Icône UI 2D claire, trait net, isolé sur fond blanc (ou fond UI), ultra lisible en petite taille (40x40 px).
- **Organisation** : Enregistrées dans `public/assets/objects/` avec des noms pérennes (ex: `ticket-bus.png`).
- **Intégration** : Intégrées dans la liste des objets observables (`LocationDetail`) et dans l'inventaire du joueur (`InventoryPanel`).

Objets couverts : Badge visiteur, Ticket de bus, Clé USB "Exercices B1".

## Consignes pour la suite

Pour ajouter un nouveau lieu :
1. Générer l'image 3:2 avec le prompt core défini.
2. La nommer `[nom-lieu]-temp.png` et la placer dans `public/assets/locations/`.
3. Assigner le chemin à `vignetteUrl` dans la configuration du scénario.

Pour ajouter un nouvel objet :
1. Générer l'icône 1:1 avec le prompt d'objet.
2. La nommer `[nom-objet].png` et la placer dans `public/assets/objects/`.
3. Assigner le chemin à `iconUrl` dans la configuration de l'objet.
