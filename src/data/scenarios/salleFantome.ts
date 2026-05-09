import type { Scenario } from '../../types/scenario';

export const salleFantomeScenario: Scenario = {
  id: 'salle-fantome',
  title: 'La salle fantôme',
  subtitle: 'Mystère administratif autour d un oral de TCF',
  level: 'B1 / B2',
  duration: 'Prototype 25 a 45 minutes',
  briefing: {
    summary:
      "Vous avez recu une convocation dans le cadre de vos etudes a l ISPA.",
    context:
      "L enquete commence a l ISPA, a Amiens. Vous devez vous rendre a une convocation, mais il semble que vous n ayez pas encore tous les elements necessaires.",
    mission:
      "Quelque chose ne va pas... mais quoi ? Observez les documents disponibles, verifiez les informations et essayez de comprendre la situation.",
  },
  locations: [
    {
      id: 'hall',
      name: 'Hall',
      kind: 'main',
      vignetteUrl: '/assets/locations/accueil-temp.png',
      description:
        "Dans le hall, votre convocation en main, vous apercevez le panneau d affichage et le plan des salles pres de l entree.",
      role: 'Le plan peut etre consulte pour verifier le nom des salles.',
      available: true,
      documentIds: ['convocation-tcf', 'plan-actuel-salles'],
      presentCharacterIds: [],
      objectIds: [],
    },
    {
      id: 'panneau-affichage',
      name: 'Panneau d affichage',
      kind: 'main',
      vignetteUrl: '/assets/locations/accueil-temp.png',
      description:
        "Le panneau d affichage rassemble les informations du jour : examens, salles, horaires et messages urgents.",
      role: 'Un espace reste libre au milieu des annonces recentes.',
      available: true,
      documentIds: ['plan-actuel-salles', 'temoignage-ning-yi', 'message-rectification'],
      presentCharacterIds: ['ning-yi'],
      objectIds: [],
    },
    {
      id: 'secretariat',
      name: 'Secretariat',
      kind: 'main',
      vignetteUrl: '/assets/locations/secretariat-temp.png',
      description:
        "Delphine gere plusieurs demandes a la fois. Thi Thai n est pas encore revenue.",
      role: 'Des dossiers sont empiles pres du comptoir. Le telephone sonne regulierement.',
      available: true,
      documentIds: ['temoignage-delphine'],
      presentCharacterIds: ['delphine'],
      objectIds: [],
    },
    {
      id: 'bureau-heidi',
      name: 'Bureau de Heidi',
      kind: 'main',
      vignetteUrl: '/assets/locations/secretariat-temp.png',
      description:
        "Heidi accueille les etudiants dans un bureau calme, a l ecart du bruit du hall.",
      role: 'Sur son bureau, quelques archives et notes de suivi sont rangees par date.',
      available: true,
      documentIds: ['archive-entrainements-tcf'],
      presentCharacterIds: ['heidi'],
      objectIds: [],
    },
    {
      id: 'couloir-marine',
      name: 'Couloir',
      kind: 'transition',
      vignetteUrl: '/assets/locations/couloir-temp.png',
      description:
        "Le couloir relie le secretariat, les bureaux et les salles de cours. Marine y passe avec des documents sous le bras.",
      role: 'Les panneaux de portes portent les noms actuels des salles.',
      available: false,
      documentIds: ['note-changement-noms'],
      presentCharacterIds: ['marine'],
      objectIds: [],
    },
    {
      id: 'salle-beffroi',
      name: 'Salle Beffroi',
      kind: 'locked',
      vignetteUrl: '/assets/locations/salle-informatique-temp.png',
      description:
        "La salle Beffroi est preparee pour les passages individuels. Les candidats attendent dans le couloir voisin.",
      role: 'La porte affiche clairement le nom Beffroi.',
      available: false,
      documentIds: [],
      presentCharacterIds: [],
      objectIds: [],
    },
    {
      id: 'secretariat-thi-thai',
      name: 'Retour au secretariat',
      kind: 'locked',
      vignetteUrl: '/assets/locations/secretariat-temp.png',
      description:
        "Thi Thai revient au secretariat avec un dossier d examen. Elle prend le temps de regarder votre convocation.",
      role: 'Delphine lui laisse quelques minutes entre deux demandes.',
      available: false,
      documentIds: ['temoignage-thi-thai'],
      presentCharacterIds: ['thi-thai'],
      relatedCharacterIds: ['delphine'],
      objectIds: [],
    },
  ],
  characters: [
    {
      id: 'delphine',
      name: 'Delphine',
      role: 'Secretariat / organisation administrative',
      portraitUrl: '/assets/portraits/delphine.png',
      profile:
        "Delphine est polie et debordee. Elle confirme les oraux, mais elle ne peut pas resoudre le probleme de salle.",
      directSpeech:
        "Oui, les oraux de TCF ont bien lieu aujourd hui. Si votre convocation indique une salle, il faut suivre votre convocation. Je suis desolee, Thi Thai n est pas la pour le moment et je suis un peu debordee.",
      testimony:
        "Delphine confirme que les oraux de TCF ont lieu aujourd hui. Elle renvoie le candidat a sa convocation et precise que Thi Thai est absente pour le moment.",
      reliability: 'stable',
      relatedLocationIds: ['secretariat'],
    },
    {
      id: 'ning-yi',
      name: 'Ning Yi',
      role: 'Autre candidat au TCF',
      profile:
        "Ning Yi a recu la meme convocation. Il transforme l erreur administrative en theorie presque poetique.",
      directSpeech:
        "Toi aussi, tu cherches la salle Jaures ? Je verifie le panneau depuis tout a l heure, et moi non plus je ne la trouve pas. Une salle indiquee sur une convocation officielle, mais absente des informations affichees... Ce n est pas normal. Ou alors c est une salle qu on ne trouve que si on est pret pour le TCF. Imagine : l oral commence deja maintenant. Le vrai test, c est de trouver la salle. En France, l administration est parfois plus difficile que la grammaire.",
      testimony:
        "Ning Yi confirme qu un autre candidat a recu une convocation indiquant la salle Jaures. Il rend la situation plus etrange en imaginant que l oral commence deja devant le panneau.",
      reliability: 'partial',
      relatedLocationIds: ['panneau-affichage'],
    },
    {
      id: 'heidi',
      name: 'Heidi',
      role: 'Accompagnement methodologique',
      portraitUrl: '/assets/portraits/heidi.png',
      profile:
        "Heidi est calme, structurante et bienveillante. Elle aide a transformer l inquietude en probleme clair.",
      directSpeech:
        "Ce n est pas une catastrophe. C est une contradiction entre deux sources : votre convocation et le plan actuel. Une bonne enquete commence par une bonne formulation du probleme.",
      testimony:
        "Heidi aide le candidat a formuler la contradiction : la convocation indique la salle Jaures, mais cette salle n apparait pas sur le plan actuel de l ISPA.",
      reliability: 'stable',
      relatedLocationIds: ['bureau-heidi'],
    },
    {
      id: 'marine',
      name: 'Marine',
      role: 'Personne ressource dans le couloir',
      portraitUrl: '/assets/portraits/marine.png',
      profile:
        "Marine connait la note interne sur le changement de denomination des salles. Elle donne la cle, puis relance l enquete.",
      directSpeech:
        "Jaures, ca me dit quelque chose. Regardez cette note : Jaures correspond a Beffroi. Maintenant, vous savez ou aller. Mais cela n explique pas pourquoi une convocation recente utilise encore l ancien nom.",
      testimony:
        "Marine montre une note interne indiquant que la salle Jaures correspond aujourd hui a la salle Beffroi. Elle signale qu il reste a comprendre pourquoi une convocation recente utilise l ancien nom.",
      reliability: 'stable',
      relatedLocationIds: ['couloir-marine'],
    },
    {
      id: 'thi-thai',
      name: 'Thi Thai',
      role: 'Accueil / inscriptions aux examens',
      portraitUrl: '/assets/portraits/thitai.png',
      profile:
        "Thi Thai revient au troisieme acte. Elle reconnait une erreur realiste sans etre ridiculisee.",
      directSpeech:
        "J ai utilise un ancien modele sans faire attention. J ai copie-colle trop vite depuis un vieux fichier. Est-ce que vous pouvez afficher une rectification sur le panneau ? Les candidats doivent le voir avant leur passage.",
      testimony:
        "Thi Thai reconnait qu elle a utilise par erreur un ancien modele de convocation contenant les anciens noms de salles. Elle demande au candidat d afficher une rectification sur le panneau.",
      reliability: 'stable',
      relatedLocationIds: ['secretariat-thi-thai'],
    },
  ],
  documents: [
    {
      id: 'convocation-tcf',
      title: 'Convocation individuelle - Oral de TCF',
      documentType: 'email',
      source: 'Service des examens',
      summary:
        'Une convocation officielle pour un oral proche. Le lieu indique attire immediatement votre attention.',
      content:
        "ISPA - Service des examens\nCONVOCATION INDIVIDUELLE\nOral de TCF\n\nCandidat : candidat\nDate : aujourd hui\nHeure de passage : 15 h 30\nPresence demandee : 10 minutes avant l epreuve\nLieu : salle Jaures\n\nMerci de vous presenter avec une piece d identite. Tout retard peut entrainer l annulation du passage.",
      initiallyAvailable: true,
      relatedLocationIds: ['hall'],
      relatedCharacterIds: [],
      evidenceIds: ['ev-convocation-jaures', 'ev-oral-1530'],
    },
    {
      id: 'plan-actuel-salles',
      title: 'Plan des salles affiche dans le hall',
      documentType: 'note',
      source: 'Hall - panneau des salles',
      summary:
        'Le plan pres de l entree indique les noms actuels des salles.',
      content:
        "PLAN ACTUEL DES SALLES\n\nHall : accueil, panneau d affichage, plan des salles\nSecretariat : accueil administratif\nCouloir principal : acces aux salles\n\nSalles indiquees :\n- Salle Beffroi\n- Salle Cathedrale\n- Salle Gambetta\n- Salle Hortillonnages\n- Salle Jules Verne\n- Salle informatique\n\nAucune salle Jaures, Rimbaud ou Choderlos de Laclos n apparait sur ce plan.",
      initiallyAvailable: true,
      relatedLocationIds: ['hall', 'panneau-affichage'],
      relatedCharacterIds: [],
      evidenceIds: ['ev-plan-sans-jaures'],
    },
    {
      id: 'temoignage-delphine',
      title: 'Echange avec Delphine',
      documentType: 'testimony',
      source: 'Secretariat',
      summary: 'Delphine confirme les oraux sans donner la solution.',
      content:
        "Delphine confirme que les oraux de TCF ont bien lieu aujourd hui. Elle est debordee, Thi Thai est absente, et elle conseille de suivre la convocation officielle.",
      initiallyAvailable: true,
      relatedLocationIds: ['secretariat'],
      relatedCharacterIds: ['delphine'],
      evidenceIds: ['ev-oraux-confirmes'],
    },
    {
      id: 'temoignage-ning-yi',
      title: 'Echange avec Ning Yi',
      documentType: 'testimony',
      source: 'Panneau d affichage',
      summary:
        'Ning Yi confirme qu un autre candidat a recu la meme convocation et rend la situation plus etrange.',
      content:
        "Ning Yi a recu lui aussi une convocation indiquant la salle Jaures. Pres du panneau, il verifie les informations affichees et imagine que la salle apparait seulement aux candidats prets pour le TCF.",
      initiallyAvailable: false,
      unlocksAfterPuzzleId: 'verifier-plan-actuel',
      relatedLocationIds: ['panneau-affichage'],
      relatedCharacterIds: ['ning-yi'],
      evidenceIds: ['ev-ning-yi-meme-convocation'],
    },
    {
      id: 'archive-entrainements-tcf',
      title: 'Archive - Organisation des entrainements TCF',
      documentType: 'planning',
      source: 'Heidi',
      summary:
        'Ancien document qui prouve que Jaures etait bien un nom utilise dans une organisation precedente.',
      content:
        "Les candidats doivent se presenter dix minutes avant leur passage.\n\nExpression orale : salle Jaures\nPreparation des candidats : salle Rimbaud\nComprehension ecrite : salle Choderlos de Laclos\n\nLes listes d emargement seront deposees devant chaque salle.",
      initiallyAvailable: false,
      unlocksAfterPuzzleId: 'formuler-probleme-heidi',
      relatedLocationIds: ['bureau-heidi'],
      relatedCharacterIds: ['heidi'],
      evidenceIds: ['ev-jaures-ancien-nom'],
    },
    {
      id: 'note-changement-noms',
      title: 'Note interne - Mise a jour des noms de salles',
      documentType: 'note',
      source: 'Marine',
      summary:
        'Une note de service associe les anciens noms aux noms actuellement affiches.',
      content:
        "NOTE INTERNE - Service accueil et examens\nObjet : noms affiches sur les portes de salles\n\nA partir du 1er septembre, les anciennes denominations ne doivent plus etre utilisees dans les documents transmis aux candidats.\n\nCorrespondances a verifier avant envoi :\n- Salle Jaures -> Salle Beffroi\n- Salle Rimbaud -> Salle Cathedrale\n- Salle Choderlos de Laclos -> Salle Gambetta",
      initiallyAvailable: true,
      relatedLocationIds: ['couloir-marine'],
      relatedCharacterIds: ['marine'],
      evidenceIds: ['ev-jaures-beffroi', 'ev-correspondances-salles'],
    },
    {
      id: 'temoignage-thi-thai',
      title: 'Explication de Thi Thai',
      documentType: 'testimony',
      source: 'Secretariat',
      summary: 'Thi Thai explique l origine de l erreur.',
      content:
        "Thi Thai reconnait qu elle a utilise un ancien modele de convocation sans faire attention. Elle a copie-colle trop vite depuis un vieux fichier contenant encore les anciens noms de salles. Elle confirme que les candidats convoques en salle Jaures doivent aller en salle Beffroi.",
      initiallyAvailable: true,
      relatedLocationIds: ['secretariat-thi-thai'],
      relatedCharacterIds: ['thi-thai'],
      evidenceIds: ['ev-ancien-modele', 'ev-confirmation-beffroi'],
    },
    {
      id: 'message-rectification',
      title: 'Message final de rectification',
      documentType: 'note',
      source: 'Panneau d affichage',
      summary: 'Message a afficher pour eviter que les autres candidats se trompent.',
      content:
        "INFORMATION IMPORTANTE - ORAUX DE TCF\n\nLes convocations qui indiquent la salle Jaures contiennent une ancienne denomination.\n\nLes candidats convoques en salle Jaures doivent se presenter en salle Beffroi.\n\nLes horaires de passage ne changent pas.",
      initiallyAvailable: false,
      unlocksAfterPuzzleId: 'comprendre-erreur-thi-thai',
      relatedLocationIds: ['panneau-affichage'],
      relatedCharacterIds: ['thi-thai'],
      evidenceIds: ['ev-message-correct'],
    },
  ],
  evidence: [
    {
      id: 'ev-convocation-jaures',
      label: 'La convocation indique salle Jaures',
      text: 'Le lieu indique pour l oral de TCF est la salle Jaures.',
      documentId: 'convocation-tcf',
    },
    {
      id: 'ev-oral-1530',
      label: 'Oral prevu a 15 h 30',
      text: 'Le candidat doit etre present dix minutes avant l oral de 15 h 30.',
      documentId: 'convocation-tcf',
    },
    {
      id: 'ev-plan-sans-jaures',
      label: 'Le plan actuel ne mentionne pas Jaures',
      text: 'Le plan actuel affiche Beffroi, Cathedrale et Gambetta, mais pas Jaures.',
      documentId: 'plan-actuel-salles',
    },
    {
      id: 'ev-oraux-confirmes',
      label: 'Les oraux ont bien lieu',
      text: 'Delphine confirme que les oraux de TCF ont bien lieu aujourd hui.',
      documentId: 'temoignage-delphine',
    },
    {
      id: 'ev-ning-yi-meme-convocation',
      label: 'Ning Yi a la meme convocation',
      text: 'Ning Yi confirme qu un autre candidat a recu une convocation indiquant la salle Jaures.',
      documentId: 'temoignage-ning-yi',
    },
    {
      id: 'ev-jaures-ancien-nom',
      label: 'Jaures existe dans une archive',
      text: 'Une archive mentionne la salle Jaures pour l expression orale.',
      documentId: 'archive-entrainements-tcf',
    },
    {
      id: 'ev-jaures-beffroi',
      label: 'Jaures correspond a Beffroi',
      text: 'La note interne indique : Salle Jaures -> Salle Beffroi.',
      documentId: 'note-changement-noms',
    },
    {
      id: 'ev-correspondances-salles',
      label: 'Trois anciens noms ont ete remplaces',
      text: 'Jaures, Rimbaud et Choderlos de Laclos ont ete remplaces par Beffroi, Cathedrale et Gambetta.',
      documentId: 'note-changement-noms',
    },
    {
      id: 'ev-ancien-modele',
      label: 'Ancien modele de convocation',
      text: 'Thi Thai explique qu elle a utilise un ancien modele sans faire attention.',
      documentId: 'temoignage-thi-thai',
    },
    {
      id: 'ev-confirmation-beffroi',
      label: 'Les candidats doivent aller en Beffroi',
      text: 'Thi Thai confirme que les candidats convoques en salle Jaures doivent se presenter en salle Beffroi.',
      documentId: 'temoignage-thi-thai',
    },
    {
      id: 'ev-message-correct',
      label: 'Rectification claire',
      text: 'Le message final indique que Jaures est une ancienne denomination et renvoie les candidats vers Beffroi.',
      documentId: 'message-rectification',
    },
  ],
  inventoryObjects: [],
  puzzles: [
    {
      id: 'lire-convocation-tcf',
      title: 'Lire la convocation',
      puzzleType: 'contradiction',
      context: {
        type: 'document',
        id: 'convocation-tcf',
      },
      description:
        'Reperez l information qui rend la convocation problematique.',
      prompt: 'Quel element de la convocation devez-vous verifier sur le plan ?',
      requiredDocumentIds: ['convocation-tcf'],
      hints: [
        'Cherchez le lieu de l epreuve.',
        'L heure cree de la tension, mais le probleme vient surtout du nom de salle.',
      ],
      answer: {
        kind: 'single-choice',
        correctOptionId: 'lieu-jaures',
        options: [
          {
            id: 'epreuve-oral',
            label: 'L epreuve est un oral de TCF.',
          },
          {
            id: 'lieu-jaures',
            label: 'Le lieu indique est la salle Jaures.',
          },
          {
            id: 'piece-identite',
            label: 'Il faut apporter une piece d identite.',
          },
        ],
      },
      successFeedback:
        'Vous avez repere la salle Jaures. Il faut maintenant verifier si elle existe sur le plan actuel.',
      failureFeedback:
        'Cette information est utile, mais elle n explique pas encore pourquoi la convocation pose probleme. Relisez la ligne du lieu.',
      unlocksDocumentIds: ['plan-actuel-salles'],
    },
    {
      id: 'verifier-plan-actuel',
      title: 'Chercher la salle sur le plan',
      puzzleType: 'contradiction',
      context: {
        type: 'document',
        id: 'plan-actuel-salles',
      },
      description:
        'Sous le plan du hall, vous comparez le nom indique sur la convocation avec les salles affichees.',
      prompt: 'Que constatez-vous devant le plan ?',
      requiredDocumentIds: ['convocation-tcf', 'plan-actuel-salles'],
      hints: [
        'Cherchez Jaures dans la liste des salles actuelles.',
        'Le plan ne donne pas la solution : il montre surtout une absence.',
      ],
      answer: {
        kind: 'single-choice',
        correctOptionId: 'jaures-absente',
        options: [
          {
            id: 'jaures-absente',
            label: 'La salle Jaures n apparait pas sur le plan actuel.',
          },
          {
            id: 'beffroi-annule',
            label: 'La salle Beffroi est annulee pour les examens.',
          },
          {
            id: 'oral-deplace',
            label: 'L oral de TCF a ete deplace a la salle informatique.',
          },
        ],
      },
      successFeedback:
        'Le probleme est confirme : la convocation et le plan actuel ne disent pas la meme chose. Avant de demander une aide methodologique, verifiez au secretariat si les oraux ont bien lieu et comparez votre convocation avec celle de Ning Yi.',
      failureFeedback:
        'Le plan ne parle pas d annulation ni de salle informatique. Il faut constater l absence de Jaures.',
      unlocksDocumentIds: ['temoignage-ning-yi'],
    },
    {
      id: 'formuler-probleme-heidi',
      title: 'Clarifier la situation avec Heidi',
      puzzleType: 'contradiction',
      description:
        'Dans son bureau, Heidi vous demande de resumer calmement ce qui bloque avant de chercher une archive.',
      prompt: 'Quelle phrase lui donnez-vous pour expliquer la situation ?',
      requiredDocumentIds: [
        'convocation-tcf',
        'plan-actuel-salles',
        'temoignage-delphine',
        'temoignage-ning-yi',
      ],
      hints: [
        'Une bonne formulation compare deux sources.',
        'Evitez les phrases qui accusent quelqu un ou qui imaginent une salle cachee.',
      ],
      answer: {
        kind: 'single-choice',
        correctOptionId: 'contradiction-convocation-plan',
        options: [
          {
            id: 'panique-oral',
            label: 'Je suis perdu et je vais rater mon oral.',
          },
          {
            id: 'contradiction-convocation-plan',
            label:
              'Ma convocation indique la salle Jaures, mais cette salle n apparait pas sur le plan actuel de l ISPA.',
          },
          {
            id: 'secretariat-hostile',
            label: 'Le secretariat n a pas voulu m aider.',
          },
          {
            id: 'salle-cachee',
            label: 'La salle Jaures est surement une salle cachee reservee aux examens.',
          },
        ],
      },
      successFeedback:
        'Probleme formule. Heidi vous donne une archive : Jaures a bien ete un nom de salle dans une ancienne organisation.',
      failureFeedback:
        'Cette formulation est trop vague ou va trop loin. Comparez simplement la convocation et le plan actuel.',
      unlocksDocumentIds: ['archive-entrainements-tcf'],
      unlocksLocationIds: ['couloir-marine'],
    },
    {
      id: 'identifier-beffroi',
      title: 'Retrouver le nom actuel de Jaures',
      puzzleType: 'matching',
      description:
        'Avec l archive de Heidi et la note de Marine, vous verifiez quel nom est affiche aujourd hui sur la porte.',
      prompt: 'Aujourd hui, a quelle salle correspond la salle Jaures ?',
      requiredDocumentIds: ['archive-entrainements-tcf', 'note-changement-noms'],
      hints: [
        'L archive prouve que Jaures est un ancien nom.',
        'La note de Marine donne la correspondance exacte.',
      ],
      answer: {
        kind: 'single-choice',
        correctOptionId: 'jaures-beffroi',
        options: [
          {
            id: 'jaures-cathedrale',
            label: 'Jaures correspond a Cathedrale.',
          },
          {
            id: 'jaures-beffroi',
            label: 'Jaures correspond a Beffroi.',
          },
          {
            id: 'jaures-gambetta',
            label: 'Jaures correspond a Gambetta.',
          },
        ],
      },
      successFeedback:
        'Correspondance trouvee : l oral indique en salle Jaures doit avoir lieu en salle Beffroi. Il reste a comprendre pourquoi l ancien nom est revenu.',
      failureFeedback:
        'Relisez la note interne. Chaque ancien nom correspond a un seul nom actuel.',
      unlocksLocationIds: ['salle-beffroi', 'secretariat-thi-thai'],
    },
    {
      id: 'comprendre-erreur-thi-thai',
      title: 'Comprendre l erreur de modele',
      puzzleType: 'unlock',
      description:
        'Thi Thai explique pourquoi une convocation recente utilise encore un ancien nom de salle.',
      prompt: 'Quelle est l origine de l erreur dans les convocations ?',
      requiredDocumentIds: ['temoignage-thi-thai'],
      hints: [
        'Relisez l explication de Thi Thai.',
        'L erreur vient d un modele administratif, pas d une annulation ou d une invention.',
      ],
      answer: {
        kind: 'single-choice',
        correctOptionId: 'ancien-modele-convocation',
        options: [
          {
            id: 'oraux-annules',
            label: 'Les oraux de TCF ont ete annules.',
          },
          {
            id: 'ancien-modele-convocation',
            label:
              'Thi Thai a utilise trop vite un ancien modele de convocation contenant les anciens noms de salles.',
          },
          {
            id: 'marine-change-noms',
            label: 'Marine a change le nom des salles le matin meme.',
          },
          {
            id: 'ning-yi-invente',
            label: 'Ning Yi a invente la salle Jaures.',
          },
        ],
      },
      successFeedback:
        'Vous comprenez l origine de l erreur : un ancien modele de convocation contenait encore les anciens noms de salles. Il faut maintenant prevenir les autres candidats clairement.',
      failureFeedback:
        'Cette explication ne correspond pas au temoignage de Thi Thai. Cherchez l origine administrative de l erreur.',
      unlocksDocumentIds: ['message-rectification'],
    },
  ],
  finalResolution: {
    id: 'resolution-salle-fantome',
    title: 'Afficher la rectification',
    description:
      'Thi Thai a explique l erreur. Choisissez le message qui informe clairement les autres candidats sans accuser personne.',
    prompt: 'Quel message faut-il afficher sur le panneau ?',
    requiredPuzzleIds: [
      'lire-convocation-tcf',
      'verifier-plan-actuel',
      'formuler-probleme-heidi',
      'identifier-beffroi',
      'comprendre-erreur-thi-thai',
    ],
    requiredDocumentIds: [
      'note-changement-noms',
      'temoignage-thi-thai',
      'message-rectification',
    ],
    hypotheses: [
      {
        id: 'message-clair-beffroi',
        label:
          'Information importante - Oraux de TCF. Les convocations qui indiquent la salle Jaures contiennent une ancienne denomination. Les candidats convoques en salle Jaures doivent se presenter en salle Beffroi. Les horaires de passage ne changent pas.',
      },
      {
        id: 'oraux-annules',
        label: 'Les oraux de TCF sont annules.',
      },
      {
        id: 'chercher-jaures',
        label: 'Les candidats doivent chercher la salle Jaures dans le batiment.',
      },
      {
        id: 'accuser-thi-thai',
        label: 'Thi Thai s est trompee dans les convocations.',
      },
    ],
    correctHypothesisId: 'message-clair-beffroi',
    evidencePrompt:
      'Selectionnez les trois pieces qui justifient cette rectification.',
    evidenceItems: [
      {
        documentId: 'convocation-tcf',
        label: 'Convocation TCF',
      },
      {
        documentId: 'plan-actuel-salles',
        label: 'Plan actuel des salles',
      },
      {
        documentId: 'note-changement-noms',
        label: 'Note interne de changement de noms',
      },
      {
        documentId: 'temoignage-thi-thai',
        label: 'Explication de Thi Thai',
      },
      {
        documentId: 'message-rectification',
        label: 'Message final de rectification',
      },
    ],
    requiredEvidenceIds: [
      'convocation-tcf',
      'note-changement-noms',
      'temoignage-thi-thai',
    ],
    supportingEvidenceIds: ['plan-actuel-salles', 'message-rectification'],
    minSelectedEvidenceCount: 3,
    maxSelectedEvidenceCount: 3,
    hypothesisFailureFeedback:
      'Ce message risque de paniquer, d accuser ou de ne pas guider les candidats. Il faut corriger clairement sans dramatiser.',
    evidenceFailureFeedback:
      'La rectification doit s appuyer sur la convocation, la correspondance Jaures -> Beffroi et l explication de l ancien modele.',
    successFeedback:
      'Rectification affichee. Le message est clair, utile et reparateur.',
    finalNarrative:
      "La salle fantome n etait pas cachee : c etait un ancien nom reste dans un modele administratif. Les candidats lisent la rectification, se dirigent vers la salle Beffroi et gardent leur heure de passage. Vous pouvez maintenant aller a votre oral avec une histoire et un bon argument de comprehension administrative.",
  },
};
