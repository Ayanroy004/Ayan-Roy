import React, { useEffect } from 'react';
import { X, FileDown, Printer, Mail, MapPin, ExternalLink, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#11151B] border border-white/[0.1] rounded-2xl shadow-2xl overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar controls */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#0D1016]/95 backdrop-blur border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white">Curriculum Vitae Preview</span>
            <span className="text-slate-600">·</span>
            <span className="text-xs font-mono text-slate-400">Ayan_Roy_CV.pdf</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors text-xs flex items-center gap-1.5"
              title="Print resume"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <a
              href={portfolioData.resume.filePath}
              download={portfolioData.resume.fileName}
              className="px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-sky-500 hover:bg-sky-400 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <FileDown className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Paper Document Representation */}
        <div className="p-6 sm:p-10 bg-[#0E1218] text-slate-200 font-sans leading-relaxed space-y-8">
          {/* Header */}
          <div className="border-b border-white/[0.1] pb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {portfolioData.profile.name}
            </h1>
            <p className="text-sky-400 font-mono text-sm sm:text-base font-semibold mt-1">
              {portfolioData.profile.title} | {portfolioData.profile.educationCurrent}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mt-3">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                {portfolioData.profile.location}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                {portfolioData.profile.email}
              </span>
              <span>·</span>
              <span>GitHub: github.com/ayan-roy</span>
            </div>
          </div>

          {/* Professional Introduction */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 mb-2">
              Professional Summary
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {portfolioData.profile.introBio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 mb-3">
              Academic Education
            </h2>
            <div className="space-y-4">
              {portfolioData.education.map((edu) => (
                <div key={edu.id} className="p-4 rounded-lg bg-[#141922] border border-white/[0.06]">
                  <div className="flex items-center justify-between text-sm font-semibold text-white">
                    <span>{edu.degree}</span>
                    <span className="text-xs font-mono text-sky-400 px-2 py-0.5 rounded bg-sky-500/10">
                      {edu.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1.5">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 mb-3">
              Technical Skillset
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-[#141922] border border-white/[0.06]">
                <span className="font-semibold text-white block mb-1">Frontend:</span>
                <span className="text-slate-400">HTML5, CSS3, JavaScript, React.js, Next.js, Tailwind CSS</span>
              </div>
              <div className="p-3 rounded-lg bg-[#141922] border border-white/[0.06]">
                <span className="font-semibold text-white block mb-1">Backend & Databases:</span>
                <span className="text-slate-400">Node.js, Express.js, Java, PHP, MongoDB, MySQL</span>
              </div>
              <div className="p-3 rounded-lg bg-[#141922] border border-white/[0.06]">
                <span className="font-semibold text-white block mb-1">CS Fundamentals:</span>
                <span className="text-slate-400">C, Java, Data Structures and Algorithms, OOP, Problem Solving</span>
              </div>
              <div className="p-3 rounded-lg bg-[#141922] border border-white/[0.06]">
                <span className="font-semibold text-white block mb-1">Tools & Platforms:</span>
                <span className="text-slate-400">Git, GitHub, VS Code, Postman, Vite</span>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 mb-3">
              Featured Real-World Projects
            </h2>
            <div className="space-y-4">
              {portfolioData.projects.map((proj) => (
                <div key={proj.id} className="p-4 rounded-lg bg-[#141922] border border-white/[0.06]">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-sm font-bold text-white">{proj.title}</span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {proj.technologies.join(', ')}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom callout */}
          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>Location: {portfolioData.profile.location}</span>
            <a
              href={portfolioData.resume.filePath}
              download={portfolioData.resume.fileName}
              className="text-sky-400 hover:underline flex items-center gap-1 font-semibold"
            >
              <FileDown className="w-3.5 h-3.5" />
              Download Standard PDF File
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
