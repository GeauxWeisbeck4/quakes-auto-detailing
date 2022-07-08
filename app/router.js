import EmberRouter from '@ember/routing/router';
import config from 'quakes-auto-detail/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('contact', { path: '/contact-us' });
  this.route('gallery');
});
