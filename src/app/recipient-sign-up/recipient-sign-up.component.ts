import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {Recipient} from "../domaine/recipient/recipient";
import {Address} from "../domaine/address/address";
import {RecipientService} from "../services/recipient/recipient.service";

@Component({
  selector: 'app-recipient-sign-up',
  templateUrl: './recipient-sign-up.component.html',
  styleUrls: ['./recipient-sign-up.component.scss']
})
export class RecipientSignUpComponent implements OnInit {

  public newRecipient: Recipient = new Recipient({
    address: new Address({addr1: "", city: "", country: "", id: "", zipcode: ""}),
    email: "",
    name: "",
    password: "",
    phoneNumber: "",
    surname: ""
  });

  constructor(private recipientService: RecipientService) { }

  ngOnInit(): void {
  }

  onFormSubmit(): void {
    this.recipientService.signUp(this.newRecipient).subscribe(response => {
      console.log(response)
    });
  }

}
