from openpyxl import Workbook
from openpyxl.styles import Font

wb = Workbook()
ws = wb.active
ws.title = 'Products'
headers = [
    'id','slug','name','category','categorySlug','price','originalPrice',
    'image','gallery','description','shortDescription','badge','stock','featured','rating','reviewCount'
]
ws.append(headers)

sample_rows = [
    [
        1,'organic-turmeric-powder','Organic Turmeric Powder','Organic Spices','organic-spices',12.99,16.99,
        'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=80;https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=900&q=80',
        'Premium organic turmeric powder for daily wellness and cooking.',
        'Organic Spices • Fresh and naturally packed.','Best Seller',50,True,4.8,120
    ],
    [
        2,'frontier-cinnamon-sticks','Frontier Cinnamon Sticks','Organic Spices','organic-spices',14.49,18.99,
        'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80;https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=900&q=80',
        'Warm, aromatic cinnamon sticks for rich flavor and healthy living.',
        'Organic Spices • Premium quality and aroma.','Popular',35,False,4.7,94
    ]
]
for row in sample_rows:
    ws.append(row)

for cell in ws[1]:
    cell.font = Font(bold=True)

ws.freeze_panes = 'A2'
for col in ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P']:
    ws.column_dimensions[col].width = 22

ws.column_dimensions['I'].width = 48
ws.column_dimensions['J'].width = 60
ws.column_dimensions['K'].width = 40
ws.column_dimensions['P'].width = 12

path = r"c:\Users\TSS\Documents\tommy website\product_import_template.xlsx"
wb.save(path)
print(path)
