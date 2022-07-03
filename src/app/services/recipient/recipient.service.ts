import { Injectable } from '@angular/core';
import {RecipientServiceInterface} from "./recipient.service.interface";
import {Recipient} from "../../domaine/recipient/recipient";
import {HttpClient} from "@angular/common/http";
import {HttpUtils} from "../../utils/http.utils";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecipientService implements RecipientServiceInterface{

  constructor(private http: HttpClient, private httpUtils: HttpUtils) { }

  signUp(recipient: Recipient): Observable<Object> {

    const body = JSON.stringify(recipient);
    const url = this.httpUtils.fullUrl() + "/recipient";
    return this.http.post(url, body, {headers: {'Content-Type': 'application/json'}})
  }
}