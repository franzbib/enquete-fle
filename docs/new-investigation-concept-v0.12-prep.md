# Préparation V0.12 — Nouveau concept d'enquête courte

## Objectif du document

Ce document prépare une future enquête plus ludique que `Le message effacé`, sans modifier le jeu pour l'instant.

La future V0.12 devra rester courte, claire, compatible B1+/B2 et fondée sur les mécaniques déjà disponibles :

- exploration par lieux ;
- documents et personnages contextualisés ;
- objets simples ;
- salle ou piste éventuellement verrouillée par un objet d'accès ;
- énigme de chronologie ;
- énigme de comparaison de pièces du dossier ;
- indices progressifs ;
- résolution finale prudente ;
- fin réparatrice.

Il ne faut pas créer de nouvelle mécanique, de backend, de refonte UI, d'assets définitifs ou de scénario trop long.

## Principes de conception

Une enquête courte réussie doit avoir :

- un incident immédiatement compréhensible ;
- une raison d'agir maintenant ;
- une question centrale simple ;
- des indices reliés à la narration ;
- deux énigmes utiles, pas décoratives ;
- peu de documents, mais des documents comparables ;
- des fausses pistes justes ;
- un bruit d'univers léger ;
- une conclusion qui explique et répare, sans humilier.

Pour un format proche des escape games éducatifs, la structure doit être :

1. Acte 1 — Incident visible : quelque chose perturbe concrètement l'ISPA.
2. Acte 2 — Contradiction documentaire : deux versions ne disent pas la même chose.
3. Acte 3 — Explication réparatrice : le joueur identifie une confusion, une ancienne version ou une erreur de diffusion.

La méta-solution doit pouvoir se formuler simplement :

> Deux informations circulaient en même temps. L'une était ancienne ou mal diffusée. Il faut retrouver la version correcte.

## Analyse critique des enquêtes existantes

### Le dossier disparu

Ce qui marche :

- l'enjeu est concret : un dossier administratif important manque ;
- l'exploration par lieux a du sens ;
- le secrétariat, le couloir et la salle informatique forment une chaîne spatiale lisible ;
- le badge donne une action physique simple ;
- la contradiction Fahad + historique d'impression crée un vrai moment de déduction ;
- la conclusion reste prudente et réparatrice.

Ce qui est réutilisable :

- une trace technique qui contredit partiellement une déclaration ;
- un document débloqué ou trouvé dans un lieu fermé ;
- des témoins qui donnent des informations partielles ;
- une résolution finale fondée sur pièces justificatives ;
- un élément d'ambiance qui ajoute de la vie sans devenir une fausse preuve.

Pourquoi l'enquête est engageante :

- le joueur comprend vite ce qui est perdu ;
- les lieux racontent l'affaire ;
- les documents ne sont pas seulement des textes : ils servent à comparer ;
- la solution n'est pas visible dans le premier document ;
- l'histoire contient un doute humain, pas seulement un bug administratif.

### Le message effacé

Ce qui marche techniquement :

- le scénario vérifie l'architecture multi-enquêtes ;
- les sauvegardes par `scenarioId` peuvent être testées ;
- les mécaniques existantes sont réutilisées sans refonte ;
- le format reste court et raisonnable.

Pourquoi l'enquête est moins intéressante :

- l'incident est moins visuel : un message absent est abstrait ;
- l'enjeu émotionnel est faible ;
- la solution "brouillon non envoyé" est assez attendue ;
- les lieux sont moins expressifs ;
- la progression ressemble davantage à une vérification technique qu'à une enquête ;
- le joueur risque de lire des documents sans ressentir de vraie tension ludique.

À éviter pour la prochaine enquête :

- un problème purement numérique sans scène forte ;
- une solution trop quotidienne et trop évidente ;
- des documents qui disent presque tous la même chose ;
- une contradiction qui ressemble à une simple erreur d'envoi ;
- une enquête dont la meilleure qualité est surtout de tester le moteur.

## Trois concepts de nouvelles enquêtes

### Concept 1 — La salle fantôme

Pitch :
Des étudiants attendent devant une salle d'examen, mais personne ne vient ouvrir. Une autre information indique que l'examen a peut-être été déplacé.

Situation initiale :
Le joueur arrive à l'accueil. Plusieurs étudiants pensent avoir rendez-vous en salle B204 pour un oral blanc. La salle est fermée, et l'heure approche.

Enjeu :
Trouver la bonne salle avant que l'examen ne soit considéré comme manqué.

Lieux :

- Accueil ;
- Couloir ;
- Secrétariat ;
- Salle informatique ou salle des profs verrouillée.

