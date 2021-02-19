import Component from '@glimmer/component';
import {inject as service} from '@ember/service';
import { action, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CheckoutFormComponent extends Component {

  @service ('session') services;

  @action
  checkout(info){
    if(this.services.currentCart.length > 0){
      this.services.customer.push(info);
      alert("Order accepted proceede to Order Section");
    }else {
      alert("No Items in Cart, Please select Items and try again!");
    }
  }
}
