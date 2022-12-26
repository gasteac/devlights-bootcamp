const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, 'exito', {'Content-type':'text/html'});
    fs.readFile('./index.html', (error, data) => {
        if (error) {
            fs.readFile('./indexError.html', (error2, data2) => {
                if (error2) {
                   throw error2;
                }
                res.end(data2);
            });
        } else {
        res.end(data);
    }
    });
    });

server.listen(3000,'localhost', (error) => {
    if (error) {
        console.log('error al iniciar el servidor', error);
    }
    console.log('servidor corriendo en el puerto 3000')
})