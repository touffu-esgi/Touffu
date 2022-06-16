import {Recipient} from "../../domaine/recipient/recipient";

export interface RecipientServiceInterface {
  signUp(recipient: Recipient): Promise<Boolean>;
}
