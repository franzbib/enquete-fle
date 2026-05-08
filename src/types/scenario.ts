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
  evidence: EvidenceText[];
  inventoryObjects?: InventoryObject[];
  puzzles?: Puzzle[];
  finalResolution?: FinalResolution;
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
  presentCharacterIds: string[];
  relatedCharacterIds?: string[];
  objectIds?: string[];
};

export type Character = {
  id: string;
  name: string;
  role: string;
  profile: string;
  directSpeech: string;
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
  initiallyAvailable: boolean;
  unlocksAfterPuzzleId?: string;
  relatedLocationIds: string[];
  relatedCharacterIds: string[];
  evidenceIds?: string[];
};

export type EvidenceText = {
  id: string;
  label: string;
  text: string;
  documentId: string;
};

export type InventoryObject = {
  id: string;
  name: string;
  objectType: 'access' | 'evidence' | 'ambient' | 'preparatory';
  description: string;
  originLocationId?: string;
  initiallyVisible?: boolean;
  initiallyOwned?: boolean;
  unlocksLocationIds?: string[];
  unlocksDocumentIds?: string[];
  isUseful?: boolean;
  useLabel?: string;
  usedLabel?: string;
};

export type Puzzle = {
  id: string;
  title: string;
  puzzleType: 'ordering' | 'contradiction' | 'unlock' | 'matching' | 'final-accusation';
  description: string;
  prompt: string;
  requiredDocumentIds?: string[];
  requiredObjectIds?: string[];
  hintIds?: string[];
  hints?: string[];
  answer: PuzzleAnswer;
  successFeedback: string;
  failureFeedback: string;
  unlocksDocumentIds?: string[];
};

export type PuzzleAnswer =
  | {
      kind: 'ordered-events';
      events: PuzzleEvent[];
      correctOrder: string[];
    }
  | {
      kind: 'single-choice';
      options: PuzzleOption[];
      correctOptionId: string;
    }
  | {
      kind: 'case-file-contradiction';
      caseFileItems: CaseFileItem[];
      correctEvidenceIds: string[];
      selectionSuccessFeedback: string;
      selectionFailureFeedback: string;
      interpretationPrompt: string;
      interpretationOptions: PuzzleOption[];
      correctInterpretationOptionId: string;
    };

export type PuzzleOption = {
  id: string;
  label: string;
  explanation?: string;
};

export type CaseFileItem = {
  documentId: string;
  label: string;
};

export type PuzzleEvent = {
  id: string;
  label: string;
};

export type FinalResolution = {
  id: string;
  title: string;
  description: string;
  prompt: string;
  requiredPuzzleIds?: string[];
  requiredDocumentIds?: string[];
  hypotheses: PuzzleOption[];
  correctHypothesisId: string;
  evidencePrompt: string;
  evidenceItems: CaseFileItem[];
  requiredEvidenceIds: string[];
  supportingEvidenceIds?: string[];
  minSelectedEvidenceCount: number;
  maxSelectedEvidenceCount: number;
  hypothesisFailureFeedback: string;
  evidenceFailureFeedback: string;
  successFeedback: string;
  finalNarrative: string;
};

export type Hint = {
  id: string;
  level: 1 | 2 | 3;
  text: string;
};
