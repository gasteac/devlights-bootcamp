const firstArray = [369, '2', 'hola', 4, { a: 1, b: 2 }];

console.log('Elemento 1 del arreglo:', firstArray[0]);

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const mapeo = numberArray.map(elemento => elemento * 2); // recorre todo el array y devuelve un nuevo array

console.log(mapeo);

const concatedArray = firstArray.concat(numberArray); // concatena dos arrays

console.log(concatedArray);

concatedArray.push('ultimo:D'); // agrega un elemento al final del array

console.log(concatedArray);

const ultimoElemento = concatedArray.pop(); // elimina el ultimo elemento del array

console.log(ultimoElemento); // imprime el ultimo elemento eliminado
console.log(concatedArray); // imprime el array sin el ultimo elemento

const primerElemento = concatedArray.shift(); // elimina el primer elemento del array

console.log(primerElemento); // imprime el primer elemento eliminado
console.log(concatedArray); // imprime el array sin el primer elemento

concatedArray.unshift('primer elemento, adios 369'); // agrega un elemento al inicio del array

console.log(concatedArray);

//Copiar elementos de un arreglo sin eliminarlos del original
const copia = concatedArray.slice(0, 2); // copia desde el indice 0 hasta el 2 (elemento 0, 1, pero 2 no)

console.log(copia)

const copia2 = concatedArray.slice(2); // copia desde el indice 2 hasta el final

console.log(copia2)

// Eliminar elementos de un arreglo

const copia3 = concatedArray.splice(0, 3); // elimina desde el indice 0 hasta el 3, y los guarda en copia3

console.log(copia3)

// Filtrar elementos de un arreglo

const filtrado = concatedArray.filter(elemento => typeof elemento == 'number'); // muestra los elementos numeros

console.log(filtrado)

const multidimensionalArray = [[4,5,6], [1,2,3],[7,8,9]];

console.log(multidimensionalArray)

console.log(multidimensionalArray[0][0]); // imprime el elemento 1 del array multidimensional

const multiDimArrayToFlat = multidimensionalArray.flat(); // convierte un array multidimensional en un array plano

console.log(multiDimArrayToFlat);
console.log(multiDimArrayToFlat[0]); // imprime el elemento 1 del array plano

// Ordenar arrreglos

console.log(multiDimArrayToFlat.sort()); // ordena los elementos del array

// Iterar un arrray

multiDimArrayToFlat.forEach(elemento => console.log(elemento)); // imprime cada elemento del array
multiDimArrayToFlat.forEach(elemento => {console.log(elemento)}); // imprime cada elemento del array (agregado {})

// o puedo hacerlo con un for con indice

for (let i = 0; i < multiDimArrayToFlat.length; i++) {
    console.log(multiDimArrayToFlat[i]);
}

// o con un for of

for (const elemento of multiDimArrayToFlat) {
    console.log('Soy el elemento:', elemento);
}

// puedo recorrer sus indices con un for in

for (const indice in multiDimArrayToFlat) {
    console.log('Soy el indice:', indice);
}

// Verifico si un elemento esta en un arreglo

console.log(multiDimArrayToFlat.includes(1)); // devuelve true si el elemento esta en el array

// Convierto a string todos los numeros de un array agregando el separador |

console.log(multiDimArrayToFlat.join('|'));

// Convierto a string todos los numeros de un array pero sin agregar el separador

console.log(multiDimArrayToFlat.join());

// Convierto a string todos los numeros de un array pero sin comas

console.log(multiDimArrayToFlat.join(''));

// Convierto a string todos los numeros de un array pero con un espacio

console.log(multiDimArrayToFlat.join(' '));

// Convierto a string todos los numeros de un array pero con un espacio y un guion

console.log(multiDimArrayToFlat.join(' - '));

// ############

// Convertir un string a un arreglo separado por el separador indicado en el split

console.log('Gas,ton,Aco,sta'.split(',')) //Yo le digo que quiero que use la , para separar en elementos de un array

// Obtener el primer indice de un elemento buscado (el q esta como parametro)
// En caso de no encontrarse, devuelve -1
console.log(multiDimArrayToFlat.indexOf(20))

// Obtener el ultimo indice de un elemento buscado (el q esta como parametro)
// En caso de no encontrarse, devuelve -1
console.log(multiDimArrayToFlat.lastIndexOf(33))

// Hacemos lo mismo pero que esta vez si encuentre

// Obtener el primer indice de un elemento buscado (el q esta como parametro)
// En caso de no encontrarse, devuelve -1
console.log(multiDimArrayToFlat.indexOf(1))

// Obtener el ultimo indice de un elemento buscado (el q esta como parametro)
// En caso de no encontrarse, devuelve -1
console.log(multiDimArrayToFlat.lastIndexOf(7))