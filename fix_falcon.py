import re

def fix_falcon(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    # 1. Replace the inner catch fallback (parse error)
    inner_catch_pattern = r"catch \(parseError\) \{\n\s*console\.error\('Failed to parse Falcon response:', parseError\);\n\s*// Fallback response\n\s*judgingResult = \{[\s\S]*?modelVersion: \"falcon-7b-instruct-fallback\"\n\s*\};\n\s*\}"
    inner_replacement = "catch (parseError) {\n      console.error('Failed to parse Falcon response:', parseError);\n      throw new Error('Failed to parse AI response as JSON');\n    }"
    content = re.sub(inner_catch_pattern, inner_replacement, content)

    # 2. Replace the outer catch fallback (API error)
    outer_catch_pattern = r"catch \(error\) \{\n\s*console\.error\('Hugging Face API error:', error\);\n\s*// Fallback response when API fails\n\s*const fallbackResponse: FalconJudgingResponse = \{[\s\S]*?warning: 'Using fallback response due to API error'\n\s*\}\);\n\s*\}"
    outer_replacement = "catch (error) {\n    console.error('Hugging Face API error:', error);\n    return NextResponse.json({ success: false, error: 'Failed to generate AI evaluation. Please try again.' }, { status: 500 });\n  }"
    content = re.sub(outer_catch_pattern, outer_replacement, content)

    with open(filepath, 'w') as f:
        f.write(content)

fix_falcon('app/api/falcon-interview-judge/route.tsx')
fix_falcon('app/api/falcon-finetuned-judge/route.tsx')
print("Done")
