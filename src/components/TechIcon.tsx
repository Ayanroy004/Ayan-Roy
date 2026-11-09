import React from "react";
import {
  Code2,
  Database,
  Cpu,
  Layers,
  Terminal,
  Server,
  Workflow,
  Sparkles,
} from "lucide-react";

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
  style?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({
  name,
  className = "w-5 h-5",
  size = 20,
}) => {
  const iconKey = name.toLowerCase().replace(/[^a-z0-9]/g, "");

  switch (iconKey) {
    case "html5":
    case "html":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d="M4 3l1.8 17.5L12 22l6.2-1.5L20 3H4z" fill="#E34F26" />
          <path d="M12 4.5v15.8l4.8-1.2 1.4-14.6H12z" fill="#EF652A" />
          <path
            d="M7.7 7h8.6l-.3 2.5H12v2.5h3.8l-.5 5.2-3.3.9v-2.6l1.6-.4.2-1.8H7.9L7.7 7z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "css3":
    case "css":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d="M4 3l1.8 17.5L12 22l6.2-1.5L20 3H4z" fill="#1572B6" />
          <path d="M12 4.5v15.8l4.8-1.2 1.4-14.6H12z" fill="#33A9DC" />
          <path
            d="M7.7 7h8.6l-.3 2.5H12v2.5h3.8l-.5 5.2-3.3.9v-2.6l1.6-.4.2-1.8H7.9L7.7 7z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "javascript":
    case "js":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="JavaScript"
          role="img"
          viewBox="0 0 512 512"
          width={size}
          height={size}
        >
          <rect width="512" height="512" rx="15%" fill="#f7df1e" />
          <path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z" />
        </svg>
      );

    case "react":
    case "reactjs":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
        >
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            stroke="#61DAFB"
            strokeWidth="1.5"
            transform="rotate(0 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            stroke="#61DAFB"
            strokeWidth="1.5"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            stroke="#61DAFB"
            strokeWidth="1.5"
            transform="rotate(120 12 12)"
          />
          <circle cx="12" cy="12" r="2" fill="#61DAFB" />
        </svg>
      );

    case "nextjs":
    case "next":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            cx="12"
            cy="12"
            r="11"
            fill="#000000"
            stroke="#FFFFFF"
            strokeWidth="1"
          />
          <path
            d="M8 8v8M16 8l-8 9"
            stroke="#FFFFFF"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M16 8v5"
            stroke="#FFFFFF"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );

    case "tailwindcss":
    case "tailwind":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6 10c1.5-3 4-3.5 5.5-2 1.5 1.5 2 3.5 4.5 3.5 2 0 3.5-1.5 4.5-3.5-1.5 3-4 3.5-5.5 2-1.5-1.5-2-3.5-4.5-3.5-2 0-3.5 1.5-4.5 3.5zm-4 6c1.5-3 4-3.5 5.5-2 1.5 1.5 2 3.5 4.5 3.5 2 0 3.5-1.5 4.5-3.5-1.5 3-4 3.5-5.5 2-1.5-1.5-2-3.5-4.5-3.5-2 0-3.5 1.5-4.5 3.5z"
            fill="#38BDF8"
          />
        </svg>
      );

    case "nodejs":
    case "node":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2z" fill="#539E43" />
          <path d="M12 4.2L5 8.2v7.6l7 4 7-4V8.2l-7-4z" fill="#333333" />
          <path
            d="M12 6.5v11m-4-7l4 2.5 4-2.5"
            stroke="#68A063"
            strokeWidth="1.4"
          />
        </svg>
      );

    case "expressjs":
    case "express":
      return (
        <div
          className={`flex items-center justify-center font-bold text-xs tracking-tighter text-white font-mono ${className}`}
        >
          ex
        </div>
      );

    case "java":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M7 16c3 .5 7 .5 10 0-1-1.5-2-2-5-2-3 0-4 .5-5 2z"
            fill="#E76F00"
          />
          <path
            d="M8 18.5c2.5.3 5.5.3 8 0-.8-1-1.5-1.5-4-1.5-2.5 0-3.2.5-4 1.5z"
            fill="#E76F00"
          />
          <path
            d="M9 13.5c1.5-.5 3-.5 4.5 0 0 0 1-1.5-2.2-2.5-3.2-1-2.3 2.5-2.3 2.5z"
            fill="#5382A1"
          />
          <path
            d="M13.5 8c0 0 1.5 1-1 2.5 3 .5 4.5-1.5 1-2.5z"
            fill="#5382A1"
          />
          <path d="M6 21c4 .3 8 .3 12 0-2-1-5-1-6-1s-4 0-6 1z" fill="#E76F00" />
        </svg>
      );

    case "php":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
        >
          <ellipse cx="12" cy="12" rx="11" ry="7" fill="#777BB4" />
          <text
            x="12"
            y="15"
            fill="#FFFFFF"
            fontSize="9"
            fontWeight="bold"
            textAnchor="middle"
            fontFamily="sans-serif"
          >
            PHP
          </text>
        </svg>
      );

    case "mongodb":
    case "mongo":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 2C11.5 4 6 9 6 14.5a6 6 0 0 0 11.5 2.5c.5-1 1-2.5.5-4.5C17 7 12 2 12 2z"
            fill="#47A248"
          />
          <path
            d="M12 2v20c.3 0 .7-.3 1-.8 0 0 4-4.5 4-8.7 0-4-3.5-8-5-10.5z"
            fill="#499D4A"
          />
        </svg>
      );

    case "mysql":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M21 16c-1-3-4-5-8-5-3 0-5 1-6 2-1 1-1 2 0 3 1.5 1.5 4 2 7 2 3 0 6-1 7-2z"
            fill="#00758F"
          />
          <path
            d="M19 10c0-2-1.5-3.5-3.5-3.5-2.5 0-3.5 2-4.5 4 3 0 6 1 8 3v-3.5z"
            fill="#F29111"
          />
        </svg>
      );

    case "c":
      return (
        <div
          className={`flex items-center justify-center font-bold text-sm text-sky-400 font-mono border border-sky-500/40 rounded px-1.5 py-0.5 ${className}`}
        >
          C
        </div>
      );

    case "datastructuresandalgorithms":
    case "dsa":
      return (
        <Workflow className={`${className} text-indigo-400`} size={size} />
      );

    case "objectorientedprogramming":
    case "oop":
      return <Layers className={`${className} text-sky-400`} size={size} />;

    case "problemsolving":
      return <Cpu className={`${className} text-emerald-400`} size={size} />;

    case "git":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M21.6 10.7L13.3 2.4c-.6-.6-1.5-.6-2.1 0L9.1 4.5l2.7 2.7c.6-.2 1.3 0 1.8.5.5.5.7 1.2.5 1.8l2.6 2.6c.6-.2 1.3 0 1.8.5.8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0-.6-.6-.7-1.4-.4-2.1L12.7 10v4.7c.2.2.4.4.4.7 0 .9-.7 1.6-1.6 1.6s-1.6-.7-1.6-1.6c0-.5.2-.9.5-1.2V9.3L8 11.7c-.2.6-.7 1-1.3 1-.9 0-1.6-.7-1.6-1.6 0-.4.2-.8.5-1.1L10.2 5 2.4 12.8c-.6.6-.6 1.5 0 2.1l8.3 8.3c.6.6 1.5.6 2.1 0l8.8-8.8c.6-.6.6-1.6 0-2.2z"
            fill="#F05032"
          />
        </svg>
      );

    case "github":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      );

    case "vscode":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M17.5 2L5.8 11.2 2 8.3v7.4l3.8-2.9 11.7 9.2 4.5-2.2V4.2L17.5 2zm0 4.8l-7.2 5.2 7.2 5.2V6.8z"
            fill="#007ACC"
          />
        </svg>
      );

    case "postman":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle cx="12" cy="12" r="10" fill="#FF6C37" />
          <path
            d="M7 13.5l3.5-3.5L14 13.5l3.5-3.5"
            stroke="#FFFFFF"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "python":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M11.8 2c-3.1 0-4.9 1.4-4.9 3.3v2.4h5v.8H5.2C3.3 8.5 2 10.3 2 12.7c0 2.5 1.6 4.2 3.8 4.2h1.4v-2c0-2.3 2-4.2 4.3-4.2h4.5v-1.6c0-1.8-1.7-3.1-4.2-3.1zm-1.8 1.9c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z"
            fill="#3776AB"
          />
          <path
            d="M12.2 22c3.1 0 4.9-1.4 4.9-3.3v-2.4h-5v-.8h6.7c1.9 0 3.2-1.8 3.2-4.2 0-2.5-1.6-4.2-3.8-4.2h-1.4v2c0 2.3-2 4.2-4.3 4.2H8v1.6c0 1.8 1.7 3.1 4.2 3.1zm1.8-1.9c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z"
            fill="#FFD438"
          />
        </svg>
      );

    case "flask":
      return <Terminal className={`${className} text-stone-200`} size={size} />;

    case "springboot":
    case "spring":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d="M12 3l8 4.6v9.2L12 21.4 4 16.8V7.6L12 3z" fill="#6DB33F" />
          <path
            d="M12 6.5l5.2 3v6L12 18.5 6.8 15.5v-6L12 6.5z"
            fill="#FFFFFF"
            opacity="0.3"
          />
          <circle cx="12" cy="12" r="2.5" fill="#FFFFFF" />
        </svg>
      );
    case "websocket":
    case "socket":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#919191"
          width={size}
          height={size}
          viewBox="0 0 32 32"
        >
          <path d="M15.917 0.021c-1.339 0.005-2.672 0.172-3.969 0.505-6.24 1.552-11.193 7.203-11.828 13.613-0.787 6.063 2.281 12.381 7.525 15.511 5.152 3.224 12.125 3.095 17.167-0.296 4.532-2.943 7.349-8.303 7.183-13.715-0.077-5.353-3.083-10.557-7.683-13.307-2.505-1.547-5.452-2.323-8.395-2.312zM15.828 2.281c6.593-0.011 13.052 5.088 13.713 11.901 1.261 7.547-5.005 15.219-12.651 15.443-7.271 0.724-14.303-5.443-14.511-12.745-0.541-5.911 3.36-11.781 8.932-13.735 1.437-0.572 2.969-0.864 4.516-0.859zM22.62 6.584c-3.584 2.78-7.016 5.744-10.521 8.609 1.604 0.020 3.219 0.020 4.828 0.009 1.88-2.885 3.813-5.733 5.693-8.619zM15.068 16.787c-1.88 2.891-3.817 5.744-5.699 8.635 3.595-2.776 7.011-5.76 10.537-8.609-1.615-0.020-3.229-0.025-4.839-0.025z" />
        </svg>
      );
    case "docker":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            fill="#2396ED"
            d="M12.342 4.536l.15-.227.262.159.116.083c.28.216.869.768.996 1.684.223-.04.448-.06.673-.06.534 0 .893.124 1.097.227l.105.057.068.045.191.156-.066.2a2.044 2.044 0 01-.47.73c-.29.299-.8.652-1.609.698l-.178.005h-.148c-.37.977-.867 2.078-1.702 3.066a7.081 7.081 0 01-1.74 1.488 7.941 7.941 0 01-2.549.968c-.644.125-1.298.187-1.953.185-1.45 0-2.73-.288-3.517-.792-.703-.449-1.243-1.182-1.606-2.177a8.25 8.25 0 01-.461-2.83.516.516 0 01.432-.516l.068-.005h10.54l.092-.007.149-.016c.256-.034.646-.11.92-.27-.328-.543-.421-1.178-.268-1.854a3.3 3.3 0 01.3-.81l.108-.187zM2.89 5.784l.04.007a.127.127 0 01.077.082l.006.04v1.315l-.006.041a.127.127 0 01-.078.082l-.039.006H1.478a.124.124 0 01-.117-.088l-.007-.04V5.912l.007-.04a.127.127 0 01.078-.083l.039-.006H2.89zm1.947 0l.039.007a.127.127 0 01.078.082l.006.04v1.315l-.007.041a.127.127 0 01-.078.082l-.039.006H3.424a.125.125 0 01-.117-.088L3.3 7.23V5.913a.13.13 0 01.085-.123l.039-.007h1.413zm1.976 0l.039.007a.127.127 0 01.077.082l.007.04v1.315l-.007.041a.127.127 0 01-.078.082l-.039.006H5.4a.124.124 0 01-.117-.088l-.006-.04V5.912l.006-.04a.127.127 0 01.078-.083l.039-.006h1.413zm1.952 0l.039.007a.127.127 0 01.078.082l.007.04v1.315a.13.13 0 01-.085.123l-.04.006H7.353a.124.124 0 01-.117-.088l-.006-.04V5.912l.006-.04a.127.127 0 01.078-.083l.04-.006h1.412zm1.97 0l.039.007a.127.127 0 01.078.082l.006.04v1.315a.13.13 0 01-.085.123l-.039.006H9.322a.124.124 0 01-.117-.088l-.006-.04V5.912l.006-.04a.127.127 0 01.078-.083l.04-.006h1.411zM4.835 3.892l.04.007a.127.127 0 01.077.081l.007.041v1.315a.13.13 0 01-.085.123l-.039.007H3.424a.125.125 0 01-.117-.09l-.007-.04V4.021a.13.13 0 01.085-.122l.039-.007h1.412zm1.976 0l.04.007a.127.127 0 01.077.081l.007.041v1.315a.13.13 0 01-.085.123l-.039.007H5.4a.125.125 0 01-.117-.09l-.006-.04V4.021l.006-.04a.127.127 0 01.078-.082l.039-.007h1.412zm1.953 0c.054 0 .1.037.117.088l.007.041v1.315a.13.13 0 01-.085.123l-.04.007H7.353a.125.125 0 01-.117-.09l-.006-.04V4.021l.006-.04a.127.127 0 01.078-.082l.04-.007h1.412zm0-1.892c.054 0 .1.037.117.088l.007.04v1.316a.13.13 0 01-.085.123l-.04.006H7.353a.124.124 0 01-.117-.088l-.006-.04V2.128l.006-.04a.127.127 0 01.078-.082L7.353 2h1.412z"
          />
        </svg>
      );

    default:
      return <Code2 className={`${className} text-sky-400`} size={size} />;
  }
};
