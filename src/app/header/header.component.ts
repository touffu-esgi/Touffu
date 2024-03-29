import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { User } from '../domaine/user/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: User = new User("", "", "", "", "", "", "");
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    if(this.authService.user) {
      this.user = this.authService.user;
    }
  }

}
