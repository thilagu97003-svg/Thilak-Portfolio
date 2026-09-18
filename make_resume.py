import subprocess
import sys

# Install python-docx if not present
try:
    import docx
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "python-docx"])
    import docx

from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml import parse_xml
from docx.oxml.ns import nsdecls

doc = docx.Document()

for section in doc.sections:
    section.top_margin = Inches(0.5)
    section.bottom_margin = Inches(0.5)
    section.left_margin = Inches(0.6)
    section.right_margin = Inches(0.6)

PRIMARY_HEX = "0D6EFD"

def add_heading(text):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(8)
    p.paragraph_format.space_after = Pt(3)
    p.paragraph_format.keep_with_next = True
    run = p.add_run(text)
    run.font.name = 'Arial'
    run.font.size = Pt(11)
    run.font.bold = True
    run.font.color.rgb = RGBColor(13, 110, 253)
    pPr = p._p.get_or_add_pPr()
    pBdr = parse_xml(f'<w:pBdr {nsdecls("w")}><w:bottom w:val="single" w:sz="6" w:space="2" w:color="{PRIMARY_HEX}"/></w:pBdr>')
    pPr.append(pBdr)

# Header
title_p = doc.add_paragraph()
title_p.paragraph_format.space_before = Pt(0)
title_p.paragraph_format.space_after = Pt(2)
title_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
name_run = title_p.add_run("K. THILAGAVATHI\n")
name_run.font.name = 'Arial'
name_run.font.size = Pt(16)
name_run.font.bold = True
name_run.font.color.rgb = RGBColor(15, 23, 42)

sub_run = title_p.add_run("Aspiring Frontend Developer | Gen AI Learner\n")
sub_run.font.name = 'Arial'
sub_run.font.size = Pt(10.5)
sub_run.font.bold = True
sub_run.font.color.rgb = RGBColor(13, 110, 253)

contact_run = title_p.add_run("Virudhunagar, TN | +91 63699 82741 | thilagu97003@gmail.com | linkedin.com | github.com")
contact_run.font.name = 'Arial'
contact_run.font.size = Pt(9)
contact_run.font.color.rgb = RGBColor(71, 85, 105)

# Summary
add_heading("PROFESSIONAL SUMMARY")
p = doc.add_paragraph()
p.paragraph_format.space_after = Pt(4)
p.paragraph_format.line_spacing = 1.15
r = p.add_run(
    "Detail-oriented B.Tech graduate transitioning into Frontend Development with 4+ years of professional background in Quality Control and Academic Lecturing. "
    "Hands-on expertise in building modern, responsive web applications using React.js, JavaScript (ES6+), Bootstrap 5, HTML5, and CSS3. "
    "Demonstrated ability to deliver performant user interfaces through 3 deployed projects. Currently expanding full-stack and modern web engineering skills in Python & Generative AI."
)
r.font.name = 'Arial'
r.font.size = Pt(9.5)

# Skills
add_heading("TECHNICAL SKILLS")
skills = [
    ("Frontend Technologies:", "React.js, JavaScript (ES6+), HTML5, CSS3, Bootstrap 5, Responsive Web Design, Flexbox/Grid"),
    ("Programming & AI:", "Python (Learning), Generative AI Basics, AI-powered Web Solutions"),
    ("Developer Tools:", "Git & GitHub, VS Code, Vercel Deployment, Figma to Code, MS Office, Adobe Photoshop"),
    ("Core Strengths:", "Cross-functional Communication, Attention to Detail, Problem Solving, Rapid Upskilling")
]
for cat, detail in skills:
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(2)
    p.paragraph_format.line_spacing = 1.1
    r1 = p.add_run(f"•  {cat} ")
    r1.font.name = 'Arial'
    r1.font.size = Pt(9.5)
    r1.font.bold = True
    r2 = p.add_run(detail)
    r2.font.name = 'Arial'
    r2.font.size = Pt(9.5)

# Projects
add_heading("FEATURED FRONTEND PROJECTS")
projects = [
    (
        "Grocery E-Commerce Platform",
        "React.js, Bootstrap 5, JavaScript (ES6+), CSS3",
        "https://your-grocery-app.vercel.app",
        [
            "Architected a responsive single-page grocery shopping application with real-time product filtering, category browsing, and cart management.",
            "Utilized React functional components and hooks (useState, useEffect) for dynamic state synchronization during cart updates.",
            "Designed mobile-first UI with Bootstrap 5 and custom CSS to ensure fluid navigation and fast checkout workflows."
        ]
    ),
    (
        "Charity & NGO Foundation Website",
        "HTML5, CSS3, JavaScript, Bootstrap 5",
        "https://your-charity-app.vercel.app",
        [
            "Engineered an accessible multi-page charity portal highlighting humanitarian campaigns, cause showcases, and volunteer onboarding.",
            "Built responsive layout structures and smooth-scroll sections adhering to Figma UI specifications.",
            "Integrated interactive donation flows and client-side contact validation using JavaScript."
        ]
    ),
    (
        "Photography Portfolio Website",
        "React.js, Bootstrap 5, CSS Grid, Lightbox",
        "https://your-photography-app.vercel.app",
        [
            "Developed an interactive visual portfolio featuring responsive CSS Grid photo galleries and smooth lightbox previews.",
            "Implemented modern dark-theme aesthetics with dynamic navigation and responsive touch-friendly image cards.",
            "Optimized asset rendering for high-resolution photography without compromising load speeds."
        ]
    )
]

