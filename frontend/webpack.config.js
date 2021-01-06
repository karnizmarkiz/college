"use strict";
import path from 'path';
import fs from 'fs';

const directoryPath = path.join(__dirname, 'src/js');
const getFiles = () => {
    const entry = {};

    fs.readdir(directoryPath, function (err, files) {

        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }

        files.forEach(function (file) {
            // Do whatever you want to do with the file
            if (file.match(/([a-zA-Z0-9\s_\\.\-\(\):])+(.js)$/)) {
                entry[file.replace('.js', '')] = path.resolve(__dirname, `src/js/${file}`);
            }
        });
    });

    return entry
}

module.exports = {
    entry: getFiles(),
    output: {
        filename: "[name].js",
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: "initial",
                    name: "vendor",
                    enforce: true
                }
            }
        }
    }
};
