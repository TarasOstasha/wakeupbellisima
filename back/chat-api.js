// index.js
// 'use strict';
// const BootBot = require('bootbot');

// const bot = new BootBot({
// //const PAGE_ACCESS_TOKEN = 'EAAqmfRHOVYABAHMKooGyPPTD2zYqwoDLTJwg3CZBncQ8ZB07PXC53xX5nOIeri2hZA6FvnSFZAX3O95ZA3pelnEWxcbgW8PbVcufVEUnolCHb2toFgJK7OXZAwA3sCCbTdd3DmmmixHujEbr21DivFOvBYfvE6WcgyMOveWvXMKM6Fag6VXc9tVJDzAHrGJrbnVdPhKjqHAHOhL5qNVr4hZC1gCKh5IynEvJm5A7uEedAZDZD' // process.env.PAGE_ACCESS_TOKEN;
//   //accessToken: 'EAAqmfRHOVYABAJwpX2S9VTLZCFNi6o8Sd1fgQUIQTKv7P1WSU7VZCp5OpouGtaRH8AsUCeLNuxCQyJvLVSQdvP34OZChacK6VZCQlLXVZAAuejqph3HZAyr3mNvM69G0ZB8PSxbaz1zfCdhIB0QFQN77MbwDGns81mEmbo4PXI35NjiOGPKWZBqSZBdH4QO8yEnkZD',
//   accessToken: 'EAAqmfRHOVYABAJwpX2S9VTLZCFNi6o8Sd1fgQUIQTKv7P1WSU7VZCp5OpouGtaRH8AsUCeLNuxCQyJvLVSQdvP34OZChacK6VZCQlLXVZAAuejqph3HZAyr3mNvM69G0ZB8PSxbaz1zfCdhIB0QFQN77MbwDGns81mEmbo4PXI35NjiOGPKWZBqSZBdH4QO8yEnkZD',
//   verifyToken: 'verifyToken_tonyjoss',
//   appSecret: 'aa5eea79690f930c93796e5cdf8e05f2'
// });

// bot.on('message', (payload, chat) => {
// 	const text = payload.message.text;
// 	console.log(`The user said: ${text}`);
// });

// bot.hear(['hello', 'hi', /hey( there)?/i], (payload, chat) => {
// 	console.log('The user said "hello", "hi", "hey", or "hey there"');
// });

// bot.start();

const fs = require("fs");
const login = require("facebook-chat-api");
require('dotenv').config()

var credentials = {
  email: process.env.FB_EMAIL,
  password: process.env.FB_PASSWORD
}

// Create simple echo bot
login({ email: credentials.email, password: credentials.password }, (err, api) => {
  console.log() 
  if(err) return console.error(err);
  fs.writeFileSync('appstate.json', JSON.stringify(api.getAppState()));

//   api.listen((err, message) => {
//     api.sendMessage(message.body, message.threadID);
// });
 
  var yourID = "100052755006385" //"100001961499879" tonyjoss_id;
  //var msg = "Hey User. This is test!!!!!";
  var msg = {
    body: "Hey! what's up!!!!!",
    attachment: fs.createReadStream(__dirname + '/image.jpg')
}
  api.sendMessage(msg, yourID);
});


//Simple echo bot. It will repeat everything that you say.
//Will stop when you say '/stop'
login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) => {
  if(err) return console.error(err);

  // api.setOptions({listenEvents: true});
  // console.log('LOG')

  // // var stopListening = api.listen((err, event) => {
  // //     if(err) return console.error(err);
  // api.listen((err, event) => {
  //   console.log(event)
  //     // api.markAsRead(event.threadID, (err) => {
  //     //     if(err) console.error(err);
  //     // });
    

  // //     switch(event.type) {
  // //         case "message":
  // //             if(event.body === '/stop') {
  // //                 api.sendMessage("Goodbye…", event.threadID);
  // //                 return stopListening();
  // //             }
  // //             api.sendMessage("TEST BOT: " + event.body, event.threadID);
  // //             break;
  // //         case "event":
  // //             console.log(event);
  // //             break;
  // //     }
  // });
});

