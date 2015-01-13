'use strict';

var assert = require('assert'),
    recognizer = require('../lib/text_recognition');

describe('Text recognizer', function () {

  describe('#read()', function () {
    it('should be able to read type written text', function (done) {
      recognizer.read(__dirname + '/fixtures/ocr-sample-1.png', function(error, text) {
        assert.equal(0, text.indexOf('1. Almonds'));
        assert.ok(text.indexOf('Almonds are Very high in vitamin E and protein as well') > 0);
        done();
      });
    });

    it('should be able to read numbers', function (done) {
      recognizer.read(__dirname + '/fixtures/ocr-sample-2.jpg', function(error, text) {
        assert.equal('619121', text.trim());
        done();
      });
    });

    it('should be able to read a business card', function (done) {
      recognizer.read(__dirname + '/fixtures/ocr-sample-3.jpg', function(error, text) {
        assert.ok(text.indexOf('MIKE FARAG') > 0);
        assert.ok(text.indexOf('PH 913 284 6455') > 0);
        done();
      });
    });

    it('should be able to read text on a dark background', function (done) {
      recognizer.read(__dirname + '/fixtures/ocr-sample-4.png', function(error, text) {
        assert.equal(0, text.indexOf('OneNote OCR did not convert'));
        done();
      });
    });
  });
});