import { useMemo, useState } from 'react';
import {
  findCharacter,
  findDocument,
  findLocation,
} from '../engine/scenarioLoader';
import type { Puzzle, Scenario } from '../types/scenario';
import { CharacterDetail } from './CharacterDetail';
import { DocumentDetail } from './DocumentDetail';
import { LocationDetail } from './LocationDetail';
import { PuzzleDetail } from './PuzzleDetail';
import { ScenarioList } from './ScenarioList';

type Selection =
  | { type: 'location'; id: string }
  | { type: 'character'; id: string }
  | { type: 'document'; id: string }
  | { type: 'puzzle'; id: string };

type InvestigationPageProps = {
  scenario: Scenario;
  onBackBriefing: () => void;
  onBackHome: () => void;
};

export function InvestigationPage({
  scenario,
  onBackBriefing,
  onBackHome,
}: InvestigationPageProps) {
  const firstLocationId = scenario.locations[0]?.id ?? '';
  const [selection, setSelection] = useState<Selection>({
    type: 'location',
    id: firstLocationId,
  });
  const [solvedPuzzleIds, setSolvedPuzzleIds] = useState<string[]>([]);
  const [unlockedDocumentIds, setUnlockedDocumentIds] = useState<string[]>([]);
  const [readDocumentIds, setReadDocumentIds] = useState<string[]>([]);
  const [feedback, setFeedback] = useState(
    'Consultez les documents disponibles, puis résolvez la chronologie.',
  );

  const selectedId = `${selection.type}:${selection.id}`;
  const puzzles = scenario.puzzles ?? [];
  const visibleDocuments = scenario.documents.filter(
    (document) =>
      document.initiallyAvailable || unlockedDocumentIds.includes(document.id),
  );
  const visibleDocumentIds = visibleDocuments.map((document) => document.id);

  function isPuzzleAvailable(puzzle: Puzzle) {
    return (puzzle.requiredDocumentIds ?? []).every((documentId) =>
      visibleDocumentIds.includes(documentId),
    );
  }

  function handleSelect(type: Selection['type'], id: string) {
    setSelection({ type, id } as Selection);
    if (type === 'document' && !readDocumentIds.includes(id)) {
      setReadDocumentIds((prev) => [...prev, id]);
    }
    // Auto-scroll vers le détail pour plus de fluidité
    setTimeout(() => {
      document.getElementById('detail-view')?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  }

  function handlePuzzleSubmit(puzzle: Puzzle, answer: string[]) {
    const expectedAnswer =
      puzzle.answer.kind === 'ordered-events'
        ? puzzle.answer.correctOrder
        : [puzzle.answer.correctOptionId];
    const isCorrect =
      answer.length === expectedAnswer.length &&
      answer.every((answerItem, index) => answerItem === expectedAnswer[index]);

    if (!isCorrect) {
      setFeedback(puzzle.failureFeedback);
      return;
    }

    setSolvedPuzzleIds((currentIds) =>
      currentIds.includes(puzzle.id) ? currentIds : [...currentIds, puzzle.id],
    );
    setUnlockedDocumentIds((currentIds) => {
      const nextIds = new Set(currentIds);

      for (const documentId of puzzle.unlocksDocumentIds ?? []) {
        nextIds.add(documentId);
      }

      return [...nextIds];
    });
    setFeedback(
      puzzle.unlocksDocumentIds?.length
        ? `${puzzle.successFeedback} Nouvelle piste débloquée.`
        : puzzle.successFeedback,
    );
  }

  const detail = useMemo(() => {
    if (selection.type === 'location') {
      const location = findLocation(scenario, selection.id);

      if (!location) {
        return null;
      }

      return (
        <LocationDetail
          location={location}
          documents={visibleDocuments.filter((document) =>
            location.documentIds.includes(document.id),
          )}
          presentCharacters={scenario.characters.filter((character) =>
            location.presentCharacterIds.includes(character.id),
          )}
          onSelectDocument={(id) => handleSelect('document', id)}
          onSelectCharacter={(id) => handleSelect('character', id)}
        />
      );
    }

    if (selection.type === 'character') {
      const character = findCharacter(scenario, selection.id);

      if (!character) {
        return null;
      }

      return (
        <CharacterDetail
          character={character}
          presentLocations={scenario.locations.filter((location) =>
            location.presentCharacterIds.includes(character.id),
          )}
          onSelectLocation={(id) => handleSelect('location', id)}
        />
      );
    }

    if (selection.type === 'document') {
      const document = findDocument(scenario, selection.id);

      if (!document || !visibleDocumentIds.includes(document.id)) {
        return null;
      }

      return (
        <DocumentDetail
          document={document}
          locations={scenario.locations.filter((location) =>
            document.relatedLocationIds.includes(location.id),
          )}
          characters={scenario.characters.filter((character) =>
            document.relatedCharacterIds.includes(character.id),
          )}
          onSelectLocation={(id) => handleSelect('location', id)}
          onSelectCharacter={(id) => handleSelect('character', id)}
        />
      );
    }

    const puzzle = puzzles.find((item) => item.id === selection.id);

    if (!puzzle) {
      return null;
    }

    return (
      <PuzzleDetail
        puzzle={puzzle}
        requiredDocuments={visibleDocuments.filter((document) =>
          (puzzle.requiredDocumentIds ?? []).includes(document.id),
        )}
        isSolved={solvedPuzzleIds.includes(puzzle.id)}
        isAvailable={isPuzzleAvailable(puzzle)}
        onSubmit={handlePuzzleSubmit}
      />
    );
  }, [puzzles, scenario, selection, solvedPuzzleIds, visibleDocumentIds, visibleDocuments]);

  return (
    <main className="min-h-screen bg-stone-100 px-6 py-8 text-slate-900">
      <div className="mx-auto max-w-7xl">
        <header className="border-b border-slate-300 pb-5">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-800">
            Enquête V0.3
          </p>
          <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-950">
                {scenario.title}
              </h1>
              <p className="mt-2 text-sm text-slate-700">
                {scenario.level} · {scenario.duration}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                className="rounded-md border border-slate-400 bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-teal-800 focus:ring-offset-2"
                type="button"
                onClick={onBackBriefing}
              >
                Briefing
              </button>
              <button
                className="rounded-md border border-slate-400 bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-teal-800 focus:ring-offset-2"
                type="button"
                onClick={onBackHome}
              >
                Accueil
              </button>
            </div>
          </div>
        </header>

        <div
          key={visibleDocuments.length + readDocumentIds.length + solvedPuzzleIds.length}
          className="mt-4 rounded-md border-l-4 border-amber-500 bg-amber-50 p-4 animate-highlight"
        >
          <h2 className="text-sm font-bold text-amber-900">Que faire maintenant ?</h2>
          <p className="mt-1 text-sm text-amber-800">
            {visibleDocuments.length === 0
              ? "Commencez par explorer les Lieux ou interroger les Personnages."
              : readDocumentIds.length < visibleDocuments.length
                ? "Vous avez de nouveaux documents. Lisez-les attentivement."
                : solvedPuzzleIds.length < puzzles.length
                  ? "Vous avez lu tous les documents. Essayez de résoudre une énigme disponible."
                  : "Félicitations, vous avez terminé cette première enquête !"}
          </p>
        </div>

        <section className="mt-6 grid gap-4 rounded-md border border-slate-300 bg-white p-4 sm:grid-cols-3">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-800">
              Progression
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">{feedback}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-950">Énigmes validées</p>
            <p className="mt-2 text-sm text-slate-700">
              {solvedPuzzleIds.length} / {puzzles.length}
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-950">
              Documents disponibles
            </p>
            <p className="mt-2 text-sm text-slate-700">
              {visibleDocuments.length} / {scenario.documents.length}
            </p>
          </div>
        </section>

        <section className="mt-6 rounded-md border border-slate-300 bg-white p-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-800">
            Tableau d'enquête - Déductions
          </h2>
          <div className="mt-4 flex flex-wrap gap-4">
            {puzzles.map((puzzle) => {
              const isSelected = selectedId === `puzzle:${puzzle.id}`;
              const solved = solvedPuzzleIds.includes(puzzle.id);
              const available = isPuzzleAvailable(puzzle);
              return (
                <button
                  key={puzzle.id}
                  type="button"
                  onClick={() => handleSelect('puzzle', puzzle.id)}
                  className={`rounded-md border px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                    isSelected
                      ? 'border-teal-800 bg-teal-50 text-teal-950'
                      : solved
                        ? 'border-green-600 bg-green-50 text-green-900'
                        : available
                          ? 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50'
                          : 'border-slate-200 bg-slate-50 text-slate-400 cursor-not-allowed'
                  }`}
                  disabled={!available}
                  title={!available ? 'Documents manquants' : ''}
                >
                  {puzzle.title} {solved ? '✓' : ''}
                </button>
              );
            })}
          </div>
        </section>

        <div className="mt-6 grid gap-6 lg:grid-cols-[20rem_1fr]">
          <aside className="flex flex-col gap-4">
            <ScenarioList
              title="Lieux"
              selectedId={selectedId}
              items={scenario.locations.map((location) => ({
                id: `location:${location.id}`,
                title: location.name,
                meta: location.available ? 'Disponible' : 'Verrouillé',
              }))}
              onSelect={(id) => handleSelect('location', id.replace('location:', ''))}
            />
          </aside>
          <section id="detail-view" key={selectedId} className="scroll-mt-6 animate-fade-in">{detail}</section>
        </div>
      </div>
    </main>
  );
}
