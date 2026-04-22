const toggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('#main-nav');

if (toggle && navList) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('open');
  });
}

const leadForm = document.querySelector('#leadForm');
const msg = document.querySelector('#formMsg');

if (leadForm && msg) {
  leadForm.addEventListener('submit', (event) => {
    event.preventDefault();
    msg.textContent = 'تم استلام طلبك ✅ سنعود إليك خلال 24 ساعة.';
    leadForm.reset();
  });
}
