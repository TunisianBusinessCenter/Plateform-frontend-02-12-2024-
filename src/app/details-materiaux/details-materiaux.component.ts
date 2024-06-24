import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AgenciesService } from '../services/agencies/agencies.service';
import {Location} from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { filter } from 'rxjs';
import { ProduitsService } from '../services/produits/produits.service';
import { SharedAgenceImmobilierService } from '../services/shared-agence-immobilier.service';


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
  @ViewChild('tabGroup') tabGroup: any;
  @ViewChild('scrollContainer') scrollContainer: ElementRef | undefined;
  public idAgency: any
  public Agency: any
  public AllAgency:any
  public idProduit:any
  public Produit:any
  public webSite:any
  activeTabIndex: number = 0;

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

  @ViewChild('cCarouselInner') cCarouselInner!: ElementRef;
  carouselVp: any;
  carouselInnerWidth: any;
  constructor(private activatedRoute: ActivatedRoute,
    private produitService:ProduitsService,
    private agencieService:AgenciesService,
    private _location: Location,
    private router:Router,
    private sanitizer:DomSanitizer,
    private modalService: NgbModal,
    private sharedService:SharedAgenceImmobilierService

    ) {
      
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
      this.produitService.getProduitById(this.idProduit).subscribe(data => {
        this.Produit = data;
        
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
        this.description=data.description
        this.logo_url=data.logo_url
        this.ProduitEnCours = data?.produits;
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
scrollToPreviousCategory() {
  this.tabGroup.selectedIndex = Math.max(this.tabGroup.selectedIndex - 1, 0);
  this.scrollToView();
}

// Function to scroll to the next category
scrollToNextCategory() {
  this.tabGroup.selectedIndex = Math.min(this.tabGroup.selectedIndex + 1, this.tabGroup._tabs.length - 1);
  this.scrollToView();
}

// Function to scroll the selected category into view
scrollToView() {
  if (this.scrollContainer && this.scrollContainer.nativeElement) {
    this.scrollContainer.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}

goToPreviousTab() {
  if (this.activeTabIndex > 0) {
    this.activeTabIndex--;
  }
}

goToNextTab() {
  if (this.activeTabIndex < (this.Produit?.categoryList.length - 1)) {
    this.activeTabIndex++;
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
  { title: 'Card 1', description: 'Details of Card 1', imageUrl: 'path/to/image1.jpg' },
  { title: 'Card 2', description: 'Details of Card 2', imageUrl: 'path/to/image2.jpg' },
  { title: 'Card 3', description: 'Details of Card 3', imageUrl: 'path/to/image3.jpg' },
  { title: 'Card 4', description: 'Details of Card 4', imageUrl: 'path/to/image4.jpg' }
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

 
}
