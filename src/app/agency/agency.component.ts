import { AfterViewInit, Component, ElementRef, OnInit, ViewChild,Renderer2,HostListener } from '@angular/core';
import { DomSanitizer, Meta, SafeResourceUrl, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AgenciesService } from '../services/agencies/agencies.service';
import { ProduitsService } from '../services/produits/produits.service';
import { ProjetsService } from '../services/projets/projets.service';
import { Location } from '@angular/common';
import { ShareService } from '../services/share/share.service';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css'],
  styles: [`
  .star {
    font-size: 1.5rem;
    color: #d7d730;
        }
      p {
          margin: 0;
      }

      .confirm-items: center;
          justifation-content {
          display: flex;
          aligny-content: center;
      }

      :host ::ng-deep .p-dialog .p-button {
          min-width: 6rem;
      }
         `]
})
export class AgencyComponent implements OnInit, AfterViewInit {
  isDesktop: boolean = true;
  titre = 'google-maps';
  private map: google.maps.Map
  @ViewChild("myElem") MyProp: ElementRef;
  imagePath: string = 'src/assets/IMAGES PLATEFORME/PROMOTEUR IMMOBILIER/PROMOTEUR TUNIS/BOUTIQUES TUNIS/SOROUBAT/PAGE PROJET'; // Chemin initial de l'image
 

  public idAgency: any
  public Agency: any
  public idProjet: any
  public Projet: any
  public allAgencies: any
  public image_url: any
  public image_url_pj: any
  public image_url_ser: any
  public image_url_biens: any
  public titrePromo: any
  public reverseAgency: any
  public reverseAgPromoteurs: any
  public reverseAg: any
  public reverseAgBiens
  public name: any
  public facebookShareLink: string;
  public image_name: any

  options: any;

  overlays: any[];

  dialogVisible: boolean;

  markerTitle: string;

  selectedPosition: any;

  infoWindow: any;

  draggable: boolean;

  searchText = "";
  agenciesProjet: any
  agenciesProduit: any
  images2: any;
  images: any;
  responsiveOptions;
  urlSafe: SafeResourceUrl;
  urlSafe2: SafeResourceUrl;

  title = 'firstApp';


