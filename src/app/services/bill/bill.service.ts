import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpUtils } from '../../utils/http.utils';
import { Observable } from 'rxjs';
import { Bill } from '../../domaine/bill/bill';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private http: HttpClient, private httpUtils: HttpUtils) {

  }

  getProviderBills(providerId: string): Observable<Bill[]> {
    return this.http.get<Bill[]>(this.httpUtils.fullUrl() + `/bill?providerRef=${providerId}`);
  }
}
