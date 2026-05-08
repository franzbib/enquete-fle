import type { Scenario } from '../types/scenario';
import { ScenarioList } from './ScenarioList';

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
          <div className="mt-8 max-w-2xl">
            <ScenarioList
              title="Choisir une enquête"
              selectedId={selectedScenarioId}
              items={scenarios.map((scenario) => ({
                id: scenario.id,
                title: scenario.title,
                meta: `${scenario.subtitle ?? 'Enquête'} · ${scenario.level} · ${scenario.duration}`,
              }))}
              onSelect={onSelectScenario}
            />
          </div>
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
