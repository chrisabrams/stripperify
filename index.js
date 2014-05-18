var through = require('through')
  , fs = require('fs')
  , path = require('path');

var StripStream;

/*
Browserify is overriding the scope, so need to do this stupid hack.
*/
var _strs;

StripStream = (function() {

  function StripStream(options) {
    _strs = options;

    return this;
  }

  StripStream.prototype.run = function(file) {

    var data  = ''

    function write(buf) {
      data += buf;
    }

    function end() {

      _strs.forEach(function(item) {
        data = data.replace(item, '')
      })

      this.queue(data);
      this.queue(null);
    }

    var t = through(write, end);
    return t;
  };

  return StripStream;

})();

module.exports = StripStream
