import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Location} from '@angular/common';
import { AgenciesService } from '../services/agencies/agencies.service';
import { AgenceServiceService } from '../services/agence-service/agence-service.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CommerceServiceService } from '../commerce-service-agency/commerce-service.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AgenceMatService } from '../agence/agence-mat/agence-mat.service';
interface SousCat {
  name: string,
  value: string
}

@Component({
  selector: 'app-details-services',
  templateUrl: './details-services.component.html',
  styleUrls: ['./details-services.component.css']
})
export class DetailsServicesComponent implements OnInit {
  @ViewChild("myElem") MyProp: ElementRef;

public AllAgency:any
public idService:any
public Service:any
  NameAgency: any;
  serviceCommerce: any;
  sous_services: any;
  @ViewChild('tabGroup', { static: false }) tabGroup: any;
  idAgence: any;
  CommerceService: any;
  sousServices: any;
  CommerceServiceAgency: any;
  urlSafe:SafeResourceUrl;
  urlSafe1: SafeResourceUrl;
  ServicesDivers: any;
  filtredServicesDivers2: any;
  filtredServicesDivers1: any;
  filteredSousServices: any[] = [];

  
  responsiveOptions: any[]; // PrimeNG responsive options
  categoryList: any;
  AgencyEmail: any;
  constructor(private _location: Location,
    private commerce :CommerceServiceService,
    private activatedRoute: ActivatedRoute,
    private sanitizer:DomSanitizer,
    private agenceServiceService:AgenceServiceService,
    private agencieService:AgenciesService,
    private AgenceServiceService:AgenceServiceService,
    private http:HttpClient,
    private modalService: NgbModal,
    private router:Router) {
      this.responsiveOptions = [
        {
          breakpoint: '2000px',
          numVisible: 5,
          numScroll: 5
        },
        {
          breakpoint: '1724px',
          numVisible: 4,
          numScroll: 4
        },
        {
          breakpoint: '1250px',
          numVisible: 3,
          numScroll: 3
        },
        {
          breakpoint: '954px',
          numVisible: 2,
          numScroll: 2
        },
        {
          breakpoint: '667px',
          numVisible: 1,
          numScroll: 1
        }
      ];
     }

    ngAfterViewInit() {
    }
  ngOnInit(): void {
    this.idAgence = this.commerce.getIdAgency()
    console.log("ggggggggggggggggggggggggggggggggggggggggggggggggggggg",this.idAgence)
    this.agencieService.getAgencieById(this.idAgence).subscribe((data:any) => {

      this.CommerceServiceAgency = data;
      console.log(this.CommerceServiceAgency)
      this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.CommerceServiceAgency.videoUrl2);
      this.urlSafe1= this.CommerceServiceAgency?.services
        console.log(this.urlSafe)
        console.log(this.urlSafe1)


      this.CommerceService = data.services;
      console.log(this.CommerceService)
      this.setSharedVariable()

      })
 
 

    this.idService= this.activatedRoute.snapshot.paramMap.get('id')
    
    this.agenceServiceService.getServiceById(this.idService).subscribe((data:any) => {
      this.categoryList = data.categoryList;
      this.sousServices = data.sous_services;
      this.filteredSousServices = this.sousServices; // Show all initially
      console.log(data)
      this.Service = data;
      this.AgencyEmail =this.Service.email
      this.categoryList = data.categoryList;
      this.sousServices = data.sous_services;

      this.sousServices=this.Service?.sous_services
      this.NameAgency = this.Service?.agencyName;

      this.serviceCommerce = this.Service?.sous_services;

      // for(let categorie of this.Service?.sous_service){
      //   this.webSite = categorie.website
      //   console.log(this.webSite)
      // }
    });
   
///methode1:
  // this.router.events.subscribe((evt) => {
  //   if (!(evt instanceof NavigationEnd)) {
  //       return;
  //   }
  //    window.scrollTo({ top: 400, behavior: 'auto' }); 
  
