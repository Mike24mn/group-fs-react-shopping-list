const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const itemRouter = require('./routes/item.router.js')
const PORT = process.env.PORT || 5001;

// need router file here 

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
// Create your API routes in a separate file
// and plug them in here with `app.use()`

app.use('/api/food', itemRouter);

// ^^^ REMEMBER TO CHANGE THIS URL IF FRONT END DIFFERS ^^^

// need express routes set up

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});
