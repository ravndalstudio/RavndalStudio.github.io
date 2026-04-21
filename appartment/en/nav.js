function loadApartmentNavigation() {
    if (document.getElementById('nav')) return;

    const path = window.location.pathname;
    const isRoot = !path.includes('/en/') && !path.includes('/de/') && !path.includes('/nb/');
    const base = isRoot ? 'en/' : '';

    const navHTML = `
        <style>
            #nav { display: block !important; position: relative; width: 100%; }
            #nav ul.links { display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 0.25rem; padding: 0; margin: 0; }
            #nav ul.links li { margin: 0; }
            #nav ul.links li a { display: block; padding: 0.55rem 0.6rem; font-size: 0.72rem; white-space: normal; text-align: center; word-break: break-word; }
            @media screen and (max-width: 980px) {
                #nav { display: none !important; }
                #appartmentNavToggle { display: block !important; }
            }
            #appartmentNavToggle { display: none; position: fixed; top: 0.85rem; right: 0.85rem; z-index: 10005; background: rgba(255,255,255,0.95); color: #222; border: 1px solid #ccc; border-radius: 999px; padding: 0.55rem 1rem; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; }
            #appartmentNavPanel { display: none; position: fixed; inset: 0; z-index: 10004; background: rgba(0,0,0,0.55); }
            #appartmentNavPanel.active { display: block; }
            #appartmentNavPanel .panel-inner { position: absolute; top: 0; right: 0; width: min(85vw, 320px); height: 100%; background: #16181d; color: #fff; padding: 2rem 1.5rem; overflow-y: auto; }
            #appartmentNavPanel .panel-inner .close { display: block; color: #fff; text-decoration: none; text-align: right; margin-bottom: 1rem; font-size: 1.1rem; }
            #appartmentNavPanel .panel-inner ul { list-style: none; padding: 0; margin: 0; }
            #appartmentNavPanel .panel-inner li { border-top: 1px solid rgba(255,255,255,0.08); }
            #appartmentNavPanel .panel-inner li:first-child { border-top: 0; }
            #appartmentNavPanel .panel-inner a { display: block; color: #fff; padding: 0.8rem 0; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; text-decoration: none; }
        </style>
        <a href="#" id="appartmentNavToggle">Menu</a>
        <nav id="nav">
            <ul class="links">
                <li><a href="../index.html">Language</a></li>
                <li><a href="${base}checkin.html">Check-in</a></li>
                <li><a href="${base}parking.html">Parking</a></li>
                <li><a href="${base}wifi.html">WiFi</a></li>
                <li><a href="${base}transport.html">Transport</a></li>
                <li><a href="${base}equipment.html">Equipment</a></li>
                <li><a href="${base}rules.html">House Rules</a></li>
                <li><a href="${base}trash.html">Trash</a></li>
                <li><a href="${base}checkout.html">Check-out</a></li>
                <li><a href="${base}area.html">Area</a></li>
            </ul>
        </nav>
        <div id="appartmentNavPanel">
            <div class="panel-inner">
                <ul class="links">
                    <li><a href="../index.html">Language</a></li>
                    <li><a href="${base}checkin.html">Check-in</a></li>
                    <li><a href="${base}parking.html">Parking</a></li>
                    <li><a href="${base}wifi.html">WiFi</a></li>
                    <li><a href="${base}transport.html">Transport</a></li>
                    <li><a href="${base}equipment.html">Equipment</a></li>
                    <li><a href="${base}rules.html">House Rules</a></li>
                    <li><a href="${base}trash.html">Trash</a></li>
                    <li><a href="${base}checkout.html">Check-out</a></li>
                    <li><a href="${base}area.html">Area</a></li>
                </ul>
            </div>
        </div>
    `;

    const header = document.getElementById('header');
    if (!header) return;

    header.insertAdjacentHTML('afterend', navHTML);

    const toggle = document.getElementById('appartmentNavToggle');
    const panel = document.getElementById('appartmentNavPanel');

    const setPanelVisible = visible => {
        if (!panel) return;
        panel.classList.toggle('active', visible);
        document.body.style.overflow = visible ? 'hidden' : '';
    };

    if (toggle) {
        toggle.addEventListener('click', event => {
            event.preventDefault();
            setPanelVisible(!panel.classList.contains('active'));
        });
    }

    if (panel) {
        panel.addEventListener('click', event => {
            if (event.target === panel) {
                setPanelVisible(false);
            }
        });

        panel.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => setPanelVisible(false));
        });
    }

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
