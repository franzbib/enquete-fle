import { useState } from 'react';
import type { InvestigationDocument, Puzzle } from '../types/scenario';

type PuzzleDetailProps = {
  puzzle: Puzzle;
  requiredDocuments: InvestigationDocument[];
  isSolved: boolean;
  isAvailable: boolean;
  onSubmit: (puzzle: Puzzle, answer: string[]) => void;
};

export function PuzzleDetail({
  puzzle,
  requiredDocuments,
  isSolved,
  isAvailable,
  onSubmit,
}: PuzzleDetailProps) {
  const [orderedAnswer, setOrderedAnswer] = useState<string[]>([]);
  const [selectedOptionId, setSelectedOptionId] = useState('');

  const answer = puzzle.answer;

  return (
    <article className="rounded-md border border-slate-300 bg-white p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-800">
        Énigme
      </p>
      <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-950">{puzzle.title}</h2>
          <p className="mt-2 leading-7 text-slate-700">{puzzle.description}</p>
        </div>
        <span
          className={`rounded-md px-3 py-1 text-sm font-semibold ${
            isSolved
              ? 'bg-teal-50 text-teal-900'
              : isAvailable
                ? 'bg-stone-100 text-slate-700'
                : 'bg-slate-100 text-slate-500'
          }`}
        >
          {isSolved ? 'Validée' : isAvailable ? 'À résoudre' : 'À débloquer'}
        </span>
      </div>

      <p className="mt-5 rounded-md bg-stone-100 p-4 leading-7 text-slate-800">
        {puzzle.prompt}
      </p>

      <div className="mt-5">
        <h3 className="font-semibold text-slate-950">Documents à comparer</h3>
        <ul className="mt-2 list-inside list-disc text-sm leading-6 text-slate-700">
          {requiredDocuments.map((document) => (
            <li key={document.id}>{document.title}</li>
          ))}
        </ul>
      </div>

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
            className="mt-2 rounded-md bg-teal-800 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-900 disabled:bg-slate-300 disabled:text-slate-600"
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
              className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800"
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
            className="mt-2 rounded-md bg-teal-800 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-900 disabled:bg-slate-300 disabled:text-slate-600"
            type="button"
            disabled={!isAvailable || isSolved || !selectedOptionId}
            onClick={() => onSubmit(puzzle, [selectedOptionId])}
          >
            Vérifier la contradiction
          </button>
        </div>
      ) : null}
    </article>
  );
}
