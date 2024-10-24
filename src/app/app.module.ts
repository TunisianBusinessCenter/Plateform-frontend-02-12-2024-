import { AgenciesService } from './services/agencies/agencies.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule, Meta } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { AgencyComponent } from './agency/agency.component';
import { VillaDetailsComponent } from './villa-details/villa-details.component';
import { VillaExempleComponent } from './villa-exemple/villa-exemple.component';
import { PathLocationStrategy, LocationStrategy, CommonModule } from '@angular/common';
import { DetailsMateriauxComponent } from './details-materiaux/details-materiaux.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'primeng-lts/carousel';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarCarouselComponent } from './navbar-carousel/navbar-carousel.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTooltipModule} from '@angular/material/tooltip';


import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MatTabsModule } from '@angular/material/tabs';
import { SearchPipePipe } from './pipes/serarch-pipe/search-pipe.pipe';
import { MatMenuModule } from '@angular/material/menu';
import { MateriauxPipe } from './pipes/materiaux-pipe/materiaux.pipe';
import { GalleriaModule } from 'primeng/galleria';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CardModule, } from 'primeng/card';

import { MatButtonModule } from '@angular/material/button';

import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';




import { AgencesDeServicesComponent } from './agences-de-services/agences-de-services.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ImageModule } from 'primeng/image';
import { DropdownModule } from 'primeng/dropdown';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ListboxModule } from 'primeng/listbox';
import { AgencesImmobDetailsComponent } from './agences-immob-details/agences-immob-details.component';
import { DescriptionDetailsComponent } from './description-details/description-details.component';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import { DescriptionAgenceImmobComponent } from './description-agence-immob/description-agence-immob.component';
import { DevisProduitComponent } from './devis-produit/devis-produit.component';
import { DetailsServicesComponent } from './details-services/details-services.component';
import { DescriptionServiceComponent } from './description-service/description-service.component';
import { DevisServicesComponent } from './devis-services/devis-services.component';
 import { FacebookModule } from 'ngx-facebook';
