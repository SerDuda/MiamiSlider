const sliderMain = new Swiper('.slider_main', {
    freeMode: true,
    mousewheel: true,
    parallax: true,
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        700: {
            slidesPerView: 3.5,
            spaceBetween: 60
        },
    }
  });

const sliderBg = new Swiper('.slider_bg', {
    parallax: true,
    centeredSlides: true,
    slidesPerView: 3.5,
    spaceBetween: 60

});

// bundle
sliderMain.controller.control = sliderBg

document.querySelectorAll('.slider__item').forEach(item => {
    item.addEventListener('click', event => {
        item.classList.toggle('opened');
    })
})

let desc = document.querySelector('.description');
sliderMain.on('slideChange', e => {
    sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden')
})