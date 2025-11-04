// Checklist app-specific navigation
function loadAppNavigation() {
    const navHTML = `
        <nav id="appnav">
            <ul class="links">
                <li><a href="index.html">Checklist app</a></li>
                <li><a href="privacy-no.html">Personvern</a></li>
                <li><a href="terms-no.html">Vilkår for bruk (EULA, NO)</a></li>
                <li><a href="privacy.html">Privacy Policy (EN)</a></li>
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
    // Add custom style to reduce top spacing (stronger override)
    const style = document.createElement('style');
    style.innerHTML = `
        /* Checklist app: Remove excessive top whitespace */
        #header {
            margin-top: 50px !important;
            padding-bottom: 0 !important;
            height: 3rem !important;
        }
        @media screen and (max-width: 980px) {
            #header {
                height: 2rem !important;
                padding-bottom: 0 !important;
            }
        }
        #main > * {
            padding-top: 1.5rem !important;
        }
        .post.featured {
            margin-top: 0 !important;
        }
        #wrapper {
            padding-top: 0 !important;
        }
    `;
    document.head.appendChild(style);
}
document.addEventListener('DOMContentLoaded', loadAppNavigation);
