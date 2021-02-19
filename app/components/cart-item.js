import Component from '@glimmer/component';
import {inject as service} from '@ember/service';
import { action, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CartItemComponent extends Component {
  @service ('session') services;

  @tracked stocks = 0;
  @tracked rendering = this.render();
  
  @action
  addToCart(){
    this.stocks += 1;
  }

  @action
  removeFromCart(){
    if(this.stocks > 0){
      this.stocks -= 1;
    }
  }

  @action
  takeOff(item){

    let temp = [];
    for(let i = 0; i <this.services.currentCart.length; i++){
      if(item.title == this.services.currentCart[i].title){
      
      }else {
        temp.push(this.services.currentCart[i]);
      }
    }
    this.services.currentCart = temp;
  }

  @action
  update(item){
    
    let temp = [];
    
    for(let i = 0; i <this.services.currentCart.length; i++){
      if(item.title == this.services.currentCart[i].title){
        this.services.currentCart[i].amount += this.stocks;
        temp.pushObject(this.services.currentCart[i]);
      }else {
        temp.pushObject(this.services.currentCart[i]);
      }
    }
    this.services.currentCart = temp;
    alert("Return to Home to see cart updates.");
  }
}
