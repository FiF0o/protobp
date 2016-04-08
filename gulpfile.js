/**
 * Devtips Starter Kit Gulp configuration file
 * Feel free to modify this file as you need
 * if you find any bug or error, please submit an issue
 */

/*****************************************
   Browserify and Watchify are installed
             in package.json
 build cmd: run 'npm run browserify:build'
 watch cmd: run 'npm run browserify:watch'
*****************************************/

//TODO Add ESlint for babel
    //TODO Change source/js structure to have /js at the root and change import on function.js
//TODO !IMPORTANT! - Drop compass over Bourbon - !IMPORTANT!


// Include gulp plugins
  var gulp = require('gulp'),
      browserSync = require('browser-sync'),
      $ = require('gulp-load-plugins')({lazy: true}),
      del = require('del'),
      config = require('./config.js')(),
      plumber = require('gulp-plumber'),
      newer = require('gulp-newer'),
      jshint = require('gulp-jshint'),
      jade = require('gulp-jade'),
      concat = require('gulp-concat'),
      size = require('gulp-size'),
      uglify = require('gulp-uglify'),
      deporder = require('gulp-deporder'),
      //stripDebug = require('gulp-strip-debug'),
      postcss = require('gulp-postcss'),
      autoprefixer = require('autoprefixer'),
      lost = require('lost'),
      minifyCss = require('gulp-minify-css'),
      sourcemaps = require('gulp-sourcemaps'),
      compass = require('gulp-compass'),
      rename = require("gulp-rename"),
      iconfont = require('gulp-iconfont'),
      iconfontCss = require('gulp-iconfont-css'),
      async = require('async'),
      consolidate = require('gulp-consolidate'),
      babel = require('gulp-babel'),

// npm bugs when trying to install it, needs to rename the package .gulp-util.DELETE to gulp-util - NEEDS sudo command for install
// same with loadash.assign plugin
      gutil = require('gulp-util'),
      vinylSource = require('vinyl-source-stream'),
      buffer = require('vinyl-buffer'),
      babelify = require('babelify'),
      browserify = require('browserify'),
      watchify = require('watchify'),
      assign = require('lodash.assign'),
      exit = require('gulp-exit'),
      gulpif = require('gulp-if'),
      path = require('path'),
      responsive = require('gulp-responsive'),
      sassLint = require('gulp-sass-lint');
  //TODO Check config.js and var in gulpfile.js to refactor. Is the structure needed for the config vars in gulpfile.js?

  // Configs
  var
      devBuild = (( config.environment || process.env.NODE_ENV || 'development').trim().toLowerCase() !== 'production'),
      source = config.source[--config.source.length] == '/' ? config.source : config.source + '/',
      dest = config.build[--config.build.length] == '/' ? config.build : config.build + '/',
      assets = config.assets[--config.assets.length] == '/' ? config.assets : config.assets + '/',
      pkg = require('./package.json'),
      images = {
        in: source + (config.images[--config.images.length] == '/' ? config.images : config.images),
        out: dest + assets
      },
      views = {
        in: config.source[--config.source.length] == '/' ? config.source + '**/*.jade' : config.source + '/**.*jade',
        out: dest,
        watch: config.source[--config.source.length] == '/' ? config.source + '**/*.jade' : config.source + '/**.*jade'
      },
      styles = {
        in: source + config.sass,
        watch: [source + config.sass.substring(0, (config.sass.lastIndexOf('/') + 1)) + '**/*'],
        out: dest + (config.css[--config.css.length] == '/' ? config.css : config.css + '/'),
        sassOpt: {
          outputStyle: config.sassOptions.outputStyle || 'compressed',
          imagePath: config.sassOptions.imagePath,
          precision: config.sassOptions.precision || 3,
          errLogToConsole: true
        }
        //TODO low - Add option params for autoprefixer
        //pleeeaseOpt: {
        //  autoprefixer: {browsers: ['last 2 versions', '> 2%']},
        //  rem: ['16px'],
        //  pseudoElements: true,
        //  mqpacker: true,
        //  minifier: !devBuild
        //}
      },
      //TODO Refactor with config.js
      js = {
        in: source + (config.jsDir[--config.jsDir.length] == '/' ? config.jsDir + '**/*' : config.jsDir + '/**/*'),
        out: dest + config.jsDir,
        filename: config.jsName
      },
      syncOpt = {
        server: {
          baseDir: dest,
          index: config.syncOptions.index || 'index.html'

        },
        open: config.syncOptions.open || false,
        notify: config.syncOptions.notify || true
        //port: process.env.PORT || 3000
        //logFileChanges: false
      },
      jadeOptions = {
        pretty: devBuild
      },

  vendors = {
    in: source + (config.vendors[--config.vendors.length] == '/' ? config.vendors + '**/*' : config.vendors + '/**/*'),
    out: dest + (config.vendors[--config.vendors.length] == '/' ? config.vendors : config.vendors + '/'),
    watch: [source + (config.vendors[--config.vendors.length] == '/' ? config.vendors + '**/*' : config.vendors + '/**/*')]
  },
  fonts = {
    in: source + (config.fonts[--config.fonts.length] == '/' ? config.fonts + '**/*' : config.fonts + '/**/*'),
    out: dest + (config.fonts[--config.fonts.length] == '/' ? config.fonts : config.fonts + '/'),
    watch: [source + (config.fonts[--config.fonts.length] == '/' ? config.fonts + '**/*' : config.fonts + '/**/*')]
  };



  console.log(pkg.name + ' ' + pkg.version + ' ' + config.environment + ' build');


