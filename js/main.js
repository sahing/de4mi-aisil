/**
 * ALISIL TECHNOLOGY PVT LTD - CORE INTERACTIVE ENGINE
 * "Powering Businesses Through Smart Technology"
 * HTML, CSS, JavaScript Only (No build step required)
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initHeader();
  initMegaMenu();
  initMobileNav();
  initHeroCanvas();
  initAiImpactModule();
  initStatsCounters();
  initScrollReveals();
  initRoiCalculator();
  initServicesModal();
  initCertificatesModal();
  initSearchDialog();
  initChatWidget();
  initWhatsAppFloatingButton();
  initCookieConsent();
  initForms();
  initOfficeLocations();
  initDynamicSchema();
});

/* ==========================================================================
   1. Theme Management (Light & Dark with System Detection)
   ========================================================================== */
function initTheme() {
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const storedTheme = localStorage.getItem('alisil-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = storedTheme || (systemPrefersDark ? 'dark' : 'light');

  applyTheme(initialTheme);

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem('alisil-theme', next);
    });
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('alisil-theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const isDark = theme === 'dark';

  themeToggleBtns.forEach(btn => {
    btn.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} mode`);
    btn.innerHTML = isDark
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  });

  // Switch logo images based on theme
  const brandLogos = document.querySelectorAll('.brand-logo-img');
  brandLogos.forEach(img => {
    img.src = isDark ? 'assets/logo-dark.svg' : 'assets/logo-full.svg';
  });
}

/* ==========================================================================
   2. Sticky Header with Scroll Watcher
   ========================================================================== */
function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ==========================================================================
   2b. Viewport-Aware Mega-Menu Interaction & Hover Stability Buffer
   ========================================================================== */
function initMegaMenu() {
  const megaItem = document.querySelector('.nav-item.has-mega-menu, .nav-item:has(.mega-menu)');
  if (!megaItem) return;

  const trigger = megaItem.querySelector('.nav-link');
  const megaMenu = megaItem.querySelector('.mega-menu');
  if (!trigger || !megaMenu) return;

  let closeTimer = null;
  const GRACE_DELAY = 260; // 260ms hover intent grace period prevents accidental close during diagonal mouse travel

  const openMenu = () => {
    if (closeTimer) {
      clearTimeout(closeTimer);
      closeTimer = null;
    }
    megaItem.classList.add('is-open');
    trigger.setAttribute('aria-expanded', 'true');
  };

  const scheduleClose = () => {
    if (closeTimer) clearTimeout(closeTimer);
    closeTimer = setTimeout(() => {
      megaItem.classList.remove('is-open');
      trigger.setAttribute('aria-expanded', 'false');
    }, GRACE_DELAY);
  };

  // Keep open stably when pointer moves over trigger or mega-menu
  megaItem.addEventListener('mouseenter', openMenu);
  megaItem.addEventListener('mouseleave', scheduleClose);
  megaMenu.addEventListener('mouseenter', openMenu);
  megaMenu.addEventListener('mouseleave', scheduleClose);

  // Focus management
  megaItem.addEventListener('focusin', openMenu);
  megaItem.addEventListener('focusout', (e) => {
    if (!megaItem.contains(e.relatedTarget)) {
      scheduleClose();
    }
  });

  // Clicking trigger toggles or pins open
  trigger.addEventListener('click', (e) => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch || !megaItem.classList.contains('is-open')) {
      e.preventDefault();
      const isOpen = megaItem.classList.contains('is-open');
      if (isOpen && isTouch) {
        megaItem.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
      } else {
        openMenu();
      }
    }
  });

  // Clicking any link inside megaMenu closes it cleanly upon navigation
  megaMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (closeTimer) clearTimeout(closeTimer);
      megaItem.classList.remove('is-open');
      trigger.setAttribute('aria-expanded', 'false');
    });
  });

  // Close when pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && megaItem.classList.contains('is-open')) {
      if (closeTimer) clearTimeout(closeTimer);
      megaItem.classList.remove('is-open');
      trigger.setAttribute('aria-expanded', 'false');
      trigger.focus();
    }
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!megaItem.contains(e.target)) {
      if (closeTimer) clearTimeout(closeTimer);
      megaItem.classList.remove('is-open');
      trigger.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ==========================================================================
   3. Mobile Navigation Drawer
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const closeBtn = document.querySelector('.drawer-close');

  if (!toggleBtn || !drawer) return;

  const openDrawer = () => {
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });

  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* ==========================================================================
   4. Hero Interactive Particle/Network Mesh Canvas
   ========================================================================== */
function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    canvas.style.display = 'none';
    return;
  }

  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let width, height;
  let particles = [];
  const particleCount = 50;
  const maxDistance = 130;
  const mouse = { x: null, y: null, radius: 140 };

  function resize() {
    if (!canvas.parentElement) return;
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
    createParticles();
  }

  function createParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1,
        color: Math.random() > 0.82 ? '#F39C12' : '#1B8FD2'
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      if (mouse.x !== null) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          p.x += dx * 0.015;
          p.y += dy * 0.015;
        }
      }

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const alpha = 1 - dist / maxDistance;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(27, 143, 210, ${alpha * 0.3})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }
    }

    animationFrameId = requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize, { passive: true });
  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  canvas.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animationFrameId);
    } else {
      draw();
    }
  });

  resize();
  draw();
}

/* ==========================================================================
   5. Scroll Reveals (Subtle & Performant)
   ========================================================================== */
function initScrollReveals() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('revealed'));
    return;
  }

  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   6. Signature Interaction: "AI is Replacing & Changing" Module
   ========================================================================== */
function initAiImpactModule() {
  const switchBtn = document.querySelector('.ai-switch-btn');
  const labelBefore = document.querySelector('.ai-toggle-label.before');
  const labelAfter = document.querySelector('.ai-toggle-label.after');
  const matrixContainer = document.querySelector('.ai-matrix-grid');
  const filterTabs = document.querySelectorAll('.ai-filter-tab');

  if (!matrixContainer || !window.ALISIL_DATA) return;

  let isAiMode = true;
  let activePillar = 'all';

  function renderMatrix() {
    const services = window.ALISIL_DATA.services.filter(s => {
      return activePillar === 'all' || s.pillarId === activePillar;
    });

    matrixContainer.innerHTML = services.map(s => `
      <article class="ai-matrix-card" data-service-id="${s.id}">
        <div class="ai-card-header">
          <h3 class="ai-service-name">${s.title}</h3>
          <span class="badge badge-sky">${getPillarName(s.pillarId)}</span>
        </div>

        <div class="ai-card-content">
          ${isAiMode ? `
            <div class="ai-state-block replacing">
              <span class="ai-state-tag">⚡ AI is Replacing</span>
              <p class="ai-state-text">${s.aiMatrix.replacing}</p>
            </div>
            <div class="ai-state-block changing">
              <span class="ai-state-tag">✦ AI is Changing</span>
              <p class="ai-state-text">${s.aiMatrix.changing}</p>
            </div>
            <div class="ai-state-block rising">
              <span class="ai-state-tag">▲ Rising Human Role</span>
              <p class="ai-state-text">${s.aiMatrix.rising}</p>
            </div>
          ` : `
            <div class="ai-state-block replacing" style="border-left-color: #8E9BAE;">
              <span class="ai-state-tag" style="color: #8E9BAE;">Legacy Workflow (Before AI)</span>
              <p class="ai-state-text">${s.aiMatrix.replacing} handled manually with heavy operational lag.</p>
            </div>
            <div class="ai-state-block changing" style="border-left-color: #8E9BAE;">
              <span class="ai-state-tag" style="color: #8E9BAE;">Traditional Delivery</span>
              <p class="ai-state-text">Static execution dependent on heavy manual overhead and rigid governance.</p>
            </div>
            <div class="ai-state-block rising" style="border-left-color: #8E9BAE;">
              <span class="ai-state-tag" style="color: #8E9BAE;">Legacy Cost & Time</span>
              <p class="ai-state-text">High error vulnerability and elevated baseline cost structure.</p>
            </div>
          `}
        </div>

        <div class="ai-card-metric">
          <span class="ai-metric-val">${isAiMode ? s.aiMatrix.metric : 'Baseline (1x)'}</span>
          <span class="ai-metric-desc">${isAiMode ? s.aiMatrix.metricLabel : 'Traditional operating baseline'}</span>
        </div>
      </article>
    `).join('');
  }

  function getPillarName(id) {
    const p = window.ALISIL_DATA.pillars.find(item => item.id === id);
    return p ? p.name : '';
  }

  if (switchBtn) {
    switchBtn.addEventListener('click', () => {
      isAiMode = !isAiMode;
      switchBtn.setAttribute('aria-checked', isAiMode.toString());
      if (labelBefore) labelBefore.classList.toggle('active', !isAiMode);
      if (labelAfter) labelAfter.classList.toggle('active', isAiMode);
      renderMatrix();
    });

    if (labelBefore) {
      labelBefore.addEventListener('click', () => {
        isAiMode = false;
        switchBtn.setAttribute('aria-checked', 'false');
        labelBefore.classList.add('active');
        if (labelAfter) labelAfter.classList.remove('active');
        renderMatrix();
      });
    }

    if (labelAfter) {
      labelAfter.addEventListener('click', () => {
        isAiMode = true;
        switchBtn.setAttribute('aria-checked', 'true');
        labelAfter.classList.add('active');
        if (labelBefore) labelBefore.classList.remove('active');
        renderMatrix();
      });
    }
  }

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activePillar = tab.getAttribute('data-pillar');
      renderMatrix();
    });
  });

  renderMatrix();
}

/* ==========================================================================
   7. Stats Animated Number Counters
   ========================================================================== */
function initStatsCounters() {
  const counterElements = document.querySelectorAll('[data-counter-target]');
  if (!counterElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.35 });

  counterElements.forEach(el => observer.observe(el));
}

function animateCounter(element) {
  const targetStr = element.getAttribute('data-counter-target');
  const targetNum = parseFloat(targetStr.replace(/[^0-9.]/g, ''));
  const prefix = targetStr.startsWith('$') ? '$' : '';
  const suffix = targetStr.includes('+') ? '+' : (targetStr.includes('%') ? '%' : (targetStr.includes('x') ? 'x' : ''));
  const duration = 1100;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = 1 - (1 - progress) * (1 - progress);
    const currentVal = (targetNum * easeProgress).toFixed(targetStr.includes('.') ? 1 : 0);

    element.textContent = `${prefix}${currentVal}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = targetStr;
    }
  }

  requestAnimationFrame(update);
}

