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
      presentCharacterIds: ['madame-delorme', 'chen'],
      objectIds: ['badge-visiteur', 'pochette-claire'],
    },
    {
      id: 'couloir',
      name: 'Couloir',
      kind: 'transition',
      description:
        'Un passage entre le secrétariat et la salle informatique. Plusieurs témoins ont vu des allées et venues.',
      role: 'Comparer les déplacements et repérer ce qui ne colle pas dans la chronologie.',
      available: true,
      documentIds: ['temoignage-xiaoyu', 'note-manuscrite'],
      presentCharacterIds: ['xiaoyu', 'fahad'],
    },
    {
      id: 'salle-informatique',
      name: 'Salle informatique',
      kind: 'locked',
      description:
        "Une salle utilisée pour imprimer des documents administratifs. En V0.3, elle devient une piste débloquée par la chronologie.",
      role: "Vérifier si quelqu'un est resté plus longtemps qu'il ne le dit.",
      available: true,
      documentIds: ['historique-impression', 'temoignage-fahad', 'brouillon-mail'],
      presentCharacterIds: ['monsieur-armand'],
      relatedCharacterIds: ['fahad'],
    },
  ],
  characters: [
    {
      id: 'chen',
      name: 'Chen',
      role: 'Étudiante concernée par le dossier',
      profile:
        'Sérieuse et inquiète, elle devait envoyer son dossier avant 18h00.',
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
      testimony:
        "Il affirme être resté seulement deux minutes au secrétariat, puis être parti directement.",
      reliability: 'questionable',
      relatedLocationIds: ['couloir', 'salle-informatique'],
    },
    {
      id: 'xiaoyu',
      name: 'Xiaoyu',
      role: 'Témoin dans le couloir',
      profile:
        'Elle a vu plusieurs personnes passer mais ne connaît pas le contenu des dossiers.',
      testimony:
        "Elle a vu Fahad sortir du secrétariat avec une pochette claire, puis entrer dans la salle informatique.",
      reliability: 'partial',
      relatedLocationIds: ['couloir'],
    },
    {
      id: 'madame-delorme',
      name: 'Madame Delorme',
      role: 'Secrétaire',
      profile:
        'Professionnelle, elle affirme avoir laissé le dossier sur le bureau avant une interruption.',
      testimony:
        "Elle a préparé le dossier de Chen, puis elle a quitté le bureau quelques minutes après 16h30.",
      reliability: 'stable',
      relatedLocationIds: ['secretariat'],
    },
    {
      id: 'monsieur-armand',
      name: 'Monsieur Armand',
      role: 'Enseignant',
      profile:
        'Il a utilisé la salle informatique pour préparer un cours.',
      testimony:
        "Il dit avoir imprimé ses propres documents, mais il n'a pas vu qui a laissé la pochette près de l'imprimante.",
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
        '16h10 : Chen vérifie son dossier. 16h20 : Fahad demande une attestation. 16h35 : Madame Delorme quitte le bureau pour répondre à un appel. 16h50 : Chen revient au secrétariat.',
      initiallyAvailable: true,
      relatedLocationIds: ['secretariat'],
      relatedCharacterIds: ['chen', 'fahad', 'madame-delorme'],
      evidenceIds: ['ev-chen-1610', 'ev-fahad-1620', 'ev-delorme-1635'],
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
        "À 16h10, j'ai posé la pochette claire sur le bureau. Quand je suis revenue vers 16h50, Madame Delorme cherchait déjà le dossier.",
      initiallyAvailable: true,
      relatedLocationIds: ['secretariat'],
      relatedCharacterIds: ['chen', 'madame-delorme'],
      evidenceIds: ['ev-chen-1610'],
    },
    {
      id: 'temoignage-xiaoyu',
      title: 'Témoignage de Xiaoyu',
      documentType: 'testimony',
      source: 'Couloir',
      summary: 'Xiaoyu décrit un déplacement observé dans le couloir.',
      content:
        "Vers 16h30, j'ai vu Fahad sortir du secrétariat avec une pochette claire. Il hésitait, puis il est entré dans la salle informatique.",
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
        'Penser à vérifier la pochette claire avant envoi. Il manque peut-être une pièce.',
      initiallyAvailable: true,
      relatedLocationIds: ['couloir'],
      relatedCharacterIds: ['chen', 'madame-delorme'],
    },
    {
      id: 'temoignage-fahad',
      title: 'Témoignage de Fahad',
      documentType: 'testimony',
      source: 'Couloir',
      summary: 'Fahad minimise son passage au secrétariat.',
      content:
        "Je suis passé à 16h20. J'ai seulement demandé mon attestation et je suis reparti deux minutes plus tard. Je ne suis pas allé dans la salle informatique.",
      initiallyAvailable: true,
      relatedLocationIds: ['couloir', 'salle-informatique'],
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
        '16h42 : impression attestation_fahad.pdf. 16h48 : impression formulaire_candidature_chen.pdf.',
      initiallyAvailable: false,
      unlocksAfterPuzzleId: 'chronologie-initiale',
      relatedLocationIds: ['salle-informatique'],
      relatedCharacterIds: ['fahad', 'monsieur-armand', 'chen'],
      evidenceIds: ['ev-impression-1642', 'ev-impression-1648'],
    },
    {
      id: 'brouillon-mail',
      title: 'Brouillon de mail non envoyé',
      documentType: 'draft-email',
      source: 'Salle informatique',
      summary: 'Nouvelle piste débloquée après la contradiction.',
      content:
        "Je crois que j'ai pris une pochette qui n'était pas la mienne. Je vais repasser dès que possible.",
      initiallyAvailable: false,
      unlocksAfterPuzzleId: 'contradiction-fahad',
      relatedLocationIds: ['salle-informatique'],
      relatedCharacterIds: ['fahad'],
      evidenceIds: ['ev-brouillon-aveu'],
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
      id: 'ev-delorme-1635',
      label: 'Le bureau est interrompu à 16h35',
      text: 'Madame Delorme quitte le bureau à 16h35.',
      documentId: 'planning-secretariat',
    },
    {
      id: 'ev-xiaoyu-1630',
      label: 'Xiaoyu voit la pochette vers 16h30',
      text: 'Xiaoyu voit Fahad avec une pochette claire vers 16h30.',
      documentId: 'temoignage-xiaoyu',
    },
    {
      id: 'ev-fahad-claim',
      label: 'Fahad dit être parti après deux minutes',
      text: 'Fahad affirme être reparti vers 16h22 et ne pas être allé en salle informatique.',
      documentId: 'temoignage-fahad',
    },
    {
      id: 'ev-impression-1648',
      label: 'Impression liée à Chen à 16h48',
      text: 'Un formulaire de candidature de Chen est imprimé à 16h48.',
      documentId: 'historique-impression',
    },
    {
      id: 'ev-brouillon-aveu',
      label: 'Brouillon de Fahad',
      text: "Fahad écrit qu'il a peut-être pris une pochette qui n'était pas la sienne.",
      documentId: 'brouillon-mail',
    },
  ],
  inventoryObjects: [
    {
      id: 'badge-visiteur',
      name: 'Badge visiteur',
      objectType: 'access',
      description:
        "Objet préparatoire : il servira plus tard à gérer l'accès à la salle informatique.",
      originLocationId: 'secretariat',
    },
    {
      id: 'pochette-claire',
      name: 'Pochette claire',
      objectType: 'proof',
      description:
        "Objet préparatoire : la pochette permet de relier les témoignages au dossier disparu.",
      originLocationId: 'secretariat',
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
            label: 'Xiaoyu voit Fahad sortir avec une pochette claire.',
          },
        ],
        correctOrder: ['chen-voit-dossier', 'fahad-passe', 'xiaoyu-voit-pochette'],
      },
      successFeedback:
        'Chronologie validée. La salle informatique devient une piste prioritaire.',
      failureFeedback:
        'Cette réponse ne correspond pas aux horaires disponibles. Relisez le planning et le témoignage de Xiaoyu.',
      unlocksDocumentIds: ['historique-impression'],
    },
    {
      id: 'contradiction-fahad',
      title: 'Identifier la contradiction',
      puzzleType: 'contradiction',
      description:
        "Comparez ce que Fahad affirme avec une trace horaire de la salle informatique.",
      prompt: 'Quelle information contredit le témoignage de Fahad ?',
      requiredDocumentIds: ['temoignage-fahad', 'historique-impression'],
      answer: {
        kind: 'single-choice',
        correctOptionId: 'fahad-impression-1648',
        options: [
          {
            id: 'chen-mail-1800',
            label: "Le mail indique que Chen doit envoyer son dossier avant 18h00.",
          },
          {
            id: 'fahad-impression-1648',
            label:
              "L'historique montre une impression liée à Chen à 16h48, alors que Fahad dit être reparti vers 16h22.",
          },
          {
            id: 'delorme-appel',
            label: 'Madame Delorme quitte le bureau à cause d’un appel.',
          },
        ],
      },
      successFeedback:
        'Contradiction repérée. Une nouvelle piste est débloquée : le brouillon de mail non envoyé.',
      failureFeedback:
        'Cette réponse ne pointe pas la contradiction principale. Comparez la durée annoncée par Fahad avec l’historique d’impression.',
      unlocksDocumentIds: ['brouillon-mail'],
    },
  ],
};
