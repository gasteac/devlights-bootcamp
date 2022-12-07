//Programacion orientada a objetos 

class Persona{
    static nombre = 'gaston';
    edad = 27;
    mostrarEdad(){
        console.log(this.edad)
    }
    static mostrarNombre(){
        console.log(this.nombre)
    }
}

//Llamo al metodo estatico sin instanciar la clase
Persona.mostrarNombre();
//Si llamo al metodo no estatico sin antes instanciar la clase, me da error
// Persona.mostrarEdad();

const personaClase = new Persona();
personaClase.mostrarEdad();

//y ahora si me muestra porque la instancia en una variable