//TODO Install ESlint

//gulp.task('testbro', function(){
//  browserify('source/assets/js/functions.js')
//      .bundle()
//      .on('error', function(e){
//        gutil.log(e)
//      })
//      //buffers file into a file named app.js before being piped into a dest folder
//      .pipe(vinylSource('app.js'))
//      .pipe(gulp.dest('build/assets/js'))
//})

// *****************
//// add custom browserify options here
//var customOpts = {
//  entries: ['./source/assets/js/functions.js'],
//  debug: true,
//  transform: [babelify],
//  // require: { jquery: 'jquery-browserify' }
//};
//var opts = assign({}, watchify.args, customOpts);
//var b = watchify(browserify(opts));
//
//// add transformations here
//// i.e. b.transform(coffeeify);
//
//gulp.task('zarm', bundle); // so you can run `gulp js` to build the file
//b.on('update', bundle); // on any dep update, runs the bundler
//b.on('log', gutil.log); // output build logs to terminal
//
//function bundle() {
//  return b.bundle()
//      // log errors if they happen
//      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
//      .pipe(vinylSource('app.js'))
//      // optional, remove if you don't need to buffer file contents
//      .pipe(buffer())
//      // optional, remove if you dont want sourcemaps
//      .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
//      // Add transformation tasks to the pipeline here.
//      .pipe(sourcemaps.write('./')) // writes .map file
//      .pipe(gulp.dest('./build/assets/js'))
//      //.pipe(browsersync().stream());
//}
//console.log('images.out: \n\n'+ images.out)

// *****************


  // Global function to generate the bundle
  function bundle (bundler) {
    var condition = devBuild;
    return bundler
        .bundle()

        .on('error', function(e) {
          gutil.log(e)
        })
        //creating a stream of a new file where the source js files will be created (into app.js)
        .pipe(vinylSource('app.js'))
        //creating buffer for creating sourcemaps from browserify
        .pipe(buffer())
        .pipe($.plumber())
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
        .pipe(sourcemaps.init({loadMaps: true}))

        //creates a condition for production mode
        .pipe(gulpif(condition, concat(js.filename), uglify(), rename({suffix: '.min'}) ))
        //.pipe(concat(js.filename))
        //.pipe(uglify())
        //.pipe(rename({suffix: '.min'}))

        // ***** Add transformation tasks to the pipeline *****
        //.pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())

        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./build/assets/js'))

        //TODO use gulpif else to refactor pipe
       // .pipe(gutil.env.type === 'production' ? exit() : gutil.noop())

        // reload browser when a file has changed
        .pipe(browserSync.stream());
  }


  //TODO Remove babel:watch task as this is handled by the watch task now
  //TODO Refactor task with config variable for src and dest
  // Regenerate the bundle
  gulp.task('babel:watch', function() {
    var watcher = watchify(browserify('./source/assets/js/functions.js', watchify.args))
    bundle(watcher);
    watcher.on('update', function() {
      bundle(watcher)
    });
    watcher.on('log', gutil.log)

  });

  // Create bundle once
  gulp.task('babel', function() {
      return bundle(browserify('./source/assets/js/functions.js'))
  });

// *****************

gulp.task('image', function () {
  return gulp.src(images.in + '/*.{jpg,jpeg,png}')
      .pipe(responsive({
        // Resize all JPG images to three different sizes: 200, 500, and 630 pixels
        '*.jpg': [{
          width: 320,
          rename: { suffix: '-320px' }
        },
          {
          width: 480,
          rename: { suffix: '-480px' }
        },
          {
          width: 768,
          rename: { suffix: '-768px' }
        },
          {
            width: 960,
            rename: { suffix: '-960px' }
          },
          {
            // Compress, strip metadata, and rename original image
            rename: { suffix: '-original' }
          }],

        // Resize all PNG images to be retina ready
        '*.png': [{
          width: 320
        },
          {
          width: 320 * 2,
          rename: { suffix: '@2x' }
        }]
      },
        {
      // Global configuration for all images
      // The output quality for JPEG, WebP and TIFF output formats
      quality: 70,
      // Use progressive (interlace) scan for JPEG and PNG output
      progressive: true,
      // Strip all metadata
      withMetadata: false
    }))
      .pipe(gulp.dest(images.out + 'img'));
});



