<?php

use Sami\Sami;
use Sami\Parser\Filter\TrueFilter;
use Symfony\Component\Finder\Finder;

$iterator = Finder::create()
  ->files()
  ->name('*.php')
  ->in('test/fixtures');

// Store the documentation in the tmp folder next to Gruntfile.js
$sami = new Sami($iterator, array(
  'build_dir' => __DIR__.'/../../tmp/build',
  'cache_dir' => __DIR__.'/../../tmp/cache'
));

// Include private members
$sami['filter'] = function() {
  return new TrueFilter();
};

return $sami;
