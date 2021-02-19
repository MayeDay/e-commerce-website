import Model, { attr } from '@ember-data/model';

export default class StockItemModel extends Model {
  @attr('string') title;
  @attr('string') description;
  @attr('string') name;
  @attr('number') amount;
}
