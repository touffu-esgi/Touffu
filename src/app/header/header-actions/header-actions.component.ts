import { Component, OnInit } from '@angular/core';
import { AuthServiceMockImplementation } from '../../services/auth/auth.service.mock.implementation';

@Component({
  selector: 'app-header-actions',
  templateUrl: './header-actions.component.html',
  styleUrls: ['./header-actions.component.scss']
})
export class HeaderActionsComponent implements OnInit {

  constructor(private authService: AuthServiceMockImplementation) { }

  ngOnInit(): void {
  }

  connected() {
    this.authService.getUser("1");
  }
}
