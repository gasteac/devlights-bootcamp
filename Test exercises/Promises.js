async function prueba(){
    const promesa = new Promise((resolve)=>{
        setTimeout(() => resolve('holaaa'), 500);
    });
    const resultado = await promesa;
    console.log(resultado)
}

prueba()

//Basicamente le puse un timeout para demostrar que con el async await le espero 
//a que termine su operacion a mi promesa, nada mas q eso
//lo cual no pasaria con un callback q lo hace automaticamente y no espera a nadie el hdp

async function pruebita(){
    let cumple = 0;
    const promise = new Promise(resolve=>{
        setTimeout(()=>{
            for (let i=0; i<200; i++){
                cumple++};resolve(cumple)
            },600);
    });
    const edad = await promise
    console.log(edad)
}
pruebita()


// setTimeout( loQueQuieroQueHaga, tiempoEnMS)


function sumita(a, b){
    resultado = a + b;
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve(resultado)}, 0);
    }, reject =>{
        setTimeout(() => {
            resolve(resultado-5)}, 5)
    })
}

sumita(5,5).then(resultado => console.log('aprobaste con:', resultado), reject => console.log('falle bro', reject))