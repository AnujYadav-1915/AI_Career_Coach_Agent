import re

with open('app/page.tsx', 'r') as f:
    content = f.read()

def fix_template_literals(match):
    inner = match.group(1)
    if '${' in inner:
        return f'className={{`{inner}`}}'
    return match.group(0)

content = re.sub(r'className="([^"]*)"', fix_template_literals, content)

with open('app/page.tsx', 'w') as f:
    f.write(content)
