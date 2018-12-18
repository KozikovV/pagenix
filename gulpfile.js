var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
let cleanCSS = require('gulp-clean-css');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');
const webpack = require('webpack-stream');
var critical = require('critical').stream;
//SASS
gulp.task('sass', function () {
    return gulp.src('./src/scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./src/css'))
      .pipe(browserSync.stream());
  });
//Autoprefixer + minificator
gulp.task('prefixer', () =>
gulp.src('./src/css/*.css')
   .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
   }))
   .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./public/css'))
);
//AUTORELOAD
gulp.task('serve', function() {
  browserSync.init({
      server: {
          baseDir: "public"
      }
  });
});
//webpack-stream
gulp.task('webpack', function() {
  return gulp.src('.src/js/main.js')
   .pipe(webpack( require('./webpack.config.js') ))
   .pipe(gulp.dest('public/js'));
});
//critical
gulp.task('critical', function () {
  return gulp.src('./public/*.html')
      .pipe(critical({base: 'public/', inline: true, css: 'public/css/main.css'}))
      .on('error', function(err) { log.error(err.message); })
      .pipe(gulp.dest('public'));
});


gulp.task('start', function () {
    gulp.watch('./src/**/*.scss', gulp.series('sass'));
    gulp.watch('./src/**/**.css', gulp.series('prefixer'));
    gulp.watch('./src/js/*.js', gulp.series('webpack'));
    //gulp.watch('public/css/main.css', gulp.series('critical'));
    gulp.watch("./public/css/*.css", gulp.series('serve')).on('change', browserSync.reload);
  });