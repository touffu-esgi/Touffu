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

  constructor(recipient: RecipientProps) {
    this.address = new Address(recipient.address);
    this.email = recipient.email;
    this.name = recipient.name;
    this.password = recipient.password;
    this.phone = recipient.phone;
    this.surname = recipient.surname;
  }
}
