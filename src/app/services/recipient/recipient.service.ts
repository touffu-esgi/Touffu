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

  signUp(recipient: Recipient): Observable<{ url: string }> {
    const body = JSON.stringify(recipient);
    const url = this.httpUtils.fullUrl() + "/recipient";
    return this.http.post<{ url: string }>(url, body, {headers: {'Content-Type': 'application/json'}})
  }

  getRecipient(url: string): Observable<Recipient>{
    return this.http.get<Recipient>(url);
  }

  update(recipient: Recipient) {
    const body = JSON.stringify(recipient)
    return this.http.put(`${this.httpUtils.fullUrl()}/recipient/${recipient.id}`, body, {headers: {'Content-Type': 'application/json'}})
  }

  getOne(url: string): Observable<Recipient>{
    return this.http.get<Recipient>(url);
  }
}
