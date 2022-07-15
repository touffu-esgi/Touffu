import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpUtils } from '../../utils/http.utils';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  imageToShow?: string | ArrayBuffer | null;

  constructor(private http: HttpClient, private httpUtils: HttpUtils) { }

  update(id: string, email: string): Observable<never> {
    const body = JSON.stringify({"email": email})
    return this.http.put<never>(`${this.httpUtils.fullUrl()}/user/${id}`, body, {headers: {'Content-Type': 'application/json'}})
  }


  getFile(): Observable<object>{
    // @ts-ignore
    return this.http.get<object>(`${this.httpUtils.fullUrl()}/user/profileImage`, { responseType: 'blob' })
  }

  uploadProfileImage(formData: FormData): Observable<{ url: string }>{
    return this.http.post<{ url: string }>(`${this.httpUtils.fullUrl()}/user/image/profile`, formData);
  }
}
