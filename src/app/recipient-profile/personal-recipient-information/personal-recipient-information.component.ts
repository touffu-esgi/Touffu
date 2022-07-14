import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { RecipientService } from '../../services/recipient/recipient.service';
import { Router } from '@angular/router';
import { Recipient } from '../../domaine/recipient/recipient';
import { UserService } from '../../services/user/user.service';
import { Address } from '../../domaine/address/address';

@Component({
  selector: 'app-personal-recipient-information',
  templateUrl: './personal-recipient-information.component.html',
  styleUrls: ['./personal-recipient-information.component.scss']
})
export class PersonalRecipientInformationComponent implements OnInit {

  recipient?: Recipient;
  message = "";
  reportSendOk: boolean | null = null;
  address: Address = Address.newEmptyAddress();

  constructor(
    private authService: AuthService,
    private recipientService: RecipientService,
    private router: Router,
    private userService: UserService,
    ) { }

  ngOnInit(): void {
    this.getRecipient();
  }

  private getRecipient() {
    if(this.authService.user?.userType === 'recipient'){
      this.recipientService.getRecipient(this.authService.user?.userReference!).subscribe(recipient => {
        this.recipient = recipient;
        this.getAddress();
      })
    }else{
      this.router.navigate(["/"])
    }
  }

  updateInformation() {
    this.recipientService.update(this.recipient!).subscribe(response => {
      // @ts-ignore
      this.userService.update(this.recipient!.userId, this.recipient!.email).subscribe(response => {
        this.message = "Mise à jour réussie";
        this.reportSendOk = true;
      }, error => {
        if (error.message) {
          this.message = error.message;
          this.reportSendOk = false;
        }
      })
    })
  }

  private getAddress() {
    console.log(this.recipient?.address);
  }
}
