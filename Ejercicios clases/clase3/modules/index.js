const Comun = require("./comun");
const Constants = require("./constants");

// function init(){
//     const resultado = suma(4,5)
//     console.log(resultado)
// }
console.log("el proyecto es", Constants.project);
async function init(){
    const resultado = Comun.suma(5)
    console.log(resultado)
    Comun.mensaje('holamama')
    const apiData = await Comun.fetchApi()
    console.log(apiData)
}

init();


