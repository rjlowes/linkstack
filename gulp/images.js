const gulp = require('gulp');


gulp.task('images:copy', () => {
    return gulp.src('./app/client/images/**/*.*')
        	   .pipe(gulp.dest('./public/images'));
});
