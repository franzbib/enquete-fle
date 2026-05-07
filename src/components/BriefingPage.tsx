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
    <main className="min-h-screen bg-stone-100 px-6 py-10 text-slate-900">
      <section className="mx-auto max-w-4xl">
        <div className="border-b border-slate-300 pb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-800">
            Briefing
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
            {scenario.title}
          </h1>
          <p className="mt-2 text-sm text-slate-700">
            {scenario.level} · {scenario.duration}
          </p>
        </div>

        <div className="mt-8 max-w-3xl rounded-md border border-slate-300 bg-white p-6 shadow-sm">
          <h2 className="mb-2 text-lg font-bold text-slate-900">Contexte</h2>
          <p className="text-base leading-7 text-slate-700">{briefing.summary}</p>
          <p className="mt-2 text-base leading-7 text-slate-700">{briefing.context}</p>

          <h2 className="mb-2 mt-6 text-lg font-bold text-teal-800">Votre objectif</h2>
          <div className="rounded-md border border-teal-200 bg-teal-50 p-4">
            <p className="font-medium leading-7 text-teal-900">
              {briefing.mission}
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            className="rounded-md bg-teal-800 px-4 py-2 text-base font-semibold text-white hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-teal-800 focus:ring-offset-2"
            type="button"
            onClick={onStartInvestigation}
          >
            Ouvrir l'enquête
          </button>
          <button
            className="rounded-md border border-slate-400 bg-white px-4 py-2 text-base font-semibold text-slate-800 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-teal-800 focus:ring-offset-2"
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
