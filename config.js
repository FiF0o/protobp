module.exports = function() {
  // Configuration Options
  var config = {
    //TODO Move js file outside of assets....
    /**
     * This is the environment in wish you are working on
     * Options are:
     * - development
     * - production
     * - empty string
     * For the development build the output will be verbose.
     * For the production build the output will be compress and minified
     * If is set to and empty string the environment will be extract from
     * the NODE_ENV environment var.
     */
    environment: 'development',
    // Source code directory.
    source: 'source/',
    // Build directory, is where the compiled code will be output.
    build: 'build/',
    assets: 'assets/',
    // Where the images are inside the source folder.
    // they will be copied to the same dir on the build folder
    images: 'assets/img',
    fonts: 'assets/fonts',
    /**
     * Views directory. This is the dir where all the Jade files should live
     * Important: only will be compiled *.html files in this exact dir and not
     * any sub dir
     * you could use a subdir to put partials on it and include in html.
     */
    views: 'views/',
    /**
     * As this is a less based project, this is the dir for the less files.
     * Every file
     * under this dir will be watched for changes, but only the main.less file
     * will be compiled.
     */
    less: 'less/main.less',
    // Dir where the sass will be compiled
    css: 'assets/css',
    // Favicon
    favicon: 'favicon.ico',
    // This are the options that will be passed to the sass compiler
    lessOptions: {
      /**
       * This is how the compiled version of less will look like
       * Output style options are:
       * - expanded
       * - nested
       * - compact
       * - compressed
       */
      path: '',
      filename: '',
      compress: 'false',
      // Relative path to the css where the images dir is.
      imagePath: '../img'
    },
    lessJsOptions: {
      //env: "development",
      //async: false,
      //fileAsync: false,
      //poll: 1000,
      //functions: {},
      //dumpLineNumbers: "comments",
      //relativeUrls: false,
      //rootpath: ":/a.com/"
    },
    // Javascript directory
    jsDir: 'js',
    // Javascript file name
    jsName: 'app.js',
    // This is the browser sync options
    syncOptions: {
      // Entry point for the application
      index: 'index.html',
      // If this option is true, the project will be open in browser after compile.
      open: false,
      // Notify on all the browsers when the page updates.
      notify: true
    },
    /**
     * This is the relative to build dir for vendors assets like jquery. Vendors are
     * managed by bower and if the directory will be changed, you should change on
     * .bowerrc file in the root directory as well.
     */
    //TODO change relative paths in the index.html to point to the vendor
    // folder and no longer bower_component
    vendors: 'vendors'
  };
  return config;
};
