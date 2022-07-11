import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../../../domaine/message/message";
import { AuthServiceMockImplementation } from '../../../services/auth/auth.service.mock.implementation';
import { User } from '../../../domaine/user/user';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() message?: Message;
  @Input() sender?: string;
  user?: User;

  constructor(private authService: AuthServiceMockImplementation) { }

  ngOnInit(): void {
    this.user = this.authService.user;
  }

}
