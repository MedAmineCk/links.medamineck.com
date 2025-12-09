// Matrix Rain Effect
class MatrixRain {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?';
    this.fontSize = 14;
    this.columns = 0;
    this.drops = [];
    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.animate();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.columns = Math.floor(this.canvas.width / this.fontSize);
    this.drops = Array(this.columns).fill(1);
  }

  draw() {
    this.ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.ctx.fillStyle = '#00ff41';
    this.ctx.font = `${this.fontSize}px monospace`;

    for (let i = 0; i < this.drops.length; i++) {
      const char = this.chars[Math.floor(Math.random() * this.chars.length)];
      const x = i * this.fontSize;
      const y = this.drops[i] * this.fontSize;
      
      this.ctx.fillText(char, x, y);
      
      if (y > this.canvas.height && Math.random() > 0.975) {
        this.drops[i] = 0;
      }
      
      this.drops[i]++;
    }
  }

  animate() {
    this.draw();
    requestAnimationFrame(() => this.animate());
  }
}

// Initialize Matrix Rain
const canvas = document.getElementById('matrix-bg');
if (canvas) {
  new MatrixRain(canvas);
}

// vCard Download Functionality
function generateVCard() {
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Mohamed-Amine Chekrouni
N:Chekrouni;Mohamed-Amine;;;
NICKNAME:Med Amine Ck
TITLE:Full Stack Web Developer
EMAIL;TYPE=INTERNET:contact@medamineck.com
TEL;TYPE=CELL:+212620108495
URL:https://medamineck.com
URL;TYPE=LinkedIn:https://linkedin.com/in/medamineck
URL;TYPE=GitHub:https://github.com/medamineck
END:VCARD`;

  return vcard;
}

function downloadVCard() {
  const vcard = generateVCard();
  const blob = new Blob([vcard], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'MedAmineCk.vcf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// Event Listeners
const downloadBtn = document.getElementById('downloadVCard');
if (downloadBtn) {
  downloadBtn.addEventListener('click', downloadVCard);
}

// Hover Effects for Link Cards
const linkCards = document.querySelectorAll('.link-card');
linkCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.setProperty('--hover-scale', '1.02');
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.setProperty('--hover-scale', '1');
  });
});

// Intersection Observer for Fade-in Animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, index * 100);
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Apply fade-in to link cards
linkCards.forEach((card, index) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(card);
});

// Performance Optimization: Reduce animations on low-end devices
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('*').forEach(el => {
    el.style.animation = 'none';
    el.style.transition = 'none';
  });
}

// Analytics Event Tracking (optional - placeholder)
function trackEvent(action, label) {
  // Placeholder for analytics
  console.log(`Event: ${action}, Label: ${label}`);
  
  // Example: Google Analytics
  // if (typeof gtag !== 'undefined') {
  //   gtag('event', action, {
  //     'event_category': 'engagement',
  //     'event_label': label
  //   });
  // }
}

// Track link clicks
linkCards.forEach(card => {
  card.addEventListener('click', function() {
    const linkText = this.querySelector('.link-text').textContent;
    trackEvent('link_click', linkText);
  });
});

// Track social icon clicks
document.querySelectorAll('.social-icon').forEach(icon => {
  icon.addEventListener('click', function() {
    const platform = this.getAttribute('aria-label');
    trackEvent('social_click', platform);
  });
});

// Service Worker Registration (for PWA support)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('ServiceWorker registered:', registration);
      })
      .catch(error => {
        console.log('ServiceWorker registration failed:', error);
      });
  });
}

// Easter Egg: Konami Code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
  konamiCode.push(e.key);
  konamiCode = konamiCode.slice(-10);
  
  if (konamiCode.join(',') === konamiSequence.join(',')) {
    document.body.style.filter = 'hue-rotate(180deg)';
    setTimeout(() => {
      document.body.style.filter = 'none';
    }, 3000);
  }
});