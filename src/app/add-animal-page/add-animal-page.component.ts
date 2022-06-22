import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../services/animal/animal.service';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-add-animal-page',
  templateUrl: './add-animal-page.component.html',
  styleUrls: ['./add-animal-page.component.scss']
})
export class AddAnimalPageComponent implements OnInit {

  constructor(private animalService: AnimalService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getAllAnimalsByRecipientId();
  }

  getAllAnimalsByRecipientId(){
    if(this.authService.user && this.authService.user.id) {
      this.animalService.getAnimalsByRecipientId(this.authService.user.id).subscribe(animals => {
        console.log(animals);
      });
    }
  }
}
