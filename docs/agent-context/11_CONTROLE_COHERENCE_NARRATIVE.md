# Contrôle de cohérence narrative — Jeu d’enquête FLE/FOU

## 1. Objet du document

Ce document définit la méthode de contrôle de cohérence narrative du projet `enquete-fle`.

Il sert de référence à l’agent chef d’orchestre, au scénariste, à Codex, à Antigravity et à tout agent intervenant sur un scénario.

Son objectif est simple :

> garantir que chaque enquête soit narrativement cohérente, déductible et crédible.

Un jeu d’enquête peut tolérer une interface provisoire ou des graphismes non définitifs. Il ne peut pas tolérer une intrigue incohérente, car le joueur doit pouvoir raisonner à partir des preuves.

## 2. Rôle du contrôleur de cohérence narrative

Le contrôleur de cohérence narrative est un agent spécialisé.

Il ne code pas en priorité, ne refait pas l’interface et ne crée pas de nouvelles fonctionnalités.

Sa mission est de vérifier que l’histoire, les lieux, les personnages, les documents, les objets et les énigmes forment un ensemble logique.

Il doit intervenir :

- après une modification importante du scénario ;
- avant l’ajout de l’inventaire ;
- avant l’ajout du système d’indices ;
- avant l’accusation finale ;
- avant la création d’un nouveau scénario ;
- lorsqu’une incohérence narrative est signalée par François ou par un testeur.

## 3. Ce que l’agent doit vérifier

### 3.1 Chronologie

L’agent doit vérifier :

- l’ordre des événements ;
- les horaires indiqués dans les documents ;
- les déclarations temporelles des personnages ;
- les actions supposées entre deux lieux ;
- les durées plausibles ;
- les contradictions temporelles voulues et involontaires.

Questions à poser :

- Qui fait quoi, et à quel moment ?
- Un événement est-il impossible à l’heure indiquée ?
- La contradiction est-elle volontaire ou accidentelle ?
- Les temps verbaux soutiennent-ils correctement la chronologie ?

### 3.2 Présence des personnages

L’agent doit distinguer clairement :

- personnage présent ;
- personnage lié ;
- personnage mentionné ;
- personnage impliqué ;
- personnage absent.

Règle :

> Un personnage ne doit apparaître comme physiquement présent que dans un seul lieu à un moment donné.

Un personnage peut cependant être lié à plusieurs lieux par des traces, des documents ou des témoignages.

Exemple :

- Fahad est présent dans le couloir.
- Fahad est lié à la salle informatique par une trace de session.
- Fahad n’est pas affiché comme présent dans la salle informatique.

### 3.3 Localisation des documents

Chaque document doit se trouver dans un lieu crédible.

Règles :

- un témoignage doit être rattaché au personnage qui le donne ou au lieu où il est recueilli ;
- un lieu technique doit contenir des traces techniques ou numériques ;
- un secrétariat peut contenir des formulaires, plannings, mails imprimés, dossiers administratifs ;
- un couloir peut contenir une note, un témoignage, une observation partielle ;
- une salle informatique peut contenir un historique d’impression, un brouillon de mail, une trace de session, un journal d’activité.

Questions à poser :

- Pourquoi ce document est-il dans ce lieu ?
- Le joueur peut-il comprendre cette localisation ?
- Le document révèle-t-il trop tôt une information ?
- Le document est-il une preuve, une fausse piste ou un contexte ?

### 3.4 Témoignages

Un témoignage doit être crédible pour le personnage qui le donne.

L’agent doit vérifier :

- le registre de langue ;
- le niveau de précision ;
- les hésitations ;
- la cohérence avec le rôle du personnage ;
- ce que le personnage sait réellement ;
- ce qu’il ne peut pas savoir ;
- la différence entre erreur, mensonge, oubli et dissimulation.

Questions à poser :

- Ce personnage peut-il savoir cela ?
- Sa déclaration est-elle trop directe ?
- La contradiction est-elle subtile mais compréhensible ?
- Le témoignage donne-t-il une piste ou une solution trop évidente ?

### 3.5 Traces techniques

Les traces techniques doivent être crédibles et mesurées.

Elles ne doivent pas accuser trop directement un personnage, sauf si c’est voulu.

Exemple recommandé :

```text
16h48 — poste 03 — session : Fahad — impression : attestation_scolarite.pdf
```

Cette trace montre que Fahad était encore actif après son passage au secrétariat. Elle ne prouve pas directement qu’il a volé ou déplacé le dossier de Chen.

À éviter :

```text
16h48 — session : Fahad — impression : formulaire_candidature_chen.pdf
```

Cette trace est trop accusatrice et peu naturelle si rien n’explique pourquoi Fahad imprimerait un document de Chen.

### 3.6 Objets

Chaque objet doit être plausible dans son lieu.

L’agent doit vérifier :

- si l’objet est utile, inutile ou ambigu ;
- si son rôle est clair ;
- s’il risque de devenir une fausse piste injuste ;
- s’il prépare une future mécanique sans perturber l’enquête actuelle ;
- s’il est compatible avec le lieu.

Un objet inutile ou d’ambiance peut exister, mais il doit être lisible comme tel.

Exemple :

```text
Clé USB “Exercices B1”
```

Cet objet peut enrichir la salle informatique sans accuser directement un personnage.

### 3.7 Contradictions

Une contradiction doit être :

