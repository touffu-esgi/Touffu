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
import {CardProviderComponent} from "./search-provider-page/card-provider/card-provider.component";
import { ProviderDescriptionComponent } from './search-provider-page/card-provider/provider-description/provider-description.component';
import { ProviderPriceComponent } from './search-provider-page/card-provider/provider-price/provider-price.component';
import { ProviderNameAndPlacementComponent } from './search-provider-page/card-provider/provider-container-image/provider-name-and-placement/provider-name-and-placement.component';
import { ProviderImageComponent } from './search-provider-page/card-provider/provider-container-image/provider-image/provider-image.component';
import { ProviderContainerImageComponent } from './search-provider-page/card-provider/provider-container-image/provider-container-image.component';
import {FooterComponent} from "./footer/footer.component";
import { FooterAboutComponent } from './footer/footer-about/footer-about.component';
import { FooterFollowUsComponent } from './footer/footer-follow-us/footer-follow-us.component';
import { SearchProviderPageComponent } from './search-provider-page/search-provider-page.component';
import { ProviderDescriptionPageComponent } from './provider-description-page/provider-description-page.component';
import { ProviderDescriptionTitleComponent } from './provider-description-page/provider-description-title-container/provider-description-title/provider-description-title.component';
import { ProviderDescriptionTitleContainerComponent } from './provider-description-page/provider-description-title-container/provider-description-title-container.component';
import { ProviderDescriptionPlacementContainerComponent } from './provider-description-page/provider-description-title-container/provider-description-placement-container/provider-description-placement-container.component';
import { ProviderDescriptionCardDetailsContainerComponent } from './provider-description-page/provider-description-card-details-container/provider-description-card-details-container.component';
import { ProviderDescriptionCardDetailsImageComponent } from './provider-description-page/provider-description-card-details-container/provider-description-card-details-image/provider-description-card-details-image.component';
import { ProviderDescriptionCardDetailsGradesComponent } from './provider-description-page/provider-description-card-details-container/provider-description-card-details-grades/provider-description-card-details-grades.component';

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
    SearchBarFindButtonComponent,
    CardProviderComponent,
    ProviderDescriptionComponent,
    ProviderPriceComponent,
    ProviderNameAndPlacementComponent,
    ProviderImageComponent,
    ProviderContainerImageComponent,
    FooterComponent,
    FooterAboutComponent,
    FooterFollowUsComponent,
    SearchProviderPageComponent,
    ProviderDescriptionPageComponent,
    ProviderDescriptionTitleComponent,
    ProviderDescriptionTitleContainerComponent,
    ProviderDescriptionPlacementContainerComponent,
    ProviderDescriptionCardDetailsContainerComponent,
    ProviderDescriptionCardDetailsImageComponent,
    ProviderDescriptionCardDetailsGradesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
