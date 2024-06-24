import { Component, ElementRef, Input, OnInit, ViewChild,Renderer2,HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../services/contact/contact.service';
import { AgenciesService } from '../services/agencies/agencies.service';
import { ProduitsService } from '../services/produits/produits.service';
import { SharedAgenceImmobilierService } from '../services/shared-agence-immobilier.service';
import { CoffeeAgencyService } from '../services/coffee/coffee-agency.service';



@Component({
  selector: 'app-description-coffee',
  templateUrl: './description-coffee.component.html',
  styleUrls: ['./description-coffee.component.css']
})
export class DescriptionCoffeeComponent implements OnInit {
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
  modifiedText: string;
  idCoffee: any;
  mobile_apps: any;
  ProjetEnCours: any;
  coffeeMenu: any;
  constructor(private activatedRoute: ActivatedRoute,
    private produitService: ProduitsService,
    private _location: Location,
    private router: Router,
    private modalService: NgbModal,
    private builder: FormBuilder,
    private agencieService: AgenciesService,
    private renderer: Renderer2, private el: ElementRef,
    private projetService:ProduitsService,
    private coffeeService : CoffeeAgencyService
    ) { }

 
  ngOnInit(): void {
this.idCoffee = this.coffeeService.getIdAgency()
this.agencieService.getAgencieById(this.idCoffee).subscribe(data => {
  this.Agency =data
  // this.mobile_apps = this.Agency.mobile_apps[0]?.mobile_cover_image_url;

  // this.ProjetEnCours =this.Agency?.projets.filter(project => project.status === 'EN COURS' || project.status === 'EN COURS ');
  this.coffeeMenu =this.Agency?.produits


}),
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
  
  addLineBreaks(text: string): string {
    if (text && text.includes('-')) {
      // If the text contains '-', split the text at '-' and join with '<br>'
      return text.split('-').join('<br>');
    } else {
      // If the text does not contain '-', return the original text
      return text;
    }
    
  }
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  getDescriptionWithLineBreaks(): string {
    if (!this.SousCategorie || !this.SousCategorie.description) {
      return '';
    }
    return this.SousCategorie.description.replace(/-/g, '<br>');
  }
  getDescriptionWithBoldText(): string {
    if (!this.SousCategorie?.description) {
      return '';
    }
    return this.SousCategorie.description
      .replace(/\(([^)]+)\)/g, '<h4 style="margin: -22px 0 16px !important;">$1</h4>')
      .replace(/-/g, '<br>');
  }
  
  
}
