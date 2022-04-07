import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './homePage/home/home.component';
import { HeaderComponent } from './header/header.component';
import { FindServiceProviderComponent } from './homePage/image-and-text-home/find-service-provider.component';
import { FindProviderSelectorComponent } from './homePage/provider-selector/find-provider-selector.component';
import { DescriptifIndexComponent } from './homePage/descriptif-home/descriptif-index.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule, Routes} from "@angular/router";
import { MainPageComponent } from './searchPage/main-page/main-page.component';
import { CardProviderComponent } from './searchPage/card-provider/card-provider.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: MainPageComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FindServiceProviderComponent,
    FindProviderSelectorComponent,
    DescriptifIndexComponent,
    FooterComponent,
    MainPageComponent,
    CardProviderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
