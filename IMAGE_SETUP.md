# Image Setup Guide

## Current Setup
All images are now sourced from **Pexels** (free stock photos) instead of Unsplash.

## For Production: Local Images Setup

### Step 1: Create Image Folders
```
public/
  images/
    products/     (for product images)
    blog/         (for blog/education images)
```

### Step 2: Download Images
Download high-quality oil images from:
- **Pexels**: https://www.pexels.com/search/cooking%20oil/
- **Pixabay**: https://pixabay.com/images/search/edible%20oil/
- **Unsplash**: https://unsplash.com/s/photos/cooking-oil

### Step 3: Optimize Images
- Resize to appropriate dimensions (400x400 for products, 600x400 for blog)
- Compress using tools like TinyPNG or ImageOptim
- Save as JPEG or WebP format

### Step 4: Update Code
Replace Pexels URLs with local paths:
```tsx
// Before
image: "https://images.pexels.com/photos/..."

// After
image: "/images/products/mustard-oil-1l.jpg"
```

## Current Image Sources (Pexels)
- Product images: Cooking oil bottles and containers
- Blog images: Food preparation, quality testing, storage
- All images are free to use commercially

## Benefits of Local Images
✅ Faster page load times
✅ No external dependencies
✅ Better SEO
✅ Offline capability
✅ Full control over quality
