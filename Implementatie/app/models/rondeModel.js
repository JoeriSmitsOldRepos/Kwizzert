/**
 * Created by Joeri55 on 16-10-2014.
 */
/*jslint node:true*/
/*jslint nomen: true*/
var mongoose = require('mongoose');

var rondeSchema = new mongoose.Schema({
    categorieen: [String],
    linkHash: String,
    vraagTekst: [String],
    status: Boolean,
    ingezonden: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Antwoord' }
    ]
});

module.exports = mongoose.model('Ronde', rondeSchema, 'ronden');