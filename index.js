console.log('Iniciando, de como fazer o movimento de hover em 2 elementos ao mesmo tempo');


    //Phone 1
    const hoverIcone1 = document.querySelector('.list-step1');
    const hoverPhone1 = document.getElementById('phone1');

    hoverIcone1.addEventListener('mouseover', () => {
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
        hoverPhone3.src = './img/App1-Estado2.svg';

        hoverPhone1.style.opacity = 1;
        hoverPhone2.style.opacity = 1;
    })



