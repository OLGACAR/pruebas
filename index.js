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
      ? req.body.queryResult.parameters.echoText
      : "";
  

	switch (speech) {
	case "hola":
		speech = 
			'Fecha: 4/8/2020, IdFact: 3, Valor: $13,000.00
			https://pagosinteligentes.com/'
		break;
	default:
		speech = speech
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
