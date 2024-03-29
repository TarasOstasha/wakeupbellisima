

/**
 * Copyright 2017-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Messenger Platform Quick Start Tutorial
 *
 * This is the completed code for the Messenger Platform quick start tutorial
 *
 * https://developers.facebook.com/docs/messenger-platform/getting-started/quick-start/
 *
 * To run this code, you must do the following:
 *
 * 1. Deploy this code to a server running Node.js
 * 2. Run `npm install`
 * 3. Update the VERIFY_TOKEN
 * 4. Add your PAGE_ACCESS_TOKEN to your environment vars
 *
 */

'use strict';
// EAAqmfRHOVYABAJwpX2S9VTLZCFNi6o8Sd1fgQUIQTKv7P1WSU7VZCp5OpouGtaRH8AsUCeLNuxCQyJvLVSQdvP34OZChacK6VZCQlLXVZAAuejqph3HZAyr3mNvM69G0ZB8PSxbaz1zfCdhIB0QFQN77MbwDGns81mEmbo4PXI35NjiOGPKWZBqSZBdH4QO8yEnkZD
const PAGE_ACCESS_TOKEN = 'EAAqmfRHOVYABAHMKooGyPPTD2zYqwoDLTJwg3CZBncQ8ZB07PXC53xX5nOIeri2hZA6FvnSFZAX3O95ZA3pelnEWxcbgW8PbVcufVEUnolCHb2toFgJK7OXZAwA3sCCbTdd3DmmmixHujEbr21DivFOvBYfvE6WcgyMOveWvXMKM6Fag6VXc9tVJDzAHrGJrbnVdPhKjqHAHOhL5qNVr4hZC1gCKh5IynEvJm5A7uEedAZDZD' // process.env.PAGE_ACCESS_TOKEN;
// Imports dependencies and set up http server
const 
  request = require('request'),
  express = require('express'),
  body_parser = require('body-parser'),
  app = express().use(body_parser.json()); // creates express http server

// Sets server port and logs message on success
app.listen( 5000, () => console.log('webhook is listening'));

// Accepts POST requests at /webhook endpoint
app.post('/webhook', (req, res) => {  

  // Parse the request body from the POST
  let body = req.body;

  // Check the webhook event is from a Page subscription
  if (body.object === 'page') {

    body.entry.forEach(function(entry) {

      // Gets the body of the webhook event
      let webhook_event = entry.messaging[0];
      console.log(webhook_event);


      // Get the sender PSID
      var yourID = "100052755006385"
      let sender_psid = yourID; //
      console.log('Sender ID: ' + sender_psid);

      //Check if the event is a message or postback and
      //pass the event to the appropriate handler function
      if (webhook_event.message) {
        handleMessage(sender_psid, webhook_event.message);        
      } else if (webhook_event.postback) {
        
        handlePostback(sender_psid, webhook_event.postback);
      }
      
    });
    // Return a '200 OK' response to all events
    res.status(200).send('EVENT_RECEIVED');

  } else {
    // Return a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }

});

/////////
// Creates the endpoint for our webhook 
// app.post('/webhook', (req, res) => {  
 
//   let body = req.body;

//   // Checks this is an event from a page subscription
//   if (body.object === 'page') {

//     // Iterates over each entry - there may be multiple if batched
//     body.entry.forEach(function(entry) {

//       // Gets the message. entry.messaging is an array, but 
//       // will only ever contain one message, so we get index 0
//       let webhook_event = entry.messaging[0];
//       console.log(webhook_event);
//     });

//     // Returns a '200 OK' response to all requests
//     res.status(200).send('EVENT_RECEIVED');
//   } else {
//     // Returns a '404 Not Found' if event is not from a page subscription
//     res.sendStatus(404);
//   }

// });
/////////

// Accepts GET requests at the /webhook endpoint
app.get('/webhook', (req, res) => {
  
  /** UPDATE YOUR VERIFY TOKEN **/
  const VERIFY_TOKEN = 'dsbfjhdsbfjhdsbfjhbjhb3hbfjdhsbvjds' //"<YOUR VERIFY TOKEN>";
  
  // Parse params from the webhook verification request
  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];
    
  // Check if a token and mode were sent
  if (mode && token) {
  
    // Check the mode and token sent are correct
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      
      // Respond with 200 OK and challenge token from the request
      console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);
    
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);      
    }
  }
});

function handleMessage(sender_psid, received_message) {
  console.log(sender_psid)
  let response;
  
  // Checks if the message contains text
  if (received_message.text) {    
    // Create the payload for a basic text message, which
    // will be added to the body of our request to the Send API
    response = {
      "text": `You sent the message: "${received_message.text}". Now send me an attachment!`
    }
  } else if (received_message.attachments) {
    // Get the URL of the message attachment
    let attachment_url = received_message.attachments[0].payload.url;
    response = {
      "attachment": {
        "type": "template",
        "payload": {
          "template_type": "generic",
          "elements": [{
            "title": "Is this the right picture?",
            "subtitle": "Tap a button to answer.",
            "image_url": attachment_url,
            "buttons": [
              {
                "type": "postback",
                "title": "Yes!",
                "payload": "yes",
              },
              {
                "type": "postback",
                "title": "No!",
                "payload": "no",
              }
            ],
          }]
        }
      }
    }
  } 
  
  // Send the response message
  callSendAPI(sender_psid, response);    
}

function handlePostback(sender_psid, received_postback) {
  console.log('ok')
   let response;
  // Get the payload for the postback
  let payload = received_postback.payload;

  // Set the response based on the postback payload
  if (payload === 'yes') {
    response = { "text": "Thanks!" }
  } else if (payload === 'no') {
    response = { "text": "Oops, try sending another image." }
  }
  // Send the message to acknowledge the postback
  callSendAPI(sender_psid, response);
}

function callSendAPI(sender_psid, response) {
  // Construct the message body
  let request_body = {
    "recipient": {
      "id": sender_psid
    },
    "message": response
  }

  // Send the HTTP request to the Messenger Platform
  request({
    "uri": "https://graph.facebook.com/v2.6/me/messages",
    "qs": { "access_token": PAGE_ACCESS_TOKEN },
    "method": "POST",
    "json": request_body
  }, (err, res, body) => {
    if (!err) {
      console.log('message sent!')
    } else {
      console.error("Unable to send message:" + err);
    }
  }); 
}


// 1
//From a separate command line prompt, test your webhook verification by substituting your verify token into this cURL request:
// curl -X GET "tonyjoss.com:5000/webhook?hub.verify_token=dsbfjhdsbfjhdsbfjhbjhb3hbfjdhsbvjds&hub.challenge=CHALLENGE_ACCEPTED&hub.mode=subscribe"

//2
//Test your webhook by sending this cURL request:
// curl -H "Content-Type: application/json" -X POST "tonyjoss.com:5000/webhook" -d '{"object": "page", "entry": [{"messaging": [{"message": "TEST_MESSAGE","sender": {"id": "100001433681997"}}]}]}'



// curl -X GET "https://93e0dea42d69.ngrok.io/webhook?hub.verify_token=dsbfjhdsbfjhdsbfjhbjhb3hbfjdhsbvjds&hub.challenge=CHALLENGE_ACCEPTED&hub.mode=subscribe"



// Callback URL
// https://93e0dea42d69.ngrok.io/webhook


