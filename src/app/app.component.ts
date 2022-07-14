import { Component } from '@angular/core';
import { HealthService } from './services/health/health.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private healthService: HealthService, private router: Router) {
    this.healthService.isAlive().subscribe(isAlive => {
    }, error => {
      this.router.navigate(['/isNotAlive'])
    })
  }



  title = 'touffu';
}
