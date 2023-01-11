import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProviderData} from "../../domaine/providerData";
import {Address} from "../../domaine/address/address";
import {HttpUtils} from "../../utils/http.utils";

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient, private httpUtils: HttpUtils) { }

  getOneAddress(url: string): Observable<Address>{
    return this.http.get<Address>(url);
  }

  addAddress(address: Address): Observable<{url: string}>{
    const body = JSON.stringify(address);
    return this.http.post<{url: string}>(this.httpUtils.fullUrl() + "/address", body, {headers: {'Content-Type': 'application/json'}});
  }

  update(address: Address): Observable<void> {
    const body = JSON.stringify(address);
    return this.http.put<void>(`${this.httpUtils.fullUrl()}/address/${address.id}`, body, {headers: {'Content-Type': 'application/json'}});
  }
}
