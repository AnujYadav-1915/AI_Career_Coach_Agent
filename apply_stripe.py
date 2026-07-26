import re

with open('app/page.tsx', 'r') as f:
    content = f.read()

# Remove useTheme imports and setup
content = content.replace('import { useTheme } from "@/app/_components/ThemeContext";\n', '')
content = content.replace('  const { getThemeClasses } = useTheme();\n  const classes = getThemeClasses();\n', '')

# Replace dynamic classes with hardcoded Stripe Theme + White Bg
# bodyBg
content = content.replace('`min-h-screen ${classes.bodyBg}`', '"min-h-screen bg-white"')
# headerBg
content = content.replace('`${classes.headerBg} sticky top-0 z-50`', '"bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50"')

# Text
content = content.replace('${classes.textPrimary}', 'text-slate-900')
content = content.replace('${classes.textSecondary}', 'text-slate-500')
content = content.replace('${classes.accent}', 'text-indigo-600')

# Buttons
content = content.replace('${classes.buttonPrimary}', 'bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg shadow-sm font-semibold transition-all')
content = content.replace('${classes.buttonSecondary}', 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 rounded-lg shadow-sm')

# Badge
content = content.replace('${classes.badge}', 'bg-indigo-50 text-indigo-700 rounded-full font-medium')

# Container
content = content.replace('${classes.container}', 'bg-white border-b border-slate-200')

# Cards
content = content.replace('${classes.card}', 'bg-white shadow-md border border-slate-100 rounded-xl')

# Clean up any weird string literals left over
content = content.replace('className={`', 'className="')
content = content.replace('`}', '"')

# Fix cases where className was something like: className="px-6 py-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg shadow-sm font-semibold transition-all transition-all"
content = content.replace('transition-all transition-all', 'transition-all')
content = content.replace('transition-all duration-200 transition-all', 'transition-all duration-200')
content = content.replace('className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight"', 'className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight"')

with open('app/page.tsx', 'w') as f:
    f.write(content)
