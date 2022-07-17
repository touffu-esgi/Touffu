import { authServiceInterface } from './auth.service.interface';
import { User } from '../../domaine/user/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpUtils} from "../../utils/http.utils";

@Injectable({
  providedIn: 'root'
})
export class AuthService implements authServiceInterface{

  public user?: User;

  constructor(private http: HttpClient, private httpUtils: HttpUtils) {
    if(!this.user){
      this.user = JSON.parse(localStorage.getItem('user')!);
    }
  }

  private baseUrl: string = this.httpUtils.fullUrl()

  getUser(user: User): void {
    const body = JSON.stringify(user);
    this.http.post<User>(`${this.baseUrl}/user/login`, body, {headers: {'Content-Type': 'application/json'}}).subscribe(user => {
      this.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    })
  }

  signOut() {
    localStorage.clear();
    this.user = undefined;
  }
}
