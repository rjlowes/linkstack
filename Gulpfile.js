const gulp = require('gulp');
const runSequence = require('run-sequence');
const requireDir = require('require-dir');

requireDir('./gulp');

gulp.task('default', () => {
    // runSequence('env:dev', 'clean:dev', 'sass:dev', 'html:dev', 'scripts:dev', 'server', 'watch');

    runSequence(
        // TODO change to use del and call 'clean'
        'clean:dev',
        'server',
        ['sass:dev', 'html:dev', 'fonts:copy', 'svg:dev'],
        'watch',
        'scripts:dev'
    );
});

gulp.task('dist', () => {

});
