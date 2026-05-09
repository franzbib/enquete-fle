import type { Scenario } from '../types/scenario';

type HomePageProps = {
  scenarios: Scenario[];
  selectedScenarioId: string;
  onSelectScenario: (id: string) => void;
  onStart: () => void;
};

export function HomePage({
  scenarios,
  selectedScenarioId,
  onSelectScenario,
  onStart,
}: HomePageProps) {
  const selectedScenario =
    scenarios.find((scenario) => scenario.id === selectedScenarioId) ??
    scenarios[0];

  return (
    <main className="app-shell">
      <section className="page-frame-narrow home-panel">
        <p className="eyebrow mb-4">
          Enquête FLE
        </p>
        <h1 className="page-title max-w-3xl">
          enquete-fle
        </h1>
        <p className="body-copy mt-6 max-w-2xl text-lg">
          Un jeu d'enquête documentaire pour faire du français un outil de
          déduction.
        </p>

        {scenarios.length > 1 ? (
          <section className="case-panel mt-8 max-w-3xl border-teal-200 bg-teal-50/70">
            <p className="eyebrow">{scenarios.length} enquêtes disponibles</p>
            <h2 className="mt-2 text-xl font-bold text-slate-950">
              Choisir une enquête
            </h2>
            <p className="body-copy mt-2 text-sm">
              Sélectionnez le scénario à lancer, puis cliquez sur Commencer
              l'enquête.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {scenarios.map((scenario) => {
                const isSelected = scenario.id === selectedScenarioId;

                return (
                  <button
                    className={`choice-card text-left transition-colors ${
                      isSelected
                        ? 'border-teal-700 bg-white text-teal-950 shadow-sm'
                        : 'bg-white/80 hover:border-teal-300 hover:bg-white'
                    }`}
                    key={scenario.id}
                    type="button"
                    onClick={() => onSelectScenario(scenario.id)}
                  >
                    <span className="block text-base font-bold">
                      {scenario.title}
                    </span>
                    <span className="mt-2 block text-sm leading-6 text-slate-700">
                      {scenario.subtitle ?? 'Enquête'}
                      <br />
                      {scenario.level} · {scenario.duration}
                    </span>
                    <span className="mt-3 block text-sm font-semibold text-teal-800">
                      {isSelected ? 'Sélectionnée' : 'Choisir cette enquête'}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        ) : null}

        {selectedScenario ? (
          <p className="info-strip mt-6 max-w-2xl text-sm leading-6">
            Enquête sélectionnée : <strong>{selectedScenario.title}</strong>
          </p>
        ) : null}

        <div className="mt-10">
          <button
            className="primary-button text-base focus:outline-none focus:ring-2 focus:ring-teal-800 focus:ring-offset-2"
            type="button"
            onClick={onStart}
          >
            Commencer l'enquête
          </button>
        </div>
      </section>
    </main>
  );
}
