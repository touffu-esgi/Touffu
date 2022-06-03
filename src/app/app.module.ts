import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderIconComponent } from './header/header-icon/header-icon.component';
import { HeaderActionsComponent } from './header/header-actions/header-actions.component';
import { SearchBarComponent } from './search-bar-container/search-bar/search-bar.component';
import { SearchBarContainerComponent } from './search-bar-container/search-bar-container.component';
import { SelectAnimalsComponent } from './search-bar-container/select-animals/select-animals.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderIconComponent,
    HeaderActionsComponent,
    SearchBarComponent,
    SearchBarContainerComponent,
    SelectAnimalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
