'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FolderSchema = new Schema({
    name: {
        type: String
    }
});

module.exports = mongoose.model('Folder', FolderSchema);
