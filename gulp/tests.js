'use strict';

const mocha = require('gulp-mocha');
const gulp = require('gulp');
const chalk = require('chalk');


gulp.task('mocha', (done) => {
    const mongoose = require('../app/server/config/lib/mongoose.js');
    let error;

    // mongoose.loadModels();

    // Load models isn't working. Mocha tests seem to be requiring a different mongoose (from the lib)
    // This is exactly like meanjs and can't see why. Only real difference appears to be mocha versions in
    // package.json
    mongoose.connect(function () {
        mongoose.loadModels();
        const mgoose = require('mongoose');
        let Customer = mgoose.model('Customer');

        // console.log(Customer);
        
        gulp.src('./app/server/tests/modules/customer/models/*.js')
            .pipe(mocha({reporter: 'spec', timeout: 10000}))
            .on('error', err => {
                console.log(chalk.bgRed('Error in mocha test.'))
                console.log(err);
                error = err;
            })
            .on('end', () => {
                mongoose.disconnect(() => done(error))
            });
    });
});

