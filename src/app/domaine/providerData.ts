import {ProviderProps} from "./provider.props";

export class ProviderData {
  id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  phoneNumber?: string;
  address: string;
  base_tariff: number;
  radius: number;
  profile_title: string;
  profile_desc: string;


  constructor(providerProps: ProviderProps) {
    this.id = providerProps.id;
    this.name = providerProps.name;
    this.surname = providerProps.surname;
    this.email = providerProps.email;
    this.password = providerProps.password;
    this.phoneNumber = providerProps.phone ? providerProps.phone : '';
    this.address = providerProps.address;
    this.base_tariff = providerProps.base_tariff;
    this.radius = providerProps.radius;
    this.profile_title = providerProps.profile_title;
    this.profile_desc = providerProps.profile_desc;
  }
}
