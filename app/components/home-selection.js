import Component from '@glimmer/component';
import {inject as service} from '@ember/service';
import { action, set } from '@ember/object';

export default class HomeSelectionComponent extends Component {

  catagoriesList = ["Motors", "Fashion", "Electronics", "Collectibles & Art", "Home & Garden", "Sports", "Toys", "Bussiness", "Music"];
  @service ('session') services;

  @action
  getItems(item){
    
    if(item == "Motors"){
      this.services.current = this.services.motors;
    }else if(item == "Toys"){
      this.services.current = this.services.toys;
    }else if(item == "Electronics"){
      this.services.current = this.services.electronics;
    }else if(item == "Sports"){
      this.services.current = this.services.sports;
    }else if(item == "Fashion"){
      this.services.current = this.services.fashion;
    }
  }
}
