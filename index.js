const express = require("express");
const app = express();
const handlebars = require("express-handlebars");

//view engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//public
const path = require("path");
app.use(express.static(path.join(__dirname, "/public")));

//routes
app.get("/", (req, res) => {
    res.render("index");
});

app.listen(8080);