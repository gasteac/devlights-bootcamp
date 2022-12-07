//Funcion LINEAL y funcion FLECHHA


//Funcion lineal

function myFunction({param1, param2, param3, param4}){
    console.log('params1', param1)
    console.log('params2', param2)
    console.log('params3', param3)
    console.log('params4', param4)
}

//cuando la fun recibe +3 param, pasar como objeto {}

myFunction({param1:1, param2:2, param3:3, param4:'hola'})



//Funcion flecha

const myFunction2=(param)=>{
    console.log('param function arrow', param)
}

myFunction2('hola')