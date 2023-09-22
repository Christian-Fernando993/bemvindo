//Evento de Hover das imagens iPhone

//Phone 1
const hoverIcone1 = document.querySelector('.list-step1');
const hoverPhone1 = document.getElementById('phone1');

hoverIcone1.addEventListener('mouseover', (event) => {
    hoverIcone1.style.marginLeft = "24px";
    hoverPhone1.src = './img/s-step_by_step/App1-Estado2.svg';

    hoverPhone2.style.opacity = 0.3;
    hoverPhone3.style.opacity = 0.3;

})

hoverIcone1.addEventListener('mouseout', () => {
    hoverIcone1.style.marginLeft = "0px";
    hoverPhone1.src = './img/s-step_by_step/App1-Estado1.svg';

    hoverPhone2.style.opacity = 1;
    hoverPhone3.style.opacity = 1;

})

//Phone 2
const hoverIcone2 = document.querySelector('.list-step2');
const hoverPhone2 = document.getElementById('phone2');

hoverIcone2.addEventListener('mouseover', () => {
    hoverIcone2.style.marginLeft = "24px";
    hoverPhone2.src = './img/s-step_by_step/App2-Estado2.svg';

    hoverPhone1.style.opacity = 0.3;
    hoverPhone3.style.opacity = 0.3;

})

hoverIcone2.addEventListener('mouseout', () => {
    hoverIcone2.style.marginLeft = "0px";
    hoverPhone2.src = './img/s-step_by_step/App2-Estado1.svg';

    hoverPhone1.style.opacity = 1;
    hoverPhone3.style.opacity = 1;
})

//Phone 3
const hoverIcone3 = document.querySelector('.list-step3');
const hoverPhone3 = document.getElementById('phone3');

hoverIcone3.addEventListener('mouseover', () => {
    hoverIcone3.style.marginLeft = "24px";
    hoverPhone3.src = './img/s-step_by_step/App3-Estado2.svg';

    hoverPhone1.style.opacity = 0.3;
    hoverPhone2.style.opacity = 0.3;
})

hoverIcone3.addEventListener('mouseout', () => {
    hoverIcone3.style.marginLeft = "0px";
    hoverPhone3.src = './img/s-step_by_step/App3-Estado1.svg';

    hoverPhone1.style.opacity = 1;
    hoverPhone2.style.opacity = 1;
})



//Evento de abrir modal do Video Institucional
const botaoAbrir = document.querySelector('[data-modal="abrir"]');
const botaoFechar = document.querySelector('[data-modal="fechar"]');
const containerModal = document.querySelector('[data-modal="container"]');

if (botaoAbrir && botaoFechar && containerModal) {
    function toggleModal(event) {
        event.preventDefault();
        containerModal.classList.toggle('ativo');
    }

    function cliqueForaModal(event) {
        if (event.target === this) {
            toggleModal(event);
        }
    }

    botaoAbrir.addEventListener('click', toggleModal);
    botaoFechar.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', cliqueForaModal)
}




//Swiper Slide da Sede
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 16,
        },
        780: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 32,
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 32,
        }
    },
});


//Swiper Slide Dos Influenciadores
var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 4,
    spaceBetween: 32,
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
            slidesPerView: 1,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        1100: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1440: {
            slidesPerView: 4,
            spaceBetween: 32,
        },
    },
});


//Possivel Swiper Slide Mokup iPhone
// var swiper5 = new Swiper5(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 18,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     breakpoints: {
//         480: {
//         slidesPerView: 1,
//         // spaceBetween: 16, 
//         },
//     },
// });






const abrirVideoInfluenciador1 = document.querySelector('[data-modal="abrirVideoInfluenciador1"]');
const botaoFecharVideoInfluenciador1 = document.querySelector('[data-modal="fecharVideoInfluenciador1"]');
const containerModalVideoInfluenciador1 = document.querySelector('[data-modal="containerVideoInfluenciador1"]');

if(abrirVideoInfluenciador1 && botaoFecharVideoInfluenciador1 && containerModalVideoInfluenciador1) {
    function toggleModalVideoInfluenciador1(event){
        event.preventDefault();
        containerModalVideoInfluenciador1.classList.toggle('ativo');
    }

    function clickForaModalInfluenciador1(event){
       if (event.target === this){
           toggleModalVideoInfluenciador1(event);
       }
    }

    abrirVideoInfluenciador1.addEventListener('click', toggleModalVideoInfluenciador1);
    botaoFecharVideoInfluenciador1.addEventListener('click', toggleModalVideoInfluenciador1);
    containerModalVideoInfluenciador1.addEventListener('click', clickForaModalInfluenciador1)
}

