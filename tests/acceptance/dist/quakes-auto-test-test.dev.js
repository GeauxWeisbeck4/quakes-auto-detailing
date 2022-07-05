'use strict';

var _qunit = require('qunit');

var _testHelpers = require('@ember/test-helpers');

var _emberQunit = require('ember-qunit');

(0, _qunit.module)('Acceptance | super rentals', function (hooks) {
  (0, _emberQunit.setupApplicationTest)(hooks);
  (0, _qunit.test)('visiting /', function _callee(assert) {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch ((_context.prev = _context.next)) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap((0, _testHelpers.visit)('/'));

          case 2:
            assert.strictEqual((0, _testHelpers.currentURL)(), '/');
            assert.dom('nav').exists();
            assert.dom('h1').hasText("Quake's Auto Detail");
            assert.dom('h2').hasText("Welcome to Quake's Auto Detail!");
            assert.dom('.jumbo a.button').hasText('About Us');
            _context.next = 9;
            return regeneratorRuntime.awrap(
              (0, _testHelpers.click)('.jumbo a.button')
            );

          case 9:
            assert.strictEqual((0, _testHelpers.currentURL)(), '/about');

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    });
  });
  (0, _qunit.test)('visiting /about', function _callee2(assert) {
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch ((_context2.prev = _context2.next)) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap((0, _testHelpers.visit)('/about'));

          case 2:
            assert.strictEqual((0, _testHelpers.currentURL)(), '/about');
            assert.dom('nav').exists();
            assert.dom('h1').hasText("Quake's Auto Detail");
            assert.dom('h2').hasText("About Quake's Auto Detail");
            assert.dom('.jumbo a.button').hasText('Contact Us');
            _context2.next = 9;
            return regeneratorRuntime.awrap(
              (0, _testHelpers.click)('.jumbo a.button')
            );

          case 9:
            assert.strictEqual((0, _testHelpers.currentURL)(), '/contact-us');

          case 10:
          case 'end':
            return _context2.stop();
        }
      }
    });
  });
  (0, _qunit.test)('visiting /contact-us', function _callee3(assert) {
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch ((_context3.prev = _context3.next)) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(
              (0, _testHelpers.visit)('/contact-us')
            );

          case 2:
            assert.strictEqual((0, _testHelpers.currentURL)(), '/contact-us');
            assert.dom('nav').exists();
            assert.dom('h1').hasText("Quake's Auto Detail");
            assert.dom('h2').hasText('Contact Us');
            assert.dom('.jumbo a.button').hasText('About Us');
            _context3.next = 9;
            return regeneratorRuntime.awrap(
              (0, _testHelpers.click)('.jumbo a.button')
            );

          case 9:
            assert.strictEqual((0, _testHelpers.currentURL)(), '/about');

          case 10:
          case 'end':
            return _context3.stop();
        }
      }
    });
  });
  (0, _qunit.test)('navigating using the nav-bar', function _callee4(assert) {
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch ((_context4.prev = _context4.next)) {
          case 0:
            _context4.next = 2;
            return regeneratorRuntime.awrap((0, _testHelpers.visit)('/'));

          case 2:
            assert.dom('nav').exists();
            assert.dom('nav a.menu-index').hasText("Quake's Auto Detail");
            assert.dom('nav a.menu-about').hasText('About');
            assert.dom('nav a.menu-contact').hasText('Contact');
            _context4.next = 8;
            return regeneratorRuntime.awrap(
              (0, _testHelpers.click)('nav a.menu-about')
            );

          case 8:
            assert.strictEqual((0, _testHelpers.currentURL)(), '/about');
            _context4.next = 11;
            return regeneratorRuntime.awrap(
              (0, _testHelpers.click)('nav a.menu-contact')
            );

          case 11:
            assert.strictEqual((0, _testHelpers.currentURL)(), '/contact-us');
            _context4.next = 14;
            return regeneratorRuntime.awrap(
              (0, _testHelpers.click)('nav a.menu-index')
            );

          case 14:
            assert.strictEqual((0, _testHelpers.currentURL)(), '/');

          case 15:
          case 'end':
            return _context4.stop();
        }
      }
    });
  });
});
