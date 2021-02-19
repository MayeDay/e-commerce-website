import Component from '@glimmer/component';
import { action, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import {inject as service} from '@ember/service';

export default class StockItemComponent extends Component {
  @service ('session') services;

  @tracked stocks = 0;

  @action
  addToCart(){
    this.stocks+=1;
  }

  @action
  removeFromCart(){
    if(this.stocks > 0){
      this.stocks-=1;
    }
  }

  @action
  sendToCart(item){
    item.amount = this.stocks;
    if(item.amount > 0){
      this.services.currentCart.push(item);
    }
  }
}
