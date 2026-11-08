import React, { useState, useRef, useEffect } from 'react';
import { useTheme, THEME_OPTIONS, ThemeMode } from '../context/ThemeContext';
import { Palette, Check, Sparkles, ChevronDown } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
  showDropdown?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', showDropdown = true }) => {
  const { theme, currentTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isOpen]);

  const handleSelectTheme = (themeId: ThemeMode) => {
    setTheme(themeId);
    setIsOpen(false);
  };

  return (
    <div className={`relative inline-block ${className}`} ref={menuRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={`Select theme color scheme. Currently: ${currentTheme.name}`}
        title={`Change theme palette (Current: ${currentTheme.name})`}
        className="group relative inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-white/10 bg-[#141922] hover:bg-[#1A202C] hover:border-white/20 transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
      >
        {/* Color swatch dot */}
        <span
          className="w-3.5 h-3.5 rounded-full border border-white/30 flex items-center justify-center transition-transform group-hover:scale-110 shadow-xs"
          style={{
            background: `linear-gradient(135deg, ${currentTheme.accentColor} 0%, ${currentTheme.secondaryColor} 100%)`,
          }}
          aria-hidden="true"
        />

        {/* Theme Name label */}
        <span className="text-xs font-mono font-medium text-slate-200 hidden sm:inline whitespace-nowrap">
          {currentTheme.name}
        </span>

        <ChevronDown
          className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      {/* Popover Menu with 4 Curated Palettes */}
      {isOpen && (
        <div
          role="menu"
          aria-label="Theme selection options"
          className="absolute right-0 mt-2 w-64 p-2 rounded-xl bg-[#11151B] border border-white/15 shadow-2xl backdrop-blur-xl z-50 animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="px-2 py-1.5 mb-1 border-b border-white/[0.08] flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Color Palette
            </span>
            <span className="text-[10px] font-mono text-sky-400">4 Themes</span>
          </div>

          <div className="space-y-1">
            {THEME_OPTIONS.map((opt) => {
              const isSelected = opt.id === theme;
              return (
                <button
                  key={opt.id}
                  type="button"
                  role="menuitem"
                  onClick={() => handleSelectTheme(opt.id)}
                  className={`w-full flex items-center justify-between p-2 rounded-lg text-left transition-colors text-xs ${
                    isSelected
                      ? 'bg-white/[0.08] text-white font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {/* Dual-color swatch */}
                    <div
                      className="w-4 h-4 rounded-full border border-white/30 shrink-0 shadow-xs"
                      style={{
                        background: `linear-gradient(135deg, ${opt.accentColor} 0%, ${opt.secondaryColor} 100%)`,
                      }}
                      aria-hidden="true"
                    />

                    <div>
                      <div className="leading-tight">{opt.name}</div>
                      <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                        {opt.tagline}
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <Check className="w-3.5 h-3.5 text-sky-400 shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
