export const benefitsSlider = () => {
  const slider = new Swiper(".benefits-inner", {
    loop: true,
    speed: 400,
    slidesPerView: 1,
    navigation: {
      nextEl: ".benefits__arrow--right",
      prevEl: ".benefits__arrow--left",
    },
    breakpoints: {
      // when window width is >= 320px
      576: {
        slidesPerView: 3,
      },
    },
  });
};

export const serviceSlider = () => {
  const serviceSlider = new Swiper(".service-slider", {
    loop: true,
    speed: 400,
    slidesPerView: 1,
    navigation: {
      nextEl: ".services__arrow--right",
      prevEl: ".services__arrow--left",
    },
    breakpoints: {
      // when window width is >= 320px
      576: {
        slidesPerView: 2,
      },
    },
  });
};
