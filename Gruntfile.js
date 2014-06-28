module.exports = function(grunt){
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        cmq: {
            options: {
                log: false
            },
            your_target:{
                files:{
                    'stylesheets/tmp' : ['stylesheets/*.css']
                }
            }
        },
        
        sass: {                              
            dist: { 
                options:{
                    style : 'compressed'   
                },
                
                files: {
<<<<<<< HEAD
                    'stylesheets/main.css': 'stylesheets/sass/main.scss'
=======
                    'stylesheets/main.css': 'stylesheets/sass/**/*.scss'
>>>>>>> 4b7481f2abba2ed3ea1279031603b31467d5eba9
                }
            }
        },
        
        watch: {
            
            options:{
                livereload : true,
            },
        
            css:{
<<<<<<< HEAD
                files: ['stylesheets/sass/main.scss'],
=======
                files: ['stylesheets/sass/**/*.scss'],
>>>>>>> 4b7481f2abba2ed3ea1279031603b31467d5eba9
                tasks: ['sass'],
                options:{
                    spawn: false,
                }
            },
<<<<<<< HEAD

=======
            
>>>>>>> 4b7481f2abba2ed3ea1279031603b31467d5eba9
            cmq:{
                files:['stylesheets/*.css'],
                tasks: ['cmq'],
                options:{
                    spawn: false,
                }
<<<<<<< HEAD
            },
=======
            }
>>>>>>> 4b7481f2abba2ed3ea1279031603b31467d5eba9
        }
        
    });
    
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-combine-media-queries');

<<<<<<< HEAD
    grunt.registerTask('default', ['sass','cmq']);
=======
    grunt.registerTask('default', ['sass', 'cmq']);
>>>>>>> 4b7481f2abba2ed3ea1279031603b31467d5eba9
    
};
