//Si la defino como clase

class Persona{
    constructor(edad, altura){
    this.altura = altura;
    this.edad = edad;
    this.mostrarEdad = function(){
        console.log('edad',this.edad)
    },
    this.direccion = {
        calle: 'Neuquen',
        numero: 787,
        lugar: {
            provincia:'corrientes'
        }
    }
    }
}

Persona.prototype.correr = function(){console.log('Corriendo')}

const gaston = new Persona(27, 1.82);

gaston.correr();

console.log(gaston.edad, gaston.altura)

console.log(Object.getPrototypeOf(gaston))

//Si la defino como funcion constructora: 

// function Persona(edad, altura){
//     this.altura = altura;
//     this.edad = edad;
//     this.mostrarEdad = function(){
//         console.log('edad',this.edad)
//     },
//     this.direccion = {
//         calle: 'Neuquen',
//         numero: 787,
//         lugar: {
//             provincia:'corrientes'
//         }
//     }
// }