/* ==========================================================================
   8. Interactive ROI Calculator
   ========================================================================== */
function initRoiCalculator() {
  const empSlider = document.getElementById('calc-emp-slider');
  const adoptionSlider = document.getElementById('calc-adoption-slider');
  const empVal = document.getElementById('calc-emp-val');
  const adoptionVal = document.getElementById('calc-adoption-val');
  const savingsDisplay = document.getElementById('calc-savings-display');
  const hoursDisplay = document.getElementById('calc-hours-display');
  const velocityDisplay = document.getElementById('calc-velocity-display');

  if (!empSlider || !adoptionSlider) return;

  function calculate() {
    const employees = parseInt(empSlider.value, 10);
    const adoption = parseInt(adoptionSlider.value, 10);

    if (empVal) empVal.textContent = employees.toLocaleString();
    if (adoptionVal) adoptionVal.textContent = `${adoption}%`;

    const annualSavings = (employees * (adoption / 100) * 14500);
    const hoursSaved = Math.round(employees * (adoption / 100) * 420);
    const velocityMultiplier = (1 + (adoption / 100) * 2.5).toFixed(1);

    if (savingsDisplay) {
      if (annualSavings >= 1000000) {
        savingsDisplay.textContent = `$${(annualSavings / 1000000).toFixed(1)}M+`;
      } else {
        savingsDisplay.textContent = `$${Math.round(annualSavings / 1000)}K+`;
      }
    }

    if (hoursDisplay) hoursDisplay.textContent = `${hoursSaved.toLocaleString()} hrs/yr`;
    if (velocityDisplay) velocityDisplay.textContent = `${velocityMultiplier}x`;
  }

  empSlider.addEventListener('input', calculate);
  adoptionSlider.addEventListener('input', calculate);
  calculate();
}

