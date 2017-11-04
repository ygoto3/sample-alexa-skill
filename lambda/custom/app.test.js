const request = require('supertest');
const express = require('express');
const Speech = require('ssml-builder');

const app = require('./app');

describe('Sample Alexa Skill', () => {
  var server;

  beforeEach(() => {
    const expressApp = express();
    app.express({
      expressApp,
      debug: true,
      checkCert: false,
    });
    server = expressApp.listen(3000);
  });

  afterEach(() => {
    server.close();
  });

  it('responds to a launch intent', () => {
    return request(server)
      .post('/sample-alexa-skill')
      .send({
        request: {
          type: 'LaunchRequest',
        }
      })
      .expect(200).then(res => {
        const ssml = res.body.response.outputSpeech.ssml;
        const expected = new Speech()
          .say('Tell me to say any number you like.')
          .pause('500ms')
          .say('For example, say the number 3.')
          .ssml();
        return expect(ssml).toBe(expected);;
      })
      ;
  });

  it('responds to a launch intent', () => {
    const num = '123';
    return request(server)
      .post('/sample-alexa-skill')
      .send({
        request: {
          type: 'IntentRequest',
          intent: {
            name: 'SayNumber',
            slots: {
              number: {
                name: 'AMAZON.NUMBER',
                value: num,
              },
            },
          },
        },
      })
      .expect(200).then(res => {
        const ssml = res.body.response.outputSpeech.ssml;
        const expected = new Speech()
          .say(`You said ${num}`)
          .ssml();
        return expect(ssml).toBe(expected);;
      })
      ;
  });
});
