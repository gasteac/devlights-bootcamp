function callback(resultado){
    console.log('callback', resultado)
}

function operacion(a,b,cb){
    let result = 0;
    //Callback async 
    setTimeout(()=> {
        result = a + b;
        cb(result) //cb es mi funcion callbacl
    }, 1000);
}
operacion(2, 3, callback)


const arreglo =[1,2,3];

function filter(cb){
    // Callback sync
    arreglo.forEach(element => cb(element))
}

filter((element) => console.log(element))