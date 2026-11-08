import React, { useState } from 'react';
import { FileDown, Eye, CheckCircle2, FileText, AlertCircle, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ResumeProps {
  onOpenResumeModal: () => void;
}

export const Resume: React.FC<ResumeProps> = ({ onOpenResumeModal }) => {
  const [downloadInitiated, setDownloadInitiated] = useState(false);

  const handleDownloadClick = () => {
    setDownloadInitiated(true);
    setTimeout(() => setDownloadInitiated(false), 3000);
  };

  return (
    <section className="py-20 relative border-t border-white/[0.06] bg-[#0E1218]/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-[#11151B] border border-white/[0.08] overflow-hidden card-glow">
          {/* Subtle architectural background decoration */}
          <div
            className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-sky-500/[0.05] blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-sky-400 uppercase">
              <span>07</span>
              <span aria-hidden="true">/</span>
              <span>CURRICULUM VITAE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {portfolioData.resume.heading}
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {portfolioData.resume.description}
            </p>

            {/* Quick Summary Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#161B23] border border-white/[0.04]">
                <div className="text-xs font-mono text-slate-400">Current Degree</div>
                <div className="text-sm font-semibold text-white mt-1">MCA Candidate</div>
              </div>
              <div className="p-4 rounded-xl bg-[#161B23] border border-white/[0.04]">
                <div className="text-xs font-mono text-slate-400">Primary Discipline</div>
                <div className="text-sm font-semibold text-white mt-1">Full-Stack Web Dev</div>
              </div>
              <div className="p-4 rounded-xl bg-[#161B23] border border-white/[0.04]">
                <div className="text-xs font-mono text-slate-400">Core Foundations</div>
                <div className="text-sm font-semibold text-white mt-1">DSA & Problem Solving</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={portfolioData.resume.filePath}
                download={portfolioData.resume.fileName}
                onClick={handleDownloadClick}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <FileDown className="w-4 h-4" />
                <span>Download My CV (PDF)</span>
              </a>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <Eye className="w-4 h-4 text-sky-400" />
                <span>View Full Resume Online</span>
              </button>
            </div>

            {/* Download status / fallback feedback */}
            {downloadInitiated && (
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 pt-2 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4" />
                <span>Download started for {portfolioData.resume.fileName}. If your browser blocked it, use "View Full Resume Online".</span>
              </div>
            )}

            <div className="text-xs font-mono text-slate-400 pt-2">
              File: <code className="text-slate-300">{portfolioData.resume.filePath}</code> · Direct PDF download ready
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