  constructor(private activatedRoute: ActivatedRoute,
    private agencieService: AgenciesService,
    private projetService: ProjetsService,
    private produitService: ProduitsService,
    private titleService: Title,
    private meta: Meta,
    private sanitizer: DomSanitizer,
    private _location: Location,
    private router: Router,
    public _seoService: ShareService,
    private renderer: Renderer2, private el: ElementRef
  ) {
    this.idAgency = this.activatedRoute.snapshot.paramMap.get('id')
    this.agencieService.getAgencieById(this.idAgency).subscribe(data => {
      console.log(data)
      this.Agency = data;
      this.reverseAgPromoteurs = this.Agency?.projets?.reverse();
    })
    this.responsiveOptions = [
      {
        breakpoint: '2700px',
        numVisible: 6,
        numScroll: 6
      },
      {
        breakpoint: '2300px',
        numVisible: 4,
        numScroll: 4
      },
      {
        breakpoint: '1400px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '1200px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '660px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
  ngAfterViewInit() {
    this.idAgency = this.activatedRoute.snapshot.paramMap.get('id')
    this.agencieService.getAgencieById(this.idAgency).subscribe(data => {
      console.log(data,"test")
      this.Agency = data;
      this.reverseAgPromoteurs = this.Agency?.projets?.reverse();
    })
  }

  ngOnInit(): void {
    
    this.changeMetadata(
      "Property Listing Title",
      "{{ image.photos[0] }}", // URL of the property image
      "{{ secure_image_url_here }}", // Secure URL of the property image
      "Property description goes here."
    );
    this.agencieService.getAllAgencies().subscribe((data: any) => {
      this.allAgencies = data
      console.log('cc', this.allAgencies)
    })

    this.idAgency = this.activatedRoute.snapshot.paramMap.get('id')
    this.agencieService.getAgencieById(this.idAgency).subscribe(data => {
      console.log(data)
      this.Agency = data;
      // this.reverseAgPromoteurs= this.Agency.projets.reverse();

      //Video_Url2
      this.urlSafe2 = this.sanitizer.bypassSecurityTrustResourceUrl(this.Agency.videoUrl2);
      console.log('ccccccccccccc', this.Agency.videoUrl2)
      //Video_Url
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.Agency.videoUrl);
      this.reverseAg = this.Agency?.produits?.reverse();
      this.reverseAgBiens = this.Agency?.biens?.reverse();



      //promo produit
      for (let ImagePromoProduit of this.Agency?.produits) {
        this.image_url = ImagePromoProduit.promoImg
        this.image_name=ImagePromoProduit.promoTitle
      }
      console.log(this.image_url,this.image_name)
      this.changemeta(this.image_url);
      this.changemeta(this.image_name)

    }),
      this.agencieService.getAgencieById(this.idAgency).subscribe(data => {
        console.log(data)
        this.Agency = data;
        console.log(this.Agency?.role)
        //promo projet  
        for (let ImagePromoProjet of this.Agency?.projets) {

          this.image_url_pj = ImagePromoProjet.promoImg;
        
        }
        console.log(this.image_url_pj)

        this.changemetaPj(this.image_url_pj)

      }),
      this.agencieService.getAgencieById(this.idAgency).subscribe(data => {
        console.log(data)
        this.Agency = data;
        console.log(this.Agency.role)
        //promo service
        for (let ImagePromoservice of this.Agency?.services) {

          this.image_url_ser = ImagePromoservice.promoImg

        }
        console.log(this.image_url_ser)

        this.changemetaSer(this.image_url_ser)

      }),
      this.agencieService.getAgencieById(this.idAgency).subscribe(data => {
        console.log(data)
        this.Agency = data;
        console.log(this.Agency.role)
        //promo biens
        for (let ImagePromobien of this.Agency?.biens) {

          this.image_url_biens = ImagePromobien.promoImg
          this.titrePromo = ImagePromobien.promoTitle

        }
        console.log(this.image_url_biens)

        this.changemetaBiens(this.image_url_biens)

      }),

      this.projetService.getListProjet().subscribe((data) => {
        this.agenciesProjet = data;
      });

    this.produitService.getListProduit().subscribe((data) => {
      console.log(data)
      this.agenciesProduit = data;

    });
    this.idProjet = this.activatedRoute.snapshot.paramMap.get('id')

    this.projetService.getProjetById(this.idProjet).subscribe(data => {
      console.log(data)
      this.Projet = data;
    })

    this.images = [
      { random: 'projet', picture: 'https://picsum.photos/id/101/900/500?blur=10', title: 'projet 1', produit: 'Produit 1' },
      { random: 'projet', picture: 'https://picsum.photos/seed/picsum/900/500?blur=10', title: 'projet 2', produit: 'Produit 2' },
      { random: 'projet ', picture: 'https://picsum.photos/id/870/900/500?grayscale&blur=10', title: 'projet 3', produit: 'Produit 3' },
      { random: 'projet ', picture: 'https://picsum.photos/id/984/900/500?blur=10', title: 'projet 4', produit: 'Produit 4' },
    ];
    this.images2 = [
      { random: 'projet', picture: 'https://picsum.photos/id/101/900/500?blur=10', title: 'projet 1', produit: 'Produit 1' },
      { random: 'projet', picture: 'https://picsum.photos/seed/picsum/900/500?blur=10', title: 'projet 2', produit: 'Produit 2' },
      { random: 'projet ', picture: 'https://picsum.photos/id/870/900/500?grayscale&blur=10', title: 'projet 3', produit: 'Produit 3' },
      { random: 'projet ', picture: 'https://picsum.photos/id/984/900/500?blur=10', title: 'projet 4', produit: 'Produit 4' },
    ];

    //     this.router.events.subscribe((evt) => {
    // if (!(evt instanceof NavigationEnd)) {
    //     return;
    // }
    //  window.scrollTo({ top: 400, behavior: 'auto' }); 
    //  });

    this.options = {
      // center: { lat: 36.890257, lng: 30.707417 },
      // zoom: 12
    };
    // this.checkScreenWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidth();
  }

  checkScreenWidth() {
    // const screenWidth = window.innerWidth;
    // if (screenWidth <= 800) {
    //   this.isDesktop = false;
    // } else {
    //   this.isDesktop = true;
    // }
  }
  changeMetadata(title: string, imageUrl: string, secureImageUrl: string, description: string): void {
    // this.titleService.setTitle(title);
    // this.meta.updateTag({ property: 'og:url', content: 'https://tunimmob.com/agency/' + this.idAgency });
    // this.meta.updateTag({ property: 'og:title', content: title });
    // this.meta.updateTag({ property: 'og:image', content: imageUrl });
    // this.meta.updateTag({ property: 'og:image:secure_url', content: secureImageUrl });
    // this.meta.updateTag({ property: 'og:description', content: description });
  }
  
  changemeta(image_url: any): void {
    this.changeMetadata("Boutique.", image_url, '', "Boutique description");
  }
  
  changemetaPj(image_url_pj: any): void {
    this.changeMetadata("Boutique", image_url_pj, image_url_pj, "Boutique description");
  }
  
  changemetaSer(image_url_ser: any): void {
    this.changeMetadata("Boutique", image_url_ser, '', "Boutique description");
  }
  
  changemetaBiens(image_url_biens: any): void {
    this.changeMetadata("Boutique", image_url_biens, '', "Boutique description");
  }
  
  goToLink() {
    window.open(this.Agency.website_url, '_blank');
  }
  
  backClicked() {
    this._location.back();
  }
  
  displayMaximizable: boolean;
  showMaximizableDialog() {
    this.displayMaximizable = true;
  }
  
  generateShareableLink(imageUrl: string, name: string): string {
    const baseURL = 'https://www.yourwebsite.com/share-page'; // Remplacez par votre URL réelle
    const queryParams = new URLSearchParams({
      image: imageUrl,
      name: name
    });
  
    return `${baseURL}?${queryParams.toString()}`;
  }
  changeImageSource() {
    this.imagePath = 'src/assets/IMAGES PLATEFORME/PROMOTEUR IMMOBILIER/PROMOTEUR TUNIS/BOUTIQUES TUNIS/SOROUBAT/PAGE PROJET'; // Nouveau chemin de l'image
  }

  shareOnFacebook():void{
    const facebookShareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.Agency.videoUrl)}`;
    window.open(facebookShareURL,'_blank')
  }


}
