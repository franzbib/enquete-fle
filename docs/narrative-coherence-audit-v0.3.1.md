# Audit de coherence narrative V0.3.1 - Le dossier disparu

## Version auditee

Scenario : `src/data/scenarios/dossierDisparu.ts`

Etat audite : V0.3.1, apres les ajustements sur :

- la distinction `presentCharacterIds` / `relatedCharacterIds` ;
- le rattachement du temoignage de Fahad au couloir ;
- le retrait de l'affichage visible des personnages seulement lies dans un lieu ;
- la reformulation de la contradiction autour de Fahad ;
- l'ajout preparatoire de l'objet d'ambiance `Cle USB "Exercices B1"`.

## Resume de l'intrigue actuelle

Un dossier de candidature universitaire appartenant a Chen a disparu du secretariat de l'ISPA avant une echeance importante. Plusieurs personnes sont passees dans le batiment entre 16h10 et 16h50.

Le joueur doit d'abord reconstituer la chronologie, puis comparer le temoignage de Fahad avec une trace technique de la salle informatique. La solution implicite actuelle suggere que Fahad a pris ou deplace une pochette par erreur, puis a tente de signaler le probleme par un brouillon de mail non envoye.

## Chronologie reconstituee

- 16h10 : Chen verifie ou depose la pochette claire au secretariat.
- 16h20 : Fahad passe au secretariat pour demander une attestation.
- Vers 16h30 : Xiaoyu voit Fahad attendre pres du secretariat avec une pochette ou quelques feuilles.
- 16h35 : Madame Delorme quitte le bureau pour repondre a un appel.
- 16h48 : la session Fahad imprime `attestation_scolarite.pdf` en salle informatique.
- Vers 16h50 : Chen revient au secretariat ; le dossier n'est plus sur le bureau.
- Apres la contradiction : un brouillon de mail non envoye indique que Fahad pense avoir pris une pochette qui n'etait pas la sienne.

La chronologie generale fonctionne. Elle cree une progression deductive lisible : depot du dossier, passage de Fahad, observation dans le couloir, trace informatique, brouillon de mail.

## Carte des presences

### Personnages physiquement presents dans les lieux

- Secretariat : Madame Delorme, Chen.
- Couloir : Xiaoyu, Fahad.
- Salle informatique : Monsieur Armand.

### Personnages seulement lies a un lieu

- Fahad est lie a la salle informatique par l'historique d'impression et le brouillon de mail.
- Chen est liee au secretariat et mentionnee dans plusieurs documents administratifs.
- Madame Delorme est liee au secretariat et a la note manuscrite.

La separation entre presence physique et lien narratif est coherente. Fahad n'est plus affiche comme present dans la salle informatique, ce qui evite l'impression de double presence.

## Documents et lieux

### Secretariat

- `planning-secretariat` : coherent, document administratif attendu.
- `mail-convocation` : coherent, document administratif expliquant l'enjeu.
- `temoignage-chen` : coherent, temoignage recueilli ou rattache au lieu central de l'affaire.

### Couloir

- `temoignage-xiaoyu` : coherent, Xiaoyu observe un deplacement dans le couloir.
- `note-manuscrite` : plausible, mais son origine reste vague.
- `temoignage-fahad` : coherent depuis la correction ; Fahad est present dans le couloir.

### Salle informatique

- `historique-impression` : coherent, trace technique.
- `brouillon-mail` : coherent comme trace numerique, mais son support exact reste implicite.
- `cle-usb-exercices-b1` : coherent comme objet d'ambiance non bloquant.

## Personnages et temoignages

- Chen : temoignage credible, partiel, centre sur sa derniere vision du dossier.
- Fahad : temoignage plus credible depuis la reformulation ; il minimise son parcours sans nier explicitement la salle informatique.
- Xiaoyu : temoignage utile et plausible, mais actuellement tres fort car il voit a la fois la pochette et l'entree en salle informatique.
- Madame Delorme : temoignage credible, mais son interruption reste peu documentee hors planning.
- Monsieur Armand : temoin secondaire plausible ; il signale une pochette pres de l'imprimante, ce qui soutient la piste de confusion.

## Traces techniques

L'historique d'impression est maintenant plus credible :

