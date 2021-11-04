const gulp = require('gulp'),
    uglify = require('gulp-uglify-es').default,
    concat = require('gulp-concat'),
    less = require('gulp-less'),
    cleanCSS = require('gulp-clean-css'),
    nano = require('gulp-cssnano'),
    watch = require('gulp-watch');

gulp.task('build_js', function (done) {
    // js
    gulp.src(['./js/*.js'])
        .pipe(concat('main.min.js'))
        .pipe(uglify({
            output: {
                comments: false
            }
        }))
        .pipe(gulp.dest('./js/min'));

	done();
});

//css tasks
gulp.task('build_css', function (done) {
    gulp.src('./css/main.less')
        .pipe(less())
        .pipe(cleanCSS({
            compatibility: 'ie8',
            level: {1: {specialComments: 0}}
        }))
        .pipe(gulp.dest('./css'));

    done();
});

gulp.task('watch_styles', function() {
    gulp.watch('./css/**/*.less', gulp.series('build_css'));
});
