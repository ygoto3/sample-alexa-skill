const app = require('../index');
const interactionModel = app.schemas.askcli('Sample Alexa Skill');
process.stdout.write(interactionModel);
