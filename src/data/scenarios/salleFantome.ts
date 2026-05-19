import type { Scenario } from '../../types/scenario';

export const salleFantomeScenario: Scenario = {
  id: 'salle-fantome',
  title: 'La salle fantôme',
  subtitle: 'Mystère administratif autour d’un oral de TCF',
  level: 'B1 / B2',
  duration: 'Prototype 25 à 45 minutes',
  briefing: {
    summary:
      "Vous avez reçu une convocation dans le cadre de vos études à l’ISPA.",
    context:
      "L’enquête commence à l’ISPA, à Amiens. Vous devez vous rendre à une convocation, mais il semble que vous n’ayez pas encore tous les éléments nécessaires.",
    mission:
      "Quelque chose ne va pas... mais quoi ? Observez les documents disponibles, vérifiez les informations et essayez de comprendre la situation.",
  },
  locations: [
    {
      id: 'hall',
      name: 'Hall',
      kind: 'main',
      vignetteUrl: '/assets/locations/accueil-temp.png',
      description:
        "Dans le hall, votre convocation en main, vous apercevez le panneau d’affichage et le plan des salles près de l’entrée.",
      role: 'Le plan peut être consulté pour vérifier le nom des salles.',
      available: true,
      documentIds: ['convocation-tcf', 'plan-actuel-salles'],
      presentCharacterIds: [],
      objectIds: [],
    },
    {
      id: 'panneau-affichage',
      name: 'Panneau d’affichage',
      kind: 'main',
      vignetteUrl: '/assets/locations/accueil-temp.png',
      description:
        "Le panneau d’affichage rassemble les informations du jour : examens, salles, horaires et messages urgents.",
      role: 'Un espace reste libre au milieu des annonces récentes.',
      available: true,
      documentIds: ['plan-actuel-salles', 'temoignage-ning-yi', 'message-rectification'],
      presentCharacterIds: ['ning-yi'],
      objectIds: [],
    },
    {
      id: 'secretariat',
      name: 'Secrétariat',
      kind: 'main',
      vignetteUrl: '/assets/locations/secretariat-temp.png',
      description:
        "Delphine gère plusieurs demandes à la fois. Thi Thai n’est pas encore revenue.",
      role: 'Des dossiers sont empilés près du comptoir. Le téléphone sonne régulièrement.',
      available: true,
      documentIds: ['temoignage-delphine', 'temoignage-thi-thai'],
      presentCharacterIds: ['delphine'],
      presentCharacterIdsAfterPuzzle: {
        'identifier-beffroi': ['thi-thai'],
      },
      objectIds: [],
    },
    {
      id: 'bureau-heidi',
      name: 'Bureau de Heïdi',
      kind: 'main',
      vignetteUrl: '/assets/locations/secretariat-temp.png',
      description:
        "Heïdi accueille les étudiants dans un bureau calme, à l’écart du bruit du hall.",
      role: 'Heïdi, comme toujours, vous accueille avec le sourire.',
      available: false,
      lockedMessage: "Heïdi n’est pas dans son bureau pour le moment.",
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
        "Le couloir relie le secrétariat, les bureaux et les salles de cours. Marine y passe avec des documents sous le bras.",
      role: 'Marine boit un café et vous parle d’une ancienne note interne.',
      available: false,
      documentIds: [],
      presentCharacterIds: ['marine'],
      objectIds: [],
      presentObjectIdsAfterCharacter: {
        marine: ['note-interne-marine'],
      },
    },
    {
      id: 'salle-beffroi',
      name: 'Salle Beffroi',
      kind: 'locked',
      vignetteUrl: '/assets/locations/salle-informatique-temp.png',
      description:
        "La salle Beffroi est préparée pour les passages individuels. Les candidats attendent dans le couloir voisin.",
      role: 'La porte affiche clairement le nom Beffroi.',
      available: false,
      documentIds: [],
      presentCharacterIds: [],
      objectIds: [],
    },
  ],
  characters: [
    {
      id: 'delphine',
      name: 'Delphine',
      role: 'Secrétariat / organisation administrative',
      portraitUrl: '/assets/portraits/delphine.png',
      profile:
        "Delphine est polie et débordée. Elle confirme les oraux, mais elle ne peut pas résoudre le problème de salle.",
      directSpeech:
        "Oui, les oraux de TCF ont bien lieu aujourd’hui. Si votre convocation indique une salle, il faut suivre votre convocation. Je suis désolée, Thi Thai n’est pas là pour le moment et je suis un peu débordée.",
      testimony:
        "Delphine confirme que les oraux de TCF ont lieu aujourd’hui. Elle renvoie le candidat à sa convocation et précise que Thi Thai est absente pour le moment.",
      reliability: 'stable',
      relatedLocationIds: ['secretariat'],
    },
    {
      id: 'ning-yi',
      name: 'Ning Yi',
      role: 'Autre candidat au TCF',
      profile:
        "Ning Yi a reçu la même convocation. Il transforme l’erreur administrative en théorie presque poétique.",
      directSpeech:
        "Toi aussi, tu cherches la salle Jaurès ? Je vérifie le panneau depuis tout à l’heure, et moi non plus je ne la trouve pas. Une salle indiquée sur une convocation officielle, mais absente des informations affichées... Ce n’est pas normal. Ou alors c’est une salle qu’on ne trouve que si on est prêt pour le TCF. Imagine : l’oral commence déjà maintenant. Le vrai test, c’est de trouver la salle. En France, l’administration est parfois plus difficile que la grammaire.",
      testimony:
        "Ning Yi confirme qu’un autre candidat a reçu une convocation indiquant la salle Jaurès. Il rend la situation plus étrange en imaginant que l’oral commence déjà devant le panneau.",
      reliability: 'partial',
      relatedLocationIds: ['panneau-affichage'],
    },
    {
      id: 'heidi',
      name: 'Heïdi',
      role: 'Accompagnement méthodologique',
      portraitUrl: '/assets/portraits/heidi.png',
      profile:
        "Heïdi, comme toujours, vous accueille avec le sourire.",
      directSpeech:
        "Ce n’est pas une catastrophe. C’est une contradiction entre deux sources : votre convocation et le plan actuel. Une bonne enquête commence par une bonne formulation du problème.",
      testimony:
        "Heïdi aide le candidat à formuler la contradiction : la convocation indique la salle Jaurès, mais cette salle n’apparaît pas sur le plan actuel de l’ISPA.",
      reliability: 'stable',
      relatedLocationIds: ['bureau-heidi'],
    },
    {
      id: 'marine',
      name: 'Marine',
      role: 'Personne ressource dans le couloir',
      portraitUrl: '/assets/portraits/marine.png',
      profile:
        "Marine boit un café et vous parle d’une ancienne note interne.",
      directSpeech:
        "Jaurès, ça me dit quelque chose. Je crois qu’il y a eu un changement de noms de salles. La note interne devrait vous aider à retrouver la correspondance exacte. Et ensuite, il faudra encore comprendre pourquoi une convocation récente utilise un ancien nom.",
      testimony:
        "Marine montre une note interne sur les changements de noms de salles. Elle signale qu’il reste à comprendre pourquoi une convocation récente utilise encore un ancien nom.",
      reliability: 'stable',
      relatedLocationIds: ['couloir-marine'],
    },
    {
      id: 'thi-thai',
      name: 'Thi Thai',
      role: 'Accueil / inscriptions aux examens',
      portraitUrl: '/assets/portraits/thitai.png',
      profile:
        "Thi Thai comprend le problème, vous explique et vous demande un service.",
      directSpeech:
        "J’ai utilisé un ancien modèle sans faire attention. J’ai copié-collé trop vite depuis un vieux fichier. Est-ce que vous pouvez afficher une rectification sur le panneau ? Les candidats doivent le voir avant leur passage.",
      testimony:
        "Thi Thai reconnaît qu’elle a utilisé par erreur un ancien modèle de convocation contenant les anciens noms de salles. Elle demande au candidat d’afficher une rectification sur le panneau.",
      reliability: 'stable',
      relatedLocationIds: ['secretariat'],
    },
  ],
  documents: [
    {
      id: 'convocation-tcf',
      title: 'Convocation individuelle - Oral de TCF',
      documentType: 'email',
      source: 'Service des examens',
      summary:
        'Une convocation officielle pour un oral proche. Le lieu indiqué attire immédiatement votre attention.',
      content:
        "ISPA - Service des examens\nCONVOCATION INDIVIDUELLE\nOral de TCF\n\nCandidat : candidat\nDate : aujourd’hui\nHeure de passage : 15 h 30\nPrésence demandée : 10 minutes avant l’épreuve\nLieu : salle Jaurès\n\nMerci de vous présenter avec une pièce d’identité. Tout retard peut entraîner l’annulation du passage.",
      initiallyAvailable: true,
      relatedLocationIds: ['hall'],
      relatedCharacterIds: [],
      evidenceIds: ['ev-convocation-jaures', 'ev-oral-1530'],
    },
    {
      id: 'plan-actuel-salles',
      title: 'Plan des salles affiché dans le hall',
      documentType: 'note',
      source: 'Hall - panneau des salles',
      summary:
        'Le plan près de l’entrée indique les noms actuels des salles.',
      content: "PLAN ACTUEL DES SALLES",
      imageUrl: '/assets/documents/plan-ispa-salles.png',
      initiallyAvailable: true,
      relatedLocationIds: ['hall', 'panneau-affichage'],
      relatedCharacterIds: [],
      evidenceIds: ['ev-plan-sans-jaures'],
    },
    {
      id: 'temoignage-delphine',
      title: 'Échange avec Delphine',
      documentType: 'testimony',
      source: 'Secrétariat',
      summary: 'Delphine confirme les oraux sans donner la solution.',
      content:
        "Delphine confirme que les oraux de TCF ont bien lieu aujourd’hui. Elle est débordée, Thi Thai est absente, et elle conseille de suivre la convocation officielle.",
      initiallyAvailable: true,
      relatedLocationIds: ['secretariat'],
      relatedCharacterIds: ['delphine'],
      evidenceIds: ['ev-oraux-confirmes'],
    },
    {
      id: 'temoignage-ning-yi',
      title: 'Échange avec Ning Yi',
      documentType: 'testimony',
      source: 'Panneau d’affichage',
      summary:
        'Ning Yi confirme qu’un autre candidat a reçu la même convocation et rend la situation plus étrange.',
      content:
        "Ning Yi a reçu lui aussi une convocation indiquant la salle Jaurès. Près du panneau, il vérifie les informations affichées et imagine que la salle apparaît seulement aux candidats prêts pour le TCF.",
      initiallyAvailable: false,
      unlocksAfterPuzzleId: 'verifier-plan-actuel',
      relatedLocationIds: ['panneau-affichage'],
      relatedCharacterIds: ['ning-yi'],
      evidenceIds: ['ev-ning-yi-meme-convocation'],
    },
    {
      id: 'archive-entrainements-tcf',
      title: 'Archive - Organisation des entraînements TCF, septembre 2010',
      documentType: 'planning',
      source: 'Heïdi',
      summary:
        'Ancien document qui prouve que Jaurès était bien un nom utilisé dans une organisation précédente.',
      content:
        "Document interne - année universitaire 2010-2011\n\nLes candidats doivent se présenter dix minutes avant leur passage.\n\nExpression orale : salle Jaurès\nPréparation des candidats : salle Rimbaud\nCompréhension écrite : salle Choderlos de Laclos\n\nLes listes d’émargement seront déposées devant chaque salle.",
      initiallyAvailable: false,
      unlocksAfterPuzzleId: 'formuler-probleme-heidi',
      relatedLocationIds: ['bureau-heidi'],
      relatedCharacterIds: ['heidi'],
      evidenceIds: ['ev-jaures-ancien-nom'],
    },
    {
      id: 'note-changement-noms',
      title: 'Note interne - Mise à jour des noms de salles',
      documentType: 'note',
      source: 'Marine',
      summary:
        'Une note de service associe les anciens noms aux noms actuellement affichés.',
      content:
        "NOTE INTERNE - Service accueil et examens\nObjet : noms affichés sur les portes de salles\n\nÀ partir du 1er septembre, les anciennes dénominations ne doivent plus être utilisées dans les documents transmis aux candidats.\n\nCorrespondances à vérifier avant envoi :\n- Salle Jaurès -> Salle Beffroi\n- Salle Rimbaud -> Salle Cathédrale\n- Salle Choderlos de Laclos -> Salle Gambetta",
      initiallyAvailable: false,
      relatedLocationIds: ['couloir-marine'],
      relatedCharacterIds: ['marine'],
      evidenceIds: ['ev-jaures-beffroi', 'ev-correspondances-salles'],
    },
    {
      id: 'temoignage-thi-thai',
      title: 'Explication de Thi Thai',
      documentType: 'testimony',
      source: 'Secrétariat',
      summary: 'Thi Thai explique l’origine de l’erreur.',
      content:
        "Thi Thai reconnaît qu’elle a utilisé un ancien modèle de convocation sans faire attention. Elle a copié-collé trop vite depuis un vieux fichier contenant encore les anciens noms de salles. Elle confirme que les candidats convoqués en salle Jaurès doivent aller en salle Beffroi.",
      initiallyAvailable: false,
      relatedLocationIds: ['secretariat'],
      relatedCharacterIds: ['thi-thai'],
      evidenceIds: ['ev-ancien-modele', 'ev-confirmation-beffroi'],
    },
    {
      id: 'message-rectification',
      title: 'Message final de rectification',
      documentType: 'note',
      source: 'Panneau d’affichage',
      summary: 'Message à afficher pour éviter que les autres candidats se trompent.',
      content:
        "INFORMATION IMPORTANTE - ORAL TCF\n\nLa convocation mentionne l’ancienne salle Jaurès.\nLe nom actuel de cette salle est : Salle Beffroi.\n\nLes candidats convoqués en salle Jaurès doivent se rendre en Salle Beffroi.",
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
      label: 'La convocation indique salle Jaurès',
      text: 'Le lieu indiqué pour l’oral de TCF est la salle Jaurès.',
      documentId: 'convocation-tcf',
    },
    {
      id: 'ev-oral-1530',
      label: 'Oral prevu a 15 h 30',
      text: 'Le candidat doit être présent dix minutes avant l’oral de 15 h 30.',
      documentId: 'convocation-tcf',
    },
    {
      id: 'ev-plan-sans-jaures',
      label: 'Le plan actuel ne mentionne pas Jaurès',
      text: 'Le plan actuel affiche Beffroi, Cathédrale et Gambetta, mais pas Jaurès.',
      documentId: 'plan-actuel-salles',
    },
    {
      id: 'ev-oraux-confirmes',
      label: 'Les oraux ont bien lieu',
      text: 'Delphine confirme que les oraux de TCF ont bien lieu aujourd’hui.',
      documentId: 'temoignage-delphine',
    },
    {
      id: 'ev-ning-yi-meme-convocation',
      label: 'Ning Yi a la même convocation',
      text: 'Ning Yi confirme qu’un autre candidat a reçu une convocation indiquant la salle Jaurès.',
      documentId: 'temoignage-ning-yi',
    },
    {
      id: 'ev-jaures-ancien-nom',
      label: 'Jaurès existe dans une archive',
      text: 'Une archive mentionne la salle Jaurès pour l’expression orale.',
      documentId: 'archive-entrainements-tcf',
    },
    {
      id: 'ev-jaures-beffroi',
      label: 'Jaurès correspond à Beffroi',
      text: 'La note interne indique : Salle Jaurès -> Salle Beffroi.',
      documentId: 'note-changement-noms',
    },
    {
      id: 'ev-correspondances-salles',
      label: 'Trois anciens noms ont été remplacés',
      text: 'Jaurès, Rimbaud et Choderlos de Laclos ont été remplacés par Beffroi, Cathédrale et Gambetta.',
      documentId: 'note-changement-noms',
    },
    {
      id: 'ev-ancien-modele',
      label: 'Ancien modèle de convocation',
      text: 'Thi Thai explique qu’elle a utilisé un ancien modèle sans faire attention.',
      documentId: 'temoignage-thi-thai',
    },
    {
      id: 'ev-confirmation-beffroi',
      label: 'Les candidats doivent aller en Beffroi',
      text: 'Thi Thai confirme que les candidats convoqués en salle Jaurès doivent se présenter en salle Beffroi.',
      documentId: 'temoignage-thi-thai',
    },
    {
      id: 'ev-message-correct',
      label: 'Rectification claire',
      text: 'Le message final indique que Jaurès est une ancienne dénomination et renvoie les candidats vers Beffroi.',
      documentId: 'message-rectification',
    },
  ],
  inventoryObjects: [
    {
      id: 'note-interne-marine',
      name: 'Note interne de Marine',
      objectType: 'evidence',
      typeLabel: 'Document obtenu',
      description:
        'Marine vous confie une ancienne note interne sur les noms de salles.',
      originLocationId: 'couloir-marine',
      initiallyVisible: true,
      initiallyOwned: false,
      unlocksDocumentIds: ['note-changement-noms'],
      opensDocumentOnUse: true,
      isUseful: true,
      useLabel: 'Lire la note',
      usedLabel: 'Note lue',
    },
    {
      id: 'rectification-a-afficher',
      name: 'Rectification à afficher',
      objectType: 'preparatory',
      typeLabel: 'Message à afficher',
      description:
        'Thi Thai vous confie un message court à afficher sur le panneau pour les candidats au TCF.',
      originLocationId: 'secretariat',
      initiallyVisible: false,
      initiallyOwned: false,
      isUseful: true,
      canDrop: false,
      usedLabel: 'Affichée',
    },
  ],
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
        'Repérez l’information qui rend la convocation problématique.',
      prompt: 'Quel élément de la convocation devez-vous vérifier sur le plan ?',
      requiredDocumentIds: ['convocation-tcf'],
      hints: [
        'Cherchez le lieu de l’épreuve.',
        'L’heure crée de la tension, mais le problème vient surtout du nom de salle.',
      ],
      answer: {
        kind: 'single-choice',
        correctOptionId: 'lieu-jaures',
        options: [
          {
            id: 'epreuve-oral',
            label: 'L’épreuve est un oral de TCF.',
          },
          {
            id: 'lieu-jaures',
            label: 'Le lieu indiqué est la salle Jaurès.',
          },
          {
            id: 'piece-identite',
            label: 'Il faut apporter une pièce d’identité.',
          },
        ],
      },
      successFeedback:
        'Vous avez repéré l’information essentielle : l’oral est indiqué en salle Jaurès. Il faut maintenant vérifier cette salle sur le plan.',
      failureFeedback:
        'Cela ne semble pas être la bonne réponse. Relisez la convocation. Revenez à cet indice pour essayer de trouver la bonne réponse.',
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
        'Sous le plan du hall, vous comparez le nom indiqué sur la convocation avec les salles affichées.',
      prompt: 'Que constatez-vous devant le plan ?',
      requiredDocumentIds: ['convocation-tcf', 'plan-actuel-salles'],
      hints: [
        'Cherchez Jaurès dans la liste des salles actuelles.',
        'Le plan ne donne pas la solution : il montre surtout une absence.',
      ],
      answer: {
        kind: 'single-choice',
        correctOptionId: 'jaures-absente',
        options: [
          {
            id: 'jaures-absente',
            label: 'La salle Jaurès n’apparaît pas sur le plan actuel.',
          },
          {
            id: 'beffroi-annule',
            label: 'La salle Beffroi est annulée pour les examens.',
          },
          {
            id: 'oral-deplace',
            label: 'L’oral de TCF a été déplacé à la salle informatique.',
          },
        ],
      },
      successFeedback:
        'Bien vu : la salle Jaurès n’apparaît pas sur le plan actuel. Il y a donc une incohérence à éclaircir.',
      failureFeedback:
        'Cela ne semble pas être la bonne réponse. Observez de nouveau le plan des salles. Revenez à cet indice pour essayer de trouver la bonne réponse.',
      unlocksDocumentIds: ['temoignage-ning-yi'],
      unlocksLocationIds: ['bureau-heidi'],
    },
    {
      id: 'formuler-probleme-heidi',
      title: 'Clarifier la situation avec Heïdi',
      puzzleType: 'contradiction',
      context: {
        type: 'character',
        id: 'heidi',
      },
      description:
        'Dans son bureau, Heïdi vous demande de résumer calmement ce qui bloque avant de chercher une archive.',
      prompt: 'Quelle phrase lui donnez-vous pour expliquer la situation ?',
      requiredDocumentIds: [
        'convocation-tcf',
        'plan-actuel-salles',
        'temoignage-delphine',
        'temoignage-ning-yi',
      ],
      hints: [
        'Une bonne formulation compare deux sources.',
        'Évitez les phrases qui accusent quelqu’un ou qui imaginent une salle cachée.',
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
              'Ma convocation indique la salle Jaurès, mais cette salle n’apparaît pas sur le plan actuel de l’ISPA.',
          },
          {
            id: 'secretariat-hostile',
            label: 'Le secrétariat n’a pas voulu m’aider.',
          },
          {
            id: 'salle-cachee',
            label: 'La salle Jaurès est sûrement une salle cachée réservée aux examens.',
          },
        ],
      },
      successFeedback:
        'Heïdi vous aide à formuler le problème : le document officiel et le plan actuel ne donnent pas la même information. Elle vous conseille maintenant de regarder le document d’archive dans son bureau.',
      failureFeedback:
        'Cette réponse ne convient pas encore. Reparlez à Heïdi et vérifiez la formulation du problème. Revenez à cet indice pour essayer de trouver la bonne réponse.',
      unlocksDocumentIds: ['archive-entrainements-tcf'],
      unlocksLocationIds: ['couloir-marine'],
    },
    {
      id: 'identifier-beffroi',
      title: 'Retrouver le nom actuel de Jaurès',
      puzzleType: 'matching',
      context: {
        type: 'document',
        id: 'note-changement-noms',
      },
      description:
        'Cette note devrait nous aider à comprendre un peu !',
      prompt: 'Aujourd’hui, à quelle salle correspond la salle Jaurès ?',
      requiredDocumentIds: ['archive-entrainements-tcf', 'note-changement-noms'],
      hints: [
        'L’archive prouve que Jaurès est un ancien nom.',
        'La note de Marine donne la correspondance exacte.',
      ],
      answer: {
        kind: 'single-choice',
        correctOptionId: 'jaures-beffroi',
        options: [
          {
            id: 'jaures-cathedrale',
            label: 'Jaurès correspond à Cathédrale.',
          },
          {
            id: 'jaures-beffroi',
            label: 'Jaurès correspond à Beffroi.',
          },
          {
            id: 'jaures-gambetta',
            label: 'Jaurès correspond à Gambetta.',
          },
        ],
      },
      successFeedback:
        'Marine donne une piste décisive : certains noms de salles ont changé. Vous avez établi la correspondance importante : l’ancienne salle Jaurès correspond aujourd’hui à la salle Beffroi.',
      failureFeedback:
        'Cette correspondance ne semble pas correcte. Reprenez les indices. Revenez à cet indice pour essayer de trouver la bonne réponse.',
      unlocksDocumentIds: ['temoignage-thi-thai'],
      unlocksLocationIds: ['salle-beffroi'],
    },
    {
      id: 'comprendre-erreur-thi-thai',
      title: 'Comprendre l’erreur de modèle',
      puzzleType: 'unlock',
      context: {
        type: 'character',
        id: 'thi-thai',
      },
      description:
        'Thi Thai explique pourquoi une convocation récente utilise encore un ancien nom de salle.',
      prompt: 'Quelle est l’origine de l’erreur dans les convocations ?',
      requiredDocumentIds: ['temoignage-thi-thai'],
      hints: [
        'Relisez l’explication de Thi Thai.',
        'L’erreur vient d’un modèle administratif, pas d’une annulation ou d’une invention.',
      ],
      answer: {
        kind: 'single-choice',
        correctOptionId: 'ancien-modele-convocation',
        options: [
          {
            id: 'oraux-annules',
            label: 'Les oraux de TCF ont été annulés.',
          },
          {
            id: 'ancien-modele-convocation',
            label:
              'Thi Thai a utilisé trop vite un ancien modèle de convocation contenant les anciens noms de salles.',
          },
          {
            id: 'marine-change-noms',
            label: 'Marine a changé le nom des salles le matin même.',
          },
          {
            id: 'ning-yi-invente',
            label: 'Ning Yi a inventé la salle Jaurès.',
          },
        ],
      },
      successFeedback:
        'L’origine de l’erreur est maintenant claire : une ancienne convocation a servi de modèle. Thi Thai vous confie une rectification à afficher sur le panneau.',
      failureFeedback:
        'Cela ne semble pas être la bonne réponse. Relisez l’explication de Thi Thai. Revenez à cet indice pour essayer de trouver la bonne réponse.',
      unlocksDocumentIds: ['message-rectification'],
      unlocksObjectIds: ['rectification-a-afficher'],
    },
  ],
  finalResolution: {
    id: 'resolution-salle-fantome',
    title: 'Afficher la rectification',
    description:
      'Vous êtes devant le panneau d’affichage. Choisissez le message que vous allez afficher pour orienter clairement les candidats.',
    context: {
      type: 'location',
      id: 'panneau-affichage',
    },
    prompt: 'Quel message affichez-vous sur le panneau ?',
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
    requiredObjectIds: ['rectification-a-afficher'],
    usesObjectId: 'rectification-a-afficher',
    hypotheses: [
      {
        id: 'message-clair-beffroi',
        label:
          'Information importante - Oraux de TCF. Les convocations qui indiquent la salle Jaurès contiennent une ancienne dénomination. Les candidats convoqués en salle Jaurès doivent se présenter en salle Beffroi. Les horaires de passage ne changent pas.',
      },
      {
        id: 'oraux-annules',
        label: 'Les oraux de TCF sont annulés.',
      },
      {
        id: 'chercher-jaures',
        label: 'Les candidats doivent chercher la salle Jaurès dans le bâtiment.',
      },
      {
        id: 'accuser-thi-thai',
        label: 'Thi Thai s’est trompée dans les convocations.',
      },
    ],
    correctHypothesisId: 'message-clair-beffroi',
    evidencePrompt:
      'Sélectionnez les trois pièces qui justifient cette rectification.',
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
      'Cette rectification ne semble pas assez claire. Relisez les informations confirmées. Revenez à cette étape pour essayer de trouver la bonne réponse.',
    evidenceFailureFeedback:
      'Cette rectification ne semble pas assez claire. Relisez les informations confirmées. Revenez à cette étape pour essayer de trouver la bonne réponse.',
    successFeedback:
      'La rectification est maintenant affichée. Les candidats convoqués en salle Jaurès savent qu’ils doivent se rendre en Salle Beffroi.',
    finalNarrative:
      "Vous affichez la rectification sur le panneau. La salle fantôme n’était pas cachée : c’était un ancien nom resté dans un modèle administratif. Les candidats lisent l’information correcte, se dirigent vers la salle Beffroi et gardent leur heure de passage. Vous pouvez maintenant aller à votre oral avec une histoire et un bon argument de compréhension administrative.",
  },
};
