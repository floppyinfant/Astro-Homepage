from pathlib import Path
import re

path = Path(r'L:\SPACES\Webspace\Astro-Homepage\html\index.html')
text = path.read_text(encoding='utf-8')
pattern = re.compile(r'("img"\s*:\s*"([^"]*)",\s*)"text"\s*:\s*"([^"]*)",\s*"wiki"\s*:\s*"([^"]*)",\s*"attribution"\s*:\s*"([^"]*)"')

def repl(match):
    return f'{match.group(1)}"attribution": "{match.group(5)}",\n                    "text": "{match.group(3)}",\n                    "wiki": "{match.group(4)}"'

text, count = pattern.subn(repl, text)
path.write_text(text, encoding='utf-8')
print(f'updated {count} entries')
