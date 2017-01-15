var gulp = require('gulp');
var browserify = require('gulp-browserify');
var reactify = require('reactify');

//process all javascript 
//allow require all module 
gulp.task('scripts', function(){
	gulp.src('src/app.js')//define source file
		.pipe(browserify({
			insertGlobals: false,
			debug: true,
			transform: [reactify]//transform using rectify
		}))
		.pipe(gulp.dest('./dist/js'));//put in dest folder
});

gulp.task('watch', function(){
	gulp.watch(['src/**/*/.js', 'src/**/*.jsx'], ['scripts']);
});

gulp.task('default', ['scripts', 'watch']);