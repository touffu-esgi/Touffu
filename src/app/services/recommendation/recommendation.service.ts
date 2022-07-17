import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recommendation } from '../../domaine/recommendation/recommendation';
import { HttpUtils } from '../../utils/http.utils';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  constructor(private http: HttpClient, private httpUtils: HttpUtils) { }


  addRecommendation(recommendation:Recommendation): void{
    const body = JSON.stringify({
      "providerId": recommendation.providerId,
      "recipientId": recommendation.recipientId,
      "review": recommendation.review,
      "score": recommendation.score
    })
    this.http.post(this.httpUtils.fullUrl() + "/recommendation", body, {headers: {'Content-Type': 'application/json'}}).subscribe()
  }

  getRecommendations(providerId: string): Observable<Recommendation[]>{
    return this.http.get<Recommendation[]>(this.httpUtils.fullUrl() + `/recommendation/${providerId}`)
  }

  getAverage (providerId: string): Observable<{average: number}>{
    return this.http.get<{average: number}>(this.httpUtils.fullUrl() + `/recommendation/average/${providerId}`)
  }

}
