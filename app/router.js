import EmberRouter from '@ember/routing/router';
import config from 'e-commerce-website/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('cart');
  this.route('checkout');
  this.route('order');
});
