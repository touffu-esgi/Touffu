import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animal } from '../../homePage/animal/animal';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { HttpUtils } from '../../utils/http.utils';
import {Agreement} from "../../domaine/agreement/agreement";

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient, private auth: AuthService, private httpUtils: HttpUtils) {}

  getAnimalsByRecipientId(recipientId: string): Observable<Animal[]>{
    return this.http.get<Animal[]>(this.httpUtils.fullUrl() + `/animals/recipient/${recipientId}`);
  }

  addAnimal(animal: Animal): Observable<string>{
    animal.recipientId = this.auth.user!.userReference!.split("/").pop()!;
    const body = JSON.stringify(animal);
    return this.http.post<string>(this.httpUtils.fullUrl() +  `/animals`, body, {headers: {'Content-Type': 'application/json'}});
  }

  checkAnimalOnWalk(animalId: string): Observable<Agreement | null> {
    return this.http.get<Agreement | null>(this.httpUtils.fullUrl() + `/agreement/datetime?animal=${animalId}`, {headers: {'Content-Type': 'application/json'}})
  }

  getAnimalsByUrl(url: string): Observable<Animal>{
    return this.http.get<Animal>(`${url}`);
  }

  getAnimalById(animalId: string): Observable<Animal>{
    return this.http.get<Animal>(`${this.httpUtils.fullUrl()}/animals/${animalId}`);
  }

  getAnimalType(): Observable<string[]>{
    return this.http.get<string[]>(`${this.httpUtils.fullUrl()}/animals/animalType`);
  }
}
