import { User } from '../../domaine/user/user';

export interface authServiceInterface{
  getUser(user: User): void;
}
