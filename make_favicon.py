from PIL import Image, ImageDraw, ImageFont
size = 64
img = Image.new('RGBA', (size, size), '#7CB342')
draw = ImageDraw.Draw(img)
try:
    font = ImageFont.truetype('C:/Windows/Fonts/arialbd.ttf', 30)
except Exception:
    font = ImageFont.load_default()
text = 'NF'
bbox = draw.textbbox((0, 0), text, font=font)
x = (size - (bbox[2] - bbox[0])) / 2
y = (size - (bbox[3] - bbox[1])) / 2 - 2
draw.text((x, y), text, fill='white', font=font)
img.save('public/favicon.ico', format='ICO', sizes=[(64, 64), (32, 32), (16, 16)])
print('favicon regenerated')
