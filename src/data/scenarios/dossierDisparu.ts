import type { Scenario } from '../../types/scenario';

export const dossierDisparuScenario: Scenario = {
  id: 'le-dossier-disparu',
  title: 'Le dossier disparu',
  subtitle: 'Première enquête prototype',
  level: 'B1+ / B2 léger',
  duration: 'Prototype 20 à 30 minutes',
  briefing: {
    summary:
      "Un dossier de candidature universitaire a disparu du secrétariat de l'ISPA avant une échéance importante.",
    context:
      "L'enquête se déroule à Amiens, dans un environnement de préparation universitaire pour étudiants internationaux. Plusieurs personnes sont passées près du secrétariat entre 16h00 et 17h00.",
    mission:
      "Consultez les lieux, les personnages et les documents disponibles. Reconstituez d'abord la chronologie, puis comparez les documents pour repérer une contradiction.",
  },
  locations: [
    {
      id: 'secretariat',
      name: 'Secrétariat',
      kind: 'main',
      description:
        "Le bureau où le dossier de Chen devait rester jusqu'à son envoi. On y trouve les premières traces administratives.",
      role: 'Établir les horaires de départ et comprendre l’enjeu du dossier.',
      available: true,
      documentIds: ['planning-secretariat', 'mail-convocation', 'temoignage-chen'],
      presentCharacterIds: ['delphine', 'chen'],
      objectIds: ['badge-visiteur'],
    },
    {
      id: 'couloir',
      name: 'Couloir',
      kind: 'transition',
      description:
        'Un passage entre le secrétariat et la salle informatique. Plusieurs témoins ont vu des allées et venues.',
      role: 'Comparer les déplacements et repérer ce qui ne colle pas dans la chronologie.',
      available: true,
      documentIds: ['temoignage-xiaoyu', 'note-manuscrite', 'temoignage-fahad'],
      presentCharacterIds: ['xiaoyu', 'fahad'],
      objectIds: ['ticket-bus'],
    },
    {
      id: 'salle-informatique',
      name: 'Salle informatique',
      kind: 'locked',
      description:
        "Une salle utilisée pour imprimer des documents administratifs. L'accès est limité au début de l'enquête.",
      role: "Utiliser un badge visiteur pour entrer, puis vérifier si quelqu'un est resté plus longtemps qu'il ne le dit.",
      available: false,
      documentIds: ['historique-impression', 'brouillon-mail'],
      presentCharacterIds: ['monsieur-armand'],
      relatedCharacterIds: ['fahad'],
      objectIds: ['cle-usb-exercices-b1'],
    },
  ],
  characters: [
    {
      id: 'chen',
      name: 'Chen',
      role: 'Étudiante concernée par le dossier',
      profile:
        'Sérieuse et inquiète, elle devait envoyer son dossier avant 18h00.',
      directSpeech:
        "J'ai vérifié mon dossier à 16h10. Quand je suis revenue vers 16h50, il n'était plus sur le bureau.",
      testimony:
        "Elle dit avoir vérifié son dossier à 16h10, puis être revenue vers 16h50. Le dossier n'était plus sur le bureau.",
      reliability: 'partial',
      relatedLocationIds: ['secretariat'],
    },
    {
      id: 'fahad',
      name: 'Fahad',
      role: 'Étudiant passé au secrétariat',
      profile:
        'Pressé et un peu confus, il dit être venu chercher une attestation.',
      directSpeech:
        "Je suis passé au secrétariat vers 16h30 pour demander une attestation. Delphine était occupée, alors j'ai attendu un peu dans le couloir. Ensuite, j'ai récupéré mon papier et je suis parti tout de suite après.",
      testimony:
        "Il dit être passé au secrétariat vers 16h30 pour demander une attestation. Delphine était occupée, alors il a attendu un peu dans le couloir. Ensuite, il a récupéré son papier et il est parti tout de suite après.",
      reliability: 'questionable',
      relatedLocationIds: ['couloir', 'salle-informatique'],
    },
    {
      id: 'xiaoyu',
      name: 'Xiaoyu',
      role: 'Témoin dans le couloir',
      profile:
        'Elle a vu plusieurs personnes passer mais ne connaît pas le contenu des dossiers.',
      directSpeech:
        "J'ai vu Fahad attendre près du secrétariat. Il tenait une pochette ou quelques feuilles, je ne sais plus très bien. Il avait l'air pressé. Je n'ai pas vu exactement ce qu'il a pris.",
      testimony:
        "Elle a vu Fahad attendre près du secrétariat. Il tenait une pochette ou quelques feuilles, elle ne sait plus très bien. Il avait l'air pressé. Elle n'a pas vu exactement ce qu'il a pris.",
      reliability: 'partial',
      relatedLocationIds: ['couloir'],
    },
    {
      id: 'delphine',
      name: 'Delphine',
      role: 'Secrétariat / organisation administrative',
      profile:
        "Delphine travaille au secrétariat. Elle s'occupe de plus en plus de l'organisation administrative, notamment des emplois du temps et des examens.",
      directSpeech:
        "J'ai eu beaucoup de demandes cet après-midi. Entre les attestations, les inscriptions aux examens et les emplois du temps, plusieurs dossiers sont passés sur le comptoir. Je me souviens de Chen, parce que son dossier devait rester complet.",
      testimony:
        "Delphine explique qu'elle a reçu plusieurs demandes administratives dans l'après-midi. Elle précise que plusieurs dossiers sont passés sur le comptoir et que le dossier de Chen devait rester complet.",
      reliability: 'stable',
      relatedLocationIds: ['secretariat'],
    },
    {
      id: 'monsieur-armand',
      name: 'Monsieur Armand',
      role: 'Enseignant',
      profile:
        'Il a utilisé la salle informatique pour préparer un cours.',
      directSpeech:
        "Je suis passé rapidement en salle informatique. L'imprimante avait déjà été utilisée, mais je n'ai remarqué personne près du poste 03.",
      testimony:
        "Il est passé rapidement en salle informatique. L'imprimante avait déjà été utilisée, mais il n'a remarqué personne près du poste 03.",
      reliability: 'unknown',
      relatedLocationIds: ['salle-informatique'],
    },
  ],
  documents: [
    {
      id: 'planning-secretariat',
      title: 'Planning du secrétariat',
      documentType: 'planning',
      source: 'Secrétariat',
      summary: 'Horaires de passage utiles pour établir la chronologie.',
      content:
        '16h10 : Chen vérifie son dossier. 16h20 : Fahad demande une attestation. 16h35 : Delphine quitte le bureau pour répondre à un appel. 16h50 : Chen revient au secrétariat.',
      initiallyAvailable: true,
      relatedLocationIds: ['secretariat'],
      relatedCharacterIds: ['chen', 'fahad', 'delphine'],
      evidenceIds: ['ev-chen-1610', 'ev-fahad-1620', 'ev-delphine-1635'],
    },
    {
      id: 'mail-convocation',
      title: 'Mail de convocation',
      documentType: 'email',
      source: 'Service universitaire',
      summary: "Rappel de l'échéance et des pièces attendues.",
      content:
        "Le dossier complet doit être envoyé avant 18h00. Il doit contenir le formulaire signé, l'attestation de niveau, le justificatif d'identité, le relevé traduit et la lettre de motivation.",
      initiallyAvailable: true,
      relatedLocationIds: ['secretariat'],
      relatedCharacterIds: ['chen'],
    },
    {
      id: 'temoignage-chen',
      title: 'Témoignage de Chen',
      documentType: 'testimony',
      source: 'Secrétariat',
      summary: 'Chen explique quand elle a vu le dossier pour la dernière fois.',
      content:
        "Chen explique qu'à 16h10, elle a posé la pochette claire sur le bureau. Elle ajoute que, lorsqu'elle est revenue vers 16h50, Delphine cherchait déjà le dossier.",
      initiallyAvailable: true,
      relatedLocationIds: ['secretariat'],
      relatedCharacterIds: ['chen', 'delphine'],
      evidenceIds: ['ev-chen-1610'],
    },
    {
      id: 'temoignage-xiaoyu',
      title: 'Témoignage de Xiaoyu',
      documentType: 'testimony',
      source: 'Couloir',
      summary: 'Xiaoyu décrit un déplacement observé dans le couloir.',
      content:
        "Xiaoyu rapporte qu'elle a vu Fahad attendre près du secrétariat. Elle précise qu'il tenait une pochette ou quelques feuilles, sans être certaine. Elle indique qu'il avait l'air pressé et qu'elle n'a pas vu exactement ce qu'il a pris.",
      initiallyAvailable: true,
      relatedLocationIds: ['couloir'],
      relatedCharacterIds: ['xiaoyu', 'fahad'],
      evidenceIds: ['ev-xiaoyu-1630'],
    },
    {
      id: 'note-manuscrite',
      title: 'Note manuscrite',
      documentType: 'note',
      source: 'Couloir',
      summary: 'Note courte retrouvée près de la porte du secrétariat.',
      content:
        'À vérifier demain matin : dossier Chen ; attestation Fahad ; documents récupérés après 16h30.',
      initiallyAvailable: true,
      relatedLocationIds: ['couloir'],
      relatedCharacterIds: ['chen', 'delphine'],
    },
    {
      id: 'temoignage-fahad',
      title: 'Témoignage de Fahad',
      documentType: 'testimony',
      source: 'Couloir',
      summary: 'Un élément ne correspond pas dans la chronologie.',
      content:
        "Fahad explique qu'il est passé au secrétariat vers 16h30 pour demander une attestation. Il précise que Delphine était occupée et qu'il a attendu un peu dans le couloir. Il affirme ensuite avoir récupéré son papier et être parti tout de suite après.",
      initiallyAvailable: true,
      relatedLocationIds: ['couloir'],
      relatedCharacterIds: ['fahad'],
      evidenceIds: ['ev-fahad-claim'],
    },
    {
      id: 'historique-impression',
      title: "Historique d'impression",
      documentType: 'technical-log',
      source: 'Salle informatique',
      summary: "Trace horaire débloquée après la chronologie.",
      content:
        '16h48 — poste 03 — session : Fahad — impression : attestation_scolarite.pdf.',
      initiallyAvailable: false,
      unlocksAfterPuzzleId: 'chronologie-initiale',
      relatedLocationIds: ['salle-informatique'],
      relatedCharacterIds: ['fahad'],
      evidenceIds: ['ev-impression-1648'],
    },
    {
      id: 'brouillon-mail',
      title: 'Brouillon de mail non envoyé',
      documentType: 'draft-email',
      source: 'Salle informatique',
      summary: 'Nouvelle piste débloquée après la contradiction.',
      content:
        "Bonjour Delphine,\n\nJe crois qu'il y a eu une confusion avec les documents récupérés cet après-midi. Je ne suis pas certain d'avoir le bon formulaire avec moi. Je repasse demain matin pour vérifier avec vous.\n\nFahad",
      initiallyAvailable: false,
      unlocksAfterPuzzleId: 'contradiction-fahad',
      relatedLocationIds: ['salle-informatique'],
      relatedCharacterIds: ['fahad'],
      evidenceIds: ['ev-brouillon-confusion'],
    },
  ],
  evidence: [
    {
      id: 'ev-chen-1610',
      label: 'Chen voit le dossier à 16h10',
      text: 'Chen vérifie le dossier à 16h10.',
      documentId: 'planning-secretariat',
    },
    {
      id: 'ev-fahad-1620',
      label: 'Fahad passe à 16h20',
      text: 'Fahad demande une attestation à 16h20.',
      documentId: 'planning-secretariat',
    },
    {
      id: 'ev-delphine-1635',
      label: 'Le bureau est interrompu à 16h35',
      text: 'Delphine quitte le bureau à 16h35.',
      documentId: 'planning-secretariat',
    },
    {
      id: 'ev-xiaoyu-1630',
      label: 'Xiaoyu voit Fahad vers 16h30',
      text: 'Xiaoyu voit Fahad avec une pochette ou quelques feuilles vers 16h30.',
      documentId: 'temoignage-xiaoyu',
    },
    {
      id: 'ev-fahad-claim',
      label: 'Fahad dit être parti tout de suite',
      text: 'Fahad affirme être parti tout de suite après son passage au secrétariat.',
      documentId: 'temoignage-fahad',
    },
    {
      id: 'ev-impression-1648',
      label: 'Session Fahad active à 16h48',
      text: 'La session de Fahad imprime attestation_scolarite.pdf au poste 03 à 16h48.',
      documentId: 'historique-impression',
    },
    {
      id: 'ev-brouillon-confusion',
      label: 'Brouillon de mail non envoyé',
      text: "Fahad signale une possible confusion avec des documents récupérés dans l'après-midi.",
      documentId: 'brouillon-mail',
    },
  ],
  inventoryObjects: [
    {
      id: 'badge-visiteur',
      name: 'Badge visiteur',
      objectType: 'access',
      description:
        "Un badge visiteur oublié sur le comptoir du secrétariat. Il permet d'accéder provisoirement à certaines salles réservées au personnel ou aux étudiants autorisés.",
      originLocationId: 'secretariat',
      initiallyVisible: true,
      initiallyOwned: false,
      unlocksLocationIds: ['salle-informatique'],
      isUseful: true,
      useLabel: 'Utiliser pour entrer en salle informatique',
      usedLabel: 'Utilisé pour accéder à la salle informatique',
    },
    {
      id: 'ticket-bus',
      name: 'Ticket de bus',
      objectType: 'evidence',
      description:
        "Un ticket de bus froissé. L'heure imprimée pourrait aider à vérifier un déplacement, mais il ne suffit pas à lui seul à résoudre l'enquête.",
      originLocationId: 'couloir',
      initiallyVisible: true,
      initiallyOwned: false,
      isUseful: false,
    },
    {
      id: 'cle-usb-exercices-b1',
      name: 'Clé USB "Exercices B1"',
      objectType: 'ambient',
      description:
        "Une clé USB oubliée près d'un ordinateur. Elle contient des fichiers de cours et quelques exercices de grammaire. Rien ne semble directement lié au dossier disparu.",
      originLocationId: 'salle-informatique',
      initiallyVisible: true,
      initiallyOwned: false,
      isUseful: false,
    },
  ],
  puzzles: [
    {
      id: 'chronologie-initiale',
      title: 'Reconstituer la chronologie',
      puzzleType: 'ordering',
      description:
        'Remettez trois événements dans l’ordre pour comprendre où chercher ensuite.',
      prompt:
        'Quel ordre rend les documents cohérents entre 16h10 et 16h35 ?',
      requiredDocumentIds: [
        'planning-secretariat',
        'temoignage-chen',
        'temoignage-xiaoyu',
      ],
      hints: [
        'Commencez par repérer les heures et les expressions de temps dans les documents.',
        'Le planning donne deux repères sûrs : Chen vérifie son dossier avant le passage de Fahad.',
        "Relisez ensuite l'observation de Xiaoyu : elle se place après le passage de Fahad au secrétariat.",
      ],
      answer: {
        kind: 'ordered-events',
        events: [
          {
            id: 'chen-voit-dossier',
            label: 'Chen vérifie la pochette sur le bureau.',
          },
          {
            id: 'fahad-passe',
            label: 'Fahad passe au secrétariat pour son attestation.',
          },
          {
            id: 'xiaoyu-voit-pochette',
            label: 'Xiaoyu voit Fahad avec une pochette ou quelques feuilles.',
          },
        ],
        correctOrder: ['chen-voit-dossier', 'fahad-passe', 'xiaoyu-voit-pochette'],
      },
      successFeedback:
        "Chronologie validée. Certains éléments indiquent qu’il faut maintenant vérifier les accès aux salles et les traces laissées après le passage au secrétariat.",
      failureFeedback:
        'Cette réponse ne correspond pas aux horaires disponibles. Relisez le planning et le témoignage de Xiaoyu.',
      unlocksDocumentIds: ['historique-impression'],
    },
    {
      id: 'contradiction-fahad',
      title: 'Identifier la contradiction',
      puzzleType: 'contradiction',
      description:
        "Comparez deux pièces du dossier, puis interprétez prudemment ce qu'elles montrent.",
      prompt:
        'Sélectionnez les deux pièces du dossier qui permettent de repérer une contradiction.',
      requiredDocumentIds: ['temoignage-fahad', 'historique-impression'],
      hints: [
        'Relisez ce que Fahad dit de son départ.',
        'Cherchez une trace qui indique une heure précise après son passage au secrétariat.',
        "Comparez ce que Fahad affirme avec une trace technique de la salle informatique.",
      ],
      answer: {
        kind: 'case-file-contradiction',
        caseFileItems: [
          {
            documentId: 'temoignage-fahad',
            label: 'Témoignage de Fahad',
          },
          {
            documentId: 'temoignage-xiaoyu',
            label: 'Témoignage de Xiaoyu',
          },
          {
            documentId: 'planning-secretariat',
            label: 'Planning du secrétariat',
          },
          {
            documentId: 'historique-impression',
            label: "Historique d'impression",
          },
          {
            documentId: 'note-manuscrite',
            label: 'Note manuscrite',
          },
        ],
        correctEvidenceIds: ['temoignage-fahad', 'historique-impression'],
        selectionSuccessFeedback:
          "Ces deux pièces peuvent être comparées : elles ne donnent pas exactement la même chronologie.",
        selectionFailureFeedback:
          'Ces deux pièces ne suffisent pas à établir une contradiction claire. Relisez les horaires et les déclarations.',
        interpretationPrompt: 'Que montre cette contradiction ?',
        interpretationOptions: [
          {
            id: 'fahad-encore-batiment',
            label:
              'Fahad était probablement encore dans le bâtiment après son passage au secrétariat.',
          },
          {
            id: 'fahad-a-vole-dossier',
            label: 'Fahad a forcément volé le dossier de Chen.',
          },
          {
            id: 'delphine-oublie-attestation',
            label: 'Delphine a oublié d’imprimer une attestation.',
          },
        ],
        correctInterpretationOptionId: 'fahad-encore-batiment',
      },
      successFeedback:
        "Oui. Contradiction repérée : Fahad affirme être parti tout de suite après son passage au secrétariat, mais l'historique d'impression indique qu'une session à son nom a imprimé un document à 16h48. Cela ne prouve pas qu'il a pris le dossier, mais cela montre que sa chronologie pose problème.",
      failureFeedback:
        "Cette interprétation va trop loin ou ne correspond pas aux pièces comparées. La trace technique indique surtout que la chronologie de Fahad pose problème.",
      unlocksDocumentIds: ['brouillon-mail'],
    },
  ],
};
