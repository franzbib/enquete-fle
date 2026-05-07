import { useState } from 'react';
import { BriefingPage } from './components/BriefingPage';
import { HomePage } from './components/HomePage';
import { InvestigationPage } from './components/InvestigationPage';
import { loadScenario } from './engine/scenarioLoader';

type Screen = 'home' | 'briefing' | 'investigation';

const scenario = loadScenario('le-dossier-disparu');

export function App() {
  const [screen, setScreen] = useState<Screen>('home');

  if (screen === 'investigation') {
    return (
      <InvestigationPage
        scenario={scenario}
        onBackBriefing={() => setScreen('briefing')}
        onBackHome={() => setScreen('home')}
      />
    );
  }

  if (screen === 'briefing') {
    return (
      <BriefingPage
        scenario={scenario}
        onBackHome={() => setScreen('home')}
        onStartInvestigation={() => setScreen('investigation')}
      />
    );
  }

  return <HomePage onStart={() => setScreen('briefing')} />;
}
