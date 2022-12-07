const gaston = {
    nombre: 'gaston',
    edad: 27,
    mostrarEdad: function(){
        console.log('Edad de',this.nombre,':', this.edad)
    },
    direccion:{
        calle:'Av siempre viva',
        lugar:{
            ciudad:'Corrientes',
        }
    }
}
//elimino mi nombre, me va a mostrar undefined si lo llamo dsp
// delete gaston.nombre;
gaston.mostrarEdad()
console.log(gaston)
console.log(gaston.direccion)
console.log(gaston.direccion.lugar)
//Formas de copiar un objeto

//Si lo copio asi tal cual, copia la referencia:

const gastonRef = gaston;

// si cambio gastonRef, cambio el ORIGINAL
//esa es la dif entre un objeto y valores primitivos ya sean variables, arrays, etc
//Si copio desmenuzado, es una copia lazy, osea a los punteros (direccion) los copia por referencia
//Osea si cambio gastonRef2.direccion, me lo cambia en el original (no si cambio gastonRef2.edad por ej)
const gastonRef2 = {...gaston} //desmenuza gaston
//Lo mismo pasa si lo copio por Object.assign
const gaston1 = Object.assign({},gaston)
// {} es el target, osea un objeto vacio
// a ese objeto le copia las prop de gaston



//Formas de copiar sin referencia (deep copy) sin alterar el original

//JSON.parse(JSON.stringify()) es una MALA PRACTICA
//Podes perder tipos de datos
//Pero sirve para copiar igual :v

const gaston2 = JSON.parse(JSON.stringify(gaston))

gaston2.direccion.calle = 'Neuquen';
console.log(gaston.direccion.calle)
