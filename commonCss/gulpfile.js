/*
 * @Author: renqingyue 
 * @Date: 2018-10-30 12:11:50 
 * @Last Modified by: renqingyue
 * @Last Modified time: 2018-10-30 14:59:54
 */
var gulp = require('gulp');
// 获取 cleancss 模块（用于压缩 CSS）
var cleanCSS = require('gulp-clean-css');
// 压缩 css 文件
// 在命令行使用 gulp csscompress 启动此任务
gulp.task('csscompress', function() {
    // 1. 找到文件
  return  gulp.src('./src/common.css')
    // 2. 压缩文件
        .pipe(cleanCSS())
        // 3. 另存压缩后的文件
        .pipe(gulp.dest('dist/css'));
});
// 在命令行使用 gulp auto 启动此任务
gulp.task('auto', function () {
    // 监听文件修改，当文件被修改则执行 script 任务
    // gulp.watch('js/1.js', ['jscompress']);
    gulp.watch('./src/common.css', ['csscompress']);
});