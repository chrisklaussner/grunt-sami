# grunt-sami v0.1.0 [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

> Create API documentations for PHP with Sami.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out
the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains
how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as
install and use Grunt plugins. Once you're familiar with that process, you may
install this plugin with this command:

```shell
npm install grunt-sami --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile
with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-sami');
```

## Sami
A custom build of
[this version of Sami](https://github.com/FriendsOfPHP/Sami/tree/0e70f3316920df58d903de0bf2222e49784c8317)
is included in the plugin, so you don't need to install anything else to use it
(except PHP).

## The "sami" task
*Run this task with the `grunt sami` command.*

In your project's Gruntfile, add a section named `sami` to the data object
passed into `grunt.initConfig()`. Task targets, files, and options may be
specified according to the
[Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

```js
grunt.initConfig({
  sami: {
    options: {
      // Task-specific options go here
    },
    target: {
      // Target-specific file lists and/or options go here
    }
  }
});
```

### Options
The number of options you can use for the `sami` task is limited because the
configuration is specified in a seperate Sami configuration file. See the
example below and the
[Sami documentation](https://github.com/FriendsOfPHP/Sami/blob/master/README.rst)
for more details.

#### verbose
Type: `Boolean`  
Default value: `false`

Display the output of Sami.

### Usage Examples
In this example, a documentation is built using the configuration in
*config.php* where the `$iterator` specifies which files will be scanned. The
documentation is built for all PHP files in *app/controllers*.

```js
grunt.initConfig({
  sami: {
    dist: {
      options: {
        verbose: true
      },
      src: 'config.php'
    }
  }
});
```
The content of *config.php*:

```php
use Sami\Sami;
use Symfony\Component\Finder\Finder;

$iterator = Finder::create()
  ->files()
  ->name('*.php')
  ->in('app/controllers');

return new Sami($iterator);
```

You can also build more than one documentation simultaneously by specifying an
array of Sami configuration files for the `src` property.

**Note:** There's another example in the *test* folder of this repository.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding
style. Add unit tests for any new or changed functionality. Lint and test your
code using [Grunt](http://gruntjs.com/).

## Release History
* v0.1.0 (2015-01-03) Initial release
