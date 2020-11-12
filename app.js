
let path = require('path');

// The Express web application framework
// See http://expressjs.com/
const express = require('express');
let Router = require('express-promise-router');
const handlebars = require('express-handlebars');

// Library for nicer logging of HTTP requests
// See https://github.com/expressjs/morgan
let logger = require('morgan');

let app = express();

app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
  layoutsDir: __dirname + '/views/layouts',
  extname: 'hbs',
  defaultLayout: 'index',
  partialsDir: __dirname + '/views/partials/'
}));

app.use(express.static('public'))

let router = Router();
app.use(router);

app.use(logger('dev'));



router.get('/', async(request, response) => {

  response.render("home", {layout: "index"});
});

router.get('/aboutus', async(request, response) => {

  response.render("aboutus", {layout: "index"});
});

router.get('/resources', async(request, response) => {

  response.render("resources", {layout: "index"});
});

router.get('/store', async(request, response) => {

  response.render("store", {layout: "index"});
});

router.get('/cart', async(request, response) => {

  response.render("cart", {layout: "index"});
});

router.get('/confirmshaming', async(request, response) => {

  response.render("confirmshaming", {layout: "index"});
});

router.get('/cspopup', async(request, response) => {

  response.render("cspopup", {layout: "index"});
});

router.get('/fcpopup', async(request, response) => {

  response.render("fcpopup", {layout: "index"});
});

router.get('/rmpopup', async(request, response) => {

  response.render("rmpopup", {layout: "index"});
});

router.get('/forcedcontinuity', async(request, response) => {

  response.render("forcedcontinuity", {layout: "index"});
});

router.get('/roachmotel', async(request, response) => {

  response.render("roachmotel", {layout: "index"});
});

router.get('/finish', async(request, response) => {

  response.render("finish", {layout: "index"});
});

let SERVER_PORT = process.env.PORT || 3000;

app.listen(SERVER_PORT, () => {
  console.log(`Listening on port ${SERVER_PORT}...`);
  console.log('Visit this URL in your browser to see the web app:');
  console.log();
  console.log(`    http://localhost:${SERVER_PORT}`);
  console.log();
});
