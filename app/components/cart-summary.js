import Component from '@glimmer/component';
import { action, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import {inject as service} from '@ember/service';

export default class CartSummaryComponent extends Component {

  @service ('session') services;

  @action
  totalPrice(){
    let total = 0;
    for(let i = 0; i < this.services.currentCart.length;i++){
      total += this.services.currentCart[i].price * this.services.currentCart[i].amount
    }
    return total;
    
  }
}
