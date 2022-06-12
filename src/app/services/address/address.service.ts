import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProviderData} from "../../domaine/providerData";
import {Address} from "../../domaine/address/address";

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  getOneAddress(url: string): Observable<Address>{
    return this.http.get<Address>(url);
  }
}
