const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, 'exito', {'Content-type':'text/html'});
    console.log('request', req);
    console.log('servidor funcionando');
    res.end('vamo dibuuuuuuuuuuuuu VAMO DIBUUUUUUUUUUUUUUUUU');
    });

    server.listen(3000,'localhost', (error) => {
        if (error) {
            console.log('error al iniciar el servidor', error);
        }
        console.log('servidor corriendo en el puerto 3000')
    })