(() => {
    const field = document.getElementById('field');
    const tiles = [...field.querySelectorAll('.tile')];

    //   SETTINGS
    const HOLD = 0.5;          // seconds fully visible before fading
    const FADE = 3.5;           // slow fade-out of the revealed image
    const TRAIL_FADE = 2.5;     // fade-out of each trail copy
    const TRAIL_DISTANCE = 10;  // px of mouse travel between trail copies
    const MAX_TRAIL = 1000;       // cap on live trail elements
    const IDLE_DELAY = 1;     // seconds without mouse movement before images start appearing alone

    let items = [];
    let liveTrail = 0;
    let last = null;
    let idleTimer = null;
    let lastIdle = null;

    const rand = (a, b) => a + Math.random() * (b - a);

    function layout() {
        const W = window.innerWidth, H = window.innerHeight;
        const cols = W < 700 ? 2 : 4;
        const rows = Math.ceil(tiles.length / cols);
        const cw = W / cols, ch = H / rows;
        const cells = gsap.utils.shuffle([...Array(cols * rows).keys()]);
        const base = Math.min(cw * 0.95, W * 0.15);

        items = tiles.map((el, i) => {
            const ratio = parseFloat(el.dataset.ratio) || 1.44;
            let w = base * (ratio < 1 ? 0.75 : 1);
            let h = w / ratio;
            if (h > ch * 1.1) { h = ch * 1.1; w = h * ratio; }
            const c = cells[i];
            const x = (c % cols) * cw + rand(-0.1, 0.9) * (cw - w) + rand(0, w * 0.1);
            const y = Math.floor(c / cols) * ch + rand(-0.1, 0.9) * (ch - h);
            el.style.width = w + 'px';
            el.style.height = h + 'px';
            el.style.transform = `translate(${x}px, ${y}px)`;
            if (el.dataset.src) el.style.backgroundImage = `url("${el.dataset.src}")`;
            return { el, x, y, w, h, src: el.dataset.src };
        });
    };

    function reveal(item) {
        gsap.killTweensOf(item.el);
        gsap.fromTo(item.el, { opacity: item.el.style.opacity || 0 }, {
            opacity: 1, duration: 0.25, ease: 'power1.out',
            onComplete: () => gsap.to(item.el, { opacity: 0, duration: FADE, delay: HOLD, ease: 'power2.inOut' })
        });
    };

    function spawnTrail(item, px, py) {
        if (liveTrail >= MAX_TRAIL) return;
        const el = document.createElement('div');
        el.className = 'trail';
        el.style.width = item.w + 'px';
        el.style.height = item.h + 'px';
        if (item.src) el.style.backgroundImage = `url("${item.src}")`;
        field.appendChild(el);
        liveTrail++;
        gsap.fromTo(el,
            { x: px - item.w / 2, y: py - item.h / 2, opacity: 0.9, scale: 1 },
            {
                opacity: 0, scale: 0.92, duration: TRAIL_FADE, ease: 'power2.out',
                onComplete: () => { el.remove(); liveTrail--; }
            });
    };

    function scheduleIdle(seconds) {
        clearTimeout(idleTimer);
        idleTimer = setTimeout(idleReveal, seconds * 1000);
    };

    function idleReveal() {
        const pool = items.filter(i => i !== lastIdle);
        const pick = pool[Math.floor(Math.random() * pool.length)];
        lastIdle = pick;
        reveal(pick);
        scheduleIdle(0.25 + HOLD + FADE);
    };

    function onMove(e) {
        scheduleIdle(IDLE_DELAY);
        const px = e.clientX, py = e.clientY;
        let hit = null;
        for (let i = items.length - 1; i >= 0; i--) {
            const t = items[i];
            if (px >= t.x && px <= t.x + t.w && py >= t.y && py <= t.y + t.h) { hit = t; break; }
        }
        if (!hit) { last = null; return; }

        reveal(hit);

        const moved = !last || hit !== last.item ||
            Math.hypot(px - last.x, py - last.y) >= TRAIL_DISTANCE;
        if (moved && last && last.item === hit) spawnTrail(hit, px, py);
        if (moved) last = { item: hit, x: px, y: py };
    };

    layout();
    scheduleIdle(1);
    let t;
    window.addEventListener('resize', () => { clearTimeout(t); t = setTimeout(layout, 150); });
    window.addEventListener('pointermove', onMove, { passive: true });
})();
