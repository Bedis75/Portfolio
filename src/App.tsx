import React from 'react';
import ParticlesBackground from './components/ParticlesBackground';
import GlobalStyles from './styles/GlobalStyles';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <ParticlesBackground />
      <Navigation />
      <main>
        <Hero />
      </main>
    </ThemeProvider>
  );
}

export default App;
