import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProviderData} from "../../domaine/providerData";
import { Agreement } from '../../domaine/agreement/agreement';
import { Recipient } from '../../domaine/recipient/recipient';
import { HttpUtils } from '../../utils/http.utils';
import { Availability } from '../../domaine/availability/availability';

@Injectable()
export class ProviderService {

  constructor(private http: HttpClient, private httpUtils: HttpUtils) { }

  getAllProviders(): Observable<ProviderData[]>{
    return this.http.get<ProviderData[]>(this.httpUtils.fullUrl() + "/provider");
  }

  getOneProviders(providerId: string): Observable<ProviderData>{
    return this.http.get<ProviderData>(`${this.httpUtils.fullUrl()}/provider/${providerId}`);
  }

  getOneProviderByUrl(url: string): Observable<ProviderData> {
    return this.http.get<ProviderData>(url);
  }

  signUp(newProvider: ProviderData): Observable<{ url: string }> {
    const body = JSON.stringify(newProvider);
    return this.http.post<{ url: string }>(
      `${this.httpUtils.fullUrl()}/provider`,
      body,
      {headers: {'Content-Type': 'application/json'}}
    )
  }

  update(provider: ProviderData): Observable<void> {
    provider.address = provider.address.split("/").pop()!;
    console.log(provider);
    const body = JSON.stringify(provider);
    return this.http.put<void>(`${this.httpUtils.fullUrl()}/provider/${provider.id}`, body, {headers: {'Content-Type': 'application/json'}})
  }

  getOneByUrl(url: string): Observable<ProviderData | Recipient>{
    return this.http.get<ProviderData | Recipient>(url);
  }

  getAgreementOfOneProvider(providerId: string): Observable<Agreement[]>{
    return this.http.get<Agreement[]>(`${this.httpUtils.fullUrl()}/agreement?providerRef=${providerId}`, {headers: {'Content': 'application/json'}})
  }

  getProviderAvailability(providerId: string): Observable<Availability[]>{
    return this.http.get<Availability[]>(`${this.httpUtils.fullUrl()}/availability/${providerId}`);
  }
}
