function log(req, res, next){
    console.log("Recibi una respuesta a la ruta:", `${req.baseUrl}${req.path} y el metodo es ${req.method}`);
    next();
}

module.exports = log