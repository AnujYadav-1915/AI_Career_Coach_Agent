import re

with open('app/page.tsx', 'r') as f:
    content = f.read()

# Add useTheme import
if 'useTheme' not in content:
    content = content.replace('import { useRouter } from "next/navigation";', 'import { useRouter } from "next/navigation";\nimport { useTheme } from "@/app/_components/ThemeContext";')

# Add useTheme hook call
if 'const classes = getThemeClasses();' not in content:
    content = content.replace('const router = useRouter();', 'const router = useRouter();\n  const { getThemeClasses } = useTheme();\n  const classes = getThemeClasses();')

# Replace static body background
content = content.replace('<div className="min-h-screen bg-white">', '<div className={`min-h-screen ${classes.bodyBg}`}>')

# Replace header
content = content.replace('<header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">', '<header className={`${classes.headerBg} sticky top-0 z-50`}>')

# Replace buttons
content = content.replace('className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"', 'className={`px-6 py-2 ${classes.buttonPrimary} transition-all`}')
content = content.replace('className="px-8 py-4 bg-black text-white rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2"', 'className={`px-8 py-4 text-lg flex items-center gap-2 ${classes.buttonPrimary} transition-all`}')
content = content.replace('className="px-8 py-4 border-2 border-gray-300 text-black rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-200"', 'className={`px-8 py-4 text-lg border-2 ${classes.buttonSecondary} transition-all duration-200`}')
content = content.replace('className="px-10 py-4 bg-white text-black rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-1"', 'className={`px-10 py-4 text-lg font-semibold ${classes.buttonPrimary}`}')

# Replace Cards
content = content.replace('${feature.color} rounded-xl p-8 transition-all duration-300 hover:shadow-md border border-gray-200 relative overflow-hidden', '${classes.card} p-8 transition-all duration-300 relative overflow-hidden')

# Replace text colors
content = content.replace('text-gray-900', '${classes.textPrimary}')
content = content.replace('text-gray-600', '${classes.textSecondary}')
content = content.replace('text-slate-900', '${classes.textPrimary}')
content = content.replace('text-blue-600', '${classes.accent}')

# Replace announcement badge
content = content.replace('className="inline-flex items-center px-4 py-2 bg-gray-100 text-${classes.textPrimary} rounded-full text-sm font-medium mb-8 hover:bg-gray-200 transition-colors cursor-pointer"', 'className={`inline-flex items-center px-4 py-2 ${classes.badge} text-sm mb-8 hover:opacity-80 transition-opacity cursor-pointer`}')

# Replace CTA Section
content = content.replace('<section className="py-20 bg-slate-900">', '<section className={`py-20 ${classes.container}`}>')
content = content.replace('<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">', '<h2 className={`text-4xl md:text-5xl font-bold mb-6 ${classes.textPrimary}`}>')
content = content.replace('<p className="text-xl text-blue-100 mb-8 leading-relaxed">', '<p className={`text-xl mb-8 leading-relaxed ${classes.textSecondary}`}>')

# Fix className strings that now have variables in them
content = content.replace('className="text-5xl md:text-7xl font-bold ${classes.textPrimary} mb-6 leading-tight"', 'className={`text-5xl md:text-7xl font-bold ${classes.textPrimary} mb-6 leading-tight`}')
content = content.replace('className="text-xl md:text-2xl ${classes.textSecondary} mb-12 max-w-4xl mx-auto leading-relaxed"', 'className={`text-xl md:text-2xl ${classes.textSecondary} mb-12 max-w-4xl mx-auto leading-relaxed`}')
content = content.replace('className="block ${classes.accent}"', 'className={`block ${classes.accent}`}')
content = content.replace('className="text-4xl md:text-5xl font-bold ${classes.textPrimary} mb-6"', 'className={`text-4xl md:text-5xl font-bold ${classes.textPrimary} mb-6`}')
content = content.replace('className="text-xl ${classes.textSecondary} max-w-3xl mx-auto"', 'className={`text-xl ${classes.textSecondary} max-w-3xl mx-auto`}')
content = content.replace('className="text-2xl font-bold ${classes.textPrimary} ml-4"', 'className={`text-2xl font-bold ${classes.textPrimary} ml-4`}')
content = content.replace('className="text-2xl font-bold ${classes.textPrimary}"', 'className={`text-2xl font-bold ${classes.textPrimary}`}')
content = content.replace('className="${classes.textSecondary} text-lg leading-relaxed mb-4"', 'className={`${classes.textSecondary} text-lg leading-relaxed mb-4`}')


with open('app/page.tsx', 'w') as f:
    f.write(content)
