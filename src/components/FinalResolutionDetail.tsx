import { useState } from 'react';
import type { FinalResolution } from '../types/scenario';

type FinalResolutionDetailProps = {
  finalResolution: FinalResolution;
  isAvailable: boolean;
  isSolved: boolean;
  onComplete: () => void;
};

export function FinalResolutionDetail({
  finalResolution,
  isAvailable,
  isSolved,
  onComplete,
}: FinalResolutionDetailProps) {
  const [selectedHypothesisId, setSelectedHypothesisId] = useState('');
  const [selectedEvidenceIds, setSelectedEvidenceIds] = useState<string[]>([]);
  const [localFeedback, setLocalFeedback] = useState('');

  function toggleEvidence(documentId: string, checked: boolean) {
    setLocalFeedback('');

    if (checked) {
      setSelectedEvidenceIds((currentIds) => [...currentIds, documentId]);
      return;
    }

    setSelectedEvidenceIds((currentIds) =>
      currentIds.filter((id) => id !== documentId),
    );
  }

  function handleSubmit() {
    if (selectedHypothesisId !== finalResolution.correctHypothesisId) {
      setLocalFeedback(finalResolution.hypothesisFailureFeedback);
      return;
    }

    const hasRequiredEvidence = finalResolution.requiredEvidenceIds.every(
      (documentId) => selectedEvidenceIds.includes(documentId),
    );

    if (!hasRequiredEvidence) {
      setLocalFeedback(finalResolution.evidenceFailureFeedback);
      return;
    }

    setLocalFeedback('');
    onComplete();
  }

  return (
    <article className="rounded-md border border-slate-300 bg-white p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-800">
        Résolution finale
      </p>
      <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-950">
            {finalResolution.title}
          </h2>
          <p className="mt-2 leading-7 text-slate-700">
            {finalResolution.description}
          </p>
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
          {isSolved
            ? 'Validée'
            : isAvailable
              ? 'À formuler'
              : 'À débloquer'}
        </span>
      </div>

      {!isAvailable ? (
        <p className="mt-5 rounded-md bg-stone-100 p-4 leading-7 text-slate-700">
          Validez d'abord les énigmes principales pour réunir assez d'éléments.
        </p>
      ) : null}

      {isSolved ? (
        <section className="mt-5 grid gap-4">
          <p className="rounded-md border border-teal-200 bg-teal-50 p-4 leading-7 text-teal-950">
            {finalResolution.successFeedback}
          </p>
          <p className="rounded-md border border-slate-200 bg-stone-50 p-4 leading-7 text-slate-800">
            {finalResolution.finalNarrative}
          </p>
        </section>
      ) : null}

      {isAvailable && !isSolved ? (
        <div className="mt-5 grid gap-6">
          <section>
            <p className="rounded-md bg-stone-100 p-4 leading-7 text-slate-800">
              {finalResolution.prompt}
            </p>
            <div className="mt-3 grid gap-2">
              {finalResolution.hypotheses.map((hypothesis) => (
                <label
                  className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm leading-6 text-slate-800"
                  key={hypothesis.id}
                >
                  <input
                    className="mr-2"
                    type="radio"
                    name={finalResolution.id}
                    value={hypothesis.id}
                    checked={selectedHypothesisId === hypothesis.id}
                    onChange={(event) => {
                      setSelectedHypothesisId(event.target.value);
                      setLocalFeedback('');
                    }}
                  />
                  {hypothesis.label}
                </label>
              ))}
            </div>
          </section>

          <section>
            <h3 className="font-semibold text-slate-950">
              Pièces justificatives
            </h3>
            <p className="mt-1 text-sm leading-6 text-slate-700">
              {finalResolution.evidencePrompt}
            </p>
            <div className="mt-3 grid gap-2">
              {finalResolution.evidenceItems.map((item) => {
                const checked = selectedEvidenceIds.includes(item.documentId);
                return (
                  <label
                    className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800"
                    key={item.documentId}
                  >
                    <input
                      className="mr-2"
                      disabled={
                        !checked &&
                        selectedEvidenceIds.length >=
                          finalResolution.maxSelectedEvidenceCount
                      }
                      type="checkbox"
                      value={item.documentId}
                      checked={checked}
                      onChange={(event) =>
                        toggleEvidence(item.documentId, event.target.checked)
                      }
                    />
                    {item.label}
                  </label>
                );
              })}
            </div>
          </section>

          {localFeedback ? (
            <p className="rounded-md bg-stone-100 p-3 text-sm leading-6 text-slate-700">
              {localFeedback}
            </p>
          ) : null}

          <button
            className="rounded-md bg-teal-800 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-900 disabled:bg-slate-300 disabled:text-slate-600"
            type="button"
            disabled={
              !selectedHypothesisId ||
              selectedEvidenceIds.length <
                finalResolution.minSelectedEvidenceCount
            }
            onClick={handleSubmit}
          >
            Valider l'explication
          </button>
        </div>
      ) : null}
    </article>
  );
}
