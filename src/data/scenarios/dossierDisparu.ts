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
      "Consultez les premiers lieux, personnages et documents pour préparer la reconstitution des faits. À ce stade, aucune accusation finale n'est encore disponible.",
  },
  locations: [
    {
      id: 'secretariat',
      name: 'Secrétariat',
      kind: 'main',
      description:
        "Le bureau où le dossier de candidature devait rester jusqu'à son envoi. C'est le point de départ de l'enquête.",
      role: 'Introduire les horaires, le cadre administratif et les premières traces.',
      available: true,
      documentIds: ['planning-secretariat', 'mail-convocation'],
      characterIds: ['madame-delorme', 'chen'],
      objectIds: ['badge-visiteur'],
    },
    {
      id: 'couloir',
      name: 'Couloir',
      kind: 'transition',
      description:
        'Un espace de passage entre le secrétariat, les salles de cours et la salle informatique.',
      role: 'Faire apparaître une contradiction et élargir la liste des témoins.',
      available: true,
      documentIds: ['note-manuscrite', 'temoignage-xiaoyu'],
      characterIds: ['xiaoyu'],
    },
    {
      id: 'salle-informatique',
      name: 'Salle informatique',
      kind: 'locked',
      description:
        "Une salle utilisée pour imprimer et modifier des documents administratifs. Dans une version future, son accès pourra dépendre d'un objet.",
      role: "Préparer l'affichage d'un lieu verrouillable sans créer encore de mécanique d'objet.",
      available: true,
      documentIds: ['historique-impression', 'brouillon-mail'],
      characterIds: ['monsieur-armand', 'fahad'],
    },
  ],
  characters: [
    {
      id: 'chen',
      name: 'Chen',
      role: 'Étudiante concernée par le dossier',
      profile:
        "Sérieuse et inquiète, elle devait envoyer son dossier avant 18h00.",
      testimony:
        "Elle affirme avoir vérifié les pièces du dossier en début d'après-midi, puis être revenue au secrétariat peu avant la fermeture.",
      reliability: 'partial',
      relatedLocationIds: ['secretariat'],
    },
    {
      id: 'fahad',
      name: 'Fahad',
      role: 'Étudiant passé au secrétariat',
      profile:
        'Pressé et confus, il dit être venu seulement pour demander une attestation.',
      testimony:
        "Il affirme qu'il n'est resté que deux minutes, mais plusieurs traces horaires devront être comparées plus tard.",
      reliability: 'questionable',
      relatedLocationIds: ['secretariat', 'salle-informatique'],
    },
    {
      id: 'xiaoyu',
      name: 'Xiaoyu',
      role: 'Témoin dans le couloir',
      profile:
        'Elle a vu plusieurs personnes passer, sans connaître toute la situation.',
      testimony:
        "Elle rapporte qu'un étudiant semblait hésiter entre le secrétariat et la salle informatique.",
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
        "Elle se souvient d'avoir préparé le dossier, mais elle a dû quitter le bureau quelques minutes.",
      reliability: 'stable',
      relatedLocationIds: ['secretariat'],
    },
    {
      id: 'monsieur-armand',
      name: 'Monsieur Armand',
      role: 'Enseignant',
      profile:
        'Il a utilisé la salle informatique et récupéré des documents pour un cours.',
      testimony:
        "Il dit ne pas avoir touché au dossier, mais son passage explique certaines impressions.",
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
      summary: 'Horaires de passage et fermeture prévue.',
      content:
        '16h00 : rendez-vous administratif. 16h20 : passage de Fahad. 16h35 : interruption au bureau. 17h00 : fermeture prévue.',
      relatedLocationIds: ['secretariat'],
      relatedCharacterIds: ['fahad', 'madame-delorme'],
    },
    {
      id: 'mail-convocation',
      title: 'Mail de convocation',
      documentType: 'email',
      source: 'Service universitaire',
      summary: "Rappel de l'échéance et des pièces attendues.",
      content:
        "Le dossier complet doit être envoyé avant 18h00. Il doit contenir le formulaire signé, l'attestation de niveau, le justificatif d'identité, le relevé traduit et la lettre de motivation.",
      relatedLocationIds: ['secretariat'],
      relatedCharacterIds: ['chen'],
    },
    {
      id: 'temoignage-xiaoyu',
      title: 'Témoignage de Xiaoyu',
      documentType: 'testimony',
      source: 'Couloir',
      summary: 'Témoignage indirect sur les passages observés.',
      content:
        "Xiaoyu explique qu'elle a vu quelqu'un sortir du secrétariat avec une pochette claire, puis se diriger vers la salle informatique.",
      relatedLocationIds: ['couloir'],
      relatedCharacterIds: ['xiaoyu', 'fahad'],
    },
    {
      id: 'note-manuscrite',
      title: 'Note manuscrite',
      documentType: 'note',
      source: 'Couloir',
      summary: 'Note courte mentionnant un dossier à vérifier.',
      content:
        'Penser à vérifier le dossier avant envoi. Ne pas oublier la pièce jointe.',
      relatedLocationIds: ['couloir'],
      relatedCharacterIds: ['chen', 'madame-delorme'],
    },
    {
      id: 'historique-impression',
      title: "Historique d'impression",
      documentType: 'technical-log',
      source: 'Salle informatique',
      summary: "Trace d'une impression en fin d'après-midi.",
      content:
        '16h42 : impression attestation_fahad.pdf. 16h48 : impression formulaire_candidature.pdf.',
      relatedLocationIds: ['salle-informatique'],
      relatedCharacterIds: ['fahad', 'monsieur-armand'],
    },
    {
      id: 'brouillon-mail',
      title: 'Brouillon de mail non envoyé',
      documentType: 'draft-email',
      source: 'Salle informatique',
      summary: "Message préparé mais jamais envoyé au secrétariat.",
      content:
        "Je crois que j'ai pris une pochette qui n'était pas la mienne. Je vais repasser dès que possible.",
      relatedLocationIds: ['salle-informatique'],
      relatedCharacterIds: ['fahad'],
    },
  ],
  inventoryObjects: [
    {
      id: 'badge-visiteur',
      name: 'Badge visiteur',
      objectType: 'access',
      description:
        "Objet préparatoire pour une version future. Il n'est pas encore affiché ni utilisable en V0.2.",
      originLocationId: 'secretariat',
    },
  ],
  puzzles: [
    {
      id: 'chronologie-initiale',
      title: 'Reconstituer la chronologie',
      puzzleType: 'ordering',
      description:
        "Énigme préparatoire pour la V0.3. Aucun moteur d'énigme n'est encore créé en V0.2.",
      requiredDocumentIds: ['planning-secretariat', 'temoignage-xiaoyu'],
    },
  ],
};
