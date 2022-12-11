const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, 'EXITO', {'Content-type':'application/pdf'});
    fs.readFile('parcial.pdf', (error, data) => {
        if (error) {
            console.log('Error al leer el archivo', error);
        }
        res.end(data);
    });
})

server.listen(3000,'localhost', (error) => {
    if (error) {
        console.log('error al iniciar el servidor', error);
    }
    console.log('servidor corriendo en el puerto 3000')
})