var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src(['app/sass/*.scss', 'app/sass/*.sass'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/dist/css'))
});

gulp.task('hello', function(){
    console.log('Hello world!!');
});


gulp.task('sass:watch', function(){
    gulp.watch(['app/sass/*.scss', 'app/sass/*.sass'],  gulp.parallel('sass'))
})