Personnages :

- Thi-Thai à l'accueil, qui entend les étudiants demander la salle ;
- Delphine au secrétariat, qui a une version récente du planning ;
- Marine ou Mathias comme étudiant concerné ;
- M. Rodolphe ou Heïdi comme enseignant responsable.

Documents clés :

- affiche imprimée indiquant B204 ;
- mail de convocation indiquant B204 ;
- planning mis à jour indiquant A12 ou salle informatique ;
- note administrative : "changement de salle après panne de vidéoprojecteur" ;
- historique d'impression montrant qu'une ancienne version de l'affiche a été imprimée.

Objets possibles :

- badge visiteur ou clé de consultation pour accéder à une salle fermée ;
- affiche froissée ou plan de bâtiment comme objet d'ambiance ;
- post-it de changement de salle.

Énigme 1 :
Chronologie des versions : convocation initiale, changement de salle, impression de l'ancienne affiche.

Énigme 2 :
Comparer deux pièces : affiche B204 + planning mis à jour / note de changement.

Résolution finale :
L'examen n'a pas été annulé : une ancienne affiche a circulé après un changement de salle. Delphine prévient les étudiants, l'enseignant accepte un léger retard, et tout le monde rejoint la bonne salle.

Intérêt pédagogique :

- comprendre une convocation ;
- lire un planning ;
- comparer des versions ;
- utiliser les marqueurs temporels ;
- formuler une conclusion prudente.

Intérêt ludique :

- urgence douce ;
- objectif très clair ;
- impression d'escape game : trouver la bonne salle ;
- fausse piste juste : les étudiants ont une raison de croire à B204 ;
- humour possible autour de la salle "fantôme" ou d'un vidéoprojecteur capricieux.

Risque principal :
Trop ressembler à une simple chasse au bon numéro de salle si les documents ne créent pas une vraie contradiction.

### Concept 2 — Le cours annulé qui ne l'était pas

Pitch :
Une rumeur affirme qu'un cours important est annulé. Pourtant, certains documents disent le contraire.

Situation initiale :
Des étudiants se dispersent parce qu'une affiche dans le couloir annonce l'annulation d'un cours. L'enseignant, lui, attend toujours sa classe.

Enjeu :
Comprendre si le cours est vraiment annulé avant que tout le groupe parte.

Lieux :

- Accueil ;
- Couloir ;
- Salle de classe ;
- Secrétariat.

Personnages :

- Heïdi ou Rodolphe comme enseignant ;
- Thi-Thai comme orientation ;
- Mathias comme étudiant qui a vu l'affiche ;
- Delphine comme vérification administrative.

Documents clés :

- affiche "cours annulé" ;
- planning de la semaine ;
- mail de l'enseignant ;
- note de secrétariat ;
- témoignage d'un étudiant qui a mal compris une annonce.

Objets possibles :

- marqueur effaçable d'ambiance ;
- ancienne affiche pliée ;
- badge ou clé de salle si une salle est fermée.

Énigme 1 :
Remettre dans l'ordre : mail de maintien du cours, affichage erroné, arrivée des étudiants.

Énigme 2 :
Comparer affiche d'annulation + mail de maintien.

Résolution finale :
Le cours n'était pas annulé. Une affiche prévue pour un autre groupe ou une autre date a été affichée au mauvais endroit.

Intérêt pédagogique :

- lire une annonce ;
- vérifier une date, un groupe et un horaire ;
- distinguer rumeur, information officielle et document daté.

Intérêt ludique :

- situation claire ;
- humour possible autour de la joie trop rapide d'un cours annulé ;
- bonne discussion FLE/FOU sur la vérification des informations.

Risque principal :
Le thème peut paraître un peu trop scolaire ou léger si l'enjeu n'est pas renforcé.

### Concept 3 — La convocation impossible

Pitch :
Une convocation indique deux informations incompatibles : un étudiant est attendu à deux endroits presque au même moment.

Situation initiale :
Chen ou Marine reçoit une convocation pour un rendez-vous administratif, mais le document semble mélanger deux dossiers ou deux personnes.

Enjeu :
Éviter qu'un étudiant manque une étape importante à cause d'une convocation mal assemblée.

Lieux :

- Secrétariat ;
- Couloir ;
- Accueil ;
- Salle informatique.

Personnages :

- Delphine au secrétariat ;
- un étudiant concerné ;
- Rodolphe ou François comme personne ayant validé une liste ;
- Thi-Thai comme accueil.

Documents clés :

