const gulp = require('gulp');


gulp.task('html:dev', () => {
    return gulp.src('./src/client/index.html')
        .pipe(gulp.dest('./public/'));
});
