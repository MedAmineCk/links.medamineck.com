# Med Amine Ck - Personal Link Landing Page

A premium, animated link-in-bio landing page with Matrix-inspired cyber aesthetics and neon green accents. Built with vanilla HTML, CSS, and JavaScript for optimal performance.

## 🎨 Design Features

- **Matrix Rain Background**: Animated falling characters effect
- **Neon Green Cyber Theme**: Dark tech aesthetic with glowing accents
- **Octagonal Logo Design**: Custom-clipped logo with pulsing glow
- **Smooth Animations**: CSS-powered micro-interactions
- **Glassmorphism Effects**: Modern blur and transparency
- **Responsive Design**: Mobile-first approach
- **PWA Ready**: Progressive Web App capabilities

## 📁 File Structure

```
links.medamineck.com/
├── index.html           # Main HTML file
├── styles.css           # Compiled & minified CSS
├── styles.scss          # Source SCSS (for development)
├── script.js            # JavaScript functionality
├── manifest.json        # PWA manifest
├── robots.txt           # SEO robots file
├── sitemap.xml          # SEO sitemap
└── README.md            # This file
```

## 🚀 Deployment Instructions

### Option 1: Static Hosting (Recommended)

**Netlify:**
1. Create a new site from Git or drag & drop the folder
2. Build settings: None needed (pure static)
3. Deploy!

**Vercel:**
```bash
npm i -g vercel
vercel --prod
```

**GitHub Pages:**
1. Push to GitHub repository
2. Settings → Pages → Source: main branch
3. Done!

### Option 2: Traditional Hosting

1. Upload all files to your web server via FTP/SFTP
2. Ensure `index.html` is in the root directory
3. Configure your domain DNS to point to the server

### Option 3: Cloudflare Pages

1. Connect your Git repository
2. Build command: (leave empty)
3. Output directory: `/`
4. Deploy!

## 🛠️ Development

### SCSS Compilation

If you modify `styles.scss`, compile it to CSS:

```bash
# Install Sass
npm install -g sass

# Watch for changes
sass --watch styles.scss:styles.css --style compressed

# One-time compile
sass styles.scss styles.css --style compressed
```

### Local Development

Simply open `index.html` in a browser, or use a local server:

```bash
# Python
python -m http.server 8000

# Node.js
npx serve

# PHP
php -S localhost:8000
```

## ⚡ Performance Optimizations

- **Critical CSS Inlined**: Above-the-fold styles in `<head>`
- **Deferred JavaScript**: Non-blocking script loading
- **Optimized Animations**: CSS-only, GPU-accelerated
- **No Heavy Dependencies**: Pure vanilla JavaScript
- **Compressed Assets**: Minified CSS for production

## 🔧 Customization

### Colors
Edit the SCSS variables in `styles.scss`:
```scss
$primary: #00ff41;        // Neon green
$bg: #0a0a0a;            // Dark background
$text: #e0e0e0;          // Light text
```

### Links
Update the links in `index.html` within the `.links` section.

### Contact Info
Modify the vCard data in `script.js`:
```javascript
function generateVCard() {
  // Update your details here
}
```

## 📱 PWA Features

To make this a full PWA:

1. Create icons (192x192 and 512x512 PNG)
2. Add them to the root directory as `icon-192.png` and `icon-512.png`
3. Create a `sw.js` (service worker) file for offline support

Example `sw.js`:
```javascript
const CACHE_NAME = 'medamine-v1';
const urlsToCache = ['/', '/styles.css', '/script.js'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
```

## 🔍 SEO Checklist

- ✅ Semantic HTML structure
- ✅ Meta descriptions and keywords
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ JSON-LD structured data
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Mobile responsive
- ✅ Fast load time (<2s)

## 📊 Analytics Integration

To add analytics, uncomment and configure in `script.js`:

**Google Analytics:**
```javascript
// Add to <head> in index.html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🎯 Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Optimized

## 📄 License

Personal project - feel free to use as inspiration.

## 🐛 Troubleshooting

**Matrix rain not showing?**
- Check browser console for errors
- Ensure JavaScript is enabled

**Styles not loading?**
- Clear browser cache
- Verify `styles.css` path is correct

**Links not working?**
- Check URL formatting in HTML
- Ensure `https://` is included

## 📞 Contact

- Website: [medamineck.com](https://medamineck.com)
- Email: contact@medamineck.com
- LinkedIn: [linkedin.com/in/medamineck](https://linkedin.com/in/medamineck)

---

Built with ❤️ and code by Med Amine Ck