  //    });
//methode2:
  // const element = document.getElementById("box");
  // element.scrollIntoView({ block: "start", behavior: "auto" });
  

}
  backClicked() {
    this._location.back();
  }
  displayMaximizable: boolean;
  showMaximizableDialog() {
    this.displayMaximizable = true;
  }
  selectTab(index: number) {
    this.selectedIndex = index;
    if (this.tabGroup) {
      this.tabGroup.selectedIndex = index;
    }
  }
  selectedIndex = 0;

  onTabChange(event: any) {
    this.selectedIndex = event.index;
  }
  
  onDropdownChange(event: any) {
    const index = this.Service.categoryList.indexOf(event.target.value);
    if (index !== -1) {
      this.selectTab(index);
    }
  }
  navigateAndRefresh(project: any) {
    // Extract the id from the project object
    const projectId = project.id;
  
    // Navigate to the specified route
   
    this.router.navigate(['/details-service', project.id])
      .then(() => {
        // If navigation is successful, call the refresh function
        this.refresh();
      });
  }
  refresh(): void {
    this.router.navigateByUrl("/refreshMat", { skipLocationChange: true }).then(() => {
      console.log(decodeURI(this._location.path()));
      this.router.navigate([decodeURI(this._location.path())]);
  
      // Set timeout to call the refresh function again after 2 seconds
  
    });
  }
  setSharedVariable() {
    console.log("this data 1", this.CommerceServiceAgency); // Corrected to use the 'data' variable

    let data = this.CommerceServiceAgency;
    this.agencieService.setSharedVariable(data);
    console.log("this data", data); // Corrected to use the 'data' variable
    //  this.message ="data sended successfully"
  }















  public selectedSousCategorie!:SousCat;

  listeSousCat: SousCat[] = [
    {name: 'Pro de l’artisanat', value: 'ProDeAartisanat '},
    {name: 'Sociétés industriel', value: 'SocIndustriel '},
    {name: 'Commerces', value: 'Commerces '},
    {name: 'Sociétés des Services', value: 'SocDesServices '},
  ];
  filterSousCategorie(event : any)  {
    
    console.log(this.selectedSousCategorie)

    if(this.selectedSousCategorie){

    this.ServicesDivers =  this.filtredServicesDivers2.filter((item : any) => item.sous_categorie ==  this.selectedSousCategorie.value);
    // console.log(this.selectedSousCategorie.value)
    }else{
     this.ServicesDivers = this.filtredServicesDivers1
    }
  }
  

  filterServices(category: string): void {
    this.filteredSousServices = this.sousServices.filter(sous_service => sous_service.category === category);
  }
  emailSource: string = '';
  emailDest:  any = '';
  subject: string = '';
  message: string = '';
  senderEmail() {
    // Get form data
    this.emailDest = this.AgencyEmail;
    const data = {
      emailsource: this.emailSource,
      emaildest: this.emailDest,
      subject: this.subject,
      message: `${this.message}\n\nFrom: ${this.emailSource}`
    };
  
    // Check if any of the required fields are empty
    if (!data.emailsource || !data.emaildest || !data.subject || !this.message) {
      Swal.fire({
        title: 'Error!',
        text: "Veuillez remplir tous les champs obligatoires.",
        icon: 'error',
        confirmButtonText: 'Fermer'
      });
      return; // Stop further execution if form is incomplete
    }
  
    // If the form is valid, send the email
    this.http.post('https://contact-tunimmob.vercel.app/boutiques/SendEmail', data)
      .subscribe({
        next: (response) => {
          Swal.fire({
            title: 'Success!',
            text: "L'email a été envoyé avec succès.",
            icon: 'success',
            confirmButtonText: 'Fermer'
          });
          console.log('Email sent successfully!', response);
          
          // Reset form fields
          this.emailSource = '';
          this.emailDest = '';
          this.subject = '';
          this.message = '';
        },
        error: (error) => {
          Swal.fire({
            title: 'Error!',
            text: "Une erreur s'est produite lors de l'envoi de l'email.",
            icon: 'error',
            confirmButtonText: 'Fermer'
          });
          console.error('Error sending email', error);
        }
      });
  }
  
  isValidEmail(email: string): boolean {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
  }
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
}
