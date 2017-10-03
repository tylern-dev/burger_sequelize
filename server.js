/* Dependencies-------------------- */
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

/* sets up the express application */
let app = express()
const PORT = process.env.PORT || 3000;

// Require our models for syncing
let db = require("./models");

// Sets up the Express app to handle data parsing - MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Express Handlebars Engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// Static Directory
app.use(express.static(path.join(__dirname, './public')));

// Routes
require(path.join(__dirname, './controller/burger-api-routes.js'))(app);
require(path.join(__dirname, './controller/customer-api-routes.js'))(app);
require(path.join(__dirname, './controller/html-routes.js'))(app);


// Sync the db and then start the server
//=========================================================
db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log(`app listening on port: ${PORT}`)
    })
})