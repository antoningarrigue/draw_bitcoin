# Draw Bitcoin UI Replica

A static pixel-style UI rebuilt from `assets/WEB FINAL.png`.

## Run locally

Open `index.html` directly in a browser, or serve with a tiny static server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Overlay compare workflow

- Press **O** to toggle screenshot overlay opacity between 0% and 50%.
- The overlay uses `assets/WEB FINAL.png`, aligned to the top-left of the fixed-size UI frame.
- Press **R** to toggle the 8px debug ruler grid.

## Pixel matching checklist

1. Set browser zoom to **100%**.
2. Center the UI in the viewport (already done by CSS).
3. Toggle **O** on and off repeatedly and adjust styles if edges/text drift.
4. Toggle **R** to verify spacing and 8px rhythm alignment.