```text
16h48 : session Fahad - impression attestation_scolarite.pdf.
```

Cette trace ne prouve pas que Fahad a manipule le dossier de Chen. Elle prouve seulement qu'il etait encore actif dans le batiment apres son passage au secretariat, ce qui est narrativement plus juste.

Le brouillon de mail non envoye est une trace forte. Il rapproche beaucoup Fahad de la solution, mais il est debloque apres la contradiction, ce qui limite l'effet de revelation prematuree.

## Objets

- `badge-visiteur` : objet preparatoire coherent avec l'acces futur a la salle informatique.
- `pochette-claire` : objet de preuve coherent, mais son statut exact est encore ambigu tant que l'inventaire n'existe pas.
- `cle-usb-exercices-b1` : objet d'ambiance coherent, non accusatoire, utile pour enrichir la salle informatique sans creer une piste injuste.

## Contradictions voulues

### Contradiction principale autour de Fahad

Declaration :

```text
Je suis seulement passe au secretariat. Je suis parti tout de suite apres.
```

Trace :

```text
16h48 : session Fahad - impression attestation_scolarite.pdf.
```

Conclusion deductive :

Un element ne correspond pas dans la chronologie de Fahad. Il n'est probablement pas parti tout de suite apres son passage au secretariat.

Cette contradiction est credible, sobre et suffisamment claire. Elle n'accuse pas directement Fahad d'avoir pris le dossier, mais elle justifie de poursuivre l'enquete vers la salle informatique.

## Lien entre disparition et preuves

La chaine actuelle est :

1. Le planning montre que Chen avait le dossier a 16h10.
2. Le planning montre que Fahad passe au secretariat a 16h20.
3. Xiaoyu voit Fahad sortir avec une pochette claire vers 16h30.
4. La session Fahad est active en salle informatique a 16h48.
5. Le brouillon de mail indique qu'il pense avoir pris une pochette qui n'etait pas la sienne.

La chaine est globalement deductible, mais le brouillon de mail porte presque toute la preuve finale. Sans lui, la solution reste possible mais moins certaine.

## Solution implicite actuelle

Solution implicite :

Fahad a probablement pris ou deplace la pochette de Chen par erreur en pensant recuperer son attestation ou ses propres documents. Il s'en est rendu compte plus tard en salle informatique et a commence un mail pour signaler l'erreur, mais ne l'a pas envoye.

Cette solution reste compatible avec une enquete non dramatique et nuancee. Elle doit toutefois etre validee humainement car le brouillon de mail est tres explicite par rapport au reste des preuves.

## Incoherences involontaires

| Gravite | Probleme | Pourquoi c'est genant | Correction minimale recommandee |
|---|---|---|---|
| Moyen | Le brouillon de mail est tres proche d'un aveu. | Il risque de transformer la deduction finale en revelation directe, surtout parce que le texte dit deja "j'ai pris une pochette qui n'etait pas la mienne". | Garder le document, mais le rendre legerement moins explicite : "Je crois qu'il y a eu une confusion avec une pochette. Je dois verifier avant d'ecrire au secretariat." |
| Moyen | Le temoignage de Xiaoyu est tres performant : elle voit Fahad sortir avec une pochette claire puis entrer en salle informatique. | Combine avec l'historique et le brouillon, il reduit la place du doute. Fahad devient rapidement le seul axe d'enquete. | Ajouter une nuance dans le temoignage : "je crois avoir vu" ou "une pochette claire, mais je n'ai pas vu le nom dessus". |
| Moyen | La note manuscrite mentionne une pochette claire et une piece manquante, mais son auteur et sa fonction restent flous. | Le joueur peut ne pas savoir s'il s'agit d'une preuve, d'une fausse piste ou d'un simple rappel administratif. | Preciser legerement la source ou la fonction : note retrouvee pres du bureau, ecriture non identifiee, ou note de Madame Delorme. |
| Moyen | Le document `historique-impression` lie aussi Monsieur Armand, mais la trace visible ne mentionne que Fahad. | Le document pretend etre lie a Armand sans contenu qui l'implique directement. Cela peut affaiblir la coherence des `relatedCharacterIds`. | Soit retirer `monsieur-armand` de `relatedCharacterIds`, soit ajouter une ligne neutre dans l'historique : "16h40 : session Armand - impression supports_cours.pdf". |
| Mineur | La salle informatique est marquee `kind: 'locked'` mais `available: true`. | Ce n'est pas bloquant en V0.3, mais cela peut creer une ambiguite entre lieu narrativement verrouille et lieu disponible dans le prototype. | Ajouter une note de donnees ou renommer le role : "piste technique disponible dans le prototype". Correction a reporter si l'acces par objet arrive en V0.4. |
| Mineur | `Cle USB "Exercices B1"` est declaree comme objet d'ambiance, mais elle n'est pas encore visible sans inventaire. | Ce n'est pas incoherent, mais l'objet n'a pas d'effet joueur en V0.3.1. | Ne rien changer avant V0.4. Lors de l'inventaire, afficher clairement le statut "ambiance" ou "sans lien direct". |
| Mineur | Le planning affirme que Fahad demande une attestation a 16h20, mais son temoignage ne mentionne plus explicitement l'attestation. | La contradiction reste claire, mais la motivation initiale de son passage repose surtout sur le planning et le profil. | Eventuellement ajuster le temoignage : "Je suis seulement passe demander mon attestation au secretariat." |

