const gulp = require('gulp');


// Set NODE_ENV to 'development'
gulp.task('env:test', () => process.env.NODE_ENV = 'test');

// Set NODE_ENV to 'development'
gulp.task('env:dev', () => process.env.NODE_ENV = 'development');

// Set NODE_ENV to 'production'
gulp.task('env:prod', () => process.env.NODE_ENV = 'production');

