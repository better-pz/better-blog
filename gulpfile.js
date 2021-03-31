const gulp = require('gulp')
const fs = require('fs')
const path = require('path')
const postcss = require('gulp-postcss')
const buffer = require('vinyl-buffer')
const spritesmith = require('gulp.spritesmith')
const spritesPath = path.join(__dirname, 'src/assets/img')

// const STATIC_PATH = '/gp1'

let spritesArray = []
;(function(dir) {
  let fileList = []
  fs.readdirSync(dir).forEach((name) => {
    const spritesFile = path.join(spritesPath, name)
    const stats = fs.lstatSync(spritesFile)
    if (stats.isFile() && /png$/.test(name)) {
      fileList.push(spritesFile)
    } else if (stats.isDirectory() && fs.readdirSync(spritesFile).length) {
      const gulpTask = `sprites:${name}`
      spritesArray.push(gulpTask)
      gulp.task(gulpTask, (done) => {
        let spritesData = gulp.src(path.join(spritesFile, '*.png')).pipe(
          spritesmith({
            imgName: `${name}_icon.png`, // 生成雪碧图的路径
            imgPath: `/img/${name}_icon.png`, // 手动指定路径，会直接出现在background的属性值中
            cssName: `_${name}_icon.less`, // 生成less文件，方便引用。
            cssTemplate: (data) => {
              return cssTemplate2(data)
            }
          })
        )
        spritesData.css.pie(gulp.dest(path.join(__dirname, 'src/assets/css')))
        spritesData.img
          .pipe(buffer())
          .pipe(gulp.dest(path.join(__dirname, 'public/images/')))
        done()
      })
    }
  })
  if (fileList.length) {
    spritesArray.push('sprites: app')
    gulp.task('sprites: app', (done) => {
      let spritesData = gulp.src(fileList).pipe(
        spritesmith({
          imgName: `app_icon.png`, // 生成雪碧图的路径
          imgPath: `/img/app_icon.png`, // 手动指定路径，会直接出现在background的属性值中
          cssName: `_app_icon.less`, // 生成less文件，方便引用。
          cssTemplate: (data) => {
            return cssTemplate2(data)
          }
        })
      )
      spritesData.css.pipe(gulp.dest(path.join(__dirname, 'src/assets/css')))
      spritesData.img
        .pipe(buffer())
        .pipe(gulp.dest(path.join(__dirname, 'public/img/')))
      done()
    })
  }
})(spritesPath)

var cssTemplate2 = function(data) {
  let arr = [],
    // width = data.spritesheet.px.width,
    // height = data.spritesheet.px.height,
    url = data.spritesheet.image

  data.sprites.forEach(function(sprite) {
    arr.push(
      `.sprite-${sprite.name} {
        display: inline-block;
        vertical-align: middle;
        width: ${sprite.px.width};
        height: ${sprite.px.height};
        background: url("${url}") no-repeat;
        background-position: ${sprite.px.offset_x} ${sprite.px.offset_y};
      }`
    )
  })
  return arr.join('\n')
}

gulp.task('css', function() {
  var processors = []
  return gulp
    .src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'))
})

gulp.task('default', gulp.series(spritesArray))
