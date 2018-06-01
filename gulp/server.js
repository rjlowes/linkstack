'use strict';

const gulp = require('gulp');
const nodemon = require('gulp-nodemon');


gulp.task('server', function () {
    const stream = nodemon({
        script: 'server.js',
        ignore: ['src/client'],
        watch: ['src/server/**'],
        ext: 'js html',
        // execMap: {
        //     js: "node --inspect"
        // },
        env: {
            'NODE_ENV': 'development'
        }
    });

    return stream;
});
