import { Address } from './address/address';

export interface ProviderProps {
  readonly id: string;
  readonly name: string;
  readonly surname: string;
  readonly email: string;
  readonly password: string;
  readonly phone?: string;
  readonly address: string;
  readonly base_tariff: number;
  readonly radius: number;
  readonly profile_title: string;
  readonly profile_desc: string;
  readonly profile_pic: string;
  readonly userId: string;
  readonly animalType: string[];

}
