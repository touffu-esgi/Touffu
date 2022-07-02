import { Component, OnInit } from '@angular/core';
import { AuthServiceMockImplementation } from '../services/auth/auth.service.mock.implementation';
import { User } from '../domaine/user/user';

@Component({
  selector: 'app-connection-page',
  templateUrl: './connection-page.component.html',
  styleUrls: ['./connection-page.component.scss']
})
export class ConnectionPageComponent implements OnInit {

  constructor(private authService: AuthServiceMockImplementation) { }
  user: User = new User("", "", "", "", "");
  ngOnInit(): void {
  }

  connected() {
    this.authService.getUser(this.user);
  }


}
