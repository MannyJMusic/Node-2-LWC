const path = require('path');
module.exports = {
    mode: "production",
    entry: "./webpack-src/index",
    output: {
        // options related to how webpack emits results
        path: path.resolve(__dirname, "dist"), // string
        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)
        filename: "bundle.js", // string
        // the filename template for entry chunks
        publicPath: "/assets/", // string
        // the url to the output directory resolved relative to the HTML page
        library: "<libname>", // string,
        // the name of the exported library
        libraryTarget: "umd", // universal module definition
        // the type of the exported library
    },
};