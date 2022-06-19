export class User{
  id?: string;
  email?: string;
  userReference?: string;
  userType?: string;

  constructor(
    id: string,
    email: string,
    userReference: string,
    userType: string,
  ) {
    this.email = email;
    this.userReference = userReference;
    this.id = id;
    this.userType = userType;
  }
}
