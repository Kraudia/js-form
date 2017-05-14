var gulp = require('gulp'),
    livereload = require('gulp-livereload');

gulp.task('watch', function (){
    livereload.listen();

    gulp.watch('css/*.css').on('change', livereload.changed);
    gulp.watch('*.html').on('change', livereload.changed);
    gulp.watch('js/*.js').on('change', livereload.changed);
});