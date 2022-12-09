const arreglo = [4, 5, 6];
const segundo = arreglo[1];

const [,, tercero ] = arreglo;
console.log("tercer elemento:", tercero);

const cadena = 'ei muuy buenas a todos chavales aqui vegetta777 y hoy les traigo un nuevo video de minecraft XD';
const [, ran] = cadena;
console.log("segundo elemento de cadena:", ran);

const persona = {
  nombre: "gastonto",
  apellido: "acostado"
}
const { apellido: apellido } = persona;

console.log("apellido es", apellido)
const arregloConElemVacios = [1, 2, undefined, 4];
const [, , tercerElemento = "3"] = arregloConElemVacios;
console.log("tercer elemento es", tercerElemento) //default