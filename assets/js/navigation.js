// Navigation widget for Ravndal Studio
function loadNavigation() {
    // If a static nav is already present on the page, do nothing.
    if (document.getElementById('nav')) return;

    // Use page language to choose link labels (defaults to Norwegian)
    const lang = document.documentElement.lang || 'no';
    const labels = (lang === 'en') ? {
        home: 'Home', about: 'About', services: 'Services', portfolio: 'Portfolio', contact: 'Contact'
    } : {
        home: 'Hjem', about: 'Om Oss', services: 'Tjenester', portfolio: 'Portefølje', contact: 'Kontakt'
    };

    const navHTML = `
        <nav id="nav">
            <ul class="links">
                <li><a href="index.html">${labels.home}</a></li>
                <li><a href="about.html">${labels.about}</a></li>
                <li><a href="portfolio.html">${labels.portfolio}</a></li>
                <li><a href="contact.html">${labels.contact}</a></li>
            </ul>
            <ul class="icons">
                <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
                <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
                <li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
                <li><a href="#" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
            </ul>
        </nav>
    `;

    // Find the header and insert navigation after it
    const header = document.getElementById('header');
    if (header) {
        header.insertAdjacentHTML('afterend', navHTML);

        // Set active class based on current page
        setTimeout(() => {
            const currentPath = window.location.pathname.split('/').pop() || 'index.html';
            const navLinks = document.querySelectorAll('#nav .links a');

            navLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (href === currentPath) {
                    link.parentElement.classList.add('active');
                }
            });
        }, 10);
    }
}
// Try to insert navigation immediately. If header isn't present yet, also
// attach a DOMContentLoaded fallback that only inserts if #nav is still missing.
try {
    loadNavigation();
} catch (e) {
    // Ignore and install fallback
}

document.addEventListener('DOMContentLoaded', function() {
    if (!document.getElementById('nav')) loadNavigation();
});