(() => {
  // Give every inner page the same shell and visual language as the redesigned homepage.
  const isHomePage = document.body.classList.contains("home-page");
  const currentPageName = (window.location.pathname.split("/").pop() || "index.html").replace(/\.html$/i, "").toLowerCase();
  const innerHeaderLogo = "assets/images/logo/newlogo-removebg-preview.png";
  const admissionFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScJ9dyvlMPzFvhaZSO-ZuWFbPytELthn5xCVXwj67vKng3ezg/viewform?usp=dialog";
  if (!isHomePage) {
    document.body.classList.add("inner-page", "is-loading");
    document.body.classList.add(`page-${(window.location.pathname.split("/").pop() || "inner").replace(/\.html$/i, "")}`);
    if (!document.querySelector('link[href*="family=Manrope"]')) {
      document.head.insertAdjacentHTML("beforeend", '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet"><link rel="preload" href="assets/images/logo/newlogo-removebg-preview.png" as="image" type="image/png">');
    }
    document.querySelector(".topbar")?.remove();

    const oldHeader = document.querySelector("header[data-header]");
    if (oldHeader) {
      oldHeader.outerHTML = `
        <div class="splash" data-splash role="status" aria-label="Loading K.E. Carmel School website">
          <div class="splash__mark"><img src="assets/images/logo/newlogo-removebg-preview.png" alt="K.E. Carmel School logo"></div>
          <p class="splash__name">K.E. Carmel School</p><span class="splash__place">Siliguri</span><span class="splash__loader" aria-hidden="true"></span>
        </div>
        <header class="home-header inner-header" data-header>
          <div class="home-container social-bar"><div class="elements-social social-icon"><a href="https://www.facebook.com/share/19A53M1JGj/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a><a href="#" aria-label="X">X</a><a href="https://youtube.com/@k.e.carmelschoolambari5248?si=dl_FgXkT2CdUKENe" target="_blank" rel="noopener noreferrer" aria-label="YouTube">▶</a><a href="#" aria-label="LinkedIn">in</a><a href="https://www.instagram.com/kecscmi?utm_source=qr&igsh=ZmxndThheDB2bW83" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg></a><a href="#" aria-label="WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.4-4A8 8 0 1 1 20 11.6Z" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M9 8.2c.2-.4.5-.4.8-.4h.4c.2 0 .4.1.5.5l.8 1.8c.1.3 0 .5-.2.7l-.6.7c-.2.2-.1.4 0 .6.6 1 1.4 1.8 2.5 2.3.2.1.4.1.6-.1l.8-1c.2-.2.4-.3.7-.2l1.8.9c.3.2.4.3.4.5 0 .5-.2 1.2-.7 1.6-.5.5-1.3.8-2.1.6-1.3-.3-3.1-1.1-4.7-2.6-1.3-1.3-2.2-2.8-2.5-4.1-.2-.8.1-1.4.5-1.8Z" fill="currentColor"/></svg></a><a href="tel:+916295975836" aria-label="Call">☎</a></div><a class="overlay-admission" href="admissions.html">Get Admission</a></div>
          <div class="home-container home-header__inner">
            <nav class="home-nav home-nav--left"><a class="site-nav__link" href="index.html">Home</a><a class="site-nav__link" href="about.html">About</a><a class="site-nav__link" href="academics.html">Academics</a><a class="site-nav__link" href="management.html">Our Team</a></nav>
            <a class="home-brand" href="index.html" style="text-decoration: none;" aria-label="K.E. Carmel School Siliguri home"><img src="${innerHeaderLogo}" alt="K.E. Carmel School logo"><span><strong>K. E. CARMEL</strong><small>SCHOOL, SILIGURI</small><em>To Plant And Nurture</em></span></a>
            <button class="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="site-nav"><span></span><span></span><span></span></button>
            <nav class="home-nav home-nav--right"><a class="site-nav__link" href="facilities.html">Facilities</a><a class="site-nav__link" href="admissions.html">Admissions</a><a class="site-nav__link" href="events.html">Events</a><a class="site-nav__link" href="gallery.html">Gallery</a><a class="site-nav__link" href="contact.html">Contact</a></nav>
            <nav id="site-nav" class="mobile-home-nav site-nav" aria-label="Mobile navigation"><a class="site-nav__link" href="index.html">Home</a><a class="site-nav__link" href="about.html">About</a><a class="site-nav__link" href="academics.html">Academics</a><a class="site-nav__link" href="management.html">Our Team</a><a class="site-nav__link" href="facilities.html">Facilities</a><a class="site-nav__link" href="admissions.html">Admissions</a><a class="site-nav__link" href="events.html">Events</a><a class="site-nav__link" href="gallery.html">Gallery</a><a class="site-nav__link" href="contact.html">Contact</a></nav>
          </div>
        </header>`;
    }

    const oldFooter = document.querySelector("footer");
    if (oldFooter) {
      oldFooter.outerHTML = `
        <footer class="home-footer"><div class="home-container footer-main"><div class="footer-about"><a class="home-brand home-brand--footer" href="index.html" style="text-decoration: none;"><img src="assets/images/logo/newlogo-removebg-preview.png" alt=""><span><strong>K. E. CARMEL</strong><small>SCHOOL, SILIGURI</small><em>To Plant And Nurture</em></span></a><p class="text-light">A co-educational English-medium institution committed to academic excellence, discipline, strong values and holistic development.</p><div class="elements-social footer-social"><a href="https://www.facebook.com/share/19A53M1JGj/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a><a href="#" aria-label="X">X</a><a href="https://youtube.com/@k.e.carmelschoolambari5248?si=dl_FgXkT2CdUKENe" target="_blank" rel="noopener noreferrer" aria-label="YouTube">▶</a><a href="#" aria-label="LinkedIn">in</a><a href="https://www.instagram.com/kecscmi?utm_source=qr&igsh=ZmxndThheDB2bW83" target="_blank" rel="noopener noreferrer" aria-label="Instagram">◎</a></div></div><div><h3>Quick Links</h3><a href="index.html">Home</a><a href="about.html">About</a><a href="academics.html">Academics</a><a href="management.html">Our Team</a></div><div><h3>Quick Links</h3><a href="facilities.html">Facilities</a><a href="admissions.html">Admissions</a><a href="events.html">Events</a><a href="gallery.html">Gallery</a><a href="contact.html">Contact</a></div></div><div class="home-container footer-bottom"><a href="#main">Go Top ↑</a><p style="color:#ffffff9a">© <span data-year></span> K.E. Carmel School, Siliguri. All Rights Reserved.</p></div><div class="home-container footer-credit-line">Designed, Developed &amp; Maintained by&nbsp; | &nbsp;<a href="https://christinfotech.org/" target="_blank" rel="noopener"><strong>CHRIST Infotech</strong></a> (Software Research &amp; Development Center), <a href="https://lavasa.christuniversity.in/" target="_blank" rel="noopener"><strong>CHRIST University, Pune - Lavasa</strong></a>, India</div></footer>`;
    }

    const topSocial = document.querySelector(".social-icon");
    const footerSocial = document.querySelector(".footer-social");
    if (topSocial && footerSocial) footerSocial.innerHTML = topSocial.innerHTML;
    document.body.classList.remove("shell-pending");

    document.querySelectorAll("main .section__head, main .card, main .gallery__item, main .person-card, main .event-card, main .achievement-card").forEach((item) => item.classList.add("reveal"));
  }

  // Actual team portraits. Add a name/path entry here as new staff photos become available.
  const teamPhotoPaths = {
    "Bro. Brayan K. Sabu CMI": "assets/images/KECS/Administration/Bro. Brayan/Bro. Brayan Kunnath CMI, Supervising Co ordinator.png",
    "Deepika Pradhan": "assets/images/KECS/Administration/Asst. Academic Co ordinators/Deepika Pradhan, Maths & Commerce.jpeg",
    "Monoswita Saha": "assets/images/KECS/Administration/Asst. Academic Co ordinators/Monoswita Saha, English.jpeg",
    "Roshmi Bhattacharjee": "assets/images/KECS/Administration/Asst. Academic Co ordinators/Roshmi Bhattacharjee, Geography.jpeg",
    "Manoranjan Behera": "assets/images/KECS/Administration/Asst. Academic Co ordinators/Manoranjan Behera, Bengali.jpeg",
    "Priya Gosh Chowdhury": "assets/images/KECS/Administration/Asst. Academic Co ordinators/Priya Ghosh Chowdhury, English.jpeg",
    "Nibedita Roy": "assets/images/KECS/Administration/Asst. Academic Co ordinators/Nibedita Roy, Bengali.jpeg",
    "Anchal Sah": "assets/images/KECS/Administration/Staff/Anchal Sah, Maths.jpeg",
    "Anakha Nair": "assets/images/KECS/Administration/Staff/Anakha Nair, Biology, Chemistry.jpeg",
    "Ankita Karmakar": "assets/images/KECS/Administration/Staff/Ankita Karmakar Sen, Maths.jpeg",
    "Anubhab Ghosh": "assets/images/KECS/Administration/Staff/Anubhab Ghosh, Office staff & Computer.jpeg",
    "Anuradha Prasad": "assets/images/KECS/Administration/Staff/Anuradha Prasad, Hindi.jpeg",
    "Ashabari Choudhari": "assets/images/KECS/Administration/Staff/Ashabari Choudhuri, English.jpeg",
    "Asha Agarwal": "assets/images/KECS/Administration/Staff/Asha Agarwal, Hindi.jpeg",
    "Avijith Chatterjee": "assets/images/KECS/Administration/Staff/Avijit Chatterjee, English & Economics.jpeg",
    "Barun Bapari": "assets/images/KECS/Administration/Staff/Barun Bapari, Office Staff.jpeg",
    "Bernali Sarkar": "assets/images/KECS/Administration/Staff/Barnali Sarkar, Bengali.jpeg",
    "Bony Bita Murmu": "assets/images/KECS/Administration/Staff/Bony Bita Murmu, Computer.jpeg",
    "Deepshika Ghosh": "assets/images/KECS/Administration/Staff/Deepshika Ghosh, History Civics.jpeg",
    "Dilip Roy": "assets/images/KECS/Administration/Staff/Dilip Roy, Chemistry.jpeg",
    "Dipali Roy": "assets/images/KECS/Administration/Staff/Dipali Roy, English.jpeg",
    "Divya Bhattacharjee": "assets/images/KECS/Administration/Staff/Divya Bhattacharjee, Maths & Business Studies.jpeg",
    "Ditsa Hore": "assets/images/KECS/Administration/Staff/Ditsa Hore, English.jpeg",
    "Girbani Kundu": "assets/images/KECS/Administration/Staff/Girbani Kundu, Biology.jpeg",
    "Ipsita Gosh Singha": "assets/images/KECS/Administration/Staff/Ipsita Ghosh Singha, Biology.jpeg",
    "Jagannath Bhattacharjee": "assets/images/KECS/Administration/Staff/Jagannath Bhattacharjee, Computer.jpeg",
    "Jayeetashree Das": "assets/images/KECS/Administration/Staff/Jayeetashree Das, Maths.jpeg",
    "Jhimli Bhattacharjee": "assets/images/KECS/Administration/Staff/Jhimli Bhattacharya, Biology.jpeg",
    "Jiban Kumar Roy": "assets/images/KECS/Administration/Staff/Jiban Kumar Roy, PT.jpeg",
    "Joachim Aind": "assets/images/KECS/Administration/Staff/Joachim Aind, Library.jpeg",
    "Joseph Varghese": "assets/images/KECS/Administration/Staff/Joseph Varghese, Office Staff.jpeg",
    "Kishore Sarkar": "assets/images/KECS/Administration/Staff/kishore Sarkar, Office Staff.jpeg",
    "Koyel Modak": "assets/images/KECS/Administration/Staff/Koyel Modak, History, Civics.jpeg",
    "Mohita Chakraborty": "assets/images/KECS/Administration/Staff/Mohita Chakraborty, Bengali.jpeg",
    "Pampa B. Majumdar": "assets/images/KECS/Administration/Staff/Pampa B. Majumdar, English.jpeg",
    "Pritha Saha": "assets/images/KECS/Administration/Staff/Pritha Saha, English.jpeg",
    "Priyanka Majumdar": "assets/images/KECS/Administration/Staff/Priyanka Majumdar, Biology.jpeg",
    "Puja Das": "assets/images/KECS/Administration/Staff/Puja Das, Maths & Accountancy.jpeg",
    "Ranjana Jha": "assets/images/KECS/Administration/Staff/Anjana Jha, Computer.jpeg",
    "Rounak Kr. Majumder": "assets/images/KECS/Administration/Staff/Rounak Kr. Majumder, Physics maths.jpeg",
    "Sanju Prabha Barwa": "assets/images/KECS/Administration/Staff/Sanju Prabha Barwa, Hindi.jpeg",
    "Sheetal Sarda Bhattacharjee": "assets/images/KECS/Administration/Staff/Sheetal Sarda Bhattacharjee, English.jpeg",
    "Sonia Majumder": "assets/images/KECS/Administration/Staff/Sonia Majumder, English.jpeg",
    "Subodh Roy": "assets/images/KECS/Administration/Staff/Subodh Roy, Physics & Maths.jpeg",
    "Sucharita Chakraborty": "assets/images/KECS/Administration/Staff/Sucharita Chakraborty, English.jpeg",
    "Swaraj Bhattacharjee": "assets/images/KECS/Administration/Staff/Swaraj Bhattacharjee, Social Studies & Geography.jpeg",
    "Swarnashloke Chakraborty": "assets/images/KECS/Administration/Staff/Swarnashloke Chakraborty_ENGLISH.jpeg"
  };
  if (document.body.classList.contains("page-management")) {
    document.querySelectorAll(".team-directory-card").forEach((card) => {
      const name = card.querySelector(".person-card__name")?.textContent.trim();
      const photoPath = teamPhotoPaths[name];
      if (!photoPath) return;
      const photo = document.createElement("div");
      photo.className = "person-card__photo card-img-top";
      const image = document.createElement("img");
      image.src = photoPath;
      image.alt = name;
      image.loading = "lazy";
      photo.append(image);
      const placeholder = card.querySelector(".team-placeholder");
      if (placeholder) placeholder.replaceWith(photo);
      else card.prepend(photo);
      card.classList.add("person-card--with-photo");
    });
  }

  const header = document.querySelector("[data-header]");
  document.querySelectorAll("[data-admission-form-link]").forEach((link) => {
    link.setAttribute("href", admissionFormUrl);
  });

  const admissionPopup = document.querySelector("[data-admission-popup]");
  if (isHomePage && admissionPopup instanceof HTMLDialogElement) {
    const closeButton = admissionPopup.querySelector("[data-admission-popup-close]");
    const openAdmissionPopup = () => {
      if (!admissionPopup.open) admissionPopup.showModal();
    };
    closeButton?.addEventListener("click", () => admissionPopup.close());
    admissionPopup.addEventListener("click", (event) => {
      if (event.target === admissionPopup) admissionPopup.close();
    });
    window.addEventListener("load", () => window.setTimeout(openAdmissionPopup, 1250), { once: true });
  }

  document.querySelectorAll('.elements-social a[href^="tel:"]').forEach((link) => {
    link.setAttribute("aria-label", "Mobile");
  });
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
    // Trigger off DOMContentLoaded (the document itself is parsed) rather than the
    // "load" event, which only fires once every image and CDN asset on the page has
    // finished downloading. On slower mobile connections that full download takes much
    // longer than on desktop broadband, which was making the splash linger far past its
    // intended ~1s on mobile even though the code and timing values are identical.
    const scheduleHide = () => window.setTimeout(hideSplash, 1000);
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", scheduleHide, { once: true });
    } else {
      scheduleHide();
    }
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

  // Progressive viewport reveals. Content is visible by default in CSS and enters
  // a pending animation state only after both the observer and geometry fallback
  // are ready, so short/high-zoom viewports can never leave it permanently hidden.
  const initReliableViewportReveal = (targetsInput, { readyClass, visibleClass }) => {
    const targets = Array.from(targetsInput);
    if (!targets.length) return;
    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add(visibleClass));
      return;
    }

    let revealFrame = 0;
    let observer;
    const revealTarget = (target) => {
      target.classList.add(visibleClass);
      observer?.unobserve(target);
    };
    const revealVisibleTargets = () => {
      revealFrame = 0;
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      targets.forEach((target) => {
        if (target.classList.contains(visibleClass)) return;
        const bounds = target.getBoundingClientRect();
        if (bounds.top <= viewportHeight * .92 && bounds.bottom >= viewportHeight * .08) {
          revealTarget(target);
        }
      });
    };
    const requestRevealCheck = () => {
      if (revealFrame) return;
      revealFrame = window.requestAnimationFrame(revealVisibleTargets);
    };

    try {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) revealTarget(entry.target);
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: .01 });

      targets.forEach((target) => observer.observe(target));
      document.body.classList.add(readyClass);
      revealVisibleTargets();
      window.addEventListener("scroll", requestRevealCheck, { passive: true });
      window.addEventListener("resize", requestRevealCheck);
      window.addEventListener("pageshow", requestRevealCheck);
    } catch {
      targets.forEach((target) => target.classList.add(visibleClass));
    }
  };

  const standardRevealPages = [
    ".home-page",
    ".page-academics",
    ".page-facilities",
    ".page-management",
    ".page-gallery",
    ".page-events",
    ".page-contact",
  ].join(",");
  if (document.body.matches(standardRevealPages)) {
    initReliableViewportReveal(document.querySelectorAll(".reveal"), {
      readyClass: "site-reveal-ready",
      visibleClass: "is-visible",
    });
  }

  // The homepage navigation starts over the hero and becomes compact after scrolling.
  if (header && (document.body.classList.contains("home-page") || document.body.classList.contains("inner-page"))) {
    const updateHeader = () => header.classList.toggle("is-sticky", window.scrollY > 120);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
  }

  // Reusable horizontal sliders used by notices, facilities and campus stories.
  const initTrackSlider = (rootSelector, trackSelector, prevSelector, nextSelector, options = {}) => {
    const root = document.querySelector(rootSelector);
    const track = root?.querySelector(trackSelector);
    if (!root || !track) return;
    const { autoSlide = false, autoSlideInterval = 4200 } = options;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const items = Array.from(track.children);
    let position = 0;
    let autoSlideTimer;
    const visibleItems = () => {
      if (window.innerWidth <= 700) return 1;
      if (root.matches("[data-activity-slider]")) return window.innerWidth <= 1000 ? 2 : 4;
      if (root.matches("[data-recent-events-slider]")) return window.innerWidth <= 1000 ? 2 : 3;
      if (root.matches("[data-gallery-slider]")) return 5;
      if (root.matches("[data-story-slider]")) return Math.max(1, Math.floor(window.innerWidth / 332));
      if (root.matches("[data-branch-slider]")) return window.innerWidth <= 1000 ? 2 : 4;
      if (root.matches("[data-card-slider]")) return window.innerWidth <= 1000 ? 2 : 4;
      return 2;
    };
    const maxPosition = () => Math.max(0, items.length - visibleItems());
    const render = () => {
      const first = items[0];
      if (!first) return;
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      const max = maxPosition();
      position = Math.min(position, max);
      track.style.transform = `translateX(-${position * (first.getBoundingClientRect().width + gap)}px)`;
    };
    const moveNext = () => {
      const max = maxPosition();
      position = position >= max ? 0 : position + 1;
      render();
    };
    const stopAutoSlide = () => window.clearInterval(autoSlideTimer);
    const startAutoSlide = () => {
      stopAutoSlide();
      if (!autoSlide || reduceMotion.matches || document.hidden || maxPosition() === 0) return;
      autoSlideTimer = window.setInterval(moveNext, autoSlideInterval);
    };
    root.querySelector(prevSelector)?.addEventListener("click", () => {
      const max = maxPosition();
      position = position <= 0 ? max : position - 1;
      render();
      startAutoSlide();
    });
    root.querySelector(nextSelector)?.addEventListener("click", () => {
      moveNext();
      startAutoSlide();
    });
    window.addEventListener("resize", () => {
      render();
      startAutoSlide();
    });
    if (autoSlide) {
      root.addEventListener("mouseenter", stopAutoSlide);
      root.addEventListener("mouseleave", startAutoSlide);
      root.addEventListener("focusin", stopAutoSlide);
      root.addEventListener("focusout", (event) => {
        if (!root.contains(event.relatedTarget)) startAutoSlide();
      });
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) stopAutoSlide();
        else startAutoSlide();
      });
      reduceMotion.addEventListener("change", startAutoSlide);
    }
    render();
    startAutoSlide();
  };
  const homeAutoSlide = { autoSlide: true, autoSlideInterval: 4200 };
  initTrackSlider("[data-strip-slider]", "[data-strip-track]", "[data-strip-prev]", "[data-strip-next]", homeAutoSlide);
  initTrackSlider("[data-card-slider]", "[data-card-track]", "[data-card-prev]", "[data-card-next]", homeAutoSlide);
  initTrackSlider("[data-branch-slider]", "[data-card-track]", "[data-branch-prev]", "[data-branch-next]", homeAutoSlide);
  initTrackSlider("[data-story-slider]", "[data-story-track]", "[data-story-prev]", "[data-story-next]");
  initTrackSlider("[data-activity-slider]", "[data-activity-track]", "[data-activity-prev]", "[data-activity-next]", homeAutoSlide);
  initTrackSlider("[data-gallery-slider]", "[data-gallery-track]", "[data-gallery-prev]", "[data-gallery-next]");
  initTrackSlider("[data-recent-events-slider]", "[data-recent-events-track]", "[data-recent-events-prev]", "[data-recent-events-next]");

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
            <div><p data-rules-label></p><h2 id="rules-modal-title" data-rules-title>Rules</h2></div>
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
    const rulesTitle = rulesModal.querySelector("[data-rules-title]");
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
      rulesTitle.textContent = trigger.dataset.rulesTitle || "Rules";
      const cardImage = trigger.closest(".facility, .event-information-card, .event-card")?.querySelector("img");
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
    "ethnic-day": [
      "assets/images/KE CARMEL (1)/Ethnic Day-compressed/IMG-20260812-WA0083.jpg.jpeg",
      "assets/images/KE CARMEL (1)/Ethnic Day-compressed/IMG-20260812-WA0086.jpg.jpeg",
      "assets/images/KE CARMEL (1)/Ethnic Day-compressed/IMG-20260812-WA0088.jpg.jpeg",
      "assets/images/KE CARMEL (1)/Ethnic Day-compressed/IMG-20260812-WA0090.jpg.jpeg",
      "assets/images/KE CARMEL (1)/Ethnic Day-compressed/IMG-20260812-WA0091.jpg.jpeg",
      "assets/images/KE CARMEL (1)/Ethnic Day-compressed/IMG-20260812-WA0092.jpg.jpeg",
      "assets/images/KE CARMEL (1)/Ethnic Day-compressed/IMG-20260812-WA0093.jpg.jpeg",
      "assets/images/KE CARMEL (1)/Ethnic Day-compressed/IMG-20260812-WA0096.jpg.jpeg",
      "assets/images/KE CARMEL (1)/Ethnic Day-compressed/IMG-20260812-WA0097.jpg.jpeg",
      "assets/images/KE CARMEL (1)/Ethnic Day-compressed/IMG-20260812-WA0100.jpg.jpeg"
    ],
    "graduation-ukg": [
      "assets/images/KE CARMEL (1)/Graduation for UKG-compressed/IMG-20260812-WA0050.jpg.jpeg",
      "assets/images/KE CARMEL (1)/Graduation for UKG-compressed/IMG-20260812-WA0051.jpg.jpeg",
      "assets/images/KE CARMEL (1)/Graduation for UKG-compressed/IMG-20260812-WA0053.jpg.jpeg",
      "assets/images/KE CARMEL (1)/Graduation for UKG-compressed/IMG-20260812-WA0056.jpg.jpeg",
      "assets/images/KE CARMEL (1)/Graduation for UKG-compressed/IMG-20260812-WA0057.jpg.jpeg",
      "assets/images/KE CARMEL (1)/Graduation for UKG-compressed/IMG-20260812-WA0060.jpg.jpeg",
      "assets/images/KE CARMEL (1)/Graduation for UKG-compressed/IMG-20260812-WA0066.jpg.jpeg"
    ],
    "field-visit": [
      "assets/images/KE CARMEL (1)/Field Visit-compressed/IMG-20260812-WA0269.jpg.jpeg",
      "assets/images/KE CARMEL (1)/Field Visit-compressed/IMG-20260812-WA0270.jpg.jpeg",
      "assets/images/KE CARMEL (1)/Field Visit-compressed/IMG-20260812-WA0271.jpg.jpeg",
      "assets/images/KE CARMEL (1)/Field Visit-compressed/IMG-20260812-WA0272.jpg.jpeg",
      "assets/images/KE CARMEL (1)/Field Visit-compressed/workshop.jpeg"
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
    ],
    "new-investiture": [
      "assets/images/KE CARMEL (1)/New Events/Investiture Ceremony/IMG-20260817-WA0061.jpg",
      "assets/images/KE CARMEL (1)/New Events/Investiture Ceremony/IMG-20260817-WA0072.jpg",
      "assets/images/KE CARMEL (1)/New Events/Investiture Ceremony/IMG-20260817-WA0073.jpg",
      "assets/images/KE CARMEL (1)/New Events/Investiture Ceremony/IMG-20260817-WA0074.jpg"
    ],
    "new-nobobosha": [
      "assets/images/KE CARMEL (1)/New Events/Nobobosha Bengali New Year/IMG-20260817-WA0075.jpg",
      "assets/images/KE CARMEL (1)/New Events/Nobobosha Bengali New Year/IMG-20260817-WA0076.jpg",
      "assets/images/KE CARMEL (1)/New Events/Nobobosha Bengali New Year/IMG-20260817-WA0077.jpg",
      "assets/images/KE CARMEL (1)/New Events/Nobobosha Bengali New Year/IMG-20260817-WA0078.jpg"
    ],
    "new-public-speaking": [
      "assets/images/KE CARMEL (1)/New Events/Public Speaking Competition/IMG-20260817-WA0050.jpg",
      "assets/images/KE CARMEL (1)/New Events/Public Speaking Competition/IMG-20260817-WA0052.jpg",
      "assets/images/KE CARMEL (1)/New Events/Public Speaking Competition/IMG-20260817-WA0053.jpg",
      "assets/images/KE CARMEL (1)/New Events/Public Speaking Competition/IMG-20260817-WA0054.jpg",
      "assets/images/KE CARMEL (1)/New Events/Public Speaking Competition/IMG-20260817-WA0079.jpg",
      "assets/images/KE CARMEL (1)/New Events/Public Speaking Competition/IMG-20260817-WA0080.jpg",
      "assets/images/KE CARMEL (1)/New Events/Public Speaking Competition/IMG-20260817-WA0081.jpg",
      "assets/images/KE CARMEL (1)/New Events/Public Speaking Competition/IMG-20260817-WA0082.jpg"
    ],
    "new-spicy-puff-day": [
      "assets/images/KE CARMEL (1)/New Events/Spicy And Puff day/IMG-20260817-WA0022.jpg",
      "assets/images/KE CARMEL (1)/New Events/Spicy And Puff day/IMG-20260817-WA0023.jpg",
      "assets/images/KE CARMEL (1)/New Events/Spicy And Puff day/IMG-20260817-WA0024.jpg",
      "assets/images/KE CARMEL (1)/New Events/Spicy And Puff day/IMG-20260817-WA0027.jpg",
      "assets/images/KE CARMEL (1)/New Events/Spicy And Puff day/IMG-20260817-WA0038.jpg",
      "assets/images/KE CARMEL (1)/New Events/Spicy And Puff day/IMG-20260817-WA0039.jpg",
      "assets/images/KE CARMEL (1)/New Events/Spicy And Puff day/IMG-20260817-WA0040.jpg",
      "assets/images/KE CARMEL (1)/New Events/Spicy And Puff day/IMG-20260817-WA0042.jpg",
      "assets/images/KE CARMEL (1)/New Events/Spicy And Puff day/IMG-20260817-WA0043.jpg",
      "assets/images/KE CARMEL (1)/New Events/Spicy And Puff day/IMG-20260817-WA0044.jpg",
      "assets/images/KE CARMEL (1)/New Events/Spicy And Puff day/IMG-20260817-WA0045.jpg",
      "assets/images/KE CARMEL (1)/New Events/Spicy And Puff day/IMG-20260817-WA0046.jpg",
      "assets/images/KE CARMEL (1)/New Events/Spicy And Puff day/IMG-20260817-WA0047.jpg"
    ],
    "new-student-council-vote": [
      "assets/images/KE CARMEL (1)/New Events/Student Council Vote/IMG-20260817-WA0059.jpg",
      "assets/images/KE CARMEL (1)/New Events/Student Council Vote/IMG-20260817-WA0060.jpg",
      "assets/images/KE CARMEL (1)/New Events/Student Council Vote/IMG-20260817-WA0062.jpg",
      "assets/images/KE CARMEL (1)/New Events/Student Council Vote/IMG-20260817-WA0063.jpg",
      "assets/images/KE CARMEL (1)/New Events/Student Council Vote/IMG-20260817-WA0065.jpg"
    ],
    "new-womens-cricket": [
      "assets/images/KE CARMEL (1)/New Events/Women Cricket Tournament/IMG-20260817-WA0064.jpg",
      "assets/images/KE CARMEL (1)/New Events/Women Cricket Tournament/IMG-20260817-WA0066.jpg",
      "assets/images/KE CARMEL (1)/New Events/Women Cricket Tournament/IMG-20260817-WA0067.jpg",
      "assets/images/KE CARMEL (1)/New Events/Women Cricket Tournament/IMG-20260817-WA0068.jpg",
      "assets/images/KE CARMEL (1)/New Events/Women Cricket Tournament/IMG-20260817-WA0069.jpg",
      "assets/images/KE CARMEL (1)/New Events/Women Cricket Tournament/IMG-20260817-WA0070.jpg",
      "assets/images/KE CARMEL (1)/New Events/Women Cricket Tournament/IMG-20260817-WA0071.jpg"
    ],
    "new-rainy-day": [
      "assets/images/KE CARMEL (1)/New Events/Rainy Day/IMG-20260817-WA0055.jpg",
      "assets/images/KE CARMEL (1)/New Events/Rainy Day/IMG-20260817-WA0056.jpg",
      "assets/images/KE CARMEL (1)/New Events/Rainy Day/IMG-20260817-WA0057.jpg",
      "assets/images/KE CARMEL (1)/New Events/Rainy Day/IMG-20260817-WA0058.jpg"
    ],
    "new-fifa-bagless-day": [
      "assets/images/KE CARMEL (1)/New Events/Fifa 2026 - Bagless Day/IMG-20260817-WA0086.jpg",
      "assets/images/KE CARMEL (1)/New Events/Fifa 2026 - Bagless Day/IMG-20260817-WA0087.jpg",
      "assets/images/KE CARMEL (1)/New Events/Fifa 2026 - Bagless Day/IMG-20260817-WA0088.jpg",
      "assets/images/KE CARMEL (1)/New Events/Fifa 2026 - Bagless Day/IMG-20260831-WA0068.jpg",
      "assets/images/KE CARMEL (1)/New Events/Fifa 2026 - Bagless Day/IMG-20260831-WA0069.jpg",
      "assets/images/KE CARMEL (1)/New Events/Fifa 2026 - Bagless Day/IMG-20260831-WA0073.jpg"
    ]
  };

  // Gallery-page variants stay separate so Facilities and Events retain their existing modal sets.
  mediaGallerySets["gallery-campus"] = [
    "assets/images/KE CARMEL (1)/school photo/IMG-20260801-WA0021.jpeg",
    "assets/images/KE CARMEL (1)/school photo/IMG_20260717_130345.jpg",
    "assets/images/KE CARMEL (1)/school photo/IMG_20260717_130347.jpg",
    "assets/images/KE CARMEL (1)/school photo/IMG_20260813_094313.jpeg",
    "assets/images/KE CARMEL (1)/school photo/infrastructure.jpeg"
  ];
  mediaGallerySets["gallery-classrooms"] = [
    "assets/images/KE CARMEL (1)/Classroom/IMG-20260801-WA0023.jpg.jpeg",
    "assets/images/KE CARMEL (1)/Classroom/IMG-20260801-WA0024.jpg.jpeg",
    "assets/images/KE CARMEL (1)/Classroom/A3IMG-20260801-WA0016.jpeg",
    "assets/images/KE CARMEL (1)/Classroom/IMG-20260813-WA0019.jpeg",
    "assets/images/KE CARMEL (1)/Classroom/IMG-20260813-WA0025.jpeg"
  ];
  mediaGallerySets["gallery-sports"] = [
    ...mediaGallerySets["sports-playground"],
    "assets/images/KE CARMEL (1)/sports-compressed/IMG-20260812-WA0024.jpeg",
    "assets/images/KE CARMEL (1)/sports-compressed/IMG-20260812-WA0026.jpeg",
    "assets/images/KE CARMEL (1)/sports-compressed/IMG-20260812-WA0029.jpeg",
    "assets/images/KE CARMEL (1)/sports-compressed/IMG-20260812-WA0043.jpeg",
    "assets/images/KE CARMEL (1)/sports-compressed/IMG-20260812-WA0169.jpeg",
    "assets/images/KE CARMEL (1)/sports-compressed/IMG-20260812-WA0174.jpeg",
    "assets/images/KE CARMEL (1)/sports-compressed/IMG-20260812-WA0175.jpeg",
    "assets/images/KE CARMEL (1)/sports-compressed/IMG-20260812-WA0176.jpeg",
    "assets/images/KE CARMEL (1)/sports-compressed/IMG-20260812-WA0184.jpeg"
  ];
  mediaGallerySets["gallery-events"] = [
    ...mediaGallerySets["cultural-day"],
    ...mediaGallerySets["ethnic-day"]
  ];

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
  initReliableViewportReveal(floatTargets, {
    readyClass: "float-reveal-ready",
    visibleClass: "is-floated",
  });

  // About page: approved full-width section order.
  if (document.body.classList.contains("page-about")) {
    const aboutContent = document.querySelector(".about-tabs__content");
    [
      "about-panel-school-life",
      "about-panel-about-us",
      "about-panel-history",
      "about-panel-vision",
      "about-panel-mission",
      "about-panel-motto",
      "about-panel-affiliation"
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

  // About and Admissions: sticky horizontal section navigation with smooth scrolling
  // and scroll-aware highlighting.
  document.querySelectorAll("[data-section-nav]").forEach((tabGroup) => {
    const controls = Array.from(tabGroup.querySelectorAll("[data-tab-target]"));
    const sections = controls.map((control) => document.getElementById(control.dataset.tabTarget)).filter(Boolean);
    if (!controls.length || !sections.length) return;
    const isStickyNavigator = document.body.matches(".page-about,.page-admissions");
    const pageHeader = document.querySelector("[data-header]");
    const sectionNavbar = tabGroup.querySelector(".about-tabs__sidebar");
    const sectionNav = tabGroup.querySelector(".about-tabs__nav");
    const getHeaderHeight = () => pageHeader?.getBoundingClientRect().height || 0;
    const getSectionNavOffset = () => getHeaderHeight()
      + (sectionNavbar?.getBoundingClientRect().height || 0) + 12;

    const updateNavigationMetrics = () => {
      if (!isStickyNavigator || !sectionNavbar) return;
      const headerHeight = getHeaderHeight();
      tabGroup.style.setProperty("--section-nav-top", `${headerHeight}px`);
      document.documentElement.style.setProperty("--about-scroll-offset", `${getSectionNavOffset()}px`);
    };

    const keepActiveControlVisible = (activeControl) => {
      if (!sectionNav || !activeControl) return;
      const targetLeft = activeControl.offsetLeft
        - (sectionNav.clientWidth - activeControl.offsetWidth) / 2;
      sectionNav.scrollTo({ left: Math.max(0, targetLeft), behavior: "smooth" });
    };

    let activeSectionId = controls.find((control) => control.classList.contains("is-active"))?.dataset.tabTarget || "";
    const setActiveControl = (sectionId) => {
      let newlyActiveControl;
      controls.forEach((control) => {
        const active = control.dataset.tabTarget === sectionId;
        control.classList.toggle("is-active", active);
        if (active) control.setAttribute("aria-current", "true");
        else control.removeAttribute("aria-current");
        if (active) newlyActiveControl = control;
      });
      if (activeSectionId !== sectionId) keepActiveControlVisible(newlyActiveControl);
      activeSectionId = sectionId;
    };

    controls.forEach((control) => control.addEventListener("click", () => {
      const target = document.getElementById(control.dataset.tabTarget);
      if (!target) return;
      setActiveControl(target.id);
      if (isStickyNavigator) {
        updateNavigationMetrics();
        const offset = getSectionNavOffset();
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
      let navigationFrame = 0;

      const updateActiveSection = () => {
        const sectionOffset = getSectionNavOffset();
        let activeSection = sections[0];

        sections.forEach((section) => {
          if (section.getBoundingClientRect().top <= sectionOffset + 1) activeSection = section;
        });

        const documentBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1;
        if (documentBottom) activeSection = sections[sections.length - 1];
        if (activeSection) setActiveControl(activeSection.id);
      };

      const updateSectionNavigation = () => {
        navigationFrame = 0;
        updateNavigationMetrics();
        updateActiveSection();
      };

      const requestNavigationUpdate = () => {
        if (navigationFrame) return;
        navigationFrame = window.requestAnimationFrame(updateSectionNavigation);
      };

      updateSectionNavigation();
      window.addEventListener("scroll", requestNavigationUpdate, { passive: true });
      window.addEventListener("resize", requestNavigationUpdate);
      window.addEventListener("pageshow", requestNavigationUpdate);
    }

  });

  // About and Admissions: preserve scroll reveals without making content depend on
  // them. CSS stays visible by default; pending states start only after both the
  // observer and its geometry-based scroll fallback are ready.
  if (document.body.matches(".page-about,.page-admissions") && "IntersectionObserver" in window) {
    const sectionRevealTargets = Array.from(document.querySelectorAll([
      ".about-tabs__content .about-tab-panel.section-fade-target",
      ".about-tabs__content .reveal",
    ].join(",")));

    if (sectionRevealTargets.length) {
      const revealSectionTarget = (target) => {
        if (target.classList.contains("about-tab-panel")) target.classList.add("is-section-visible");
        if (target.classList.contains("reveal")) target.classList.add("is-visible");
      };

      let sectionRevealFrame = 0;
      let sectionRevealObserver;
      const revealVisibleSectionTargets = () => {
        sectionRevealFrame = 0;
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        sectionRevealTargets.forEach((target) => {
          const panelRevealComplete = !target.classList.contains("about-tab-panel")
            || target.classList.contains("is-section-visible");
          const cardRevealComplete = !target.classList.contains("reveal")
            || target.classList.contains("is-visible");
          if (panelRevealComplete && cardRevealComplete) return;
          const bounds = target.getBoundingClientRect();
          if (bounds.top <= viewportHeight * .92 && bounds.bottom >= viewportHeight * .08) {
            revealSectionTarget(target);
            sectionRevealObserver?.unobserve(target);
          }
        });
      };
      const requestSectionRevealCheck = () => {
        if (sectionRevealFrame) return;
        sectionRevealFrame = window.requestAnimationFrame(revealVisibleSectionTargets);
      };

      try {
        sectionRevealObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            revealSectionTarget(entry.target);
            observer.unobserve(entry.target);
          });
        }, { rootMargin: "0px 0px -8% 0px", threshold: .01 });

        sectionRevealTargets.forEach((target) => sectionRevealObserver.observe(target));
        document.body.classList.add("section-reveal-ready");
        revealVisibleSectionTargets();
        window.addEventListener("scroll", requestSectionRevealCheck, { passive: true });
        window.addEventListener("resize", requestSectionRevealCheck);
        window.addEventListener("pageshow", requestSectionRevealCheck);
      } catch {
        // Leave the progressive-enhancement class unset: every section remains visible.
      }
    }
  }
})();
