import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-message-button',
  templateUrl: './send-message-button.component.html',
  styleUrls: ['./send-message-button.component.scss']
})
export class SendMessageButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    // TODO
    alert('send message')
  }

}
