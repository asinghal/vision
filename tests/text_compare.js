'use strict';

var assert = require('assert'),
    comparator = require('../lib/text_compare');

describe('Text comparison', function () {

  describe('#calculateDistance()', function () {
    it('should identify identical strings', function () {
      assert.equal(0, comparator.calculateDistance('TestString', 'TestString'));
    });

    it('should get the right distance when text 1 is shorter', function () {
      assert.equal(1, comparator.calculateDistance('TestString', 'Test String'));
    });

    it('should get the right distance when text 2 is shorter', function () {
      assert.equal(1, comparator.calculateDistance('TestS tring', 'TestString'));
    });

    it('should get the right distance when texts are very different', function () {
      assert.equal(10, comparator.calculateDistance('Test String', 'A Number'));
    });
  });

  describe('#percentageMatch()', function () {

    it('should identify identical strings', function () {
      assert.equal(100, comparator.percentageMatch('TestString', 'TestString'));
    });

    it('should get the match factor when text 1 is shorter', function () {
      // we don't really need to round, but it makes it easier to assert in tests.
      assert.equal(95, Math.round(comparator.percentageMatch('TestString', 'Test String')));
    });

    it('should get the match factor when text 2 is shorter', function () {
      assert.equal(95, Math.round(comparator.percentageMatch('TestS tring', 'TestString')));
    });

    it('should get the match factor when texts are very different', function () {
      assert.equal(47, Math.round(comparator.percentageMatch('Test String', 'A Number')));
    });
  });
});