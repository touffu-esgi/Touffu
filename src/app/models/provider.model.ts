export class ProviderModel {
  name: String;
  placement: String;
  description: String
  price: Number;

  constructor(name: String, placement: String, description: String, price: Number) {
    this.name = name;
    this.placement = placement;
    this.description = description;
    this.price = price;
  }

}
