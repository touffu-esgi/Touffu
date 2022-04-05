import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './homePage/index/index.component';
import { HeaderComponent } from './header/header.component';
import { FindServiceProviderComponent } from './homePage/image-and-text-home/find-service-provider.component';
import { FindProviderSelectorComponent } from './homePage/provider-selector/find-provider-selector.component';
import { DescriptifIndexComponent } from './homePage/descriptif-index/descriptif-index.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FindServiceProviderComponent,
    FindProviderSelectorComponent,
    DescriptifIndexComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
