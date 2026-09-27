from pathlib import Path
import zipfile
root = Path(__file__).resolve().parents[1]
excluded = {'node_modules', '.next', '.next-production', '.git', '.codex', '.agents', '__pycache__'}
files = sorted(p for p in root.rglob('*') if p.is_file() and not any(x in excluded for x in p.relative_to(root).parts) and p.name not in {'DEMO_CODE.md', 'bloom-english-demo.zip', '.DS_Store'} and not p.name.endswith('.tsbuildinfo') and not p.name.startswith('.env'))
text = ['# Bloom English — toàn bộ mã nguồn\n\nẢnh nằm trong ZIP, thư mục `public/images`.\n']
for p in files:
    if p.suffix.lower() in {'.jpg', '.png', '.jpeg', '.webp'}:
        continue
    language = {'.tsx':'tsx','.ts':'ts','.css':'css','.json':'json','.cjs':'javascript','.py':'python','.md':'markdown','.svg':'xml'}.get(p.suffix,'text')
    text.append(f'\n## {p.relative_to(root)}\n\n````{language}\n{p.read_text()}\n````\n')
(root/'DEMO_CODE.md').write_text(''.join(text))
with zipfile.ZipFile(root/'bloom-english-demo.zip', 'w', zipfile.ZIP_DEFLATED) as z:
    for p in [*files,root/'DEMO_CODE.md']:
        z.write(p, Path('bloom-english')/p.relative_to(root))
    assert z.testzip() is None
print(f'Packaged {len(files)} files plus DEMO_CODE.md')
