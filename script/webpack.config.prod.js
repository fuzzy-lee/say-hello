var config = require("./webpack.config");

module.exports = {
    ...config(),
    mode: "development",
    //排除外部依赖
    externals: {
        lodash: {
            commonjs: "lodash",
            commonjs2: "lodash",
            amd: "lodash",
            root: "_",
        }
    }
};
