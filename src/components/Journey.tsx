import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { CheckCircle2, Milestone, ArrowRight } from 'lucide-react';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-24 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-sky-400 uppercase mb-2">
            <span>06</span>
            <span aria-hidden="true">/</span>
            <span>EXPERIENCE & GROWTH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My Development Journey
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            A progression of continuous study, practical engineering milestones, and real-world project development.
          </p>
        </div>

        {/* 6-step Journey Grid / Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.journey.map((step, idx) => (
            <div
              key={step.phase}
              className="relative p-6 sm:p-7 rounded-2xl bg-[#11151B] border border-white/[0.08] hover:border-sky-500/30 transition-all duration-300 card-glow flex flex-col justify-between"
            >
              <div>
                {/* Step indicator header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-sky-400 px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">
                    STAGE {step.phase}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    Milestone 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight mb-1">
                  {step.title}
                </h3>

                <div className="text-xs font-mono text-sky-400/90 mb-3 font-medium">
                  {step.focus}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Technologies covered */}
              <div className="pt-4 border-t border-white/[0.06]">
                <div className="text-[11px] font-mono text-slate-400 mb-2 uppercase tracking-wider">
                  Key Competencies:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {step.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-300 bg-[#161B23] border border-white/[0.04]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
