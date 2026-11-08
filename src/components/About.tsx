import React from 'react';
import { GraduationCap, Code2, Lightbulb, MapPin, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const infoCards = [
    {
      icon: GraduationCap,
      label: 'Education',
      value: 'BCA Graduate | Currently Pursuing MCA',
      detail: 'Core computer science, system design & application architecture',
    },
    {
      icon: Code2,
      label: 'Focus',
      value: 'Full-Stack Web Development',
      detail: 'Modern React/Next frontend, RESTful backends & database systems',
    },
    {
      icon: Lightbulb,
      label: 'Interest',
      value: 'Technology, Innovation & Problem Solving',
      detail: 'Exploring scalable engineering & solving real-world challenges',
    },
  ];

  return (
    <section id="about" className="py-24 relative border-t border-white/[0.06] bg-[#0E1218]/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-sky-400 uppercase mb-2">
            <span>01</span>
            <span aria-hidden="true">/</span>
            <span>BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            A Little About Me
          </h2>
          <div className="h-1 w-12 bg-sky-500 rounded-full mt-3" />
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative Prose */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
            {portfolioData.profile.aboutParagraphs.map((paragraph, idx) => (
              <p key={idx} className="text-slate-300">
                {paragraph}
              </p>
            ))}

            {/* Quiet metadata footer */}
            <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>{portfolioData.profile.location}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span>Primary Stack: React / Node.js / Java / SQL</span>
              <span aria-hidden="true">·</span>
              <span>Active MCA Student</span>
            </div>
          </div>

          {/* Right Column: Three Information Cards */}
          <div className="lg:col-span-5 space-y-4">
            {infoCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#11151B] border border-white/[0.08] hover:border-sky-500/30 transition-all duration-200 card-glow"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                        {card.label}
                      </div>
                      <div className="text-sm font-semibold text-white">
                        {card.value}
                      </div>
                      <p className="text-xs text-slate-400 leading-normal pt-0.5">
                        {card.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
