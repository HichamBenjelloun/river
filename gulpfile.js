var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var path = require('path');


gulp.task('build', function () {
    return browserify({
        entries: 'index.js',
        extensions: ['.js'],
        debug: true
    })
        .transform(babelify.configure({stage: 0}))
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('build'));
});

gulp.task('compress', ['build'], function() {
    return gulp.src('build/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build'));
});

gulp.task('default', ['build', 'compress']);
