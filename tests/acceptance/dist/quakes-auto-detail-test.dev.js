'use strict';

var _qunit = require('qunit');

var _testHelpers = require('@ember/test-helpers');

var _helpers = require('quakes-auto-detail/tests/helpers');

(0, _qunit.module)('Acceptance | quakes auto detail', function (hooks) {
  (0, _helpers.setupApplicationTest)(hooks);
  (0, _qunit.test)('visiting /', function _callee2(assert) {
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch ((_context2.prev = _context2.next)) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap((0, _testHelpers.visit)('/'));

          case 2:
            assert.strictEqual((0, _testHelpers.currentURL)(), '/');
            assert.dom('h2').hasText("Welcome to Quake's Auto Detail!");
            assert.dom('.jumbo a.button').hasText('About Us');
            _context2.next = 7;
            return regeneratorRuntime.awrap(
              (0, _testHelpers.click)('.jumbo a.button')
            );

          case 7:
            assert.strictEqual((0, _testHelpers.currentURL)(), '/about');
            (0, _qunit.test)('visiting /about', function _callee(assert) {
              return regeneratorRuntime.async(function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      _context.next = 2;
                      return regeneratorRuntime.awrap(
                        (0, _testHelpers.visit)('/about')
                      );

                    case 2:
                      assert.strictEqual(
                        (0, _testHelpers.currentURL)(),
                        '/about'
                      );
                      assert.dom('h2').hasText("About Quake's Auto Detail");

                    case 4:
                    case 'end':
                      return _context.stop();
                  }
                }
              });
            });

          case 9:
          case 'end':
            return _context2.stop();
        }
      }
    });
  });
});
