const gulp = require('gulp'),
    uglify = require('gulp-uglify-es').default,
    concat = require('gulp-concat'),
    less = require('gulp-less'),
    cleanCSS = require('gulp-clean-css'),
    nano = require('gulp-cssnano'),
    watch = require('gulp-watch'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('build_js', function (done) {
    // js
    gulp.src(['./js/*.js'])
        .pipe(concat('main.min.js'))
        .pipe(uglify({
            output: {
                comments: false
            }
        }))
        .pipe(gulp.dest('./build/js'));

	done();
});

//css tasks
gulp.task('build_css', function (done) {
    gulp.src('./less/concat.less')
        .pipe(concat('main.min.css'))
        .pipe(less())
        .pipe(autoprefixer('last 10 versions', 'ie 9'))
        .pipe(cleanCSS({
            compatibility: 'ie8',
            level: {1: {specialComments: 0}}
        }))
        .pipe(gulp.dest('./build/css'));

    done();
});

gulp.task('watch_styles', function() {
    gulp.watch('./less/**/*.less', gulp.series('build_css'));
});
