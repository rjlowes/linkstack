'use strict';

/**
 * 
 * See https://www.mongodb.com/blog/post/password-authentication-with-mongoose-part-1
 */

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

let CustomerSchema = mongoose.Schema({
    fullname: String,
    email: {type: String, required: true, index: {unique: true}},
    password: {type: String, required: true},
    title: String,
    firstname: String,
    lastname: String,
    fullname: String
});

/**
 * Generate a password hash
 */
CustomerSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

/**
 *
 */
CustomerSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

/**
 * Returns customer data without password
 */
CustomerSchema.methods.getSafeCustomer = function () {
    let data = Object.assign({}, this.toJSON());
    delete data.password;
    return data;
};


exports = mongoose.model('Customer', CustomerSchema);

