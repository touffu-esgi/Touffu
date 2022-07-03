import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProviderDescriptionPageComponent} from "./provider-description-page/provider-description-page.component";
import {SearchProviderPageComponent} from "./search-provider-page/search-provider-page.component";
import {ProviderData} from "./domaine/providerData";
import {HomeComponent} from "./homePage/home/home.component";
import {MessagePageComponent} from "./message-page/message-page.component";
import {RecipientSignUpComponent} from "./recipient-sign-up/recipient-sign-up.component";
import { ConnectionPageComponent } from './connection-page/connection-page.component';
import { ProviderProfileComponent } from './provider-profile/provider-profile.component';
import { RecipientProfileComponent } from './recipient-profile/recipient-profile.component';

const routes: Routes = [
  {path: 'description-component', component: ProviderDescriptionPageComponent, data: ProviderData},
  {path: 'search-page', component: SearchProviderPageComponent},
  {path: 'message', component: MessagePageComponent},
  {path: 'signup-recipient', component: RecipientSignUpComponent},
  {path: 'connection', component: ConnectionPageComponent},
  {path: 'provider-profile', component: ProviderProfileComponent},
  {path: 'recipient-profile', component: RecipientProfileComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
