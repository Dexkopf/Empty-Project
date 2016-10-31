module.exports = function (grunt) {
    require('jit-grunt')(grunt, {
      sass: "grunt-sass",
      watch: "grunt-contrib-watch",
      browserSync: "grunt-browser-sync",
      cssmin: "grunt-contrib-cssmin",
      imagemin: "grunt-contrib-imagemin",
    });
    grunt.initConfig({
        // DEVELOPMENT TASKS
        watch: {
            files: '../css/new/scss/*.scss',
            tasks: ['sass']
        },
        sass: {
            dev: {
                files: {

                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        '../css/*.css',
                        '../*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: '../'
                },
            },
        },
        //DEPLOYMENT TASKS
        cssmin: {
          target: {
            files: [{
              expand: true,
              cwd: '../css',
              src: ['*.css', '!*.min.css'],
              dest: '../css',
              ext: '.min.css'
            }],
          },
        },


    });
    grunt.registerTask('default', ['browserSync', 'watch']);
    grunt.registerTask('deploy', ['cssmin',]);
};
