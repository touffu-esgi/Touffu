import {RecipientProps} from "./recipient.props";
import {Address} from "../address/address";
import {AddressProps} from "../address/address.props";

export class Recipient implements RecipientProps{
  address: Address;
  email: string;
  name: string;
  password: string;
  phone: string;
  surname: string;

  constructor(address: AddressProps, email: string, name: string, password: string, phone: string, surname: string) {
    this.address = new Address(address);
    this.email = email;
    this.name = name;
    this.password = password;
    this.phone = phone;
    this.surname = surname;
  }
}
