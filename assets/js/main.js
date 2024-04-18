function goToAnchor(id) {
  const element = document.getElementById(id);
  if (!element) return console.error("Anchor not found: " + id);

  element.scrollIntoView({ behavior: "smooth" });
}

function copy(text) {
  navigator.clipboard.writeText(text);

  try {
    switch (text) {
      case "@lightandy":
        alert(`Discord tag was copied to your clipboard.`);
        break;

      default:
        alert(`Successfully copied ${text}`);
        break;
    }
  } catch (error) {
    console.error(error);
  }
}
