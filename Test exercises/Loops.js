// for (let i = 1 ; i <= 10000 ; i +=1){
//     console.log('i es =', i);
// }

const persona = {
    name:'gaston',
    lastname:'acosta',
    edad:27
}

for (let property in persona){
    console.log('propiedad:', property)
    console.log('valor propiedad:', persona[property])
}


while (persona.edad > 2){
    console.log(persona.edad)
    persona.edad -= 1
}

i = 1000
do{
    console.log('hola')
    i-= 1
} while (i > 0);


