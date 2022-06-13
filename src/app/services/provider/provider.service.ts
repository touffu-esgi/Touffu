import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProviderData} from "../../domaine/providerData";

@Injectable()
export class ProviderService {

  constructor(private http: HttpClient) { }

  getAllProviders(): Observable<ProviderData[]>{
    return this.http.get<ProviderData[]>("http://localhost:3000/provider/");
  }
}
