 'use strict';
 
 var gulp = require('gulp');

 //合并，压缩css
 var concat = require('gulp-concat');
 var cssnano = require('gulp-cssnano');
 gulp.task('style', function(){
     gulp.src(['./css/*.css'])
     	 .pipe(concat('yard.min.css'))  
         .pipe(cssnano())
         .pipe(gulp.dest('dist'));
 });

 //压缩js
 var uglify = require('gulp-uglify');
 gulp.task('script', function(){
     gulp.src(['./js/*.js'])
         .pipe(uglify())
         .pipe(gulp.dest('dist'));
 });

//默认任务
gulp.task('default', ['style','script']);