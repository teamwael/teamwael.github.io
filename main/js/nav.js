/* navbar functionality */

const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar .nav-item .nav-link");
const pages = document.querySelectorAll(".page");
const navIndicators = document.querySelectorAll(".indicator-nav div");

function set() {
  navIndicators.forEach((el, index) => {
    if (index !== 4) {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        pages[index].scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      });
    }
  });
}

function handleScroll() {
    if (window.document.body.scrollTop <= 30 && window.innerWidth > 700) {
    navbar.classList.remove("on-scroll");
    } else {
    navbar.classList.add("on-scroll");
  }
}

let ind = NaN;
function visibilityNavbar() {
    let newScroll = window.scrollY;
    if (newScroll > ind && window.scrollY > 0 && window.innerWidth > 700) {
    navbar.classList.add("disapeear");
  } else {
    navbar.classList.remove("disapeear");
  }
  ind = window.scrollY;
}

function indicateActive() {
  pages.forEach((el, index) => {
    let elBoundary = el.getBoundingClientRect();
    if (elBoundary.top <= 200 && elBoundary.top >= -300) {
      navLinks.forEach((el1, num) => {
        el1.classList.remove("active");
        if (num !== 4) {
          navIndicators[num]?.classList?.remove("active");
        }
      });
      navIndicators[index]?.classList?.add("active");
      navLinks[index]?.classList?.add("active");
    }
  });
}


window.addEventListener("load", (e) => {
  set();
});

window.document.body.addEventListener("scroll", (e) => {
  handleScroll();
  indicateActive();
  visibilityNavbar();
});

window.addEventListener("load", (e) => {
  handleScroll();
  indicateActive();
  visibilityNavbar();
});
