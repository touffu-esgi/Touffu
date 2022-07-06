import { Component, Input, OnInit } from '@angular/core';
import { AuthServiceMockImplementation } from '../../services/auth/auth.service.mock.implementation';

@Component({
  selector: 'app-header-actions',
  templateUrl: './header-actions.component.html',
  styleUrls: ['./header-actions.component.scss']
})
export class HeaderActionsComponent implements OnInit {
  @Input() userId: string | null = null;
  @Input() userEmail: string | null = null;
  @Input() userType: string | null = null;

  constructor(private authService: AuthServiceMockImplementation) { }

  ngOnInit(): void {
  }

  signOut(){
    this.authService.signOut();
    this.userId = null;
    this.userEmail = null;
    this.userType = null;
  }
}
