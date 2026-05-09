import type { Character, InvestigationDocument, Location, Puzzle } from '../types/scenario';
import { PuzzleDetail } from './PuzzleDetail';

type CharacterDetailProps = {
  character: Character;
  presentLocations: Location[];
  contextualPuzzles?: ContextualPuzzle[];
  onSelectLocation: (id: string) => void;
  onRequestHint?: (puzzle: Puzzle) => void;
  onSubmitPuzzle?: (puzzle: Puzzle, answer: string[]) => void;
};

type ContextualPuzzle = {
  puzzle: Puzzle;
  requiredDocuments: InvestigationDocument[];
  isSolved: boolean;
  isAvailable: boolean;
  revealedHintCount: number;
};

export function CharacterDetail({
  character,
  presentLocations,
  contextualPuzzles = [],
  onSelectLocation,
  onRequestHint,
  onSubmitPuzzle,
}: CharacterDetailProps) {
  return (
    <article className="case-panel case-panel-main case-panel-character">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="flex-shrink-0">
          {character.portraitUrl ? (
            <img
              src={character.portraitUrl}
              alt={`Portrait de ${character.name}`}
              className="h-28 w-28 sm:h-32 sm:w-32 rounded-md border border-slate-300 object-cover object-top shadow-sm"
            />
          ) : (
            <div className="flex h-28 w-28 sm:h-32 sm:w-32 items-center justify-center rounded-md border border-slate-300 bg-stone-100 shadow-sm">
              <span className="text-3xl sm:text-4xl font-bold text-slate-400">
                {character.name.charAt(0)}
              </span>
            </div>
          )}
        </div>
        <div>
          <p className="eyebrow">
            Personnage
          </p>
          <h2 className="mt-1 text-2xl font-bold text-slate-950">
            {character.name}
          </h2>
          <p className="mt-1 text-sm font-semibold text-slate-600">
            {character.role}
          </p>
        </div>
      </div>
      <p className="body-copy mt-6">{character.profile}</p>
      <blockquote className="speech-card mt-4">
        {character.directSpeech}
      </blockquote>
      {contextualPuzzles.length > 0 && onRequestHint && onSubmitPuzzle ? (
        <section className="mt-6 border-t border-slate-200 pt-5">
          <p className="eyebrow">Action possible</p>
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
      <div className="mt-6">
        <h3 className="font-semibold text-slate-950">Rencontré dans</h3>
        <ul className="mt-2 list-inside list-disc text-sm leading-6 text-slate-700">
          {presentLocations.map((location) => (
            <li key={location.id}>
              <button type="button" onClick={() => onSelectLocation(location.id)} className="link-button text-left">
                {location.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
