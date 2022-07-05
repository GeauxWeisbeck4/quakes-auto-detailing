import { module, test } from 'qunit';
import { setupRenderingTest } from 'quakes-auto-detail/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | detail', function (hooks) {
  setupRenderingTest(hooks);

  test('it render information about detail service', async function (assert) {
    await render(hbs`<Detail />`);

    assert.dom(this.element).hasText('Detail Service');
    assert.dom('article').hasClass('rental');
    assert.dom('article h3').hasText('Grand Ol Detail');
    assert.dom('article .detail.owner').includesText('Full Service Detail');
    assert.dom('article .detail.type').includesText('Full Vehicle Detail');
  });
});
