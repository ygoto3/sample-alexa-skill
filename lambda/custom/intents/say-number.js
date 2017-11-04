module.exports = [
  'SayNumber',
  {
    slots: { number: 'AMAZON.NUMBER' },
    utterances: ['say the number {-|number}']
  },
  (req, res) => {
    const num = req.slot('number');
    res.say(`You said ${num}`);
  }
];
