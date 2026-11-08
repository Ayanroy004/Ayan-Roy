import React, { useState } from 'react';
import { portfolioData, SkillCategory } from '../data/portfolioData';
import { TechIcon } from './TechIcon';
import { Layers } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...portfolioData.skillCategories.map((c) => c.category)];

  const filteredCategories: SkillCategory[] =
    activeCategory === 'All'
      ? portfolioData.skillCategories
      : portfolioData.skillCategories.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-sky-400 uppercase mb-2">
              <span>02</span>
              <span aria-hidden="true">/</span>
              <span>TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technologies I Work With
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Languages, frameworks, database systems, and development tools I use to build scalable web applications.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="flex items-center gap-1.5 p-1 bg-[#11151B] border border-white/[0.08] rounded-lg overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-colors ${
                  activeCategory === cat
                    ? 'bg-sky-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Categorized Skills Display */}
        <div className="space-y-10">
          {filteredCategories.map((catGroup) => (
            <SpotlightCard
              key={catGroup.category}
              className="p-6 sm:p-7 rounded-2xl bg-[#11151B] border border-white/[0.06] hover:border-white/10 transition-colors"
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-white/[0.06] mb-6">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-400" />
                    <span>{catGroup.category}</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">{catGroup.description}</p>
                </div>
                <span className="text-xs font-mono text-slate-400 self-start sm:self-auto">
                  {catGroup.skills.length} Technologies
                </span>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                {catGroup.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group p-3.5 rounded-xl bg-[#161B23] border border-white/[0.04] hover:border-sky-500/40 hover:bg-[#1A202A] transition-all duration-200 flex flex-col items-center justify-center text-center gap-2.5 min-h-[90px]"
                  >
                    <div className="transition-transform group-hover:scale-110 duration-200">
                      <TechIcon name={skill.icon} className="w-6 h-6" size={24} />
                    </div>
                    <span className="text-xs font-medium text-slate-300 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};
