import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConceptionClientRoutingModule } from './conception-client-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistreComponent } from './registre/registre.component';
import { ChoixComponent } from './choix/choix.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { AjouterConceptionComponent } from './Conception/ajouter-conception/ajouter-conception.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegistreComponent,
    ChoixComponent,
    AjouterConceptionComponent
  ],
  imports: [
    CommonModule,
    ConceptionClientRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule


  ]
})
export class ConceptionClientModule { }
