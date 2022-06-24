import { authServiceInterface } from './auth.service.interface';
import { User } from '../../domaine/user/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceMockImplementation implements authServiceInterface{

  public user?: User;

  constructor(private http: HttpClient) {
    if(!this.user){
      this.user = JSON.parse(localStorage.getItem('user')!);
    }
  }

  getUser(user: User): void {
    const body = JSON.stringify(user);
    this.http.post<User>(`http://localhost:3000/user/login`, body, {headers: {'Content-Type': 'application/json'}}).subscribe(user => {
      this.user = user;
      localStorage.setItem('user', JSON.stringify(user));
      window.location.replace('/');
    })
  }

  signOut() {
    localStorage.clear();
    this.user = undefined;
  }
}
