import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ProviderData} from "../../domaine/providerData";

@Injectable()
export class ProviderService {

  constructor(private http: HttpClient) { }

  async getAllProviders(): Promise<Observable<ProviderData[]>>{
    return await this.http.get<ProviderData[]>("http://localhost:3000/providers/");
  }
}
