import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss']
})
export class MessageBoxComponent implements OnInit {

  @Input() errorMsg: string = ""
  @Input() successMsg: string = ""
  @Input() displayError: boolean = false
  @Input() displaySuccess: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
