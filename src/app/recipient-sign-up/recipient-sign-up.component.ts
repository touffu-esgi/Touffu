import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {Recipient} from "../domaine/recipient/recipient";
import {Address} from "../domaine/address/address";
import {RecipientService} from "../services/recipient/recipient.service";
import {AddressService} from "../services/address/address.service";
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user/user.service';
import {User} from "../domaine/user/user";
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipient-sign-up',
  templateUrl: './recipient-sign-up.component.html',
  styleUrls: ['./recipient-sign-up.component.scss']
})
export class RecipientSignUpComponent implements OnInit {

  public newRecipient: Recipient = new Recipient({
    id: "",
    address: new Address({addr1: "", city: "", country: "", id: "", zipcode: ""}),
    email: "",
    name: "",
    password: "",
    phoneNumber: "",
    surname: ""
  });
  formData: FormData = new FormData();


  constructor(
    private recipientService: RecipientService,
    private addressService: AddressService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onFormSubmit(): void {
    this.addressService.addAddress(this.newRecipient.address!).subscribe(addressUrl => {
      this.newRecipient.address!.id = addressUrl.url.split("/").pop()!;
      this.recipientService.signUp(this.newRecipient).subscribe(recipient => {
        const userReference = recipient.url.split("/").pop()!
        this.userService.addUser(new User(
          '',
          this.newRecipient.email,
          userReference,
          'recipient',
          this.newRecipient.password,
          "",
          "active"
        )).subscribe(user => {
          this.router.navigate(['/connection'])
        })
      })
    })
  }


}
