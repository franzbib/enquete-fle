# Mini-audit narratif Delphine V0.4.1

## Objet

Ce mini-audit vérifie l'intégration de Delphine dans le scénario `Le dossier disparu` avant le passage à la V0.5.

Le contrôle porte uniquement sur la cohérence narrative, la clarté du rôle de Delphine, la stabilité des énigmes existantes et le respect de la règle de non-systématicité des personnages récurrents.

## Résumé

Delphine est utilisée de manière pertinente dans le scénario.

Son remplacement du personnage générique du secrétariat apporte une présence plus forte au lieu central de l'enquête, sans modifier la structure de l'intrigue. Les informations utilisées restent limitées : secrétariat, organisation administrative, emplois du temps, examens et documents. Le scénario n'exploite pas toute la réserve de personnage, ce qui respecte la règle de non-systématicité.

Validation : V0.4.1 validée avec réserve mineure.

## Points vérifiés

| Point | Validation | Commentaire |
|---|---|---|
| Pertinence de Delphine | Oui | Son rôle au secrétariat sert directement l'affaire du dossier disparu. |
| Absence de surcharge | Oui | Les détails retenus restent administratifs et utiles au contexte. |
| Clarté du rôle | Oui | Le rôle `Secrétariat / organisation administrative` est lisible. |
| Emplois du temps, examens, documents | Oui | Ces responsabilités donnent du relief sans devenir une sous-intrigue. |
| Parole directe | Oui, avec réserve mineure | La parole est naturelle, mais assez dense pour un niveau B1/B2. Elle reste acceptable. |
| Mentions indirectes | Oui | Les documents mentionnent Delphine comme personne du secrétariat, sans la rendre suspecte principale. |
| Badge visiteur | Oui | Le badge reste un objet oublié sur le comptoir. Rien n'indique que Delphine l'a laissé volontairement. |
| Niveau d'information donné | Oui | Delphine contextualise le secrétariat, mais ne résout pas l'enquête. |
| Énigme 2 | Oui | Elle reste centrée sur `temoignage-fahad` et `historique-impression`. |
| Ancien nom | Oui | Aucune occurrence héritée de l'ancien personnage générique ou de ses anciens identifiants ne subsiste dans `src` ou `docs`, hors mention méthodologique de ce rapport. |
| Principe de réserve | Oui | Delphine est mobilisée parce qu'elle est pertinente ; les autres personnages récurrents ne sont pas forcés. |

## Analyse narrative

### Delphine dans le secrétariat

Delphine fonctionne mieux qu'un personnage générique pour incarner le secrétariat. Son rôle administratif justifie naturellement :

- la présence du planning ;
- les attestations demandées par Fahad ;
- les inscriptions aux examens ;
- la circulation de plusieurs dossiers sur le comptoir ;
- la vigilance autour du dossier de Chen.

Elle enrichit le lieu sans déplacer le centre de l'enquête. Le mystère reste attaché à la chronologie de Fahad et aux traces disponibles.

### Parole directe

La parole directe de Delphine est crédible :

```text
J'ai eu beaucoup de demandes cet après-midi. Entre les attestations, les inscriptions aux examens et les emplois du temps, plusieurs dossiers sont passés sur le comptoir. Je me souviens de Chen, parce que son dossier devait rester complet.
```

Elle donne une voix au personnage et explique le contexte administratif. La réserve mineure est sa densité : elle contient plusieurs informations en peu de phrases. Cela reste acceptable pour V0.4.1, mais un futur polissage B1/B2 pourrait la couper en phrases plus simples.

### Documents et mentions indirectes

Les mentions de Delphine dans le planning, le témoignage de Chen, le témoignage de Fahad, le brouillon de mail et l'élément de preuve à 16h35 sont cohérentes.

Elles ne créent pas de contradiction involontaire. Elles ne donnent pas non plus à Delphine une fonction d'explication excessive.

### Badge visiteur

Le badge reste crédible parce qu'il est décrit comme oublié sur le comptoir du secrétariat. Il conserve une fonction d'accès à la salle informatique, sans être présenté comme une aide volontaire de Delphine.

Point à surveiller plus tard : si Delphine devient un personnage très attentif aux détails dans plusieurs scénarios, il faudra éviter que l'oubli du badge paraisse incompatible avec son profil. Pour V0.4.1, l'après-midi chargé suffit à rendre l'oubli plausible.

### Énigme 2

L'énigme 2 reste stable.

Bonne combinaison :

- `temoignage-fahad` ;
- `historique-impression`.

Bonne interprétation :

- Fahad était probablement encore dans le bâtiment après son passage au secrétariat.

Delphine n'interfère pas avec la contradiction centrale. L'option incorrecte `Delphine a oublié d'imprimer une attestation` reste un distracteur léger, sans transformer Delphine en suspecte.

## Problèmes observés

| Gravité | Problème | Pourquoi c'est gênant | Recommandation |
|---|---|---|---|
| Mineur | La parole directe de Delphine concentre plusieurs informations administratives. | Pour certains apprenants B1, la phrase centrale peut être un peu chargée. | À polir plus tard si les tests utilisateurs signalent une difficulté. Pas nécessaire avant V0.5. |
| Mineur | Le badge oublié peut sembler légèrement moins compatible avec une Delphine attentive aux détails. | Si ce trait devient trop marqué dans de futurs scénarios, l'oubli pourrait paraître artificiel. | Conserver en V0.4.1. Plus tard, préciser éventuellement que le comptoir était encombré. |

## Corrections

Aucune correction locale n'a été appliquée après ce rapport.

Les réserves observées ne bloquent pas le passage à la V0.5 et peuvent attendre un futur polissage narratif ou un test utilisateur.

## Validation

Conclusion : V0.4.1 validée avec réserves mineures.

Le projet peut passer à la V0.5.
