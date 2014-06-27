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
                    'stylesheets/main.css': 'stylesheets/sass/**/*.scss'
                }
            }
        },
        
        watch: {
            
            options:{
                livereload : true,
            },
        
            css:{
                files: ['stylesheets/sass/**/*.scss'],
                tasks: ['sass'],
                options:{
                    spawn: false,
                }
            },
            
            cmq:{
                files:['stylesheets/*.css'],
                tasks: ['cmq'],
                options:{
                    spawn: false,
                }
            }
        }
        
    });
    
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-combine-media-queries');

    grunt.registerTask('default', ['sass', 'cmq']);
    
};
