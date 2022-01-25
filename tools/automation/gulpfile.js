const gulp = require('gulp');
const server = require('gulp-server-livereload');

gulp.task('build', cb => {
    console.log('Build site');
    setTimeout(cb, 1200);
});

gulp.task('serve',function(cb){
    gulp.src('www')
        .pipe(server({
            livereload: false,
            open: true,
        }));
})