/**
 * Tasks
 */
  gulp.task('sassLint', function(){
    gulp.src([styles.watch + '.s+(a|c)ss', '!node_modules/**'])
        .pipe(sassLint())
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError());
  });


  gulp.task('compass', function () {
    // autoprefixer not included in processors as some bugs/ conflicts are occurring with Compass
    var processors = [
      lost(),
      autoprefixer({browsers: ['last 2 version'], map: true})
    ];
    gulp.src('source/sass/**/*.sass')
        //TODO Fix sourcemaps output and to be viewed on dist folder
        //.pipe(sourcemaps.init())
        //.pipe(plumber())
        .pipe(plumber({
          errorHandler: function (error) {
            console.log(error.message);
            this.emit('end');
          }}))
        .pipe(compass({
          config_file: './config.rb',
          css: 'build/assets/css',
          sass: 'source/sass',
          //sourcemap: true,
          debug: true,
          require: []
        }))
        .on('error', function(err) {
          console.log('error: ' + err)
        })
        .pipe($.size({title: 'styles Out Size'}))
        //.pipe(sourcemaps.write('.'))
        .pipe(postcss(processors))
        // to change compression update variable in config.rb file
        .pipe(gulp.dest('build/assets/css/'))
        .pipe(browserSync.stream());
    log('-----> Compass done <-----');
  });


// rename and uglifies css into min.css
  gulp.task('rename:css', function() {
    gulp.src('build/assets/css/main.css')
      .pipe(minifyCss())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('build/assets/css/'));
  });


    //Clean the build folder
  gulp.task('clean', function () {
    log('-> Cleaning build folder');
    del([
      dest + '*'
    ]);
  });

  //// Compile Javascript files
  //gulp.task('babel', function () {
  //  // to compress Js, update variable environement in config.js to 'production'
  //  if (devBuild) {
  //    log('-----> Compiling Javascript for Development <-----')
  //    return gulp.src(js.in)
  //        .pipe(sourcemaps.init())
  //        .pipe($.plumber())
  //        .pipe($.newer(js.out))
  //        .pipe($.jshint())
  //        .pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
  //        //.pipe($.jshint.reporter('fail'))
  //        .pipe(babel())
  //        .pipe($.concat(js.filename))
  //        .pipe(sourcemaps.write('.'))
  //        .pipe(gulp.dest(js.out));
  //  } else {
  //    log('-----> Compiling Javascript for Production <-----')
  //    del([
  //      dest + 'js/*'
  //    ]);
  //    return gulp.src(js.in)
  //        .pipe(sourcemaps.init())
  //        .pipe($.plumber())
  //        .pipe(babel())
  //        .pipe($.deporder())
  //        .pipe($.size({title: 'Javascript In Size'}))
  //        .pipe($.concat(js.filename))
  //        .pipe($.stripDebug())
  //        //.pipe($.uglify())
  //        .pipe(rename({suffix: '.min'}))
  //        .pipe($.size({title: 'Javascript Out Size'}))
  //        .pipe(sourcemaps.write('.'))
  //        .pipe(gulp.dest(js.out));
  //  }
  //})

  // Creates RWD images and gets icons from source directory
  gulp.task('build:images',['image','icons']);

 //Update images on build folder
  gulp.task('icons', function () {
    log('--> icons starting...<--');
    return gulp.src([images.in + '/icons/**'],
        {base: 'source/assets'})
      .pipe($.newer(images.out))
      .pipe(gulp.dest(images.out));
    log('-> icons done! <-');
  });


  // Update Favicon on build folder
  gulp.task('favicon', function () {
    return gulp.src(source + config.favicon)
        .pipe($.newer(dest))
        .pipe(gulp.dest(dest));
    log('-> Favicon done! <-');
  });

  ////TODO Needs to remove this task
  //gulp.task('vendors', function () {
  //  log('--> Vendors starting...<--');
  //  return gulp.src(vendors.in)
  //      .pipe($.newer(vendors.out))
  //      .pipe(gulp.dest(vendors.out));
  //  log('--> Vendors D0ne!<--');
  //})


  gulp.task('iconfont', function(){
    var fontName = 'icons';
    var runTimestamp = Math.round(Date.now()/1000);

    gulp.src([fonts.in], {base: 'source/assets'})
        .pipe(iconfontCss({
          fontName: fontName,
          path: 'source/sass/1-tools/_fonticon.scss',
          targetPath: '../../../source/sass/5-custom/_fonticon.scss/',
          fontPath: '../../assets/fonts/'
        }))
        .pipe(iconfont({
          fontName: fontName,
          formats: ['ttf','eot','woff','svg'],
          normalize: true,
          fontHeight: 1001,
          prependUnicode: true, //
          timestamp: runTimestamp// recommended opt
        }))
        .pipe(gulp.dest(fonts.out));
    log('--> Iconfont D0ne!<--');
  });

  //TODO Add config variables (global) for views, assets folders and refactor tasks
  //Compile Jade templates
  ///*
  gulp.task('jade', function () {
    log('-> Compiling Jade Templates');
    //'source/views/**/*.jade'
    var templates = gulp.src(views.in);
    //var templates = gulp.src('source/views/**/*.jade')
    //    .pipe($.plumber())
    //    .pipe($.newer(views.out));
    if (!devBuild) {
      log('-> Compressing templates for Production');
      templates = templates
          .pipe($.plumber())
          .pipe($.size({title: 'Jade Templates Before Compression'}))
          .pipe($.jade())
          .pipe($.size({title: 'Jada Templates After Compression'}));
    } else {
      templates
          .pipe($.plumber())
          .pipe($.jade(jadeOptions));
    }
    return templates.pipe(gulp.dest(views.out));
    log('--> Templates D0ne!<--');
  });
  //*/

  //gulp.task('postcss', function () {
  //  log('--> PostCSS Starting...<--');
  //  var postprocessors = [
  //    // can pass lost options e.g. var lost_options = { "gutter": "30px", "flexbox":"no-flex", "cycle": "auto", "map": "true" };
  //    //lost(),
  //    autoprefixer({browsers: ['last 2 version'], map: true})
  //  ];
  //
  //  return gulp.src('build/assets/css/main.css')
  //
  //      //.pipe(sourcemaps.init())
  //      .pipe(postcss(postprocessors))
  //      //.pipe(sourcemaps.write('./'))
  //      .pipe(gulp.dest('build/assets/css/main.css'));
  //  log('PostCSS: ----> Autoprefixer done! <-----')
  //
  //})

  // Start BrowserSync
  gulp.task('browsersync', function () {
    log('-> Starting BrowserSync <-');
    browserSync(syncOpt);
  });


  // Build Task
