function checkAuthentication(req, res, next){
    if (true){
        next()
    } else{
        res.send('No tenes acceso flako')
    }
}

module.exports = {
    checkAuthentication
}