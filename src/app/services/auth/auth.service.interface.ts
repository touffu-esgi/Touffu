import { User } from '../../domaine/user/user';

export interface authServiceInterface{
  getUser(id: User): void;
}