/* ==========================================================================
   9. Service Deep-Dive Modal
   ========================================================================== */
function initServicesModal() {
  const dialog = document.getElementById('service-detail-dialog');
  if (!dialog || !window.ALISIL_DATA) return;

  setupDialogLightDismiss(dialog);

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-service-slug]');
    if (!trigger) return;

    e.preventDefault();
    const slug = trigger.getAttribute('data-service-slug');
    const service = window.ALISIL_DATA.services.find(s => s.slug === slug || s.id === slug);
    if (!service) return;

    const modalTitle = dialog.querySelector('#service-modal-title');
    const modalBody = dialog.querySelector('#service-modal-body');

    if (modalTitle) modalTitle.textContent = service.title;
    if (modalBody) {
      modalBody.innerHTML = `
        <div style="margin-bottom: 1.25rem;">
          <p style="font-size: 1rem; line-height: 1.55; margin-bottom: 1rem;">${service.longDesc}</p>
        </div>

        <h4 style="margin-bottom: 0.65rem; color: var(--sky-500); font-size: 1.05rem;">Core Capabilities</h4>
        <ul style="list-style: none; margin-bottom: 1.25rem; display: flex; flex-direction: column; gap: 0.45rem;">
          ${service.capabilities.map(c => `<li style="display: flex; gap: 0.45rem; font-size: 0.9rem;"><strong>✓</strong> ${c}</li>`).join('')}
        </ul>

        <div style="background: var(--bg-alt); padding: 1rem; border-radius: var(--radius-sm); margin-bottom: 1.25rem;">
          <h5 style="color: var(--amber-500); margin-bottom: 0.4rem; font-size: 0.92rem;">AI Impact Benchmark</h5>
          <p style="font-size: 0.85rem; margin-bottom: 0.35rem;"><strong>Replacing:</strong> ${service.aiMatrix.replacing}</p>
          <p style="font-size: 0.85rem; margin-bottom: 0.35rem;"><strong>Changing:</strong> ${service.aiMatrix.changing}</p>
          <p style="font-size: 0.85rem;"><strong>New Human Value:</strong> ${service.aiMatrix.rising}</p>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 0.85rem; border-top: 1px solid var(--border);">
          <span style="font-family: var(--font-mono); font-weight: 700; color: var(--sky-500); font-size: 1rem;">${service.aiMatrix.metric}</span>
          <a href="contact.html?service=${encodeURIComponent(service.title)}" class="btn btn-primary btn-sm">Consult on this Service →</a>
        </div>
      `;
    }

    dialog.showModal();
  });

  const closeBtn = dialog.querySelector('.dialog-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => dialog.close());
  }
}

