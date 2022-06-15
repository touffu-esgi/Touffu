import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {Recipient} from "../domaine/recipient/recipient";
import {Address} from "../domaine/address/address";

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
    phone: "",
    surname: ""
  });

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(): void {
    console.log(this.newRecipient)
  }

}
