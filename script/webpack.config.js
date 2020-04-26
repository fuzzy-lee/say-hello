var path = require('path');

module.exports = function () {
    return {

        entry: "./src/index.js",
        output: {
            path: path.resolve(__dirname, '../dist'),
            filename: "say-hello.js",
            library: 'sayHello',
            libraryTarget: "umd",

        }

    }
};