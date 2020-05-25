'use strict'

// creamos constantes para guardar referencia a los elementos HTML del input y output
const inputDNI = document.getElementById('dni')
const outputLetraDNI = document.getElementById('letraDNI')

// el array que contiene las letras en el orden correcto
const letrasSecuenciaOficial = ["T","R","W","A", "G", "M", "Y",	"F", "P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"]

// para poder calcular el modulo, necesitamos saber cuantas letras hay dentro del array, usamos el atributo "length"
const numeroDeLetras = letrasSecuenciaOficial.length

// al averiguar el modulo, es decir el resto entero despues de dividir el numero del DNI por el numero de letras en el array, 
// nos da un numero que coincide con la posicion (su indice) de la letra en el array, lo buscamos e imprimimos en el output
function calcularLetraDNI(){
    var modulo = inputDNI.value % numeroDeLetras
    var letraDNI = letrasSecuenciaOficial[modulo]
    outputLetraDNI.innerHTML = letraDNI
}
