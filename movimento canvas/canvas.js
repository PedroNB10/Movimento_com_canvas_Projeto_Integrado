
var canvas = document.querySelector('canvas'); //funciona com o nome do elemento 
canvas.width = window.innerWidth;//insere no canva a largura da tela 
canvas.height = window.innerHeight //insere no canva a altura da tela
var c = canvas.getContext('2d'); // c é pincel do canva, ou seja o 'super object'

var ir_direita = false
var ir_esquerda = false
var inicio = true

var pular = false

var lado_do_quadrado = 20

var x = (window.innerWidth) / 2 - lado_do_quadrado//Posição inicial
var y = (window.innerHeight) / 2 - lado_do_quadrado

var altura_atual = (window.innerHeight) / 2 - lado_do_quadrado
var dx = 4; // velocidade do movimento (seria o aux)

var dy = 4

let contador = 0
var plataforma = false




var posy_plataforma = (window.innerHeight)*0.404 // para colocar em porcentagem precisa tirar a parte :/ 2 -60 e depois colocar um *0.35
var altura_inicial = (window.innerHeight)*0.5

var altura_da_plataforma = altura_inicial - posy_plataforma// em relação ao chao

var altura_do_pulo = altura_da_plataforma+lado_do_quadrado


var largura_plataforma = window.innerHeight * 0.03189
var comprimento_plataforma = window.innerWidth * 0.3018

function animate() {

    //    console.log(y)
    //    console.log(altura_da_plataforma)
    requestAnimationFrame(animate); //fica chamando a função animate
   

    if (x >= comprimento_plataforma && y >= (posy_plataforma-lado_do_quadrado)) { //y == 233.5
    
        
      plataforma = false
        y = altura_atual
        
    }




    if (ir_direita == true) {

        c.clearRect(0, 0, innerWidth, innerHeight)//(x,y, onde terminax, onde terminay) // Limpa a tela
        c.fillStyle = 'red'//cor de preenchimento do quadrado
        c.fillRect(x, y, lado_do_quadrado, lado_do_quadrado); //serve para falar as dimensões
        x = x + dx;


    }

    if (ir_direita == false) {

        c.clearRect(0, 0, innerWidth, innerHeight)//(x,y, onde terminax, onde terminay) // Limpa a tela
        c.fillStyle = 'red'//cor de preenchimento do quadrado
        c.fillRect(x, y, lado_do_quadrado, lado_do_quadrado); //serve para falar as dimensões



    }



    if (ir_esquerda == true) {

        c.clearRect(0, 0, innerWidth, innerHeight)//(x,y, onde terminax, onde terminay) // Limpa a tela
        c.fillStyle = 'red'//cor de preenchimento do quadrado
        c.fillRect(x, y, lado_do_quadrado, lado_do_quadrado); //serve para falar as dimensões
        x = x - dx;


    }

    if (ir_esquerda == false) {

        c.clearRect(0, 0, innerWidth, innerHeight)//(x,y, onde terminax, onde terminay) // Limpa a tela
        c.fillStyle = 'red'//cor de preenchimento do quadrado
        c.fillRect(x, y, lado_do_quadrado, lado_do_quadrado); //serve para falar as dimensões
    }

    if (pular == true) {


        if (y > posy_plataforma && x < comprimento_plataforma && plataforma == false) { //y <=293.5
            console.log(`posy plataforma:${posy_plataforma}`)
            y = posy_plataforma-lado_do_quadrado //isso resulta em um pulo mais alto ao ficar sobre a plaforma
                        //-20 para somar a altura do quadrado
            plataforma = true
        }

        c.clearRect(0, 0, innerWidth, innerHeight)//(x,y, onde terminax, onde terminay) // Limpa a tela
        c.fillStyle = 'red'//cor de preenchimento do quadrado
        c.fillRect(x, y, lado_do_quadrado, lado_do_quadrado); //serve para falar as dimensões

        y = y - altura_do_pulo;


        setTimeout(function () {
            c.clearRect(0, 0, innerWidth, innerHeight)//(x,y, onde terminax, onde terminay) // Limpa a tela
            c.fillStyle = 'red'//cor de preenchimento do quadrado
            c.fillRect(x, y, lado_do_quadrado, lado_do_quadrado); //serve para falar as dimensões
            y = y + altura_do_pulo;
        }, 250)







        pular = false


    }



    if (pular == true && ir_direita == false && ir_esquerda == false) {


        pular = false

    }





    if (pular == true && ir_direita == true) {

        ir_direita = false
        ir_esquerda = false
        pular = false

    }

    if (pular == true && ir_esquerda == true) {


        ir_direita = false
        ir_esquerda = false
        pular = false

    }


    c.fillStyle = 'yellow'//cor de preenchimento do quadrado
    c.fillRect(0, window.innerHeight*0.5, (window.innerWidth), lado_do_quadrado); //serve para falar as dimensões

    c.fillStyle = 'green'//cor de preenchimento do quadrado
    c.fillRect(0, posy_plataforma, comprimento_plataforma, lado_do_quadrado); //serve para falar as dimensões



}




