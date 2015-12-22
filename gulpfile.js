var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var markdown = require('gulp-markdown');
var through = require('through2');
var fs = require('fs');
var gutil = require('gulp-util');

var paths = {
	images: 'images/**/*',
	markdown: 'src/markdown/*.md',
};

gulp.task('images', function() {
	return gulp.src(paths.images)
		.pipe(imagemin({ optimizationLevel: 5 }))
		.pipe(gulp.dest('img'));
});

gulp.task('markdown', function () {
	return gulp.src(paths.markdown)
		.pipe(markdown())
		.pipe(through.obj(function (file, enc, cb) {
			// TODO: support markdown files without an template.html.
			fs.readFile(gutil.replaceExtension(file.path, '.template.html'), 'utf-8', function (e, r) {
				if (e) {
					cb(e);
				} else {
					file.contents = new Buffer(r.replace('<%= content %>', file.contents.toString('utf-8')));
					file.path = gutil.replaceExtension(file.path, '.html');
					cb(null, file);
				}
			});
		}))
		.pipe(gulp.dest('./'));
});

gulp.task('default', ['images', 'markdown']);