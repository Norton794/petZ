const express = require("express");
const app = express();
const handlebars = require("express-handlebars");

//view engine

app.engine('handlebars', handlebars({ defaultLayout: 'main' }))

app.listen(8080);