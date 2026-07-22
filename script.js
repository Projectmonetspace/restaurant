const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');
toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
}));

const filters = [...document.querySelectorAll('.filter')];
const dishes = [...document.querySelectorAll('.dish-card')];
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  const filter = button.dataset.filter;
  dishes.forEach(card => card.classList.toggle('is-hidden', filter !== 'all' && card.dataset.category !== filter));
}));