/* ==========================================================================
   9B. Certificate Lightbox Modal
   ========================================================================== */
function initCertificatesModal() {
  const dialog = document.getElementById('cert-lightbox-dialog');
  if (!dialog) return;

  setupDialogLightDismiss(dialog);

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-cert-src]');
    if (!trigger) return;

    e.preventDefault();
    const src = trigger.getAttribute('data-cert-src');
    const title = trigger.getAttribute('data-cert-title') || 'Official Certificate';
    const authority = trigger.getAttribute('data-cert-authority') || 'Official Accreditation & Government Recognition';
    const desc = trigger.getAttribute('data-cert-desc') || 'Verified statutory and regulatory credential of Alisil Technology.';

    const modalTitle = dialog.querySelector('#cert-dialog-title');
    const modalImg = dialog.querySelector('#cert-dialog-img');
    const modalAuthority = dialog.querySelector('#cert-dialog-authority');
    const modalDesc = dialog.querySelector('#cert-dialog-desc');

    if (modalTitle) modalTitle.textContent = title;
    if (modalImg) {
      modalImg.src = src;
      modalImg.alt = title;
    }
    if (modalAuthority) modalAuthority.textContent = authority;
    if (modalDesc) modalDesc.textContent = desc;

    dialog.showModal();
  });

  const closeBtn = dialog.querySelector('.dialog-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => dialog.close());
  }
}

/* ==========================================================================
   10. Global Search Modal (Ctrl/Cmd + K)
   ========================================================================== */
