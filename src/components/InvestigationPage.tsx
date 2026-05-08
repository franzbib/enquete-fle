import { useMemo, useState } from 'react';
import {
  findCharacter,
  findDocument,
  findLocation,
} from '../engine/scenarioLoader';
import {
  loadScenarioProgressSlots,
  saveScenarioProgress,
  type ScenarioProgressSave,
  type ScenarioProgressSelection,
  type ScenarioProgressSlot,
  type ScenarioProgressSlotSummary,
} from '../engine/progressStorage';
import type { Puzzle, Scenario } from '../types/scenario';
import { CharacterDetail } from './CharacterDetail';
import { DocumentDetail } from './DocumentDetail';
import { FinalResolutionDetail } from './FinalResolutionDetail';
import { InventoryPanel } from './InventoryPanel';
import { LocationDetail } from './LocationDetail';
import { PuzzleDetail } from './PuzzleDetail';
import { ScenarioList } from './ScenarioList';
import { IconHintAvailable, IconLocked, IconPuzzleSolved, IconUnlocked } from './icons/StatusIcons';

type Selection = ScenarioProgressSelection;
type SaveLoadMode = 'save' | 'load' | null;

type InvestigationPageProps = {
  scenario: Scenario;
  onBackHome: () => void;
};

export function InvestigationPage({
  scenario,
  onBackHome,
}: InvestigationPageProps) {
  const firstLocationId = scenario.locations.find((l) => l.id === 'accueil')?.id ?? scenario.locations[0]?.id ?? '';
  const defaultSelection: Selection = {
    type: 'location',
    id: firstLocationId,
  };
  const [selection, setSelection] = useState<Selection>(
    () => defaultSelection,
  );
  const [solvedPuzzleIds, setSolvedPuzzleIds] = useState<string[]>(
    () => [],
  );
  const [unlockedDocumentIds, setUnlockedDocumentIds] = useState<string[]>(
    () => [],
  );
  const [readDocumentIds, setReadDocumentIds] = useState<string[]>(
    () => [],
  );
  const [ownedObjectIds, setOwnedObjectIds] = useState(
    () =>
      scenario.inventoryObjects
        ?.filter((object) => object.initiallyOwned)
        .map((object) => object.id) ?? [],
  );
  const [usedObjectIds, setUsedObjectIds] = useState<string[]>(
    () => [],
  );
  const [droppedObjectLocations, setDroppedObjectLocations] = useState<Record<string, string>>(
    () => ({}),
  );
  const [inventoryVisible, setInventoryVisible] = useState(
    () => true,
  );
  const [unlockedLocationIds, setUnlockedLocationIds] = useState<string[]>(
    () => [],
  );
  const [revealedHintCounts, setRevealedHintCounts] = useState<
    Record<string, number>
  >(() => ({}));
  const [finalResolutionSolved, setFinalResolutionSolved] = useState(
    () => false,
  );
  const [progressionVisible, setProgressionVisible] = useState(
    () => false,
  );
  const [missionVisible, setMissionVisible] = useState(
    () => false,
  );
  const [saveLoadMode, setSaveLoadMode] = useState<SaveLoadMode>(null);
  const [slotSummaries, setSlotSummaries] = useState<ScenarioProgressSlotSummary[]>(
    () => loadScenarioProgressSlots(scenario, defaultSelection),
  );
  const [feedback, setFeedback] = useState(
    "Commencez par observer les lieux de l’ISPA. L’accueil peut vous aider à vous repérer avant d’aller vérifier les documents administratifs.",
  );

  const selectedId = `${selection.type}:${selection.id}`;
  const puzzles = scenario.puzzles ?? [];
  const finalResolution = scenario.finalResolution;
  const inventoryObjects = scenario.inventoryObjects ?? [];
  const accessibleLocationIds = scenario.locations
    .filter(
      (location) =>
        location.available || unlockedLocationIds.includes(location.id),
    )
    .map((location) => location.id);
  const visibleDocuments = scenario.documents.filter(
    (document) =>
      (document.initiallyAvailable || unlockedDocumentIds.includes(document.id)) &&
      document.relatedLocationIds.some((locationId) =>
        accessibleLocationIds.includes(locationId),
      ),
  );
  const visibleDocumentIds = visibleDocuments.map((document) => document.id);
  const isFinalResolutionAvailable = finalResolution
    ? (finalResolution.requiredPuzzleIds ?? []).every((puzzleId) =>
        solvedPuzzleIds.includes(puzzleId),
      ) &&
      (finalResolution.requiredDocumentIds ?? []).every((documentId) =>
        visibleDocumentIds.includes(documentId),
      )
    : false;

  function refreshSlotSummaries() {
    setSlotSummaries(loadScenarioProgressSlots(scenario, defaultSelection));
  }

  function getInitialOwnedObjectIds() {
    return scenario.inventoryObjects
      ?.filter((object) => object.initiallyOwned)
      .map((object) => object.id) ?? [];
  }

  function createProgressSave(slot: ScenarioProgressSlot): ScenarioProgressSave {
    return {
      version: 1,
      scenarioId: scenario.id,
      slot,
      selection,
      solvedPuzzleIds,
      unlockedDocumentIds,
      readDocumentIds,
      ownedObjectIds,
      usedObjectIds,
      droppedObjectLocations,
      unlockedLocationIds,
      revealedHintCounts,
      finalResolutionSolved,
      inventoryVisible,
      progressionVisible,
      missionPanelVisible: missionVisible,
      savedAt: new Date().toISOString(),
    };
  }

  function applyProgressSave(save: ScenarioProgressSave) {
    setSelection(save.selection);
    setSolvedPuzzleIds(save.solvedPuzzleIds);
    setUnlockedDocumentIds(save.unlockedDocumentIds);
    setReadDocumentIds(save.readDocumentIds);
    setOwnedObjectIds(save.ownedObjectIds);
    setUsedObjectIds(save.usedObjectIds);
    setDroppedObjectLocations(save.droppedObjectLocations);
    setUnlockedLocationIds(save.unlockedLocationIds);
    setRevealedHintCounts(save.revealedHintCounts);
    setFinalResolutionSolved(save.finalResolutionSolved);
    setInventoryVisible(save.inventoryVisible);
    setProgressionVisible(save.progressionVisible);
    setMissionVisible(save.missionPanelVisible);
  }

  function handleSaveSlot(slot: ScenarioProgressSlot, existingSave: ScenarioProgressSave | null) {
    if (
      existingSave &&
      !window.confirm(`L'emplacement ${slot} contient déjà une sauvegarde. Voulez-vous l'écraser ?`)
    ) {
      return;
    }

    const saved = saveScenarioProgress(createProgressSave(slot));
    refreshSlotSummaries();
    setSaveLoadMode(null);
    setFeedback(
      saved
        ? `Progression sauvegardée dans l'emplacement ${slot}.`
        : "La sauvegarde locale n'est pas disponible dans ce navigateur.",
    );
  }

  function handleLoadSlot(save: ScenarioProgressSave | null, slot: ScenarioProgressSlot) {
    if (!save) {
      setFeedback(`L'emplacement ${slot} ne contient pas encore de sauvegarde.`);
      return;
    }

    applyProgressSave(save);
    refreshSlotSummaries();
    setSaveLoadMode(null);
    setFeedback(`Progression chargée depuis l'emplacement ${slot}.`);
  }

  function handleRestartInvestigation() {
    if (
      !window.confirm(
        "Recommencer l'enquête remet la progression actuelle à zéro. Les sauvegardes locales ne seront pas supprimées. Continuer ?",
      )
    ) {
      return;
    }

    setSelection(defaultSelection);
    setSolvedPuzzleIds([]);
    setUnlockedDocumentIds([]);
    setReadDocumentIds([]);
    setOwnedObjectIds(getInitialOwnedObjectIds());
    setUsedObjectIds([]);
    setDroppedObjectLocations({});
    setUnlockedLocationIds([]);
    setRevealedHintCounts({});
    setFinalResolutionSolved(false);
    setInventoryVisible(true);
    setProgressionVisible(true);
    setMissionVisible(false);
    setSaveLoadMode(null);
    refreshSlotSummaries();
    setFeedback("Enquête recommencée. La progression actuelle est remise à zéro.");
  }

  function formatSavedAt(save: ScenarioProgressSave | null) {
    if (!save) {
      return 'Vide';
    }

    const savedDate = new Date(save.savedAt);

    if (Number.isNaN(savedDate.getTime())) {
      return 'Sauvegarde disponible';
    }

    return `Sauvegarde du ${savedDate.toLocaleString('fr-FR', {
      dateStyle: 'short',
      timeStyle: 'short',
    })}`;
  }

  function isPuzzleAvailable(puzzle: Puzzle) {
    return (puzzle.requiredDocumentIds ?? []).every((documentId) =>
      visibleDocumentIds.includes(documentId),
    );
  }

  function handleSelect(type: Selection['type'], id: string) {
    if (type === 'location' && !accessibleLocationIds.includes(id)) {
      setFeedback(
        'Ce lieu est fermé. Il vous faut un objet pour y accéder.',
      );
    }

    setSelection({ type, id } as Selection);
    if (type === 'document' && !readDocumentIds.includes(id)) {
      setReadDocumentIds((prev) => [...prev, id]);
    }
    // Auto-scroll vers le détail pour plus de fluidité
    setTimeout(() => {
      document.getElementById('detail-view')?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  }

  function handleTakeObject(objectId: string) {
    const object = inventoryObjects.find((item) => item.id === objectId);

    if (!object || ownedObjectIds.includes(object.id)) {
      return;
    }

    setOwnedObjectIds((currentIds) => [...currentIds, object.id]);
    setFeedback(`${object.name} ajouté à l’inventaire.`);
  }

  function handleDropObject(objectId: string) {
    const object = inventoryObjects.find((item) => item.id === objectId);
    if (!object || !ownedObjectIds.includes(object.id) || usedObjectIds.includes(object.id)) {
      return;
    }

    setOwnedObjectIds((currentIds) => currentIds.filter((id) => id !== object.id));
    
    // Set the object's new location to the currently selected location, 
    // or fallback to its origin if not in a location view
    setDroppedObjectLocations((current) => ({
      ...current,
      [object.id]: selection.type === 'location' ? selection.id : (object.originLocationId ?? ''),
    }));
    
    setFeedback(`${object.name} reposé.`);
  }

  function handleUseObject(objectId: string) {
    const object = inventoryObjects.find((item) => item.id === objectId);

    if (!object || usedObjectIds.includes(object.id)) {
      return;
    }

    setUsedObjectIds((currentIds) => [...currentIds, object.id]);
    setUnlockedLocationIds((currentIds) => {
      const nextIds = new Set(currentIds);

      for (const locationId of object.unlocksLocationIds ?? []) {
        nextIds.add(locationId);
      }

      return [...nextIds];
    });
    setUnlockedDocumentIds((currentIds) => {
      const nextIds = new Set(currentIds);

      for (const documentId of object.unlocksDocumentIds ?? []) {
        nextIds.add(documentId);
      }

      return [...nextIds];
    });

    if (object.unlocksLocationIds?.includes('salle-informatique')) {
      setFeedback(
        'Vous avez utilisé le badge visiteur. La salle informatique est maintenant ouverte.',
      );
      return;
    }

    setFeedback(`${object.name} utilisé.`);
  }

  function handleRequestHint(puzzle: Puzzle) {
    const hintCount = puzzle.hints?.length ?? 0;

    if (hintCount === 0) {
      return;
    }

    setRevealedHintCounts((currentCounts) => ({
      ...currentCounts,
      [puzzle.id]: Math.min((currentCounts[puzzle.id] ?? 0) + 1, hintCount),
    }));
  }

  function handlePuzzleSubmit(puzzle: Puzzle, answer: string[]) {
    let isCorrect = false;

    if (puzzle.answer.kind === 'ordered-events') {
      const expectedAnswer = puzzle.answer.correctOrder;
      isCorrect =
        answer.length === expectedAnswer.length &&
        answer.every((answerItem, index) => answerItem === expectedAnswer[index]);
    }

    if (puzzle.answer.kind === 'single-choice') {
      isCorrect = answer.length === 1 && answer[0] === puzzle.answer.correctOptionId;
    }

    if (puzzle.answer.kind === 'case-file-contradiction') {
      const selectedEvidenceIds = answer.slice(0, -1);
      const selectedInterpretationId = answer.at(-1);
      const expectedEvidenceIds = puzzle.answer.correctEvidenceIds;
      const hasCorrectEvidence =
        selectedEvidenceIds.length === expectedEvidenceIds.length &&
        expectedEvidenceIds.every((evidenceId) =>
          selectedEvidenceIds.includes(evidenceId),
        );

      isCorrect =
        hasCorrectEvidence &&
        selectedInterpretationId === puzzle.answer.correctInterpretationOptionId;
    }

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

  function handleFinalResolutionComplete() {
    setFinalResolutionSolved(true);
    setFeedback(
      'Explication finale validée. La conclusion reste prudente et permet de réparer la situation.',
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
          isUnlocked={accessibleLocationIds.includes(location.id)}
          documents={visibleDocuments.filter((document) =>
            location.documentIds.includes(document.id),
          )}
          readDocumentIds={readDocumentIds}
          presentCharacters={scenario.characters.filter((character) =>
            location.presentCharacterIds.includes(character.id),
          )}
          objects={inventoryObjects.filter(
            (object) =>
              !ownedObjectIds.includes(object.id) &&
              (
                droppedObjectLocations[object.id] === location.id ||
                (!droppedObjectLocations[object.id] && location.objectIds?.includes(object.id) && (object.initiallyVisible ?? true))
              )
          )}
          ownedObjectIds={ownedObjectIds}
          ownedObjects={inventoryObjects.filter((object) => ownedObjectIds.includes(object.id))}
          onSelectDocument={(id) => handleSelect('document', id)}
          onSelectCharacter={(id) => handleSelect('character', id)}
          onTakeObject={handleTakeObject}
          onUseObject={handleUseObject}
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
        <DocumentDetail document={document} />
      );
    }

    if (selection.type === 'final-resolution') {
      if (!finalResolution) {
        return null;
      }

      return (
        <FinalResolutionDetail
          finalResolution={finalResolution}
          isAvailable={isFinalResolutionAvailable}
          isSolved={finalResolutionSolved}
          onComplete={handleFinalResolutionComplete}
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
        revealedHintCount={revealedHintCounts[puzzle.id] ?? 0}
        onRequestHint={handleRequestHint}
        onSubmit={handlePuzzleSubmit}
      />
    );
  }, [
    finalResolution,
    finalResolutionSolved,
    inventoryObjects,
    isFinalResolutionAvailable,
    ownedObjectIds,
    puzzles,
    readDocumentIds,
    revealedHintCounts,
    scenario,
    selection,
    solvedPuzzleIds,
    visibleDocumentIds,
    visibleDocuments,
    droppedObjectLocations,
  ]);

  return (
    <main className="app-shell">
      <div className="page-frame">
        <header className="page-header">
          <p className="eyebrow">
            Enquête
          </p>
          <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-950">
                {scenario.title}
              </h1>
              <p className="body-copy mt-2 text-sm">
                {scenario.level} · {scenario.duration}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                className="secondary-button text-sm focus:outline-none focus:ring-2 focus:ring-teal-800 focus:ring-offset-2"
                type="button"
                onClick={() => setMissionVisible((visible) => !visible)}
              >
                {missionVisible ? 'Masquer la mission' : 'Relire la mission'}
              </button>
              <button
                className="secondary-button text-sm focus:outline-none focus:ring-2 focus:ring-teal-800 focus:ring-offset-2"
                type="button"
                onClick={onBackHome}
              >
                Accueil
              </button>
            </div>
          </div>
        </header>

        {missionVisible ? (
          <section className="case-panel case-panel-main mt-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="eyebrow">Mission</p>
                <h2 className="mt-2 text-xl font-bold text-slate-950">
                  Relire la mission
                </h2>
              </div>
              <button
                className="link-button text-sm focus:outline-none"
                type="button"
                onClick={() => setMissionVisible(false)}
              >
                Fermer
              </button>
            </div>
            <div className="mt-4 grid gap-3">
              <p className="body-copy text-sm">{scenario.briefing.summary}</p>
              <p className="body-copy text-sm">{scenario.briefing.context}</p>
              <p className="info-strip text-sm font-semibold leading-6 text-teal-950">
                {scenario.briefing.mission}
              </p>
            </div>
          </section>
        ) : null}

        <section className="progress-card mt-6">
          <div className="flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="eyebrow m-0">Progression</h2>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setProgressionVisible(!progressionVisible)}
                className="text-sm font-semibold text-teal-700 hover:underline focus:outline-none"
                type="button"
              >
                {progressionVisible ? 'Masquer la progression' : 'Afficher la progression'}
              </button>
            </div>
          </div>

          {progressionVisible && (
            <div className="border-t border-slate-200 p-4">
              <section className="mb-4 rounded-md border border-slate-200 bg-white/70 p-4">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-950">
                      Sauvegarde locale
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Enregistrez ou reprenez cette enquête sur ce navigateur.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() =>
                        setSaveLoadMode((currentMode) =>
                          currentMode === 'save' ? null : 'save',
                        )
                      }
                      className="secondary-button text-sm"
                      type="button"
                    >
                      Sauvegarder
                    </button>
                    <button
                      onClick={() => {
                        refreshSlotSummaries();
                        setSaveLoadMode((currentMode) =>
                          currentMode === 'load' ? null : 'load',
                        );
                      }}
                      className="secondary-button text-sm"
                      type="button"
                    >
                      Charger
                    </button>
                    <button
                      onClick={handleRestartInvestigation}
                      className="secondary-button text-sm"
                      type="button"
                    >
                      Recommencer l'enquête
                    </button>
                  </div>
                </div>

                {saveLoadMode ? (
                  <div className="mt-4">
                    <div className="info-strip text-sm">
                      {saveLoadMode === 'save'
                        ? "Choisissez un emplacement pour sauvegarder la progression actuelle."
                        : 'Choisissez une sauvegarde à charger.'}
                    </div>
                    <div className="mt-3 grid gap-3 md:grid-cols-3">
                      {slotSummaries.map(({ slot, save }) => (
                        <article className="item-card" key={slot}>
                          <p className="text-sm font-semibold text-slate-950">
                            Emplacement {slot}
                          </p>
                          <p className="mt-1 text-xs leading-5 text-slate-600">
                            {formatSavedAt(save)}
                          </p>
                          <button
                            className="secondary-button mt-3 w-full text-sm disabled:cursor-not-allowed disabled:opacity-50"
                            disabled={saveLoadMode === 'load' && !save}
                            type="button"
                            onClick={() =>
                              saveLoadMode === 'save'
                                ? handleSaveSlot(slot, save)
                                : handleLoadSlot(save, slot)
                            }
                          >
                            {saveLoadMode === 'save' ? 'Sauvegarder ici' : 'Charger'}
                          </button>
                        </article>
                      ))}
                    </div>
                  </div>
                ) : null}
              </section>

              <div className="grid gap-4 sm:grid-cols-4">
                <div className="sm:col-span-1">
                  <p className="text-sm font-semibold text-slate-950">Orientation actuelle</p>
                  <p className="mt-2 text-sm font-medium text-amber-800 animate-highlight">
                    {visibleDocuments.length === 0
                      ? "Commencez par explorer les Lieux ou interroger les Personnages."
                      : readDocumentIds.length < visibleDocuments.length
                        ? "Vous avez de nouveaux documents. Lisez-les attentivement."
                        : solvedPuzzleIds.length < puzzles.length
                          ? "Vous avez lu tous les documents. Essayez de résoudre une énigme disponible."
                          : finalResolution && !finalResolutionSolved
                            ? "Vous pouvez maintenant formuler une explication finale prudente."
                            : "Félicitations, l'enquête se termine sur une solution réparatrice."}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-950">Dernière action</p>
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
                    Documents & Objets
                  </p>
                  <p className="mt-2 text-sm text-slate-700">
                    Docs : {visibleDocuments.length} / {scenario.documents.length}
                    <br />
                    Objets : {ownedObjectIds.length} / {inventoryObjects.length}
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>

        <section className="case-panel mt-6 p-4">
          <h2 className="eyebrow">
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
                  className={`secondary-button text-sm transition-colors duration-200 ${
                    isSelected
                      ? 'border-teal-800 bg-teal-50 text-teal-950'
                      : solved
                        ? 'border-green-600 bg-green-50 text-green-900'
                        : available
                          ? ''
                          : 'border-slate-200 bg-slate-50 text-slate-400 cursor-not-allowed'
                  }`}
                  disabled={!available}
                  title={!available ? 'Documents manquants' : ''}
                >
                  {puzzle.title} {solved && <IconPuzzleSolved className="inline-block h-4 w-4 ml-1 text-green-700" />} {!solved && <IconHintAvailable className="inline-block h-4 w-4 ml-1 text-slate-400" />}
                </button>
              );
            })}
            {finalResolution ? (
              <button
                type="button"
                onClick={() =>
                  handleSelect('final-resolution', finalResolution.id)
                }
                className={`secondary-button text-sm transition-colors duration-200 ${
                  selectedId === `final-resolution:${finalResolution.id}`
                    ? 'border-teal-800 bg-teal-50 text-teal-950'
                    : finalResolutionSolved
                      ? 'border-green-600 bg-green-50 text-green-900'
                      : isFinalResolutionAvailable
                        ? ''
                        : 'border-slate-200 bg-slate-50 text-slate-400 cursor-not-allowed'
                }`}
                disabled={!isFinalResolutionAvailable}
                title={
                  !isFinalResolutionAvailable
                    ? 'Énigmes ou documents manquants'
                    : ''
                }
              >
                {finalResolution.title} {finalResolutionSolved && <IconPuzzleSolved className="inline-block h-4 w-4 ml-1 text-green-700" />}
              </button>
            ) : null}
          </div>
        </section>

        <div className="mt-6 grid gap-6 lg:grid-cols-[20rem_1fr]">
          <aside className="flex flex-col gap-4">
            <ScenarioList
              title="Lieux"
              selectedId={selectedId}
              items={scenario.locations.map((location) => {
                const isAccessible = accessibleLocationIds.includes(location.id);
                return {
                  id: `location:${location.id}`,
                  title: location.name,
                  meta: isAccessible
                    ? 'Disponible'
                    : location.kind === 'locked'
                      ? 'Accès limité : badge requis'
                      : 'Accès limité',
                  icon: isAccessible ? <IconUnlocked className="text-teal-700 h-4 w-4" /> : <IconLocked className="text-slate-400 h-4 w-4" />,
                  disabled: false,
                };
              })}
              onSelect={(id) => handleSelect('location', id.replace('location:', ''))}
            />
            <InventoryPanel
              objects={inventoryObjects}
              locations={scenario.locations}
              ownedObjectIds={ownedObjectIds}
              usedObjectIds={usedObjectIds}
              onUseObject={handleUseObject}
              onDropObject={handleDropObject}
              isVisible={inventoryVisible}
              onToggle={() => setInventoryVisible(!inventoryVisible)}
            />
          </aside>
          <section id="detail-view" key={selectedId} className="scroll-mt-6 animate-fade-in">{detail}</section>
        </div>
      </div>
    </main>
  );
}
