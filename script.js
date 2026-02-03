let heartsInterval = null;

function enterSite() {
  // Start music (must be triggered by user interaction)
  const music = document.getElementById("bgMusic");
  music.volume = 0.4;
  music.play().catch(() => {});

  // Reveal menu + hide overlay with animation
  const gate = document.getElementById("heartGate");
  const content = document.getElementById("content");

  gate.classList.add("fade-out");
  content.classList.add("show");
  content.setAttribute("aria-hidden", "false");

  // Remove overlay after fade
  setTimeout(() => gate.remove(), 450);

  // Start floating hearts AFTER entering (optional, feels nicer)
  startFloatingHearts();
}

function yes() {
  document.getElementById("content").innerHTML = `
    <h1>Ta haj zemren un ty 💖</h1>
    <p>I dija qe do ishim bashk gjithmon 😌</p>
    <p>Tani aram into edate shpejt 🍷✨</p>
  `;
}

function no(event) {
  const btn = event.target;
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 200 - 100;
  btn.style.transform = `translate(${x}px, ${y}px)`;
}

function startFloatingHearts() {
  if (heartsInterval) return;

  heartsInterval = setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
  }, 300);
}
