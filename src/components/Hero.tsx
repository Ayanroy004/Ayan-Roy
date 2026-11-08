import React, { useState } from "react";
import {
  FileDown,
  ArrowRight,
  Send,
  Terminal,
  Code2,
  Cpu,
  Layers,
  ChevronDown,
  Copy,
  Check,
  Play,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { TechIcon } from "./TechIcon";
import { useTheme } from "../context/ThemeContext";
import { SpotlightCard } from "./SpotlightCard";

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activeCodeTab, setActiveCodeTab] = useState<
    "profile" | "stack" | "philosophy"
  >("profile");
  const [copied, setCopied] = useState(false);
  const [isRunningCode, setIsRunningCode] = useState(false);
  const [codeOutput, setCodeOutput] = useState<string[] | null>(null);
  const { currentTheme } = useTheme();

  const codeSnippets = {
    profile: `const developer: Engineer = {
  name: "${portfolioData.profile.name}",
  role: "${portfolioData.profile.title}",
  education: {
    current: "MCA (Pursuing)",
    previous: "BCA (Completed)"
  },
  status: "${portfolioData.profile.status}",
  location: "${portfolioData.profile.location}",
  craft: ["Clean Code", "Scalable Systems", "Modern UI"]
};`,
    stack: `const techStack = {
  frontend: ["React.js", "Next.js", "Tailwind CSS"],
  backend:  ["Node.js", "Express.js", "Spring Boot"],
  database: ["MongoDB", "MySQL"],
  coreCS:   ["C", "Java", "DSA", "OOP"]
};`,
    philosophy: `// Core Engineering Objective
async function buildDigitalExperience(idea: Idea) {
  const architecture = planScalableSystem(idea);
  const userInterface = craftResponsiveUI(architecture);
  const robustBackend = connectReliableAPIs(userInterface);
  
  return await deployToProduction({
    speed: "fast",
    accessibility: "WCAG-AA",
    maintainability: "high"
  });
}`,
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeCodeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunCode = () => {
    setIsRunningCode(true);
    setCodeOutput(["> Initializing runner...", "> Checking dependencies..."]);

    setTimeout(() => {
      if (activeCodeTab === "profile") {
        setCodeOutput([
          "> [SUCCESS] Profile loaded.",
          `✓ Engineer: ${portfolioData.profile.name}`,
          `✓ Degree: ${portfolioData.profile.educationCurrent}`,
          `✓ Status: ${portfolioData.profile.status}`,
          "✓ Ready to build responsive, modern applications.",
        ]);
      } else if (activeCodeTab === "stack") {
        setCodeOutput([
          "> [SUCCESS] Verified full-stack environment.",
          "✓ Frontend: React.js, Next.js, Tailwind CSS",
          "✓ Backend: Node.js, Express.js, Spring Boot, Java",
          "✓ Data: MongoDB, MySQL",
          "✓ CS: C, Java, Data Structures & Algorithms",
        ]);
      } else {
        setCodeOutput([
          "> [SUCCESS] Architecture compiled successfully.",
          "✓ Pipeline: Scalable APIs + Responsive UI",
          "✓ Accessibility: WCAG AA Compliant",
          "✓ Deploy target: Production Cloud",
        ]);
      }
      setIsRunningCode(false);
    }, 700);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <SpotlightCard>
      <section
        id="home"
        className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden radial-glow"
      >
        {/* Dynamic Ambient Aurora Glow Backlight */}
        <div
          className="aurora-glow absolute top-1/4 left-1/3 -translate-x-1/2 w-[550px] h-[350px] rounded-full pointer-events-none -z-10"
          style={{
            background: `radial-gradient(circle, ${currentTheme.accentColor} 0%, ${currentTheme.secondaryColor} 60%, transparent 80%)`,
          }}
          aria-hidden="true"
        />

        {/* Background architectural grid */}
        <div
          className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Core Typographic Hierarchy */}
            <div className="lg:col-span-7 space-y-6">
              {/* Kicker + Availability Status */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold tracking-widest text-sky-400 uppercase font-mono">
                  {portfolioData.profile.heroKicker}
                </span>
                <span className="text-slate-600 text-xs" aria-hidden="true">
                  ·
                </span>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-950/60 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{portfolioData.profile.status}</span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] text-balance">
                Building{" "}
                <span className="text-gradient">Digital Experiences</span>{" "}
                Through Code.
              </h1>

              {/* Short Description */}
              <p className="text-base sm:text-lg font-medium text-slate-300 font-mono">
                {portfolioData.profile.roleTagline}
              </p>

              {/* Supporting Text */}
              <p className="text-base text-slate-400 max-w-xl leading-relaxed">
                {portfolioData.profile.heroSubheading}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition-all shadow-md shadow-sky-500/20 hover:shadow-sky-500/30 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  <span>Explore My Work</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 font-semibold text-sm transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  <FileDown className="w-4 h-4 text-sky-400" />
                  <span>Download My CV</span>
                </button>

                <button
                  onClick={() => scrollToSection("contact")}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-slate-300 hover:text-white font-medium text-sm transition-colors hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  <Send className="w-3.5 h-3.5 text-slate-400" />
                  <span>Contact Me</span>
                </button>
              </div>

              {/* Quick unboxed trust markers */}
              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-slate-400 border-t border-white/[0.06]">
                <span>West Bengal, India</span>
                <span aria-hidden="true">/</span>
                <span>MCA Candidate</span>
                <span aria-hidden="true">/</span>
                <span>Full-Stack Web & APIs</span>
              </div>
            </div>

            {/* Right Column: Interactive Developer Workspace Visual */}
            <div className="lg:col-span-5 relative">
              {/* Floating tech badges */}
              <div className="absolute -top-4 -right-2 z-10 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#11151B] border border-white/10 shadow-xl backdrop-blur-md">
                <TechIcon name="react" className="w-4 h-4" />
                <span className="text-xs font-mono text-slate-300">
                  React.js 19
                </span>
              </div>

              <div className="absolute -bottom-4 -left-3 z-10 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#11151B] border border-white/10 shadow-xl backdrop-blur-md">
                <TechIcon name="nodejs" className="w-4 h-4" />
                <span className="text-xs font-mono text-slate-300">
                  Node & Spring
                </span>
              </div>

              {/* Main IDE Window */}
              <div className="rounded-xl border border-white/10 bg-[#11151B] shadow-2xl overflow-hidden transition-all duration-300 hover:border-sky-500/30">
                {/* Window Titlebar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0D1016] border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-400">
                      workspace / dev
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Interactive Run Code Button */}
                    <button
                      onClick={handleRunCode}
                      disabled={isRunningCode}
                      className="flex items-center gap-1 px-2.5 py-1 rounded bg-sky-500/15 hover:bg-sky-500/25 border border-sky-500/30 text-xs font-mono text-sky-400 hover:text-sky-300 transition-colors disabled:opacity-50"
                      title="Execute snippet"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>Run</span>
                    </button>

                    <button
                      onClick={handleCopyCode}
                      className="flex items-center gap-1.5 px-2 py-1 rounded text-xs font-mono text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
                      title="Copy code"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Code File Tabs */}
                <div className="flex items-center bg-[#0F131A] px-2 border-b border-white/[0.06] overflow-x-auto">
                  <button
                    onClick={() => {
                      setActiveCodeTab("profile");
                      setCodeOutput(null);
                    }}
                    className={`px-3 py-2 text-xs font-mono transition-colors border-b-2 flex items-center gap-1.5 ${
                      activeCodeTab === "profile"
                        ? "border-sky-400 text-sky-400 bg-white/[0.02]"
                        : "border-transparent text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Developer.ts</span>
                  </button>
                  <button
                    onClick={() => {
                      setActiveCodeTab("stack");
                      setCodeOutput(null);
                    }}
                    className={`px-3 py-2 text-xs font-mono transition-colors border-b-2 flex items-center gap-1.5 ${
                      activeCodeTab === "stack"
                        ? "border-sky-400 text-sky-400 bg-white/[0.02]"
                        : "border-transparent text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Stack.config.ts</span>
                  </button>
                  <button
                    onClick={() => {
                      setActiveCodeTab("philosophy");
                      setCodeOutput(null);
                    }}
                    className={`px-3 py-2 text-xs font-mono transition-colors border-b-2 flex items-center gap-1.5 ${
                      activeCodeTab === "philosophy"
                        ? "border-sky-400 text-sky-400 bg-white/[0.02]"
                        : "border-transparent text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Architecture.ts</span>
                  </button>
                </div>

                {/* Code Body */}
                <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto min-h-[190px] text-slate-300">
                  <pre className="text-slate-300">
                    <code>{codeSnippets[activeCodeTab]}</code>
                  </pre>
                </div>

                {/* Live Simulated Console Drawer */}
                {codeOutput && (
                  <div className="px-4 py-3 bg-[#080B10] border-t border-sky-500/20 font-mono text-xs text-sky-300 space-y-1 animate-in fade-in duration-150">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                      <span>Console Output:</span>
                      <button
                        onClick={() => setCodeOutput(null)}
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        Clear
                      </button>
                    </div>
                    {codeOutput.map((line, idx) => (
                      <div key={idx} className="leading-snug">
                        {line}
                      </div>
                    ))}
                  </div>
                )}

                {/* Terminal status bar */}
                <div className="px-4 py-2 bg-[#0A0D12] border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-3">
                    <span className="text-sky-400">● ready</span>
                    <span>TypeScript 5.x</span>
                    <span>UTF-8</span>
                  </div>
                  <span className="text-slate-500">
                    Ln {codeSnippets[activeCodeTab].split("\n").length}, Col 1
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom subtle scroll indicator */}
          <div className="mt-16 pt-6 flex flex-col items-center justify-center">
            <button
              onClick={() => scrollToSection("about")}
              className="group flex flex-col items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg p-1"
              aria-label="Scroll to About Me section"
            >
              <span className="font-mono tracking-wider">SCROLL DOWN</span>
              <ChevronDown className="w-4 h-4 text-sky-400 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </SpotlightCard>
  );
};
