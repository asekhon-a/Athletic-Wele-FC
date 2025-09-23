// ===== BACK TO TOP BUTTON =====
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== TEAM OVERVIEW SLIDER =====
const teamSlides = document.querySelectorAll(".team-slider .slide");
const teamPrev = document.querySelector(".team-slider .prev");
const teamNext = document.querySelector(".team-slider .next");
let teamIndex = 0;

function showTeamSlide(n) {
  teamSlides.forEach((slide, i) => {
    slide.style.display = i === n ? "block" : "none";
  });
}

teamPrev.addEventListener("click", () => {
  teamIndex = (teamIndex - 1 + teamSlides.length) % teamSlides.length;
  showTeamSlide(teamIndex);
});

teamNext.addEventListener("click", () => {
  teamIndex = (teamIndex + 1) % teamSlides.length;
  showTeamSlide(teamIndex);
});

// Initialize first slide
showTeamSlide(teamIndex);

// ===== ACHIEVEMENTS SLIDER =====
const achSlides = document.querySelectorAll(".carousel-item");
const achPrev = document.getElementById("prev");
const achNext = document.getElementById("next");
let achIndex = 0;

function showAchSlide(n) {
  achSlides.forEach((slide, i) => {
    slide.classList.toggle("active", i === n);
  });
}

achPrev.addEventListener("click", () => {
  achIndex = (achIndex - 1 + achSlides.length) % achSlides.length;
  showAchSlide(achIndex);
});

achNext.addEventListener("click", () => {
  achIndex = (achIndex + 1) % achSlides.length;
  showAchSlide(achIndex);
});

// Initialize first achievement
showAchSlide(achIndex);
