# Sauvegarde / chargement explicite — V0.10.3

## Resume

La V0.10.3 remplace la sauvegarde automatique unique de la V0.10.2 par une sauvegarde explicite avec trois emplacements locaux par scenario.

Le joueur choisit quand sauvegarder et quand charger. La progression n'est plus ecrite automatiquement a chaque changement d'etat.

## Cle de stockage

Chaque scenario et chaque slot utilisent une cle dediee :

```text
enquete-fle:progress:<scenarioId>:slot:<slotNumber>
```

Pour le scenario actuel :

```text
enquete-fle:progress:le-dossier-disparu:slot:1
enquete-fle:progress:le-dossier-disparu:slot:2
enquete-fle:progress:le-dossier-disparu:slot:3
```

## Interface joueur

Dans le panneau `Progression`, deux boutons sont disponibles :

- `Sauvegarder` ;
- `Charger`.

Le bouton `Sauvegarder` affiche les trois emplacements. Si un emplacement contient deja une sauvegarde, le joueur doit confirmer l'ecrasement.

Le bouton `Charger` affiche les trois emplacements. Les emplacements vides ne peuvent pas etre charges.

## Structure sauvegardee

Le type `ScenarioProgressSave` reste defini dans :

```text
src/engine/progressStorage.ts
```

La sauvegarde contient :

- version de format ;
- identifiant du scenario ;
- numero de slot ;
- selection actuelle ;
- documents lus ;
- documents debloques ;
- objets possedes ;
- objets utilises ;
- objets reposes et leur lieu ;
- lieux deverrouilles ;
- enigmes resolues ;
- indices reveles ;
- resolution finale validee ;
- visibilite de l'inventaire ;
- visibilite du panneau Progression ;
- visibilite du panneau `Relire la mission` ;
- date de sauvegarde.

## Donnees non sauvegardees

La V0.10.3 ne sauvegarde pas :

- les donnees de scenario ;
- les textes narratifs ;
- les assets ;
- les composants React ;
- les informations personnelles ;
- les donnees enseignant.

## Robustesse

Au chargement, la sauvegarde est verifiee avant d'etre appliquee :

- la version doit etre compatible ;
- l'identifiant de scenario doit correspondre ;
- le slot doit correspondre a la cle lue ;
- les IDs inconnus sont ignores ;
- une selection invalide retombe sur le premier lieu du scenario ;
- les compteurs d'indices sont limites au nombre d'indices disponibles.

Si `localStorage` est indisponible, plein ou invalide, le jeu reste jouable sans sauvegarde.

## Limites volontaires

La V0.10.3 ne cree pas encore :

- suppression de sauvegarde ;
- renommage des slots ;
- export ou import de sauvegarde ;
- synchronisation entre appareils ;
- sauvegarde cloud ;
- comptes utilisateurs ;
- suivi enseignant.

Ces points pourront etre etudies plus tard si les futures enquetes deviennent plus longues ou utilisees en classe sur plusieurs seances.
