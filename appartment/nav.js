document.addEventListener('DOMContentLoaded', () => {
    const navHtml = `
        <nav id="manual-nav">
            <a href="index.html">Start</a>
            <a href="wifi.html">WiFi</a>
            <a href="checkin.html">Innsjekk</a>
            <a href="parking.html">Parkering</a>
            <a href="equipment.html">Utstyr</a>
            <a href="rules.html">Husregler</a>
            <a href="trash.html">Søppel</a>
            <a href="checkout.html">Utsjekk</a>
            <a href="area.html">Området</a>
            <a href="contact.html">Kontakt</a>
        </nav>
    `;

    const placeholder = document.getElementById('manual-nav-placeholder');
    if (placeholder) {
        placeholder.innerHTML = navHtml;
    }
});
