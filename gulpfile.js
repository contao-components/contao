'use strict';

var gulp = require('gulp'),
    csso = require('gulp-csso'),
    ignore = require('gulp-ignore'),
    rename = require('gulp-rename'),
    svgo = require('gulp-svgo'),
    pump = require('pump');

gulp.task('minify-css', function (cb) {
    pump([
            gulp.src('css/*.css'),
            ignore.exclude('*.min.css'),
            csso({
                comments: false,
                restructure: false
            }),
            rename({
                suffix: '.min'
            }),
            gulp.dest('css')
        ],
        cb
    );
});

gulp.task('minify-images', function (cb) {
    pump([
            gulp.src('images/*.svg'),
            svgo(),
            gulp.dest('images')
        ],
        cb
    );
});

gulp.task('default', gulp.parallel('minify-css', 'minify-images'));
