const [
  intentName,
  interactionModel,
] = require('./say-number');

describe('SayNumber', () => {
  it('should have expected intent name', () => {
    expect(intentName).toBe('SayNumber');
  });

  it('should have expected interaction model', () => {
    expect(interactionModel.slots).toEqual(
      { number: 'AMAZON.NUMBER' },
    );
    expect(interactionModel.utterances).toEqual(
      ['say the number {-|number}'],
    );
  });
});
