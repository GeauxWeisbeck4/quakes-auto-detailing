import { module, test } from 'qunit';
import { setupRenderingTest } from 'quakes-auto-detail/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | jumbo', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the content inside a jumbo header with a quakes', async function (assert) {
    await render(hbs`<Jumbo>Hello World</Jumbo>`);

    assert.dom('.jumbo').exists();
    assert.dom('jumbo').hasText('Hello World');
    assert.dom('.jumbo .quakes').exists();
  });
});
