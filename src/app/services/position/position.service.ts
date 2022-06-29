import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Position } from '../../domaine/position/position';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(private http: HttpClient) { }

  getLastPosition(agreementId: string): Observable<Position> {
    return this.http.get<Position>(`http://152.228.219.241:3000/position/${agreementId}`);
  }

  pushPosition(agreementId: Position): Observable<void>{
    const body = JSON.stringify(agreementId);
    return this.http.post<void>(`http://152.228.219.241:3000/position`, body, {headers: {'Content-Type': 'application/json'}});
  }
}
