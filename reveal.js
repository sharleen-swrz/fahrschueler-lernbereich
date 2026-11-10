const boxes = document.querySelectorAll(".intro-box");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -40% 0px", threshold: 0 });
  document.querySelector(".intro-boxes").classList.add("reveal-ready");
  boxes.forEach(box => observer.observe(box));
}
