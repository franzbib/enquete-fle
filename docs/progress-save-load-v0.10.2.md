# Sauvegarde locale de progression — V0.10.2

## Resume

La V0.10.2 ajoute une sauvegarde locale minimale de progression par scenario.

La sauvegarde utilise `localStorage` et reste strictement locale au navigateur. Elle ne cree ni backend, ni base de donnees, ni compte utilisateur, ni suivi enseignant.

## Cle de stockage

Chaque scenario utilise une cle dediee :

```text
enquete-fle:progress:<scenarioId>
```

Pour le scenario actuel :

```text
enquete-fle:progress:le-dossier-disparu
```

## Structure sauvegardee

Le type `ScenarioProgressSave` est defini dans :

```text
src/engine/progressStorage.ts
```

La sauvegarde contient :

- version de format ;
- identifiant du scenario ;
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
- date de derniere mise a jour.

## Donnees non sauvegardees

La V0.10.2 ne sauvegarde pas :

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
- les IDs inconnus sont ignores ;
- une selection invalide retombe sur le premier lieu du scenario ;
- les compteurs d'indices sont limites au nombre d'indices disponibles.

Si `localStorage` est indisponible, plein ou invalide, le jeu reste jouable avec une progression neuve.

## Limites volontaires

La V0.10.2 ne cree pas encore :

- bouton de remise a zero ;
- ecran de gestion des sauvegardes ;
- synchronisation entre appareils ;
- sauvegarde cloud ;
- comptes utilisateurs ;
- suivi enseignant ;
- export de progression.

Ces points pourront etre etudies plus tard, apres test de la sauvegarde locale minimale.
