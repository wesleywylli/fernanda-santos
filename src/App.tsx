/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Project } from './components/Project';
import { Footer } from './components/Footer';

export default function App() {
  useEffect(() => {
    // Smooth scrolling setup if needed
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative bg-ebony min-h-screen font-sans text-parchment overflow-hidden">
      <div className="noise-overlay" />
      
      <Hero />
      <About />
      <Project />
      <Footer />
    </main>
  );
}
