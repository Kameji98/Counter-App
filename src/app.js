let value = 0;

function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
}

function render() {
  document.getElementById("count").textContent = String(value);
}

function main() {
  const incBtn = document.getElementById("incBtn");
  const decBtn = document.getElementById("decBtn");
  const resetBtn = document.getElementById("resetBtn");

  incBtn.addEventListener("click", () => {
    value = clamp(value + 1, -999999, 999999);
    render();
  });

  decBtn.addEventListener("click", () => {
    value = clamp(value - 1, -999999, 999999);
    render();
  });

  resetBtn.addEventListener("click", () => {
    value = 0;
    render();
  });

  render();
}

main();
