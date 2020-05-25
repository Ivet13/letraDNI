'use strict'

/* CALCULAR DNI */

// creamos constantes para guardar referencia a los elementos HTML del input y output
const inputDNI = document.getElementById('dni')
const outputLetraDNI = document.getElementById('letraDNI')

// el array que contiene las letras en el orden correcto
const letrasSecuenciaOficial = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]

// para poder calcular el modulo, necesitamos saber cuantas letras hay dentro del array, usamos el atributo "length"
const numeroDeLetras = letrasSecuenciaOficial.length

// al averiguar el modulo, es decir el resto entero despues de dividir el numero del DNI por el numero de letras en el array, 
// nos da un numero que coincide con la posicion (su indice) de la letra en el array, lo buscamos e imprimimos en el output
function calcularLetraDNI() {
    var modulo = inputDNI.value % numeroDeLetras
    var letraDNI = letrasSecuenciaOficial[modulo]
    outputLetraDNI.innerHTML = letraDNI
}

/* CALCULAR NIE */

// creamos constantes para guardar referencia a los elementos HTML del input y output
const inputNIE = document.getElementById('nie')
const outputLetraNIE = document.getElementById('letraNIE')

// en el caso de los NIEs, hay que cambiar la letra del inicio del numero por el valor correspondiente, y ponerlo antes del numero
function calcularLetraNIE() {
    var variable
    // pasamos el valor del input de tipo select para obtener el numero que hay que poner antes del numero
    switch (primeraLetraNIE.value) {
        case 'X':
           variable = 0
            break
        case 'Y':
            variable = 1
            break
        case 'Z':
            variable = 2
            break
    }
    // aprovechamos la concatenacion de la variable y el numero del NIE para obtener el numero del cual hay que averiguar su modulo
    var modulo = (variable + inputNIE.value) % numeroDeLetras
    var letraNIE = letrasSecuenciaOficial[modulo]
    outputLetraNIE.innerHTML = letraNIE

}