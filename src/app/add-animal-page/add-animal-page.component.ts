import { Component, OnInit } from '@angular/core';
import { Animal } from '../homePage/animal/animal';
import { AnimalService } from '../services/animal/animal.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
@Component({
  selector: 'app-add-animal-page',
  templateUrl: './add-animal-page.component.html',
  styleUrls: ['./add-animal-page.component.scss']
})
export class AddAnimalPageComponent implements OnInit {
  animal: Animal = new Animal("", "", "");
  private animalAddSubscribe?: Subscription;

  constructor(private animalService: AnimalService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    if (this.authService.user?.userType != "recipient"){
      this.router.navigate(['/']);
    }
  }

  addAnimal() {
    this.animalAddSubscribe = this.animalService.addAnimal(this.animal).subscribe(() => this.router.navigate(['/recipient-profile']));
  }

  ngDestroy(){
    this.animalAddSubscribe!.unsubscribe();
  }
}
