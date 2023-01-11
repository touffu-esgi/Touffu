import {Recipient} from "../../domaine/recipient/recipient";
import {Observable} from "rxjs";

export interface RecipientServiceInterface {
  signUp(recipient: Recipient): Observable<Object>;
}
