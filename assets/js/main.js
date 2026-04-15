(() => {
  const header = document.querySelector("[data-header]");
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");
  const navLinks = Array.from(document.querySelectorAll(".site-nav__link"));

  const setNavOpen = (open) => {
    if (!header || !navToggle) return;
    header.dataset.open = open ? "true" : "false";
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  };

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => setNavOpen(header?.dataset.open !== "true"));

    document.addEventListener("click", (e) => {
      if (!header?.dataset.open || header.dataset.open !== "true") return;
      const target = e.target;
      if (!(target instanceof Node)) return;
      if (header.contains(target)) return;
      setNavOpen(false);
    });

    nav.addEventListener("click", (e) => {
      const target = e.target;
      if (!(target instanceof HTMLElement)) return;
      if (target.closest("a")) setNavOpen(false);
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
})();
