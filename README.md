# Boilerplate Gulp Version

Use this as a simple structure for a simple start to a simple site using bootstrap sass.
deployed at [http://abstracted-hot.surge.sh/](http://abstracted-hot.surge.sh/).</br>
After the npm & bower dependencies have been installed (see section [##Install](##Install)),</br>
run `gulp build` to generate the static assets.



## Requirements
This project have some requirements you need to meet in order to compile it. First of all you need NodeJS in order to run javascript on the console, you can go to the [NodeJS](http://nodejs.rg) site and follow trough the installation process. After you get the `node` command on the console, you need to install Gulp and Bower globally with the following command.

Run the following commands before installing the packages

- for the Sass tasks
```
gem install sass
```

```
gem install autoprefixer-rails
```

- for the images tasks
If you don'have [brew](http://brew.sh/) you can install it with the following command
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

You then need to install Graphicsmagics which runs via [Sharp](http://sharp.dimens.io/en/stable/install/)
```
 brew install homebrew/science/vips --with-webp --with-graphicsmagick
```

- Task Manager

Gulp is the one that will run all the task of compilation, watchers and others. Bower will get the dependencies for the client side like jQuery. Those are the only requirements to run this project.
```
node install -g gulp bower
```


## Install

You must have `gulp` and `bower` installed to manage dependencies

After you have it on you pc, you need to go in the console to the project folder and execute the following command to gather all the dependencies.
```
git clone -b
```
```
npm install && bower install
```
After the process finish you will have all you need to start coding.

A few packages are deprecated and will need to be updated:
```
npm i gulp-minify-css lodash.assign gulp-exit gulp-if gulp-responsive
```

## How to use
To start using it, the only thing you need to do is open the project on you code editor of choice and code. To compile and live preview all your changes you have some command that will help you. Here are the list of commands you should know.

When your project is ready for production change the config variable name environment to `production` in the config.js file

Every command have to be executed on the root directory of the project using the gulp command like `gulp clean` or `gulp build`:
```
* **build**: Compile and watch for changes (For development)
* **clean**: Remove all the compiled files on ./build
* **babel**: Compile the JavaScript files
* **babel:watch**: Watch for any changes in your js/ dir
* **browserSync**: Start the browserSync server - Root for the server is build/
* **build:images**: Create optimized images and icons for your website
* **compass**: Create the stylesheet of your project
* **default**: Print this message
* **help**: Print a list of tasks available in the gulpfile.js
* **iconfont**: Create a CSS font for your svg in  your fonts dir (source/assets/fonts)
* **icons**: Create optimized icons for your project
* **image**: Copy the newer optimized images to the build folder
* **jade**: Compile the Jade templates
* **favicon**: Copy the favicon to the build folder
* **vendors**: Copy the vendors to the build folder
* **build**: Build the project and start the local webserver
* **watch**: Watch for any changes in your source dir
```

If you are in the development process, the `gulp start` command is the best option for you. Go to the folder project in the console and execute `gulp start`, it will compile the project and start server that will refresh every time you change something in the code. The command will be waiting for changes and will tell you how to access the project from local and public url. Every browser that point to that url will be auto refreshed. As an extra feature for testing purpose any interaction on one browser will be reflected on any others. Try it on a phone, tablet and pc at the same time .


## Structure
The project have a very simple and flexible structure. If the default place for any file or directory needs to be moved, be sure to update the new position on the config file.

```
├───build -> All the compiled files will be placed here (Distribution)
│   ├───assets -> Compiled Assets
│   ├───index.html -> Compiled Jade files and entry point for your app
│   ├───js -> js file for your app
│   ├───views -> Project dependencies (different pages of your website)
├───source -> Source files for the project
│   ├───assets -> Assets for the project
│   │   ├───fonts -> fonts for your project
│   │   └───img -> Images
│   ├───js  -> js modules for your app
│   ├───sass  -> Sass styles
│   │   └───main.sass -> Main file in where all other sass files should be included.
│   ├───vendors -> Vendors folder for all the dependencies (Managed by Bower)
│   └───views -> Templates directory for Jade files
│   └───index.jade
├───.bowerrc -> Define where the dependencies will be installed
├───bower.json -> Bower configuration file for manage project dependencies
├───package.json -> NodeJS configuration file for manage node dependencies
├───gulpfile.js -> Gulp Tasks
├───config.js -> Project configuration
```

All the files in the build folder will be auto-generated by the different tasks when compile the project. Be sure to not modify any file manually in the build folder because changes will be replaced on the compile process.


## Configuration
This project have some nice configuration options to meet all you needs. To configure you need to edit the `config.js` file and change any value you need. Every aspect of this configuration is described in the file so that you know the options.


## Improvements
- $ `gem install sass-globbing` and require it in the `config.rb`
- Unit tests
- npm scripts to build and deploy assets
- switch to babel

## Others
run `npm rebuild` if dependencies are not up to date.
