import { Injectable } from '@angular/core';
import {RecipientServiceInterface} from "./recipient.service.interface";
import {Recipient} from "../../domaine/recipient/recipient";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RecipientService implements RecipientServiceInterface{

  constructor(private http: HttpClient) { }

  signUp(recipient: Recipient): Promise<Boolean> {

    console.log()
    return Promise.resolve(false);
  }
}
