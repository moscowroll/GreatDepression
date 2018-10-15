var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browsersync = require('browser-sync')


gulp.task('sass',function() {
  gulp.src('app/sass/*.sass')
  .pipe(sass())
  .pipe(gulp.dest('app/css'))
  .pipe(browsersync.reload({stream:true}));

});


gulp.task('browsersync', function() {
  browsersync({
    server:{
      baseDir: 'app'
    }
  })

})



gulp.task('watch', ['browsersync', 'sass'] ,function() {
  gulp.watch('app/sass/*.sass', ['sass']);
  gulp.watch('app/*.html', browsersync.reload);
  gulp.watch('app/js/*.js', browsersync.reload);


});
