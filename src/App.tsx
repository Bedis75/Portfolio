import ParticlesBackground from './components/ParticlesBackground';
import GlobalStyles from './styles/GlobalStyles';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import { ThemeProvider } from './context/ThemeContext';
import About from './components/About';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <ParticlesBackground />
      <Navigation />
      <main id="main">
        <Hero />
        <About />
      </main>
    </ThemeProvider>
  );
}

export default App;
