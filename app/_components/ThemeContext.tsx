"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeType = 1 | 2 | 3 | 4 | 5;

interface ThemeContextProps {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  getThemeClasses: () => any;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('app-theme-preview');
    if (savedTheme) {
      setTheme(parseInt(savedTheme) as ThemeType);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('app-theme-preview', theme.toString());
      // Apply body class
      document.body.className = `antialiased transition-colors duration-300 ${getThemeClasses().bodyBg}`;
    }
  }, [theme, mounted]);

  const getThemeClasses = () => {
    switch (theme) {
      case 1: // The DevTools Minimalist
        return {
          bodyBg: 'bg-white',
          container: 'bg-white border-b border-gray-200',
          card: 'bg-white border border-gray-200 shadow-sm rounded-sm',
          buttonPrimary: 'bg-black text-white hover:bg-gray-800 rounded-sm border-none shadow-none font-medium',
          buttonSecondary: 'bg-white text-black border border-gray-200 hover:bg-gray-50 rounded-sm',
          textPrimary: 'text-black font-sans tracking-tight',
          textSecondary: 'text-gray-600',
          accent: 'text-black font-bold',
          badge: 'bg-gray-100 text-gray-800 border border-gray-200 rounded-full',
          headerBg: 'bg-white/90 backdrop-blur-sm border-b border-gray-200',
        };
      case 2: // The Fintech Trust (Stripe)
        return {
          bodyBg: 'bg-slate-50',
          container: 'bg-white border-b border-slate-200',
          card: 'bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-transparent rounded-xl',
          buttonPrimary: 'bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg shadow-sm font-semibold transition-all',
          buttonSecondary: 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 rounded-lg shadow-sm',
          textPrimary: 'text-slate-900',
          textSecondary: 'text-slate-500',
          accent: 'text-indigo-600',
          badge: 'bg-indigo-50 text-indigo-700 rounded-full font-medium',
          headerBg: 'bg-white/80 backdrop-blur-md border-b border-slate-200',
        };
      case 3: // The Startup Glass (Dark Mode)
        return {
          bodyBg: 'bg-[#0a0a0a]',
          container: 'bg-[#0a0a0a] border-b border-white/10',
          card: 'bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xl rounded-2xl',
          buttonPrimary: 'bg-white text-black hover:bg-gray-200 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all',
          buttonSecondary: 'bg-white/5 text-white border border-white/10 hover:bg-white/10 rounded-full',
          textPrimary: 'text-white',
          textSecondary: 'text-gray-400',
          accent: 'text-white font-semibold',
          badge: 'bg-white/10 text-gray-200 border border-white/20 rounded-full',
          headerBg: 'bg-[#0a0a0a]/70 backdrop-blur-lg border-b border-white/10',
        };
      case 4: // Neo-Brutalism
        return {
          bodyBg: 'bg-[#f4f4f0]',
          container: 'bg-[#f4f4f0] border-b-4 border-black',
          card: 'bg-white border-4 border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] rounded-none',
          buttonPrimary: 'bg-[#a3e635] text-black border-4 border-black hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] shadow-[6px_6px_0_0_rgba(0,0,0,1)] rounded-none font-bold uppercase transition-all',
          buttonSecondary: 'bg-white text-black border-4 border-black hover:bg-gray-100 rounded-none shadow-[4px_4px_0_0_rgba(0,0,0,1)] font-bold uppercase',
          textPrimary: 'text-black font-mono tracking-tighter',
          textSecondary: 'text-black font-bold',
          accent: 'text-black bg-[#a3e635] px-2',
          badge: 'bg-black text-white rounded-none uppercase font-bold border-2 border-black',
          headerBg: 'bg-[#f4f4f0] border-b-4 border-black',
        };
      case 5: // Soft Minimalist
        return {
          bodyBg: 'bg-[#faf9f6]',
          container: 'bg-[#faf9f6] border-b border-[#e5e4e0]',
          card: 'bg-white border border-[#f0ede6] shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl',
          buttonPrimary: 'bg-[#788572] text-white hover:bg-[#636e5e] rounded-full shadow-md font-medium transition-colors',
          buttonSecondary: 'bg-[#f4f1eb] text-[#5a5c59] hover:bg-[#e8e4dc] rounded-full transition-colors',
          textPrimary: 'text-[#2b2a27]',
          textSecondary: 'text-[#7a7873]',
          accent: 'text-[#788572]',
          badge: 'bg-[#f4f1eb] text-[#788572] rounded-full',
          headerBg: 'bg-[#faf9f6]/80 backdrop-blur-md border-b border-[#e5e4e0]',
        };
      default:
        return {
          bodyBg: 'bg-white',
          container: 'bg-white border-b border-gray-200',
          card: 'bg-white border border-gray-200 shadow-sm rounded-sm',
          buttonPrimary: 'bg-black text-white hover:bg-gray-800 rounded-sm border-none shadow-none font-medium',
          buttonSecondary: 'bg-white text-black border border-gray-200 hover:bg-gray-50 rounded-sm',
          textPrimary: 'text-black font-sans tracking-tight',
          textSecondary: 'text-gray-600',
          accent: 'text-black font-bold',
          badge: 'bg-gray-100 text-gray-800 border border-gray-200 rounded-full',
          headerBg: 'bg-white/90 backdrop-blur-sm border-b border-gray-200',
        };
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, getThemeClasses }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
