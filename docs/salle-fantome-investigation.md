# La salle fantome - base jouable

## Pitch

Le joueur incarne un etudiant international convoque a un oral de TCF a 15 h 30. Sa convocation indique la salle Jaures, mais cette salle n apparait pas sur le plan actuel de l ISPA. L enquete montre progressivement que Jaures est un ancien nom de salle, aujourd hui remplace par Beffroi.

La resolution reste administrative et reparatrice : Thi Thai reconnait avoir utilise trop vite un ancien modele de convocation, puis demande au joueur d afficher une rectification pour les autres candidats.

## Fichiers principaux

- Scenario : `src/data/scenarios/salleFantome.ts`
- Enregistrement : `src/data/scenarios/index.ts`
- Extension generique de progression : `src/types/scenario.ts` et `src/components/InvestigationPage.tsx`
- Verification minimale : `scripts/validate-salle-fantome.mjs`

## Personnages

- Delphine : confirme que les oraux ont bien lieu, mais ne resout pas le probleme.
- Ning Yi : autre candidat, cree une fausse piste comique et suggere indirectement l hypothese du vieux document.
- Heidi : aide a formuler la contradiction entre convocation et plan actuel.
- Marine : apparait apres l archive de Heidi et donne la correspondance Jaures -> Beffroi.
- Thi Thai : revient a l acte III, explique l ancien modele et demande la rectification.

## Etapes jouables

1. `start` : le joueur commence dans le hall.
2. `tcfConvocationRead` : enigme `lire-convocation-tcf`, reperage de la salle Jaures.
3. `currentMapChecked` : enigme `verifier-plan-actuel`, constat que Jaures manque sur le plan.
4. `secretaryVisited` : Delphine confirme les oraux dans `temoignage-delphine`.
5. `ningYiMet` : Ning Yi confirme que le probleme touche un autre candidat.
6. `heidiProblemFormulated` : enigme `formuler-probleme-heidi`.
7. `oldDocumentObtained` : document `archive-entrainements-tcf`.
8. `marineMet` : le lieu `couloir-marine` est debloque apres Heidi.
9. `nameCorrespondenceObtained` : document `note-changement-noms`.
10. `beffroiIdentified` : enigme `identifier-beffroi`.
11. `thiThaiReturned` : le lieu `secretariat-thi-thai` est debloque.
12. `correctionMessageChosen` : resolution finale `resolution-salle-fantome`.
13. `correctionDisplayed` : le message clair est valide.
14. `investigationSolved` : conclusion positive.

## Documents

- `convocation-tcf` : convocation officielle avec "Lieu : salle Jaures".
- `plan-actuel-salles` : liste des salles actuelles, sans Jaures.
- `temoignage-delphine` : confirmation des oraux de TCF.
- `archive-entrainements-tcf` : ancien document mentionnant Jaures, Rimbaud et Choderlos de Laclos.
- `note-changement-noms` : correspondance Jaures -> Beffroi, Rimbaud -> Cathedrale, Choderlos de Laclos -> Gambetta.
- `temoignage-thi-thai` : origine de l erreur, ancien modele et copier-coller trop rapide.
- `message-rectification` : message final a afficher sur le panneau.

## Mini-jeux actuels

Les mini-jeux sont pour l instant modelises avec les `Puzzle` existants :

- Lire la convocation : choix simple.
- Chercher la salle sur le plan : choix simple.
- Formuler le probleme avec Heidi : choix multiple.
- Associer les anciens et nouveaux noms : choix simple, avec `puzzleType: 'matching'`.
- Choisir le message final : resolution finale.

## Emplacements pour mini-jeux futurs

- Apres le retour de Thi Thai : remplacer la validation finale par une mini-course vers le panneau avant 15 h 20.
- Dans `couloir-marine` : ajouter une recherche visuelle ou un choix de direction avant de rencontrer Marine.
- Dans `panneau-affichage` : remplacer le bouton de resolution par un mini-jeu de placement ou de clic rapide sur le bon panneau.

Le hook generique `unlocksLocationIds` ajoute aux enigmes permet deja de debloquer un lieu apres une action reussie. Il peut servir aux futures interactions plus dynamiques sans coder de logique specifique a ce scenario dans les composants.

## Modifier le scenario

- Dialogues : modifier les champs `directSpeech`, `testimony` et `profile` dans `characters`.
- Documents : modifier les objets dans `documents`.
- Etapes : ajuster `requiredDocumentIds`, `unlocksDocumentIds` et `unlocksLocationIds` dans `puzzles`.
- Resolution finale : modifier `finalResolution.hypotheses`, `requiredEvidenceIds` et `finalNarrative`.

## Verification

Commandes conseillees :

```powershell
npm.cmd run validate:salle-fantome
npm.cmd run build
```
