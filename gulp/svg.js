const gulp = require('gulp');


gulp.task('svg:dev', () =>
    gulp.src('./src/client/svg/**/*.svg')
        .pipe(gulp.dest('./public/svg/')));
