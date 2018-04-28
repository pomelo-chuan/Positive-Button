const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const del = require('del');
const rename = require('gulp-rename');

gulp.task('delDist', function () {
    del(['./dist'])
});

gulp.task('css', function () {
    gulp.src('./styles/positive-button.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist'));
});

gulp.task('copy', () => {
    gulp.src('./styles/positive-button.css')
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['delDist', 'css', 'copy']);
