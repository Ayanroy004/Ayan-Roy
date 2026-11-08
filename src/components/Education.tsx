import React from "react";
import {
  GraduationCap,
  Award,
  BookOpen,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { SpotlightCard } from "./SpotlightCard";

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="py-24 relative border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-sky-400 uppercase mb-2">
            <span>04</span>
            <span aria-hidden="true">/</span>
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Formal computer application degree programs anchoring my software
            engineering principles.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute top-6 bottom-6 left-4 sm:left-8 w-px bg-gradient-to-b from-sky-500 via-indigo-500 to-slate-800" />

          <div className="space-y-10">
            {portfolioData.education.map((item, idx) => {
              const isCurrent = item.status.toLowerCase().includes("pursuing");
              return (
                <div
                  key={item.id}
                  className="relative flex items-start gap-6 sm:gap-10"
                >
                  {/* Timeline Node */}
                  <div className="relative z-10 flex items-center justify-center w-8 sm:w-16 h-8 sm:h-16 rounded-full bg-[#11151B] border-2 border-sky-400 shadow-lg shadow-sky-500/20 shrink-0">
                    <GraduationCap className="w-4 sm:w-7 h-4 sm:h-7 text-sky-400" />
                  </div>

                  <SpotlightCard>
                    {/* Card Content */}
                    <div className="flex-1 p-6 sm:p-8 rounded-2xl bg-[#11151B] border border-white/[0.08] hover:border-sky-500/30 transition-all duration-200 card-glow">
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                        <span className="text-xs font-mono text-slate-400">
                          EDUCATION 0{idx + 1}
                        </span>

                        {/* Status indicator */}
                        <div
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium ${
                            isCurrent
                              ? "bg-sky-500/15 border border-sky-500/30 text-sky-300"
                              : "bg-emerald-500/15 border border-emerald-500/30 text-emerald-300"
                          }`}
                        >
                          {isCurrent ? (
                            <Clock className="w-3.5 h-3.5 text-sky-400" />
                          ) : (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          )}
                          <span>{item.status}</span>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                        {item.degree}
                      </h3>

                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Unboxed syllabus keywords */}
                      <div className="mt-5 pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                        {idx === 0 ? (
                          <>
                            <span>Advanced Algorithms</span>
                            <span aria-hidden="true">·</span>
                            <span>Software Engineering</span>
                            <span aria-hidden="true">·</span>
                            <span>Distributed Systems</span>
                            <span aria-hidden="true">·</span>
                            <span>Full-Stack Architectures</span>
                          </>
                        ) : (
                          <>
                            <span>Programming in C & Java</span>
                            <span aria-hidden="true">·</span>
                            <span>DBMS & SQL</span>
                            <span aria-hidden="true">·</span>
                            <span>Web Technologies</span>
                            <span aria-hidden="true">·</span>
                            <span>Data Structures</span>
                          </>
                        )}
                      </div>
                    </div>
                  </SpotlightCard>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