- convocation imprimée ;
- liste d'inscriptions ;
- mail de confirmation ;
- historique d'impression ;
- note manuscrite avec deux noms proches.

Objets possibles :

- convocation froissée ;
- ticket de passage ;
- badge de salle informatique.

Énigme 1 :
Chronologie : liste validée, convocation imprimée, correction envoyée.

Énigme 2 :
Comparer convocation + liste officielle.

Résolution finale :
La convocation a mélangé deux lignes d'un tableau. La bonne version est retrouvée et l'étudiant est orienté au bon endroit.

Intérêt pédagogique :

- lire une convocation ;
- repérer nom, horaire, lieu, motif ;
- distinguer document provisoire et document validé.

Intérêt ludique :

- bon potentiel de comparaison documentaire ;
- erreur administrative crédible ;
- tension légère autour d'un rendez-vous imminent.

Risque principal :
Risque de ressembler au `Dossier disparu` si l'enjeu administratif n'est pas rendu visuellement plus fort.

## Concept retenu

Le concept le plus prometteur est :

> **La salle fantôme**

## Pourquoi ce concept est meilleur

Jouabilité :
Le joueur comprend immédiatement l'action : trouver la bonne salle. C'est plus incarné qu'un message absent.

Clarté :
L'opposition "salle indiquée / salle réelle" est simple, mais permet une vraie enquête documentaire grâce aux versions datées.

Potentiel d'énigme :
La chronologie des documents est naturelle : ancienne convocation, changement de salle, impression tardive d'une ancienne affiche. La contradiction repose sur deux pièces comparables.

Pertinence FLE/FOU :
Le scénario travaille des documents universitaires très utiles : convocation, planning, affichage, changement de salle, note administrative.

Faible complexité technique :
Il utilise exactement les mécaniques existantes : lieux, documents, objet d'accès, chronologie, comparaison, résolution finale.

Possibilité d'humour :
La "salle fantôme" permet un ton léger sans moquer un étudiant. Un vidéoprojecteur en panne ou une affiche qui "voyage toute seule" peut donner de la vie.

Résolution non accusatrice :
La conclusion peut être une confusion de version, pas une faute volontaire.

Compatibilité avec les mécaniques existantes :
Le badge peut ouvrir une salle où se trouve le planning mis à jour ou l'historique d'impression. Les pièces du dossier restent distinctes des objets.

## Fiche de conception complète

### Titre

La salle fantôme

### ID proposé

`la-salle-fantome`

### Durée

20 à 30 minutes.

### Niveau

B1+ / B2 léger.

### Résumé

Des étudiants attendent devant la salle B204 pour un oral blanc, mais la salle est fermée et l'enseignant n'arrive pas. Plusieurs documents indiquent des informations différentes. Le joueur doit comprendre où l'examen doit réellement avoir lieu.

### Contexte

À l'ISPA, un oral blanc doit commencer bientôt. Une affiche dans le couloir indique la salle B204. Un mail de convocation plus ancien indique aussi B204. Pourtant, Delphine pense qu'un changement de salle a été décidé après une panne de vidéoprojecteur.

### Mission

Explorer les lieux, consulter les documents et comparer les versions pour retrouver la salle correcte. Il ne faut pas accuser quelqu'un d'avoir trompé les étudiants : il faut comprendre quelle information est la plus récente.

### Lieux

Accueil :
Lieu de départ. Thi-Thai oriente le joueur et confirme que plusieurs étudiants demandent la même salle.

Couloir :
Lieu où l'affiche B204 est visible. Un étudiant attend avec inquiétude.

Secrétariat :
Delphine peut vérifier le planning officiel et donner un badge visiteur si une salle administrative doit être consultée.

Salle informatique ou salle des profs :
Lieu fermé au départ. Il contient l'historique d'impression ou le planning mis à jour.

### Personnages

Thi-Thai :
Accueil. Elle donne une orientation légère et une touche d'humour.

Delphine :
Secrétariat. Elle a accès aux informations administratives, mais ne donne pas directement la solution.

Marine ou Mathias :
Étudiant concerné. Il a reçu la convocation et attend devant B204.

M. Rodolphe ou Heïdi :
Enseignant responsable de l'oral. Il ou elle attend dans la bonne salle, sans savoir que certains étudiants ont suivi l'ancienne affiche.

### Documents

Affiche — Oral blanc B204 :
Affiche visible dans le couloir. Elle indique B204 et une heure précise. C'est une ancienne version ou une mauvaise impression.

Mail de convocation initial :
Message envoyé plus tôt. Il indique B204, mais il est antérieur au changement.

