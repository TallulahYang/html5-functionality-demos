module.exports = function(grunt) {

    // configure the tasks
    grunt.initConfig({

            copy: {
                build: {
                    cwd: 'src',
                    src: ['**', '!**/*.styl', '!**/*.coffee', '!**/*.jade'],
                    dest: 'build',
                    expand: true
                },
            },
            clean: {
                build: {
                    src: ['build']
                },
                stylesheets: {
                    src: ['build/**/*.css', '!build/application.css']
                },
                scripts: {
                    src: ['build/**/*.js', '!build/application.js']
                },
            },
            less: {
                compile: {
                    options: {
                        paths: ['build'],
                        compress: true
                    },
                    files: [{
                        expand: true,
                        cwd: 'src',
                        src: ['**/style.less'],
                        dest: 'build',
                        ext: '.css'
                    }]
                }
            },
            stylus: {
                build: {
                    options: {
                        linenos: true,
                        compress: false
                    },
                    files: [{
                        expand: true,
                        cwd: 'src',
                        src: ['**/*.styl'],
                        dest: 'build',
                        ext: '.css'
                    }]
                }
            },
            autoprefixer: {
                build: {
                    expand: true,
                    cwd: 'build',
                    src: ['**/*.css'],
                    dest: 'build'
                }
            },
            cssmin: {
                build: {
                    files: {
                        'build/application.css': ['build/**/*.css']
                    }
                }
            },
            coffee: {
                build: {
                    expand: true,
                    cwd: 'src',
                    src: ['**/*.coffee'],
                    dest: 'build',
                    ext: '.js'
                }
            },
            uglify: {
                build: {
                    options: {
                        mangle: false
                    },
                    files: {
                        'build/application.js': ['build/**/*.js']
                    }
                }
            },
            requirejs: {
              compile: {
                  options: {
                      name: "main",
                      baseUrl: "js/",
                      mainConfigFile: "js/main.js",
                      out: "dist/compiled.js"
                  }
              }
          },
            "regex-replace": {
                dist: {
                    src: ['dist/*.html', 'dist/**/*.php'],
                    actions: [{
                        name: 'requirejs',
                        search: 'data-main=.*vendors/requirejs/require.js',
                        replace: 'src="scripts/require.min.js',
                        flags: 'ig'
                    }]
                }
            },
            jade: {
                compile: {
                    options: {
                        data: {}
                    },
                    files: [{
                        expand: true,
                        cwd: 'src',
                        src: ['**/*.jade'],
                        dest: 'build',
                        ext: '.html'
                    }]
                }
            },
        // <!--(if target dist)>
        // <script data-main="compiled" src="js/require.js"></script>
        // <!(endif)-->
        // <!--(if target dummy)><!-->
        // <script data-main="js/main" src="components/requirejs/require.js"></script>
        // <!--<!(endif)-->
            targethtml: { // 注释掉一份if判断 
              dist: {
                  src: 'index.html',
                  dest: 'dist/index.html'
              }
          },
            watch: {
                stylesheets: {
                    files: 'src/**/*.styl',
                    tasks: ['stylesheets']
                },
                scripts: {
                    files: 'src/**/*.coffee',
                    tasks: ['scripts']
                },
                jade: {
                    files: 'src/**/*.jade',
                    tasks: ['jade']
                },
                copy: {
                    files: ['src/**', '!src/**/*.styl', '!src/**/*.coffee', '!src/**/*.jade'],
                    tasks: ['copy']
                }
            },
            connect: {
                server: {
                    options: {
                        port: 4000,
                        base: 'build',
                        hostname: '*'
                    }
                }
            }
        },

    });

// load the tasks
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-autoprefixer');
grunt.loadNpmTasks('grunt-contrib-stylus');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-coffee');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-jade');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-connect');

grunt.registerTask(
    'stylesheets',
    'Compiles the stylesheets.', ['less', 'autoprefixer', 'cssmin']
);

grunt.registerTask(
    'scripts',
    'Compiles the JavaScript files.', ['coffee', 'uglify']
);

grunt.registerTask(
    'build',
    'Compiles all of the assets and copies the files to the build directory.', ['clean', 'copy', 'stylesheets', 'scripts', 'jade']
);

grunt.registerTask(
    'default',
    'Watches the project for changes, automatically builds them and runs a server.', ['build', 'connect', 'watch']
);
// define the tasks
};