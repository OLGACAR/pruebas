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
    req.body.queryResult.parameters.factText
      ? req.body.queryResult.parameters.factText
      : "";
  

	switch (speech) {
	case 123:
		speech = 
			'Fecha: 4/8/2020, IdFact: 3, Valor: $13,000.00 - https://pagosinteligentes.com/ \n Fecha: 4/20/2020, IdFact: 1, Valor: $120,000.00 - https://pagosinteligentes.com/'
		break;
	case 564:
		speech = 
			'Fecha: 4/20/2020, IdFact: 4, Valor: $133,000.00'
		break;		
	default:
		speech = 'No tiene facturas pendientes'
		break;
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

	
