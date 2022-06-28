import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProviderDescriptionPageComponent} from "./provider-description-page/provider-description-page.component";
import {SearchProviderPageComponent} from "./search-provider-page/search-provider-page.component";
import {ProviderData} from "./domaine/providerData";
import {HomeComponent} from "./homePage/home/home.component";
import {MessagePageComponent} from "./message-page/message-page.component";
import { AgreementPageComponent } from './agreement-page/agreement-page.component';
import { ConnectionPageComponent } from './connection-page/connection-page.component';
import { ListAgreementComponent } from './list-agreement/list-agreement.component';
import { AgreementDetailComponent } from './agreement-detail/agreement-detail.component';
import { AgreementUpdatePageComponent } from './agreement-update-page/agreement-update-page.component';

const routes: Routes = [
  {path: 'description-component', component: ProviderDescriptionPageComponent, data: ProviderData},
  {path: 'search-page', component: SearchProviderPageComponent},
  {path: 'message', component: MessagePageComponent},
  {path: 'connection', component: ConnectionPageComponent},
  {path: 'agreement', component: AgreementPageComponent},
  {path: 'list-agreement', component: ListAgreementComponent},
  {path: 'agreement-detail', component: AgreementDetailComponent},
  {path: 'agreement-update', component: AgreementUpdatePageComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
