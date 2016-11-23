var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');

gulp.task('default', function () {

	var templateData = {
			firstName: 'Kaanon'
		},
		options = {
			ignorePartials: true, //ignores the unknown footer2 partial in the handlebars template, defaults to false
			partials : {
				footer : '<footer>the end</footer>'
			},
			batch : ['./src/parts'],
			helpers : {
				capitals : function(str){
					return str.toUpperCase();
				}
			}
		};

	return gulp.src('src/template.html')
		.pipe(handlebars(templateData, options))
		.pipe(gulp.dest('dist'));
});