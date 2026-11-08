import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, Layers, Sparkles, Eye } from 'lucide-react';
import { portfolioData, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { SpotlightCard } from './SpotlightCard';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Full-Stack', 'Frontend', 'Machine Learning', 'Web App'];

  const filteredProjects =
    filter === 'All'
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 relative border-t border-white/[0.06] bg-[#0E1218]/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-sky-400 uppercase mb-2">
              <span>05</span>
              <span aria-hidden="true">/</span>
              <span>PORTFOLIO SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Things I've Built
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Real-world full-stack web applications, machine learning experiments, and utility software.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#11151B] border border-white/[0.08] rounded-lg overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-colors ${
                  filter === cat
                    ? 'bg-sky-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            // First project gets an editorial prominent wide card on large screens if in All view
            const isFeatured = filter === 'All' && index === 0;

            return (
              <SpotlightCard
                key={project.id}
                className={`group rounded-2xl bg-[#11151B] border border-white/[0.08] hover:border-sky-500/40 transition-all duration-300 card-glow flex flex-col overflow-hidden ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Project Media Container */}
                <div
                  className="relative aspect-[16/10] overflow-hidden bg-[#0A0D12] cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                    }}
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11151B] via-transparent to-transparent opacity-80" />

                  {/* View Details hover indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500 text-slate-950 font-semibold text-xs shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-4 h-4" />
                      <span>Inspect Details</span>
                    </div>
                  </div>

                  {/* Category unboxed tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-2.5 py-1 rounded text-[11px] font-mono font-semibold bg-[#0B0D10]/90 text-sky-400 border border-white/10 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3
                        onClick={() => setSelectedProject(project)}
                        className="text-lg sm:text-xl font-bold text-white group-hover:text-sky-300 transition-colors cursor-pointer"
                      >
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-xs font-mono text-slate-400 mb-3">
                      {project.subtitle}
                    </p>

                    <p className="text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Key features bullets */}
                    <div className="space-y-1.5 mb-5 pt-2 border-t border-white/[0.06]">
                      {project.keyFeatures.slice(0, 2).map((feature, fIdx) => (
                        <div key={fIdx} className="text-xs text-slate-400 flex items-baseline gap-2">
                          <span className="text-sky-400 font-mono">›</span>
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* Technology Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-300 bg-[#171D27] border border-white/[0.06]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>

                        <span className="text-slate-700" aria-hidden="true">|</span>

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                      </div>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-mono text-slate-500 hover:text-slate-300 transition-colors"
                      >
                        Details →
                      </button>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* View All Projects Button */}
        {filter !== 'All' && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setFilter('All')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 border border-slate-700 hover:border-sky-500/50 text-slate-200 text-sm font-semibold transition-all"
            >
              <span>View All 5 Projects</span>
            </button>
          </div>
        )}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
