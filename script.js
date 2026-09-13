document.addEventListener('DOMContentLoaded', function () {
  var featuredProjects = [
    ['Meat Sales Online Platform','Full Stack e-commerce platform for a meat sales business','2024','Full stack','assets/projects/project-1/image-1.webp',['React.js','Node.js','MongoDB']],
    ['Fish Sales Company Website','Italian seafood e-commerce experience with localised customer journeys.','2024','Frontend','assets/projects/project-2/image-1.webp',['Vue.js','Quasar','Tailwind']],
    ['Tennis Booking System','Responsive booking interface for tennis courts and availability.','2023','Frontend','assets/projects/project-3/image-1.webp',['React.js','Redux','Bootstrap']],
    ['Curly Hair Salon Website','Premium salon experience with booking, products and customer stories.','2023','Frontend','assets/projects/project-4/image-1.webp',['HTML','CSS','JavaScript']],
    ['Doctor Medical Website','Accessible medical-practice website with clear patient-first journeys.','2023','Frontend','assets/projects/project-5/image-1.webp',['React.js','Tailwind','Firebase']],
    ['E-Selling Marketing Platform','Data-led marketing platform for e-commerce businesses.','2022','Frontend','assets/projects/project-6/image-1.webp',['Next.js','React','TypeScript']],
    ['Palmy Fan Engagement','Live-event fan engagement product built for interaction and loyalty.','2025','Full stack','assets/projects/project-7/image-1.webp',['Nuxt.js','Prisma','Socket.io']],
    ['Agent Readiness Scanner','AI visibility scanner with actionable website optimisation insights.','2025','Frontend','assets/projects/project-8/image-1.webp',['React.js','Vite','Stripe']],
    ['Air Connect','MERN facilitation portal for students, teachers and campus staff.','2025','Full stack','assets/projects/project-9/image-1.webp',['React.js','Node.js','MongoDB']]
  ];
  var calculatorProjects = [
    ['Kalkulator Jadian','Relationship milestone tracker and anniversary calculator','Indonesia','https://kalkulator-jadian-invented.vercel.app/','https://ikalkulatorjadian.id/og-1200x630.webp'],
    ['Contador de Dias','Online day counter for date differences and countdowns','Brazil','https://day-calculator-mu.vercel.app/','https://icontadordedias.com.br/og.webp'],
    ['Yaş Hesaplama','Turkish age calculator based on birth year','Turkey','https://age-calculator-chi-blond.vercel.app/'],
    ['Kredi Hesaplama','Small-business loan payment and eligibility calculator','Turkey','https://turkish-small-business-loan-calcula.vercel.app/','https://s0.wp.com/mshots/v1/https%3A%2F%2Fturkish-small-business-loan-calcula.vercel.app%2F?w=1200'],
    ['Calculadora do Período de Fertilidade','Fertility-period calculator','Brazil','https://fertility-period-calculator-khaki.vercel.app/'],
    ['Calcular RFC México','Mexican RFC tax-ID estimation calculator','Mexico','https://rfc-calculator.vercel.app/'],
    ['Generador de Notas','Chilean grade scale generator and calculator','Chile','https://grade-generator-for-chilean-grade-a.vercel.app/'],
    ['Calculadora de Alquiler','Rental update and adjustment calculator','Argentina','https://rental-calculator-ecru.vercel.app/'],
    ['Calculadora Horas Trabalhadas','Worked-hours and overtime calculator','Brazil','https://calculadora-horas-trabalhadas-seven.vercel.app/'],
    ['Kalkulator Hari','Date and day calculator','Indonesia','https://day-calculator-gttw.vercel.app/','https://www.kalkulatorhari.com/images/brand-og.webp'],
    ['Calculadora ISR','Income-tax calculator','Mexico','https://isr-calculator-navy.vercel.app/'],
    ['Calculadora Seguro-Desemprego','Unemployment-insurance benefit calculator','Brazil','https://unemployment-insurance-calculator-five.vercel.app/'],
    ['PayPal Gebührenrechner','PayPal fee calculator','Germany','https://pay-pal-fee-calculator-snowy.vercel.app/'],
    ['Kalkulator Paliwa','Fuel cost, consumption and trip planner','Poland','https://fuel-calculator-kappa.vercel.app/','https://s0.wp.com/mshots/v1/https%3A%2F%2Ffuel-calculator-kappa.vercel.app%2F?w=1200'],
    ['PawAge','Dog age to human-years calculator','Global','https://pawage.vercel.app/','https://s0.wp.com/mshots/v1/https%3A%2F%2Fpawage.vercel.app%2F?w=1200'],
    ['Calcolo IVA Italia','Italian VAT calculator','Italy','https://italian-vat-calculator.vercel.app/'],
    ['Calculadora Salário Líquido','Brazilian net-salary calculator','Brazil','https://calculadora-salario-liquido-chi.vercel.app/'],
    ['Tazminatı Hesaplama','Turkish severance-pay calculator','Turkey','https://tazminat-hesaplama.vercel.app/'],
    ['Saat Hesaplama','Turkish time calculator','Turkey','https://turkish-time-calculator.vercel.app/'],
    ['Calculadora UF Chile','Chilean UF currency calculator','Chile','https://uf-calculator.vercel.app/'],
    ['Tapu Harcı Hesaplama','Turkish land-registry fee calculator','Turkey','https://turkish-land-registry-cal.vercel.app/'],
    ['Calcolo Stipendio Netto','Italian net-salary calculator','Italy','https://net-salary-cal.vercel.app/'],
    ['Calcul Heure en Ligne','French work-hour calculator','France','https://time-calculation-france.vercel.app/','https://s0.wp.com/mshots/v1/https%3A%2F%2Ftime-calculation-france.vercel.app%2F?w=1200'],
    ['Kalkulator Procentowy','Polish percentage calculator','Poland','https://percentage-calculator-poland.vercel.app/','https://s0.wp.com/mshots/v1/https%3A%2F%2Fpercentage-calculator-poland.vercel.app%2F?w=1200'],
    ['Bürgergeld Rechner','German citizen-benefit calculator','Germany','https://citizen-benefit.vercel.app/','https://s0.wp.com/mshots/v1/https%3A%2F%2Fcitizen-benefit.vercel.app%2F?w=1200'],
    ['Datumsrechner','German date calculator and countdown tool','Germany','https://date-calculator-mauve.vercel.app/'],
    ['Working Time Calculator','Work time and shift calculator','Global','https://working-time-calcu.vercel.app/'],
    ['Attendance Calculator','Attendance percentage calculator','Global','https://attendance-calculator-puce.vercel.app/','https://s0.wp.com/mshots/v1/https%3A%2F%2Fattendance-calculator-puce.vercel.app%2F?w=1200'],
    ['Arabic Spanish Converter','Arabic to Spanish conversion tool','Global','https://arabic-spanish-converter.vercel.app/'],
    ['Calendrier Grossesse','Pregnancy calendar calculator','France','https://calendrier-grossesse-seven.vercel.app/']
  ];
  calculatorProjects = calculatorProjects.filter(function (project) {
    return project[3] !== 'https://calculadora-salario-liquido-chi.vercel.app/';
  });
  function card(title, text, meta, kind, image, tags, href) {
    var fallback = 'https://s0.wp.com/mshots/v1/' + encodeURIComponent(href) + '?w=1200';
    return '<article class="project-card"><a class="project-thumb" href="' + href + '" target="_blank" rel="noopener" aria-label="Open ' + title + '"><img src="' + image + '" alt="Screenshot of ' + title + '" loading="lazy" onerror="this.onerror=null;this.src=\'' + fallback + '\';"><span class="project-kind">' + kind + '</span><span class="project-open" aria-hidden="true">↗</span></a><div class="project-content"><h3>' + title + '</h3><div class="project-meta">' + meta + '</div><p>' + text + '</p><div class="project-tags">' + tags.map(function(tag){return '<span>' + tag + '</span>';}).join('') + '</div><a class="project-link" href="' + href + '" target="_blank" rel="noopener">View live project &rarr;</a></div></article>';
  }
  var featuredTarget = document.getElementById('featuredProjects');
  if (featuredTarget) featuredTarget.innerHTML = featuredProjects.map(function(project) { return card(project[0], project[1], project[2], project[3], project[4], project[5], project[6] || 'https://github.com/Bilaltoor1'); }).join('');
  var calculatorTarget = document.getElementById('calculatorProjects');
  if (calculatorTarget) {
    calculatorTarget.innerHTML = calculatorProjects.map(function(project) { var ogImage = project[4] || project[3].replace(/\/$/, '') + '/opengraph-image'; return card(project[0], project[1], project[2], 'Calculator', ogImage, ['Next.js', 'Calculator', project[2]], project[3]); }).join('');
    calculatorTarget.querySelectorAll('.project-thumb img').forEach(function (image) {
      var href = image.closest('.project-thumb').href.replace(/\/$/, '');
      var fallbacks = [href + '/og.webp', href + '/og-image.webp', 'https://s0.wp.com/mshots/v1/' + encodeURIComponent(href) + '?w=1200'];
      var fallbackIndex = 0;
      image.addEventListener('error', function () { if (fallbackIndex < fallbacks.length) image.src = fallbacks[fallbackIndex++]; });
    });
  }
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
