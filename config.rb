# Require any additional compass plugins here.

#require 'susy'
require 'autoprefixer-rails'
#require 'sass-globbing'

# SASS config options

project_type = :stand_alone
http_path = "/"
sass_dir = "source/sass"
css_dir = "build/assets/css"
images_dir = "source/assets/img"
fonts_dir = "build/assets/fonts"
javascript_dir = "build/assets/js"
line_comments = true

preferred_syntax = :sass
# Command to manually convert scss to sass
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass


# Options ca be the following expanded or nested or compact or compressed
output_style = :expanded

# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
debug = true

#sourcemap = true

# Options to be added for sourcemaps to be generated ma
# enable sourcemaps
sass_options = {:sourcemap => true}

# old version of the line of code below...
#enable_sourcemaps = true

# Manually run sourcemaps
# run 'gem install compass-sourcemaps --pre'






# script to resolve conflicts between autoprefixer and compass which will outputs autoprefixer
on_stylesheet_saved do |file|
 css = File.read(file)
  map = file + '.map'
  if File.exists? map
    result = AutoprefixerRails.process(css,
      from: file,
      to:   file,
      map:  { prev: File.read(map), inline: false })
    File.open(file, 'w') { |io| io << result.css }
    File.open(map,  'w') { |io| io << result.map }
  else
    File.open(file, 'w') { |io| io << AutoprefixerRails.process(css) }
  end
end




# You can select your preferred output style here (can be overridden via the command line):
#output_style = :expanded or :nested or :compact or :compressed
#output_style = (environment == :development) ? :expanded : :compressed





