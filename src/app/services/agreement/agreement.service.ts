import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agreement } from '../../domaine/agreement/agreement';
import { Observable } from 'rxjs';
import { HttpUtils } from '../../utils/http.utils';
import {AuthService} from "../auth/auth.service";



@Injectable({
  providedIn: 'root'
})
export class AgreementService{

  constructor(private http: HttpClient, private httpUtils: HttpUtils, private authService: AuthService) { }

  private baseUrl: string = this.httpUtils.fullUrl();

  addAgreement(agreement:Agreement): Observable<string>{
    const body = JSON.stringify(agreement);
    return this.http.post<string>(`${this.baseUrl}/agreement`, body, {headers: {'Content-Type': 'application/json'}});
  }

  getAgreementByRecipientId(recipientId: string): Observable<Agreement[]>{
    return this.http.get<Agreement[]>(`${this.baseUrl}/agreement?recipientRef=${recipientId}`);
  }

  getAgreementByAgreementAndRecipientId(agreementId:string, recipientId: string): Observable<Agreement[]> {
    return this.http.get<Agreement[]>(`${this.baseUrl}/agreement?recipientRef=${recipientId}&id=${agreementId}`);
  }

  getAgreementWithFilters(filters: string[]): Observable<Agreement[]>{
    return this.http.get<Agreement[]>(`${this.baseUrl}/agreement?${filters.join('&')}`);
  }

  update(agreement: Agreement) {
    const body = JSON.stringify(agreement);
    return this.http.put(`${this.baseUrl}/agreement/${agreement!.id}`, body, {headers: {'Content-Type': 'application/json'}});
  }

  getAgreementByProviderId(providerId: string) {
    return this.http.get<Agreement[]>(`${this.baseUrl}/agreement?providerRef=${providerId}`);
  }
}
