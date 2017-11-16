var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('default', function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "."
    }
  });

  watch('./**/index.html', function() {
    browserSync.reload();
  });

  watch('./**/*.css', function() {
    browserSync.reload();
  });

  watch('./**/*.js', function() {
    browserSync.reload();
  })

});