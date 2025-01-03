import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AgenciesService } from '../services/agencies/agencies.service';
import {Location} from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { filter } from 'rxjs';
import { ProduitsService } from '../services/produits/produits.service';
import { SharedAgenceImmobilierService } from '../services/shared-agence-immobilier.service';
import { MatTabGroup } from '@angular/material/tabs';
import { ButtonModule } from 'primeng/button';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { AgenceMatService } from '../agence/agence-mat/agence-mat.service';

interface SousCat {
  name: string,
  value: string
}


@Component({
  selector: 'app-details-materiaux',
  templateUrl: './details-materiaux.component.html',
  styleUrls: ['./details-materiaux.component.css'],
  styles: [`
  .star {
    font-size: 1.5rem;
    color: #d7d730;
    
  }
`]
})
export class DetailsMateriauxComponent implements OnInit {
  
  private storageKey = 'idAgency'
  @ViewChild("myElem") MyProp: ElementRef;
  

  @ViewChild('scrollContainer') scrollContainer: ElementRef | undefined;
  public idAgency: any
  public Agency: any
  public AllAgency:any
  public idProduit:any
  public Produit:any
  public webSite:any


  public idSousCategorie:any
  public SousCategorie:any
  urlSafe:SafeResourceUrl;
  public reverseAgency:any
  public reverseAg : any
  dt: any;
  dataDisplay: any;
  materiauId: any;
  agencyId: any;
   image_url_pj ="../../assets/images/BANIERE-CLIENTS-MEUBLE (-)/PUB-2.jpg"
  NameAgency: any;
  ProduitEnCours: any;
  logo_url: any;
  description: any;
  ProjetId: any;
  ProjetDispo: any;
  routerIdLink: any;
  foundAgency: any;
  AgencyBaniere: any;
  produit: any; // Replace 'any' with the actual type of your data
  leftValue = 0;
  @ViewChild('tabGroup', { static: false }) tabGroup: any;
  selectedIndex = 0;
  @ViewChild('cCarouselInner') cCarouselInner!: ElementRef;
  carouselVp: any;
  carouselInnerWidth: any;
  idAgencyMenu: any;
  ServicesDivers: any;
  filtredServicesDivers2: any;
  filtredServicesDivers1: any;
  filteredSousServices: any;
  categoryList: any;
  sousServices: any;
  responsiveOptions: { breakpoint: string; numVisible: number; numScroll: number; }[];
  ProduitId: any;
  AgencyEmail: any;
  private modalRef: NgbModalRef | null = null; // Initialize as null

  constructor(private activatedRoute: ActivatedRoute,
    private produitService:ProduitsService,
    private agencieService:AgenciesService,
    private _location: Location,
    private router:Router,
    private sanitizer:DomSanitizer,
    private modalService: NgbModal,
    private sharedService:AgenceMatService,
    private http:HttpClient

    ) {
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

  ngOnInit(): void {
this.idAgency = this.sharedService.getIdAgency()

    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      // Scroll to the top of the page
      window.scrollTo(0, 0);
    });
    // this.activatedRoute.parent.params.subscribe(parentParams => {
    //   this.agencyId = parentParams['id'];
    // });
    // this.activatedRoute.params.subscribe(params => {
    //   this.materiauId = params['id'];
    // });


      this.idProduit= this.activatedRoute.snapshot.paramMap.get('id')
      this.produitService.getProduitById(this.idProduit).subscribe((data:any) => {
        this.Produit = data;
        this.ProduitId = data.produits;
        this.categoryList = this.Produit.categoryList;
        this.sousServices = this.Produit?.sous_cat;

        this.filteredSousServices = this.sousServices; // Show all initially
        console.log(' : s',this.Produit.sous_cat,this.filteredSousServices,this.sousServices)

        this.NameAgency = this.Produit?.agencyName;
        console.log('this name Agency',this.NameAgency)
        this.agencieService.getAllMateriaux().subscribe((data: any[]) => {
          // Assuming data is an array of agencies
          console.log('foundAgency : s',data)
          let foundAgency = data.find(agency => agency.name === this.NameAgency);
          console.log('foundAgency :',foundAgency,this.NameAgency)
          this.foundAgency=foundAgency?.mobile_apps[0]
          this.AgencyBaniere = this.foundAgency?.mobile_cover_image_url;
          console.log("AgencyBaniere", this.AgencyBaniere)
    
          this.agencieService.setAgencyBaniere(this.AgencyBaniere);
          console.log("agencyId", this.AgencyBaniere)
    
     
        });
        console.log('result',this.Produit)
        console.log('this',this.Produit.videoUrlProduit)


           //Video_Url
            this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.Produit.videoUrlProduit);


        for(let categorie of this.Produit?.sous_cat){
          this.webSite = categorie.website
          console.log(this.webSite)
        }
        
      });
      this.idSousCategorie= this.activatedRoute.snapshot.paramMap.get('id')
      this.agencieService.getAgencieById(this.idAgency).subscribe((data:any) => {
        console.log(data)
        this.Agency=data
        this.AgencyEmail =this.Agency.email

        this.description=data?.description
        this.logo_url=data?.logo_url
        this.ProduitEnCours = data?.produits;
      
        this.setSharedVariable()

      })
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
       
   
    }  
   
 
  goToLink() {
    window.open(this.webSite);
    
  }
  backClicked() {
    this._location.back();
    console.log('back clicked work')
  }
