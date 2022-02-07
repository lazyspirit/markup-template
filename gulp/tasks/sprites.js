import spritesmith from "gulp.spritesmith";
import merge from "merge-stream";
import svgSprite from "gulp-svg-sprite";

export const spritesPNG = () => {
    const spritesData = app.gulp.src(`${app.path.src.sprites_png}`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "PNG sprite",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(spritesmith({
            imgName: 'sprites.png',
			cssName: '_sprites.scss',
			cssTemplate: 'src/scss/sprites/_sprites.hbs',
			retinaImgName: 'sprites@2x.png',
			retinaSrcFilter: 'src/images/icons/png/*@2x.png',
			padding: 2
		}));

    return merge(
        spritesData.img
            .pipe(app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "PNG sprite",
                    message: "Error: <%= error.message %>"
                })
            ))
            .pipe(app.gulp.dest(`src/images`)),
        spritesData.css
            .pipe(app.gulp.dest(`src/scss`))
    );
}

export const spritesSVG = () => {
    return app.gulp.src(`${app.path.src.sprites_svg}`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SVG",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: '../sprites.svg',
                    example: true
                }
            }
        }))
        .pipe(app.gulp.dest(`${app.path.build.images}`));
}