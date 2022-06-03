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
import { SelectAnimalsItemComponent } from './search-bar-container/select-animals/select-animals-item/select-animals-item.component';
import { SearchBarCitySelectorComponent } from './search-bar-container/search-bar/search-bar-city-selector/search-bar-city-selector.component';
import {SearchBarAnimalSelectorComponent} from "./search-bar-container/search-bar/search-bar-animal-selector/search-bar-animal-selector.component";
import { SearchBarFindButtonComponent } from './search-bar-container/search-bar/search-bar-find-button/search-bar-find-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderIconComponent,
    HeaderActionsComponent,
    SearchBarComponent,
    SearchBarContainerComponent,
    SelectAnimalsComponent,
    SelectAnimalsItemComponent,
    SearchBarAnimalSelectorComponent,
    SearchBarCitySelectorComponent,
    SearchBarFindButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
