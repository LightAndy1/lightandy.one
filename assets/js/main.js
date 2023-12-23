function goToAnchor(id) {
  const element = document.getElementById(id);
  if (!element) return console.error("Anchor not found: " + id);

  element.scrollIntoView({ behavior: "smooth" });
}

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 0) {
    header.style.opacity = 0.9;
  } else {
    header.style.opacity = 1;
  }
});
