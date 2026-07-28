(() => {
  // Give every inner page the same shell and visual language as the redesigned homepage.
  const isHomePage = document.body.classList.contains("home-page");
  if (!isHomePage) {
    document.body.classList.add("inner-page", "is-loading");
    document.body.classList.add(`page-${(window.location.pathname.split("/").pop() || "inner").replace(/\.html$/i, "")}`);
    if (!document.querySelector('link[href*="family=Manrope"]')) {
      document.head.insertAdjacentHTML("beforeend", '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet"><link rel="preload" href="assets/images/logo/temp-carmel-school-logo.png" as="image" type="image/png">');
    }
    document.querySelector(".topbar")?.remove();

    const oldHeader = document.querySelector("header[data-header]");
    if (oldHeader) {
      oldHeader.outerHTML = `
        <div class="splash" data-splash role="status" aria-label="Loading K.E. Carmel School website">
          <div class="splash__mark"><img src="assets/images/logo/temp-carmel-school-logo.png" alt="K.E. Carmel School logo"></div>
          <p class="splash__name">K.E. Carmel School</p><span class="splash__place">Siliguri</span><span class="splash__loader" aria-hidden="true"></span>
        </div>
        <header class="home-header inner-header" data-header>
          <div class="home-container social-bar"><div class="elements-social social-icon"><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="X">X</a><a href="#" aria-label="YouTube">▶</a><a href="#" aria-label="LinkedIn">in</a><a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg></a><a href="#" aria-label="WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.4-4A8 8 0 1 1 20 11.6Z" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M9 8.2c.2-.4.5-.4.8-.4h.4c.2 0 .4.1.5.5l.8 1.8c.1.3 0 .5-.2.7l-.6.7c-.2.2-.1.4 0 .6.6 1 1.4 1.8 2.5 2.3.2.1.4.1.6-.1l.8-1c.2-.2.4-.3.7-.2l1.8.9c.3.2.4.3.4.5 0 .5-.2 1.2-.7 1.6-.5.5-1.3.8-2.1.6-1.3-.3-3.1-1.1-4.7-2.6-1.3-1.3-2.2-2.8-2.5-4.1-.2-.8.1-1.4.5-1.8Z" fill="currentColor"/></svg></a><a href="tel:+916295975836" aria-label="Call">☎</a></div><a class="overlay-admission" href="admissions.html">Get Admission</a></div>
          <div class="home-container home-header__inner">
            <nav class="home-nav home-nav--left"><a class="site-nav__link" href="index.html">Home</a><a class="site-nav__link" href="about.html">About</a><a class="site-nav__link" href="academics.html">Academics</a><a class="site-nav__link" href="management.html">Management</a></nav>
            <a class="home-brand" href="index.html" style="text-decoration: none;" aria-label="K.E. Carmel School Siliguri home"><img src="assets/images/logo/temp-carmel-school-logo.png" alt=""><span><strong>K. E. CARMEL</strong><small>SCHOOL, SILIGURI</small><em>To Plant And Nurture</em></span></a>
            <button class="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="site-nav"><span></span><span></span><span></span></button>
            <nav class="home-nav home-nav--right"><a class="site-nav__link" href="facilities.html">Facilities</a><a class="site-nav__link" href="admissions.html">Admissions</a><a class="site-nav__link" href="events.html">Events</a><a class="site-nav__link" href="gallery.html">Gallery</a><a class="site-nav__link" href="contact.html">Contact</a></nav>
            <nav id="site-nav" class="mobile-home-nav site-nav" aria-label="Mobile navigation"><a class="site-nav__link" href="index.html">Home</a><a class="site-nav__link" href="about.html">About</a><a class="site-nav__link" href="academics.html">Academics</a><a class="site-nav__link" href="management.html">Management</a><a class="site-nav__link" href="facilities.html">Facilities</a><a class="site-nav__link" href="admissions.html">Admissions</a><a class="site-nav__link" href="events.html">Events</a><a class="site-nav__link" href="gallery.html">Gallery</a><a class="site-nav__link" href="contact.html">Contact</a></nav>
          </div>
        </header>`;
    }

    const oldFooter = document.querySelector("footer");
    if (oldFooter) {
      oldFooter.outerHTML = `
        <footer class="home-footer"><div class="home-container footer-main"><div class="footer-about"><a class="home-brand home-brand--footer" href="index.html" style="text-decoration: none;"><img src="assets/images/logo/temp-carmel-school-logo.png" alt=""><span><strong>K. E. CARMEL</strong><small>SCHOOL, SILIGURI</small><em>To Plant And Nurture</em></span></a><p class="text-light">A co-educational English-medium institution committed to academic excellence, discipline, strong values and holistic development.</p><div class="elements-social footer-social"><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="X">X</a><a href="#" aria-label="Instagram">◎</a><a href="#" aria-label="LinkedIn">in</a></div></div><div><h3>Quick Links</h3><a href="index.html">Home</a><a href="about.html">About</a><a href="academics.html">Academics</a><a href="management.html">Management</a></div><div><h3>Quick Links</h3><a href="facilities.html">Facilities</a><a href="admissions.html">Admissions</a><a href="events.html">Events</a><a href="gallery.html">Gallery</a><a href="contact.html">Contact</a></div></div><div class="home-container footer-bottom"><a href="#main">Go Top ↑</a><p style="color:#ffffff9a">© <span data-year></span> K.E. Carmel School, Siliguri. All Rights Reserved.</p></div><div class="home-container footer-credit-line">Designed, Developed &amp; Maintained by&nbsp; | &nbsp;<a href="https://christinfotech.org/" target="_blank" rel="noopener"><strong>CHRIST Infotech</strong></a> (Software Research &amp; Development Center), <a href="https://lavasa.christuniversity.in/" target="_blank" rel="noopener"><strong>CHRIST University, Pune - Lavasa</strong></a>, India</div></footer>`;
    }

    const topSocial = document.querySelector(".social-icon");
    const footerSocial = document.querySelector(".footer-social");
    if (topSocial && footerSocial) footerSocial.innerHTML = topSocial.innerHTML;
    document.body.classList.remove("shell-pending");

    document.querySelectorAll("main .section__head, main .card, main .gallery__item, main .person-card, main .event-card, main .achievement-card").forEach((item) => item.classList.add("reveal"));
  }

  const header = document.querySelector("[data-header]");
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");
  const navLinks = Array.from(document.querySelectorAll(".site-nav__link"));
  const mobileBreakpoint = window.matchMedia("(max-width: 720px)");

  const setNavOpen = (open) => {
    if (!header || !navToggle) return;
    header.dataset.open = open ? "true" : "false";
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  };

  const closeNav = () => setNavOpen(false);

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => setNavOpen(header?.dataset.open !== "true"));

    document.addEventListener("click", (e) => {
      if (!header?.dataset.open || header.dataset.open !== "true") return;
      const target = e.target;
      if (!(target instanceof Node)) return;
      if (header.contains(target)) return;
      closeNav();
    });

    nav.addEventListener("click", (e) => {
      const target = e.target;
      if (!(target instanceof HTMLElement)) return;
      if (target.closest("a")) closeNav();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeNav();
    });

    mobileBreakpoint.addEventListener("change", (event) => {
      if (!event.matches) closeNav();
    });
  }

  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  try {
    const current = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
    navLinks.forEach((a) => {
      const href = (a.getAttribute("href") || "").toLowerCase();
      if (!href || href.startsWith("#")) return;
      const isActive = href === current || (current === "" && href === "index.html");
      if (isActive) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
  } catch {
    // ignore
  }

  const form = document.querySelector("[data-enquiry-form]");
  const note = document.querySelector("[data-form-note]");

  if (form instanceof HTMLFormElement) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const phone = String(data.get("phone") || "").trim();
      const email = String(data.get("email") || "").trim();
      const message = String(data.get("message") || "").trim();

      const subject = encodeURIComponent("Website Enquiry - K.E. Carmel School");
      const body = encodeURIComponent(
        `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}\n\n(Submitted via school website enquiry form)`,
      );

      window.location.href = `mailto:kecarmel.ambari@gmail.com?subject=${subject}&body=${body}`;
      if (note) note.textContent = "If your email app did not open, please email us at kecarmel.ambari@gmail.com.";
    });
  }

  // Homepage splash screen. It also appears briefly for internal page navigation.
  const splash = document.querySelector("[data-splash]");
  const hideSplash = () => {
    if (!splash) return;
    splash.classList.add("is-hidden");
    document.body.classList.remove("is-loading");
  };
  if (splash) {
    window.addEventListener("load", () => window.setTimeout(hideSplash, 650), { once: true });
    window.setTimeout(hideSplash, 2200);
    document.querySelectorAll('a[href$=".html"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        const href = link.getAttribute("href");
        if (!href || link.target === "_blank") return;
        event.preventDefault();
        splash.classList.remove("is-hidden");
        document.body.classList.add("is-loading");
        window.setTimeout(() => { window.location.href = href; }, 330);
      });
    });
  }

  // Homepage hero carousel.
  const carousel = document.querySelector("[data-carousel]");
  if (carousel) {
    const slides = Array.from(carousel.querySelectorAll(".home-slide"));
    const dots = Array.from(carousel.querySelectorAll("[data-carousel-dot]"));
    let currentSlide = 0;
    let autoplay;
    const showSlide = (index) => {
      currentSlide = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => slide.classList.toggle("is-active", i === currentSlide));
      dots.forEach((dot, i) => dot.classList.toggle("is-active", i === currentSlide));
    };
    const startAutoplay = () => {
      window.clearInterval(autoplay);
      autoplay = window.setInterval(() => showSlide(currentSlide + 1), 6000);
    };
    carousel.querySelector("[data-carousel-prev]")?.addEventListener("click", () => { showSlide(currentSlide - 1); startAutoplay(); });
    carousel.querySelector("[data-carousel-next]")?.addEventListener("click", () => { showSlide(currentSlide + 1); startAutoplay(); });
    dots.forEach((dot, index) => dot.addEventListener("click", () => { showSlide(index); startAutoplay(); }));
    carousel.addEventListener("mouseenter", () => window.clearInterval(autoplay));
    carousel.addEventListener("mouseleave", startAutoplay);
    startAutoplay();
  }

  // Gentle reveal transitions as sections enter the viewport.
  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  // The homepage navigation starts over the hero and becomes compact after scrolling.
  if (header && (document.body.classList.contains("home-page") || document.body.classList.contains("inner-page"))) {
    const updateHeader = () => header.classList.toggle("is-sticky", window.scrollY > 120);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
  }

  // Reusable horizontal sliders used by notices, facilities and campus stories.
  const initTrackSlider = (rootSelector, trackSelector, prevSelector, nextSelector) => {
    const root = document.querySelector(rootSelector);
    const track = root?.querySelector(trackSelector);
    if (!root || !track) return;
    const items = Array.from(track.children);
    let position = 0;
    const visibleItems = () => {
      if (window.innerWidth <= 700) return 1;
      if (root.matches("[data-activity-slider]")) return 6;
      if (root.matches("[data-gallery-slider]")) return 5;
      if (root.matches("[data-story-slider]")) return Math.max(1, Math.floor(window.innerWidth / 332));
      if (root.matches("[data-card-slider]")) return window.innerWidth <= 1000 ? 2 : 3;
      return 2;
    };
    const render = () => {
      const first = items[0];
      if (!first) return;
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      const max = Math.max(0, items.length - visibleItems());
      position = Math.min(position, max);
      track.style.transform = `translateX(-${position * (first.getBoundingClientRect().width + gap)}px)`;
    };
    root.querySelector(prevSelector)?.addEventListener("click", () => {
      const max = Math.max(0, items.length - visibleItems());
      position = position <= 0 ? max : position - 1;
      render();
    });
    root.querySelector(nextSelector)?.addEventListener("click", () => {
      const max = Math.max(0, items.length - visibleItems());
      position = position >= max ? 0 : position + 1;
      render();
    });
    window.addEventListener("resize", render);
    render();
  };
  initTrackSlider("[data-strip-slider]", "[data-strip-track]", "[data-strip-prev]", "[data-strip-next]");
  initTrackSlider("[data-card-slider]", "[data-card-track]", "[data-card-prev]", "[data-card-next]");
  initTrackSlider("[data-story-slider]", "[data-story-track]", "[data-story-prev]", "[data-story-next]");
  initTrackSlider("[data-activity-slider]", "[data-activity-track]", "[data-activity-prev]", "[data-activity-next]");
  initTrackSlider("[data-gallery-slider]", "[data-gallery-track]", "[data-gallery-prev]", "[data-gallery-next]");

  document.querySelectorAll(".faq-list details").forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;
      item.parentElement?.querySelectorAll("details").forEach((other) => {
        if (other !== item) other.removeAttribute("open");
      });
    });
  });

  document.querySelectorAll("[data-expand-list]").forEach((button) => {
    const card = button.closest(".facility");
    const list = card?.querySelector("[data-expandable-list]");
    if (!list) return;
    button.addEventListener("click", () => {
      const expanded = list.classList.toggle("is-expanded");
      button.setAttribute("aria-expanded", String(expanded));
      button.textContent = expanded ? "Show Less" : "Read More";
    });
  });

  // PowerPoint-style Float In for every homepage section heading and Notice Board carousel.
  const floatTargets = document.querySelectorAll([
    ".home-page .section-heading",
    ".home-page .notice-strip__title",
    ".home-page .notice-viewport",
    ".home-page .welcome-copy h2",
    ".home-page .stats-heading",
    ".home-page .leadership-copy h2",
  ].join(","));
  floatTargets.forEach((target) => target.classList.add("float-in-target"));
  if ("IntersectionObserver" in window) {
    const floatObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-floated");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.18 });
    floatTargets.forEach((target) => floatObserver.observe(target));
  } else {
    floatTargets.forEach((target) => target.classList.add("is-floated"));
  }
})();
