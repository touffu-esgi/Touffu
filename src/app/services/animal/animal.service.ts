import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animal } from '../../homePage/animal/animal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) {}

  getAnimalsByRecipientId(recipientId: string): Observable<Animal[]>{
    return this.http.get<Animal[]>(`http://localhost:3000/animals/${recipientId}`);
  }
}
