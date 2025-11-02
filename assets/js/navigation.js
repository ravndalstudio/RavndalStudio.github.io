// Navigation widget for Ravndal Studio
function loadNavigation() {
    const navHTML = `
        <nav id="nav">
            <ul class="links">
                <li><a href="index.html">Hjem</a></li>
                <li><a href="about.html">Om Oss</a></li>
                <li><a href="services.html">Tjenester</a></li>
                <li><a href="portfolio.html">Portefølje</a></li>
                <li><a href="contact.html">Kontakt</a></li>
                <li><a href="privacy.html">Personvern</a></li>
                <li><a href="privacy-en.html">Privacy (EN)</a></li>
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

// Load navigation when DOM is ready
document.addEventListener('DOMContentLoaded', loadNavigation);