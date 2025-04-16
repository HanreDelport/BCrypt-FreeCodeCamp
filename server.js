'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
fccTesting(app);
const saltRounds = 13;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';
//Require bcrypt
const bcrypt = require('bcrypt');

//START_ASYNC -do not remove notes, place code between correct pair of notes.
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
    console.log("Async hash of the password : "+hash);
    //$2a$12$Y.PHPE15wR25qrrtgGkiYe2sXo98cjuMCG1YwSI5rJW1DSJp0gEYS
    bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
        console.log("Result of the async comparing : "+res); //true
      });
  });
  
//END_ASYNC



//START_SYNC
var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log("\n\nSync hash of the password : "+hash);
var result = bcrypt.compareSync(myPlaintextPassword, hash);
console.log("Result of the sync  comparing : "+result);

//END_SYNC





























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});
