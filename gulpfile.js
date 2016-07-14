
var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    gulpMocha = require('gulp-mocha'),
    env = require('gulp-env'),
    supertest = require('supertest'),
    debug = require('gulp-debug'),
    inject = require('gulp-inject'),
    tsc = require('gulp-typescript'),
    tslint = require('gulp-tslint'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del'),
    Config = require('./gulpfile.config'),
    tsProject = tsc.createProject('tsconfig.json'),
    browserSync = require('browser-sync'),
    superstatic = require( 'superstatic' );


gulp.task('default', ['browser-sync'], function () {
});

gulp.task('browser-sync',['nodemon'], function() {
	browserSync.init(null, {
		proxy: "http://localhost:3000",
        files: ["public/**/*.*"],
        browser: "google chrome",
        port: 7000,
	});
});

gulp.task('nodemon',function (cb) {
	
	var started = false;
	
	return nodemon({
		script: 'app.js'
	}).on('start', function () {
		if (!started) {
			cb();
			started = true; 
		} 
	});
});

gulp.task('typescript-compile', function() {
    var tsResult = tsProject.src() // instead of gulp.src(...) 
        .pipe(tsc(tsProject));
 
    return tsResult.js.pipe(gulp.dest('release'));
});

gulp.task('watch', ['typescript-compile'], function() {
    gulp.watch('"public/**/*.ts', ['typescript-compile']);
});