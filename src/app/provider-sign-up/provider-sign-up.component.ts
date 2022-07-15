import { Component, OnInit } from '@angular/core';
import { ProviderData } from '../domaine/providerData';
import { Address } from '../domaine/address/address';
import { AddressService } from '../services/address/address.service';
import { ProviderService } from '../services/provider/provider.service';
import { UserService } from '../services/user/user.service';
import { User } from '../domaine/user/user';

@Component({
  selector: 'app-provider-sign-up',
  templateUrl: './provider-sign-up.component.html',
  styleUrls: ['./provider-sign-up.component.scss']
})
export class ProviderSignUpComponent implements OnInit {
  newProvider: ProviderData = ProviderData.newEmptyProvider()
  newAddress: Address = new Address({
    addr1: '',
    addr2: '',
    city: '',
    country: '',
    id: '',
    zipcode: ''
  });
  formData: FormData = new FormData();

  constructor(private addressService: AddressService,
              private providerService: ProviderService,
              private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  onFormSubmit() {
    this.addressService.addAddress(this.newAddress).subscribe(addressUrl => {
      this.newProvider.address = addressUrl.url.split("/").pop()!;
      this.userService.uploadProfileImage(this.formData).subscribe(imagePath => {
        this.newProvider.profile_pic = imagePath.url;
        this.providerService.signUp(this.newProvider).subscribe(provider => {
          const userReference = provider.url.split("/").pop()!
          this.userService.addUser(new User(
            '',
            this.newProvider.email,
            userReference,
            'provider',
            this.newProvider.password,
            imagePath.url
          )).subscribe(user => {
            console.log(user);
          })
        });
      });

    })
  }

  onFileSelected(event: Event) {
    // @ts-ignore
    const file: File = event!.target!.files[0];
    if (file) {
      this.formData.append("file", file);
    }
  }
}
