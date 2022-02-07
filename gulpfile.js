import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

// Passing values to the global variable
global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
	plugins: plugins
}

// Import tasks
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { server } from "./gulp/tasks/server.js";
import { js } from "./gulp/tasks/js.js";
import { scss } from "./gulp/tasks/scss.js";
import { html } from "./gulp/tasks/html.js";
import { images } from "./gulp/tasks/images.js";
import { spritesPNG, spritesSVG } from "./gulp/tasks/sprites.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { zip } from "./gulp/tasks/zip.js";


// Watch files change 
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.js, js);
	gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.images, images);
    gulp.watch(path.src.sprites_png, spritesPNG);
    gulp.watch(path.src.sprites_svg, spritesSVG);
}

// Series font processing
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

// Main tasks
const mainTasks = gulp.series(fonts, spritesPNG, spritesSVG, gulp.parallel(copy, html, scss, js, images));

// Building task scenarios
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const buildZIP = gulp.series(reset, mainTasks, zip);

// Export scenarios
export { dev }
export { build }
export { buildZIP }
export { spritesPNG }
export { spritesSVG }

// Default scenario
gulp.task('default', dev);