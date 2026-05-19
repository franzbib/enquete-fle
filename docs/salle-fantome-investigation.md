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
- Marine : apparait apres l archive de Heidi et confie une note interne qui permet de retrouver la correspondance Jaures -> Beffroi.
- Thi Thai : apparait conditionnellement dans le Secretariat apres `identifier-beffroi`. Son texte actuel est : "Thi Thai comprend le probleme, vous explique et vous demande un service."

## Etapes jouables

1. `start` : le joueur commence dans le hall.
2. `tcfConvocationRead` : enigme `lire-convocation-tcf`, reperage de la salle Jaures.
3. `currentMapChecked` : enigme `verifier-plan-actuel`, constat que Jaures manque sur le plan.
4. `secretaryVisited` : Delphine confirme les oraux dans `temoignage-delphine`.
5. `ningYiMet` : document `temoignage-ning-yi`, debloque apres la verification du plan ; pres du panneau, Ning Yi confirme que le probleme touche un autre candidat.
6. `heidiProblemFormulated` : enigme `formuler-probleme-heidi`.
7. `oldDocumentObtained` : document `archive-entrainements-tcf`.
8. `marineMet` : le lieu `couloir-marine` est debloque apres Heidi.
9. `nameCorrespondenceObtained` : objet d inventaire `note-interne-marine`, obtenu dans le couloir avec Marine.
10. `beffroiIdentified` : enigme `identifier-beffroi`.
11. `thiThaiReturned` : Thi Thai apparait dans le lieu `secretariat` apres validation de `identifier-beffroi`.
12. `thiThaiErrorUnderstood` : enigme `comprendre-erreur-thi-thai`, le joueur identifie l ancien modele de convocation.
13. `correctionMessageUnlocked` : document `message-rectification` et objet `rectification-a-afficher`, debloques seulement apres l etape Thi Thai.
14. `correctionMessageChosen` : resolution finale `resolution-salle-fantome`, affichee dans le lieu `panneau-affichage`.
15. `correctionDisplayed` : le message clair est affiche sur le panneau.
16. `investigationSolved` : conclusion positive.

Progression cible :

```text
Convocation -> Plan -> Delphine -> Ning Yi -> Heidi -> Archive -> Marine -> note interne -> Beffroi -> Thi Thai -> message de rectification -> panneau -> Rectification finale
```

Parcours principal simplifie :

```text
Convocation -> Plan -> Heidi -> Marine -> note interne -> Beffroi -> Thi Thai -> message de rectification -> panneau -> rectification
```

Le briefing joueur ne donne plus cette structure a l avance. Il indique seulement qu une convocation semble incomplete ou confuse ; le probleme de la salle Jaures doit etre decouvert par la lecture de la convocation puis par la consultation du plan.

## Documents

- `convocation-tcf` : convocation officielle plus soignee, avec "Lieu : salle Jaures", l horaire 15 h 30 et la presence demandee dix minutes avant.
- `plan-actuel-salles` : presentation textuelle plus visuelle des salles actuelles, sans Jaures.
- `temoignage-delphine` : confirmation des oraux de TCF.
- `temoignage-ning-yi` : confirmation qu un autre candidat a recu la meme convocation, sans donner la solution.
- `archive-entrainements-tcf` : ancien document mentionnant Jaures, Rimbaud et Choderlos de Laclos.
- `note-changement-noms` : note interne plus credible, avec correspondance Jaures -> Beffroi, Rimbaud -> Cathedrale, Choderlos de Laclos -> Gambetta. Elle n apparait plus directement comme document lie dans le couloir : elle est ouverte via l objet d inventaire `note-interne-marine`.
- `temoignage-thi-thai` : origine de l erreur, ancien modele et copier-coller trop rapide.
- `message-rectification` : message final a afficher sur le panneau, debloque apres `comprendre-erreur-thi-thai`. Il sert de texte public court : ancienne salle Jaures -> Salle Beffroi.

## Objets d inventaire

- `note-interne-marine` : objet obtenu dans `couloir-marine` apres avoir consulte Marine. La note n est pas visible avant cette discussion. Dans l inventaire, l action `Lire la note` ouvre le document `note-changement-noms`. Ce document porte ensuite l etape `identifier-beffroi`.
- `rectification-a-afficher` : objet obtenu apres l etape `comprendre-erreur-thi-thai`. Thi Thai confie ce message au joueur, qui doit retourner au `panneau-affichage` pour afficher la rectification finale. L objet est marque comme utilise quand la resolution finale est validee.
- `ordinateur-ia-allume` : objet d ambiance facultatif dans `salle-informatique`. L action `Interroger l ordinateur` affiche aleatoirement une micro-scene IA parmi trois variantes : assistant administratif absurde, conseil d enquete general, generateur de poesie administrative. Cet objet ne debloque rien.

## Mini-jeux actuels

Les mini-jeux sont pour l instant modelises avec les `Puzzle` existants :

