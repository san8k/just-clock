const gulp = require(`gulp`);
const sass = require(`gulp-sass`);
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const plumber = require('gulp-plumber');
const del = require(`del`);
const browserSync = require('browser-sync').create();
const rollup = require(`gulp-better-rollup`);
const sourcemaps = require(`gulp-sourcemaps`);

// sass.compiler = require(`node-sass`);

const clean = () => {
  return del([`dist/*`]);
}

const styles = () => {
  return gulp.src(`./app/sass/style.scss`)
    .pipe(sass())
    .pipe(rename(`style.css`))
    .pipe(autoprefixer({
      browsers: ['> 0.1%'],
      cascade: false
    }))
    .pipe(cleanCSS({level: 2}))
    .pipe(gulp.dest(`./dist/css`))
    .pipe(browserSync.stream());
};

const scripts = () => {
  return gulp.src(`./app/js/main.js`)
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(rollup({}, `iife`))
  .pipe(sourcemaps.write(``))
  .pipe(gulp.dest(`./dist/js`))
  .pipe(browserSync.stream());
};

const watch = () => {
  browserSync.init({
    server: {
        baseDir: "./"
    }
  });
  gulp.watch(`./app/sass/**/*.scss`, styles);
  gulp.watch(`./app/js/**/*.js`, scripts);
  gulp.watch(`./*.html`, browserSync.reload);
};

gulp.task(`build`, gulp.series(clean, gulp.parallel(styles, scripts)));
gulp.task(`start`, gulp.series(`build`, watch));