import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../../../domaine/message/message";
import { User } from '../../../domaine/user/user';
import {AuthService} from "../../../services/auth/auth.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() message?: Message;
  @Input() sender?: string;
  user?: User;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.user;

  }

}
