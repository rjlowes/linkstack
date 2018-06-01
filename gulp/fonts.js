let gulp = require('gulp');


gulp.task('fonts:copy', () =>
    gulp.src('./src/client/fonts/*.*')
        .pipe(gulp.dest('./public/fonts')));
