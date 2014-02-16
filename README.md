Marvel AngularJS App
=====

A simple AngularJS app using the [marvel api](http://developer.marvel.com/).

# Build pre-requisites

 - Install [node.js](http://nodejs.org/). node.js now comes with npm. If not, install [npm](https://github.com/isaacs/npm)
 - Install [grunt](http://gruntjs.com/)
 - Set the CHROME_BIN environment variable pointing to your chrome executable.

# Build

The following commands must all be run from the root directory:

 - `npm install`: downloads dependencies needed by grunt.
 - `bower install`: downloads the angular app dependencies.

# Development

Update your marvel api private & public key into `/config/marvel-config.json`.

The following commands can be run:

 - `grunt server`: starts a web server on port 9001, serving the files under `src`, watching files modifications.
 - `grunt test`: runs the unit tests.


# Deployment

TODO: deploy on heroku