document.addEventListener('keydown', tecla_direita_apertada, false);
document.addEventListener('keyup', tecla_direita_solta, false);

document.addEventListener('keydown', tecla_esquerda_apertada, false);
document.addEventListener('keyup', tecla_esquerda_solta, false);

document.addEventListener('keydown', tecla_pular_apertada, false);
document.addEventListener('keyup', tecla_pular_solta, false);

function tecla_pular_apertada(e) {

    if (e.keyCode == 32) {

        pular = true

    }
}

function tecla_pular_solta(e) {


    if (e.keyCode == 32) {

        pular = false
    }
}


function tecla_direita_apertada(e) {

    if (e.keyCode == 39) {

        ir_direita = true

    }
}

function tecla_direita_solta(e) {


    if (e.keyCode == 39) {

        ir_direita = false
    }
}

function tecla_esquerda_apertada(e) {

    if (e.keyCode == 37) {

        ir_esquerda = true

    }
}

function tecla_esquerda_solta(e) {

    if (e.keyCode == 37) {
        ir_esquerda = false

    }
}




animate();









// for (var quadrados = 0, posx = 50, posy = 30; quadrados < 10; quadrados++) {
//     c.fillStyle = 'red'//cor de preenchimento do quadrado
//     var altura = 100;
//     var comprimento = 100;
//     c.fillRect(posx, posy, altura, comprimento); //serve para falar as dimensões
//     posx = posx + 110;
//     console.log(`Total de quadrados:${quadrados}`)
// }

// for (var circulos = 0, posx = 100, posy = 200; circulos < 30; circulos++) {
//     if (circulos < 10) {
//         c.beginPath()//inicio do comando
//         c.arc(posx, posy, 50, 0, Math.PI * 2, false)  //c.arc (x, y, raio do circulo, angulo_inicial(em rad), angulo_final(em rad), anti_horario ou horario)
//         c.strokeStyle = "black" // cor do contorno
//         c.stroke()// inicia o contorno
//         c.fillStyle = 'green'//cor para cobrir a área do círculo
//         c.fill() // comando para iniciar o preenchimento da cor
//         posx = posx + 110
//     }

//     else if (circulos == 10) {
//         posx = 100
//         posy = 325
//         for (var i = 0; i < 10; i++) {
//             c.beginPath()//inicio do comando
//             c.arc(posx, posy, 50, 0, Math.PI * 2, false)  //c.arc (x, y, tamanho, angulo_inicial, angulo_final, anti_horario)
//             c.strokeStyle = "black"// cor do contorno
//             c.stroke()// inicia o contorno
//             c.fillStyle = 'yellow'
//             c.fill()// comando para iniciar o preenchimento da cor
//             posx = posx + 110
//         }
//     }

//     else if (circulos == 20) {
//         posx = 100
//         posy = 450
//         for (var i = 0; i < 10; i++) {
//             c.beginPath()//inicio do comando
//             c.arc(posx, posy, 50, 0, Math.PI * 2, false)  //c.arc (x, y, tamanho, angulo_inicial, angulo_final, anti_horario)
//             c.strokeStyle = "black"// cor do contorno
//             c.stroke()// inicia o contorno
//             c.fillStyle = 'blue'
//             c.fill()// comando para iniciar o preenchimento da cor
//             posx = posx + 110
//         }
//     }
//     console.log(`Total de círculos:${circulos}`)

// }

// for (var retas = 0, posx = 100, posy = 200; retas < 10; retas++) {
//     c.beginPath(); //inicio de comando
//     c.moveTo(posx, 150); //início da linha
//     c.lineTo(posx, 500); // fim da linha
//     c.strokeStyle = "orange" // cor da linha
//     c.stroke()// começa a desenhar
//     posx = posx + 110
//     console.log(`Total de retas:${retas}`)
// }

