//Phone 1
const hoverIcone1 = document.querySelector('.list-step1');
const hoverPhone1 = document.getElementById('phone1');

hoverIcone1.addEventListener('mouseover', (event) => {
    hoverIcone1.style.marginLeft = "24px";
    hoverPhone1.src = './img/App1-Estado2.svg';

    hoverPhone2.style.opacity = 0.3;
    hoverPhone3.style.opacity = 0.3;

})

hoverIcone1.addEventListener('mouseout', () => {
    hoverIcone1.style.marginLeft = "0px";
    hoverPhone1.src = './img/App1-Estado1.svg';

    hoverPhone2.style.opacity = 1;
    hoverPhone3.style.opacity = 1;

})




//Phone 2
const hoverIcone2 = document.querySelector('.list-step2');
const hoverPhone2 = document.getElementById('phone2');

hoverIcone2.addEventListener('mouseover', () => {
    hoverIcone2.style.marginLeft = "24px";
    hoverPhone2.src = './img/App2-Estado2.svg';

    hoverPhone1.style.opacity = 0.3;
    hoverPhone3.style.opacity = 0.3;

})

hoverIcone2.addEventListener('mouseout', () => {
    hoverIcone2.style.marginLeft = "0px";
    hoverPhone2.src = './img/App2-Estado1.svg';

    hoverPhone1.style.opacity = 1;
    hoverPhone3.style.opacity = 1;
})

//Phone 3
const hoverIcone3 = document.querySelector('.list-step3');
const hoverPhone3 = document.getElementById('phone3');

hoverIcone3.addEventListener('mouseover', () => {
    hoverIcone3.style.marginLeft = "24px";
    hoverPhone3.src = './img/App3-Estado2.svg';

    hoverPhone1.style.opacity = 0.3;
    hoverPhone2.style.opacity = 0.3;
})

hoverIcone3.addEventListener('mouseout', () => {
    hoverIcone3.style.marginLeft = "0px";
    hoverPhone3.src = './img/App3-Estado1.svg';

    hoverPhone1.style.opacity = 1;
    hoverPhone2.style.opacity = 1;
})






//Encontrar o botao pra abrir o modal
const btn = document.querySelector('.btn2');
//Encontrar o modal do Video
const videoContainer = document.querySelector('.video-container2');
//Encontra o x quando o modal for aberto
const closer = document.querySelector('.close2');

btn.addEventListener('click', () => {
    console.log('Passei aqui 1');
    videoContainer.classList.add('show');
})

closer.addEventListener('click', () => {
    console.log('Passei aqui 2');
    videoContainer.classList.remove('show');
})






var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 3.5,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        320: {
        slidesPerView: 1,
        spaceBetween: 16, 
        },
        600: {
        slidesPerView: 2.3,
        spaceBetween: 15, 
        },
        1200: {
        slidesPerView: 3,
        spaceBetween: 32, 
        }
    },
});

var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    // spaceBetween: 32,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
        breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        480: {
            slidesPerView: 1.2,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15, 
        },
        1100:{
            slidesPerView: 2.2,
            spaceBetween: 15, 
        },
        1600: {
            slidesPerView: 3,
            spaceBetween: 32, 
        },
        2560: {
            slidesPerView: 4,
            spaceBetween: 32, 
        }
    },
});


var swiper = new Swiper(".mySwiper5", {
    slidesPerView: 3,
    // spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        480: {
        slidesPerView: 1,
        spaceBetween: 16, 
        },
    },
});