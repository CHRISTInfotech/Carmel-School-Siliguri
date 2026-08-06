(() => {
  // Give every inner page the same shell and visual language as the redesigned homepage.
  const isHomePage = document.body.classList.contains("home-page");
  const currentPageName = (window.location.pathname.split("/").pop() || "index.html").replace(/\.html$/i, "").toLowerCase();
  const innerHeaderLogo = "assets/images/logo/logo4-removebg-preview.png";
  if (!isHomePage) {
    document.body.classList.add("inner-page", "is-loading");
    document.body.classList.add(`page-${(window.location.pathname.split("/").pop() || "inner").replace(/\.html$/i, "")}`);
    if (!document.querySelector('link[href*="family=Manrope"]')) {
      document.head.insertAdjacentHTML("beforeend", '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet"><link rel="preload" href="assets/images/logo/logo4-removebg-preview.png" as="image" type="image/png">');
    }
    document.querySelector(".topbar")?.remove();

    const oldHeader = document.querySelector("header[data-header]");
    if (oldHeader) {
      oldHeader.outerHTML = `
        <div class="splash" data-splash role="status" aria-label="Loading K.E. Carmel School website">
          <div class="splash__mark"><img src="assets/images/logo/logo4-removebg-preview.png" alt="K.E. Carmel School logo"></div>
          <p class="splash__name">K.E. Carmel School</p><span class="splash__place">Siliguri</span><span class="splash__loader" aria-hidden="true"></span>
        </div>
        <header class="home-header inner-header" data-header>
          <div class="home-container social-bar"><div class="elements-social social-icon"><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="X">X</a><a href="#" aria-label="YouTube">▶</a><a href="#" aria-label="LinkedIn">in</a><a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg></a><a href="#" aria-label="WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.4-4A8 8 0 1 1 20 11.6Z" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M9 8.2c.2-.4.5-.4.8-.4h.4c.2 0 .4.1.5.5l.8 1.8c.1.3 0 .5-.2.7l-.6.7c-.2.2-.1.4 0 .6.6 1 1.4 1.8 2.5 2.3.2.1.4.1.6-.1l.8-1c.2-.2.4-.3.7-.2l1.8.9c.3.2.4.3.4.5 0 .5-.2 1.2-.7 1.6-.5.5-1.3.8-2.1.6-1.3-.3-3.1-1.1-4.7-2.6-1.3-1.3-2.2-2.8-2.5-4.1-.2-.8.1-1.4.5-1.8Z" fill="currentColor"/></svg></a><a href="tel:+916295975836" aria-label="Call">☎</a></div><a class="overlay-admission" href="admissions.html">Get Admission</a></div>
          <div class="home-container home-header__inner">
            <nav class="home-nav home-nav--left"><a class="site-nav__link" href="index.html">Home</a><a class="site-nav__link" href="about.html">About</a><a class="site-nav__link" href="academics.html">Academics</a><a class="site-nav__link" href="management.html">Management</a></nav>
            <a class="home-brand" href="index.html" style="text-decoration: none;" aria-label="K.E. Carmel School Siliguri home"><img src="${innerHeaderLogo}" alt="K.E. Carmel School logo"><span><strong>K. E. CARMEL</strong><small>SCHOOL, SILIGURI</small><em>To Plant And Nurture</em></span></a>
            <button class="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="site-nav"><span></span><span></span><span></span></button>
            <nav class="home-nav home-nav--right"><a class="site-nav__link" href="facilities.html">Facilities</a><a class="site-nav__link" href="admissions.html">Admissions</a><a class="site-nav__link" href="events.html">Events</a><a class="site-nav__link" href="gallery.html">Gallery</a><a class="site-nav__link" href="contact.html">Contact</a></nav>
            <nav id="site-nav" class="mobile-home-nav site-nav" aria-label="Mobile navigation"><a class="site-nav__link" href="index.html">Home</a><a class="site-nav__link" href="about.html">About</a><a class="site-nav__link" href="academics.html">Academics</a><a class="site-nav__link" href="management.html">Management</a><a class="site-nav__link" href="facilities.html">Facilities</a><a class="site-nav__link" href="admissions.html">Admissions</a><a class="site-nav__link" href="events.html">Events</a><a class="site-nav__link" href="gallery.html">Gallery</a><a class="site-nav__link" href="contact.html">Contact</a></nav>
          </div>
        </header>`;
    }

    const oldFooter = document.querySelector("footer");
    if (oldFooter) {
      oldFooter.outerHTML = `
        <footer class="home-footer"><div class="home-container footer-main"><div class="footer-about"><a class="home-brand home-brand--footer" href="index.html" style="text-decoration: none;"><img src="assets/images/logo/logo1-removebg-preview.png" alt=""><span><strong>K. E. CARMEL</strong><small>SCHOOL, SILIGURI</small><em>To Plant And Nurture</em></span></a><p class="text-light">A co-educational English-medium institution committed to academic excellence, discipline, strong values and holistic development.</p><div class="elements-social footer-social"><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="X">X</a><a href="#" aria-label="Instagram">◎</a><a href="#" aria-label="LinkedIn">in</a></div></div><div><h3>Quick Links</h3><a href="index.html">Home</a><a href="about.html">About</a><a href="academics.html">Academics</a><a href="management.html">Management</a></div><div><h3>Quick Links</h3><a href="facilities.html">Facilities</a><a href="admissions.html">Admissions</a><a href="events.html">Events</a><a href="gallery.html">Gallery</a><a href="contact.html">Contact</a></div></div><div class="home-container footer-bottom"><a href="#main">Go Top ↑</a><p style="color:#ffffff9a">© <span data-year></span> K.E. Carmel School, Siliguri. All Rights Reserved.</p></div><div class="home-container footer-credit-line">Designed, Developed &amp; Maintained by&nbsp; | &nbsp;<a href="https://christinfotech.org/" target="_blank" rel="noopener"><strong>CHRIST Infotech</strong></a> (Software Research &amp; Development Center), <a href="https://lavasa.christuniversity.in/" target="_blank" rel="noopener"><strong>CHRIST University, Pune - Lavasa</strong></a>, India</div></footer>`;
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
    window.addEventListener("load", () => window.setTimeout(hideSplash, 1000), { once: true });
    window.setTimeout(hideSplash, 12000);
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
      if (root.matches("[data-activity-slider]")) return window.innerWidth <= 1000 ? 2 : 4;
      if (root.matches("[data-gallery-slider]")) return 5;
      if (root.matches("[data-story-slider]")) return Math.max(1, Math.floor(window.innerWidth / 332));
      if (root.matches("[data-card-slider]")) return window.innerWidth <= 1000 ? 2 : 4;
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

  document.querySelectorAll("button[data-expand-content]").forEach((button) => {
    button.addEventListener("click", () => {
      const group = button.dataset.expandGroup;
      const target = button.dataset.expandTarget;
      const contents = target
        ? [document.getElementById(target)].filter(Boolean)
        : group
        ? Array.from(document.querySelectorAll(`[data-expandable-content][data-expand-group="${group}"]`))
        : [button.closest(".card")?.querySelector("[data-expandable-content]")].filter(Boolean);
      const buttons = target
        ? [button]
        : group
        ? Array.from(document.querySelectorAll(`button[data-expand-content][data-expand-group="${group}"]`))
        : [button];
      const expanded = !contents.every((content) => content.classList.contains("is-expanded"));
      contents.forEach((content) => content.classList.toggle("is-expanded", expanded));
      buttons.forEach((control) => {
        control.setAttribute("aria-expanded", String(expanded));
        control.textContent = expanded ? "Show Less" : "Read More";
      });
      const revealTargets = button.dataset.revealTargets?.split(/\s+/).filter(Boolean) || [];
      revealTargets.forEach((id) => {
        const element = document.getElementById(id);
        if (element) element.hidden = !expanded;
      });
      if (expanded && button.hasAttribute("data-hide-on-expand")) {
        button.hidden = true;
      }
      if (!expanded && revealTargets.length) {
        revealTargets.forEach((id) => {
          const element = document.getElementById(id);
          element?.classList.remove("is-expanded");
          if (element?.matches("button[data-expand-content]")) {
            element.setAttribute("aria-expanded", "false");
            element.textContent = "Read More";
          }
        });
      }
      if (!expanded && button.dataset.resetContent) {
        button.dataset.resetContent.split(/\s+/).filter(Boolean).forEach((id) => {
          document.getElementById(id)?.classList.remove("is-expanded");
        });
        button.dataset.resetHide?.split(/\s+/).filter(Boolean).forEach((id) => {
          const element = document.getElementById(id);
          if (element) element.hidden = true;
        });
        button.dataset.resetShow?.split(/\s+/).filter(Boolean).forEach((id) => {
          const element = document.getElementById(id);
          if (!element) return;
          element.hidden = false;
          element.setAttribute("aria-expanded", "false");
          element.textContent = "Read More";
        });
      }
    });
  });

  // Facilities rules open in a modal so every summary card remains equal in size.
  const rulesTriggers = document.querySelectorAll("[data-rules-modal]");
  if (rulesTriggers.length) {
    document.body.insertAdjacentHTML("beforeend", `
      <div class="rules-modal" data-rules-dialog hidden role="dialog" aria-modal="true" aria-labelledby="rules-modal-title">
        <div class="rules-modal__backdrop" data-rules-close></div>
        <div class="rules-modal__dialog">
          <div class="rules-modal__header">
            <div><p data-rules-label></p><h2 id="rules-modal-title">Rules</h2></div>
            <button type="button" data-rules-close aria-label="Close rules modal">&times;</button>
          </div>
          <div class="rules-modal__content">
            <img class="rules-modal__image" data-rules-image src="" alt="">
            <div data-rules-content></div>
          </div>
        </div>
      </div>`);
    const rulesModal = document.querySelector("[data-rules-dialog]");
    const rulesContent = rulesModal.querySelector("[data-rules-content]");
    const rulesLabel = rulesModal.querySelector("[data-rules-label]");
    const rulesImage = rulesModal.querySelector("[data-rules-image]");
    let rulesReturnFocus = null;
    const closeRulesModal = () => {
      rulesModal.hidden = true;
      document.body.classList.remove("rules-modal-open");
      rulesReturnFocus?.focus();
    };
    rulesTriggers.forEach((trigger) => trigger.addEventListener("click", () => {
      const source = document.getElementById(trigger.dataset.rulesSource);
      if (!source) return;
      rulesContent.innerHTML = source.innerHTML;
      rulesLabel.textContent = trigger.dataset.rulesLabel || "Facility";
      const cardImage = trigger.closest(".facility")?.querySelector(".facility-static-media img");
      rulesImage.src = cardImage?.getAttribute("src") || "";
      rulesImage.alt = cardImage?.getAttribute("alt") || `${rulesLabel.textContent} facility`;
      rulesImage.hidden = !rulesImage.src;
      rulesReturnFocus = trigger;
      rulesModal.hidden = false;
      document.body.classList.add("rules-modal-open");
      rulesModal.querySelector(".rules-modal__header button")?.focus();
    }));
    rulesModal.querySelectorAll("[data-rules-close]").forEach((control) => control.addEventListener("click", closeRulesModal));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !rulesModal.hidden) closeRulesModal();
    });
  }

  // Shared medium-size image carousel modal for Facilities and Events cards.
  const mediaGallerySets = {
    "classrooms": [
      "assets/images/KE CARMEL (1)/Classroom/IMG-20260801-WA0023.jpg.jpeg",
      "assets/images/KE CARMEL (1)/Classroom/IMG-20260801-WA0024.jpg.jpeg",
      "assets/images/KE CARMEL (1)/Classroom/IMG-20260801-WA0025.jpg.jpeg",
      "assets/images/KE CARMEL (1)/Classroom/IMG-20260801-WA0026.jpg.jpeg",
      "assets/images/KE CARMEL (1)/Classroom/IMG-20260801-WA0028.jpeg",
      "assets/images/KE CARMEL (1)/Classroom/A3IMG-20260801-WA0016.jpeg"
    ],
    "laboratories": [
      "assets/images/KECS/Biology Lab/IMG_20260728_111059.jpg.jpeg",
      "assets/images/KECS/Biology Lab/IMG_20260728_111214.jpg.jpeg",
      "assets/images/KECS/Chemistry Lab/IMG_20260728_111343.jpg.jpeg",
      "assets/images/KECS/Chemistry Lab/IMG_20260728_111417.jpg.jpeg",
      "assets/images/KECS/Computer lab/IMG_20260728_110708.jpg.jpeg",
      "assets/images/KECS/Computer lab/IMG_20260728_110827.jpg.jpeg",
      "assets/images/KECS/Physics lab/IMG_20260728_110208.jpg.jpeg",
      "assets/images/KECS/Physics lab/IMG_20260728_110324.jpg.jpeg"
    ],
    "gallery-science": [
      "assets/images/KECS/Biology Lab/IMG_20260728_111059.jpg.jpeg",
      "assets/images/KECS/Biology Lab/IMG_20260728_111214.jpg.jpeg",
      "assets/images/KECS/Chemistry Lab/IMG_20260728_111343.jpg.jpeg",
      "assets/images/KECS/Chemistry Lab/IMG_20260728_111417.jpg.jpeg",
      "assets/images/KECS/Physics lab/IMG_20260728_110208.jpg.jpeg",
      "assets/images/KECS/Physics lab/IMG_20260728_110324.jpg.jpeg"
    ],
    "gallery-computer": [
      "assets/images/KECS/Computer lab/IMG_20260728_110708.jpg.jpeg",
      "assets/images/KECS/Computer lab/IMG_20260728_110827.jpg.jpeg"
    ],
    "library": [
      "assets/images/KECS/Library/IMG_20260728_111849.jpg.jpeg",
      "assets/images/KECS/Library/IMG_20260728_111925.jpg.jpeg",
      "assets/images/KECS/Library/IMG_20260728_112002.jpg.jpeg",
      "assets/images/KECS/Library/IMG_20260728_112143.jpg.jpeg"
    ],
    "science-facilities": [
      "assets/images/KECS/Chemistry Lab/IMG_20260728_111343.jpg.jpeg",
      "assets/images/KECS/Chemistry Lab/IMG_20260728_111417.jpg.jpeg"
    ],
    "sports-playground": [
      "assets/images/KE CARMEL (1)/Sports day/IMG-20260715-WA0028.jpg",
      "assets/images/KE CARMEL (1)/Sports day/IMG-20260715-WA0029.jpg",
      "assets/images/KE CARMEL (1)/Sports day/IMG-20260715-WA0035.jpg",
      "assets/images/KE CARMEL (1)/Sports day/IMG-20260715-WA0037.jpg",
      "assets/images/KE CARMEL (1)/Sports day/IMG-20260715-WA0041.jpg",
      "assets/images/KE CARMEL (1)/Sports day/IMG-20260715-WA0042.jpg",
      "assets/images/KE CARMEL (1)/Sports day/IMG-20260715-WA0044.jpg",
      "assets/images/KE CARMEL (1)/Sports day/IMG-20260715-WA0045.jpg",
      "assets/images/KE CARMEL (1)/Games/IMG-20220805-WA0025.jpg",
      "assets/images/KE CARMEL (1)/Games/WhatsApp Image 2026-07-26 at 4.32.16 PM.jpeg"
    ],
    "transport-safety": [
      "assets/images/KE CARMEL (1)/School Bus/20220803_144212.jpg",
      "assets/images/KE CARMEL (1)/School Bus/IMG_20260717_130359.jpg",
      "assets/images/KE CARMEL (1)/School Bus/IMG_7596.jpg"
    ],
    "picnics-study-tours": [
      "assets/images/KE CARMEL (1)/School Bus/20220803_144212.jpg",
      "assets/images/KE CARMEL (1)/School Bus/IMG_20260717_130359.jpg",
      "assets/images/KE CARMEL (1)/School Bus/IMG_7596.jpg"
    ],
    "co-curricular": [
      "assets/images/KE CARMEL (1)/Co curicular activities/IMG-20220821-WA0008.jpg"
    ],
    "gallery-achievements": [
      "assets/images/KE CARMEL (1)/Awards/Bosco Fizza, Don Bosco Oodlabari/WhatsApp Image 2026-07-26 at 6.10.34 PM (1).jpeg",
      "assets/images/KE CARMEL (1)/Awards/Bosco Fizza, Don Bosco Oodlabari/WhatsApp Image 2026-07-26 at 6.10.34 PM.jpeg"
    ],
    "gallery-co-curricular": [
      "assets/images/KE CARMEL (1)/Co curicular activities/IMG-20220821-WA0008.jpg",
      "assets/images/KE CARMEL (1)/Co curicular activities/workshop.jpg"
    ],
    "gallery-environment-day": [
      "assets/images/KE CARMEL (1)/Environment day/WhatsApp Image 2026-07-26 at 4.31.27 PM (1).jpeg",
      "assets/images/KE CARMEL (1)/Environment day/WhatsApp Image 2026-07-26 at 4.31.27 PM.jpeg",
      "assets/images/KE CARMEL (1)/Environment day/WhatsApp Image 2026-07-26 at 4.31.28 PM (1).jpeg",
      "assets/images/KE CARMEL (1)/Environment day/WhatsApp Image 2026-07-26 at 4.31.28 PM.jpeg",
      "assets/images/KE CARMEL (1)/Environment day/WhatsApp Image 2026-07-26 at 4.31.29 PM (1).jpeg",
      "assets/images/KE CARMEL (1)/Environment day/WhatsApp Image 2026-07-26 at 4.31.29 PM.jpeg",
      "assets/images/KE CARMEL (1)/Environment day/WhatsApp Image 2026-07-26 at 4.31.30 PM.jpeg",
      "assets/images/KE CARMEL (1)/Environment day/WhatsApp Image.jpeg"
    ],
    "gallery-independence-day": [
      "assets/images/KE CARMEL (1)/Independence Day/IMG-20220815-WA0096.jpg"
    ],
    "gallery-investiture": [
      "assets/images/KE CARMEL (1)/Investiture ceremony/WhatsApp Image 2026-07-26 at 4.29.24 PM (1).jpeg",
      "assets/images/KE CARMEL (1)/Investiture ceremony/WhatsApp Image 2026-07-26 at 4.29.24 PM (2).jpeg",
      "assets/images/KE CARMEL (1)/Investiture ceremony/WhatsApp Image 2026-07-26 at 4.29.24 PM.jpeg",
      "assets/images/KE CARMEL (1)/Investiture ceremony/WhatsApp Image 2026-07-26 at 4.29.25 PM (1).jpeg",
      "assets/images/KE CARMEL (1)/Investiture ceremony/WhatsApp Image 2026-07-26 at 4.29.25 PM.jpeg",
      "assets/images/KE CARMEL (1)/Investiture ceremony/WhatsApp Image 2026-07-26 at 4.29.26 PM (1).jpeg",
      "assets/images/KE CARMEL (1)/Investiture ceremony/WhatsApp Image 2026-07-26 at 4.29.26 PM.jpeg",
      "assets/images/KE CARMEL (1)/Investiture ceremony/WhatsApp Image 2026-07-26 at 4.29.27 PM (1).jpeg",
      "assets/images/KE CARMEL (1)/Investiture ceremony/WhatsApp Image 2026-07-26 at 4.29.27 PM.jpeg",
      "assets/images/KE CARMEL (1)/Investiture ceremony/WhatsApp Image 2026-07-26 at 4.29.28 PM.jpeg"
    ],
    "gallery-speech-competition": [
      "assets/images/KE CARMEL (1)/Speech Competition/IMG_20260717_133750.jpg",
      "assets/images/KE CARMEL (1)/Speech Competition/WhatsApp Image 2026-07-26 at 3.00.25 PM.jpeg",
      "assets/images/KE CARMEL (1)/Speech Competition/WhatsApp Image 2026-07-26 at 3.00.26 PM (1).jpeg",
      "assets/images/KE CARMEL (1)/Speech Competition/WhatsApp Image 2026-07-26 at 3.00.26 PM (2).jpeg",
      "assets/images/KE CARMEL (1)/Speech Competition/WhatsApp Image 2026-07-26 at 3.00.27 PM.jpeg"
    ],
    "gallery-students": [
      "assets/images/KE CARMEL (1)/only Students/A3IMG-20260801-WA0016.jpeg",
      "assets/images/KE CARMEL (1)/only Students/A4IMG-20260801-WA0017.jpeg",
      "assets/images/KE CARMEL (1)/only Students/classroom.jpeg",
      "assets/images/KE CARMEL (1)/only Students/IMG-20260801-WA0022.jpeg",
      "assets/images/KE CARMEL (1)/only Students/std.jpeg",
      "assets/images/KE CARMEL (1)/only Students/stdlife.jpg",
      "assets/images/KE CARMEL (1)/only Students/studsimg.jpeg",
      "assets/images/KE CARMEL (1)/only Students/WhatsApp Image 2026-07-26 at 3.08.09 PM (1).jpeg",
      "assets/images/KE CARMEL (1)/only Students/WhatsApp Image 2026-07-26 at 3.08.10 PM (2).jpeg",
      "assets/images/KE CARMEL (1)/only Students/WhatsApp Image 2026-07-26 at 3.08.10 PM.jpeg",
      "assets/images/KE CARMEL (1)/only Students/WhatsApp Image 2026-07-26 at 3.08.11 PM.jpeg"
    ],
    "merit-awards": [
      "assets/images/KE CARMEL (1)/Awards/Bosco Fizza, Don Bosco Oodlabari/WhatsApp Image 2026-07-26 at 6.10.34 PM (1).jpeg",
      "assets/images/KE CARMEL (1)/Awards/Bosco Fizza, Don Bosco Oodlabari/WhatsApp Image 2026-07-26 at 6.10.34 PM.jpeg",
      "assets/images/KE CARMEL (1)/Awards/Telegraph Awards/award1.jpeg",
      "assets/images/KE CARMEL (1)/Awards/Telegraph Awards/award2.jpeg",
      "assets/images/KE CARMEL (1)/Awards/Telegraph Awards/award3.jpeg",
      "assets/images/KE CARMEL (1)/Awards/Telegraph Awards/award4.jpeg",
      "assets/images/KE CARMEL (1)/Awards/Telegraph Awards/techersimg.jpeg",
      "assets/images/KE CARMEL (1)/Awards/Telegraph Awards/WhatsApp Image 2026-07-26 at 6.10.35 PM (2).jpeg",
      "assets/images/KE CARMEL (1)/Awards/Telegraph Awards/WhatsApp Image 2026-07-26 at 6.10.35 PM.jpeg"
    ],
    "achievement-award-1": [
      "assets/images/KE CARMEL (1)/Awards/Telegraph Awards/award1.jpeg"
    ],
    "achievement-award-2": [
      "assets/images/KE CARMEL (1)/Awards/Telegraph Awards/award2.jpeg"
    ],
    "achievement-award-3": [
      "assets/images/KE CARMEL (1)/Awards/Telegraph Awards/award3.jpeg"
    ],
    "achievement-award-4": [
      "assets/images/KE CARMEL (1)/Awards/Telegraph Awards/award4.jpeg"
    ],
    "cultural-day": [
      "assets/images/KE CARMEL (1)/Annual Day/AB1_4388.jpg",
      "assets/images/KE CARMEL (1)/Annual Day/AB1_4457.jpg",
      "assets/images/KE CARMEL (1)/Annual Day/AB1_4603.jpg",
      "assets/images/KE CARMEL (1)/Annual Day/AB1_4728.jpg",
      "assets/images/KE CARMEL (1)/Annual Day/AB1_4903.jpg",
      "assets/images/KE CARMEL (1)/Annual Day/AB1_4919.jpg",
      "assets/images/KE CARMEL (1)/Annual Day/AB1_5004.jpg",
      "assets/images/KE CARMEL (1)/Annual Day/DSC01964.jpg",
      "assets/images/KE CARMEL (1)/Annual Day/DSC01971.jpg",
      "assets/images/KE CARMEL (1)/Annual Day/DSC01980.jpg",
      "assets/images/KE CARMEL (1)/Annual Day/DSC02022.jpg",
      "assets/images/KE CARMEL (1)/Annual Day/DSC02086.jpg",
      "assets/images/KE CARMEL (1)/Annual Day/DSC02093.jpg",
      "assets/images/KE CARMEL (1)/Annual Day/DSC02341.jpg",
      "assets/images/KE CARMEL (1)/Annual Day/DSC02506.jpg",
      "assets/images/KE CARMEL (1)/Annual Day/DSC02512.jpg",
      "assets/images/KE CARMEL (1)/Annual Day/DSC02609.jpg",
      "assets/images/KE CARMEL (1)/Annual Day/DSC02770.jpg",
      "assets/images/KE CARMEL (1)/Annual Day/DSC02868.jpg",
      "assets/images/KE CARMEL (1)/Annual Day/DSC_8371.jpg",
      "assets/images/KE CARMEL (1)/Annual Day/DSC_8379.jpg",
      "assets/images/KE CARMEL (1)/Annual Day/DSC_8392.jpg",
      "assets/images/KE CARMEL (1)/Annual Day/DSC_8418.jpg",
      "assets/images/KE CARMEL (1)/Annual Day/DSC_8424.jpg",
      "assets/images/KE CARMEL (1)/Annual Day/DSC_8474.jpg",
      "assets/images/KE CARMEL (1)/Annual Day/DSC_8476.jpg",
      "assets/images/KE CARMEL (1)/Annual Day/DSC_8512.jpg"
    ],
    "campus-cleanliness": [
      "assets/images/KE CARMEL (1)/school photo/IMG_20260717_130345.jpg",
      "assets/images/KE CARMEL (1)/school photo/IMG_20260717_130347.jpg"
    ]
  };

  const mediaTriggers = document.querySelectorAll("[data-media-gallery]");
  if (mediaTriggers.length) {
    mediaTriggers.forEach((trigger) => {
      const images = mediaGallerySets[trigger.dataset.mediaGallery] || [];
      trigger.classList.toggle("has-multiple-images", images.length > 1);
    });
    document.body.insertAdjacentHTML("beforeend", `
      <div class="media-gallery-modal" data-media-modal hidden role="dialog" aria-modal="true" aria-labelledby="media-gallery-title">
        <div class="media-gallery-modal__backdrop" data-media-close></div>
        <div class="media-gallery-modal__dialog">
          <div class="media-gallery-modal__header">
            <h2 id="media-gallery-title">Image Gallery</h2>
            <button type="button" data-media-close aria-label="Close image gallery">×</button>
          </div>
          <div class="media-gallery-modal__stage">
            <button type="button" class="media-gallery-modal__arrow media-gallery-modal__arrow--prev" data-media-prev aria-label="Previous image">‹</button>
            <img data-media-image src="" alt="">
            <button type="button" class="media-gallery-modal__arrow media-gallery-modal__arrow--next" data-media-next aria-label="Next image">›</button>
          </div>
          <div class="media-gallery-modal__counter" data-media-counter></div>
        </div>
      </div>`);
    const modal = document.querySelector("[data-media-modal]");
    const modalImage = modal.querySelector("[data-media-image]");
    const modalTitle = modal.querySelector("#media-gallery-title");
    const modalCounter = modal.querySelector("[data-media-counter]");
    let activeImages = [];
    let activeIndex = 0;
    let activeTitle = "Image Gallery";
    let returnFocus = null;

    const renderMediaImage = () => {
      modalImage.src = activeImages[activeIndex] || "";
      modalImage.alt = `${activeTitle}, image ${activeIndex + 1}`;
      modalCounter.textContent = `${activeIndex + 1} / ${activeImages.length}`;
      const hasMultiple = activeImages.length > 1;
      modal.querySelector("[data-media-prev]").hidden = !hasMultiple;
      modal.querySelector("[data-media-next]").hidden = !hasMultiple;
    };
    const closeMediaModal = () => {
      modal.hidden = true;
      document.body.classList.remove("media-modal-open");
      returnFocus?.focus();
    };
    const moveMedia = (direction) => {
      activeIndex = (activeIndex + direction + activeImages.length) % activeImages.length;
      renderMediaImage();
    };

    mediaTriggers.forEach((trigger) => {
      const openMediaGallery = () => {
        activeImages = mediaGallerySets[trigger.dataset.mediaGallery] || [];
        if (!activeImages.length) return;
        activeIndex = Number(trigger.dataset.mediaStart || 0) % activeImages.length;
        activeTitle = trigger.getAttribute("aria-label")?.replace(/^Open\s+/i, "") || "Image Gallery";
        modalTitle.textContent = activeTitle;
        returnFocus = trigger;
        renderMediaImage();
        modal.hidden = false;
        document.body.classList.add("media-modal-open");
        modal.querySelector("[data-media-close]:last-child")?.focus();
      };
      trigger.addEventListener("click", openMediaGallery);
      trigger.addEventListener("keydown", (event) => {
        if (!["Enter", " "].includes(event.key)) return;
        event.preventDefault();
        openMediaGallery();
      });
    });
    modal.querySelectorAll("[data-media-close]").forEach((control) => control.addEventListener("click", closeMediaModal));
    modal.querySelector("[data-media-prev]").addEventListener("click", () => moveMedia(-1));
    modal.querySelector("[data-media-next]").addEventListener("click", () => moveMedia(1));
    document.addEventListener("keydown", (event) => {
      if (modal.hidden) return;
      if (event.key === "Escape") closeMediaModal();
      if (event.key === "ArrowLeft") moveMedia(-1);
      if (event.key === "ArrowRight") moveMedia(1);
    });
  }

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

  // About page: approved full-width section order.
  if (document.body.classList.contains("page-about")) {
    const aboutContent = document.querySelector(".about-tabs__content");
    [
      "about-panel-about-us",
      "about-panel-history",
      "about-panel-vision",
      "about-panel-mission",
      "about-panel-motto",
      "about-panel-affiliation",
      "about-panel-school-life"
    ].forEach((id) => {
      const panel = document.getElementById(id);
      if (panel && aboutContent) aboutContent.appendChild(panel);
    });

    document.querySelectorAll(".about-tabs__button").forEach((button, index) => {
      button.classList.toggle("is-active", index === 0);
      if (index === 0) button.setAttribute("aria-current", "true");
      else button.removeAttribute("aria-current");
    });
    document.querySelectorAll(".about-tab-panel").forEach((panel, index) => {
      panel.classList.toggle("is-active", index === 0);
    });
  }

  // About page: section navigation with smooth scrolling and scroll-aware highlighting.
  document.querySelectorAll("[data-vertical-tabs]").forEach((tabGroup) => {
    const controls = Array.from(tabGroup.querySelectorAll("[data-tab-target]"));
    const sections = controls.map((control) => document.getElementById(control.dataset.tabTarget)).filter(Boolean);
    if (!controls.length || !sections.length) return;
    const isStickyNavigator = document.body.matches(".page-about,.page-admissions");
    const pageHeader = document.querySelector("[data-header]");
    const getHeaderOffset = () => (pageHeader?.getBoundingClientRect().height || 0) + 16;

    const setActiveControl = (sectionId) => {
      controls.forEach((control) => {
        const active = control.dataset.tabTarget === sectionId;
        control.classList.toggle("is-active", active);
        if (active) control.setAttribute("aria-current", "true");
        else control.removeAttribute("aria-current");
      });
    };

    controls.forEach((control) => control.addEventListener("click", () => {
      const target = document.getElementById(control.dataset.tabTarget);
      if (!target) return;
      setActiveControl(target.id);
      if (isStickyNavigator) {
        const offset = getHeaderOffset();
        document.documentElement.style.setProperty("--about-scroll-offset", `${offset}px`);
        window.scrollTo({
          top: window.scrollY + target.getBoundingClientRect().top - offset,
          behavior: "smooth"
        });
      } else {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }));

    sections.forEach((section) => section.classList.add("section-fade-target"));
    if ("IntersectionObserver" in window) {
      const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-section-visible");
        });
      }, { rootMargin: "-24% 0px -55% 0px", threshold: 0.01 });
      sections.forEach((section) => sectionObserver.observe(section));
    } else {
      sections.forEach((section) => section.classList.add("is-section-visible"));
    }

    if (isStickyNavigator) {
      const hero = document.querySelector(".page-hero");
      const sidebar = tabGroup.querySelector(".about-tabs__sidebar");
      let sidebarFrame = 0;

      const updateActiveSection = () => {
        const headerOffset = getHeaderOffset();
        let activeSection = sections[0];

        sections.forEach((section) => {
          if (section.getBoundingClientRect().top <= headerOffset + 1) activeSection = section;
        });

        const documentBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1;
        if (documentBottom) activeSection = sections[sections.length - 1];
        if (activeSection) setActiveControl(activeSection.id);
      };

      const fixedLayoutEnabled = () => getComputedStyle(tabGroup)
        .getPropertyValue("--about-sidebar-fixed-enabled").trim() === "1";

      const getSidebarLeft = () => {
        if (!sidebar) return 0;
        const sidebarGap = Number.parseFloat(getComputedStyle(tabGroup)
          .getPropertyValue("--about-sidebar-gap")) || 0;
        return tabGroup.getBoundingClientRect().left - sidebar.offsetWidth - sidebarGap;
      };

      const updateSidebar = () => {
        sidebarFrame = 0;
        updateActiveSection();
        tabGroup.classList.remove("is-sidebar-fixed", "is-sidebar-ended");
        if (!hero || !sidebar || !fixedLayoutEnabled()) return;

        const headerOffset = getHeaderOffset();
        document.documentElement.style.setProperty("--about-scroll-offset", `${headerOffset}px`);
        tabGroup.style.setProperty("--about-sidebar-top", `${headerOffset}px`);

        if (hero.getBoundingClientRect().bottom > headerOffset) return;

        const contentBottom = tabGroup.getBoundingClientRect().bottom;
        const sidebarBottom = headerOffset + sidebar.offsetHeight;
        if (contentBottom <= sidebarBottom + 16) {
          tabGroup.classList.add("is-sidebar-ended");
        } else {
          tabGroup.style.setProperty("--about-sidebar-left", `${getSidebarLeft()}px`);
          tabGroup.classList.add("is-sidebar-fixed");
        }
      };

      const requestSidebarUpdate = () => {
        if (sidebarFrame) return;
        sidebarFrame = window.requestAnimationFrame(updateSidebar);
      };

      updateSidebar();
      window.addEventListener("scroll", requestSidebarUpdate, { passive: true });
      window.addEventListener("resize", requestSidebarUpdate);
    }

  });
})();
