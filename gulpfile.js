// ===================================
// Required node modules
// ===================================
const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const uglify = require('gulp-uglify');
const minify = require('gulp-clean-css');
const concat = require('gulp-concat');
const notify = require('gulp-notify');      

// ===================================
// Javascript global task:
// ===================================

gulp.task('javascript', function(){
  gulp.src('js/*.js')
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(concat('script.js'))
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(sourcemaps.write('.'))
  // .pipe(uglify())
  .pipe(gulp.dest('min'))
  .pipe(reload({stream:true}))
  .pipe(notify({ message: 'global js'}));
});

// ===================================
// Sass task
// ===================================

gulp.task('sass', function(){
    gulp.src('sass/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer('>1%', 'ios_saf 8', 'ie 11'))
    .pipe(minify())
    .pipe(gulp.dest('min'))
    .pipe(reload({stream:true}))
    .pipe(notify({ message: 'scss'}));
});

// ===================================
// PHP task
// ===================================

gulp.task('php', function(){
    gulp.src(['index.php'])
    .pipe(reload({stream:true}));
});

// ===================================
// Browser-sync task
// ===================================

gulp.task('browser-sync', function(){
    browserSync({
        proxy: "localhost:8888",
        browser: "google chrome"
    });
});

// ===================================
// Watch tasks
// ===================================

gulp.task('watch', function(){
    gulp.watch('js/*.js', ['javascript']);
    gulp.watch('sass/**/*.scss', ['sass']);
    gulp.watch('index.php', ['php']);
});

// ===================================
// Default task
// ===================================

gulp.task('default', ['javascript', 'sass', 'php', 'browser-sync', 'watch']);