import { Injectable } from '@angular/core';
import {ProviderModel} from "../../models/provider.model";



@Injectable({
  providedIn: 'root'
})
export class ProviderServiceService {

  constructor() { }

  fetchAllProvider(): ProviderModel[]{
    const provider = ["Théo", "monaco", "Etudiant à l’ESGI, gaga de chats, loutres, et de chèvres naines."]
    let providers: ProviderModel[] = [];
    for (let i = 0; i < 3; i++) {
      providers.push(new ProviderModel(provider[0],provider[1],provider[2],150))
    }
    return providers;
  }


}
