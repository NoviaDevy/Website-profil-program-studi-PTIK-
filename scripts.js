const topbar = document.getElementById("topbar");
const mainNavbar = document.getElementById("mainNavbar");
const navLinks = document.querySelectorAll(".nav-custom");
const topbarLinks = document.querySelectorAll(".topbar .top-links a");
const idBtn = document.getElementById("idBtn");
const enBtn = document.getElementById("enBtn");

// SCROLL BEHAVIOR
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 50) {
    if (topbar) topbar.classList.add("hide");
    if (mainNavbar) mainNavbar.classList.add("scrolled");
  } else {
    if (topbar) topbar.classList.remove("hide");
    if (mainNavbar) mainNavbar.classList.remove("scrolled");
  }
});

// NAVBAR ACTIVE LINK
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  });
});

// TOPBAR ACTIVE LINK
topbarLinks.forEach((link) => {
  link.addEventListener("click", function () {
    topbarLinks.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  });
});

// LANGUAGE SWITCH
function setLanguage(lang) {
  document.documentElement.lang = lang;

  const elements = document.querySelectorAll("[data-id][data-en]");
  elements.forEach((el) => {
    el.innerText = lang === "id" ? el.dataset.id : el.dataset.en;
  });

  if (lang === "id") {
    idBtn.classList.add("active-lang");
    enBtn.classList.remove("active-lang");
  } else {
    enBtn.classList.add("active-lang");
    idBtn.classList.remove("active-lang");
  }
}

idBtn.addEventListener("click", () => setLanguage("id"));
enBtn.addEventListener("click", () => setLanguage("en"));

// Default
setLanguage("id");