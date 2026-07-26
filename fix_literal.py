import re

with open('app/page.tsx', 'r') as f:
    content = f.read()

# Fix the broken template literal
broken_string = 'className="${feature.color} rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:scale-105 border border-gray-200 relative overflow-hidden ${!isSignedIn ? \'cursor-pointer\' : \'cursor-default\'}"'
fixed_string = 'className={`\\${feature.color} rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:scale-105 border border-gray-200 relative overflow-hidden \\${!isSignedIn ? \'cursor-pointer\' : \'cursor-default\'}`}'

# wait, using Python we can just escape the curly brace for the literal output
# actually, it's easier to just use standard string replacement
fixed_string = 'className={`${feature.color} rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:scale-105 border border-gray-200 relative overflow-hidden ${!isSignedIn ? \\\'cursor-pointer\\\' : \\\'cursor-default\\\'}`}'
content = content.replace(broken_string, fixed_string)

with open('app/page.tsx', 'w') as f:
    f.write(content)
