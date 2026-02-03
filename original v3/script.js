function yes() {
  const music = document.getElementById("bgMusic");
  music.volume = 0.6;
  music.play().catch(() => {});

  document.getElementById("content").innerHTML = `
    <h1>Ta haj zemren un ty 💖</h1>
    <p>dija qe do ishim bashk gjithmon 😌</p>
    <p>Tani aram into edate shpejt 🍷✨</p>
  `;
}

function no(event) {
  const btn = event.target;
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 200 - 100;
  btn.style.transform = `translate(${x}px, ${y}px)`;
}

// Floating hearts
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}, 300);
