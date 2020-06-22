const BootBot = require('bootbot');

const bot = new BootBot({
  accessToken: 'EAAqmfRHOVYABAJwpX2S9VTLZCFNi6o8Sd1fgQUIQTKv7P1WSU7VZCp5OpouGtaRH8AsUCeLNuxCQyJvLVSQdvP34OZChacK6VZCQlLXVZAAuejqph3HZAyr3mNvM69G0ZB8PSxbaz1zfCdhIB0QFQN77MbwDGns81mEmbo4PXI35NjiOGPKWZBqSZBdH4QO8yEnkZD',
  verifyToken: 'verifyToken_tonyjoss',
  appSecret: 'aa5eea79690f930c93796e5cdf8e05f2'
});

bot.hear(['hello', 'hi', /hey( there)?/i], (payload, chat) => {
	// Send a text message followed by another text message that contains a typing indicator
	chat.say('Hello, human friend!').then(() => {
		chat.say('How are you today?', { typing: true });
	});
});

bot.hear(['food', 'hungry'], (payload, chat) => {
	// Send a text message with quick replies
	chat.say({
		text: 'What do you want to eat today?',
		quickReplies: ['Mexican', 'Italian', 'American', 'Argentine']
	});
});

bot.hear(['help'], (payload, chat) => {
	// Send a text message with buttons
	chat.say({
		text: 'What do you need help with?',
		buttons: [
			{ type: 'postback', title: 'Settings', payload: 'HELP_SETTINGS' },
			{ type: 'postback', title: 'FAQ', payload: 'HELP_FAQ' },
			{ type: 'postback', title: 'Talk to a human', payload: 'HELP_HUMAN' }
		]
	});
});

bot.hear('image', (payload, chat) => {
	// Send an attachment
	chat.say({
		attachment: 'image',
		url: 'http://example.com/image.png'
	});
});

bot.start();


