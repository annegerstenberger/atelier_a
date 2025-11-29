
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


