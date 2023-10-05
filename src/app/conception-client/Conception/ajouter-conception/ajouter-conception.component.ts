import { Component, OnInit } from '@angular/core';
import { Agencies } from 'src/app/model/Agencies';
import { AgenceImmobilieresService } from 'src/app/services/agence-immob/agence-immobilieres.service';

interface Role {
  value: string;
  viewValue: string;
}
interface Construction {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-ajouter-conception',
  templateUrl: './ajouter-conception.component.html',
  styleUrls: ['./ajouter-conception.component.css']
})
export class AjouterConceptionComponent implements OnInit {

  public agencieData: Agencies;
 
  roles: Role[] = [
    { value: 'promoteur-immobilieres', viewValue: 'promoteur-immobilieres' },
    { value: 'materiaux-construction', viewValue: 'materiaux-construction' },
    { value: 'agence-immobilieres', viewValue: 'agence-immobilieres' },
    { value: 'agence-service', viewValue: 'agence-service' },
    { value: 'meilleurs-biens', viewValue: 'meilleurs-biens' },
  ];
  constructions: Construction[] = [
    { value: 'equipement', viewValue: 'equipement' },
    { value: 'automatisme', viewValue: 'automatisme' },
    { value: 'chauffage', viewValue: 'chauffage' },
    { value: 'energie', viewValue: 'energie' },
    { value: 'meuble', viewValue: 'meuble' },
    { value: 'protection', viewValue: 'protection' },
    { value: 'menuiserie', viewValue: 'menuiserie' },
    { value: 'decoration', viewValue: 'decoration' }
  ];

  
  constructor(private agenceImmobServices : AgenceImmobilieresService) { 
    this.agencieData = new Agencies;

  }

  ngOnInit(): void {
    // this.agenceImmobServices.getAllAgencies().subscribe((data:any)=>{
    //   this.agencieData=data
    // })
  }

}
