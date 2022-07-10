import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { RecipientService } from '../../services/recipient/recipient.service';
import { Router } from '@angular/router';
import { Recipient } from '../../domaine/recipient/recipient';

@Component({
  selector: 'app-personal-recipient-information',
  templateUrl: './personal-recipient-information.component.html',
  styleUrls: ['./personal-recipient-information.component.scss']
})
export class PersonalRecipientInformationComponent implements OnInit {

  recipient?: Recipient;

  constructor(
    private authService: AuthService,
    private recipientService: RecipientService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.getRecipient();
  }

  private getRecipient() {
    if(this.authService.user?.userType === 'recipient'){
      this.recipientService.getRecipient(this.authService.user?.userReference!).subscribe(recipient => {
        this.recipient = recipient;
        console.log(this.recipient);
      })
    }else{
      this.router.navigate(["/"])
    }
  }

  updateInformation() {
    this.recipientService.update(this.recipient!).subscribe(response => {
      console.log('ok');
    }, error => {
      console.log("capout");
    })
  }
}