// TODO include sassLint task
// TODO Once Browserify is hooked up remove vendors tasks which will be obsolete
  gulp.task('build', ['clean', 'jade', 'favicon', 'compass', 'iconfont', 'babel','build:images', 'watch']);

  // Watch Task
  // Task dependancy, watch is run when browsersync is finished ['browsersync']
  gulp.task('watch', ['browsersync'], function () {
    // Watch for style changes and compile
    gulp.watch([styles.watch], ['compass', browserSync.reload]);
    // Watch for jade changes and compile
    gulp.watch(views.watch, ['jade']);
    // Watch for javascript changes and compile
    //gulp.watch(js.in, ['babel']);
    //TODO Remove watch task for js files as we are using browserify
    gulp.watch(['source/assets/js/functions.js','source/assets/js/**/*.js'], ['babel', browserSync.reload]);
    // Watch for new images and copy
    gulp.watch(images.in, ['images']);
    // Watch for new vendors and copy
    //gulp.watch(vendors.watch, ['vendors']);
    gulp.watch('source/assets/fonts/**/*.svg', ['iconfont']);
    //gulp.watch('build/assets/css/main.css', ['postcss', browserSync.reload]);
  });

  // Compile and Watch task
  gulp.task('start', ['build', 'watch']);


//TODO Update Help section with new tasks
  // Help Task
  gulp.task('help', function () {
    console.log('');
    console.log('======================== Help  ========================');
    console.log('');
    console.log('Usage: gulp [command]');
    console.log('The commands for the task runner are the following.');
    console.log('-------------------------------------------------------');
    console.log('       clean: Removes all the compiled files on ./build');
    console.log('          js: Compile the JavaScript files');
    console.log('        jade: Compile the Jade templates');
    console.log('        compass: Compile the Sass styles');
    console.log('      images: Copy the newer to the build folder');
    console.log('     favicon: Copy the favicon to the build folder');
    console.log('     vendors: Copy the vendors to the build folder');
    console.log('       build: Build the project');
    console.log('       watch: Watch for any changes on the each section');
    console.log('       start: Compile and watch for changes (for dev)');
    console.log('        help: Print this message');
    console.log(' browserSync: Start the browsersync server');
    console.log('========================================================');
    console.log('');
    console.log('========================================================');
    console.log('');
  });

  // Default Task
  gulp.task('default', ['help']);

  /**
   * Custom functions
   */
  function log(msg) {
    console.log(msg);
  }