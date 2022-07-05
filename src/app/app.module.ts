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
import { ProviderDescriptionCardDetailsPriceComponent } from './provider-description-page/provider-description-card-details-container/provider-description-card-details-price/provider-description-card-details-price.component';
import { ProviderDescriptionCardDetailsContactComponent } from './provider-description-page/provider-description-card-details-container/provider-description-card-details-contact/provider-description-card-details-contact.component';
import { ProviderDescriptionCardAboutContainerComponent } from './provider-description-page/provider-description-card-about-container/provider-description-card-about-container.component';
import { ProviderDescriptionCardAboutTitleComponent } from './provider-description-page/provider-description-card-about-container/provider-description-card-about-title/provider-description-card-about-title.component';
import { ProviderDescriptionCardAboutDescriptionComponent } from './provider-description-page/provider-description-card-about-container/provider-description-card-about-description/provider-description-card-about-description.component';
import { ProviderDescriptionRecommendationsContainerComponent } from './provider-description-page/provider-description-recommendations-container/provider-description-recommendations-container.component';
import { ProviderDescriptionRecommendationsTitleComponent } from './provider-description-page/provider-description-recommendations-container/provider-description-recommendations-title/provider-description-recommendations-title.component';
import { ProviderDescriptionRecommendationsCardComponent } from './provider-description-page/provider-description-recommendations-container/provider-description-recommendations-card/provider-description-recommendations-card.component';
import { ProviderDescriptionRecommendationsCardAuthorContainerComponent } from './provider-description-page/provider-description-recommendations-container/provider-description-recommendations-card/provider-description-recommendations-card-author-container/provider-description-recommendations-card-author-container.component';
import { ProviderDescriptionRecommendationsCardContentComponent } from './provider-description-page/provider-description-recommendations-container/provider-description-recommendations-card/provider-description-recommendations-card-content/provider-description-recommendations-card-content.component';
import { ProviderDescriptionRecommendationsCardAuthorNameComponent } from './provider-description-page/provider-description-recommendations-container/provider-description-recommendations-card/provider-description-recommendations-card-author-container/provider-description-recommendations-card-author-name/provider-description-recommendations-card-author-name.component';
import { ProviderDescriptionRecommendationsCardAuthorImageComponent } from './provider-description-page/provider-description-recommendations-container/provider-description-recommendations-card/provider-description-recommendations-card-author-container/provider-description-recommendations-card-author-image/provider-description-recommendations-card-author-image.component';
import { MessagePageComponent } from './message-page/message-page.component';
import { ConversationsListComponent } from './message-page/conversations-list/conversations-list.component';
import { ConversationCardComponent } from './message-page/conversations-list/conversation-card/conversation-card.component';
import { ConversationComponent } from './message-page/conversation/conversation.component';
import { MessageComponent } from './message-page/conversation/message/message.component';
import { MessageInputComponent } from './message-page/conversation/message-input/message-input.component';
import { SendMessageButtonComponent } from './message-page/conversation/send-message-button/send-message-button.component';
import {HttpClientModule} from "@angular/common/http";
import {ProviderService} from "./services/provider/provider.service";
import {FindServiceProviderComponent} from "./homePage/image-and-text-home/find-service-provider.component";
import {DescriptifIndexComponent} from "./homePage/descriptif-home/descriptif-index.component";
import {HomeComponent} from "./homePage/home/home.component";
import { AgreementPageComponent } from './agreement-page/agreement-page.component';
import { NameAndStatusComponent } from './agreement-page/container-name-and-status/name-and-status/name-and-status.component';
import { ContainerNameAndStatusComponent } from './agreement-page/container-name-and-status/container-name-and-status.component';
import { SelectRecurencyComponent } from './agreement-page/select-recurency/select-recurency.component';
import { StartDateComponent } from './agreement-page/start-date/start-date.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { ConnectionPageComponent } from './connection-page/connection-page.component';
import { ListAgreementComponent } from './list-agreement/list-agreement.component';
import { AgreementDetailComponent } from './agreement-detail/agreement-detail.component';
import { AgreementUpdatePageComponent } from './agreement-update-page/agreement-update-page.component';
import { ListAnimalPageComponent } from './list-animal-page/list-animal-page.component';
import { AnimalCardComponent } from './list-animal-page/animal-card/animal-card.component';
import { AddAnimalPageComponent } from './add-animal-page/add-animal-page.component';





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
    ProviderDescriptionCardDetailsPriceComponent,
    ProviderDescriptionCardDetailsContactComponent,
    ProviderDescriptionCardAboutContainerComponent,
    ProviderDescriptionCardAboutTitleComponent,
    ProviderDescriptionCardAboutDescriptionComponent,
    ProviderDescriptionRecommendationsContainerComponent,
    ProviderDescriptionRecommendationsTitleComponent,
    ProviderDescriptionRecommendationsCardComponent,
    ProviderDescriptionRecommendationsCardAuthorContainerComponent,
    ProviderDescriptionRecommendationsCardContentComponent,
    ProviderDescriptionRecommendationsCardAuthorNameComponent,
    ProviderDescriptionRecommendationsCardAuthorImageComponent,
    MessagePageComponent,
    ConversationsListComponent,
    ConversationCardComponent,
    ConversationComponent,
    MessageComponent,
    MessageInputComponent,
    SendMessageButtonComponent,
    HomeComponent,
    DescriptifIndexComponent,
    FindServiceProviderComponent,
    ConnectionPageComponent,
    ListAnimalPageComponent,
    AnimalCardComponent,
    AddAnimalPageComponent,
    AgreementPageComponent,
    NameAndStatusComponent,
    ContainerNameAndStatusComponent,
    SelectRecurencyComponent,
    StartDateComponent,
    ListAgreementComponent,
    AgreementDetailComponent,
    AgreementUpdatePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCyUVFfH-E8Hy3R60mIpzslNkEDuUlaV9s"
    }),
  ],
  providers: [ProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
