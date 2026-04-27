# Image Optimization Guide

## Current State
Your X Avis Body website currently uses emoji and text-based designs, which is excellent for performance! This document provides guidance for future image integration.

## Best Practices for Images

### 1. Image Formats
- **Use WebP**: Primary format (better compression)
- **Fallback to JPG/PNG**: For browser compatibility
- **SVG**: For logos and icons

Example:
```html
<picture>
  <source srcSet="image.webp" type="image/webp" />
  <img src="image.jpg" alt="Description" loading="lazy" />
</picture>
```

### 2. Lazy Loading
Add `loading="lazy"` to all images below the fold:
```html
<img src="image.jpg" alt="Description" loading="lazy" />
```

### 3. Responsive Images
Use srcSet for different screen sizes:
```html
<img 
  srcSet="image-small.webp 640w, image-large.webp 1200w"
  src="image-large.webp"
  alt="Description"
  loading="lazy"
/>
```

### 4. Image Compression Tools
- TinyPNG: https://tinypng.com
- ImageOptim: https://imageoptim.com
- Squoosh: https://squoosh.app

### 5. Recommended Image Sizes
- Hero images: 1920x1080px (max 300KB)
- Card images: 600x400px (max 80KB)
- Thumbnails: 300x200px (max 30KB)
- Trainer photos: 400x500px (max 100KB)

### 6. Alt Text Requirements
Every image must have descriptive alt text for:
- Accessibility
- SEO
- Better UX

## Implementation Locations

### Suggested Image Additions:
1. **Trainer Profile Photos** - `/src/pages/Trainers.jsx`
   - Current: Avatar circles with initials
   - Future: High-quality trainer headshots

2. **Class/Program Images** - `/src/components/Programs.jsx`
   - Current: Text-based cards
   - Future: High-quality program demonstration images

3. **Testimonial Images** - `/src/components/Testimonials.jsx`
   - Current: Avatar circles
   - Future: Member photos with testimonials

4. **Blog Featured Images** - `/src/pages/Blog.jsx`
   - Current: Emoji placeholders
   - Future: Custom fitness blog headers

5. **Facility Gallery** - New page suggestion
   - Equipment photos
   - Class in action
   - Gym ambiance

## Performance Metrics to Monitor

```javascript
// Check images in DevTools
Performance > Lighthouse > Performance

Target Scores:
- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1
```

## Next Steps

1. **Add image hosting**: Consider using Cloudinary or similar CDN
2. **Implement progressive image loading**: Blur-up effect during load
3. **Add image caching**: Browser cache headers
4. **Setup WebP conversion**: During build process
5. **Monitor bundle size**: Keep track of total image size

## React Component Examples

### Lazy Loading Image Component:
```jsx
import { useState } from 'react'

export default function LazyImage({ src, alt, className }) {
  const [isLoaded, setIsLoaded] = useState(false)
  
  return (
    <div className={`${className} bg-gray-200`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-opacity ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  )
}
```

## CDN Setup (Cloudinary Example)

When adding real images, use a CDN URL:
```
https://res.cloudinary.com/your-account/image/upload/c_scale,w_600/trainer-photo.jpg
```

Benefits:
- Automatic format conversion
- Responsive image serving
- Global distribution
- Analytics included
