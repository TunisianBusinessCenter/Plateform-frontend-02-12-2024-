import { NgModule } from '@angular/core';
import { ExtraOptions, NoPreloading, Router, RouterModule, Routes } from '@angular/router';
import { AgencyComponent } from './agency/agency.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { VillaDetailsComponent } from './villa-details/villa-details.component';
import { VillaExempleComponent } from './villa-exemple/villa-exemple.component';
import { DetailsMateriauxComponent } from './details-materiaux/details-materiaux.component';
import { AgencesDeServicesComponent } from './agences-de-services/agences-de-services.component';
import { AgencesImmobDetailsComponent } from './agences-immob-details/agences-immob-details.component';
import { DescriptionDetailsComponent } from './description-details/description-details.component';
import { DescriptionAgenceImmobComponent } from './description-agence-immob/description-agence-immob.component';
import { DevisProduitComponent } from './devis-produit/devis-produit.component';
import { DetailsServicesComponent } from './details-services/details-services.component';
import { DescriptionServiceComponent } from './description-service/description-service.component';
import { DevisServicesComponent } from './devis-services/devis-services.component';
import { AgenceImmobSousseComponent } from './agence-immob/agence-immob-sousse/agence-immob-sousse.component';
import { AgenceImmobTunisComponent } from './agence-immob/agence-immob-tunis/agence-immob-tunis.component';
import { AgenceImmobMonastirComponent } from './agence-immob/agence-immob-monastir/agence-immob-monastir.component';
import { AgenceImmobMahdiaComponent } from './agence-immob/agence-immob-mahdia/agence-immob-mahdia.component';
import { AgenceImmobSfaxComponent } from './agence-immob/agence-immob-sfax/agence-immob-sfax.component';
import { AgenceImmobNabeulComponent } from './agence-immob/agence-immob-nabeul/agence-immob-nabeul.component';
import { AgenceImmobBizerteComponent } from './agence-immob/agence-immob-bizerte/agence-immob-bizerte.component';
import { PromoteursTunisComponent } from './promoteurs-immob/promoteurs-tunis/promoteurs-tunis.component';
import { PromoteursSousseComponent } from './promoteurs-immob/promoteurs-sousse/promoteurs-sousse.component';
import { PromoteursMahdiaComponent } from './promoteurs-immob/promoteurs-mahdia/promoteurs-mahdia.component';
import { PromoteursSfaxComponent } from './promoteurs-immob/promoteurs-sfax/promoteurs-sfax.component';
import { PromoteursNabeulComponent } from './promoteurs-immob/promoteurs-nabeul/promoteurs-nabeul.component';
import { PromoteursBizerteComponent } from './promoteurs-immob/promoteurs-bizerte/promoteurs-bizerte.component';
import { PromoteursTabarkaComponent } from './promoteurs-immob/promoteurs-tabarka/promoteurs-tabarka.component';
import { PromoteursMonastirComponent } from './promoteurs-immob/promoteurs-monastir/promoteurs-monastir.component';
import { EquipementComponent } from './materiaux/equipement/equipement.component';
import { AutomatismeComponent } from './materiaux/automatisme/automatisme.component';
import { ChauffageComponent } from './materiaux/chauffage/chauffage.component';
import { EnergieComponent } from './materiaux/energie/energie.component';
import { MeubleComponent } from './materiaux/meuble/meuble.component';
import { ProtectionComponent } from './materiaux/protection/protection.component';
import { MenuiserieComponent } from './materiaux/menuiserie/menuiserie.component';
import { PeintureComponent } from './materiaux/peinture/peinture.component';
import { MeilleursBienTunisComponent } from './Meilleurs-Biens/meilleurs-bien-tunis/meilleurs-bien-tunis.component';
import { MeilleursBienSousseComponent } from './Meilleurs-Biens/meilleurs-bien-sousse/meilleurs-bien-sousse.component';
import { MeilleursBienMonastirComponent } from './Meilleurs-Biens/meilleurs-bien-monastir/meilleurs-bien-monastir.component';
import { MeilleursBienMahdiaComponent } from './Meilleurs-Biens/meilleurs-bien-mahdia/meilleurs-bien-mahdia.component';
import { MeilleursBienBizerteComponent } from './Meilleurs-Biens/meilleurs-bien-bizerte/meilleurs-bien-bizerte.component';
import { MeilleursBienSfaxComponent } from './Meilleurs-Biens/meilleurs-bien-sfax/meilleurs-bien-sfax.component';
import { MeilleursBienNabeulComponent } from './Meilleurs-Biens/meilleurs-bien-nabeul/meilleurs-bien-nabeul.component';
import { MeilleursBiensAgencyComponent } from './meilleurs-biens-agency/meilleurs-biens-agency.component';
import { AgencesImmobDetailsPlusComponent } from './agences-immob-details-plus/agences-immob-details-plus.component';
import { LoginComponent } from './conception-client/login/login.component';
import { RegistreComponent } from './conception-client/registre/registre.component';
import { ChoixComponent } from './conception-client/choix/choix.component';
import { HomeAlgerieComponent } from './Algerie/home-algerie/home-algerie.component';
import { HomeMauritanieComponent } from './mauritanie/home-mauritanie/home-mauritanie.component';
import { HomeLybiaComponent } from './lybia/home-lybia/home-lybia.component';
import { HomeMarocComponent } from './maroc/home-maroc/home-maroc.component';
import { PromoteuresDjerbaComponent } from './promoteurs-immob/promoteures-djerba/promoteures-djerba.component';
import { GardVisitorService } from './services/GardVisitor/gard-visitor.service';
import { TelechargementComponent } from './telechargement/telechargement.component';
import { ContactComponent } from './contact/contact.component';
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


