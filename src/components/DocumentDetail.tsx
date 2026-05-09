import type { InvestigationDocument, Puzzle } from '../types/scenario';
import { PuzzleDetail } from './PuzzleDetail';

type DocumentDetailProps = {
  document: InvestigationDocument;
  contextualPuzzles?: ContextualPuzzle[];
  onRequestHint?: (puzzle: Puzzle) => void;
  onSubmitPuzzle?: (puzzle: Puzzle, answer: string[]) => void;
};

export type ContextualPuzzle = {
  puzzle: Puzzle;
  requiredDocuments: InvestigationDocument[];
  isSolved: boolean;
  isAvailable: boolean;
  revealedHintCount: number;
};

export function DocumentDetail({
  document,
  contextualPuzzles = [],
  onRequestHint,
  onSubmitPuzzle,
}: DocumentDetailProps) {
  return (
    <article className="case-panel case-panel-main case-panel-document">
      <p className="eyebrow">
        Document
      </p>
      <h2 className="mt-2 text-2xl font-bold text-slate-950">
        {document.title}
      </h2>
      <p className="mt-2 text-sm font-semibold text-slate-600">
        {document.source}
      </p>
      <p className="body-copy mt-4">{document.summary}</p>
      <div className="document-paper mt-4">
        {document.content}
      </div>
      {contextualPuzzles.length > 0 && onRequestHint && onSubmitPuzzle ? (
        <section className="mt-6 border-t border-slate-200 pt-5">
          <p className="eyebrow">A verifier</p>
          <div className="mt-3 grid gap-4">
            {contextualPuzzles.map((contextualPuzzle) => (
              <PuzzleDetail
                key={contextualPuzzle.puzzle.id}
                puzzle={contextualPuzzle.puzzle}
                requiredDocuments={contextualPuzzle.requiredDocuments}
                isSolved={contextualPuzzle.isSolved}
                isAvailable={contextualPuzzle.isAvailable}
                revealedHintCount={contextualPuzzle.revealedHintCount}
                onRequestHint={onRequestHint}
                onSubmit={onSubmitPuzzle}
              />
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
