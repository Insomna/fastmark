//Подключаем нужные библиотеки
var gulp         = require('gulp'),
	rename       = require('gulp-rename'),
	uglify       = require('gulp-uglify');

//Укажем пути для файлов
gulp.task('build', function () {
	gulp.src('src/fastmark.js')
		.pipe(gulp.dest('dist/'))
		.pipe(uglify({
			preserveComments: 'license'
		}))
		.pipe(rename({
				suffix: '.min'
			}))
		.pipe(gulp.dest('dist/'))
});