import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProviderData} from "../../domaine/providerData";
import { HttpUtils } from '../../utils/http.utils';
import { Availability } from '../../domaine/availability/availability';

@Injectable()
export class ProviderService {

  constructor(private http: HttpClient, private httpUtils: HttpUtils) { }

  getAllProviders(): Observable<ProviderData[]>{
    return this.http.get<ProviderData[]>(this.httpUtils.fullUrl() + "/provider");
  }

  getOneProviderByUrl(providerUrl: string): Observable<ProviderData> {
    return this.http.get<ProviderData>(providerUrl)
  }

  getProviderAvailability(providerId: string): Observable<Availability[]>{
    return this.http.get<Availability[]>(`${this.httpUtils.fullUrl()}/availability/${providerId}`);
  }
}
