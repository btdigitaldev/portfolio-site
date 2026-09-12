document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('navToggle');
  var overlay = document.getElementById('navOverlay');
  var closeBtn = overlay ? overlay.querySelector('.navclose') : null;

  if (toggle && overlay) {
    var isOpen = false;

    function openMenu() {
      isOpen = true;
      overlay.classList.remove('is-closing', 'is-resetting');
      overlay.classList.add('is-open');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.classList.add('no-scroll');
      toggle.textContent = '✕';
      toggle.setAttribute('aria-label', 'Close menu');
      toggle.setAttribute('aria-expanded', 'true');
    }

    function closeMenu() {
      if (!isOpen) return;
      isOpen = false;
      overlay.classList.remove('is-open');
      overlay.classList.add('is-closing');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('no-scroll');
      toggle.textContent = '☰';
      toggle.setAttribute('aria-label', 'Open menu');
      toggle.setAttribute('aria-expanded', 'false');
    }

    toggle.addEventListener('click', function () {
      isOpen ? closeMenu() : openMenu();
    });
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);

    overlay.querySelectorAll('.nav-links a, .nav-cta').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });

    // After the "slide further left and off-screen" close animation finishes,
    // snap (no transition) back to the off-screen-right resting position so
    // the next open always slides in from the right again. Both resting
    // positions are fully off-screen, so the snap is invisible to the user.
    overlay.addEventListener('transitionend', function (e) {
      if (e.propertyName === 'transform' && overlay.classList.contains('is-closing')) {
        overlay.classList.add('is-resetting');
        overlay.classList.remove('is-closing');
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            overlay.classList.remove('is-resetting');
          });
        });
      }
    });

    // If the viewport is resized past the desktop breakpoint while the
    // overlay is open, close it so it can't get stuck open behind the
    // desktop layout.
    window.addEventListener('resize', function () {
      if (window.innerWidth > 840 && isOpen) closeMenu();
    });
  }

  // Animate skill bars on scroll into view
  var bars = document.querySelectorAll('.skill-row .bar span');
  if (bars.length && 'IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          el.style.width = el.getAttribute('data-w');
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.4 });
    bars.forEach(function (b) { obs.observe(b); });
  } else {
    bars.forEach(function (b) { b.style.width = b.getAttribute('data-w'); });
  }

  // Footer year
  var y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();

  // Sticky avatar: pops in (bottom-right) once you scroll past the hero,
  // hides again right before the footer. Plain class toggle + CSS transition
  // — deliberately not doing per-frame inline-style math, since that's what
  // caused the fixed-position glitch (a transformed ancestor was hijacking
  // the containing block). This element lives outside any transformed
  // parent, so position:fixed always tracks the real viewport.
  var avatar = document.getElementById('stickyAvatar');
  var hero = document.querySelector('.hero, .pd-hero');
  var footer = document.querySelector('footer');

  if (avatar && hero && footer) {
    var ticking = false;

    function updateAvatar() {
      ticking = false;
      var heroBottom = hero.getBoundingClientRect().bottom;
      var footerTop = footer.getBoundingClientRect().top;
      var viewportH = window.innerHeight;

      var pastHero = heroBottom < 72;               // hero has scrolled out from under the nav
      var reachedFooter = footerTop < viewportH - 24; // footer is starting to enter view

      avatar.classList.toggle('is-visible', pastHero && !reachedFooter);
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateAvatar);
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    window.addEventListener('load', updateAvatar);
    updateAvatar();
  }
});
