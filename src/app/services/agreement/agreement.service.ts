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
    return this.http.post<string>('http://localhost:3000/agreement', body, {headers: {'Content-Type': 'application/json'}});
  }

  getAgreementByProviderId(providerId: string): Observable<Agreement[]>{
    return this.http.get<Agreement[]>(`http://localhost:3000/agreement?providerRef=${providerId}`);
  }

  getAgreementByAgreementAndProviderId(agreementId:string, providerId:string): Observable<Agreement[]> {
    return this.http.get<Agreement[]>(`http://localhost:3000/agreement?providerRef=${providerId}&id=${agreementId}`);
  }
}
