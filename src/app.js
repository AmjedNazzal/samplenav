let swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    bulletClass: "swiper-pagination-bullet",
    bulletActiveClass: "swiper-pagination-bullet-active",
  },
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-20%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  on: {
    touchMove: function () {
      this.allowSlideNext = false;
      this.allowSlidePrev = false;
    },
    touchEnd: function () {
      this.allowSlideNext = true;
      this.allowSlidePrev = true;
      if (this.swipeDirection === "next") {
        this.slideNext();
      } else if (this.swipeDirection === "prev") {
        this.slidePrev();
      }
    },
    init: function () {
      const activeSlideContents = document.querySelectorAll(
        ".swiper-slide-active .slide-content"
      );
      activeSlideContents.forEach((el) => {
        el.classList.add("slide-up");
      });
    },
    slideChangeTransitionStart: function () {
      document
        .querySelectorAll(".swiper-slide .slide-content")
        .forEach((el) => {
          el.classList.remove("slide-up");
        });
      const activeSlideContents = document.querySelectorAll(
        ".swiper-slide-active .slide-content"
      );
      activeSlideContents.forEach((el) => {
        el.classList.add("slide-up");
      });
    },
  },
});

document.querySelector(".hamburger-button").addEventListener("click", () => {
  document.querySelector(".mobile-nav").classList.add("show");
});

document.querySelector(".close-btn").addEventListener("click", () => {
  document.querySelector(".mobile-nav").classList.remove("show");
});
