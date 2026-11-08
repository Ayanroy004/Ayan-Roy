import React from 'react';
import { Layout, Server, Layers, Cpu, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';

export const Services: React.FC = () => {
  const serviceIcons = [Layout, Server, Layers, Cpu];

  return (
    <section className="py-20 relative border-t border-white/[0.06] bg-[#0E1218]/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-sky-400 uppercase mb-2">
            <span>03</span>
            <span aria-hidden="true">/</span>
            <span>EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What I Can Do
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Key areas of engineering practice where I build, architect, and optimize digital solutions.
          </p>
        </div>

        {/* 4 Ability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.services.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            return (
              <SpotlightCard
                key={service.id}
                className="group relative p-6 rounded-2xl bg-[#11151B] border border-white/[0.08] hover:border-sky-500/40 transition-all duration-300 card-glow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-sky-400/80">
                      {service.id}
                    </span>
                    <div className="p-2.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm font-medium text-slate-300 mb-3">
                    {service.description}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {service.details}
                  </p>
                </div>

                {/* Tech Pills (as clean quiet metadata) */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-slate-400">
                  {service.tech.map((t, idx) => (
                    <span key={idx} className="after:content-['·'] after:ml-1.5 last:after:content-none">
                      {t}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
