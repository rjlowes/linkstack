'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

let UserSchema = mongoose.Schema({
    email: String,
    password: String,
    title: String,
    firstname: String,
    lastname: String
});

/**
 * Generate a password hash
 */
UserSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

/**
 *
 */
UserSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};


exports = mongoose.model('User', UserSchema);

