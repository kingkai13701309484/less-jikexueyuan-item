var gulp = require('gulp');
var uglify=require('gulp-uglify');   //js压缩
var concat=require('gulp-concat');   //文件合并
var less=require('gulp-less');   //less
var minifycss=require('gulp-minify-css');  //css压缩
var imagemin=require('gulp-imagemin');  //图片压缩
var  htmlmin=require('gulp-htmlmin');   //html压缩

//less自动转换css
gulp.task('less', function() {
	gulp.src('stylesheets/styles.less')
		.pipe(less())
		.pipe(gulp.dest('build'));  
});

//css压缩合并
gulp.task('css', function() {
	gulp.src('stylesheets/*.css')
		.pipe(minifycss())
		.pipe(concat('all.min.css'))
		.pipe(gulp.dest('build')); 
});

//html压缩
gulp.task('html', function() {
	gulp.src('*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('build')); 
});

//图片压缩
gulp.task('image', function() {
	gulp.src('images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images/')); 
});

//js压缩合并
gulp.task('default',['less','css','html','image'], function() {
	gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(concat('all.min.js'))
		.pipe(gulp.dest('build'));  
});