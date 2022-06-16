import { Injectable } from '@angular/core';
import {RecipientServiceInterface} from "./recipient.service.interface";
import {Recipient} from "../../domaine/recipient/recipient";
import {HttpClient} from "@angular/common/http";
import {HttpUtils} from "../../utils/http.utils";

@Injectable({
  providedIn: 'root'
})
export class RecipientService implements RecipientServiceInterface{

  constructor(private http: HttpClient, private httpUtils: HttpUtils) { }

  signUp(recipient: Recipient): Promise<Boolean> {

    console.log(this.httpUtils.fullUrl())
    return Promise.resolve(false);
  }
}
