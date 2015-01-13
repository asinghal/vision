'use strict';

var tesseract = require('node-tesseract');

var options = {
    l: 'eng',
    psm: 3,
    binary: '/usr/local/bin/tesseract'
};

exports.read = function(path, callback) {
  // Recognize text of any language in any format
  tesseract.process(path, options,function(err, text) {
    if(err) {
      callback(err);
    } else {
      callback(null, text);
    }
  });
};
