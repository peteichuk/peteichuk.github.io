module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/**\n*\n* @author     Michael Peteichuk <http://www.peteichuk.com/>, <michael.peteichuk@gmail.com>\n* @copyright 2015 - 2016 by Peteichuk\n*\n*/\n',
        watch: {
            options: {
                livereload: true
            },
            less: {
                files: ['css/less/*.less'],
                tasks: ['pless'],
                options: {
                    livereload: true
                }
            },
            sass: {
                files: ['css/sass/*.sass'],
                tasks: ['sass'],
                options: {
                    livereload: true
                }
            },
            jade: {
                files: ['jade/*.jade'],
                tasks: ['jade'],
                options: {
                    livereload: true
                }
            },
            js: {
                files: ['js/src/*.js'],
                tasks: ['pjs'],
                options: {
                    livereload: true
                }
            },
            sprite: {
                files: ['images/design/sprites/*.png'],
                tasks: ['sprite', 'pless'],
                options: {
                    livereload: true
                }
            }
        },
        less: {
            development: {
                options: {
                    compress: true, // Todo: use true
                    cleancss: true, // Todo: use true
                    sourceMap: false, // Todo: use false
                    sourceMapFilename: "public/css/all.min.css.map",
                    sourceMapBasepath: "public/",
                    sourceMapURL: '/css/all.min.css.map' // Todo: Don't use in the production version
                },
                files: {
                    'css/all.min.css': ['css/less/bootstrap.less']
                }
            }
        },
        sass: {
            options: {
                style: 'compressed' // expanded
            },
            dist: {
                files: {
                    'css/all.sass.min.css': ['css/sass/bootstrap.sass']
                }
            }
        },
        concat: {
            js: {
                options: {
                    sourceMap: true //false
                },
                src: [
                    'public/js/src/*.js'
                ],
                dest: 'public/js/dist/all.js'
            },
            jsvendor: {
                options: {
                    sourceMap: true //false
                },
                src: [
                    'bower_components/jquery/dist/jquery.min.js',
                    'js/dist/all.min.js'
                ],
                dest: 'js/all.min.js'
            }
        },
        uglify: {
            all: {
                options: {
                    sourceMap: true //false
                    //sourceMapIncludeSources : true //false
                },
                files: {
                    'js/dist/all.min.js': ['js/dist/all.js']
                }
            }
        },
        sprite: {
            x1: {
                src: 'images/design/sprites/*-x1.png',
                destImg: 'images/design/icon-x1.png',
                destCSS: 'css/less/sprites-x1.less',
                imgPath: '/images/design/icon-x1.png?' + '<%= pkg.spriteRevision %>',
                padding: 2
            },
            x2: {
                src: 'images/design/sprites/*-x2.png',
                destImg: 'images/design/icon-x2.png',
                destCSS: 'css/less/sprites-x2.less',
                imgPath: '/images/design/icon-x2.png?' + '<%= pkg.spriteRevision %>',
                padding: 4
            }
        },
        usebanner: {
            js: {
                options: {
                    banner: '/* Created by Peteichuk | 2016 */\n'
                },
                files: {
                    src: ['js/all.min.js']
                }
            },
            css: {
                options: {
                    banner: '<%= banner %>'
                },
                files: {
                    src: ['css/all.min.css']
                }
            }
        },
        jade: {
            compile: {
                options: {
                    client: false,
                    runtime: false,
                    pretty: true, //compress
                    basePath: 'jade/'
                },
                files: {
                    'public/': ['public/jade/*.jade']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-banner');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.loadNpmTasks('grunt-html-convert');
    grunt.loadNpmTasks('grunt-jade');


    // Less
    grunt.registerTask('pless', ['less', 'usebanner:css']);

    // JavaScript
    grunt.registerTask('pjs', ['concat:js', 'uglify', 'concat:jsvendor', 'usebanner:js']);

    // Empty
    grunt.registerTask('empty', []);

    grunt.registerTask('jsmin-sourcemap');

    // Default action
    grunt.registerTask('default', ['sprite', 'pless', 'pjs', 'watch']);
};