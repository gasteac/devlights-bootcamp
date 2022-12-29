const express = require("express");
const router = express.Router();
const userRoute = require("./user")
const adminRoute = require("./admin")

// Nivel app

function nivelApp(req, res, next) {
    console.log('ejecutando a nivel app')
    next()}

router.use(nivelApp)


// Nivel ruta
function nivelRuta(req, res, next){
    console.log('Peticion de tipo ', req.method)
    next()
}



router.get("/", nivelRuta, (req, res) => {
    res.send('hola mundo xdxd')
})

router.use('/user', userRoute)

router.use('/admin', adminRoute)



module.exports = router;