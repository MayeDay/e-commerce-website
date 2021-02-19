import Component from '@glimmer/component';
import {inject as service} from '@ember/service';

export default class CatagoryComponent extends Component {

  @service ('session') services;

  render(){
    this.services.current;
    this.services.currentCart;
  }
}
