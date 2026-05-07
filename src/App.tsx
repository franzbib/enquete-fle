import { useState } from 'react';
import { BriefingPage } from './components/BriefingPage';
import { HomePage } from './components/HomePage';

type Screen = 'home' | 'briefing';

export function App() {
  const [screen, setScreen] = useState<Screen>('home');

  if (screen === 'briefing') {
    return <BriefingPage onBackHome={() => setScreen('home')} />;
  }

  return <HomePage onStart={() => setScreen('briefing')} />;
}
