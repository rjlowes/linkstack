const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const named = require('vinyl-named');

gulp.task('scripts:dev', () => {
	return gulp.src(['./app/client/scripts/main.js'])
		.pipe(webpackStream(require('../webpack.config.local'), webpack))
		.pipe(gulp.dest('./public'));
});

