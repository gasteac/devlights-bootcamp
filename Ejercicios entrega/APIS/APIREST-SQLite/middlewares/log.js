function log(req, res, next){
    // Aqui se realizaria cualquier logica de logging
    next();
}
module.exports = log