const appRoutes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'details/:id', component: DetailsComponent , canActivate: [GardVisitorService]},
  { path: 'agency/:id', component: AgencyComponent },
  { path: 'coffeeAgency/:id', component: CoffeeAgencyComponent },
  { path: 'coffee-details/:id', component: CoffeeDetailsComponent },
  { path: 'descriptionCoffee/:id1/:id', component: DescriptionCoffeeComponent },

  { path: 'coffeeListTunis', component: CoffeeListTunisComponent },
  { path: 'coffeeListSousse', component: CoffeeListSousseComponent },
  { path: 'coffeeListMonastir', component: CoffeeListMonastirComponent },
  { path: 'coffeeListMahdia', component: CoffeeListMahdiaComponent },
  { path: 'coffeeListSfax', component: CoffeeListSfaxComponent },
  { path: 'coffeeListNabeul', component: CoffeeListNabeulComponent },
  { path: 'coffeeListBizerte', component: CoffeeListBizerteComponent },
  { path: 'villa-details/:id', component: VillaDetailsComponent },
  { path: 'villa-exemple/:id', component: VillaExempleComponent },
  { path: 'details-materiaux/:id', component: DetailsMateriauxComponent },
  { path: 'agences-de-services', component: AgencesDeServicesComponent },
  { path: 'agences-immobiliere-details/:id', component: AgencesImmobDetailsComponent },
  { path: 'agences-immob-details-plus/:id' , component: AgencesImmobDetailsPlusComponent}, 
  { path: 'descriptionDetails/:id1/:id', component: DescriptionDetailsComponent },
  { path: 'descriptionAgence_Immob/:id', component: DescriptionAgenceImmobComponent },
  { path: 'devisProduit', component: DevisProduitComponent },
  { path: 'devisService', component: DevisServicesComponent },
  { path: 'details-service/:id', component: DetailsServicesComponent },
  { path: 'descriptionService/:id', component: DescriptionServiceComponent },
  {path:'contact',component:ContactComponent},
{ path: 'agence-immob-sousse', component: AgenceImmobSousseComponent },
 { path: 'agence-immob-tunis', component: AgenceImmobTunisComponent },
{ path: 'agence-immob-monastir', component: AgenceImmobMonastirComponent },
 { path: 'agence-immob-mahdia', component: AgenceImmobMahdiaComponent },
 { path: 'agence-immob-sfax', component: AgenceImmobSfaxComponent },
 { path: 'agence-immob-nabeul', component: AgenceImmobNabeulComponent },
 { path: 'agence-immob-bizerte', component: AgenceImmobBizerteComponent },

 { path: 'promoteurs-tunis', component: PromoteursTunisComponent },
 { path: 'promoteurs-sousse', component: PromoteursSousseComponent },
 { path: 'promoteurs-monastir', component: PromoteursMonastirComponent },
 { path: 'promoteurs-mahdia', component: PromoteursMahdiaComponent },
 { path: 'promoteurs-sfax', component: PromoteursSfaxComponent },
 { path: 'promoteurs-nabeul', component: PromoteursNabeulComponent },
 { path: 'promoteurs-bizerte', component: PromoteursBizerteComponent },
 { path: 'promoteurs-tabarka', component: PromoteursTabarkaComponent },
 { path: 'promoteurs-djerba', component: PromoteuresDjerbaComponent },


 { path: 'equipement', component: EquipementComponent },
 { path: 'automatisme', component: AutomatismeComponent },
 { path: 'chauffage', component: ChauffageComponent },
 { path: 'energie', component: EnergieComponent },
 { path: 'meuble', component: MeubleComponent },
 { path: 'protection', component: ProtectionComponent },
{ path: 'menuiserie', component: MenuiserieComponent },
 { path: 'peinture', component: PeintureComponent },

 
{ path: 'meilleurs-bien-tunis', component: MeilleursBienTunisComponent },
{ path: 'meilleurs-bien-sousse', component: MeilleursBienSousseComponent },
{ path: 'meilleurs-bien-monastir', component: MeilleursBienMonastirComponent },
{ path: 'meilleurs-bien-mahdia', component: MeilleursBienMahdiaComponent },
{ path: 'meilleurs-bien-sfax', component: MeilleursBienSfaxComponent },
{ path: 'meilleurs-bien-nabeul', component: MeilleursBienNabeulComponent },
{ path: 'meilleurs-bien-bizerte', component: MeilleursBienBizerteComponent },
  
  { path: 'meilleurs-biens-agency/:id', component:MeilleursBiensAgencyComponent},
  { path: 'conception', 
        loadChildren:() =>import('./conception-client/conception-client.module').then(x=>x.ConceptionClientModule)},
  {path: 'conception/login', component:LoginComponent},
  {path: 'conception/registre', component:RegistreComponent},
  {path: '', component:ChoixComponent},
  {path:'home-algerie', component:HomeAlgerieComponent},
  {path:'home-maroc', component:HomeMarocComponent},
  {path:'home-lybia', component:HomeLybiaComponent},
  {path:'home-mauritanie', component:HomeMauritanieComponent},
 {path: 'telechargement', component:TelechargementComponent},
 {path:"refresh",component:AgencesImmobDetailsPlusComponent},
 {path:"refreshPromo",component:DetailsComponent},
 {path:"refreshMat",component:DetailsMateriauxComponent},
 {path:"refreshcafe",component:CoffeeDetailsComponent}


];

const routerOPtions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'disabled',
  enableTracing: true
}

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, routerOPtions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
