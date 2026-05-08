import { useState } from 'react';
import { BriefingPage } from './components/BriefingPage';
import { HomePage } from './components/HomePage';
import { InvestigationPage } from './components/InvestigationPage';
import {
  loadDefaultScenario,
  loadScenario,
  scenarios,
} from './engine/scenarioLoader';

type Screen = 'home' | 'briefing' | 'investigation';

export function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [selectedScenarioId, setSelectedScenarioId] = useState(
    () => loadDefaultScenario().id,
  );
  const scenario = loadScenario(selectedScenarioId);

  if (screen === 'investigation') {
    return (
      <InvestigationPage
        key={scenario.id}
        scenario={scenario}
        onBackHome={() => setScreen('home')}
      />
    );
  }

  if (screen === 'briefing') {
    return (
      <BriefingPage
        key={scenario.id}
        scenario={scenario}
        onBackHome={() => setScreen('home')}
        onStartInvestigation={() => setScreen('investigation')}
      />
    );
  }

  return (
    <HomePage
      scenarios={scenarios}
      selectedScenarioId={selectedScenarioId}
      onSelectScenario={setSelectedScenarioId}
      onStart={() => setScreen('briefing')}
    />
  );
}