## Validation narrative

Statut : valide avec reserves.

Le scenario est jouable et coherent dans son etat actuel. Les corrections precedentes ont nettement ameliore :

- la presence de Fahad ;
- la localisation du temoignage ;
- la sobriete de la trace technique ;
- la distinction entre preuve et presence physique.

Les reserves portent surtout sur la finesse de la solution finale : le brouillon de mail et le temoignage de Xiaoyu donnent beaucoup d'information. Avant l'accusation finale, il faudra decider si le prototype assume une resolution assez directe ou si la preuve finale doit etre rendue un peu plus ambigue.

## Corrections minimales recommandees avant la suite

1. Nuancer legerement le brouillon de mail pour eviter un aveu trop direct.
2. Nuancer le temoignage de Xiaoyu pour garder une marge de doute.
3. Clarifier le role de la note manuscrite.
4. Aligner `relatedCharacterIds` de l'historique avec son contenu visible.

Ces corrections sont locales et ne demandent aucune nouvelle fonctionnalite.

## Corrections appliquees pendant cet audit

Aucune correction de scenario n'a ete appliquee pendant cet audit. Seul ce rapport a ete cree, conformement a la consigne de ne pas modifier le code dans un premier temps.

## Suivi V0.3.2 - Micro-correction narrative et UX-narrative

Corrections locales appliquees apres validation des remarques :

- les formulations interpretatives autour de Fahad ont ete remplacees par une formulation neutre dans l'interface joueur : "Un element ne correspond pas dans la chronologie." ;
- le brouillon de mail a ete rendu moins accusatoire : il signale une confusion de documents sans dire que Fahad a pris le dossier de Chen ;
- le temoignage de Xiaoyu a ete nuance : elle observe Fahad avec une pochette ou des feuilles, sans pouvoir dire exactement ce qu'il a pris ;
- la note manuscrite a ete clarifiee comme rappel administratif possible ;
- l'historique d'impression indique une trace technique sobre : session Fahad, poste 03, 16h48, impression de `attestation_scolarite.pdf` ;
- la fiche personnage affiche uniquement le lieu ou le personnage est rencontre. Les lieux seulement relies par `relatedLocationIds` restent dans les donnees mais ne sont pas reveles directement au joueur ;
- le point `kind: 'locked'` avec `available: true` est documente comme dette volontaire a traiter en V0.4 avec l'inventaire et les objets d'acces.

## Points a valider humainement

- Le brouillon de mail doit-il rester une preuve tres forte, adaptee a un prototype court, ou devenir plus ambigu ?
- Xiaoyu doit-elle etre un temoin tres fiable ou un temoin utile mais plus incertain ?
- La note manuscrite doit-elle devenir une vraie preuve, une fausse piste ou un simple contexte ?
- Monsieur Armand doit-il rester relie a l'historique d'impression, ou faut-il le retirer de cette trace ?
- La V0.4 doit-elle rendre visibles les objets d'ambiance, ou seulement les objets utiles ?
