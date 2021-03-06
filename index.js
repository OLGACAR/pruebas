"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/facturas", function(req, res) {
  var speech =
    req.body.queryResult &&
    req.body.queryResult.parameters &&
    req.body.queryResult.parameters.idText
      ? req.body.queryResult.parameters.idText
      : "";
  

	switch (speech) {
	case 1510:
		speech = 
			'Fecha: 04/8/2020, IdFact: 3, Valor: $13,000.00 - https://pagosinteligentes.com/ \n Fecha: 10/08/2020, IdFact: 1, Valor: $120,000.00 - https://pagosinteligentes.com/'
		break;
	case 4574:
		speech = 
			'Fecha: 08/08/2020, IdFact: 4, Valor: $133,000.00 - https://pagosinteligentes.com/'
		break;		
	case 1020:
		speech = 
			'Fecha: 25/07/2020, IdFact: 10, Valor: $250,000.00 - https://pagosinteligentes.com/ \n Fecha: 25/08/2020, IdFact: 8, Valor: $100,000.00 - https://pagosinteligentes.com/ \n Fecha: 25/08/2020, IdFact: 20, Valor: $250,000.00 - https://pagosinteligentes.com/'
		break;				
	default:
		speech = 'No tiene facturas pendientes'
		break;
	}
 
  
  return res.json({
    fulfillmentText: speech,
  });
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});

	
