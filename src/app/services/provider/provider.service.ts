import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProviderData} from "../../domaine/providerData";
import { Agreement } from '../../domaine/agreement/agreement';
import { Recipient } from '../../domaine/recipient/recipient';

@Injectable()
export class ProviderService {

  constructor(private http: HttpClient) { }

  getAllProviders(): Observable<ProviderData[]>{
    return this.http.get<ProviderData[]>("http://localhost:3000/provider/");
  }

  getOneProviders(providerId: string): Observable<ProviderData>{
    return this.http.get<ProviderData>(`http://localhost:3000/provider/${providerId}`);
  }

  getOneByUrl(url: string): Observable<ProviderData | Recipient>{
    return this.http.get<ProviderData | Recipient>(url);
  }

  getAgreementOfOneProvider(providerId: string): Observable<Agreement[]>{
    return this.http.get<Agreement[]>(`http://152.228.219.241:3000/agreement?providerRef=${providerId}`, {headers: {'Content': 'application/json'}})
  }
}