Planning mis à jour :
Document officiel plus récent. Il indique la nouvelle salle, par exemple A12.

Note de changement de salle :
Note courte : "Vidéoprojecteur B204 hors service. Oral blanc déplacé en A12."

Historique d'impression :
Trace technique montrant qu'une ancienne affiche B204 a été imprimée après le changement.

Témoignage de l'étudiant :
L'étudiant explique qu'il a suivi l'affiche et le premier mail.

Document d'ambiance possible :
Petite affiche : "Merci de vérifier la date des affiches avant de paniquer."

### Objets

Badge visiteur :
Objet d'accès trouvé au secrétariat. Il permet d'ouvrir la salle où se trouve le planning mis à jour ou l'historique d'impression.

Plan du bâtiment :
Objet d'ambiance ou préparatoire. Il aide à donner une impression d'espace, mais ne résout pas l'énigme.

Affiche froissée :
Objet d'ambiance possible, à éviter si l'affiche est déjà un document consultable. Ne pas créer de doublon confus.

### Énigme 1

Titre :
Reconstituer les versions de la salle.

Type :
Chronologie.

Événements :

1. Le mail initial indique B204.
2. Une note signale le déplacement de l'oral en A12.
3. Une ancienne affiche B204 est imprimée ou affichée après le changement.

Objectif :
Comprendre que le problème vient d'une version ancienne qui circule après une mise à jour.

Indices possibles :

1. Repérez les dates et les heures sur les documents.
2. Une information plus récente peut remplacer une information plus ancienne.
3. Comparez le moment du changement de salle avec l'impression de l'affiche.

### Énigme 2

Titre :
Identifier la contradiction de salle.

Type :
Comparaison de pièces.

Bonne combinaison :

- Affiche — Oral blanc B204 ;
- Planning mis à jour ou note de changement de salle.

Interprétation correcte :
La salle B204 apparaît sur une ancienne information, mais le document le plus récent indique une autre salle.

Interprétations incorrectes :

- L'examen est annulé.
- L'enseignant a volontairement changé la salle sans prévenir.
- Les étudiants se sont trompés sans raison.

Feedback prudent :
Les pièces montrent surtout une confusion entre deux versions. Elles ne prouvent pas une volonté de tromper les étudiants.

### Résolution finale

Question :
Quelle explication correspond le mieux aux documents réunis ?

Hypothèse correcte :
Une ancienne version de l'affiche ou de la convocation a circulé après le changement de salle. L'oral blanc doit probablement avoir lieu dans la salle indiquée par le planning mis à jour.

Pièces principales attendues :

- Mail de convocation initial ;
- Note de changement de salle ;
- Planning mis à jour ;
- éventuellement historique d'impression.

Feedback final :
L'explication est cohérente : la salle B204 n'était pas une fausse information au départ, mais elle est devenue ancienne après le changement. Le problème vient d'une mauvaise diffusion de la mise à jour.

### Fin heureuse

Delphine prévient les étudiants et contacte l'enseignant. Le groupe rejoint la bonne salle avec quelques minutes de retard, accepté parce que la confusion est documentée. L'oral blanc peut commencer. Une nouvelle règle pratique est rappelée : toujours vérifier la date d'une affiche et la version la plus récente d'un planning.

### Objectifs FLE/FOU implicites

- Lire une convocation ;
- comprendre un planning ;
- repérer une salle, une heure et une date ;
- comparer deux versions d'un document ;
- identifier l'information la plus récente ;
- formuler une hypothèse prudente ;
- justifier une conclusion avec des pièces ;
- parler d'un changement de salle.

### Points de langue exploitables

Marqueurs temporels :

- d'abord ;
- ensuite ;
- après ;
- avant ;
- à partir de ;
- mis à jour ;
- ancienne version ;
- nouvelle version.

Lexique universitaire :

- oral blanc ;
- convocation ;
- salle ;
- planning ;
- changement ;
- affichage ;
- examen ;
- groupe ;
- vidéoprojecteur.

Modalisation :

- il semble que ;
- il est probable que ;
- cela suggère que ;
- ce document est plus récent ;
- cela ne prouve pas que ;
- l'explication la plus prudente est que.

### Fausses pistes contrôlées

L'affiche B204 :
Fausse piste juste, car elle a vraiment existé, mais elle n'est plus à jour.

Le mail initial :
Fausse piste juste, car il est officiel, mais antérieur au changement.

Le témoignage de l'étudiant :
Il ne ment pas. Il a suivi les informations visibles.

L'enseignant absent :
Il n'est pas suspect. Il attend simplement ailleurs.

