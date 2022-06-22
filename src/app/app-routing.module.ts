import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProviderDescriptionPageComponent} from "./provider-description-page/provider-description-page.component";
import {SearchProviderPageComponent} from "./search-provider-page/search-provider-page.component";
import {ProviderData} from "./domaine/providerData";
import {HomeComponent} from "./homePage/home/home.component";
import {MessagePageComponent} from "./message-page/message-page.component";
import { ConnectionPageComponent } from './connection-page/connection-page.component';
import { ListAnimalPageComponent } from './list-animal-page/list-animal-page.component';
import { AddAnimalPageComponent } from './add-animal-page/add-animal-page.component';
import { AuthGuard } from './auth-guard';

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
  {path: '', component: HomeComponent},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
