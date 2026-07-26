import re
import os

def clean_theme(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.tsx'):
                path = os.path.join(root, file)
                with open(path, 'r') as f:
                    content = f.read()
                
                # We previously changed to Minimalist. Now changing to Stripe Fintech.
                content = content.replace('bg-black', 'bg-indigo-600')
                content = content.replace('text-black', 'text-slate-900')
                content = content.replace('hover:bg-gray-800', 'hover:bg-indigo-700')
                content = content.replace('border-gray-300', 'border-slate-200')
                content = content.replace('border-gray-200', 'border-slate-200')
                content = content.replace('shadow-sm', 'shadow-sm') # Keep soft shadow
                
                # Change text-slate-900 back to white if it's inside a button (bg-indigo-600 text-white)
                content = content.replace('bg-indigo-600 text-slate-900', 'bg-indigo-600 text-white')
                
                # Rounding
                content = content.replace('rounded-none', 'rounded-lg')
                content = content.replace('rounded-sm', 'rounded-lg')
                
                with open(path, 'w') as f:
                    f.write(content)

clean_theme('app/(routes)/dashboard')
clean_theme('app/(routes)/ai-tools')
