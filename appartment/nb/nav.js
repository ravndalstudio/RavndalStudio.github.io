function loadApartmentNavigation() {
    if (document.getElementById('nav')) return;

    const path = window.location.pathname;
    const isRoot = !path.includes('/nb/');
    const base = isRoot ? 'nb/' : '';

    const navHTML = `
        <nav id="nav">
            <ul class="links">
                <li><a href="${base}checkin.html">Innsjekk</a></li>
                <li><a href="${base}parking.html">Parkering</a></li>
                <li><a href="${base}wifi.html">WiFi</a></li>
                <li><a href="${base}equipment.html">Utstyr</a></li>
                <li><a href="${base}rules.html">Husregler</a></li>
                <li><a href="${base}trash.html">Søppel</a></li>
                <li><a href="${base}checkout.html">Utsjekk</a></li>
                <li><a href="${base}area.html">Området</a></li>
                <li><a href="${base}contact.html">Kontakt</a></li>
            </ul>
        </nav>
    `;

    const header = document.getElementById('header');
    if (!header) return;

    header.insertAdjacentHTML('afterend', navHTML);

    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('#nav .links a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href').split('/').pop();
        if (href === currentPath) {
            link.parentElement.classList.add('active');
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadApartmentNavigation);
} else {
    loadApartmentNavigation();
}
