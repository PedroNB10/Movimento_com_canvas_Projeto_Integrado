
var canvas = document.querySelector('canvas'); //funciona com o nome do elemento 
canvas.width = window.innerWidth;//insere no canva a largura da tela 
canvas.height = window.innerHeight //insere no canva a altura da tela
var c = canvas.getContext('2d'); // c é pincel do canva, ou seja o 'super object'

var ir_direita = false
var ir_esquerda = false
var inicio = true

var pular = false

var x = (window.innerWidth) / 2 - 20//Posição inicial
var y = (window.innerHeight) / 2 - 20

var altura_atual = (window.innerHeight) / 2 - 20
var dx = 4; // velocidade do movimento (seria o aux)

var dy = 4

let contador = 0
var plataforma = true



function animate() {

   console.log(y)
    
    requestAnimationFrame(animate); //fica chamando a função animate

   
    if(x>400 && y==233.5){
        y=altura_atual
    }

    
  

    if (ir_direita == true) {

        c.clearRect(0, 0, innerWidth, innerHeight)//(x,y, onde terminax, onde terminay) // Limpa a tela
        c.fillStyle = 'red'//cor de preenchimento do quadrado
        c.fillRect(x, y, 20, 20); //serve para falar as dimensões
        x = x + dx;


    }



    if (ir_esquerda == true) {

        c.clearRect(0, 0, innerWidth, innerHeight)//(x,y, onde terminax, onde terminay) // Limpa a tela
        c.fillStyle = 'red'//cor de preenchimento do quadrado
        c.fillRect(x, y, 20, 20); //serve para falar as dimensões
        x = x - dx;


    }

    if (ir_esquerda == false) {

        c.clearRect(0, 0, innerWidth, innerHeight)//(x,y, onde terminax, onde terminay) // Limpa a tela
        c.fillStyle = 'red'//cor de preenchimento do quadrado
        c.fillRect(x, y, 20, 20); //serve para falar as dimensões
    }

    if (pular == true ) {

        
        

        setTimeout(function(){
            c.clearRect(0, 0, innerWidth, innerHeight)//(x,y, onde terminax, onde terminay) // Limpa a tela
            c.fillStyle = 'red'//cor de preenchimento do quadrado
            c.fillRect(x, y, 20, 20); //serve para falar as dimensões
            y = y + 80;
        }, 250)

       

        c.clearRect(0, 0, innerWidth, innerHeight)//(x,y, onde terminax, onde terminay) // Limpa a tela
        c.fillStyle = 'red'//cor de preenchimento do quadrado
        c.fillRect(x, y, 20, 20); //serve para falar as dimensões
  
        y = y - 80;
        
        if(y <= 314&& x<420 && plataforma==true){
      
            y= y-60
           
           plataforma=false
            }
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
    c.fillRect(0, 314, (window.innerWidth), 20); //serve para falar as dimensões

    c.fillStyle = 'green'//cor de preenchimento do quadrado
    c.fillRect(0, ((window.innerHeight) / 2 )-60, 400, 20); //serve para falar as dimensões



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

