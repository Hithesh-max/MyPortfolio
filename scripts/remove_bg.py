from PIL import Image
import cv2
import numpy as np

input_path = 'public/images/hithesh.jpg'
output_path = 'public/images/hithesh.png'

# Read image
img = cv2.imread(input_path)
if img is None:
    print('ERROR: input image not found at', input_path)
    raise SystemExit(1)

mask = np.zeros(img.shape[:2], np.uint8)

# Define initial rectangle for GrabCut (leave 8% margin)
h, w = img.shape[:2]
rect = (int(w*0.08), int(h*0.06), int(w*0.84), int(h*0.88))

bgdModel = np.zeros((1,65), np.float64)
fgdModel = np.zeros((1,65), np.float64)

cv2.grabCut(img, mask, rect, bgdModel, fgdModel, 5, cv2.GC_INIT_WITH_RECT)

# Where mask==2 or mask==0, background. Else foreground.
mask2 = np.where((mask==2)|(mask==0), 0, 1).astype('uint8')

# Apply mask
img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
img_rgba = np.dstack((img_rgb, mask2*255))

# Save PNG with transparency
result = Image.fromarray(img_rgba)
result.save(output_path)
print('Saved transparent image to', output_path)
