import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Inscription } from 'src/app/model/inscription';
import { RegistreService } from 'src/app/services/registre/registre.service';

interface Role {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})

export class RegistreComponent implements OnInit {

  
  inscription:Inscription;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  
  roles: Role[] = [
    { value: 'TUNISIE', viewValue: 'TUNISIE' },
    { value: 'ALGERIE', viewValue: 'ALGERIE' },
    { value: 'MAROC', viewValue: 'MAROC' },
    { value: 'LIBYA', viewValue: 'LIBYA' },
    { value: 'MAURITANIE', viewValue: 'MAURITANIE' }
  ];

  constructor(private registreService:RegistreService) { 
    this.inscription = new Inscription
  }

  getData() {

  }

  ngOnInit(): void {
  }

onSubmit() {
  this.registreService.DemandeIncr(this.inscription).subscribe(() => {
    
  });
  setTimeout(() => {
    this.getData();
  }, 500);
}


}
