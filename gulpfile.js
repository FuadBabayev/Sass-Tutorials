const { src, dest, watch, series } = require('gulp');           // node_modules klasörü içerisinden gulp kütüphanesini çağırıyoruz
const sass = require('gulp-sass')(require('sass'));             // gulp-sass kütüphanesini çağırıyoruz
const purgecss = require('gulp-purgecss');                      // npm i gulp-purgecss --save-dev
const cssnano = require('gulp-cssnano');                        // npm i gulp-cssnano --save-dev

function buildStyles(){                                         // hangi dosyanın, hangi dosya ile değiştirileceğini belirtiyoruz
    return src('sass/**/*.scss')
    .pipe(sass())
    .pipe(purgecss({ content: ['*.html']}))
    .pipe(cssnano())
    .pipe(dest('css'))
}

function watchTask(){                                           // index.scss dosyasında değişiklik olduğunda buildStyles fonksiyonunu çalıştır
    watch(['sass/**/*.scss', '*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask);               // default olarak çalıştırılacak fonksiyonu belirtiyoruz