import {RecipientProps} from "./recipient.props";
import {Address} from "../address/address";
import {AddressProps} from "../address/address.props";

export class Recipient implements RecipientProps{
  id: string;
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
  password: string;
  address: Address;

  constructor(recipient: RecipientProps) {
    this.id = recipient.id;
    this.name = recipient.name;
    this.surname = recipient.surname;
    this.email = recipient.email;
    this.phoneNumber = recipient.phoneNumber;
    this.password = recipient.password;
    this.address = new Address(recipient.address);
  }
}
