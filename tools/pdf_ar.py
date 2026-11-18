"""Renders the Arabic portfolio PDF with reportlab (wkhtmltopdf clips Arabic lines).
Usage: python3 tools/pdf_ar.py content.json portrait.jpg out.pdf
Shaping: arabic_reshaper + python-bidi, DejaVu Sans (has Arabic presentation forms)."""
import json, sys
import arabic_reshaper
from bidi.algorithm import get_display
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas

content, portrait, out = sys.argv[1:4]
doc = json.load(open(content, encoding='utf-8'))
pdfmetrics.registerFont(TTFont('R', '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'))
pdfmetrics.registerFont(TTFont('B', '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'))
W, H = A4
M = 46
RIGHT = W - M
WINE = (0.455, 0.122, 0.169)
c = canvas.Canvas(out, pagesize=A4)
c.setTitle(doc['title'])
c.setAuthor('Muhammad Fadli')
y = H - M

def shape(s):
    return get_display(arabic_reshaper.reshape(s), base_dir='R')

def width(s, font, size):
    return pdfmetrics.stringWidth(shape(s), font, size)

def wrap(text, font, size, maxw):
    lines, cur = [], ''
    for w in text.split(' '):
        t = (cur + ' ' + w).strip()
        if cur and width(t, font, size) > maxw:
            lines.append(cur); cur = w
        else:
            cur = t
    if cur: lines.append(cur)
    return lines

def need(h):
    global y
    if y - h < M:
        c.showPage(); y = H - M

def para(text, font='R', size=10.5, x_right=RIGHT, maxw=RIGHT - M, lead=None, color=(0.07, 0.07, 0.07)):
    global y
    lead = lead or size * 1.7
    c.setFillColorRGB(*color); c.setFont(font, size)
    for ln in wrap(text, font, size, maxw):
        need(lead)
        c.drawRightString(x_right, y - size, shape(ln)); y -= lead

def heading(text):
    global y
    need(40); y -= 12
    c.setFillColorRGB(*WINE); c.setFont('B', 13)
    c.drawRightString(RIGHT, y - 13, shape(text)); y -= 20
    c.setStrokeColorRGB(0.75, 0.75, 0.75); c.line(M, y, RIGHT, y); y -= 6

# Header: portrait on the left, name and tagline on the right.
c.drawImage(portrait, M, H - M - 120, width=90, height=112, preserveAspectRatio=True, mask='auto')
c.setFillColorRGB(0.07, 0.07, 0.07); c.setFont('B', 24)
c.drawRightString(RIGHT, H - M - 26, doc['name'])
c.setFillColorRGB(*WINE); c.setFont('B', 13)
c.drawRightString(RIGHT, H - M - 50, shape(doc['headline']))
y = H - M - 64
para(doc['intro'], maxw=RIGHT - M - 110)
y = min(y, H - M - 130) - 6
c.setStrokeColorRGB(*WINE); c.setLineWidth(2.5); c.line(M, y, RIGHT, y); c.setLineWidth(1); y -= 4

for sec in doc['sections']:
    heading(sec['title'])
    for p in sec.get('paras', []): para(p); y -= 3
    for it in sec.get('items', []):
        para(it['text'], font='B' if it.get('bold') else 'R', size=10.5)
        if it.get('note'): para(it['note'], size=9, color=(0.35, 0.35, 0.35))
        for sub in it.get('ltr', []):
            need(14); c.setFont('R', 8.5); c.setFillColorRGB(0.35, 0.35, 0.35)
            c.drawRightString(RIGHT, y - 9, sub); y -= 14
        y -= 3
    if sec.get('rows'):
        cw = [96, RIGHT - M - 96 - 100, 100]  # date | name | result (right to left)
        for date, name, res in sec['rows']:
            nl = wrap(name, 'R', 9.5, cw[1] - 8)
            h = max(len(nl), 1) * 14 + 4
            need(h)
            c.setFont('R', 9.5); c.setFillColorRGB(0.07, 0.07, 0.07)
            c.drawRightString(RIGHT, y - 11, shape(date))
            for k, ln in enumerate(nl):
                c.drawRightString(RIGHT - cw[0] - 4, y - 11 - 14 * k, shape(ln))
            c.setFont('B', 9.5)
            c.drawRightString(M + cw[2], y - 11, shape(res))
            y -= h
            c.setStrokeColorRGB(0.89, 0.87, 0.85); c.line(M, y, RIGHT, y)
c.save()
