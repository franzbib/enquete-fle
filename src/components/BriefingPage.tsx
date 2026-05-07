import { getScenarioBriefing } from '../engine/scenarioLoader';
import { dossierDisparuScenario } from '../data/scenarios/dossierDisparu';

type BriefingPageProps = {
  onBackHome: () => void;
};

export function BriefingPage({ onBackHome }: BriefingPageProps) {
  const briefing = getScenarioBriefing(dossierDisparuScenario);

  return (
    <main className="min-h-screen bg-stone-100 px-6 py-10 text-slate-900">
      <section className="mx-auto max-w-4xl">
        <div className="border-b border-slate-300 pb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-800">
            Briefing
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
            {briefing.title}
          </h1>
        </div>

        <div className="mt-8 max-w-3xl rounded-md border border-slate-300 bg-white p-6 shadow-sm">
          <p className="text-lg leading-8 text-slate-700">{briefing.summary}</p>
        </div>

        <button
          className="mt-8 rounded-md border border-slate-400 bg-white px-4 py-2 text-base font-semibold text-slate-800 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-teal-800 focus:ring-offset-2"
          type="button"
          onClick={onBackHome}
        >
          Retour à l'accueil
        </button>
      </section>
    </main>
  );
}
