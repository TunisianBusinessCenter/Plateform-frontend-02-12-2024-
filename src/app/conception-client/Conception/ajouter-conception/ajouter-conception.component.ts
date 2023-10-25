import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Agencies } from 'src/app/model/Agencies';
import { AgenceImmobilieresService } from 'src/app/services/agence-immob/agence-immobilieres.service';
import { Injectable } from '@angular/core';

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

@Injectable()
export class AjouterConceptionComponent {

  public agencieData: Agencies;

  logo: File[] = [];
  societe = {
    nom_societe: '',
    logo: null,
    type_societe: '',
    description: '',
    email: '',
    num_tel1: '',
    num_tel2: '',
    websiteurl: '',
    facebookurl: '',
    instagramurl: '',
    linkedinurl: '',
    twitterurl: ''
  }
  projet: File[] = [];
  projets = {
    projet1: null,
    description1: '',
    projet2: null,
    description2: '',
    projet3: null,
    description3: '',
    videourl1: '',
    videourl2: '',
    prix: '',
    surface: ''
  }

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


  constructor(private agenceImmobServices: AgenceImmobilieresService, private http: HttpClient) {
    this.agencieData = new Agencies;


  }
  onLogoSelect(event: any) {
    const file = event.target.files[0];
    this.societe.logo = file;
  }
  onselectproject1(event: any) {
    const files: File[] = event.target.files;
    this.projets.projet1 = files;
  }
  onselectproject2(event: any) {
    const files: File[] = event.target.files;
    this.projets.projet2 = files;
  }
  onselectproject3(event: any) {
    const files: File[] = event.target.files;
    this.projets.projet3 = files;
  }


  send() {
    const demandeForm = {
      id: null,
      nomSociete: this.societe.nom_societe,
      logo: null,
      typeSociete: this.societe.type_societe,
      description: this.societe.description,
      email: this.societe.email,
      numTel1: this.societe.num_tel1,
      numTel2: this.societe.num_tel2,
      websiteurl: this.societe.websiteurl,
      facebookurl: this.societe.facebookurl,
      instagramurl: this.societe.instagramurl,
      linkedinurl: this.societe.linkedinurl,
      twitterurl: this.societe.twitterurl,
      //projet1: null,
      description1: this.projets.description1,
      //projet2: null,
      description2: this.projets.description2,
      //projet3: null,
      description3: this.projets.description3,
      videourl1: this.projets.videourl1,
      videourl2: this.projets.videourl2,
      prix: this.projets.prix,
      surface: this.projets.surface
    };
  
    const requestBody = new FormData();
    requestBody.append('nouvelleDemande', JSON.stringify(demandeForm));
    requestBody.append('logo', this.societe.logo);
  
    if (this.projets.projet1 != null) {
      for (const file of this.projets.projet1) {
        requestBody.append('projet1', file);
      }
    }
  
    if (this.projets.projet2 != null) {
      for (const file of this.projets.projet2) {
        requestBody.append('projet2', file);
      }
    }
  
    if (this.projets.projet3 != null) {
      for (const file of this.projets.projet3) {
        requestBody.append('projet3', file);
      }
    }
  
    //console.log("requestBody", requestBody);
  
    const httpOptions = {
      headers: new HttpHeaders({
      })
    };

    console.log("requestbody : ", requestBody);
  
    this.http.post('http://localhost:9000/api/save-demande', requestBody, httpOptions).subscribe(
      (response) => {
        this.resetForm();
        console.log('Response from server', response);
        //const successMessage = response['message'];
        //console.log('Success message', successMessage);
      },
      (error) => {
        console.error('Error sending data', error);
      }
    );
  }
  resetForm() { 
    this.societe = {
      nom_societe: '',
      logo: null,
      type_societe: '',
      description: '',
      email: '',
      num_tel1: '',
      num_tel2: '',
      websiteurl: '',
      facebookurl: '',
      instagramurl: '',
      linkedinurl: '',
      twitterurl: ''
    };
    this.projets = {
      projet1: null,
      description1: '',
      projet2: null,
      description2: '',
      projet3: null,
      description3: '',
      videourl1: '',
      videourl2: '',
      prix: '',
      surface: ''
    };
  }
  

}






