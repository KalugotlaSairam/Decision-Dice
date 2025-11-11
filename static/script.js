// Show only one section at a time
function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  const section = document.getElementById(id);
  if (section) {
    section.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    console.error("Section not found:", id);
  }
}

// Selected mode variable
let mode = "";

// Select mode (coin/dice) and render inputs
function selectMode(type) {
  mode = type;
  const optionsContainer = document.getElementById("optionsContainer");
  const optionFields = document.getElementById("optionFields");
  const resultEl = document.getElementById("result");
  resultEl.innerHTML = "";
  optionsContainer.style.display = "block";

  // hide other button
  if (type === "coin") {
    const d = document.getElementById("diceBtn");
    if (d) d.style.display = "none";
  } else {
    const c = document.getElementById("coinBtn");
    if (c) c.style.display = "none";
  }

  // create fields: 2 for coin, 6 for dice
  const total = type === "coin" ? 2 : 6;
  let html = "";
  for (let i = 1; i <= total; i++) {
    html += `<input type="text" class="optionInput" id="opt${i}" placeholder="Option ${i}"><br>`;
  }
  optionFields.innerHTML = html;
}

// Decide button handler
function makeDecision() {
  const inputs = Array.from(document.querySelectorAll('.optionInput'));
  const options = inputs.map(i => i.value.trim()).filter(v => v !== "");

  if (options.length < 2) {
    alert("Please enter at least 2 options.");
    return;
  }

  const idx = Math.floor(Math.random() * options.length);
  const resultEl = document.getElementById("result");

  // Show temporary rolling text (optional effect)
  resultEl.innerHTML = "🎲 Rolling...";
  resultEl.style.display = "block";

  // Small delay for realistic feel
  setTimeout(() => {
    resultEl.innerHTML = `🎯 Result: <span>${options[idx]}</span>`;
    resultEl.style.display = "block";

    // 👇 Important: scroll result into view on mobile
    resultEl.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 700);
}


// Reset everything
function resetGame() {
  const optionFields = document.getElementById("optionFields");
  if (optionFields) optionFields.innerHTML = "";
  const optionsContainer = document.getElementById("optionsContainer");
  if (optionsContainer) optionsContainer.style.display = "none";
  document.getElementById("result").innerHTML = "";
  const coinBtn = document.getElementById("coinBtn");
  const diceBtn = document.getElementById("diceBtn");
  if (coinBtn) coinBtn.style.display = "inline-block";
  if (diceBtn) diceBtn.style.display = "inline-block";
  mode = "";
}

// ensure home shows on page load
document.addEventListener("DOMContentLoaded", () => {
  showSection("home");
});
