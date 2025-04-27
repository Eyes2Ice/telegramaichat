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
      nextEl: ".features__next",
      prevEl: ".features__prev",
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
      nextEl: ".testimonials__next",
      prevEl: ".testimonials__prev",
    },

    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
  });

  // ================FAQ Accordion=====================

  const accordionLists = document.querySelectorAll(".accordion__list");

  accordionLists.forEach((el) => {
    el.addEventListener("click", (e) => {
      const accordionList = e.currentTarget;
      const accordionControl = e.target.closest(".accordion__list-control");
      if (!accordionControl) return;
      e.preventDefault();
      const accordionItem = accordionControl.parentElement;
      const accordionContent = accordionControl.nextElementSibling;

      accordionItem.classList.toggle("accordion__list-item--opened");

      if (accordionItem.classList.contains("accordion__list-item--opened")) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      } else {
        accordionContent.style.maxHeight = null;
      }
    });
  });
})();
