# Notes sauvegarde / chargement de progression — V0.10.1

## Contexte

La progression du joueur est actuellement stockee dans l'etat local React de `InvestigationPage`.

Cette solution reste volontairement simple et convient pour une enquete courte comme `Le dossier disparu`. Elle evite un backend, une base de donnees, des comptes utilisateurs ou un suivi enseignant premature.

## Limite actuelle

L'etat local n'est pas persistant. Si le joueur quitte la mission, recharge la page ou change de scenario dans une future version, sa progression peut etre perdue.

La micro-correction post-V0.10 permet deja de relire le briefing dans l'enquete avec `Relire la mission`, sans demonter `InvestigationPage`. Elle ne resout pas encore le besoin plus large de sauvegarde / chargement.

Pour des enquetes plus longues, cette limite deviendra insuffisante.

## Premiere solution raisonnable

Une future V0.10.2 ou V0.11 pourrait ajouter une sauvegarde locale minimale par scenario avec `localStorage`.

Cle proposee :

```text
enquete-fle:progress:<scenarioId>
```

Cette cle permettrait de separer proprement la progression de chaque enquete.

## Elements a sauvegarder

Une premiere sauvegarde locale devrait couvrir :

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
- eventuellement etat des panneaux masquables.

## Contraintes maintenues

Cette evolution future ne doit pas creer tout de suite :

- backend ;
- comptes utilisateurs ;
- base de donnees ;
- suivi enseignant ;
- synchronisation distante ;
- score complet ;
- systeme complexe de sauvegarde.

## Recommandation

Avant d'implementer cette sauvegarde, il faudra extraire ou serialiser clairement l'etat de progression aujourd'hui disperse dans `InvestigationPage`.

La priorite est de rester local, lisible et reversible : une sauvegarde `localStorage` par scenario suffit pour une premiere etape.
