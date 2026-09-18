import os
import comtypes.client

# Paths
wdFormatPDF = 17
base_dir = os.path.abspath("public")
in_file = os.path.join(base_dir, "K_Thilagavathi_Resume.docx")
out_file = os.path.join(base_dir, "resume.pdf")

# Convert using MS Word engine
word = comtypes.client.CreateObject('Word.Application')
word.Visible = False
doc = word.Documents.Open(in_file)
doc.SaveAs(out_file, FileFormat=wdFormatPDF)
doc.Close()
word.Quit()

print("SUCCESS: resume.pdf properly generated inside public folder!")