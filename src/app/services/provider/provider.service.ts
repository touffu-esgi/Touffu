import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProviderData} from "../../domaine/providerData";

@Injectable()
export class ProviderService {

  constructor(private http: HttpClient) { }

  getAllProviders(): Observable<ProviderData[]>{
    return this.http.get<ProviderData[]>("http://152.228.219.241:3000/provider/");
  }

  getOneProviders(providerId: string): Observable<ProviderData>{
    return this.http.get<ProviderData>(`http://152.228.219.241:3000/provider/${providerId}`);
  }

  getOneByUrl(url: string): Observable<ProviderData>{
    return this.http.get<ProviderData>(url);
  }
}
