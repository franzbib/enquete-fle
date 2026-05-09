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
- Ning Yi : autre candidat place pres du panneau d affichage. Il cree une fausse piste comique et confirme que le probleme touche au moins deux candidats, sans suggerer l hypothese du vieux document. Son temoignage est requis avant l etape avec Heidi.
- Heidi : aide a formuler la contradiction entre convocation et plan actuel.
- Marine : apparait apres l archive de Heidi et donne la correspondance Jaures -> Beffroi.
- Thi Thai : revient a l acte III, explique l ancien modele et demande la rectification.

## Etapes jouables

1. `start` : le joueur commence dans le hall.
2. `tcfConvocationRead` : enigme `lire-convocation-tcf`, reperage de la salle Jaures.
3. `currentMapChecked` : enigme `verifier-plan-actuel`, constat que Jaures manque sur le plan.
4. `secretaryVisited` : Delphine confirme les oraux dans `temoignage-delphine`.
5. `ningYiMet` : document `temoignage-ning-yi`, debloque apres la verification du plan ; pres du panneau, Ning Yi confirme que le probleme touche un autre candidat.
6. `heidiProblemFormulated` : enigme `formuler-probleme-heidi`.
7. `oldDocumentObtained` : document `archive-entrainements-tcf`.
8. `marineMet` : le lieu `couloir-marine` est debloque apres Heidi.
9. `nameCorrespondenceObtained` : document `note-changement-noms`.
10. `beffroiIdentified` : enigme `identifier-beffroi`.
11. `thiThaiReturned` : le lieu `secretariat-thi-thai` est debloque.
12. `thiThaiErrorUnderstood` : enigme `comprendre-erreur-thi-thai`, le joueur identifie l ancien modele de convocation.
13. `correctionMessageUnlocked` : document `message-rectification`, debloque seulement apres l etape Thi Thai.
14. `correctionMessageChosen` : resolution finale `resolution-salle-fantome`.
15. `correctionDisplayed` : le message clair est valide.
16. `investigationSolved` : conclusion positive.

Progression cible :

```text
Convocation -> Plan -> Delphine -> Ning Yi -> Heidi -> Archive -> Marine -> Beffroi -> Thi Thai -> Comprendre l erreur -> Rectification finale
```

Le briefing joueur ne donne plus cette structure a l avance. Il indique seulement qu une convocation semble incomplete ou confuse ; le probleme de la salle Jaures doit etre decouvert par la lecture de la convocation puis par la consultation du plan.

## Documents

- `convocation-tcf` : convocation officielle plus soignee, avec "Lieu : salle Jaures", l horaire 15 h 30 et la presence demandee dix minutes avant.
- `plan-actuel-salles` : presentation textuelle plus visuelle des salles actuelles, sans Jaures.
- `temoignage-delphine` : confirmation des oraux de TCF.
- `temoignage-ning-yi` : confirmation qu un autre candidat a recu la meme convocation, sans donner la solution.
- `archive-entrainements-tcf` : ancien document mentionnant Jaures, Rimbaud et Choderlos de Laclos.
- `note-changement-noms` : note interne plus credible, avec correspondance Jaures -> Beffroi, Rimbaud -> Cathedrale, Choderlos de Laclos -> Gambetta.
- `temoignage-thi-thai` : origine de l erreur, ancien modele et copier-coller trop rapide.
- `message-rectification` : message final a afficher sur le panneau, debloque apres `comprendre-erreur-thi-thai`.

## Mini-jeux actuels

Les mini-jeux sont pour l instant modelises avec les `Puzzle` existants :

- Lire la convocation : choix simple, maintenant affiche directement sous le document `convocation-tcf` grace au champ optionnel `context`.
- Chercher la salle sur le plan : choix simple, maintenant affiche directement sous le document `plan-actuel-salles` grace au champ optionnel `context`.
- Clarifier la situation avec Heidi : choix multiple affiche directement sous la fiche de `heidi`, disponible apres les documents `convocation-tcf`, `plan-actuel-salles`, `temoignage-delphine` et `temoignage-ning-yi`.
- Retrouver le nom actuel de Jaures : choix simple affiche directement sous le document `note-changement-noms`, avec `puzzleType: 'matching'`.
- Comprendre l erreur de modele : choix simple apres le retour de Thi Thai, debloque le message final.
- Choisir le message final : resolution finale.

## Enigmes contextualisees