### Éléments décoratifs ou humoristiques

- Une remarque de Thi-Thai : "À l'accueil, on trouve souvent les salles perdues avant les stylos."
- Une note sur le vidéoprojecteur : "B204 : vidéoprojecteur en grève technique."
- Une affiche d'ambiance sur les plannings : "Un planning sans date, c'est presque une devinette."

Ces éléments doivent rester légers et non décisifs.

### Risques de confusion

- Le joueur peut croire que l'examen est annulé.
- Le joueur peut chercher un coupable au lieu de comparer les versions.
- Le joueur peut confondre objet physique et pièce du dossier si l'affiche existe à la fois comme document et comme objet.
- Trop de numéros de salles peuvent surcharger la lecture.

### Corrections à prévoir

- Limiter les salles à deux noms : B204 et A12.
- Garder 5 ou 6 documents maximum.
- Ne pas créer plusieurs affiches trop proches.
- Ne pas rendre le badge indispensable si cela ralentit trop l'enquête.
- Faire de l'historique d'impression un soutien, pas la seule preuve.
- Écrire les documents avec des phrases courtes B1+/B2.

## Structure ludique recommandée

### Acte 1 — Incident visible

Des étudiants attendent devant B204. La salle est fermée. L'heure de l'oral approche.

Le joueur sait tout de suite quoi chercher :

> Où est la bonne salle ?

### Acte 2 — Contradiction documentaire

Le joueur découvre que plusieurs documents indiquent B204, mais qu'un document plus récent indique A12.

Le coeur de l'enquête est :

> Quelle version est la plus récente et la plus fiable ?

### Acte 3 — Explication réparatrice

Le joueur comprend qu'une ancienne affiche a circulé après un changement de salle. Delphine prévient les personnes concernées. L'examen peut commencer.

## Prompt futur pour Codex

Agis comme architecte TypeScript, scénariste d'enquête FLE/FOU et contrôleur de cohérence narrative du projet `enquete-fle`.

Objectif : créer la V0.12 avec une nouvelle enquête courte intitulée `La salle fantôme`, ID `la-salle-fantome`.

Contraintes :

- ne pas modifier `Le dossier disparu` ;
- ne pas modifier les mécaniques globales ;
- ne pas créer de backend ;
- ne pas créer d'assets définitifs ;
- ne pas ajouter de nouveau type si les types existants suffisent ;
- réutiliser les mécaniques : lieux, documents, personnages, inventaire minimal, énigme de chronologie, énigme de comparaison, indices progressifs, résolution finale prudente ;
- garder une durée de 20 à 30 minutes ;
- niveau B1+/B2.

Créer un fichier :

`src/data/scenarios/salleFantome.ts`

Exporter :

`salleFantomeScenario`

Ajouter le scénario au registre :

`src/data/scenarios/index.ts`

Scénario :

- incident : des étudiants attendent devant B204, mais la salle est fermée ;
- question centrale : quelle est la bonne salle pour l'oral blanc ?
- solution prudente : une ancienne affiche ou convocation a circulé après un changement de salle ;
- fin heureuse : Delphine prévient les étudiants, l'enseignant accepte le retard documenté, l'oral commence dans la bonne salle.

Documents à prévoir :

- Affiche — Oral blanc B204 ;
- Mail de convocation initial ;
- Planning mis à jour ;
- Note de changement de salle ;
- Historique d'impression ;
- Témoignage d'un étudiant ;
- éventuellement document d'ambiance léger.

Énigmes :

1. Chronologie des versions : mail initial, changement de salle, ancienne affiche imprimée ou affichée après le changement.
2. Comparaison : affiche B204 + planning mis à jour ou note de changement.

Résolution finale :

- hypothèse correcte : ancienne version diffusée après un changement de salle ;
- pièces principales : mail initial, note de changement, planning mis à jour, éventuellement historique d'impression ;
- conclusion non accusatrice.

Mettre à jour la documentation V0.12 et lancer `npm.cmd run build`.

## Conclusion

Les trois concepts proposés sont :

1. `La salle fantôme` ;
2. `Le cours annulé qui ne l'était pas` ;
3. `La convocation impossible`.

Le concept retenu est `La salle fantôme`, car il combine le mieux :

- un objectif immédiat ;
- une tension douce ;
- une vraie comparaison documentaire ;
- une pertinence FOU forte ;
- une structure d'escape game simple ;
- une résolution réparatrice ;
- une complexité technique faible.

La prochaine étape pour V0.12 sera de transformer cette fiche en scénario TypeScript, après validation du concept.
