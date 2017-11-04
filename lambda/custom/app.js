const alexa = require('alexa-app');

const LaunchRequest = require('./intents/launch-request');
const SayNumberIntent = require('./intents/say-number');

const app = new alexa.app('sample-alexa-skill');

app.launch(LaunchRequest);

app.intent.apply(app, SayNumberIntent);

module.exports = app;
