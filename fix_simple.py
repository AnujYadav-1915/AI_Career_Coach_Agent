import re

def fix_simple(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    catch_pattern = r"catch \(parseError\) \{\n\s*console\.error\(\"Error parsing interview response:\", parseError\);\n\s*// Fallback response[\s\S]*?return NextResponse\.json\(fallbackResponse\);\n\s*\}"
    replacement = "catch (parseError) {\n            console.error(\"Error parsing interview response:\", parseError);\n            return NextResponse.json({ error: \"Failed to generate AI evaluation. Please try again.\" }, { status: 500 });\n        }"
    
    content = re.sub(catch_pattern, replacement, content)
    
    with open(filepath, 'w') as f:
        f.write(content)

fix_simple('app/api/ai-interview-agent-simple/route.tsx')
print("Done")
