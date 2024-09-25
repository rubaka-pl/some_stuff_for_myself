let slidesToShow = 4; //default

if (window.innerWidth < 768) {
  slidesToShow = 2;
}

const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 5000,
  },
  // Optional parameters
  direction: "horizontal",
  loop: true,
  centeredSlides: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  loop: true,
});

const swiperAnimeThumbs = new Swiper(".swiper2", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
    draggable: true,
    centeredSlides: true,
  },
  slidesPerView: 4,
  spaceBetween: 25,
  centeredSlides: false,
});

document.addEventListener("DOMContentLoaded", function () {
  const slideIndicators = document.querySelectorAll(".slide-indicator");
  const homeSlider = new Swiper(".home-slider", {
    centeredSlides: true,
    autoplay: {
      delay: 80000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  slideIndicators.forEach((indicator, index) => {
    indicator.addEventListener("click", function () {
      homeSlider.slideTo(index + 1);
    });
  });

  // Код для обработки клика по кнопке swiper-button

  let menu = document.querySelector("#menu-bars");
  let navbar = document.querySelector(".navbar");

  menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
  };
});

//infinity icon
const infinity = document.getElementById("infinity");
infinity.addEventListener("mouseover", () => {
  infinity.style.animation = "moveInfinity 10s linear infinite";
});

infinity.addEventListener("mouseout", () => {
  infinity.style.animation = "none";
});

//youtube player

$(".video__a").on("click", function (e) {
  e.preventDefault();

  var self = $(this);
  var videoSrc = self.attr("href");
  var videoId = videoSrc.substr(videoSrc.length - 11) + "?rel=0&autoplay=1";

  self.find("img").css("z-index", "0");
  self.find("iframe").attr("src", "https://www.youtube.com/embed/" + videoId);
});

//screens

const images = document.querySelectorAll(".screenshots-content img");
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img01");
