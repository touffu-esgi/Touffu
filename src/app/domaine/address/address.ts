import {AddressProps} from "./address.props";

export class Address implements AddressProps {
  id: string;
  addr1: string;
  addr2?: string;
  zipcode: string;
  city: string;
  country: string;

  constructor(addressProps: AddressProps) {
    this.id = addressProps.id;
    this.addr1 = addressProps.addr1;
    this.addr2 = addressProps.addr2;
    this.zipcode = addressProps.zipcode;
    this.city = addressProps.city;
    this.country = addressProps.country;
  }

  public static newEmptyAddress () {
    return new Address({
      addr1: '',
      addr2: '',
      city: '',
      country: '',
      id: '',
      zipcode: ''
    })
  }

}
