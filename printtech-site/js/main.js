const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => nav?.classList.remove('is-open'));
});
document.querySelectorAll('[data-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = form.querySelector('.form-status');
    if (form.querySelector('[name="website"]')?.value) return;
    if (status) status.textContent = 'Спасибо! Заявка подготовлена. Подключите Formspree или свой обработчик перед запуском.';
    form.reset();
  });
});