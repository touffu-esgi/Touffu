import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProviderDescriptionPageComponent} from "./provider-description-page/provider-description-page.component";
import {SearchProviderPageComponent} from "./search-provider-page/search-provider-page.component";
import {ProviderData} from "./domaine/providerData";
import {HomeComponent} from "./homePage/home/home.component";
import {MessagePageComponent} from "./message-page/message-page.component";
import {RecipientSignUpComponent} from "./recipient-sign-up/recipient-sign-up.component";
import { AgreementPageComponent } from './agreement-page/agreement-page.component';
import { ConnectionPageComponent } from './connection-page/connection-page.component';
import { ListAgreementComponent } from './list-agreement/list-agreement.component';
import { AgreementDetailComponent } from './agreement-detail/agreement-detail.component';
import { AgreementUpdatePageComponent } from './agreement-update-page/agreement-update-page.component';
import { ProviderDetailPageComponent } from './provider-detail-page/provider-detail-page.component';
import { ListAnimalPageComponent } from './list-animal-page/list-animal-page.component';
import { AddAnimalPageComponent } from './add-animal-page/add-animal-page.component';
import { AuthGuard } from './auth-guard';
import {ReportProviderComponent} from "./report-provider/report-provider.component";
import { ProviderProfileComponent } from './provider-profile/provider-profile.component';
import { ProviderAvailabilityPageComponent } from './provider-availability-page/provider-availability-page.component';
import { RecipientProfileComponent } from './recipient-profile/recipient-profile.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';

const routes: Routes = [
  {
    path: 'description-component',
    component: ProviderDescriptionPageComponent,
    data: ProviderData},
  {
    path: 'search-page',
    component: SearchProviderPageComponent},
  {
    path: 'message',
    component: MessagePageComponent,
    canActivate: [AuthGuard]},
  {
    path: 'connection',
    component: ConnectionPageComponent
  },
  {
    path: 'list-animal',
    component: ListAnimalPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-animal',
    component: AddAnimalPageComponent,
    canActivate: [AuthGuard]
  },
  {path: 'agreement', component: AgreementPageComponent},
  {path: 'list-agreement', component: ListAgreementComponent},
  {path: 'agreement-detail', component: AgreementDetailComponent},
  {path: 'agreement-update', component: AgreementUpdatePageComponent},
  {path: 'provider-detail', component: ProviderDetailPageComponent},
  {path: 'signup-recipient', component: RecipientSignUpComponent},
  {path: 'report', component: ReportProviderComponent},
  {path: 'provider-profile', component: ProviderProfileComponent},
  {path: 'availabilities', component: ProviderAvailabilityPageComponent},
  {path: 'recipient-profile', component: RecipientProfileComponent},
  {path: 'bill-payment', component: PaymentPageComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
