"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import browsersync from "browser-sync";

gulp.task("serve", () => {
    browsersync.init({
        proxy: 'ecollege.loc',
        port: 4000,
        notify: true
    });

    gulp.watch(paths.sass.watch, gulp.parallel("sass"));
    gulp.watch(paths.vendorCss.watch, gulp.parallel("vendor-css"));
    gulp.watch(paths.images.watch, gulp.parallel("images"));
    gulp.watch(paths.fonts.watch, gulp.parallel("fonts"));
    gulp.watch(paths.scripts.watch, gulp.parallel("webpack"));
});