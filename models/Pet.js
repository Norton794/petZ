const mongoose = require("mongoose");

const Pet = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    },
    med: {
        type: String,
        required: true
    },
    foto: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});

mongoose.model("pet", Pet);