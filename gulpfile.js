var gulp = require('gulp');
var stylus = require('gulp-stylus');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('stylus', function() {
	gulp.src('./styl/main.styl')
  .pipe(sourcemaps.init())
	.pipe(stylus({compress: true}))
   .pipe(sourcemaps.write('map'))
	.pipe(gulp.dest('./css'));
});
