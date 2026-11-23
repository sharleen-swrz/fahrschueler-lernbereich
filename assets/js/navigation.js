const menuButton = document.querySelector(".mobile-menu-button");
const mobileMenu = document.querySelector(".mobile-drawer");

menuButton.addEventListener("click", () => mobileMenu.showModal());
mobileMenu.querySelector(".drawer-close").addEventListener("click", () => mobileMenu.close());

mobileMenu.addEventListener("click", event => {
  if (event.target !== mobileMenu) return;

  const rect = mobileMenu.getBoundingClientRect();
  if (
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom
  ) {
    mobileMenu.close();
  }
});

mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => mobileMenu.close());
});

window.matchMedia("(max-width: 700px)").addEventListener("change", event => {
  if (!event.matches && mobileMenu.open) mobileMenu.close();
});

// Restore an unobstructed page when navigating back from another HTML page.
window.addEventListener("pageshow", () => {
  if (mobileMenu.open) mobileMenu.close();
});
