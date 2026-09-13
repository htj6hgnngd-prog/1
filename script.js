const body = document.body;
const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

menuButton?.addEventListener('click', () => {
  const next = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(next));
  mobileMenu?.classList.toggle('is-open', next);
  mobileMenu?.setAttribute('aria-hidden', String(!next));
  body.classList.toggle('menu-open', next);
});

mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('is-open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    body.classList.remove('menu-open');
  });
});

let lastY = window.scrollY;
let ticking = false;

function updateOnScroll() {
  const y = window.scrollY;
  const menuOpen = body.classList.contains('menu-open');

  if (!menuOpen && y > 140 && y > lastY + 8) header?.classList.add('is-hidden');
  if (y < lastY - 8 || y < 80) header?.classList.remove('is-hidden');
  lastY = y;

  const shell = document.querySelector('[data-hero-media-shell]');
  if (shell && window.innerWidth > 820 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const max = Math.max(window.innerHeight * 0.48, 1);
    const progress = Math.min(Math.max((y - window.innerHeight * 0.38) / max, 0), 1);
    const scaleX = 0.955 + progress * 0.045;
    const lift = (1 - progress) * 18;
    shell.style.transform = `translateY(${lift}px) scaleX(${scaleX})`;
  }

  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(updateOnScroll);
    ticking = true;
  }
}, { passive: true });
updateOnScroll();

const visual = document.querySelector('[data-work-visual]');
const counter = document.querySelector('[data-work-counter]');
const workItems = [...document.querySelectorAll('[data-work]')];

workItems.forEach((item, index) => {
  const activate = () => {
    workItems.forEach((row) => row.classList.remove('is-active'));
    item.classList.add('is-active');
    visual?.setAttribute('data-active', item.dataset.work || 'conference');
    if (counter) counter.textContent = `${String(index + 1).padStart(2, '0')} / ${String(workItems.length).padStart(2, '0')}`;
  };

  item.addEventListener('mouseenter', activate);
  item.addEventListener('focus', activate);
  item.addEventListener('click', activate);
});

const form = document.querySelector('[data-form]');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const status = form.querySelector('.form-status');
  if (status) status.textContent = 'Форма готова. Перед публикацией подключим Telegram, CRM или почту.';
});
