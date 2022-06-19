export class User{
  id?: string;
  email?: string;
  password?: string;
  userReference?: string;
  userType?: string;

  constructor(
    id: string,
    email: string,
    password: string,
    userReference: string,
    userType: string,
  ) {
    this.email = email;
    this.password = password;
    this.userReference = userReference;
    this.id = id;
    this.userType = userType;
  }
}
