// operador spread ...
const arreglo = [1, 2, 3, 8, 18, 2000];
const [, segundoElemento, ...rest] = arreglo;
console.log("segundo elemento  es", segundoElemento);
console.log("el resto de los elementos son", rest)
const persona = {
  nombre: "gaston",
  apellido: "acosta",
  edad: 777
}
const { apellido, ...resto } = persona;
console.log("resto de propiedades", resto) //todo menos apellido

const persona2 = { ...persona };

const arreglo1 = [1, 2];
const arreglo2 = [3, 4];
const nuevoArreglo = [...arreglo1, ...arreglo2];
console.log("nuevo arreglo", nuevoArreglo)