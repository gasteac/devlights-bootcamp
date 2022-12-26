const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, 'exito', { 'Content-type': 'text/html' });
        fs.readFile('./index.html', (error, data) => {
            if (error) {
                console.log(error);
                res.end('Error al leer el archivo');
            } else {res.end(data);}
            
           
        });
    }

    if (req.url === '/home') {
        res.writeHead(200, 'exito', { 'Content-type': 'text/html' });
        fs.readFile('./home.html', (error, data) => {
            if (error) {
                console.log(error);
                res.end('Error al leer el archivo');
            }else {res.end(data);}
        });
    }

    if (req.url === '/contact') {
        res.writeHead(200, 'exito', { 'Content-type': 'text/html' });
        fs.readFile('./contact.html', (error, data) => {
            if (error) {
                console.log(error);
                res.end('Error al leer el archivo');
            }else {res.end(data);}
        });
    }

    if (req.url === '/pdf') {
        res.writeHead(200, 'exito', { 'Content-type': 'application/pdf' });
        fs.readFile('./parcial.pdf', (error, data) => {
            if (error) {
                console.log(error);
                res.end('Error al leer el archivo');
            }else {res.end(data);}
        });
    }

})


server.listen(3000)