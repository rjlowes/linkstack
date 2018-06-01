'use strict';

const chai = require('chai');
const expect = chai.expect;
const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');




describe('Customer tests', () => {

    it('should be true', () => {
        expect(true).to.equal(true);
    });
});

// /**
//  * Module dependencies.
//  */
// // require('../../../../config/lib/mongoose').loadModels();
// var should = require('should'),
//     mongoose = require('mongoose'),
//     User = mongoose.model('User'),
//     Link = mongoose.model('Link');

// /**
//  * Globals
//  */
// var user,
//     link,
//     credentials;

// /**
//  * Unit tests
//  */
// describe('Test suite test', function () {
    
//     beforeEach(function (done) {
//         credentials = {
//             email: 'user@example.com',
//             password: 'password123'
//         };

//         user = new User();
//         user.local.email = credentials.email;
//         user.local.password = user.generateHash(credentials.password);
//         user.local.username = 'testuser';

//         user.save(function (err) {
//             done();
//         });
//     });

//     it('should be true', function () {
//         should.equal(true, true, 'works');
//     });
// });