const {Schema, model} = require("mongoose");
const amiiboSchema = new Schema({
    character: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    tail: {
        type: String,
        require: true
    }, 
    idUsuario: {
        type:String,
        require: true
    }
});

module.exports = model("Amiibo", amiiboSchema);