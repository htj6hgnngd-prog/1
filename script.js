const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  nav?.classList.toggle('is-open', open);
  document.body.classList.toggle('menu-open', open);
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  });
});

const preview = document.querySelector('[data-project-preview]');
const projectRows = [...document.querySelectorAll('[data-project]')];

projectRows.forEach((row) => {
  const activate = () => {
    projectRows.forEach((item) => item.classList.remove('is-active'));
    row.classList.add('is-active');
    preview?.setAttribute('data-active', row.dataset.project || 'conference');
  };
  row.addEventListener('mouseenter', activate);
  row.addEventListener('focus', activate);
  row.addEventListener('click', activate);
});

const form = document.querySelector('[data-form]');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const status = form.querySelector('.form-status');
  if (status) status.textContent = 'Форма работает. На следующем этапе подключим ваш Telegram или CRM.';
});
