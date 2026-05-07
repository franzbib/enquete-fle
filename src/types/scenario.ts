export type Scenario = {
  id: string;
  title: string;
  subtitle?: string;
  level: string;
  duration: string;
  briefing: ScenarioBriefing;
  locations: Location[];
  characters: Character[];
  documents: InvestigationDocument[];
  inventoryObjects?: InventoryObject[];
  puzzles?: Puzzle[];
};

export type ScenarioBriefing = {
  summary: string;
  context: string;
  mission: string;
};

export type Location = {
  id: string;
  name: string;
  kind: 'main' | 'transition' | 'locked' | 'optional';
  description: string;
  role: string;
  available: boolean;
  documentIds: string[];
  characterIds: string[];
  objectIds?: string[];
};

export type Character = {
  id: string;
  name: string;
  role: string;
  profile: string;
  testimony: string;
  reliability: 'unknown' | 'partial' | 'stable' | 'questionable';
  relatedLocationIds: string[];
};

export type InvestigationDocument = {
  id: string;
  title: string;
  documentType:
    | 'email'
    | 'planning'
    | 'testimony'
    | 'note'
    | 'technical-log'
    | 'draft-email';
  source: string;
  summary: string;
  content: string;
  relatedLocationIds: string[];
  relatedCharacterIds: string[];
};

export type InventoryObject = {
  id: string;
  name: string;
  objectType: 'access' | 'proof' | 'interaction' | 'linguistic';
  description: string;
  originLocationId?: string;
};

export type Puzzle = {
  id: string;
  title: string;
  puzzleType: 'ordering' | 'contradiction' | 'unlock' | 'matching' | 'final-accusation';
  description: string;
  requiredDocumentIds?: string[];
  requiredObjectIds?: string[];
  hintIds?: string[];
};

export type Hint = {
  id: string;
  level: 1 | 2 | 3;
  text: string;
};
