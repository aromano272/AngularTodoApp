// LibSass Compiling

module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      sass: {
        files: ['app/css/**/*.{scss,sass}','app/css/_partials/**/*.{scss,sass}'],
        tasks: ['sass:dist']
      },
      livereload: {
        files: ['*.html', '*.php', 'app/js/**/*.{js,json}', 'app/css/*.css','app/img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
        options: {
          livereload: 8000
        }
      }
    },
    sass: {
      options: {
        sourceMap: false
      },
      dist: {
        files: {
          'app/css/main.css': 'app/css/main.sass'
        }
      }
    }
  });
  grunt.registerTask('default', ['watch']);
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
};