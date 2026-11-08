import React from 'react';
import {
  Code2,
  Database,
  Cpu,
  Layers,
  Terminal,
  Server,
  Workflow,
  Sparkles,
} from 'lucide-react';

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = 'w-5 h-5', size = 20 }) => {
  const iconKey = name.toLowerCase().replace(/[^a-z0-9]/g, '');

  switch (iconKey) {
    case 'html5':
    case 'html':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M4 3l1.8 17.5L12 22l6.2-1.5L20 3H4z" fill="#E34F26" />
          <path d="M12 4.5v15.8l4.8-1.2 1.4-14.6H12z" fill="#EF652A" />
          <path d="M7.7 7h8.6l-.3 2.5H12v2.5h3.8l-.5 5.2-3.3.9v-2.6l1.6-.4.2-1.8H7.9L7.7 7z" fill="#FFFFFF" />
        </svg>
      );

    case 'css3':
    case 'css':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M4 3l1.8 17.5L12 22l6.2-1.5L20 3H4z" fill="#1572B6" />
          <path d="M12 4.5v15.8l4.8-1.2 1.4-14.6H12z" fill="#33A9DC" />
          <path d="M7.7 7h8.6l-.3 2.5H12v2.5h3.8l-.5 5.2-3.3.9v-2.6l1.6-.4.2-1.8H7.9L7.7 7z" fill="#FFFFFF" />
        </svg>
      );

    case 'javascript':
    case 'js':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path
            d="M7.5 18c1.3.8 2.5.5 3-.5.4-.8.4-2.2.4-3.5V8.5H8.8v5.5c0 .6 0 1.2-.2 1.5-.2.3-.6.4-1.1.2V18zm8.7-.1c1.5 0 2.5-.7 3.1-1.6l-1.6-1c-.4.6-.9.9-1.5.9-.7 0-1.2-.3-1.2-.9 0-.6.4-.9 1.5-1.3 1.8-.7 2.6-1.5 2.6-2.8 0-1.6-1.3-2.6-3-2.6-1.4 0-2.4.6-3.1 1.6l1.6 1c.3-.5.7-.8 1.4-.8.7 0 1.1.3 1.1.7 0 .5-.3.8-1.4 1.2-1.8.7-2.6 1.4-2.6 2.8 0 1.8 1.4 2.8 3.2 2.8z"
            fill="#000000"
          />
        </svg>
      );

    case 'react':
    case 'reactjs':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="2" fill="#61DAFB" />
        </svg>
      );

    case 'nextjs':
    case 'next':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill="#000000" stroke="#FFFFFF" strokeWidth="1" />
          <path d="M8 8v8M16 8l-8 9" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M16 8v5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );

    case 'tailwindcss':
    case 'tailwind':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path
            d="M6 10c1.5-3 4-3.5 5.5-2 1.5 1.5 2 3.5 4.5 3.5 2 0 3.5-1.5 4.5-3.5-1.5 3-4 3.5-5.5 2-1.5-1.5-2-3.5-4.5-3.5-2 0-3.5 1.5-4.5 3.5zm-4 6c1.5-3 4-3.5 5.5-2 1.5 1.5 2 3.5 4.5 3.5 2 0 3.5-1.5 4.5-3.5-1.5 3-4 3.5-5.5 2-1.5-1.5-2-3.5-4.5-3.5-2 0-3.5 1.5-4.5 3.5z"
            fill="#38BDF8"
          />
        </svg>
      );

    case 'nodejs':
    case 'node':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2z" fill="#539E43" />
          <path d="M12 4.2L5 8.2v7.6l7 4 7-4V8.2l-7-4z" fill="#333333" />
          <path d="M12 6.5v11m-4-7l4 2.5 4-2.5" stroke="#68A063" strokeWidth="1.4" />
        </svg>
      );

    case 'expressjs':
    case 'express':
      return (
        <div className={`flex items-center justify-center font-bold text-xs tracking-tighter text-white font-mono ${className}`}>
          ex
        </div>
      );

    case 'java':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M7 16c3 .5 7 .5 10 0-1-1.5-2-2-5-2-3 0-4 .5-5 2z" fill="#E76F00" />
          <path d="M8 18.5c2.5.3 5.5.3 8 0-.8-1-1.5-1.5-4-1.5-2.5 0-3.2.5-4 1.5z" fill="#E76F00" />
          <path d="M9 13.5c1.5-.5 3-.5 4.5 0 0 0 1-1.5-2.2-2.5-3.2-1-2.3 2.5-2.3 2.5z" fill="#5382A1" />
          <path d="M13.5 8c0 0 1.5 1-1 2.5 3 .5 4.5-1.5 1-2.5z" fill="#5382A1" />
          <path d="M6 21c4 .3 8 .3 12 0-2-1-5-1-6-1s-4 0-6 1z" fill="#E76F00" />
        </svg>
      );

    case 'php':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="11" ry="7" fill="#777BB4" />
          <text x="12" y="15" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">PHP</text>
        </svg>
      );

    case 'mongodb':
    case 'mongo':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M12 2C11.5 4 6 9 6 14.5a6 6 0 0 0 11.5 2.5c.5-1 1-2.5.5-4.5C17 7 12 2 12 2z" fill="#47A248" />
          <path d="M12 2v20c.3 0 .7-.3 1-.8 0 0 4-4.5 4-8.7 0-4-3.5-8-5-10.5z" fill="#499D4A" />
        </svg>
      );

    case 'mysql':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M21 16c-1-3-4-5-8-5-3 0-5 1-6 2-1 1-1 2 0 3 1.5 1.5 4 2 7 2 3 0 6-1 7-2z" fill="#00758F" />
          <path d="M19 10c0-2-1.5-3.5-3.5-3.5-2.5 0-3.5 2-4.5 4 3 0 6 1 8 3v-3.5z" fill="#F29111" />
        </svg>
      );

    case 'c':
      return (
        <div className={`flex items-center justify-center font-bold text-sm text-sky-400 font-mono border border-sky-500/40 rounded px-1.5 py-0.5 ${className}`}>
          C
        </div>
      );

    case 'datastructuresandalgorithms':
    case 'dsa':
      return <Workflow className={`${className} text-indigo-400`} size={size} />;

    case 'objectorientedprogramming':
    case 'oop':
      return <Layers className={`${className} text-sky-400`} size={size} />;

    case 'problemsolving':
      return <Cpu className={`${className} text-emerald-400`} size={size} />;

    case 'git':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M21.6 10.7L13.3 2.4c-.6-.6-1.5-.6-2.1 0L9.1 4.5l2.7 2.7c.6-.2 1.3 0 1.8.5.5.5.7 1.2.5 1.8l2.6 2.6c.6-.2 1.3 0 1.8.5.8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0-.6-.6-.7-1.4-.4-2.1L12.7 10v4.7c.2.2.4.4.4.7 0 .9-.7 1.6-1.6 1.6s-1.6-.7-1.6-1.6c0-.5.2-.9.5-1.2V9.3L8 11.7c-.2.6-.7 1-1.3 1-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1L10.2 5 2.4 12.8c-.6.6-.6 1.5 0 2.1l8.3 8.3c.6.6 1.5.6 2.1 0l8.8-8.8c.6-.6.6-1.6 0-2.2z" fill="#F05032" />
        </svg>
      );

    case 'github':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );

    case 'vscode':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M17.5 2L5.8 11.2 2 8.3v7.4l3.8-2.9 11.7 9.2 4.5-2.2V4.2L17.5 2zm0 4.8l-7.2 5.2 7.2 5.2V6.8z" fill="#007ACC" />
        </svg>
      );

    case 'postman':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#FF6C37" />
          <path d="M7 13.5l3.5-3.5L14 13.5l3.5-3.5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'python':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M11.8 2c-3.1 0-4.9 1.4-4.9 3.3v2.4h5v.8H5.2C3.3 8.5 2 10.3 2 12.7c0 2.5 1.6 4.2 3.8 4.2h1.4v-2c0-2.3 2-4.2 4.3-4.2h4.5v-1.6c0-1.8-1.7-3.1-4.2-3.1zm-1.8 1.9c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z" fill="#3776AB" />
          <path d="M12.2 22c3.1 0 4.9-1.4 4.9-3.3v-2.4h-5v-.8h6.7c1.9 0 3.2-1.8 3.2-4.2 0-2.5-1.6-4.2-3.8-4.2h-1.4v2c0 2.3-2 4.2-4.3 4.2H8v1.6c0 1.8 1.7 3.1 4.2 3.1zm1.8-1.9c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" fill="#FFD438" />
        </svg>
      );

    case 'flask':
      return <Terminal className={`${className} text-stone-200`} size={size} />;

    case 'springboot':
    case 'spring':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M12 3l8 4.6v9.2L12 21.4 4 16.8V7.6L12 3z" fill="#6DB33F" />
          <path d="M12 6.5l5.2 3v6L12 18.5 6.8 15.5v-6L12 6.5z" fill="#FFFFFF" opacity="0.3" />
          <circle cx="12" cy="12" r="2.5" fill="#FFFFFF" />
        </svg>
      );

    default:
      return <Code2 className={`${className} text-sky-400`} size={size} />;
  }
};
