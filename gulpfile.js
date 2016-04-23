var gulp = require('gulp');
var babel = require('gulp-babel');
var less = require('gulp-less');
var cleancss = require('gulp-clean-css');
var csscomb = require('gulp-csscomb');
var rename = require('gulp-rename');
var LessPluginAutoPrefix = require('less-plugin-autoprefix');

var autoprefix= new LessPluginAutoPrefix({ browsers: ["last 2 versions"] });

gulp.task('watch', function() {
    gulp.watch('./src/es6/*.es6', ['build']);
    gulp.watch('./src/less/*.less', ['build']);
});

gulp.task('build', function() {
    gulp.src('./src/es6/*')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./dist/js/'));
    gulp.src('./*.less')
        .pipe(less({
            plugins: [autoprefix]
        }))
        .pipe(csscomb())
        .pipe(gulp.dest('./dist/css/'))
        .pipe(cleancss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('default', ['build']);