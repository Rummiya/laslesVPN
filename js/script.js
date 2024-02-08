const swiper = new Swiper('.swiper', {

    // Optional parameters
    speed: 1000,
    slidesPerView: 2.47,
    autoHight: true,
    loop: true,
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
  
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },   

    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 480px
        700: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // when window width is >= 640px
        1000: {
          slidesPerView: 2.47,
          spaceBetween: 60,
        }
      }
});

const swiperBtnPrev = document.querySelector('.swiper-button-prev');
const swiperBtnNext = document.querySelector('.swiper-button-next');

swiperBtnPrev.addEventListener('click', () => {
    if (swiperBtnPrev.classList.contains('active') == false) {
        swiperBtnPrev.classList.add('active');
        
        if (swiperBtnNext.classList.contains('active') == true) {
            swiperBtnNext.classList.remove('active');
        }
    } 
})

swiperBtnNext.addEventListener('click', () => {
    if (swiperBtnNext.classList.contains('active') == false) {
        swiperBtnNext.classList.add('active');
        
        if (swiperBtnPrev.classList.contains('active') == true) {
            swiperBtnPrev.classList.remove('active');
        }
    } 
})

const burger = document.querySelector('.header_burger');
const submenu = document.querySelector('.header_submenu');

burger.addEventListener('click', () => {
    if (submenu.classList.contains('is-active') == true) {
        submenu.classList.remove('is-active');
    } else {
        submenu.classList.add('is-active');
    }
})




const tarifCard1 = document.getElementById('tarif-card-1');
const selectBtn1 = document.getElementById('select-btn-1');

const tarifCard2 = document.getElementById('tarif-card-2');
const selectBtn2 = document.getElementById('select-btn-2');

const tarifCard3 = document.getElementById('tarif-card-3');
const selectBtn3 = document.getElementById('select-btn-3');

selectBtn1.addEventListener('mousemove', () => {
    tarifCard1.style.borderColor = 'red'
});

selectBtn1.addEventListener('mouseleave', () => {
    tarifCard1.style.borderColor = '#DDD'
})


selectBtn2.addEventListener('mousemove', () => {
    tarifCard2.style.borderColor = 'red'
});

selectBtn2.addEventListener('mouseleave', () => {
    tarifCard2.style.borderColor = '#DDD'
})


selectBtn3.addEventListener('mousemove', () => {
    tarifCard3.style.borderColor = 'red'
});

selectBtn3.addEventListener('mouseleave', () => {
    tarifCard3.style.borderColor = '#DDD'
})

