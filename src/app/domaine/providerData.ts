import {ProviderProps} from "./provider.props";

export class ProviderData {
  private readonly _id: string;
  private readonly _name: string;
  private readonly _surname: string;
  private readonly _email: string;
  private readonly _password: string;
  private readonly _phone?: string;
  private readonly _address: string;
  private readonly _base_tariff: number;
  private readonly _radius: number;
  private readonly _profile_title: string;
  private readonly _profile_desc: string;

  constructor(providerProps: ProviderProps) {
    this._id = providerProps.id;
    this._name = providerProps.name;
    this._surname = providerProps.surname;
    this._email = providerProps.email;
    this._password = providerProps.password;
    this._phone = providerProps.phone ? providerProps.phone : '';
    this._address = providerProps.address;
    this._base_tariff = providerProps.base_tariff;
    this._radius = providerProps.radius;
    this._profile_title = providerProps.profile_title;
    this._profile_desc = providerProps.profile_desc;
  }
}
