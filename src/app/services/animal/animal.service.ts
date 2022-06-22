import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animal } from '../../homePage/animal/animal';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient, private auth: AuthService) {}

  getAnimalsByRecipientId(recipientId: string): Observable<Animal[]>{
    return this.http.get<Animal[]>(`http://localhost:3000/animals/${recipientId}`);
  }

  addAnimal(animal: Animal): Observable<string>{
    animal.recipientId = this.auth.user!.id!;
    const body = JSON.stringify(animal);
    return this.http.post<string>(`http://localhost:3000/animals`, body, {headers: {'Content-Type': 'application/json'}});
  }
}
