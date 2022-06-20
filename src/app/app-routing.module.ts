import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProviderDescriptionPageComponent} from "./provider-description-page/provider-description-page.component";
import {SearchProviderPageComponent} from "./search-provider-page/search-provider-page.component";
import {ProviderData} from "./domaine/providerData";
import {HomeComponent} from "./homePage/home/home.component";
import {MessagePageComponent} from "./message-page/message-page.component";
import { AgreementPageComponent } from './agreement-page/agreement-page.component';

const routes: Routes = [
  {path: 'description-component', component: ProviderDescriptionPageComponent, data: ProviderData},
  {path: 'search-page', component: SearchProviderPageComponent},
  {path: 'message', component: MessagePageComponent},
  {path: '', component: AgreementPageComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
