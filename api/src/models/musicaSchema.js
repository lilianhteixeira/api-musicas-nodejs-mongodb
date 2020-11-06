const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const musicaSchema = new Schema({
    id:{
        type: Number,
        auto: true,
        required: true 
    },
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    durations_ms:{
        type: Number,
        required: true
    },
    preview_url:{
        type: String,
        required: true
    }
},
{
    collection: "musicas",
    versionKey: false
}
);

const musicasCollection = mongoose.model("musicas", musicaSchema);

module.exports = {musicasCollection}