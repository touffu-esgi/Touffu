import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProviderData} from "../../domaine/providerData";
import { HttpUtils } from '../../utils/http.utils';

@Injectable()
export class ProviderService {

  constructor(private http: HttpClient, private httpUtils: HttpUtils) { }

  getAllProviders(): Observable<ProviderData[]>{
    return this.http.get<ProviderData[]>(this.httpUtils.fullUrl() + "/provider");
  }

  getOneProviderByUrl(providerUrl: string): Observable<ProviderData> {
    return this.http.get<ProviderData>(providerUrl)
  }

  getOneProviders(providerId: string): Observable<ProviderData>{
    return this.http.get<ProviderData>(`http://localhost:3000/provider/${providerId}`);
  }

  getOneProviderByUrl(url: string): Observable<ProviderData>{
    return this.http.get<ProviderData>(url);
  }
}
