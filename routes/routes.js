var express = require("express");
var route = express.Router();

route.get("/persona", (request, response)=>{
	var objeto = [{nombre: "Charles", apellido: "Acevedo"},
				  {nombre: "Jair", apellido: "Diaz"},
				  {nombre: "Jairo", apellido: "Serrano"},
				  {nombre: "Luz", apellido: "Robles"}];
	response.json(objeto);
});

module.exports = route ;