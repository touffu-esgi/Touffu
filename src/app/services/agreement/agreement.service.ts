import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agreement } from '../../domaine/agreement/agreement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgreementService{

  constructor(private http: HttpClient) { }

  addAgreement(agreement:Agreement): Observable<string>{
    const body = JSON.stringify(agreement);
    return this.http.post<string>('http://152.228.219.241:3000/agreement', body, {headers: {'Content-Type': 'application/json'}});
  }

  getAgreementByRecipientId(recipientId: string): Observable<Agreement[]>{
    return this.http.get<Agreement[]>(`http://152.228.219.241:3000/agreement?recipientRef=${recipientId}`);
  }

  getAgreementByAgreementAndRecipientId(agreementId:string, recipientId:string): Observable<Agreement[]> {
    return this.http.get<Agreement[]>(`http://152.228.219.241:3000/agreement?recipientRef=${recipientId}&id=${agreementId}`);
  }

  update(agreement: Agreement) {
    const body = JSON.stringify(agreement);
    return this.http.put(`http://152.228.219.241:3000/agreement/${agreement!.id}`, body, {headers: {'Content-Type': 'application/json'}});
  }
}
