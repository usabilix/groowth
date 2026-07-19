/* ============================================================
   GROOWTH — Lightweight JS (No dependencies, zero overhead)
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
      menuToggle.innerHTML = isOpen ? 'Close ×' : 'Menu ↓';
    });

    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', false);
        menuToggle.innerHTML = 'Menu ↓';
      });
    });
  }
});
