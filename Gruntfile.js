module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      dist: ['dist/'],
    },
    concat: {
      js_dependencies: {
        src: [
          'bower_components/jquery/dist/jquery.js',
          'bower_components/foundation/js/foundation.js',
          'bower_components/moment/moment.js',
        ],
        dest: 'dist/dependencies.js'
      },
      js_picker: {
        src: [
          'src/foundation_calendar.js',
          'src/date-helpers.js',
          'src/string-helpers.js',
        ],
        dest: 'dist/<%= pkg.name %>.js',
      },
      css_dependencies: {
        src: [
          'bower_components/foundation/css/foundation.css',
          'bower_components/foundation-icon-fonts/foundation-icons.css',
          'src/foundation_calendar.css',
        ],
        dest: 'dist/dependencies.css',
      },
      css_picker: {
        src: ['src/foundation_calendar.css',],
        dest: 'dist/<%= pkg.name %>.css'
      }
    },
    cssmin: {
      css_dependencies: {
        files: {
          'dist/dependencies.min.css': ['dist/dependencies.css']
        }
      },
      css_picker: {
        files: {
          'dist/<%= pkg.name %>.min.css': ['dist/<%= pkg.name %>.css']
        }
      }
    },
    uglify: {
      'dist/<%= pkg.name %>.min.js': ['dist/<%= pkg.name %>.js'],
      'dist/dependencies.min.js': ['dist/dependencies.js'],
    },
    copy: {
      foundation_icons: {
          expand: true, 
          flatten: true, 
          src: [
            'bower_components/foundation-icon-fonts/foundation-icons.svg',
            'bower_components/foundation-icon-fonts/foundation-icons.woff',
            'bower_components/foundation-icon-fonts/foundation-icons.ttf',
            ],
          dest: 'dist/',
          filter: 'isFile'
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['clean', 'concat', 'cssmin', 'uglify', 'copy']);
};