import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProviderData} from "../../domaine/providerData";
import { Agreement } from '../../domaine/agreement/agreement';
import { Recipient } from '../../domaine/recipient/recipient';
import { HttpUtils } from '../../utils/http.utils';

@Injectable()
export class ProviderService {

  constructor(private http: HttpClient, private httpUtils: HttpUtils) { }

  getAllProviders(filter: string[]): Observable<ProviderData[]>{
    if (filter.length > 0){
      return this.http.get<ProviderData[]>(this.httpUtils.fullUrl() + "/provider?" + filter.join('&'));
    }else{
      return this.http.get<ProviderData[]>(this.httpUtils.fullUrl() + "/provider");
    }
  }

  getOneProviders(providerId: string): Observable<ProviderData>{
    return this.http.get<ProviderData>(`${this.httpUtils.fullUrl()}/provider/${providerId}`);
  }

  getOneProviderByUrl(url: string): Observable<ProviderData> {
    return this.http.get<ProviderData>(url);
  }

  getOneByUrl(url: string): Observable<ProviderData | Recipient>{
    return this.http.get<ProviderData | Recipient>(url);
  }

  getAgreementOfOneProvider(providerId: string): Observable<Agreement[]>{
    return this.http.get<Agreement[]>(`${this.httpUtils.fullUrl()}/agreement?providerRef=${providerId}`, {headers: {'Content': 'application/json'}})
  }
}
