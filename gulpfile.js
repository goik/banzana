var gulp 			= require("gulp");
var concatJS 	= require('gulp-concat');
var rename 		= require("gulp-rename");
var minifyCSS 	= require('gulp-mini-css');
var notify 		= require('gulp-notify');

gulp.task("defaultJS", function() {
	return gulp.src([
				"js/jquery-1.11.3.min.js",
				"js/jquery.easing.1.3.min.js",
				"js/jquery.mousewheel.min.js",
				"js/jquery.mCustomScrollbar.concat.min.js",
				"js/owl.carousel.js",
				"js/fontsmoothie.min.js",
				"js/SmoothScroll.min.js",
				"js/executive.js",
				"js/fancySelect.js",
				"js/angular/angular.min.js",
				"js/angular/angular-sanitize.min.js",
				"js/angular/angular-route.min.js",
				"js/directives.js"
			])
	.pipe(concatJS("all.js"))
	.pipe(rename("all.min.js"))
	.pipe(gulp.dest("js/"));
});

gulp.task("defaultCSS", function(){
	gulp.src("css/style.css")
	.pipe(minifyCSS())
	.pipe(rename("style.min.css"))
	.pipe(gulp.dest("css/"))
	.pipe(notify("DONE!!!"))
});

gulp.task("watch", function(){
	gulp.watch("css/*.css",["defaultCSS"])
	gulp.watch("js/*.js",["defaultJS"])
});