- Lire la convocation : choix simple, maintenant affiche directement sous le document `convocation-tcf` grace au champ optionnel `context`.
- Chercher la salle sur le plan : choix simple, maintenant affiche directement sous le document `plan-actuel-salles` grace au champ optionnel `context`.
- Clarifier la situation avec Heidi : choix multiple affiche directement sous la fiche de `heidi`, disponible apres les documents `convocation-tcf`, `plan-actuel-salles`, `temoignage-delphine` et `temoignage-ning-yi`.
- Retrouver le nom actuel de Jaures : choix simple affiche directement sous le document `note-changement-noms`, ouvert depuis l objet `note-interne-marine`, avec `puzzleType: 'matching'`.
- Comprendre l erreur de modele : choix simple affiche directement sous la fiche de `thi-thai`, dans le Secretariat, debloque le message final.
- Afficher le message final : resolution finale contextualisee dans le lieu `panneau-affichage`.

## Enigmes contextualisees

Le type generique `Puzzle` accepte maintenant un champ optionnel :

```ts
context?: {
  type: 'location' | 'document' | 'character';
  id: string;
};
```

Ce champ reste optionnel pour preserver les autres enquetes. Dans cette version progressive, cinq puzzles de `La salle fantome` l utilisent :

- `lire-convocation-tcf` est rattache au document `convocation-tcf`.
- `verifier-plan-actuel` est rattache au document `plan-actuel-salles`.
- `formuler-probleme-heidi` est rattache au personnage `heidi`.
- `identifier-beffroi` est rattache au document `note-changement-noms`.
- `comprendre-erreur-thi-thai` est rattache au personnage `thi-thai`.

Objectif : tester une progression plus naturelle dans la fenetre principale. Le joueur peut lire la convocation, verifier immediatement le detail inquietant, ouvrir le plan et constater l absence de Jaures, clarifier la situation avec Heidi, obtenir la note de Marine dans l inventaire, lire cette note pour identifier Beffroi, comprendre l erreur avec Thi Thai, puis retourner au panneau d affichage pour afficher la rectification.

Pour eviter un doublon trop visible, les enigmes contextualisees disponibles et non resolues sont masquees du tableau d enquete. Une fois resolues, elles peuvent y reapparaitre comme deductions validees.

La resolution finale reste basee sur `FinalResolutionDetail`, mais elle est maintenant contextualisee dans le lieu `panneau-affichage` et exige l objet `rectification-a-afficher`.

## Salle informatique facultative

La `salle-informatique` est un lieu optionnel d ambiance. Elle contient l objet `ordinateur-ia-allume`.

Chaque interaction avec cet ordinateur tire au hasard :

- une variante IA administrative absurde ;
- une variante IA methodologique ;
- une variante IA poetique ou burlesque.

Le tirage choisit aussi une reponse aleatoire dans la variante. Cette micro-scene est rejouable et ne modifie pas la progression principale : aucun lieu, document, objet, personnage, puzzle ou element de resolution n est debloque.

## Emplacements pour mini-jeux futurs

- Apres le retour de Thi Thai : remplacer plus tard la validation finale par une mini-course vers le panneau avant 15 h 20.
- Dans `couloir-marine` : ajouter une recherche visuelle ou un choix de direction avant de rencontrer Marine.
- Dans `panneau-affichage` : remplacer plus tard la resolution textuelle par un mini-jeu de placement ou de clic rapide sur le bon panneau.

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
- L etape `identifier-beffroi` est affichee sous la note interne de Marine, elle-meme ouverte depuis l objet d inventaire `note-interne-marine`, visible seulement apres consultation de Marine.
- Le lieu separe `secretariat-thi-thai` a ete supprime : Thi Thai apparait maintenant conditionnellement dans `secretariat` apres `identifier-beffroi`.
- La sequence finale est restauree : apres `comprendre-erreur-thi-thai`, le joueur obtient `rectification-a-afficher`, retourne au `panneau-affichage`, puis valide `resolution-salle-fantome` dans ce lieu.

Limites conservees volontairement :

- Le plan reste un document textuel mis en page et accessible depuis le hall apres la convocation ; le vrai plan graphique de l ISPA reste a produire.
- L affichage final reste une resolution textuelle ; il est localise au panneau, mais pourra devenir plus tard un mini-jeu de placement, de rapidite ou de course.

Elements a reprendre plus tard :

- Creer une vraie convocation graphique ou un rendu administratif dedie.
- Produire un plan graphique des salles affiche dans le hall ou pres du panneau, avec Secretariat, Beffroi, Cathedrale, Gambetta et les autres salles actuelles utiles, sans Jaures, Rimbaud ni Choderlos de Laclos.
- Remplacer l action finale textuelle par une interaction au panneau quand le systeme de mini-jeu sera choisi.

## Modifier le scenario

- Dialogues : modifier les champs `directSpeech`, `testimony` et `profile` dans `characters`.
- Documents : modifier les objets dans `documents`.
- Etapes : ajuster `requiredDocumentIds`, `unlocksDocumentIds`, `unlocksLocationIds` et `unlocksObjectIds` dans `puzzles`.
- Resolution finale : modifier `finalResolution.hypotheses`, `requiredEvidenceIds` et `finalNarrative`.

## Verification

Commandes conseillees :

```powershell
npm.cmd run validate:salle-fantome
npm.cmd run build
```
