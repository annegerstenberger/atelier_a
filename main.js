
//hamburger
// Get elements
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');

// Only run if the elements exist on the page
if (hamburger && menu && overlay) {

    // Open menu
    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
        overlay.classList.add('active');
    });

    // Close menu when clicking outside
    overlay.addEventListener('click', () => {
        menu.classList.remove('active');
        overlay.classList.remove('active');
    });
}

// ===== FADE IN / OUT PAGE TRANSITIONS =====

// Start fade-in immediately
document.body.classList.add('fade');

window.addEventListener('load', () => {
    document.body.classList.add('fade-active');
});

// Fade-out on page navigation
document.querySelectorAll('a').forEach(link => {
    const href = link.getAttribute('href');

    // Only fade if the link is a real navigation
    if (
        href &&
        !href.startsWith('#') &&
        !href.startsWith('mailto:') &&
        !href.startsWith('tel:') &&
        !link.target // avoids breaking target="_blank"
    ) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.body.classList.remove('fade-active');

            setTimeout(() => {
                window.location = href;
            }, 500); // match your CSS transition duration
        });
    }
});

// ===== FIX WHITE SCREEN ON BACK NAVIGATION (bfcache restore) =====
window.addEventListener('pageshow', (event) => {
    // If the page was restored from the browser cache
    if (event.persisted) {
        document.body.classList.add('fade-active');
    }
});

// ===== LAZY LOADING IMAGES =====
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("img").forEach(img => {
        img.loading = "lazy";
    });
});
// ================== BLOG2 GALLERY SCROLL ==================
// Only applies to the blog2 gallery-wrapper/gallery-track setup
document.querySelectorAll('.gallery-wrapper').forEach(gallery => {
  const track = gallery.querySelector('.gallery-track');
  const left = gallery.querySelector('.left');
  const right = gallery.querySelector('.right');

  if(track && left && right){
    left.onclick = () => track.scrollBy({ left: -300, behavior: 'smooth' });
    right.onclick = () => track.scrollBy({ left: 300, behavior: 'smooth' });
  }
});

// ================== LIGHTBOX FUNCTIONALITY ==================
const galleryImages = document.querySelectorAll('.gallery img, .print-gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

if(galleryImages.length && lightbox && lightboxImg) {
  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.add('active');
    });
  });

  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      lightbox.classList.remove('active');
    }
  });
}
// ================== DROPDOWN MOBILE TOGGLE ==================
document.querySelectorAll(".has-dropdown > a").forEach(link => {
  link.addEventListener("click", e => {
    if (window.innerWidth <= 900) {
      e.preventDefault(); // Prevent navigating
      link.parentElement.classList.toggle("open");
    }
  });
});

// ================== DROPDOWN HOVER DELAY ==================
const dropdown = document.querySelector('.has-dropdown');
let timeout;

dropdown.addEventListener('mouseenter', () => {
  clearTimeout(timeout);
  dropdown.classList.add('open');
});

dropdown.addEventListener('mouseleave', () => {
  timeout = setTimeout(() => {
    dropdown.classList.remove('open');
  }, 500); // 500ms delay before hiding
});

