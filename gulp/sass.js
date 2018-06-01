const gulp = require('gulp');
const sass = require('gulp-sass');


gulp.task('sass:dev', () => {
    return gulp.src('./src/client/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/styles/'));
});
