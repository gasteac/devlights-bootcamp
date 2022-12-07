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
Persona.prototype.vivo = true;
Persona.prototype.getAge = function(){return this.edad}

const gaston = new Persona(27, 1.82);

gaston.correr();

console.log(gaston.edad+1, gaston.altura, gaston.vivo)
console.log(gaston.getAge(), gaston.altura, gaston.vivo)
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
