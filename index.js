console.log('Iniciando, de como fazer o movimento de hover em 2 elementos ao mesmo tempo');

    //Opção 1
    const hoverIcone1 = document.querySelector('.list-step1');
    
    //Icone e Imagem mudando pra imagem 2
    hoverIcone1.addEventListener('mouseover', () => {
        function teste1(){
            document.querySelector(".list-step1").style.marginLeft = "24px";
        }
        teste1();
    })

    //Icone e Imagem voltando para imagem 1
    hoverIcone1.addEventListener('mouseout', () => {
        function teste2(){
            document.querySelector(".list-step1").style.marginLeft = "0px";
        }
        teste2();
    })


    //Opção 2
    const hoverIcone2 = document.querySelector('.list-step2');
    
        //Icone e Imagem mudando pra imagem 2
        hoverIcone2.addEventListener('mouseover', () => {
            function teste3(){
                document.querySelector(".list-step2").style.marginLeft = "24px";
            }
            teste3();
        })
    
        //Icone e Imagem voltando para imagem 1
        hoverIcone2.addEventListener('mouseout', () => {
            function teste4(){
                document.querySelector(".list-step2").style.marginLeft = "0px";
            }
            teste4();
        })


    //Opção 3
    const hoverIcone3 = document.querySelector('.list-step3');
    
        //Icone e Imagem mudando pra imagem 2
        hoverIcone3.addEventListener('mouseover', () => {
            function teste5(){
                document.querySelector(".list-step3").style.marginLeft = "24px";
            }
            teste5();
        })
    
        //Icone e Imagem voltando para imagem 1
        hoverIcone3.addEventListener('mouseout', () => {
            function teste6(){
                document.querySelector(".list-step3").style.marginLeft = "0px";
            }
            teste6();
        })

        // const hoverImagem1 = document.querySelector('.step1');
        // const hoverImagem2 = document.querySelector('.step2');
        // const hoverImagem3 = document.querySelector('.step3');
        /* 
            hoverImagem1.addEventListener('mouseover', () => {
                function Teste3(){
                    document.querySelector(".hoverImagem").src = "./img/Tela1-2.png";
                }
                Teste3();
            })
        */
        /* 
        hoverImagem1.addEventListener('mouseover', () => {
            function Teste4(){
                document.querySelector(".hoverImagem").src = './img/Tela1-1.png';
            }
            Teste4();
        })
    */