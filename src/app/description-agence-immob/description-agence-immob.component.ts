import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ProjetsService } from '../services/projets/projets.service';
import {Location} from '@angular/common';
import { AgenceImmobilieresService } from '../services/agence-immob/agence-immobilieres.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../services/contact/contact.service';
import { PrimeNGConfig } from 'primeng-lts/api';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedAgenceImmobilierService } from '../services/shared-agence-immobilier.service';
import { AgenciesService } from '../services/agencies/agencies.service';


@Component({
  selector: 'app-description-agence-immob',
  templateUrl: './description-agence-immob.component.html',
  styleUrls: ['./description-agence-immob.component.css'],
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})
export class DescriptionAgenceImmobComponent implements OnInit {

  public idProjet:any
  public Projet:any
  public idsousBiens:any
  public sousBiens:any
  FormData: FormGroup;
  closeResult: string;
  biens: any;
  agenceName: any;

  constructor(private biensImoobService:AgenceImmobilieresService,
    private agencieService:AgenciesService,
    private activatedRoute: ActivatedRoute,
    private _location:Location,
    private router:Router,
    private builder: FormBuilder,
    private contact:ContactService,
    private sharedService:SharedAgenceImmobilierService,
    private primengConfig: PrimeNGConfig,
    private modalService: NgbModal) { 
    }
    
    openVerticallyCentered(content) {
      this.modalService.open(content, { centered: true });
    }
 
  
    idAgence: any;


  ngOnInit(): void {
    this.idAgence = this.sharedService.getIdAgency();
    this.getAgency()

    this.primengConfig.ripple = true;

    this.FormData = this.builder.group({
      Nom: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      description: new FormControl('', [Validators.required]),
    });
   
    this.idsousBiens= this.activatedRoute.snapshot.paramMap.get('id')
    
    this.biensImoobService.getSousBiensById(this.idsousBiens).subscribe(data => {
      this.sousBiens = data;
      console.log(this.sousBiens.imagesList[0])
    });
    
  ///methode1:
  // this.router.events.subscribe((evt) => {
  //   if (!(evt instanceof NavigationEnd)) {
  //       return;
  //   }
  //    window.scrollTo({ top: 250, behavior: 'auto' }); 
  
  //    });
//methode2:
  // const element = document.getElementById("box");
  // element.scrollIntoView({ block: "start", behavior: "auto" });
  }
  


 

  onSubmit(FormData) {
    console.log(FormData)
    this.contact.PostMessage(FormData)
      .subscribe(response => {
        location.href = 'https://mailthis.to/confirm'
        console.log(response)
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }

  backClicked() {
    this._location.back();
  }
  
  getAgency(){
    this.agencieService.getAgencieById(this.idAgence).subscribe((data:any) => {
      this.biens=data?.biens
      this.agenceName = data?.name
      console.log(this.biens);
      
    })
  }
}
