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

restService.post("/echo", function(req, res) {
  var speech =
    req.body.queryResult &&
    req.body.queryResult.parameters &&
    req.body.queryResult.parameters.echoText
    req.body.queryResult.parameters.metodo  
      ? req.body.queryResult.parameters.echoText
      ? req.body.queryResult.parameters.metodo
      : "";
   
    if (speech.contains == "factura")
    {
    switch (speech) {
	case "123":
		speech = 
			'Fecha: 4/8/2020, IdFact: 3, Valor: $13,000.00 - https://pagosinteligentes.com/ \n Fecha: 4/20/2020, IdFact: 1, Valor: $120,000.00 - https://pagosinteligentes.com/'
		break;
	default:
		speech = speech
		break;
	}
}
		 else
		 {
		 speech = 'nnnn'
		 }
	
	



  var speechResponse = {
    google: {
      expectUserResponse: true,
      richResponse: {
        items: [
          {
            simpleResponse: {
              textToSpeech: speech
            }
          }
        ]
      }
    }
  };
  
  return res.json({
    payload: speechResponse,
    fulfillmentText: speech,
  });
});


restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});

function Auto(marca, modelo, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}