for title, stack, link, points in projects:
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(3)
    p.paragraph_format.space_after = Pt(1)
    p.paragraph_format.keep_with_next = True
    
    r_t = p.add_run(f"{title} ")
    r_t.font.name = 'Arial'
    r_t.font.size = Pt(10)
    r_t.font.bold = True
    r_t.font.color.rgb = RGBColor(15, 23, 42)
    
    r_s = p.add_run(f"|  {stack}\n")
    r_s.font.name = 'Arial'
    r_s.font.size = Pt(9.5)
    r_s.font.italic = True
    r_s.font.color.rgb = RGBColor(71, 85, 105)
    
    r_l = p.add_run(f"Live Demo: {link}  |  GitHub: github.com")
    r_l.font.name = 'Arial'
    r_l.font.size = Pt(8.5)
    r_l.font.color.rgb = RGBColor(13, 110, 253)
    
    for pt in points:
        bp = doc.add_paragraph()
        bp.paragraph_format.left_indent = Inches(0.2)
        bp.paragraph_format.space_after = Pt(1.5)
        bp.paragraph_format.line_spacing = 1.1
        br = bp.add_run(f"•  {pt}")
        br.font.name = 'Arial'
        br.font.size = Pt(9)

# Work Experience
add_heading("PROFESSIONAL EXPERIENCE")
exp = [
    (
        "Lecturer - Department of Textile Technology",
        "P.A.C. Ramasamy Raja Polytechnic College, Rajapalayam",
        "Dec 2019 – Apr 2023",
        [
            "Delivered comprehensive classroom lectures and hands-on lab sessions to students with high engagement and conceptual clarity.",
            "Mentored student technical projects, guided seminar presentations, and facilitated placement preparation sessions."
        ]
    ),
    (
        "Quality Controller",
        "JAY JAY MILLS INDIA PVT. LTD., Perundurai, Erode",
        "May 2019 – Nov 2019",
        [
            "Conducted systematic quality control inspections and monitored production process parameters to control yarn CV%.",
            "Cultivated rigorous attention to specifications and defect prevention, directly informing precision UI bug resolution."
        ]
    )
]

for role, company, duration, points in exp:
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(3)
    p.paragraph_format.space_after = Pt(1)
    p.paragraph_format.keep_with_next = True
    
    r_role = p.add_run(f"{role} ")
    r_role.font.name = 'Arial'
    r_role.font.size = Pt(9.5)
    r_role.font.bold = True
    r_role.font.color.rgb = RGBColor(15, 23, 42)
    
    r_comp = p.add_run(f"| {company}")
    r_comp.font.name = 'Arial'
    r_comp.font.size = Pt(9)
    r_comp.font.color.rgb = RGBColor(71, 85, 105)
    
    r_dur = p.add_run(f"\t{duration}")
    r_dur.font.name = 'Arial'
    r_dur.font.size = Pt(9)
    r_dur.font.bold = True
    r_dur.font.color.rgb = RGBColor(71, 85, 105)
    
    for pt in points:
        bp = doc.add_paragraph()
        bp.paragraph_format.left_indent = Inches(0.2)
        bp.paragraph_format.space_after = Pt(1.5)
        bp.paragraph_format.line_spacing = 1.1
        br = bp.add_run(f"•  {pt}")
        br.font.name = 'Arial'
        br.font.size = Pt(9)

# Education
add_heading("EDUCATION")
edu = [
    ("B.Tech - Textile Technology", "Bannari Amman Institute of Technology (Anna University)", "2019", "CGPA: 8.43"),
    ("Diploma - Textile Technology", "P.A.C. Ramasamy Raja Polytechnic College", "2015", "91.07%")
]
for deg, inst, yr, score in edu:
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(1.5)
    p.paragraph_format.line_spacing = 1.1
    r_deg = p.add_run(f"•  {deg} ")
    r_deg.font.name = 'Arial'
    r_deg.font.size = Pt(9)
    r_deg.font.bold = True
    r_inst = p.add_run(f"— {inst} ({yr}) — ")
    r_inst.font.name = 'Arial'
    r_inst.font.size = Pt(9)
    r_sc = p.add_run(score)
    r_sc.font.name = 'Arial'
    r_sc.font.size = Pt(9)
    r_sc.font.bold = True

# Upskilling
add_heading("CONTINUOUS UPSKILLING & CERTIFICATION")
p = doc.add_paragraph()
p.paragraph_format.space_after = Pt(2)
p.paragraph_format.line_spacing = 1.1
r = p.add_run("•  Gen AI Python Full Stack Program (2026 – Present): Comprehensive frontend mastery in HTML5, CSS3, Bootstrap 5, JavaScript (ES6+), React.js; actively learning Python & Generative AI integration.")
r.font.name = 'Arial'
r.font.size = Pt(9)

doc.save("public/K_Thilagavathi_Resume.docx")
print("SUCCESS: Resume created inside public folder!")