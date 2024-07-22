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
  idAgencyMenu: any;

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
    this.Id()

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
      console.log(this.sousBiens)
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
  
  Id(){
    this.agencieService.getAgencieById(this.idAgence).subscribe((data:any) => {
      this.biens=data?.biens
      this.agenceName = data?.name
      console.log(this.biens);
      
    })
  }











  navigateAndRefresh(project: any) {
    // Extract the id from the project object
    const projectId = project?.sous_biens[0]?.id;

    // Navigate to the specified route
   
    this.router.navigate(['/descriptionAgence_Immob', projectId])
      .then(() => {
        // If navigation is successful, call the refresh function
        this.refresh();
      });
  }
  refresh(): void {
    this.router.navigateByUrl("/refreshPromo", { skipLocationChange: true }).then(() => {
      console.log(decodeURI(this._location.path()));
      this.router.navigate([decodeURI(this._location.path())]);

      // Set timeout to call the refresh function again after 2 seconds

    });
  }
  getAgencyId() {
    this.agencieService.getAllAgencies().subscribe((data: any) => {
      const filteredAgencies = data.filter(agency => agency.name === this.Projet.agencyName);
      if (filteredAgencies.length > 0) {
        this.idAgencyMenu = filteredAgencies[0].id;
        console.log(this.idAgencyMenu);
        this.router.navigate(['/agency', this.idAgencyMenu]);
      }
    });
  }
  isArabic(text: string): boolean {
    const arabicCharPattern = /[\u0600-\u06FF]/;
    return arabicCharPattern.test(text);
  }

  getDirection(text: string): string {
    return this.isArabic(text) ? 'rtl' : 'ltr';
  }
}
