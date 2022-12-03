let gaston = 'gaston'
gaston = 'chau'
console.log('Mi nombre es', typeof gaston)

function mayorDeEdad(){
    console.log('Soy mayor de edad')
}

const franco = true;

const casa = {
    color: 'rojo',
    puertas: 2,
    ventanas: 4,
    direccion: {
        calle: 'calle falsa',
        numero: 123
    }
}

const indefinido = undefined;
const nulo = null;
const simbolos = Symbol('mi simbolo');

let arreglo = [1,2,3,4,5,6,7,8,9,10]

console.log('Tipo de dato gaston:', typeof gaston)
console.log('Tipo de dato mayorDeEdad:', typeof mayorDeEdad)
console.log('Tipo de dato franco:', typeof franco)
console.log('Tipo de dato casa:', typeof casa)
console.log('Tipo de dato indefinido:', typeof indefinido)
console.log('Tipo de dato nulo:', typeof nulo)
console.log('Tipo de dato simbolos:', typeof simbolos)
console.log('Tipo de dato arreglo:', typeof arreglo)
console.log(2 === '2')

// Comparaciones
let edad = 18;
console.log(edad.toString());
edad = String(edad)
console.log('mi edad es', typeof edad);
console.log(2 == '2');
console.log(2 === '2');
console.log(2 >= 2);
console.log(2 != 3);


// Condicionales

if (2 === '2') {
    console.log('es igual')
} else {
    console.log('no es igual')
}

const operador = 7;
switch (operador) {
    case 1: 
        'es uno'; break;
    case 2:
        'es dos'; break;
    case 3:
        'es tres'; break;
    default: 
        'no es ninguno'
}

const ternario = 2 > 1 && 2 < 100 ? 'es mayor' : 'es menor';

console.log(ternario)

if (1 == 1 && 2 == 2) {
    console.log('es uno')
} else if (2 == 2){
    console.log('es dos')
}

if (1 == 2 || 2 == 2) {
    console.log('es uno jeje')
} else if (2 == 2){
    console.log('es dos')
}

if (1 == 1 && typeof 2 == 'number') {
    console.log('es uno aaaaaa')
} else if (2 == 2){
    console.log('es dos')
}