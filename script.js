
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav-links');
  if (toggle && nav) toggle.addEventListener('click', () => nav.classList.toggle('open'));

  const filters = document.querySelectorAll('.filter');
  const cards = document.querySelectorAll('.course-card');
  const empty = document.querySelector('#empty-state');
  filters.forEach(button => button.addEventListener('click', () => {
    filters.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    let count = 0;
    cards.forEach(card => {
      const show = button.dataset.filter === 'all' || card.dataset.category === button.dataset.filter;
      card.hidden = !show;
      if (show) count++;
    });
    if (empty) empty.style.display = count ? 'none' : 'block';
  }));

  const form = document.querySelector('#contact-form');
  if (form) form.addEventListener('submit', event => {
    event.preventDefault();
    const notice = document.querySelector('#form-notice');
    notice.style.display = 'block';
    form.reset();
  });
});