//  getCategorieName() {
//   this.
//  }

getTheFirstDescription(){
  
}


// Function to scroll to the next category


// Function to scroll the selected category into view
scrollToView() {
  if (this.scrollContainer && this.scrollContainer.nativeElement) {
    this.scrollContainer.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}




prevClick() {
  const totalMovementSize = this.getTotalMovementSize();
  if (this.leftValue !== 0) {
    this.leftValue += totalMovementSize;
    this.cCarouselInner.nativeElement.style.left = `${this.leftValue}px`;
    console.log("Previous Button Clicked. New leftValue:", this.leftValue);
  }
}
carouselConfig = {
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000
};

cards = [
  { title: 'Card 1', description: 'Details of Card 1', imageUrl: 'assets/icons/empty.png' },
  { title: 'Card 2', description: 'Details of Card 2', imageUrl: 'assets/icons/empty.png' },
  { title: 'Card 3', description: 'Details of Card 3', imageUrl: 'assets/icons/empty.png' },
  { title: 'Card 4', description: 'Details of Card 4', imageUrl: 'assets/icons/empty.png' }
];
emtpyCategoryList = [
  { title: 'Produit 1'},
  { title: 'Produit 2'},
  { title: 'Produit 3'},
  { title: 'Produit 4'},
  { title: 'Produit 5'},
  { title: 'Produit 6'}
 
];

nextClick() {
  const totalMovementSize = this.getTotalMovementSize();
  const carouselVpWidth = this.carouselVp.nativeElement.getBoundingClientRect().width;

  if (this.carouselInnerWidth - Math.abs(this.leftValue) > carouselVpWidth) {
    this.leftValue -= totalMovementSize;
    this.cCarouselInner.nativeElement.style.left = `${this.leftValue}px`;
    console.log("Next Button Clicked. New leftValue:", this.leftValue);
  }
}

private getTotalMovementSize(): number {
  return (
    parseFloat(this.cCarouselInner.nativeElement.firstElementChild.getBoundingClientRect().width) +
    parseFloat(window.getComputedStyle(this.cCarouselInner.nativeElement).getPropertyValue('gap'))
  );
}

ngAfterViewInit() {
  this.carouselInnerWidth = this.cCarouselInner.nativeElement.getBoundingClientRect().width;
}
displayMaximizable: boolean;
showMaximizableDialog() {
  this.displayMaximizable = true;
}
openVerticallyCentered(content) {
  this.modalService.open(content, { centered: true });
}
navigateAndRefresh(project: any) {
  // Extract the id from the project object
  const projectId = project.id;

  // Navigate to the specified route
 
  this.router.navigate(['/details-materiaux', project.id])
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

getAgency() {
  this.agencieService.getAllMateriaux().subscribe((data: any) => {
    const filteredAgencies = data.filter(agency => agency.name === this.NameAgency);
    if (filteredAgencies.length > 0) {
      this.idAgencyMenu = filteredAgencies[0].id;
      console.log(this.idAgencyMenu);
      this.router.navigate(['/agency', this.idAgencyMenu]);
    }
  });
}

selectTab(index: number) {
  this.selectedIndex = index;
  if (this.tabGroup) {
    this.tabGroup.selectedIndex = index;
  }
}

onTabChange(event: any) {
  this.selectedIndex = event.index;
}

onDropdownChange(event: any) {
  const index = this.Produit.categoryList.indexOf(event.target.value);
  if (index !== -1) {
    this.selectTab(index);
  }
}
setSharedVariable() {
  let data = this.Agency;
  this.agencieService.setSharedVariable(data);
  console.log("this data", data); // Corrected to use the 'data' variable
  //  this.message ="data sended successfully"
}
public selectedSousCategorie!:SousCat;

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
          timer: 1000,  // Closes after 3 seconds
          timerProgressBar: true  // Shows a progress bar
        });
        console.log('Email sent successfully!', response);
        
        // Reset form fields
        this.emailSource = '';
        this.emailDest = '';
        this.subject = '';
        this.message = '';
        this.closeModal()
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
openModal(content: any) {
  this.modalRef = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
}

closeModal() {
  if (this.modalRef) {
    this.modalRef.close();
    this.modalRef = null; // Reset after closing
    console.log('Modal closed successfully.');
  } else {
    console.log('Modal reference is undefined; modal might not have been opened.');
  }
}
}
