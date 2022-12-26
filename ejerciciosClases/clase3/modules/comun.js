function suma(a = 1, b = 1){
    return a + b
};

function mensaje(mensaje){
    return console.log(mensaje)
}

async function fetchApi(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()
    return data;
}


module.exports = {suma,mensaje,fetchApi}