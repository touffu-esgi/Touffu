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
import { AddAnimalPageComponent } from './add-animal-page/add-animal-page.component';
import { AuthGuard } from './auth-guard';
import {ReportProviderComponent} from "./report-provider/report-provider.component";
import { ProviderProfileComponent } from './provider-profile/provider-profile.component';
import { ProviderAvailabilityPageComponent } from './provider-availability-page/provider-availability-page.component';
import { RecipientProfileComponent } from './recipient-profile/recipient-profile.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { HealthCheckErrorComponent } from './health-check-error/health-check-error.component';

const routes: Routes = [
  {
    path: 'description-component',
    component: ProviderDescriptionPageComponent,
    data: ProviderData
  },
  {
    path: 'search-page',
    component: SearchProviderPageComponent
  },
  {
    path: 'message',
    component: MessagePageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'connection',
    component: ConnectionPageComponent
  },
  {
    path: 'add-animal',
    component: AddAnimalPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'agreement',
    component: AgreementPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'list-agreement',
    component: ListAgreementComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'agreement-detail',
    component: AgreementDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'agreement-update',
    component: AgreementUpdatePageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'provider-detail',
    component: ProviderDetailPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'signup-recipient',
    component: RecipientSignUpComponent
  },
  {
    path: 'report',
    component: ReportProviderComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'provider-profile',
    component: ProviderProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'recipient-profile',
    component: RecipientProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'bill-payment',
    component: PaymentPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'availabilities',
    component: ProviderAvailabilityPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: HomeComponent
  },
  {
    path: 'isNotAlive',
    component: HealthCheckErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
