// Take project folder name
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());
const buildFolder = './build'; // Сan also use 'rootFolder'
const srcFolder = './src';

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/images/`,
        fonts: `${buildFolder}/fonts/`,
        files: `${buildFolder}/files/`
    },
    src: {
        js: `${srcFolder}/js/script.js`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.pug`, // .html
        images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,ico,webp}`,
        svg: `${srcFolder}/images/**/*.svg`,
        files: `${srcFolder}/files/**/*.*`,
        sprites_png: `${srcFolder}/images/icons/png/*.png`,
        sprites_svg: `${srcFolder}/images/icons/svg/*.svg`
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.pug`,
        images: `${srcFolder}/images/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
        files: `${srcFolder}/files/**/*.*`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder
}