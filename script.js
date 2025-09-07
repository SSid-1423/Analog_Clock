const hr = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const digitalClock = document.getElementById("digitalClock");
const themeToggle = document.getElementById("themeToggle");

function updateClock() {
  const now = new Date();
  const hh = now.getHours();
  const mm = now.getMinutes();
  const ss = now.getSeconds();
  const ms = now.getMilliseconds();

  // Smooth rotation for hands
  const hRotation = 30 * hh + mm / 2 + ss / 120;
  const mRotation = 6 * mm + ss / 10;
  const sRotation = 6 * ss + ms * 0.006;

  hr.style.transform = `rotate(${hRotation}deg)`;
  min.style.transform = `rotate(${mRotation}deg)`;
  sec.style.transform = `rotate(${sRotation}deg)`;

  // Digital Clock
  const formatTime = (num) => String(num).padStart(2, "0");
  const ampm = hh >= 12 ? "PM" : "AM";
  const displayH = hh % 12 || 12;
  digitalClock.textContent = `${formatTime(displayH)}:${formatTime(mm)}:${formatTime(ss)} ${ampm}`;
}

// Smooth update at ~60fps
setInterval(updateClock, 16);
updateClock();

// Dark/Light Mode Toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeToggle.textContent = document.body.classList.contains("light")
    ? "🌞 Light Mode"
    : "🌙 Dark Mode";
});
