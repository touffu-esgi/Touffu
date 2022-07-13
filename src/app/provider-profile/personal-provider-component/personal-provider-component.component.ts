import { Component, OnInit } from '@angular/core';
import { ProviderData } from '../../domaine/providerData';
import { ProviderService } from '../../services/provider/provider.service';
import { AuthService } from '../../services/auth/auth.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-personal-provider-component',
  templateUrl: './personal-provider-component.component.html',
  styleUrls: ['./personal-provider-component.component.scss']
})
export class PersonalProviderComponentComponent implements OnInit {
  reportSendOk: boolean | null = null;
  message: string = '';
  provider: ProviderData = ProviderData.newEmptyProvider()

  constructor(private providerService: ProviderService, private userService: UserService, private authService: AuthService) { }

  ngOnInit(): void {
    this.providerService.getOneProviderByUrl(this.authService.user?.userReference!).subscribe(provider => {
      this.provider = provider;
    })
  }

  updateInformation() {
    this.providerService.update(this.provider).subscribe(provider => {
      this.userService.update(this.provider.userId.split('/').pop()!, this.provider.email).subscribe(user => {
        this.reportSendOk = true;
        this.message = 'Mise à jour effectuée'
      }, error => {
        this.message = 'Une erreur est survenue'
        this.reportSendOk = false;
      })
    }, error => {
      this.message = 'Une erreur est survenue'
      this.reportSendOk = false;
    })
  }
}
