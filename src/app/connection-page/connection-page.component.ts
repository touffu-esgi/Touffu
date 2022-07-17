import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { User } from '../domaine/user/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connection-page',
  templateUrl: './connection-page.component.html',
  styleUrls: ['./connection-page.component.scss']
})
export class ConnectionPageComponent implements OnInit {
  user: User = new User("", "", "", "", "", "");

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.authService.user){
      this.router.navigate([`/${this.authService.user.userType}-profile`]);
    }
  }

  connected() {
    this.authService.getUser(this.user);
  }


}
