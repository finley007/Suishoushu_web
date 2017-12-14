var gulp = require('gulp');
var notify = require("gulp-notify");
var runSequence = require('run-sequence');
var minimist = require('minimist');

var knownOptions = {
  string: 'env',
  default: { env: 'localhost' }
}; 

var serverLocation = {
	localhost: '/Users/finley/Finley/workspace/php/Suishoushu-web',
	dev: '/var/www/html/dev',
	prod: '/var/www/html/prod'
}

var options = minimist(process.argv.slice(2), knownOptions);

gulp.task('copy', function() {
    gulp.src(['./**/*.php'])
        .pipe(gulp.dest(serverLocation[options.env]))
	gulp.src(['./**/*.html'])
        .pipe(gulp.dest(serverLocation[options.env]))
	gulp.src(['./**/*.js'])
        .pipe(gulp.dest(serverLocation[options.env]))
	gulp.src(['./**/*.css'])
        .pipe(gulp.dest(serverLocation[options.env]))
  gulp.src(['./**/*.woff'])
        .pipe(gulp.dest(serverLocation[options.env]))
});

gulp.task('default', function(callback) {
  runSequence(['copy'],
    callback
  )
})