import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-recipient-sign-up',
  templateUrl: './recipient-sign-up.component.html',
  styleUrls: ['./recipient-sign-up.component.scss']
})
export class RecipientSignUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(form: NgForm): void {
    console.log(form)
  }

}
