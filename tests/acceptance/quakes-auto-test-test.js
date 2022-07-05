import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | super rentals', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit(`/`);

    assert.strictEqual(currentURL(), '/');
    assert.dom('nav').exists();
    assert.dom('h1').hasText("Quake's Auto Detail");
    assert.dom('h2').hasText("Welcome to Quake's Auto Detail!");

    assert.dom('.jumbo a.button').hasText('About Us');
    await click('.jumbo a.button');

    assert.strictEqual(currentURL(), '/about');
  });

  test('visiting /about', async function (assert) {
    await visit('/about');

    assert.strictEqual(currentURL(), '/about');
    assert.dom('nav').exists();
    assert.dom('h1').hasText("Quake's Auto Detail");
    assert.dom('h2').hasText("About Quake's Auto Detail");

    assert.dom('.jumbo a.button').hasText('Contact Us');
    await click('.jumbo a.button');

    assert.strictEqual(currentURL(), '/contact-us');
  });

  test('visiting /contact-us', async function (assert) {
    await visit('/contact-us');

    assert.strictEqual(currentURL(), '/contact-us');
    assert.dom('nav').exists();
    assert.dom('h1').hasText("Quake's Auto Detail");
    assert.dom('h2').hasText('Contact Us');

    assert.dom('.jumbo a.button').hasText('About Us');
    await click('.jumbo a.button');

    assert.strictEqual(currentURL(), '/about');
  });

  test('navigating using the nav-bar', async function (assert) {
    await visit('/');

    assert.dom('nav').exists();
    assert.dom('nav a.menu-index').hasText("Quake's Auto Detail");
    assert.dom('nav a.menu-about').hasText('About');
    assert.dom('nav a.menu-contact').hasText('Contact');

    await click('nav a.menu-about');
    assert.strictEqual(currentURL(), '/about');

    await click('nav a.menu-contact');
    assert.strictEqual(currentURL(), '/contact-us');

    await click('nav a.menu-index');
    assert.strictEqual(currentURL(), '/');
  });
});
