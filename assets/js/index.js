// menu start
const menuBar = document.querySelector(".menu-bar");
const header = document.querySelector("header");
const closeBtn = document.querySelector(".close-btn");
const menuWrapper = document.querySelector(".header__menu-wrapper");

const handleMenu = () => {
  header.classList.toggle("active");
};

const closeMenuIfClickedOutside = (e) => {
  if (!menuWrapper.contains(e.target) && !menuBar.contains(e.target)) {
    header.classList.remove("active");
  }
};

menuBar.addEventListener("click", handleMenu);
closeBtn.addEventListener("click", handleMenu);
window.addEventListener("click", closeMenuIfClickedOutside);
// menu end

// INITIALIZATION SWIPER HEADER
const swiper = new Swiper(".swiper-header", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 500,

  autoplay: {
    delay: 3000, // Автовоспроизведение каждые 5 секунд
  },

  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});