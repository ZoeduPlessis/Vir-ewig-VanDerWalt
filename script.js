const countdown = document.getElementById("countdown");
const weddingDate = new Date("2026-01-10T15:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = weddingDate - now;

  if (diff <= 0) {
    countdown.innerHTML = "Dis ons spesiale dag!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdown.innerHTML = `🕰️ Nog ${days} dae, ${hours} ure, ${minutes} minute, ${seconds} sekondes`;
}

setInterval(updateCountdown, 1000);
