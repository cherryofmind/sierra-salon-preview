const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const menuButton = document.querySelector("[data-menu]");

const syncHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuButton.setAttribute("aria-label", isOpen ? "Закрыть меню" : "Открыть меню");
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    nav.classList.remove("is-open");
    menuButton?.setAttribute("aria-label", "Открыть меню");
  }
});

const revealItems = document.querySelectorAll(".section, .offer-card, .service-card, .book");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => {
  item.classList.add("reveal");
  revealObserver.observe(item);
});

(function loadYclients() {
  if (window.matchMedia("(max-width: 980px)").matches) {
    return;
  }

  const script = document.createElement("script");
  script.src = "https://w2114769.yclients.com/widgetJS";
  script.async = true;
  document.body.appendChild(script);

  script.addEventListener("load", () => {
    if (window.YWidget) {
      window.YWidget.show({
        company_id: 2114769,
        button: {
          show: true,
          position: "right",
          text: "Записаться",
          color: "#ff6b4a"
        }
      });
    }
  });
})();