Le type generique `Puzzle` accepte maintenant un champ optionnel :

```ts
context?: {
  type: 'location' | 'document' | 'character';
  id: string;
};
```

Ce champ reste optionnel pour preserver les autres enquetes. Dans cette premiere version progressive, quatre puzzles de `La salle fantome` l utilisent :

- `lire-convocation-tcf` est rattache au document `convocation-tcf`.
- `verifier-plan-actuel` est rattache au document `plan-actuel-salles`.
- `formuler-probleme-heidi` est rattache au personnage `heidi`.
- `identifier-beffroi` est rattache au document `note-changement-noms`.

Objectif : tester une progression plus naturelle dans la fenetre principale. Le joueur peut lire la convocation, verifier immediatement le detail inquietant, ouvrir le plan et constater l absence de Jaures, clarifier la situation avec Heidi, puis exploiter la note de Marine pour identifier Beffroi sans passer d abord par le tableau d enquete.

Pour eviter un doublon trop visible, les enigmes contextualisees disponibles et non resolues sont masquees du tableau d enquete. Une fois resolues, elles peuvent y reapparaitre comme deductions validees.

Limite actuelle : Thi Thai et la resolution finale restent dans le fonctionnement existant. Le rattachement des puzzles aux autres personnages ou lieux sera une etape ulterieure.

## Emplacements pour mini-jeux futurs

- Apres le retour de Thi Thai : remplacer la validation finale par une mini-course vers le panneau avant 15 h 20.
- Dans `couloir-marine` : ajouter une recherche visuelle ou un choix de direction avant de rencontrer Marine.
- Dans `panneau-affichage` : remplacer le bouton de resolution par un mini-jeu de placement ou de clic rapide sur le bon panneau.

Le hook generique `unlocksLocationIds` ajoute aux enigmes permet deja de debloquer un lieu apres une action reussie. Il peut servir aux futures interactions plus dynamiques sans coder de logique specifique a ce scenario dans les composants.

## Passe UX / narrative conservatrice

Corrections appliquees :

- La convocation est devenue le point d entree dramatique : formulation plus officielle, horaire plus present, rappel du risque de retard.
- Le briefing de mission a ete rendu moins revelateur : il ne mentionne plus la salle Jaures absente du plan, la comparaison a effectuer, l erreur administrative ou l aide finale aux autres candidats.
- Les descriptions visibles des lieux ont ete reformulees comme des lieux et non comme des fonctions de gameplay.
- Ning Yi ne donne plus la piste du vieux document ; il renforce seulement l etrangete et la tension comique.
- Ning Yi est deplace vers le `panneau-affichage`, afin qu il ne soit plus le premier interlocuteur naturel du hall.
- Le temoignage de Ning Yi est debloque apres `verifier-plan-actuel`, afin d eviter qu il devienne le premier indice avant le constat sur le plan.
- Le tableau d enquete masque les enigmes et la resolution finale tant qu elles ne sont ni disponibles ni deja validees.
- L objet `emplacement-affichage` a ete retire de l inventaire pour eviter qu un espace du panneau soit traite comme un objet a prendre.
- Les deux premieres enigmes sont affichees sous leurs documents pour reduire la dependance initiale au tableau d enquete.
- L etape avec Heidi est affichee sous sa fiche personnage pour poursuivre la progression dans la fenetre principale.
- L etape `identifier-beffroi` est affichee sous la note interne de Marine.

Limites conservees volontairement :

- Le plan reste un document textuel mis en page et accessible depuis le hall apres la convocation ; le vrai plan graphique de l ISPA reste a produire.
- Les interactions avec Thi Thai et la rectification finale restent techniquement dans le fonctionnement actuel du tableau d enquete.
- L affichage final reste une resolution textuelle ; l action au panneau pourra devenir plus tard un mini-jeu de placement, de rapidite ou de course.

Elements a reprendre plus tard :

- Creer une vraie convocation graphique ou un rendu administratif dedie.
- Produire un plan graphique des salles affiche dans le hall ou pres du panneau, avec Secretariat, Beffroi, Cathedrale, Gambetta et les autres salles actuelles utiles, sans Jaures, Rimbaud ni Choderlos de Laclos.
- Localiser naturellement les interactions restantes avec Thi Thai et le panneau d affichage.
- Remplacer l action finale par une interaction au panneau quand le systeme de mini-jeu sera choisi.

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
