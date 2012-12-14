# All files in the 'lib' directory will be loaded
# before nanoc starts compiling.

# Don't reload this file for nanoc autocompile. Otherwise, nanoc will eventually
# throw an "ERROR SystemStackError: stack level too deep" exception.
unless defined? LOADED_DEFAULT_CONFIG

  LOADED_DEFAULT_CONFIG = true
  
  require 'compass'
  Compass.add_project_configuration File.expand_path('../../compass-config.rb', __FILE__)

  # include common helpers
  include Nanoc::Helpers::HTMLEscape
  include Nanoc::Helpers::LinkTo
  include Nanoc::Helpers::Rendering

  # cache busting
  require 'nanoc/cachebuster'
  include Nanoc::Helpers::CacheBusting
  
  # image compression
  require 'nanoc/filters/image_compressor'
  
  # javascript concatenation
  require 'nanoc/filters/javascript_concatenator'

  # coffescript
  # require 'nanoc/filters/coffeescript'

  # blogging
  include Nanoc::Helpers::Blogging
  include Nanoc::StringExtensions

  # syntax highlighting
  require 'nanoc/filters/colorize_syntax'

  # tagging
  include Nanoc::Helpers::Tagging

  # partials
  include Nanoc::Helpers::Rendering

  # sitemap
  include Nanoc::Helpers::XMLSitemap

  # sorted articles by tag, excluding future articles
  require 'date'
  def sorted_articles_by_tag(tag)
    unsorted = items_with_tag(tag).select { |i| i[:created_at] <= Date.today }
    unsorted.sort_by do |a|
      attribute_to_time(a[:created_at])
    end.reverse
  end

end
