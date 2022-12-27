const events = require("events");

const evento2 = new events();

evento2.emit("prueba2", {name:"Gaston"})

evento2.addListener("prueba2", (data) => {console.log("data de prueba 2:", data)});
