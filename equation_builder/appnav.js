// Equation Builder app-specific navigation
function loadAppNavigation() {
    var navHTML = [
        '<nav id="appnav">',
        '    <ul class="links">',
        '        <li><a href="index.html">Equation Builder app</a></li>',
        '        <li><a href="privacy.html">Privacy Policy (EN)</a></li>',
        '        <li><a href="terms.html">Terms of Use (EULA)</a></li>',
        '    </ul>',
        '</nav>'
    ].join('');

    var header = document.getElementById('header');
    if (header) {
        header.insertAdjacentHTML('afterend', navHTML);
        var currentPath = window.location.pathname.split('/').pop();
        var navLinks = document.querySelectorAll('#appnav .links a');
        navLinks.forEach(function(link) {
            var href = link.getAttribute('href');
            if (href === currentPath) {
                link.parentElement.classList.add('active');
            }
        });
    }

    var style = document.createElement('style');
    style.innerHTML = '\n        #header {\n            margin-top: 50px !important;\n            padding-bottom: 0 !important;\n            height: 3rem !important;\n        }\n        @media screen and (max-width: 980px) {\n            #header {\n                height: 2rem !important;\n                padding-bottom: 0 !important;\n            }\n        }\n        #main > * {\n            padding-top: 1.5rem !important;\n        }\n        .post.featured {\n            margin-top: 0 !important;\n        }\n        #wrapper {\n            padding-top: 0 !important;\n        }\n    ';
    document.head.appendChild(style);
}

document.addEventListener('DOMContentLoaded', loadAppNavigation);
