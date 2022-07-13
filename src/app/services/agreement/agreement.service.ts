import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agreement } from '../../domaine/agreement/agreement';
import { Observable } from 'rxjs';
import { HttpUtils } from '../../utils/http.utils';



@Injectable({
  providedIn: 'root'
})
export class AgreementService{

  constructor(private http: HttpClient, private httpUtils: HttpUtils) { }

  addAgreement(agreement:Agreement): Observable<string>{
    const body = JSON.stringify(agreement);
    return this.http.post<string>(`${this.httpUtils.fullUrl()}/agreement`, body, {headers: {'Content-Type': 'application/json'}});
  }

  getAgreementByRecipientId(recipientId: string): Observable<Agreement[]>{
    return this.http.get<Agreement[]>(`${this.httpUtils.fullUrl()}/agreement?recipientRef=${recipientId}`);
  }

  getAgreementByAgreementAndRecipientId(agreementId:string, recipientId:string): Observable<Agreement[]> {
    return this.http.get<Agreement[]>(`${this.httpUtils.fullUrl()}/agreement?recipientRef=${recipientId}&id=${agreementId}`);
  }

  update(agreement: Agreement) {
    const body = JSON.stringify(agreement);
    return this.http.put(`${this.httpUtils.fullUrl()}/agreement/${agreement!.id}`, body, {headers: {'Content-Type': 'application/json'}});
  }

  getAgreementByProviderId(providerId: string) {
    return this.http.get<Agreement[]>(`${this.httpUtils.fullUrl()}/agreement?providerRef=${providerId}`);
  }
}
