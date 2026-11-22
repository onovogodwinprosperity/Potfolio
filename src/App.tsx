import About from './components/About';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import GitHubExplorer from './components/GitHubExplorer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Services from './components/Services';
import Skills from './components/Skills';

/**
 * Single-page portfolio for Onovo Godwin Prosperity.
 * All content lives in src/data/portfolio.ts — components render from it.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-ink-900 font-sans text-slate-200 antialiased">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-crimson-500 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <GitHubExplorer />
        <Experience />
        <Skills />
        <Certifications />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