import { AgenceImmobSousseComponent } from './agence-immob/agence-immob-sousse/agence-immob-sousse.component';
import { AgenceImmobTunisComponent } from './agence-immob/agence-immob-tunis/agence-immob-tunis.component';
import { AgenceImmobMahdiaComponent } from './agence-immob/agence-immob-mahdia/agence-immob-mahdia.component';
import { AgenceImmobMonastirComponent } from './agence-immob/agence-immob-monastir/agence-immob-monastir.component';
import { AgenceImmobSfaxComponent } from './agence-immob/agence-immob-sfax/agence-immob-sfax.component';
import { AgenceImmobNabeulComponent } from './agence-immob/agence-immob-nabeul/agence-immob-nabeul.component';
import { AgenceImmobBizerteComponent } from './agence-immob/agence-immob-bizerte/agence-immob-bizerte.component';
import { PromoteursTunisComponent } from './promoteurs-immob/promoteurs-tunis/promoteurs-tunis.component';
import { PromoteursSousseComponent } from './promoteurs-immob/promoteurs-sousse/promoteurs-sousse.component';
import { PromoteursMonastirComponent } from './promoteurs-immob/promoteurs-monastir/promoteurs-monastir.component';
import { PromoteursMahdiaComponent } from './promoteurs-immob/promoteurs-mahdia/promoteurs-mahdia.component';
import { PromoteursSfaxComponent } from './promoteurs-immob/promoteurs-sfax/promoteurs-sfax.component';
import { PromoteursNabeulComponent } from './promoteurs-immob/promoteurs-nabeul/promoteurs-nabeul.component';
import { PromoteursBizerteComponent } from './promoteurs-immob/promoteurs-bizerte/promoteurs-bizerte.component';
import { PromoteursTabarkaComponent } from './promoteurs-immob/promoteurs-tabarka/promoteurs-tabarka.component';
import { EquipementComponent } from './materiaux/equipement/equipement.component';
import { AutomatismeComponent } from './materiaux/automatisme/automatisme.component';
import { ChauffageComponent } from './materiaux/chauffage/chauffage.component';
import { EnergieComponent } from './materiaux/energie/energie.component';
import { MeubleComponent } from './materiaux/meuble/meuble.component';
import { ProtectionComponent } from './materiaux/protection/protection.component';
import { MenuiserieComponent } from './materiaux/menuiserie/menuiserie.component';
import { PeintureComponent } from './materiaux/peinture/peinture.component';
import { DialogModule } from 'primeng/dialog';
import { AgmCoreModule } from '@agm/core';
import {GMapModule} from 'primeng/gmap';
import { TabViewModule } from 'primeng/tabview';
import { MeilleursBienTunisComponent } from './Meilleurs-Biens/meilleurs-bien-tunis/meilleurs-bien-tunis.component';
import { MeilleursBienSousseComponent } from './Meilleurs-Biens/meilleurs-bien-sousse/meilleurs-bien-sousse.component';
import { MeilleursBienMonastirComponent } from './Meilleurs-Biens/meilleurs-bien-monastir/meilleurs-bien-monastir.component';
import { MeilleursBienMahdiaComponent } from './Meilleurs-Biens/meilleurs-bien-mahdia/meilleurs-bien-mahdia.component';
import { MeilleursBienSfaxComponent } from './Meilleurs-Biens/meilleurs-bien-sfax/meilleurs-bien-sfax.component';
import { MeilleursBienNabeulComponent } from './Meilleurs-Biens/meilleurs-bien-nabeul/meilleurs-bien-nabeul.component';
import { MeilleursBienBizerteComponent } from './Meilleurs-Biens/meilleurs-bien-bizerte/meilleurs-bien-bizerte.component';
import { MeilleursBiensAgencyComponent } from './meilleurs-biens-agency/meilleurs-biens-agency.component';
import { AgencesImmobDetailsPlusComponent } from './agences-immob-details-plus/agences-immob-details-plus.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NetworkInterceptor } from './interceptor/network.interceptor';
import { HomeAlgerieComponent } from './Algerie/home-algerie/home-algerie.component';
import { HomeMarocComponent } from './maroc/home-maroc/home-maroc.component';
import { HomeLybiaComponent } from './lybia/home-lybia/home-lybia.component';
import { HomeMauritanieComponent } from './mauritanie/home-mauritanie/home-mauritanie.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PromoteuresDjerbaComponent } from './promoteurs-immob/promoteures-djerba/promoteures-djerba.component';
import { TelechargementComponent } from './telechargement/telechargement.component';
import { ContactComponent } from './contact/contact.component';
import { ScrollHideDirective } from './scroll-hide.directive';
import { LineBreakPipe } from './description-details/line-break.pipe';
import { NavbarCarouselHomeComponent } from './navbar-carousel-home/navbar-carousel.component';
import { NavbarCarouselPromoComponent } from './navbar-carousel-promo/navbar-carousel.component';
import { NavbarCarouselConstComponent } from './navbar-carousel-const/navbar-carousel.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { DescriptionCoffeeComponent } from './description-coffee/description-coffee.component';
import { CoffeeAgencyComponent } from './coffee-agency/coffee-agency.component';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { CoffeeListTunisComponent } from './coffee-list/coffee-list-tunis/coffee-list-tunis.component';
import { CoffeeListSousseComponent } from './coffee-list/coffee-list-sousse/coffee-list-sousse.component';
import { CoffeeDetailsComponent } from './coffee-details/coffee-details.component';
import { CoffeeListMonastirComponent } from './coffee-list/coffee-list-monastir/coffee-list-monastir.component';
import { CoffeeListMahdiaComponent } from './coffee-list/coffee-list-mahdia/coffee-list-mahdia.component';
import { CoffeeListSfaxComponent } from './coffee-list/coffee-list-sfax/coffee-list-sfax.component';
import { CoffeeListNabeulComponent } from './coffee-list/coffee-list-nabeul/coffee-list-nabeul.component';
import { CoffeeListBizerteComponent } from './coffee-list/coffee-list-bizerte/coffee-list-bizerte.component';
import { BoldParenthesesDirective } from './description-coffee/bold-parentheses.directive';
import { HideBracedTextContentPipe } from './coffee-details/hide-braced-text-content.pipe';
import { BraceTextExtractorPipe } from './coffee-details/brace-text-extractor.pipe';
import { ImageModalComponent } from './description-agence-immob/image-modal/image-modal.component';
import { CommerceServiceAgencyComponent } from './commerce-service-agency/commerce-service-agency.component';
import { MeilleursBiensComponent } from './agence/meilleurs-biens/meilleurs-biens.component';
import { AgenceImmobComponent } from './agence/agence-immob/agence-immob.component';
import { DetailsAgenceImmobilierComponent } from './details-agence-immobilier/details-agence-immobilier.component';
import { AgenceMatComponent } from './agence/agence-mat/agence-mat.component';
import { AnnoncesImmobilierDetailsComponent } from './annonce Immobilier/annonces-immobilier-details/annonces-immobilier-details.component';
import { AnnoncesImmobilierComponent } from './annonce Immobilier/annonces-immobilier/annonces-immobilier.component';
import { PromoteurImmobiliersComponent } from './agence/promoteur-immobiliers/promoteur-immobiliers.component';






