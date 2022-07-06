import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProviderData} from "../../domaine/providerData";
import { HttpUtils } from '../../utils/http.utils';

@Injectable()
export class ProviderService {

  constructor(private http: HttpClient, private httpUtils: HttpUtils) { }

  getAllProviders(filter?: string[]): Observable<ProviderData[]>{
    if (filter && filter.length > 0){
      return this.http.get<ProviderData[]>(this.httpUtils.fullUrl() + "/provider?animalType=" + filter[0]);
    }else{
      return this.http.get<ProviderData[]>(this.httpUtils.fullUrl() + "/provider");
    }
  }

  getOneProviderByUrl(providerUrl: string): Observable<ProviderData> {
    return this.http.get<ProviderData>(providerUrl)
  }
}
