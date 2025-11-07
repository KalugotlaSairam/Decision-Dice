function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

let mode = "";

function selectMode(type) {
  mode = type;
  document.getElementById("optionsContainer").style.display = "block";
  document.getElementById("result").innerHTML = "";

  // Hide the other mode button
  if (type === "coin") {
      document.getElementById("diceBtn").style.display = "none";
  } else {
      document.getElementById("coinBtn").style.display = "none";
  }

  let fields = "";
  if (type === "coin") {
      for (let i = 1; i <= 2; i++) {
          fields += `<input type="text" placeholder="Option ${i}" class="optionInput"><br>`;
      }
  } else {
      for (let i = 1; i <= 6; i++) {
          fields += `<input type="text" placeholder="Option ${i}" class="optionInput"><br>`;
      }
  }
  document.getElementById("optionFields").innerHTML = fields;
}

function makeDecision() {
  const options = Array.from(document.querySelectorAll('.optionInput'))
      .map(input => input.value.trim())
      .filter(v => v !== "");

  if (options.length < 2) {
      alert("Please fill at least two options.");
      return;
  }

  const randomIndex = Math.floor(Math.random() * options.length);
  document.getElementById("result").innerHTML = `🎯 Result: <span>${options[randomIndex]}</span>`;
}

function resetGame() {
  document.getElementById("optionFields").innerHTML = "";
  document.getElementById("optionsContainer").style.display = "none";
  document.getElementById("result").innerHTML = "";
  document.getElementById("coinBtn").style.display = "inline-block";
  document.getElementById("diceBtn").style.display = "inline-block";
}
