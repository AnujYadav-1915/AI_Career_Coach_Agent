"use client";

import React from 'react';
import { useTheme } from './ThemeContext';
import { Settings, Palette } from 'lucide-react';

export function ThemeSwitcher() {
  const { theme, setTheme, getThemeClasses } = useTheme();
  const classes = getThemeClasses();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-4">
      {isOpen && (
        <div className={`p-4 flex flex-col gap-3 ${classes.card} w-64 shadow-2xl`}>
          <div className="flex items-center gap-2 mb-2">
            <Palette className={`w-5 h-5 ${classes.accent}`} />
            <h3 className={`font-bold ${classes.textPrimary}`}>Select Theme</h3>
          </div>
          
          <button 
            onClick={() => setTheme(1)} 
            className={`w-full text-left px-3 py-2 text-sm ${theme === 1 ? classes.buttonPrimary : classes.buttonSecondary}`}
          >
            1. Minimalist (Vercel)
          </button>
          <button 
            onClick={() => setTheme(2)} 
            className={`w-full text-left px-3 py-2 text-sm ${theme === 2 ? classes.buttonPrimary : classes.buttonSecondary}`}
          >
            2. Fintech (Stripe)
          </button>
          <button 
            onClick={() => setTheme(3)} 
            className={`w-full text-left px-3 py-2 text-sm ${theme === 3 ? classes.buttonPrimary : classes.buttonSecondary}`}
          >
            3. Glass (macOS)
          </button>
          <button 
            onClick={() => setTheme(4)} 
            className={`w-full text-left px-3 py-2 text-sm ${theme === 4 ? classes.buttonPrimary : classes.buttonSecondary}`}
          >
            4. Brutalism (Indie)
          </button>
          <button 
            onClick={() => setTheme(5)} 
            className={`w-full text-left px-3 py-2 text-sm ${theme === 5 ? classes.buttonPrimary : classes.buttonSecondary}`}
          >
            5. Soft Minimalist
          </button>
        </div>
      )}
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-4 py-3 shadow-2xl ${classes.buttonPrimary} rounded-full`}
      >
        <Settings className="w-5 h-5" />
        <span className="font-semibold">Switch Theme</span>
      </button>
    </div>
  );
}
