import React from 'react';
import { Instagram, Youtube, Mail, Music } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 px-6 md:px-12 lg:px-24 border-t border-parchment/10 relative z-10 bg-ebony text-parchment">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Studio Status Indicator */}
        <div className="flex items-center gap-4 bg-parchment/5 px-6 py-3 rounded-full border border-parchment/10">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-parchment/80">
            Project Status: Recording Phase
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-8">
          <a href="#" className="text-parchment/60 hover:text-gold transition-colors" aria-label="Graça Music">
            <Music className="w-5 h-5" />
          </a>
          <a href="#" className="text-parchment/60 hover:text-gold transition-colors" aria-label="YouTube">
            <Youtube className="w-5 h-5" />
          </a>
          <a href="#" className="text-parchment/60 hover:text-gold transition-colors" aria-label="Instagram">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="text-parchment/60 hover:text-gold transition-colors" aria-label="Contato para Investidores">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <div className="font-mono text-xs text-parchment/40 uppercase tracking-widest text-center md:text-right">
          © 2026 Fernanda Santos<br/>
          Projeto EP
        </div>
      </div>
    </footer>
  );
};