const abrirVideoInfluenciador2 = document.querySelector('[data-modal="abrirVideoInfluenciador2"]');
const botaoFecharVideoInfluenciador2 = document.querySelector('[data-modal="fecharVideoInfluenciador2"]');
const containerModalVideoInfluenciador2 = document.querySelector('[data-modal="containerVideoInfluenciador2"]');

if(abrirVideoInfluenciador2 && botaoFecharVideoInfluenciador2 && containerModalVideoInfluenciador2) {
    function toggleModalVideoInfluenciador2(event){
        event.preventDefault();
        containerModalVideoInfluenciador2.classList.toggle('ativo');
    }

    function clickForaModalInfluenciador2(event){
       if (event.target === this){
           toggleModalVideoInfluenciador2(event);
       }
    }

    abrirVideoInfluenciador2.addEventListener('click', toggleModalVideoInfluenciador2);
    botaoFecharVideoInfluenciador2.addEventListener('click', toggleModalVideoInfluenciador2);
    containerModalVideoInfluenciador2.addEventListener('click', clickForaModalInfluenciador2)
}

const abrirVideoInfluenciador3 = document.querySelector('[data-modal="abrirVideoInfluenciador3"]');
const botaoFecharVideoInfluenciador3 = document.querySelector('[data-modal="fecharVideoInfluenciador3"]');
const containerModalVideoInfluenciador3 = document.querySelector('[data-modal="containerVideoInfluenciador3"]');

if(abrirVideoInfluenciador3 && botaoFecharVideoInfluenciador3 && containerModalVideoInfluenciador3) {
    function toggleModalVideoInfluenciador3(event){
        event.preventDefault();
        containerModalVideoInfluenciador3.classList.toggle('ativo');
    }

    function clickForaModalInfluenciador3(event){
       if (event.target === this){
           toggleModalVideoInfluenciador3(event);
       }
    }

    abrirVideoInfluenciador3.addEventListener('click', toggleModalVideoInfluenciador3);
    botaoFecharVideoInfluenciador3.addEventListener('click', toggleModalVideoInfluenciador3);
    containerModalVideoInfluenciador3.addEventListener('click', clickForaModalInfluenciador3)
}

const abrirVideoInfluenciador4 = document.querySelector('[data-modal="abrirVideoInfluenciador4"]');
const botaoFecharVideoInfluenciador4 = document.querySelector('[data-modal="fecharVideoInfluenciador4"]');
const containerModalVideoInfluenciador4 = document.querySelector('[data-modal="containerVideoInfluenciador4"]');

if(abrirVideoInfluenciador4 && botaoFecharVideoInfluenciador4 && containerModalVideoInfluenciador4) {
    function toggleModalVideoInfluenciador4(event){
        event.preventDefault();
        containerModalVideoInfluenciador4.classList.toggle('ativo');
    }

    function clickForaModalInfluenciador4(event){
       if (event.target === this){
           toggleModalVideoInfluenciador4(event);
       }
    }

    abrirVideoInfluenciador4.addEventListener('click', toggleModalVideoInfluenciador4);
    botaoFecharVideoInfluenciador4.addEventListener('click', toggleModalVideoInfluenciador4);
    containerModalVideoInfluenciador4.addEventListener('click', clickForaModalInfluenciador4)
}


const abrirVideoInfluenciador5 = document.querySelector('[data-modal="abrirVideoInfluenciador5"]');
const botaoFecharVideoInfluenciador5 = document.querySelector('[data-modal="fecharVideoInfluenciador5"]');
const containerModalVideoInfluenciador5 = document.querySelector('[data-modal="containerVideoInfluenciador5"]');

if(abrirVideoInfluenciador5 && botaoFecharVideoInfluenciador5 && containerModalVideoInfluenciador5) {
    function toggleModalVideoInfluenciador5(event){
        event.preventDefault();
        containerModalVideoInfluenciador5.classList.toggle('ativo');
    }

    function clickForaModalInfluenciador5(event){
       if (event.target === this){
           toggleModalVideoInfluenciador5(event);
       }
    }

    abrirVideoInfluenciador5.addEventListener('click', toggleModalVideoInfluenciador5);
    botaoFecharVideoInfluenciador5.addEventListener('click', toggleModalVideoInfluenciador5);
    containerModalVideoInfluenciador5.addEventListener('click', clickForaModalInfluenciador5)
}

