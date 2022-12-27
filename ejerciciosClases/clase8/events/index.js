const express = require("express");
const events = require("events");

const evento = new events();

evento.emit("prueba", {name:"Gaston"});

