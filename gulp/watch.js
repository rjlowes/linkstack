const gulp = require('gulp');


gulp.task('watch', () => {
    gulp.watch('src/client/scripts/**/*.js', ['scripts:dev']);
    gulp.watch('src/client/scripts/**/*.html', ['scripts:dev']);
    gulp.watch('src/client/sass/**/*.scss', ['sass:dev']);
    gulp.watch('src/client/images/**/*.*', ['images:copy']);
    gulp.watch('src/client/*.html', ['html:dev']);
    gulp.watch('src/client/fonts/*.*', ['fonts:copy']);
    gulp.watch('src/client/svg/*.*', ['svg:dev']);

    // return;
});
