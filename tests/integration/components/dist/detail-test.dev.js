'use strict';

var _qunit = require('qunit');

var _helpers = require('quakes-auto-detail/tests/helpers');

var _testHelpers = require('@ember/test-helpers');

var _emberCliHtmlbars = require('ember-cli-htmlbars');

function _templateObject() {
  var data = _taggedTemplateLiteral(['<Detail />']);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  );
}

(0, _qunit.module)('Integration | Component | detail', function (hooks) {
  (0, _helpers.setupRenderingTest)(hooks);
  (0,
  _qunit.test)('it render information about detail service', function _callee(assert) {
    return regeneratorRuntime.async(
      function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(
                (0, _testHelpers.render)(
                  (0, _emberCliHtmlbars.hbs)(_templateObject())
                )
              );

            case 2:
              assert.dom(this.element).hasText('Detail Service');
              assert.dom('article').hasClass('rental');
              assert.dom('article h3').hasText('Grand Ol Detail');
              assert
                .dom('article .detail.owner')
                .includesText('Full Service Detail');
              assert
                .dom('article .detail.type')
                .includesText('Full Vehicle Detail');

            case 7:
            case 'end':
              return _context.stop();
          }
        }
      },
      null,
      this
    );
  });
});
