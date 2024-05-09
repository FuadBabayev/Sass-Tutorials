#  Setup SASS
1. Install Node.js
2. Install gulp as global, run this command (terminal, cmd): `npm install --global gulp-cli`
3. Create project folder: `md / mkdir sassproject`, `then cd sassproject`
4. Create index.html file: `echo > index.html`
5. Create index.scss file: `echo > index.scss`
6. Run and setup: `npm init` or `npm init -y`
7. Gulp install: `npm i gulp gulp-sass sass --save-dev` or `npm install gulp gulp-sass sass --save-dev`
8. Create gulpfile.js file: `echo > gulpfile.js`
9. Run Sass: `gulp` or `npx gulp`


> [!IMPORTANT]
> Inner part of **gulpfile.js** must be like that
```javascript
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return src('sass/**/*.scss')
        .pipe(sass())
        .pipe(dest('css'));
}

function watchTask() {
    watch(['sass/**/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchTask);

```


# Setup Purge CSS
1. Install purgecss, run this command (terminal, cmd): `npm install  gulp-purgecss --save-dev`
2. Minimalize css file run this command (terminal, cmd): `npm i gulp-cssnano --save-dev`

> [!IMPORTANT]
> Saytda olan butun deyisiklikler bitdikden, purgecss ve css minimalize sonra `gulpfile.js`-in son hali bele olmalidir
```javascript
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');
const cssnano = require('gulp-cssnano');

function buildStyles(){
    return src('sass/**/*.scss')
    .pipe(sass())
    .pipe(purgecss({ content: ['*.html']}))
    .pipe(cssnano())
    .pipe(dest('css'))
}

function watchTask(){
    watch(['sass/**/*.scss', '*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask);

```