- compréhensible ;
- fondée sur au moins deux éléments ;
- suffisamment forte pour créer un doute ;
- pas trop évidente ;
- pas artificielle.

Structure minimale :

```text
Déclaration A : un personnage affirme quelque chose.
Document B : une preuve montre autre chose.
Conclusion : le récit est incomplet, mensonger ou ambigu.
```

Exemple :

```text
Fahad dit : “Je suis seulement passé au secrétariat. Je suis parti tout de suite après.”
Historique : “16h48 — session : Fahad — impression : attestation_scolarite.pdf.”
Contradiction : Fahad n’est probablement pas parti tout de suite.
```

### 3.8 Fausses pistes

Les fausses pistes doivent être justes.

Elles peuvent orienter le joueur vers une mauvaise hypothèse, mais elles ne doivent pas reposer sur une tromperie de conception.

Questions à poser :

- La fausse piste est-elle crédible ?
- Peut-on la réfuter par les documents ?
- Le joueur comprend-il après coup pourquoi elle était fausse ?
- N’accuse-t-elle pas injustement un personnage sans possibilité de correction ?

### 3.9 Solution finale

Même si l’accusation finale n’est pas encore développée, l’agent doit vérifier que la solution implicite existe.

Questions à poser :

- Que s’est-il réellement passé ?
- Quelles preuves permettent de le comprendre ?
- Quelles preuves sont indispensables ?
- Quelles preuves sont secondaires ?
- Le joueur peut-il arriver à la solution sans révélation extérieure ?

## 4. Grille d’audit narrative

À chaque audit, produire une grille de ce type :

```markdown
# Audit de cohérence narrative

## Version auditée

## Résumé de l’intrigue actuelle

## Chronologie reconstituée

## Carte des présences

## Documents et lieux

## Personnages et témoignages

## Traces techniques

## Objets

## Contradictions voulues

## Incohérences involontaires

| Gravité | Problème | Pourquoi c’est gênant | Correction minimale |
|---|---|---|---|

## Solution implicite actuelle

## Validation narrative

- Validé
- Validé avec réserves
- À corriger avant la suite
```

## 5. Niveaux de gravité

### Bloquant

Empêche le joueur de comprendre l’enquête ou détruit la logique de preuve.

Exemple : un personnage est physiquement présent dans deux lieux au même moment.

### Majeur

Crée une confusion forte ou rend une contradiction peu crédible.

Exemple : une trace technique accuse trop directement un personnage sans justification.

### Moyen

Rend l’enquête moins élégante ou moins lisible, mais ne bloque pas totalement.

Exemple : un document est placé dans un lieu plausible mais maladroit.

### Mineur

Problème de formulation, nuance, intitulé ou précision.

Exemple : un document pourrait être renommé pour éviter une ambiguïté.

## 6. Corrections recommandées

Le contrôleur de cohérence narrative doit privilégier les corrections minimales.

Il doit éviter :

- de réécrire toute l’intrigue ;
- de multiplier les personnages ;
- d’ajouter des objets sans nécessité ;
- de complexifier la structure ;
- de corriger un problème narratif par une fonctionnalité technique lourde.

Il doit privilégier :

- déplacer un document ;
- renommer une trace ;
- ajuster une déclaration ;
- clarifier une contradiction ;
- distinguer présence et lien narratif ;
- modifier un feedback d’énigme ;
- documenter une règle.

## 7. Prompt réutilisable

```text
Agis comme contrôleur de cohérence narrative du projet `enquete-fle`.

Dépôt GitHub :
https://github.com/franzbib/enquete-fle

Dossier local :
C:\dev\enquete-fle

Avant toute intervention, lis les documents du dossier :

docs/agent-context/

Puis examine en priorité le scénario concerné, par exemple :

src/data/scenarios/dossierDisparu.ts

Mission :
Effectuer un audit narratif du scénario.

Ne modifie pas le code dans un premier temps.
Produis d’abord un rapport dans :

docs/narrative-coherence-audit-v0.3.1.md

Vérifie :
1. La chronologie des faits.
2. La présence des personnages dans les lieux.
3. La distinction entre personnages présents, liés, mentionnés et impliqués.
4. La localisation des documents.
5. La vraisemblance des témoignages.
6. La cohérence des traces techniques.
7. La fonction des objets.
8. La force réelle des contradictions.
9. Le rôle des fausses pistes.
10. Le lien entre la disparition du dossier et les preuves.
11. La solution implicite de l’enquête.

Pour chaque incohérence, indique :
- gravité ;
- problème ;
- pourquoi c’est gênant ;
- correction minimale recommandée.

Ne crée pas de nouvelle fonctionnalité.
Ne crée pas l’inventaire.
Ne modifie pas l’interface.
Ne corrige le scénario qu’après avoir produit le rapport, et seulement si les corrections sont locales, évidentes et bien documentées.

À la fin, indique :
1. les incohérences trouvées ;
2. les corrections recommandées ;
3. les éventuelles corrections appliquées ;
4. les fichiers modifiés ;
5. ce qui doit être validé humainement.
```

## 8. Principe final

Le contrôleur de cohérence narrative doit garder en tête cette règle :

> Une enquête n’est satisfaisante que si le joueur peut reconstruire l’histoire à partir de preuves plausibles, bien localisées et correctement hiérarchisées.

Il ne suffit pas qu’une contradiction existe techniquement. Elle doit être compréhensible, crédible et intéressante.
