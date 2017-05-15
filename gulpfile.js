var gulp = require('gulp'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload');

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function (){
    livereload.listen();
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('sass/*.scss').on('change', livereload.changed);
    gulp.watch('css/*.css').on('change', livereload.changed);
    gulp.watch('*.html').on('change', livereload.changed);
    gulp.watch('js/*.js').on('change', livereload.changed);
});