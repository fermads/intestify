module.exports = function(grunt) {
  grunt.initConfig({
    intestify: {
      options: {
        // any options supported by intestify
      }
    }
  });

  // DO NOT USE grunt.loadTasks('../tasks') on your gruntfile. It'll only
  // work here because this example is already inside the plugin folder.
  // Instead use grunt.loadNpmTasks('intestify');
  grunt.loadTasks('../tasks');

  grunt.registerTask('default', ['intestify']);
};