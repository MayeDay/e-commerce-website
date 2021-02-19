import Controller from '@ember/controller';
import { action, set } from '@ember/object';

export default class CartController extends Controller {
  
  @action
  revert(){
    this.refresh();
  }
}
