import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Journey } from './components/Journey';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

function PortfolioApp() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const { currentTheme } = useTheme();

  return (
    <div
      style={{ backgroundColor: currentTheme.previewBg }}
      className="min-h-screen flex flex-col transition-colors duration-300 selection:bg-sky-500/25 selection:text-sky-200"
    >
      {/* Sticky Top Navigation */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1">
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />
        <About />
        <Skills />
        <Services />
        <Education />
        <Projects />
        <Journey />
        <Resume onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume CV Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
