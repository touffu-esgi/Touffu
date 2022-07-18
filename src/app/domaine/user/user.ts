export class User{
  id?: string;
  email?: string;
  userReference?: string;
  userType?: string;
  password?: string;
  profilePic?: string;
  status?: string;

  constructor(
    id: string,
    email: string,
    userReference: string,
    userType: string,
    password: string,
    profilePic: string,
    status: string,
  ) {
    this.email = email;
    this.userReference = userReference;
    this.id = id;
    this.userType = userType;
    this.password = password;
    this.profilePic = profilePic;
    this.status = status;
  }
}
