
const button = document.querySelector("#enviar");

button.addEventListener("click", function (e) {
    
    e.preventDefault();

// Objeto em JavaScript

class Triangulo {
    constructor(ladoA,ladoB,ladoC,tipoTri){

        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
        this.tipoTri = tipoTri;

    }
}
    var triangulo = {
        
    ladoA : document.getElementById("ladoA"),
    ladoB : document.getElementById("ladoB"),
    ladoC : document.getElementById("ladoC"),
    tipoTri: document.getElementById("tipoTri"),

    }
    
    // Descontrução

    var {ladoA:ladoAObj, ladoB:ladoBObj, ladoC:ladoCObj, tipoTri:tipoTriObj} = triangulo

    var classe = new Triangulo (ladoAObj.value, ladoBObj.value, ladoCObj.value, tipoTriObj.value)
    console.log(classe)

// Function para calcular o imposto e classificar

function calcular() {

    var ladoA = ladoAObj.value
    var ladoB = ladoBObj.value
    var ladoC = ladoCObj.value
    
    if (ladoA === `3` && ladoB == `4` && ladoC == '5') {

        var apresenta = 'Triangulo Escaleno'

    } else if (ladoA === `` || ladoB == `` || ladoC == ''){

        var apresenta = 'Alguns lados não foram digitados'

    } else {

        var apresenta = 'Não é um triangulo Escaleno'
    }
        
    return tipoTriObj.value = apresenta

    }

// FIM - Function para calcular o IMC

// Chamada das funções

calcular()

// FIM - Chamada das funções

});


// Não permitir editar input do imposto

const input = document.querySelector("#tipoTri")

input.disabled = true
