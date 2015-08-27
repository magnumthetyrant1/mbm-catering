
/*  gulpfile.js
    Tasks:
        - default :
        - sass
        - uglify
        - concat
        - optimize-images
        - nodemon
*/
var
    gulp    = require('gulp'),
    gutil   = require('gulp-util'),
    concat  = require('gulp-concat'),
    uglify  = require('gulp-uglify'),
    sass    = require('gulp-sass'),
    nodemon = require('gulp-nodemon')
;

gulp.task('sass', function() {
    gulp.src('./public/css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./public/css/*.scss', ['sass']);
});

gulp.task('default', ['sass:watch']);
