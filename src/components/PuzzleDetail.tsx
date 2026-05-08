import { useState } from 'react';
import type { InvestigationDocument, Puzzle } from '../types/scenario';
import { IconPuzzleSolved } from './icons/StatusIcons';

type PuzzleDetailProps = {
  puzzle: Puzzle;
  requiredDocuments: InvestigationDocument[];
  isSolved: boolean;
  isAvailable: boolean;
  revealedHintCount: number;
  onRequestHint: (puzzle: Puzzle) => void;
  onSubmit: (puzzle: Puzzle, answer: string[]) => void;
};

export function PuzzleDetail({
  puzzle,
  requiredDocuments,
  isSolved,
  isAvailable,
  revealedHintCount,
  onRequestHint,
  onSubmit,
}: PuzzleDetailProps) {
  const [orderedAnswer, setOrderedAnswer] = useState<string[]>([]);
  const [selectedOptionId, setSelectedOptionId] = useState('');
  const [selectedEvidenceIds, setSelectedEvidenceIds] = useState<string[]>([]);
  const [evidenceSelectionValidated, setEvidenceSelectionValidated] =
    useState(false);
  const [interpretationOptionId, setInterpretationOptionId] = useState('');
  const [localFeedback, setLocalFeedback] = useState('');

  const answer = puzzle.answer;
  const hints = puzzle.hints ?? [];
  const visibleHints = hints.slice(0, revealedHintCount);
  const hasMoreHints = revealedHintCount < hints.length;

  return (
    <article className="case-panel case-panel-main case-panel-puzzle">
      <p className="eyebrow">
        Énigme
      </p>
      <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-950">{puzzle.title}</h2>
          <p className="body-copy mt-2">{puzzle.description}</p>
        </div>
        <span
          className={`status-pill flex items-center gap-1.5 ${
            isSolved
              ? 'status-pill-valid'
              : isAvailable
                ? 'status-pill-ready'
                : 'status-pill-locked'
          }`}
        >
          {isSolved && <IconPuzzleSolved className="h-3.5 w-3.5" />}
          {isSolved ? 'Validée' : isAvailable ? 'À résoudre' : 'À débloquer'}
        </span>
      </div>

      <p className="info-strip mt-5 leading-7 text-slate-800">
        {puzzle.prompt}
      </p>

      {hints.length > 0 ? (
        <section className="hint-panel mt-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="font-semibold text-amber-950">Indices</h3>
              <p className="mt-1 text-sm leading-6 text-amber-900">
                Les indices apparaissent progressivement. Ils aident à relire et
                comparer sans donner toute la réponse.
              </p>
            </div>
            <button
              className="secondary-button border-amber-700 text-sm text-amber-950 hover:bg-amber-100 disabled:border-amber-200 disabled:bg-amber-100 disabled:text-amber-700"
              type="button"
              disabled={!isAvailable || isSolved || !hasMoreHints}
              onClick={() => onRequestHint(puzzle)}
            >
              {hasMoreHints
                ? revealedHintCount === 0
                  ? 'Voir un indice'
                  : 'Voir un autre indice'
                : 'Tous les indices sont affichés'}
            </button>
          </div>

          {visibleHints.length > 0 ? (
            <ol className="mt-3 grid gap-2 text-sm leading-6 text-amber-950">
              {visibleHints.map((hint, index) => (
                <li key={`${puzzle.id}-hint-${index}`} className="choice-card bg-white">
                  <span className="font-semibold">Indice {index + 1} : </span>
                  {hint}
                </li>
              ))}
            </ol>
          ) : null}

          {!hasMoreHints && visibleHints.length > 0 ? (
            <p className="mt-3 text-sm font-semibold text-amber-900">
              Tous les indices disponibles sont affichés.
            </p>
          ) : null}
        </section>
      ) : null}

      {answer.kind !== 'case-file-contradiction' ? (
        <div className="mt-5">
          <h3 className="font-semibold text-slate-950">Documents à comparer</h3>
          <ul className="mt-2 list-inside list-disc text-sm leading-6 text-slate-700">
            {requiredDocuments.map((document) => (
              <li key={document.id}>{document.title}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {answer.kind === 'ordered-events' ? (
        <div className="mt-5 grid gap-3">
          {[0, 1, 2].map((position) => (
            <label className="text-sm font-semibold text-slate-800" key={position}>
              Étape {position + 1}
              <select
                className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900"
                disabled={!isAvailable || isSolved}
                value={orderedAnswer[position] ?? ''}
                onChange={(event) => {
                  const nextAnswer = [...orderedAnswer];
                  nextAnswer[position] = event.target.value;
                  setOrderedAnswer(nextAnswer);
                }}
              >
                <option value="">Choisir un événement</option>
                {answer.events.map((event) => (
                  <option key={event.id} value={event.id}>
                    {event.label}
                  </option>
                ))}
              </select>
            </label>
          ))}
          <button
            className="primary-button mt-2 text-sm disabled:bg-slate-300 disabled:text-slate-600"
            type="button"
            disabled={!isAvailable || isSolved || orderedAnswer.length < 3}
            onClick={() => onSubmit(puzzle, orderedAnswer)}
          >
            Valider la chronologie
          </button>
        </div>
      ) : null}

      {answer.kind === 'single-choice' ? (
        <div className="mt-5 flex flex-col gap-3">
          {answer.options.map((option) => (
            <label
              className="choice-card text-sm"
              key={option.id}
            >
              <input
                className="mr-2"
                disabled={!isAvailable || isSolved}
                type="radio"
                name={puzzle.id}
                value={option.id}
                checked={selectedOptionId === option.id}
                onChange={(event) => setSelectedOptionId(event.target.value)}
              />
              {option.label}
            </label>
          ))}
          <button
            className="primary-button mt-2 text-sm disabled:bg-slate-300 disabled:text-slate-600"
            type="button"
            disabled={!isAvailable || isSolved || !selectedOptionId}
            onClick={() => onSubmit(puzzle, [selectedOptionId])}
          >
            Vérifier la contradiction
          </button>
        </div>
      ) : null}

      {answer.kind === 'case-file-contradiction' ? (
        <div className="mt-5 grid gap-5">
          <div>
            <h3 className="font-semibold text-slate-950">Pièces du dossier</h3>
            <div className="mt-3 grid gap-2">
              {answer.caseFileItems.map((item) => {
                const checked = selectedEvidenceIds.includes(item.documentId);
                return (
                  <label
                    className="choice-card text-sm"
                    key={item.documentId}
                  >
                    <input
                      className="mr-2"
                      disabled={
                        !isAvailable ||
                        isSolved ||
                        evidenceSelectionValidated ||
                        (!checked &&
                          selectedEvidenceIds.length >=
                            answer.correctEvidenceIds.length)
                      }
                      type="checkbox"
                      value={item.documentId}
                      checked={checked}
                      onChange={(event) => {
                        if (event.target.checked) {
                          setSelectedEvidenceIds((currentIds) => [
                            ...currentIds,
                            item.documentId,
                          ]);
                          return;
                        }

                        setSelectedEvidenceIds((currentIds) =>
                          currentIds.filter((id) => id !== item.documentId),
                        );
                      }}
                    />
                    {item.label}
                  </label>
                );
              })}
            </div>
            <button
              className="primary-button mt-3 text-sm disabled:bg-slate-300 disabled:text-slate-600"
              type="button"
              disabled={
                !isAvailable ||
                isSolved ||
                evidenceSelectionValidated ||
                selectedEvidenceIds.length !== answer.correctEvidenceIds.length
              }
              onClick={() => {
                const hasCorrectEvidence =
                  selectedEvidenceIds.length === answer.correctEvidenceIds.length &&
                  answer.correctEvidenceIds.every((documentId) =>
                    selectedEvidenceIds.includes(documentId),
                  );

                if (!hasCorrectEvidence) {
                  setLocalFeedback(answer.selectionFailureFeedback);
                  return;
                }

                setEvidenceSelectionValidated(true);
                setLocalFeedback(answer.selectionSuccessFeedback);
              }}
            >
              Valider les deux pièces
            </button>
          </div>

          {localFeedback ? (
            <p className="info-strip text-sm leading-6">
              {localFeedback}
            </p>
          ) : null}

          {evidenceSelectionValidated ? (
            <div className="grid gap-3">
              <p className="font-semibold text-slate-950">
                {answer.interpretationPrompt}
              </p>
              {answer.interpretationOptions.map((option) => (
                <label
                  className="choice-card text-sm"
                  key={option.id}
                >
                  <input
                    className="mr-2"
                    disabled={!isAvailable || isSolved}
                    type="radio"
                    name={`${puzzle.id}-interpretation`}
                    value={option.id}
                    checked={interpretationOptionId === option.id}
                    onChange={(event) =>
                      setInterpretationOptionId(event.target.value)
                    }
                  />
                  {option.label}
                </label>
              ))}
              <button
                className="primary-button mt-2 text-sm disabled:bg-slate-300 disabled:text-slate-600"
                type="button"
                disabled={!isAvailable || isSolved || !interpretationOptionId}
                onClick={() =>
                  onSubmit(puzzle, [
                    ...selectedEvidenceIds,
                    interpretationOptionId,
                  ])
                }
              >
                Valider l'interprétation
              </button>
            </div>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
