(function () {
  // ================Burger=====================

  document.addEventListener("click", burgerInit);

  function burgerInit(e) {
    const burgerIcon = e.target.closest(".burger-icon");
    const burgerNavLink = e.target.closest(".nav__link");

    if (!burgerIcon && !burgerNavLink) return;
    if (document.documentElement.clientWidth > 900) return;

    if (!document.body.classList.contains("body--opened-menu")) {
      document.body.classList.add("body--opened-menu");
    } else {
      document.body.classList.remove("body--opened-menu");
    }
  }

  // ================Features slider=====================

  const featuresSlider = new Swiper(".features__slider", {
    spaceBetween: 15,
    speed: 1000,
    slidesPerView: 1,
    initialSlide: 0,

    navigation: {
      nextEl: ".next-button",
      prevEl: ".prev-button",
    },

    pagination: {
      el: ".features__pagination",
      clickable: true,
      dynamicBullets: true,
    },
  });

  // ================Results slider=====================

  new Swiper(".testimonials__slider", {
    spaceBetween: 15,
    speed: 1000,
    slidesPerView: 1,
    initialSlide: 0,

    navigation: {
      nextEl: ".next-button",
      prevEl: ".prev-button",
    },
  });
})();
