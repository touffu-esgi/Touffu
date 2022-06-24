import { Component, OnInit } from '@angular/core';
import { AuthServiceMockImplementation } from '../services/auth/auth.service.mock.implementation';

@Component({
  selector: 'app-connection-page',
  templateUrl: './connection-page.component.html',
  styleUrls: ['./connection-page.component.scss']
})
export class ConnectionPageComponent implements OnInit {

  constructor(private authService: AuthServiceMockImplementation) { }

  ngOnInit(): void {
  }

  connected() {
    this.authService.getUser("1");
    window.location.replace('');
  }


}
