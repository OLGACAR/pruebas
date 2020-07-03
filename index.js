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
      : "Seems like some problem. Speak again.";
  
  var speechResponse = {
    google: {
      expectUserResponse: true,
      richResponse: {
        items: [
          {
            simpleResponse: {
				switch (speech) {
				case "hola":
				speech = "nada"
				break;
				default:
				speech
				[break;]
				}

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
