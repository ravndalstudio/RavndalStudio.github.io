(function(){
    // Simple lightbox for gallery images and showcase images
    const selectors = {
        galleryAnchors: '.gallery-grid a',
        imageAnchors: '.image a',
        showcaseImgs: '.showcase-frame img'
    };

    function createLightbox() {
        if (document.getElementById('lightbox-overlay')) return;
        const overlay = document.createElement('div');
        overlay.id = 'lightbox-overlay';
        overlay.className = 'lightbox-overlay';
        overlay.innerHTML = `
            <div class="lightbox-content">
                <button class="lightbox-close" aria-label="Close">✕</button>
                <button class="lightbox-prev" aria-label="Previous">◀</button>
                <img class="lightbox-img" src="" alt="">
                <button class="lightbox-next" aria-label="Next">▶</button>
                <div class="lightbox-caption" aria-hidden="false"></div>
            </div>
        `;
        document.body.appendChild(overlay);
        return overlay;
    }

    function gatherItems() {
        const items = [];
        const anchors = Array.from(document.querySelectorAll(selectors.galleryAnchors))
            .concat(Array.from(document.querySelectorAll(selectors.imageAnchors)).filter(a => a.querySelector('img')));
        anchors.forEach(a => {
            const href = a.getAttribute('href');
            const img = a.querySelector('img');
            if (!href) return;
            if (!items.find(i => i.src === href)) {
                items.push({src: href, alt: img ? img.getAttribute('alt') || '' : ''});
            }
        });
        // also add showcase images (if any) that are not duplicate
        const showcases = Array.from(document.querySelectorAll(selectors.showcaseImgs));
        showcases.forEach(img => {
            const src = img.getAttribute('src');
            const alt = img.getAttribute('alt') || '';
            if (!items.find(i=>i.src===src)) items.push({src,alt});
        });
        return items;
    }

    function openLightbox(index, items, overlay) {
        overlay.classList.add('visible');
        const imgEl = overlay.querySelector('.lightbox-img');
        const caption = overlay.querySelector('.lightbox-caption');
        const prev = overlay.querySelector('.lightbox-prev');
        const next = overlay.querySelector('.lightbox-next');
        const close = overlay.querySelector('.lightbox-close');

        function show(i){
            const item = items[i];
            imgEl.src = item.src;
            imgEl.alt = item.alt || '';
            caption.textContent = item.alt || '';
            overlay.dataset.index = i;
        }
        show(index);

        function onKey(e){
            if (e.key === 'Escape') close.click();
            if (e.key === 'ArrowLeft') prev.click();
            if (e.key === 'ArrowRight') next.click();
        }

        prev.onclick = ()=>{
            let i = parseInt(overlay.dataset.index,10);
            i = (i - 1 + items.length) % items.length;
            show(i);
        };
        next.onclick = ()=>{
            let i = parseInt(overlay.dataset.index,10);
            i = (i + 1) % items.length;
            show(i);
        };
        close.onclick = ()=>{
            overlay.classList.remove('visible');
            document.removeEventListener('keydown', onKey);
        };

        // click outside to close
        overlay.onclick = function(e){
            if (e.target === overlay) close.click();
        };

        document.addEventListener('keydown', onKey);
    }

    // Initialize
    document.addEventListener('DOMContentLoaded', function(){
        const overlay = createLightbox();
        const items = gatherItems();
        if (!items.length) return;

        // attach click handlers for gallery and image anchors
        document.querySelectorAll(selectors.galleryAnchors + ', ' + selectors.imageAnchors).forEach((a)=>{
            a.addEventListener('click', function(e){
                e.preventDefault();
                const href = a.getAttribute('href');
                const idx = items.findIndex(i=>i.src===href);
                if (idx >= 0) openLightbox(idx, items, overlay);
            });
        });

        // attach click handlers for showcase images
        document.querySelectorAll(selectors.showcaseImgs).forEach((img)=>{
            img.style.cursor = 'pointer';
            img.addEventListener('click', function(e){
                const src = img.getAttribute('src');
                const idx = items.findIndex(i=>i.src===src);
                if (idx >= 0) openLightbox(idx, items, overlay);
            });
        });
    });
})();
