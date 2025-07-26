// FONT SIZE ADJUSTER
let currentSize = 1;

function increaseFontSize() {
  currentSize += 0.1;
  document.body.style.fontSize = currentSize + "em";
}

function decreaseFontSize() {
  currentSize = Math.max(0.8, currentSize - 0.1);
  document.body.style.fontSize = currentSize + "em";
}




// THEME SWITCHER
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}