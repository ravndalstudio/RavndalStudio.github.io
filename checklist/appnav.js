// Checklist app-specific navigation
function loadAppNavigation() {
    const navHTML = `
        <nav id="appnav">
            <ul class="links">
                <li><a href="checklist.html">Checklist app</a></li>
                <li><a href="privacy.html">Privacy Policy</a></li>
                <li><a href="privacy-en.html">Privacy Policy (EN)</a></li>
                <li><a href="terms.html">Terms of Use (EULA)</a></li>
            </ul>
        </nav>
    `;
    const header = document.getElementById('header');
    if (header) {
        header.insertAdjacentHTML('afterend', navHTML);
        // Set active class
        const currentPath = window.location.pathname.split('/').pop();
        const navLinks = document.querySelectorAll('#appnav .links a');
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPath) {
                link.parentElement.classList.add('active');
            }
        });
    }
}
document.addEventListener('DOMContentLoaded', loadAppNavigation);
