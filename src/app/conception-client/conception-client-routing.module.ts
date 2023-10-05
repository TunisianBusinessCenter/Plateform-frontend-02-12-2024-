import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoixComponent } from './choix/choix.component';
import { AjouterConceptionComponent } from './Conception/ajouter-conception/ajouter-conception.component';
import { LoginComponent } from './login/login.component';
import { RegistreComponent } from './registre/registre.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'registre', component:RegistreComponent},
  {path: '', component:ChoixComponent},
  {path: 'ajouterConception' , component:AjouterConceptionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConceptionClientRoutingModule { }
