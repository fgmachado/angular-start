var gulp = require('gulp');
var inject = require('gulp-inject');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('vendorjs', function() {
    var scripts = [
        'src/vendor/jquery/dist/jquery.min.js',
        'src/vendor/bootstrap/dist/js/bootstrap.min.js',
        'src/vendor/angular/angular.min.js',
        'src/vendor/angular-route/angular-route.min.js'
    ];

    return gulp.src(scripts)
        .pipe(concat('vendor.min.js'))
        .pipe(gulp.dest('www/js'))
        .pipe(uglify())
        .pipe(gulp.dest('www/js'));
});

gulp.task('vendorcss', function() {
    var styles = [
        'src/vendor/bootstrap/dist/css/bootstrap.min.css'
    ];

    return gulp.src(styles).pipe(concat('vendor.min.css')).pipe(gulp.dest('www/css'));
});

gulp.task('vendorfonts', function() {
    var fonts = [
        'src/vendor/bootstrap/dist/fonts/*.*'
    ];

    return gulp.src(fonts).pipe(gulp.dest('www/fonts'));
});

gulp.task('appjs', function() {
    var scripts = [
        'src/app/core/Globals.js',
        'src/app/app.js',
        'src/app/config/app.modules.js',
        'src/app/config/app.constants.js',
        'src/app/config/app.routes.js',
        'src/app/core/Route.js',
        'src/app/core/ActionService.js',
        'src/app/core/BaseService.js',
        'src/app/components/*.js',
        'src/app/controllers/*.js',
        'src/app/services/*.js'
    ];

    return gulp.src(scripts)
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('www/js'))
        .pipe(uglify())
        .pipe(gulp.dest('www/js'));
});

gulp.task('inject', function () {
    var scripts = [
        'www/js/vendor.min.js', 
        'www/js/app.min.js',
        'www/css/*.css'
    ];

    var target = gulp.src('./www/index.html');
    var sources = gulp.src(scripts, { read: false });
    return target.pipe(inject(sources), { relative: true }).pipe(gulp.dest('./www'));
});

gulp.task('build', ['vendorjs', 'vendorcss', 'vendorfonts', 'appjs', 'inject']);