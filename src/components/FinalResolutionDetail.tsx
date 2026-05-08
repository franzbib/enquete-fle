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
    <article className="case-panel case-panel-main case-panel-final">
      <p className="eyebrow">
        Résolution finale
      </p>
      <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-950">
            {finalResolution.title}
          </h2>
          <p className="body-copy mt-2">
            {finalResolution.description}
          </p>
        </div>
        <span
          className={`status-pill ${
            isSolved
              ? 'status-pill-valid'
              : isAvailable
                ? 'status-pill-ready'
                : 'status-pill-locked'
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
        <p className="info-strip mt-5 leading-7">
          Validez d'abord les énigmes principales pour réunir assez d'éléments.
        </p>
      ) : null}

      {isSolved ? (
        <section className="mt-5 grid gap-4">
          <p className="info-strip border-teal-200 bg-teal-50 leading-7 text-teal-950">
            {finalResolution.successFeedback}
          </p>
          <p className="document-paper leading-7">
            {finalResolution.finalNarrative}
          </p>
        </section>
      ) : null}

      {isAvailable && !isSolved ? (
        <div className="mt-5 grid gap-6">
          <section>
            <p className="info-strip leading-7 text-slate-800">
              {finalResolution.prompt}
            </p>
            <div className="mt-3 grid gap-2">
              {finalResolution.hypotheses.map((hypothesis) => (
                <label
                  className="choice-card text-sm"
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
                  className="choice-card text-sm"
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
            <p className="info-strip text-sm leading-6">
              {localFeedback}
            </p>
          ) : null}

          <button
            className="primary-button text-sm disabled:bg-slate-300 disabled:text-slate-600"
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
