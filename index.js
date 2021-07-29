const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const Handlebars = require("handlebars");
const mongoose = require("mongoose");
const multer = require("./multer.js");
const filehelper = require("./file-helper.js");
const {
    allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
require("./models/Pet");
const Pet = mongoose.model("pet");


//view engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.engine(
    "handlebars",
    handlebars({
        handlebars: allowInsecurePrototypeAccess(Handlebars),
        defaultLayout: "main",
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true,
            allowedProtoMethods: true,
        }
    })
);

//public
const path = require("path");
app.use(express.static(path.join(__dirname, "/public")));

//favicon
//<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
const favicon = require('serve-favicon');
app.use(favicon(path.join(__dirname, '/', 'favico.ico')))


//db
mongoose.connect('mongodb://localhost/petz', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexão realizada com sucesso!");
}).catch((err) => {
    console.log(err);
});


//routes
app.get("/", (req, res) => {
    Pet.find({}).then((pet) => {
        if (pet.length) {
            pet.forEach((p) => {
                p.foto = p.foto.slice(0, -3);
                p.foto += "webp";
            });
            console.log(pet);
            res.render("index", { pets: pet });
        } else {
            res.render("index", { zero: true });
        }

    }).catch((err) => {
        console.log(err);
    });
    //res.render("index");
});


app.post("/cadPet", multer.single('image'), (req, res, next) => {
    if (req.file) {

        filehelper.compressImage(req.file, 300)
            .then(newPath => {
                //res.send("Upload e compressão realizados com sucesso! O novo caminho é:" + newPath);
                const pet = Pet.create({ nome: req.body.nome, idade: req.body.idade, med: req.body.med, foto: newPath, nomeP: req.body.nomeP, tel: req.body.tel }, (err) => {
                    if (err) throw err;
                    res.redirect("/");
                });
            })
            .catch(err => console.log(err));
    }

    //return res.send('Houve erro no upload!');
});

app.listen(8080);