function initSearchDialog() {
  const searchDialog = document.getElementById('search-dialog');
  const searchTriggerBtns = document.querySelectorAll('.search-trigger-btn');
  const searchInput = document.getElementById('global-search-input');
  const resultsList = document.getElementById('search-results-list');

  if (!searchDialog || !window.ALISIL_DATA) return;

  setupDialogLightDismiss(searchDialog);

  const openSearch = () => {
    searchDialog.showModal();
    if (searchInput) {
      searchInput.value = '';
      searchInput.focus();
      renderSearchResults('');
    }
  };

  searchTriggerBtns.forEach(btn => btn.addEventListener('click', openSearch));

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openSearch();
    }
  });

  if (searchInput && resultsList) {
    searchInput.addEventListener('input', (e) => {
      renderSearchResults(e.target.value.trim().toLowerCase());
    });
  }

  function renderSearchResults(query) {
    if (!resultsList) return;

    if (!query) {
      resultsList.innerHTML = `
        <li style="padding: 1rem; color: var(--text-muted); font-size: 0.88rem; text-align: center;">
          Type to search 15 services, case studies, industries, and research...
        </li>
      `;
      return;
    }

    const matchedServices = window.ALISIL_DATA.services.filter(s =>
      s.title.toLowerCase().includes(query) || s.shortDesc.toLowerCase().includes(query)
    ).map(s => ({
      title: s.title,
      type: 'Service Line',
      url: `services.html#${s.slug}`,
      desc: s.shortDesc
    }));

    const matchedIndustries = window.ALISIL_DATA.industries.filter(i =>
      i.name.toLowerCase().includes(query) || i.headline.toLowerCase().includes(query)
    ).map(i => ({
      title: i.name,
      type: 'Industry',
      url: `industries.html#${i.id}`,
      desc: i.headline
    }));

    const matchedCaseStudies = window.ALISIL_DATA.caseStudies.filter(c =>
      c.title.toLowerCase().includes(query) || c.summary.toLowerCase().includes(query)
    ).map(c => ({
      title: c.title,
      type: 'Case Study',
      url: `case-studies.html#${c.id}`,
      desc: c.summary
    }));

    const allMatches = [...matchedServices, ...matchedIndustries, ...matchedCaseStudies];

    if (!allMatches.length) {
      resultsList.innerHTML = `
        <li style="padding: 1.25rem; text-align: center; color: var(--text-muted); font-size: 0.88rem;">
          No matching results found for "<strong>${query}</strong>".
        </li>
      `;
      return;
    }

    resultsList.innerHTML = allMatches.slice(0, 7).map(m => `
      <li class="search-result-item">
        <a href="${m.url}">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.2rem;">
            <strong style="font-size: 0.9rem;">${m.title}</strong>
            <span class="badge badge-sky" style="font-size: 0.64rem;">${m.type}</span>
          </div>
          <p style="font-size: 0.82rem; color: var(--text-muted); margin: 0;">${m.desc}</p>
        </a>
      </li>
    `).join('');
  }

  const closeBtn = searchDialog.querySelector('.dialog-close-btn');
  if (closeBtn) closeBtn.addEventListener('click', () => searchDialog.close());
}

function setupDialogLightDismiss(dialog) {
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    const outside = (e, d) => {
      const r = d.getBoundingClientRect();
      return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
    };
    let pressedOutside = false;
    dialog.addEventListener('pointerdown', (e) => { pressedOutside = outside(e, dialog); });
    dialog.addEventListener('pointerup', (e) => {
      if (pressedOutside && outside(e, dialog)) dialog.close();
    });
  }
}

/* ==========================================================================
   11. Interactive Alisil AI Concierge Chatbot
   ========================================================================== */
function initChatWidget() {
  const launcher = document.querySelector('.ai-chat-launcher');
  const panel = document.querySelector('.chat-widget-panel');
  const closeBtn = document.querySelector('.chat-close-btn');
  const messagesContainer = document.querySelector('.chat-messages');
  const chatInput = document.querySelector('.chat-input');
  const sendBtn = document.querySelector('.chat-send-btn');

  if (!launcher || !panel || !messagesContainer) return;

  const togglePanel = () => {
    panel.classList.toggle('open');
    if (panel.classList.contains('open') && chatInput) {
      chatInput.focus();
    }
  };

  launcher.addEventListener('click', togglePanel);
  if (closeBtn) closeBtn.addEventListener('click', togglePanel);

  function appendMessage(text, sender = 'bot') {
    const msg = document.createElement('div');
    msg.className = `chat-msg ${sender}`;
    msg.innerHTML = text;
    messagesContainer.appendChild(msg);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  function handleSend() {
    const query = chatInput.value.trim();
    if (!query) return;

    appendMessage(query, 'user');
    chatInput.value = '';

    setTimeout(() => {
      const response = generateChatbotReply(query);
      appendMessage(response, 'bot');
    }, 400);
  }

  if (sendBtn) sendBtn.addEventListener('click', handleSend);
  if (chatInput) {
    chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSend();
      }
    });
  }
}

