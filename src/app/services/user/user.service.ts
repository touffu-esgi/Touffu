import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../domaine/user/user';
import { HttpUtils } from '../../utils/http.utils';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private httpUtils: HttpUtils) { }

  addUser(user: User): Observable<string>{
    const body = JSON.stringify(user);
    return this.http.post<string>(`${this.httpUtils.fullUrl()}/user`, body, {headers: {'Content-Type': 'application/json'}})
  }

}
