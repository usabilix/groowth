/* ============================================================
   GROOWTH — Lightweight JS (No dependencies, zero overhead)
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // --- Mobile Menu ---
  var menuToggle = document.getElementById('menuToggle');
  var mobileMenu = document.getElementById('mobileMenu');
  var mobileLinks = document.querySelectorAll('.mobile-link');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
      mobileMenu.setAttribute('aria-hidden', !isOpen);
      menuToggle.innerHTML = isOpen ? 'Close &times;' : 'Menu &darr;';
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
        menuToggle.innerHTML = 'Menu &darr;';
        document.body.style.overflow = '';
      });
    });
  }

  // --- Scroll Reveal (Intersection Observer) ---
  var reveals = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && reveals.length > 0) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -32px 0px'
    });

    reveals.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show everything
    reveals.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // --- Navbar scroll indicator ---
  var navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // --- Smooth Bezier Animated Number Counter ---
  var counterEls = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window && counterEls.length > 0) {
    // Cubic bezier easing (easeOutExpo / cubic-bezier(0.16, 1, 0.3, 1))
    function easeOutExpo(x) {
      return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    }

    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var targetNum = parseInt(el.getAttribute('data-count'), 10);
          var prefix = el.getAttribute('data-prefix') || '';
          var suffix = el.getAttribute('data-suffix') || '';
          var duration = 1800;
          var startTime = null;

          function updateCount(timestamp) {
            if (!startTime) startTime = timestamp;
            var linearProgress = Math.min((timestamp - startTime) / duration, 1);
            var easedProgress = easeOutExpo(linearProgress);
            var currentNum = Math.floor(easedProgress * targetNum);
            el.textContent = prefix + currentNum + suffix;
            if (linearProgress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              el.textContent = prefix + targetNum + suffix;
            }
          }

          requestAnimationFrame(updateCount);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.15 });

    counterEls.forEach(function (el) {
      counterObserver.observe(el);
    });
  }
});