const routes: Routes = [
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    AgencyComponent,
    VillaDetailsComponent,
    VillaExempleComponent,
    DetailsMateriauxComponent,
    NavbarCarouselComponent,
    FooterComponent,
    SearchPipePipe,
    MateriauxPipe,
    AgencesDeServicesComponent,
    AgencesImmobDetailsComponent,
    DescriptionDetailsComponent,
    DescriptionAgenceImmobComponent,
    DevisProduitComponent,
    DetailsServicesComponent,
    DescriptionServiceComponent,
    DevisServicesComponent,
    AgenceImmobSousseComponent,
    AgenceImmobTunisComponent,
    AgenceImmobMahdiaComponent,
    AgenceImmobMonastirComponent,
    AgenceImmobSfaxComponent,
    AgenceImmobNabeulComponent,
    AgenceImmobBizerteComponent,
    PromoteursTunisComponent,
    PromoteursSousseComponent,
    PromoteursMonastirComponent,
    PromoteursMahdiaComponent,
    PromoteursSfaxComponent,
    PromoteursNabeulComponent,
    PromoteursBizerteComponent,
    PromoteursTabarkaComponent,
    EquipementComponent,
    AutomatismeComponent,
    ChauffageComponent,
    EnergieComponent,
    MeubleComponent,
    ProtectionComponent,
    MenuiserieComponent,
    PeintureComponent,
    MeilleursBienTunisComponent,
    MeilleursBienSousseComponent,
    MeilleursBienMonastirComponent,
    MeilleursBienMahdiaComponent,
    MeilleursBienSfaxComponent,
    MeilleursBienNabeulComponent,
    MeilleursBienBizerteComponent,
    MeilleursBiensAgencyComponent,
    AgencesImmobDetailsPlusComponent,
    HomeAlgerieComponent,
    HomeMarocComponent,
    HomeLybiaComponent,
    HomeMauritanieComponent,
    SidebarComponent,
    PromoteuresDjerbaComponent,
    TelechargementComponent,
    ContactComponent,
    ScrollHideDirective,
    LineBreakPipe,
    NavbarCarouselHomeComponent,
    NavbarCarouselPromoComponent,
    NavbarCarouselConstComponent,
    PrivacyComponent,
    DescriptionCoffeeComponent,
    CoffeeAgencyComponent,
    CoffeeListComponent,
    CoffeeListTunisComponent,
    CoffeeListSousseComponent,
    CoffeeDetailsComponent,
    CoffeeListMonastirComponent,
    CoffeeListMahdiaComponent,
    CoffeeListSfaxComponent,
    CoffeeListNabeulComponent,
    CoffeeListBizerteComponent,
    BoldParenthesesDirective,
    HideBracedTextContentPipe,
    BraceTextExtractorPipe,
    ImageModalComponent,
    CommerceServiceAgencyComponent,
    MeilleursBiensComponent,
    AgenceImmobComponent,
    DetailsAgenceImmobilierComponent,
    AgenceMatComponent,
    AnnoncesImmobilierDetailsComponent,
    AnnoncesImmobilierComponent,
    PromoteurImmobiliersComponent
 
 
  
  ],
  imports: [
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' }),
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true }),
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    ToastModule,
    ButtonModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    MatNativeDateModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    CommonModule,
    MatMenuModule,
    GalleriaModule,
    MatIconModule,
    MatCardModule,
    CardModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    ImageModule,
    DropdownModule,
    Ng2SearchPipeModule,
    MatAutocompleteModule,
    ListboxModule,
    InputTextModule,
    InputNumberModule,
    DialogModule,
    TabViewModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    GMapModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCgCa5sW2ohAjBaRW1JD6RnuDG0M5leXPk',
      libraries: ['places']
    }),

    FacebookModule.forRoot(),
      ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: environment.production,
        // Register the ServiceWorker as soon as the application is stable
        // or after 30 seconds (whichever comes first).
        registrationStrategy: 'registerWhenStable:30000'
      })
  ],
  exports: [NavbarCarouselComponent],

  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy },
  AgenciesService, Meta, 
  {provide: HTTP_INTERCEPTORS,
   useClass: NetworkInterceptor,
   multi:true
  }],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
