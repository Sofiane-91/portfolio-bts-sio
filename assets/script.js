
const q = (s, all=false) => all ? document.querySelectorAll(s) : document.querySelector(s);

// Apparition au scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: .08 });
q('.reveal', true).forEach(el => observer.observe(el));

// Navigation active
const sections = q('main section[id]', true);
const navLinks = q('.nav a', true);
const spy = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id));
    }
  });
}, { rootMargin: '-35% 0px -55% 0px' });
sections.forEach(s => spy.observe(s));

// Menu mobile
const menuBtn = q('.mobile-menu');
const nav = q('.nav');
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});
navLinks.forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// Thème
const themeBtn = q('.theme-toggle');
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme) document.documentElement.dataset.theme = savedTheme;
function syncThemeIcon(){
  themeBtn.textContent = document.documentElement.dataset.theme === 'light' ? '◐' : '☼';
}
syncThemeIcon();
themeBtn.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  localStorage.setItem('portfolio-theme', next);
  syncThemeIcon();
});

// Modale fiche compétence
const modal = q('#stage-network');
q('.open-modal', true).forEach(btn => btn.addEventListener('click', () => {
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}));
q('.close-modal', true).forEach(btn => btn.addEventListener('click', () => {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.classList.contains('open')) {
    modal.classList.remove('open');
    document.body.classList.remove('modal-open');
  }
});
