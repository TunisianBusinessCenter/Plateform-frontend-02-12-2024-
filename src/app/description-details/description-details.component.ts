import { Component, ElementRef, Input, OnInit, ViewChild,Renderer2,HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../services/contact/contact.service';
import { AgenciesService } from '../services/agencies/agencies.service';
import { ProduitsService } from '../services/produits/produits.service';
import { SharedAgenceImmobilierService } from '../services/shared-agence-immobilier.service';



@Component({
  selector: 'app-description-details',
  templateUrl: './description-details.component.html',
  styleUrls: ['./description-details.component.css']
})
export class DescriptionDetailsComponent implements OnInit {
  isDesktop: boolean = true;
  @ViewChild("myElem") MyProp: ElementRef;

  public idSousCategorie: any
  public SousCategorie: any
  public idProduit: any
  public Produit: any
  public produit: any
  private contact: ContactService
  public Agency: any
  contactText = "";
  numText = "";
  dt: any;
  dataDisplay: any;
  FormData: FormGroup;
  firstId: any;
  Projet: any;
  NameAgency: any;
  agencyName: any;
  foundAgency: any;
  AgencyBaniere: any;
  agencyId: any;
  description: any;
  logo_url: any;
  ProduitEnCours: any;
  ProjetId: any;
  ProjetDispo: any;
  routerIdLink: any;
  idAgency: any;
  constructor(private activatedRoute: ActivatedRoute,
    private produitService: ProduitsService,
    private _location: Location,
    private router: Router,
    private modalService: NgbModal,
    private builder: FormBuilder,
    private agencieService: AgenciesService,
    private renderer: Renderer2, private el: ElementRef,
    private projetService:ProduitsService,
    private sharedService:SharedAgenceImmobilierService

    ) { }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  ngOnInit(): void {
    
    this.idAgency = this.sharedService.getIdAgency()
    this.agencieService.getAgencieById(this.idAgency).subscribe((data:any) => {
      console.log(data)
      this.description=data?.description
      this.logo_url=data?.logo_url
      this.ProduitEnCours = data?.produits;
    })
    this.agencieService.getAllMateriaux().subscribe((data: any[]) => {
      // Assuming data is an array of agencies
      console.log('foundAgency : ',data)
      let foundAgency = data.find(agency => agency.name === this.agencyName);
      console.log('foundAgency :',foundAgency)
      this.foundAgency=foundAgency?.mobile_apps[0]
      this.AgencyBaniere = this.foundAgency?.mobile_cover_image_url;
      console.log("AgencyBaniere", this.AgencyBaniere)

      this.agencieService.setAgencyBaniere(this.AgencyBaniere);
      console.log("agencyId", this.AgencyBaniere)

      if (foundAgency) {
        this.agencyId = foundAgency.id;
        this.description = foundAgency.description
        this.logo_url = foundAgency.logo_url

        // this.ProduitEnCours = foundAgency.description
        this.ProduitEnCours = foundAgency?.produits
      
     
        this.ProjetId=this.ProduitEnCours.id
        console.log('cours',this.ProduitEnCours)
        this.ProjetDispo = foundAgency?.projets.filter(project => project.status === 'DISPONIBLE');
        console.log('dispo',this.ProjetDispo)
        console.log("Found Agency", this.agencyId);
        this.routerIdLink = this.agencyId;
      } else {
        console.log("Agency not found");
        // Handle the case when the agency is not found
      }
    });
    this.idSousCategorie = this.activatedRoute.snapshot.paramMap.get('id')

    this.produitService.getSousCategorieById(this.idSousCategorie).subscribe(Response => {
      this.SousCategorie = Response;

      console.log('here',this.SousCategorie)

    });

    this.activatedRoute.params.subscribe(params => {
      // Access the individual parameters
      this.firstId = params['id1'];
    
      // Do something with the ids
      console.log('First ID:', this.firstId);
    });
    this.projetService.getProduitById(this.firstId).subscribe((data:any) => {
      console.log(data)
      this.agencyName = data.agencyName;
      console.log("agencyName :",this.agencyName)
      // this.NameAgency =this.Projet.agencyName
    })
    this.FormData = this.builder.group({
      Nom: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      description: new FormControl('', [Validators.required]),
    });

 





 


    ///methode1:
    // this.router.events.subscribe((evt) => {
    //   if (!(evt instanceof NavigationEnd)) {
    //       return;
    //   }
    //    window.scrollTo({ top: 200, behavior: 'auto' }); 
    //    });
    //methode2:
    // const element = document.getElementById("box");
    // element.scrollIntoView({ block: "start", behavior: "auto" });
    this.checkScreenWidth(); 
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidth();
  }
  
  checkScreenWidth() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 800) {
      this.isDesktop = false;
    } else {
      this.isDesktop = true;
    }
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
  displayMaximizable: boolean;
  showMaximizableDialog() {
    this.displayMaximizable = true;
  }
}
