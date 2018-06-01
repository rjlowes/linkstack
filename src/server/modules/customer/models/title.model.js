'use strict';

const mongoose = require('mongoose');

let TitleSchema = mongoose.Schema({
    text: String
});


exports = mongoose.model('Title', TitleSchema);
