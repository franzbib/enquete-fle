import type { Scenario } from '../../types/scenario';

export const messageEffaceScenario: Scenario = {
  id: 'le-message-efface',
  title: 'Le message effacé',
  subtitle: 'Deuxième enquête prototype',
  level: 'B1+ / B2 léger',
  duration: 'Prototype 15 à 25 minutes',
  briefing: {
    summary:
      "Marine affirme avoir envoyé un message important pour confirmer une démarche universitaire, mais le message n'apparaît pas comme reçu.",
    context:
      "L'enquête se déroule à l'ISPA, entre l'accueil, le secrétariat et la salle informatique. Plusieurs personnes ont utilisé les ordinateurs partagés dans l'après-midi.",
    mission:
      "Explorez les lieux, lisez les témoignages et comparez les traces numériques. Il ne s'agit pas d'accuser quelqu'un, mais de comprendre si le message a vraiment été envoyé.",
  },
  locations: [
    {
      id: 'accueil',
      name: 'Accueil',
      kind: 'optional',
      vignetteUrl: '/assets/locations/accueil-temp.png',
      description:
        "L'accueil est calme, mais le téléphone sonne souvent. On y trouve des informations pratiques pour les étudiants qui utilisent les ordinateurs partagés.",
      role: "Se repérer dans l'ISPA et trouver une information d'ambiance sur les comptes partagés.",
      available: true,
      documentIds: ['affiche-deconnexion'],
      presentCharacterIds: [],
      objectIds: [],
    },
    {
      id: 'secretariat',
      name: 'Secrétariat',
      kind: 'main',
      vignetteUrl: '/assets/locations/secretariat-temp.png',
      description:
        "Le secrétariat reçoit les confirmations administratives. Delphine peut vérifier si le message de Marine est arrivé.",
      role: "Vérifier la réception du message et obtenir un accès provisoire à la salle informatique.",
      available: true,
      documentIds: ['boite-reception-secretariat', 'note-rodolphe'],
      presentCharacterIds: ['delphine', 'rodolphe'],
      objectIds: ['badge-visiteur'],
    },
    {
      id: 'couloir',
      name: 'Couloir',
      kind: 'transition',
      vignetteUrl: '/assets/locations/couloir-temp.png',
      description:
        "Un lieu de passage entre le secrétariat et la salle informatique. Marine et Mathias y expliquent ce qu'ils ont fait.",
      role: 'Comparer les déclarations des étudiants avant de consulter les traces numériques.',
      available: true,
      documentIds: ['temoignage-marine', 'temoignage-mathias'],
      presentCharacterIds: ['marine', 'mathias'],
      objectIds: ['post-it-identifiant'],
    },
    {
      id: 'salle-informatique',
      name: 'Salle informatique',
      kind: 'locked',
      vignetteUrl: '/assets/locations/salle-informatique-temp.png',
      description:
        "La salle contient plusieurs postes partagés. Les traces numériques peuvent aider à comprendre ce qui s'est passé avec le message.",
      role: "Présenter le badge visiteur, puis vérifier le brouillon et l'historique du poste utilisé.",
      available: false,
      documentIds: ['historique-poste-12', 'brouillon-message'],
      presentCharacterIds: [],
      relatedCharacterIds: ['marine', 'mathias'],
      objectIds: [],
    },
  ],
  characters: [
    {
      id: 'marine',
      name: 'Marine',
      role: 'Étudiante concernée par le message',
      portraitUrl: '/assets/portraits/marine.png',
      profile:
        "Marine est sûre d'avoir préparé son message, mais elle commence à douter de la dernière étape.",
      directSpeech:
        "J'ai écrit le message vers 15h20 depuis le poste 12. J'ai ajouté la pièce jointe avec Mathias, puis j'ai cru l'envoyer. Je n'ai pas reçu de confirmation, mais je pensais que c'était normal.",
      testimony:
        "Marine explique qu'elle a écrit le message vers 15h20 depuis le poste 12. Elle précise que Mathias l'a aidée à ajouter la pièce jointe et qu'elle a cru envoyer le message.",
      reliability: 'partial',
      relatedLocationIds: ['couloir', 'salle-informatique'],
    },
    {
      id: 'mathias',
      name: 'Mathias',
      role: 'Étudiant ayant aidé sur le poste informatique',
      portraitUrl: '/assets/portraits/mathias.png',
      profile:
        "Mathias a aidé Marine sur l'ordinateur, sans suivre toute la procédure d'envoi.",
      directSpeech:
        "J'ai aidé Marine à ajouter le fichier demandé. Ensuite, j'ai laissé ma place parce qu'un autre étudiant attendait. Je pensais que le message était prêt, mais je n'ai pas vu l'écran d'envoi final.",
      testimony:
        "Mathias explique qu'il a aidé Marine à ajouter le fichier demandé. Il précise qu'il n'a pas vu l'écran d'envoi final.",
      reliability: 'partial',
      relatedLocationIds: ['couloir', 'salle-informatique'],
    },
    {
      id: 'delphine',
      name: 'Delphine',
      role: 'Secrétariat / organisation administrative',
      portraitUrl: '/assets/portraits/delphine.png',
      profile:
        "Delphine vérifie les confirmations administratives et connaît bien les petits problèmes des ordinateurs partagés.",
      directSpeech:
        "J'ai vérifié la boîte de réception du secrétariat. Je ne vois aucun message de Marine cet après-midi. Avant de conclure, il faut regarder s'il existe une trace ailleurs : brouillon, pièce jointe ou session ouverte.",
      testimony:
        "Delphine explique qu'elle a vérifié la boîte de réception du secrétariat. Elle indique qu'aucun message de Marine n'apparaît dans les messages reçus de l'après-midi.",
      reliability: 'stable',
      relatedLocationIds: ['secretariat'],
    },
    {
      id: 'rodolphe',
      name: 'M. Rodolphe',
      role: 'Enseignant',
      portraitUrl: '/assets/portraits/rodolphe.png',
      profile:
        "Il attendait la confirmation de Marine avant de transmettre une information au secrétariat.",
      directSpeech:
        "J'attendais le message avant 16h00. Je n'ai rien reçu, mais cela ne veut pas dire que Marine a menti. Avec les ordinateurs partagés, une étape peut facilement rester incomplète.",
      testimony:
        "M. Rodolphe explique qu'il attendait le message avant 16h00. Il précise qu'il n'a rien reçu, mais qu'une erreur de manipulation reste possible.",
      reliability: 'stable',
      relatedLocationIds: ['secretariat'],
    },
  ],
  documents: [
    {
      id: 'affiche-deconnexion',
      title: 'Affiche — Ordinateurs partagés',
      documentType: 'note',
      source: 'Accueil',
      summary: "Affiche d'ambiance sur l'utilisation des ordinateurs partagés.",
      content:
        "Pour protéger vos documents, pensez à vous déconnecter après chaque utilisation d'un ordinateur partagé. Vérifiez aussi que votre message est bien envoyé, et pas seulement enregistré.",
      initiallyAvailable: true,
      relatedLocationIds: ['accueil'],
      relatedCharacterIds: [],
    },
    {
      id: 'boite-reception-secretariat',
      title: 'Boîte de réception du secrétariat',
      documentType: 'email',
      source: 'Secrétariat',
      summary: "Liste courte des messages reçus dans l'après-midi.",
      content:
        "Messages reçus entre 15h00 et 16h30 : 15h08 — confirmation examen Xiaotong ; 15h42 — question emploi du temps ; 16h12 — formulaire reçu de Candice. Aucun message de Marine n'apparaît dans la boîte de réception.",
      initiallyAvailable: true,
      relatedLocationIds: ['secretariat'],
      relatedCharacterIds: ['delphine', 'marine'],
      evidenceIds: ['ev-aucun-message-recu'],
    },
    {
      id: 'note-rodolphe',
      title: 'Note de M. Rodolphe',
      documentType: 'note',
      source: 'Secrétariat',
      summary: "Note administrative sur le message attendu.",
      content:
        "À vérifier avant 16h00 : confirmation de Marine ; pièce jointe demandée ; réponse au secrétariat si le message arrive.",
      initiallyAvailable: true,
      relatedLocationIds: ['secretariat'],
      relatedCharacterIds: ['rodolphe', 'marine'],
      evidenceIds: ['ev-message-attendu-1600'],
    },
    {
      id: 'temoignage-marine',
      title: 'Témoignage de Marine',
      documentType: 'testimony',
      source: 'Couloir',
      summary: "Marine explique avoir préparé et cru envoyer un message important.",
      content:
        "Marine explique qu'elle a écrit le message vers 15h20 depuis le poste 12. Elle précise que Mathias l'a aidée à ajouter la pièce jointe. Elle affirme avoir cru envoyer le message, mais elle reconnaît ne pas avoir reçu de confirmation.",
      initiallyAvailable: true,
      relatedLocationIds: ['couloir'],
      relatedCharacterIds: ['marine', 'mathias'],
      evidenceIds: ['ev-marine-croit-envoyer'],
    },
    {
      id: 'temoignage-mathias',
      title: 'Témoignage de Mathias',
      documentType: 'testimony',
      source: 'Couloir',
      summary: "Mathias confirme avoir aidé pour la pièce jointe, sans vérifier l'envoi.",
      content:
        "Mathias explique qu'il a aidé Marine à ajouter le fichier demandé. Il précise qu'il a quitté le poste avant l'envoi final et qu'il ne peut pas confirmer que le message est parti.",
      initiallyAvailable: true,
      relatedLocationIds: ['couloir'],
      relatedCharacterIds: ['mathias', 'marine'],
      evidenceIds: ['ev-mathias-pas-envoi'],
    },
    {
      id: 'historique-poste-12',
      title: 'Historique du poste 12',
      documentType: 'technical-log',
      source: 'Salle informatique',
      summary: "Trace technique du poste utilisé par Marine.",
      content:
        "15h18 — session : Marine — ouverture messagerie. 15h31 — ajout pièce jointe : confirmation_stage.pdf. 15h36 — brouillon modifié. 15h37 — aucune trace d'envoi confirmée.",
      initiallyAvailable: true,
      relatedLocationIds: ['salle-informatique'],
      relatedCharacterIds: ['marine', 'mathias'],
      evidenceIds: ['ev-brouillon-modifie-1536'],
    },
    {
      id: 'brouillon-message',
      title: 'Brouillon retrouvé',
      documentType: 'draft-email',
      source: 'Salle informatique',
      summary: "Message presque complet retrouvé dans les brouillons.",
      content:
        "Destinataire : secretariat@ispa.example\nObjet : Confirmation de démarche\n\nBonjour,\n\nJe vous confirme ma démarche pour cette semaine. Vous trouverez la pièce jointe demandée.\n\nCordialement,\nMarine\n\nStatut : brouillon non envoyé.",
      initiallyAvailable: true,
      relatedLocationIds: ['salle-informatique'],
      relatedCharacterIds: ['marine'],
      evidenceIds: ['ev-brouillon-non-envoye'],
    },
  ],
  evidence: [
    {
      id: 'ev-aucun-message-recu',
      label: 'Aucun message reçu de Marine',
      text: "La boîte de réception du secrétariat ne montre aucun message de Marine dans l'après-midi.",
      documentId: 'boite-reception-secretariat',
    },
    {
      id: 'ev-message-attendu-1600',
      label: 'Message attendu avant 16h00',
      text: 'M. Rodolphe attendait une confirmation avant 16h00.',
      documentId: 'note-rodolphe',
    },
    {
      id: 'ev-marine-croit-envoyer',
      label: 'Marine croit avoir envoyé',
      text: 'Marine affirme avoir cru envoyer le message après avoir ajouté la pièce jointe.',
      documentId: 'temoignage-marine',
    },
    {
      id: 'ev-mathias-pas-envoi',
      label: "Mathias n'a pas vu l'envoi",
      text: "Mathias confirme l'aide pour la pièce jointe, mais pas l'envoi final.",
      documentId: 'temoignage-mathias',
    },
    {
      id: 'ev-brouillon-modifie-1536',
      label: 'Brouillon modifié à 15h36',
      text: "L'historique du poste indique un brouillon modifié à 15h36, sans trace d'envoi confirmée.",
      documentId: 'historique-poste-12',
    },
    {
      id: 'ev-brouillon-non-envoye',
      label: 'Brouillon non envoyé',
      text: "Un message presque complet existe, mais son statut indique qu'il n'a pas été envoyé.",
      documentId: 'brouillon-message',
    },
  ],
  inventoryObjects: [
    {
      id: 'badge-visiteur',
      name: 'Badge visiteur',
      iconUrl: '/assets/objects/badge-visiteur.png',
      objectType: 'access',
      description:
        "Un badge visiteur prêté au secrétariat. Il permet d'entrer provisoirement dans la salle informatique pour vérifier les traces du poste 12.",
      originLocationId: 'secretariat',
      initiallyVisible: true,
      initiallyOwned: false,
      unlocksLocationIds: ['salle-informatique'],
      isUseful: true,
      useLabel: 'Présenter le badge',
      usedLabel: 'Utilisé pour accéder à la salle informatique',
    },
    {
      id: 'post-it-identifiant',
      name: "Post-it d'identifiant",
      objectType: 'ambient',
      description:
        "Un post-it avec un début d'identifiant, sans mot de passe. Il rappelle surtout que les ordinateurs partagés demandent de l'attention.",
      originLocationId: 'couloir',
      initiallyVisible: true,
      initiallyOwned: false,
      isUseful: false,
    },
  ],
  puzzles: [
    {
      id: 'chronologie-message',
      title: 'Reconstituer la chronologie numérique',
      puzzleType: 'ordering',
      description:
        "Remettez trois événements dans l'ordre pour comprendre où le problème a pu apparaître.",
      prompt:
        "Quel ordre rend les traces cohérentes entre le message préparé et l'absence de réception ?",
      requiredDocumentIds: [
        'temoignage-marine',
        'historique-poste-12',
        'boite-reception-secretariat',
      ],
      hints: [
        'Commencez par repérer les heures dans le témoignage et dans la trace du poste.',
        'Le brouillon est modifié après le moment où Marine pense avoir envoyé le message.',
        "Cherchez d'abord ce qui se passe vers 15h20, puis ce que le poste indique à 15h36.",
      ],
      answer: {
        kind: 'ordered-events',
        events: [
          {
            id: 'marine-prepare-message',
            label: 'Marine prépare le message depuis le poste 12.',
          },
          {
            id: 'brouillon-modifie',
            label: 'Le poste 12 indique un brouillon modifié à 15h36.',
          },
          {
            id: 'message-absent-reception',
            label: "Le secrétariat ne trouve aucun message reçu de Marine.",
          },
        ],
        correctOrder: [
          'marine-prepare-message',
          'brouillon-modifie',
          'message-absent-reception',
        ],
      },
      successFeedback:
        "Chronologie validée. Les horaires suggèrent qu'il faut comparer ce que Marine pensait avoir fait avec les traces numériques disponibles.",
      failureFeedback:
        "Cet ordre ne correspond pas encore aux heures disponibles. Relisez le témoignage de Marine, puis l'historique du poste 12.",
    },
    {
      id: 'contradiction-message',
      title: 'Comparer les pièces du message',
      puzzleType: 'contradiction',
      description:
        "Sélectionnez deux pièces du dossier, puis interprétez prudemment ce qu'elles montrent.",
      prompt:
        "Sélectionnez les deux pièces du dossier qui permettent de repérer une contradiction.",
      requiredDocumentIds: ['temoignage-marine', 'brouillon-message'],
      hints: [
        'Relisez ce que Marine dit de l’envoi du message.',
        'Cherchez si un message existe ailleurs que dans les messages reçus.',
        "Un brouillon n'est pas un message envoyé.",
      ],
      answer: {
        kind: 'case-file-contradiction',
        caseFileItems: [
          {
            documentId: 'temoignage-marine',
            label: 'Témoignage de Marine',
          },
          {
            documentId: 'boite-reception-secretariat',
            label: 'Boîte de réception du secrétariat',
          },
          {
            documentId: 'brouillon-message',
            label: 'Brouillon retrouvé',
          },
          {
            documentId: 'historique-poste-12',
            label: 'Historique du poste 12',
          },
          {
            documentId: 'temoignage-mathias',
            label: 'Témoignage de Mathias',
          },
          {
            documentId: 'note-rodolphe',
            label: 'Note de M. Rodolphe',
          },
        ],
        correctEvidenceIds: ['temoignage-marine', 'brouillon-message'],
        selectionSuccessFeedback:
          "Ces deux pièces peuvent être comparées : Marine croit avoir envoyé le message, mais le message retrouvé est encore un brouillon.",
        selectionFailureFeedback:
          "Ces deux pièces ne suffisent pas à établir une contradiction claire. Relisez ce qui est dit sur l'envoi et le statut du message.",
        interpretationPrompt: 'Que montre cette contradiction ?',
        interpretationOptions: [
          {
            id: 'message-prepare-non-envoye',
            label:
              "Marine a probablement préparé le message, mais il n'a pas été envoyé correctement.",
          },
          {
            id: 'mathias-a-efface',
            label: 'Mathias a volontairement supprimé le message.',
          },
          {
            id: 'delphine-cache-message',
            label: 'Delphine a caché le message reçu.',
          },
        ],
        correctInterpretationOptionId: 'message-prepare-non-envoye',
      },
      successFeedback:
        "Oui. La comparaison reste prudente : elle ne montre pas une suppression volontaire, mais elle indique que le message a probablement été préparé sans être envoyé correctement.",
      failureFeedback:
        "Cette interprétation va trop loin par rapport aux pièces disponibles. Les documents permettent surtout de distinguer un message préparé d'un message réellement envoyé.",
    },
  ],
  finalResolution: {
    id: 'resolution-message-efface',
    title: "Conclusion de l'enquête",
    description:
      "Formulez une explication prudente. Le but est de comprendre une erreur numérique possible, pas d'accuser un étudiant.",
    prompt:
      "Quelle explication correspond le mieux aux éléments de l'enquête ?",
    requiredPuzzleIds: ['chronologie-message', 'contradiction-message'],
    requiredDocumentIds: [
      'temoignage-marine',
      'brouillon-message',
      'historique-poste-12',
    ],
    hypotheses: [
      {
        id: 'brouillon-non-envoye',
        label:
          "Marine a probablement rédigé le message, mais il est resté dans les brouillons ou n'a pas été envoyé correctement.",
      },
      {
        id: 'mathias-suppression',
        label: 'Mathias a volontairement effacé le message de Marine.',
      },
      {
        id: 'rodolphe-refus',
        label: "M. Rodolphe a reçu le message, mais il n'a pas voulu répondre.",
      },
      {
        id: 'delphine-cache',
        label: 'Delphine a caché le message pour bloquer la démarche.',
      },
    ],
    correctHypothesisId: 'brouillon-non-envoye',
    evidencePrompt:
      'Sélectionnez les trois pièces qui soutiennent le mieux cette explication.',
    evidenceItems: [
      {
        documentId: 'temoignage-marine',
        label: 'Témoignage de Marine',
      },
      {
        documentId: 'brouillon-message',
        label: 'Brouillon retrouvé',
      },
      {
        documentId: 'historique-poste-12',
        label: 'Historique du poste 12',
      },
      {
        documentId: 'boite-reception-secretariat',
        label: 'Boîte de réception du secrétariat',
      },
      {
        documentId: 'temoignage-mathias',
        label: 'Témoignage de Mathias',
      },
      {
        documentId: 'note-rodolphe',
        label: 'Note de M. Rodolphe',
      },
      {
        documentId: 'affiche-deconnexion',
        label: 'Affiche — Ordinateurs partagés',
      },
    ],
    requiredEvidenceIds: [
      'temoignage-marine',
      'brouillon-message',
      'historique-poste-12',
    ],
    supportingEvidenceIds: ['boite-reception-secretariat', 'temoignage-mathias'],
    minSelectedEvidenceCount: 3,
    maxSelectedEvidenceCount: 3,
    hypothesisFailureFeedback:
      "Cette hypothèse va trop loin par rapport aux preuves disponibles. Les documents ne montrent pas une suppression volontaire.",
    evidenceFailureFeedback:
      "Cette explication est plausible, mais les pièces choisies ne suffisent pas encore. Cherchez ce qui relie la déclaration de Marine, le brouillon et la trace du poste.",
    successFeedback:
      "Votre explication est cohérente. Les éléments réunis suggèrent que le message a été préparé, mais qu'il n'a pas été envoyé correctement. Cela ne prouve pas une action volontaire contre Marine.",
    finalNarrative:
      "Avec ces éléments, Delphine et M. Rodolphe aident Marine à renvoyer le message correctement avec la pièce jointe. La demande est finalement prise en compte. L'enquête se termine simplement : sur un ordinateur partagé, il faut toujours vérifier l'adresse, la pièce jointe et la confirmation d'envoi.",
  },
};
