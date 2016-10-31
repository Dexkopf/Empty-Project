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
            files: '../assets/sass/**/*.scss',
            tasks: ['sass']
        },
        sass: {
            dev: {
                files: {
                    '../assets/css/main.css': '../assets/sass/main.scss',
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        '../assets/css/*.css',
                        '../*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: '../'
                },
            },
        },
    });
    grunt.registerTask('default', ['browserSync', 'watch']);
};
