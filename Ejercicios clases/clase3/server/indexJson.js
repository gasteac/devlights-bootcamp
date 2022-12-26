const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, 'EXITO', {'Content-type':'application/json'});
    const json = { 'persona1' : {
        "nombre": "Juan",
        "apellido": "Perez",
        "edad": 25
    },
    'persona2' : {
        "nombre": "Maria",
        "apellido": "Gomez",
        "edad": 30
    }};
    res.end(JSON.stringify(json));
})



server.listen(3000,'localhost', (error) => {
    if (error) {
        console.log('error al iniciar el servidor', error);
    }
    console.log('servidor corriendo en el puerto 3000')
})