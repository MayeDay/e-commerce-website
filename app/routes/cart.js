import Route from '@ember/routing/route';
import { action, set } from '@ember/object';

export default class CartRoute extends Route {

  @action
  refresh(){
    this.refresh();
  }
}
