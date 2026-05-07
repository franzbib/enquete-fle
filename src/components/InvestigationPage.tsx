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
          characters={scenario.characters.filter((character) =>
            location.characterIds.includes(character.id),
          )}
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
          locations={scenario.locations.filter((location) =>
            character.relatedLocationIds.includes(location.id),
          )}
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
              onSelect={(id) =>
                setSelection({
                  type: 'location',
                  id: id.replace('location:', ''),
                })
              }
            />
            <ScenarioList
              title="Personnages"
              selectedId={selectedId}
              items={scenario.characters.map((character) => ({
                id: `character:${character.id}`,
                title: character.name,
                meta: character.role,
              }))}
              onSelect={(id) =>
                setSelection({
                  type: 'character',
                  id: id.replace('character:', ''),
                })
              }
            />
            <ScenarioList
              title="Documents"
              selectedId={selectedId}
              items={visibleDocuments.map((document) => ({
                id: `document:${document.id}`,
                title: document.title,
                meta: document.source,
              }))}
              onSelect={(id) =>
                setSelection({
                  type: 'document',
                  id: id.replace('document:', ''),
                })
              }
            />
            <ScenarioList
              title="Énigmes"
              selectedId={selectedId}
              items={puzzles.map((puzzle) => ({
                id: `puzzle:${puzzle.id}`,
                title: puzzle.title,
                meta: solvedPuzzleIds.includes(puzzle.id)
                  ? 'Validée'
                  : isPuzzleAvailable(puzzle)
                    ? 'Disponible'
                    : 'Documents manquants',
              }))}
              onSelect={(id) =>
                setSelection({
                  type: 'puzzle',
                  id: id.replace('puzzle:', ''),
                })
              }
            />
          </aside>
          <section>{detail}</section>
        </div>
      </div>
    </main>
  );
}
