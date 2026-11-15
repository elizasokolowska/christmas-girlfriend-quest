"""Generuje gotowy do druku kod QR po opublikowaniu quizu.
Użycie: python generuj_qr.py https://twoj-login.github.io/nazwa-repo/
Wymaga: pip install "qrcode[pil]"
"""
import sys
from pathlib import Path
from urllib.parse import urlparse

try:
    import qrcode
    from qrcode.constants import ERROR_CORRECT_H
except ImportError:
    print('Brak biblioteki. Uruchom: pip install "qrcode[pil]"')
    raise SystemExit(1)

if len(sys.argv) != 2:
    print('Użycie: python generuj_qr.py https://twoj-login.github.io/nazwa-repo/')
    raise SystemExit(1)

url = sys.argv[1].strip()
parsed = urlparse(url)
if parsed.scheme != 'https' or not parsed.hostname:
    print('Podaj pełny adres HTTPS opublikowanego quizu, np. https://login.github.io/quiz/')
    raise SystemExit(1)

qr = qrcode.QRCode(version=None, error_correction=ERROR_CORRECT_H, box_size=16, border=4)
qr.add_data(url)
qr.make(fit=True)
img = qr.make_image(fill_color='#102b24', back_color='white').convert('RGB')
path = Path(__file__).with_name('KOD_QR_QUIZ.png')
img.save(path)
print(f'Gotowe: {path}\nZakodowany adres: {url}')
