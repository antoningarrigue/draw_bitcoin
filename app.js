const grid = document.getElementById('pixel-grid');
const overlay = document.getElementById('overlay');
const ruler = document.getElementById('ruler');

for (let i = 0; i < 32 * 32; i += 1) {
  const cell = document.createElement('div');
  grid.appendChild(cell);
}

let overlayOn = false;
let rulersOn = false;

window.addEventListener('keydown', (event) => {
  if (event.key.toLowerCase() === 'o') {
    overlayOn = !overlayOn;
    overlay.style.opacity = overlayOn ? '0.5' : '0';
  }

  if (event.key.toLowerCase() === 'r') {
    rulersOn = !rulersOn;
    ruler.style.opacity = rulersOn ? '1' : '0';
  }
});
