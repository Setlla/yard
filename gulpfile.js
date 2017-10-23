 'use strict';
 
 var gulp = require('gulp');

 //合并，压缩css
 var concat = require('gulp-concat');
 var cssnano = require('gulp-cssnano');
 var watch = require('gulp-watch');
 var connect = require('gulp-connect');//livereload
 
 gulp.task('style', function(){
     gulp.src(['./css/*.css'])
         .pipe(watch('./css/*.css'))
         .pipe(concat('yard.min.css'))
         .pipe(cssnano())
         .pipe(gulp.dest('dist'))
         .pipe(connect.reload());
 });

 //压缩js
 var uglify = require('gulp-uglify');
 gulp.task('script', function(){
     gulp.src(['./js/*.js'])
         .pipe(watch('./js/*.js'))
         .pipe(uglify())
         .pipe(gulp.dest('dist'))
         .pipe(connect.reload());
 });
 
//定义livereload任务
 gulp.task('connect', function () {
   	 connect.server({
         livereload: true
     });
 });
 
//监控css js变化
var watcher = gulp.watch(['views/css/*.css','views/js/*.js'], ['default']);

//默认任务
gulp.task('default', ['style','script']);