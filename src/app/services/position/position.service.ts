import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Position } from '../../domaine/position/position';
import { HttpUtils } from '../../utils/http.utils';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(private http: HttpClient, private httpUtils: HttpUtils) { }

  getLastPosition(agreementId: string): Observable<Position> {
    return this.http.get<Position>(`${this.httpUtils.fullUrl()}/position/${agreementId}`);
  }
}
