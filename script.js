let restoredArea = 0;
let donatedMoney = 0;
const progressGoal = 200;

function donate() {
  donatedMoney += 10;
  restoredArea += 5;
  const counter = document.getElementById("counter");
  const moneyRaised = document.getElementById("moneyRaised");
  const areaRestored = document.getElementById("areaRestored");
  const progressFill = document.getElementById("progressFill");
  const progressPercent = Math.min((restoredArea / progressGoal) * 100, 100);

  if (counter) {
    counter.textContent = `${restoredArea} m^2`;
  }

  if (moneyRaised) {
    moneyRaised.textContent = `$${donatedMoney}`;
  }

  if (areaRestored) {
    areaRestored.textContent = `${restoredArea} m^2`;
  }

  if (progressFill) {
    progressFill.style.width = `${progressPercent}%`;
  }
}

const navbar = document.getElementById("navbar");
let previousScroll = window.pageYOffset;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (navbar) {
    const hideNav = currentScroll > previousScroll && currentScroll > 90;
    navbar.classList.toggle("nav-hidden", hideNav);
  }

  previousScroll = currentScroll;
});

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.18
});

reveals.forEach((item) => {
  revealObserver.observe(item);
});