function generateChatbotReply(query) {
  const q = query.toLowerCase();

  if (q.includes('service') || q.includes('offer') || q.includes('portfolio')) {
    return `Alisil delivers 15 enterprise services across 5 pillars: 
    <strong>1. AI & Data</strong>, <strong>2. Business Operations (BPO/KPO/BPM)</strong>, 
    <strong>3. Cloud & Infrastructure</strong>, <strong>4. Engineering & Applications</strong>, 
    and <strong>5. Advisory & Sustainability</strong>. <br><br>Which area would you like to explore?`;
  }

  if (q.includes('ai') || q.includes('replacing') || q.includes('impact')) {
    return `Our signature philosophy is <strong>"AI is Replacing & Changing"</strong>: AI automates mechanical toil (reporting, ETL, boilerplate code), accelerates real-time decision making, and elevates professionals into strategic roles. Explore the <a href="ai-impact.html" style="color:var(--sky-500);text-decoration:underline;">AI Impact Matrix</a>.`;
  }

  if (q.includes('bpo') || q.includes('kpo') || q.includes('support')) {
    return `In BPO and KPO, we combine human empathy with real-time generative agent copilots, driving a 55% reduction in first-call resolution latency and 4x throughput capacity in deep research.`;
  }

  if (q.includes('cloud') || q.includes('aws') || q.includes('azure') || q.includes('finops')) {
    return `As an AWS Premier Partner and Azure Expert MSP, we help enterprises reduce average cloud spend by 38% through autonomous FinOps and self-healing Kubernetes clusters.`;
  }

  if (q.includes('certif') || q.includes('startup india') || q.includes('msme') || q.includes('iso') || q.includes('accreditation') || q.includes('compliance')) {
    return `Alisil Technology is officially recognized by the Government of India under <strong>Startup India (DPIIT)</strong> and the <strong>Ministry of MSME</strong>, and is <strong>ISO Certified</strong> for Quality & Information Security. You can inspect our verified credentials on our <a href="about.html#accreditations" style="color:var(--amber-500);font-weight:700;">Accreditations & Governance</a> section or click any certificate on the homepage to view high-resolution filings.`;
  }

  if (q.includes('consultation') || q.includes('contact') || q.includes('call') || q.includes('book') || q.includes('email') || q.includes('mail') || q.includes('domain') || q.includes('website')) {
    return `We'd welcome connecting with you! Reach Alisil Technology directly at <a href="mailto:alisiltechnology@gmail.com" style="color:var(--amber-500);font-weight:700;">alisiltechnology@gmail.com</a>, explore our official portal at <a href="https://www.alisiltechnology.in" target="_blank" rel="noopener" style="color:var(--sky-500);text-decoration:underline;">www.alisiltechnology.in</a>, or <a href="contact.html" style="color:var(--amber-500);font-weight:700;">Book a Consultation</a>. Our practice leads respond within 24 business hours.`;
  }

  return `Alisil Technology partners with global enterprises to build human-centric, AI-first technology transformations across cloud, cybersecurity, and autonomous operations. How may we assist your roadmap?`;
}

/* ==========================================================================
   11B. WhatsApp Floating Chat Button (Dynamic from data.js)
   ========================================================================== */
function initWhatsAppFloatingButton() {
  const getWhatsAppDetails = () => {
    const company = window.ALISIL_DATA?.company || {};
    const rawNumber = (company.whatsappRaw || company.whatsapp || '919874199630').replace(/[^0-9]/g, '');
    const greeting = company.whatsappGreeting || 'Hello Alisil Technology, I am interested in your enterprise AI and technology services. I would like to learn more.';
    return {
      rawNumber,
      greeting,
      url: `https://api.whatsapp.com/send?phone=${rawNumber}&text=${encodeURIComponent(greeting)}`
    };
  };

  const initial = getWhatsAppDetails();

  let btn = document.getElementById('whatsapp-floating-btn');
  if (!btn) {
    btn = document.createElement('a');
    btn.id = 'whatsapp-floating-btn';
    btn.className = 'whatsapp-floating-btn';
    btn.target = '_blank';
    btn.rel = 'noopener noreferrer';
    btn.setAttribute('aria-label', 'Chat with Alisil Technology on WhatsApp');
    btn.innerHTML = `
      <div class="whatsapp-icon-wrap">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        <span class="whatsapp-online-dot"></span>
      </div>
      <span class="whatsapp-btn-text">Chat with us</span>
    `;
    document.body.appendChild(btn);
  }

  btn.href = initial.url;
  btn.addEventListener('click', () => {
    btn.href = getWhatsAppDetails().url;
  });
}

/* ==========================================================================
   12. Cookie Consent Banner
   ========================================================================== */
