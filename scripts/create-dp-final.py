#!/usr/bin/env python3
"""
D+P Logo - FINAL
Basierend auf v3-more-space
Regel: Strichstärke = Abstand zwischen den Ds
"""

from pathlib import Path

OUTPUT_DIR = Path(__file__).parent.parent / "design" / "generated"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

def create_logo(stroke_width: float, name: str):
    """
    Erstellt Logo wo:
    - Strichstärke = Abstand zwischen äußerem und innerem D
    """
    
    size = 24
    sw = stroke_width  # Strichstärke
    gap = sw  # Abstand = Strichstärke
    
    # Äußeres D
    outer_left = 2
    outer_top = 2
    outer_bottom = 22
    outer_arc_start = 10  # Wo der Bogen beginnt
    outer_radius = 10
    
    # Inneres D - Abstand = Strichstärke
    inner_left = outer_left + sw + gap  # 2 + sw + sw = 2 + 2*sw
    inner_top = outer_top + sw + gap
    inner_bottom = outer_bottom - sw - gap
    inner_arc_start = outer_arc_start  # Gleicher X-Punkt für Bogen
    inner_radius = (inner_bottom - inner_top) / 2
    
    svg = f'''<svg width="{size}" height="{size}" viewBox="0 0 {size} {size}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- ÄUSSERES D -->
  <path d="M {outer_left} {outer_top} L {outer_left} {inner_bottom}" stroke="currentColor" stroke-width="{sw}" stroke-linecap="square"/>
  <path d="M {outer_left} {outer_top} L {outer_arc_start} {outer_top}" stroke="currentColor" stroke-width="{sw}" stroke-linecap="square"/>
  <path d="M {outer_arc_start} {outer_top} A {outer_radius} {outer_radius} 0 0 1 {outer_arc_start} {outer_bottom}" stroke="currentColor" stroke-width="{sw}" fill="none"/>
  <path d="M {outer_arc_start} {outer_bottom} L {outer_left} {outer_bottom}" stroke="currentColor" stroke-width="{sw}" stroke-linecap="square"/>

  <!-- INNERES D (Abstand = Strichstärke) -->
  <path d="M {inner_left} {inner_top} L {inner_left} {inner_bottom}" stroke="currentColor" stroke-width="{sw}" stroke-linecap="square"/>
  <path d="M {inner_left} {inner_top} L {inner_arc_start} {inner_top}" stroke="currentColor" stroke-width="{sw}" stroke-linecap="square"/>
  <path d="M {inner_arc_start} {inner_top} A {inner_radius} {inner_radius} 0 0 1 {inner_arc_start} {inner_bottom}" stroke="currentColor" stroke-width="{sw}" fill="none"/>
  <path d="M {inner_arc_start} {inner_bottom} L {outer_left} {inner_bottom}" stroke="currentColor" stroke-width="{sw}" stroke-linecap="square"/>
</svg>'''
    
    path = OUTPUT_DIR / f"{name}.svg"
    path.write_text(svg)
    return svg


# Generiere verschiedene Strichdicken
logos = {}
for sw in [1.5, 2.0, 2.5, 3.0]:
    name = f"dp-logo-sw{sw}".replace(".", "_")
    logos[name] = create_logo(sw, name)
    print(f"✓ {name} (stroke={sw}, gap={sw})")


# Preview
html = '''<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>D+P Logo - Final (stroke = gap)</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: -apple-system, sans-serif; 
            background: #fff; 
            padding: 3rem;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        h1 { font-weight: 300; margin-bottom: 0.5rem; }
        .subtitle { color: #888; margin-bottom: 3rem; font-size: 0.9rem; }
        .grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
            max-width: 800px;
        }
        .item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            padding: 2rem;
            background: #f8f8f8;
            border-radius: 16px;
        }
        .item:hover { background: #f0f0f0; }
        .item svg { width: 72px; height: 72px; }
        .item span { font-size: 0.7rem; color: #666; }
        .sizes {
            display: flex;
            gap: 2rem;
            align-items: center;
            margin-top: 3rem;
            padding: 2rem;
            background: #fafafa;
            border-radius: 12px;
        }
        .sizes span { font-size: 0.8rem; color: #888; }
    </style>
</head>
<body>
    <h1>D+P Logo Final</h1>
    <p class="subtitle">Strichstärke = Abstand zwischen den Ds</p>
    <div class="grid">
'''

for name, svg in logos.items():
    label = name.replace("dp-logo-", "").replace("dp-", "")
    html += f'<div class="item">{svg.replace(chr(10), " ")}<span>{label}</span></div>\n'

# Größen-Demo mit sw2_0 Version
best = logos["dp-logo-sw2_0"].replace(chr(10), " ")
html += f'''    </div>
    <div class="sizes">
        <span>16px</span>
        {best.replace('width="24"', 'width="16"').replace('height="24"', 'height="16"')}
        <span>24px</span>
        {best}
        <span>32px</span>
        {best.replace('width="24"', 'width="32"').replace('height="24"', 'height="32"')}
        <span>48px</span>
        {best.replace('width="24"', 'width="48"').replace('height="24"', 'height="48"')}
        <span>64px</span>
        {best.replace('width="24"', 'width="64"').replace('height="24"', 'height="64"')}
    </div>
</body>
</html>'''

preview_path = OUTPUT_DIR / "dp-final-preview.html"
preview_path.write_text(html)
print(f"\n🎨 {preview_path}")
