import React from 'react';
import { Header } from './components/landing/Header';
import { Hero } from './components/landing/Hero';
import { AuthorityBar } from './components/landing/AuthorityBar';
import { AboutBook } from './components/landing/AboutBook';
import { AuthorSection } from './components/landing/AuthorSection';
import { FinalCTA } from './components/landing/FinalCTA';
import { Footer } from './components/landing/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-text font-sans selection:bg-brand-gold selection:text-brand-dark">
      <Header />
      <main>
        <Hero />
        <AuthorityBar />
        <AboutBook />
        <AuthorSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
