(() => {
  const mobileMenubtn = document.querySelector('.mobile-menu__btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  // const closeMenuBtn = document.querySelector('.header__menu-icon--close');

  const toggleMenu = () => {
    const isMenuOpen = mobileMenubtn.getAttribute('aria-expanded') === 'true' || false;
    mobileMenubtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenubtn.classList.toggle('is-open');
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  mobileMenubtn.addEventListener('click', toggleMenu);
  // closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenubtn.classList.remove('is-open');
    mobileMenubtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
