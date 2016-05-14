'use strict';

var grunt = require('grunt');

exports.sami = {
  setUp: function(done) {
    done();
  },

  test: function(test) {
    test.expect(2);

    var build = grunt.file.exists('tmp/build');
    test.ok(build);

    var cache = grunt.file.exists('tmp/cache');
    test.ok(cache);

    test.done();
  }
};
