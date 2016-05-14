/*
 * grunt-sami
 * https://github.com/christianklaussner/grunt-sami
 *
 * Copyright (c) 2015 Christian Klaussner
 * Licensed under the MIT license
 */

'use strict';

var exec = require('child_process').exec;
var path = require('path');

module.exports = function(grunt) {
  var desc = 'Create API documentations for PHP with Sami';

  grunt.registerMultiTask('sami', desc, function() {
    var options, done, todo;

    function build(src, last) {
      var bin = path.resolve(__dirname, '../bin', 'sami.phar');
      var cmd = 'php ';

      cmd += bin;
      cmd += ' update -vv ';
      cmd += src;

      // Execute sami.phar
      exec(cmd, function(error, stdout, stderr) {
        if (error != null) {
          grunt.fail.fatal(error);
        }

        if (stderr.length > 0) {
          var msg = 'Failed to execute sami.phar:\n' + stderr;
          grunt.fail.fatal(msg);
        }

        if (options.verbose) {
          grunt.log.write(stdout);
        }

        if (last) {
          done();
        }
      });
    }

    // Initialize options with default values
    options = this.options({
      verbose: false
    });

    // Build one documentation for each file (src) entry
    done = this.async();
    todo = this.files.length;

    if (todo === 0) {
      grunt.fail.warn('No Sami configurations.');
    }

    this.files.forEach(function(file) {

      // Ignore destination because it is specified in the Sami config
      file.src.forEach(function(src) {
        build(src, --todo === 0);
      });
    });
  });
};