function initCookieConsent() {
  const bar = document.querySelector('.cookie-consent-bar');
  if (!bar) return;

  const consent = localStorage.getItem('alisil-cookie-consent');
  if (consent) {
    bar.style.display = 'none';
    return;
  }

  const acceptBtn = bar.querySelector('.cookie-accept-btn');
  const declineBtn = bar.querySelector('.cookie-decline-btn');

  if (acceptBtn) {
    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('alisil-cookie-consent', 'accepted');
      bar.style.display = 'none';
      showToast('Cookie preferences saved. Thank you!', 'success');
    });
  }

  if (declineBtn) {
    declineBtn.addEventListener('click', () => {
      localStorage.setItem('alisil-cookie-consent', 'necessary_only');
      bar.style.display = 'none';
      showToast('Strictly necessary cookies applied.', 'info');
    });
  }
}

/* ==========================================================================
   13. Form Validation & WhatsApp Dispatch System
   ========================================================================== */
function initForms() {
  // Dedicated Handler for Contact Page Consultation Form -> Direct WhatsApp Dispatch
  const consultationForm = document.getElementById('consultation-form');
  if (consultationForm) {
    consultationForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const hp = consultationForm.querySelector('.honeypot-field');
      if (hp && hp.value) return;

      if (!consultationForm.checkValidity()) {
        consultationForm.reportValidity();
        return;
      }

      const firstName = consultationForm.querySelector('#c-first-name')?.value.trim() || '';
      const lastName = consultationForm.querySelector('#c-last-name')?.value.trim() || '';
      const email = consultationForm.querySelector('#c-email')?.value.trim() || '';
      const phone = consultationForm.querySelector('#c-phone')?.value.trim() || 'Not provided';
      const company = consultationForm.querySelector('#c-company')?.value.trim() || 'Not provided';
      const sizeSelect = consultationForm.querySelector('#c-size');
      const size = sizeSelect ? sizeSelect.options[sizeSelect.selectedIndex]?.text : 'Not specified';
      const serviceSelect = consultationForm.querySelector('#c-service');
      const service = serviceSelect ? serviceSelect.options[serviceSelect.selectedIndex]?.text : 'General Inquiry';
      const message = consultationForm.querySelector('#c-message')?.value.trim() || 'No additional notes provided.';

      const now = new Date();
      const formattedDate = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) + ', ' +
        now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

      // Formatted WhatsApp message with executive Markdown typography
      const whatsappText =
        `*ALISIL TECHNOLOGY — ENTERPRISE CONSULTATION REQUEST*
────────────────────────
👤 *Client Name:* ${firstName} ${lastName}
🏢 *Company / Org:* ${company}
👥 *Enterprise Size:* ${size}
📧 *Work Email:* ${email}
📱 *Phone:* ${phone}
🎯 *Area of Interest:* ${service}

📝 *Transformation Goals & Context:*
${message}
────────────────────────
📅 *Submitted:* ${formattedDate}
🌐 *Source:* Alisil Technology Portal (www.alisiltechnology.in)`;

      const whatsappNumber = consultationForm.getAttribute('data-whatsapp') || window.ALISIL_DATA?.company?.whatsappRaw || '919874199630';
      const cleanNumber = whatsappNumber.replace(/[^0-9]/g, '');
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanNumber}&text=${encodeURIComponent(whatsappText)}`;

      const submitBtn = consultationForm.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Send Consultation Request via WhatsApp';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Connecting to WhatsApp...</span>`;
      }

      // Immediately launch WhatsApp window on user activation to avoid popup blocking
      window.open(whatsappUrl, '_blank');

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
        consultationForm.reset();

        showToast(
          `Consultation formatted for WhatsApp! <a href="${whatsappUrl}" target="_blank" rel="noopener" style="color:var(--amber-400);font-weight:700;text-decoration:underline;margin-left:4px;">Click here if WhatsApp didn't open</a>`,
          'success'
        );
      }, 600);
    });
  }

  // Generic Handler for other validation forms (Newsletter, Application modal)
  const forms = document.querySelectorAll('form[data-validate="true"]');
  forms.forEach(form => {
    if (form.id === 'consultation-form') return; // Handled specifically above

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const hp = form.querySelector('.honeypot-field');
      if (hp && hp.value) return;

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Processing...</span>`;
      }

      setTimeout(() => {
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }

        const parentDialog = form.closest('dialog');
        if (parentDialog) parentDialog.close();

        showToast('Request submitted successfully! Our enterprise team will respond within 24 hours.', 'success');
      }, 600);
    });
  });
}

function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✓' : 'ℹ'}</span>
    <div>${message}</div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(12px)';
    setTimeout(() => toast.remove(), 250);
  }, 4000);
}

window.showToast = showToast;

/* ==========================================================================
   14. Dynamic Office Locations & Company Address from data.js
   ========================================================================== */
function initOfficeLocations() {
  const company = window.ALISIL_DATA?.company || {};
  const offices = window.ALISIL_DATA?.offices || [];

  // Update all elements with [data-company-address]
  document.querySelectorAll('[data-company-address]').forEach(el => {
    if (company.officeAddress) {
      el.innerHTML = `<strong>Office Address:</strong> ${company.officeAddress}`;
    }
  });

  // Update all elements with [data-company-phone]
  document.querySelectorAll('[data-company-phone]').forEach(el => {
    if (company.phone) {
      el.textContent = company.phone;
    }
  });

  // Populate or synchronize contact page offices list if container exists
  const contactOffices = document.getElementById('contact-offices-list');
  if (contactOffices && offices.length > 0) {
    contactOffices.innerHTML = offices.map(off => {
      const isKolkata = off.city === 'Kolkata';
      const cleanPhone = (off.phone || '').replace(/[^0-9+]/g, '');
      const rawDigits = (off.phoneRaw || off.phone || '').replace(/[^0-9]/g, '');
      return `
        <div class="office-location-card" style="background: var(--surface-card); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 1.5rem;">
          <span class="badge ${isKolkata ? 'badge-amber' : 'badge-primary'} spark-badge" style="margin-bottom: 0.5rem;">
            <span class="spark-star" style="font-size: 0.8em;">✦</span> ${off.badge || off.role}
          </span>
          <h3 style="font-size: 1.15rem; margin-bottom: 0.35rem;">${off.city} Office</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 0.85rem;">
            ${off.address}
          </p>
          <div style="font-size: 0.82rem; display: flex; flex-direction: column; gap: 0.3rem; color: var(--text);">
            <div><strong>Role:</strong> ${off.role}</div>
            <div><strong>Phone / Mobile:</strong> <a href="tel:${cleanPhone}" style="color: var(--sky-500); font-weight: 600;">${off.phone}</a></div>
            ${isKolkata ? `<div><strong>WhatsApp Direct:</strong> <a href="https://api.whatsapp.com/send?phone=${rawDigits}" target="_blank" rel="noopener" style="color: #25D366; font-weight: 700;">${off.phone} (Click to Chat 💬)</a></div>` : ''}
            <div><strong>Email:</strong> <a href="mailto:${off.email || company.email}" style="color: var(--amber-500); font-weight: 600;">${off.email || company.email}</a></div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Populate or synchronize about page offices list if container exists
  const aboutOffices = document.getElementById('about-offices-list');
  if (aboutOffices && offices.length > 0) {
    aboutOffices.innerHTML = offices.map(off => {
      const isKolkata = off.city === 'Kolkata';
      const cleanPhone = (off.phone || '').replace(/[^0-9+]/g, '');
      return `
        <div class="service-card reveal-on-scroll">
          <span class="badge ${isKolkata ? 'badge-amber' : 'badge-primary'} spark-badge" style="margin-bottom: 0.5rem;">
            <span class="spark-star" style="font-size: 0.8em;">✦</span> ${off.badge || off.role}
          </span>
          <h3 style="font-size: 1.15rem; margin-bottom: 0.35rem;">${off.city}, ${off.country || 'India'}</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.85rem;">
            ${off.address}. ${off.role}
          </p>
          <div style="font-size: 0.82rem; font-weight: 600; color: var(--sky-500);">
            <a href="mailto:${off.email || company.email}" style="color: var(--amber-600);">${off.email || company.email}</a> · 
            <a href="tel:${cleanPhone}" style="color: var(--sky-500);">${off.phone}</a>
          </div>
        </div>
      `;
    }).join('');
  }
}

/* ==========================================================================
   15. Dynamic Schema.org JSON-LD Loader from data.js
   ========================================================================== */
function initDynamicSchema() {
  if (!window.ALISIL_DATA?.getSchema) return;

  const path = (window.location.pathname || '').toLowerCase();
  let schemaType = 'website';
  if (path.includes('contact')) {
    schemaType = 'contact';
  } else if (path.includes('about')) {
    schemaType = 'about';
  }

  const schemaData = window.ALISIL_DATA.getSchema(schemaType);
  if (!schemaData) return;

  // Find existing script or create a new one
  let script = document.getElementById('schema-jsonld') || document.querySelector('script[type="application/ld+json"]');
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.id = 'schema-jsonld';
  script.textContent = JSON.stringify(schemaData, null, 2);
}
