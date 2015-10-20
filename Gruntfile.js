module.exports = function(grunt){

	grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        sass: {
            dist: {
              files: {
                'example/main.css': 'example/main.scss'
              }
            }
        }
    });
    
	grunt.loadNpmTasks('grunt-contrib-sass');
};