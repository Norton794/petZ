const express = require("express");
const app = express();
const handlebars = require("express-handlebars");

const mongoose = require("mongoose");
const multer = require("./multer.js");
const filehelper = require("./file-helper.js");
//view engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//public
const path = require("path");
app.use(express.static(path.join(__dirname, "/public")));

//db

mongoose.connect('mongodb://localhost/pets', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexão realizada com sucesso!");
}).catch((err) => {
    console.log(err);
});


//routes
app.get("/", (req, res) => {
    res.render("index");
});

app.listen(8080);