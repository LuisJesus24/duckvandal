// Animaciones callejeras: revelado al hacer scroll y manchas de spray al hacer clic.
// Si el usuario prefiere menos movimiento, no hace nada y todo se ve estático.
const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!calm) {
  const spray = '.page-head h2, .section-head h2, .manifesto h2, .feature h2, .community-band h2';
  const slap = [
    '.section-head p', '.page-head .lead', '.pillar', '.duck-card', '.reto', '.rules li', '.chapter', '.tile',
    '.swatch', '.entry-grid a', '.origin-pages li', '.community-band', '.feature img', '.feature blockquote',
    '.manifesto .poster', '.manifesto p', '.glossary div', '.logo-tile', '.type-sample', '.do-dont > div',
    '.wall figure', '.slot', '.inspo a', '.storyboard li', '.character-stage', '.stats > div',
  ].join(',');

  const targets = [...document.querySelectorAll<HTMLElement>(`${spray},${slap}`)];
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const el = e.target as HTMLElement;
        io.unobserve(el);
        const siblings = el.parentElement ? [...el.parentElement.children].filter((c) => c.classList.contains('reveal') || c.classList.contains('spray')) : [];
        const i = Math.max(0, siblings.indexOf(el));
        el.style.animationDelay = `${Math.min(i, 5) * 70}ms`;
        el.classList.add('in');
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
  );
  for (const el of targets) {
    el.classList.add(el.matches(spray) ? 'spray' : 'reveal');
  }
  document.documentElement.classList.add('js-motion');
  for (const el of targets) io.observe(el);

  // Manchas de spray: un clic, una mancha del color de la marca o de un pato
  const colors = ['#ff574d', '#bdd778', '#77e0dd', '#ff9a88', '#f9cb6e', '#ffa6d3'];
  let last = 0;
  addEventListener('pointerdown', (ev) => {
    const t = ev.target as HTMLElement;
    if (t.closest('input, textarea, select, canvas, dialog')) return;
    const now = performance.now();
    if (now - last < 120) return;
    last = now;
    const s = document.createElement('span');
    s.className = 'splat';
    s.style.left = `${ev.clientX}px`;
    s.style.top = `${ev.clientY}px`;
    s.style.setProperty('--s', `${28 + Math.random() * 40}px`);
    s.style.setProperty('--c', colors[Math.floor(Math.random() * colors.length)]);
    document.body.append(s);
    setTimeout(() => s.remove(), 1400);
  });
}
