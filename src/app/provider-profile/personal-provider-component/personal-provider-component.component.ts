import { Component, OnInit } from '@angular/core';
import { ProviderData } from '../../domaine/providerData';
import { ProviderService } from '../../services/provider/provider.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-personal-provider-component',
  templateUrl: './personal-provider-component.component.html',
  styleUrls: ['./personal-provider-component.component.scss']
})
export class PersonalProviderComponentComponent implements OnInit {
  reportSendOk: boolean | null = null;
  message: string = '';
  provider: ProviderData = new ProviderData({
    address: '',
    base_tariff: 0,
    email: '',
    id: '',
    name: '',
    password: '',
    phone: '',
    profile_desc: '',
    profile_title: '',
    radius: 0,
    surname: ''
  })

  constructor(private providerService: ProviderService, private authService: AuthService) { }

  ngOnInit(): void {
    this.providerService.getOneProviderByUrl(this.authService.user?.userReference!).subscribe(provider => {
      console.log(provider);
      this.provider = provider;
    })
  }

  updateInformation() {

  }
}
