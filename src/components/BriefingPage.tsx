import { getScenarioBriefing } from '../engine/scenarioLoader';
import type { Scenario } from '../types/scenario';

type BriefingPageProps = {
  scenario: Scenario;
  onBackHome: () => void;
  onStartInvestigation: () => void;
};

export function BriefingPage({
  scenario,
  onBackHome,
  onStartInvestigation,
}: BriefingPageProps) {
  const briefing = getScenarioBriefing(scenario);

  return (
    <main className="app-shell">
      <section className="page-frame-narrow">
        <div className="page-header">
          <p className="eyebrow">
            Briefing
          </p>
          <h1 className="page-title mt-3">
            {scenario.title}
          </h1>
          <p className="body-copy mt-2 text-sm">
            {scenario.level} · {scenario.duration}
          </p>
        </div>

        <div className="case-panel case-panel-main mt-8 max-w-3xl">
          <h2 className="section-title mb-2 text-lg">Contexte</h2>
          <p className="body-copy text-base">{briefing.summary}</p>
          <p className="body-copy mt-2 text-base">{briefing.context}</p>

          <h2 className="mb-2 mt-6 text-lg font-bold text-teal-800">Votre objectif</h2>
          <div className="info-strip border-teal-200 bg-teal-50">
            <p className="font-semibold leading-7 text-teal-950">
              {briefing.mission}
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            className="primary-button text-base focus:outline-none focus:ring-2 focus:ring-teal-800 focus:ring-offset-2"
            type="button"
            onClick={onStartInvestigation}
          >
            Ouvrir l'enquête
          </button>
          <button
            className="secondary-button text-base focus:outline-none focus:ring-2 focus:ring-teal-800 focus:ring-offset-2"
            type="button"
            onClick={onBackHome}
          >
            Retour à l'accueil
          </button>
        </div>
      </section>
    </main>
  );
}
