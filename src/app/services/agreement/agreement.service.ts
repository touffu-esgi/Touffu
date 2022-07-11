import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agreement } from '../../domaine/agreement/agreement';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AgreementService{

  private baseAgreementUrl: string = `http://localhost:3000/agreement`

  constructor(private http: HttpClient) { }

  addAgreement(agreement:Agreement): Observable<string>{
    const body = JSON.stringify(agreement);
    return this.http.post<string>(this.baseAgreementUrl, body, {headers: {'Content-Type': 'application/json'}});
  }

  getAgreementByRecipientId(recipientId: string): Observable<Agreement[]>{
    return this.http.get<Agreement[]>(`${this.baseAgreementUrl}?recipientRef=${recipientId}`);
  }

  getAgreementByAgreementAndRecipientId(agreementId:string, recipientId:string): Observable<Agreement[]> {
    return this.http.get<Agreement[]>(`${this.baseAgreementUrl}?recipientRef=${recipientId}&id=${agreementId}`);
  }

  getAgreementWithFilters(filters: string[]): Observable<Agreement[]>{
    return this.http.get<Agreement[]>(`${this.baseAgreementUrl}?${filters.join('&')}`);
  }

  update(agreement: Agreement) {
    const body = JSON.stringify(agreement);
    return this.http.put(`${this.baseAgreementUrl}/${agreement!.id}`, body, {headers: {'Content-Type': 'application/json'}});
  }
}
