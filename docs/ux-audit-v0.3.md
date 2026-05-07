# Audit UX de la V0.3

**Rôle :** Apprenant B1/B2
**Date de l'audit :** Version V0.3

## 1. Évaluation des 10 points clés

1. **Comprend-on clairement la mission ?**
   Oui, l'objectif principal ("Retrouver le dossier") est présent, mais le bloc de texte du briefing est trop dense pour une lecture rapide par un apprenant B1/B2.

2. **Comprend-on ce qu’il faut faire après le briefing ?**
   Non, il y a un saut abrupt vers un tableau de bord sans indication de "prochaine étape". Le joueur est livré à lui-même face à de nombreux boutons.

3. **Les lieux, personnages, documents et énigmes sont-ils clairement distingués ?**
   Ils sont bien séparés par des titres, mais visuellement tous les boutons sont identiques, ce qui crée une monotonie et une surcharge cognitive.

4. **Le joueur sait-il dans quel ordre agir ?**
   Non. Un joueur peut très bien cliquer sur une énigme alors qu'il n'a pas lu les documents requis, et se retrouver bloqué.

5. **Les documents utiles sont-ils repérables ?**
   La liste de documents est claire, mais il est impossible de les garder ouverts à côté d'une énigme. L'affichage en dessous remplace le document précédent.

6. **Les énigmes expliquent-elles assez clairement ce qu’on attend ?**
   Oui, les consignes des énigmes sont simples et adaptées.

7. **Les retours après réponse sont-ils compréhensibles ?**
   Oui, le feedback texte ("Validée") et la barre de progression sont clairs.

8. **Y a-t-il trop de texte au même endroit ?**
   Oui, surtout sur la page de Briefing.

9. **Y a-t-il des boutons ou zones ambiguës ?**
   Oui. Le clic sur un élément de la barre latérale ouvre le contenu "en bas", sans faire défiler la page. Le joueur peut penser que le bouton ne marche pas s'il ne scrolle pas.

10. **Le joueur sait-il ce qui est débloqué ou déjà consulté ?**
    Il voit ce qui est "Disponible" mais n'a pas d'indicateur visuel fort s'il a *déjà lu* un document.

## 2. Problèmes observés et recommandations

| Problème | Gravité | Proposition de correction | Statut |
| :--- | :--- | :--- | :--- |
| **Absence de scroll automatique ou d'indication lors d'un clic** (contenu masqué) | Majeure | Ajouter un "Scroll to content" ou une indication visuelle forte (flèche). | À corriger maintenant (via indication visuelle "Voir en bas" ou ancres). |
| **Briefing trop dense** | Moyenne | Structurer le briefing avec des points clés : Mission, Contexte, Objectif. | À corriger maintenant. |
| **Manque de guidage sur l'étape en cours** | Moyenne | Ajouter un encart "Que faire maintenant ?" au-dessus de la zone principale. | À corriger maintenant. |
| **Documents déjà lus non identifiés** | Faible | Ajouter une mention "Lu" ou griser légèrement le document dans la liste. | À corriger maintenant. |
| **Interface latérale monotone** | Faible | Ajouter de légères nuances de couleurs entre "Lieux", "Documents", etc. | À corriger maintenant. |
| **Impossibilité de comparer documents et énigmes** | Majeure | Prévoir une interface "split-screen" ou des modales pour les documents. | **Reporté à plus tard** (refonte d'interface). |

## 3. Plan d'action des corrections limitées appliquées

- **BriefingPage.tsx** : Découpage du texte, ajout du label explicite "Votre objectif".
- **InvestigationPage.tsx** :
  - Ajout d'un état `readDocumentIds` pour marquer les documents "Lu".
  - Ajout d'une zone "Que faire maintenant ?" avec des directives simples (ex: "Consultez un lieu disponible").
  - Léger ajustement de style pour différencier les colonnes/blocs si nécessaire, sans refonte majeure.

## 4. Ajout de micro-animations fonctionnelles (V0.3 finalisation)

Suite à une précision des contraintes graphiques, de petites micro-animations purement **fonctionnelles** ont été ajoutées pour aider le joueur :
- **Fonctionnalité d'orientation (Fade-in) :** Un effet de fondu (`animate-fade-in`) a été appliqué sur la zone de détail (en bas de l'écran) pour que le joueur remarque qu'un nouveau contenu vient d'y être chargé suite à un clic sur le menu latéral.
- **Mise en évidence de l'objectif (Highlight Pulse) :** L'encart "Que faire maintenant ?" émet un léger surlignement coloré (`animate-highlight`) lorsqu'il change d'état (ex: quand un nouveau document est débloqué), attirant le regard sans distraire l'enquête.
- **Indicateur de nouveauté :** Les nouveaux documents débloqués mais non encore lus sont marqués par "✨ Nouveau".
- **Transitions douces :** Les boutons du menu latéral ont une transition de couleur (`transition-colors duration-200`) au survol et à la sélection, renforçant la sensation d'interaction.

Ces animations sont strictement limitées, courtes, et justifiées par le besoin d'orienter le regard de l'apprenant B1/B2.
