// las funciones y var pueden definirse en cualquier orden
// osea primero la defino dsp la llamo, o al reves

myFunction() //fijate q aca llamo a la funcion

//y aca la defino

function myFunction(){
    console.log('Hola mami')
}

//y eso va a andar igual 

//con var pasa algo parecido, anda pero tira undefined

console.log(variable) //aca la llamo

//y ahora la defini

var variable = 5

//y me va a dar UNDEFINED

//esto NO pasa con const, let, arrow function
//en esos casos primero tenes q definir para luego poder llamar
//si haces lo mismo, te va a tirar error

console.log(variable1)
const variable1 = 'hola'

//y ahi como ves, se rompe todo

