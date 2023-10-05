import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, Meta, SafeResourceUrl, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AgenciesService } from '../services/agencies/agencies.service';
import { ProduitsService } from '../services/produits/produits.service';
import { ProjetsService } from '../services/projets/projets.service';
import { ShareService } from '../services/share/share.service';
import {Location} from '@angular/common';


@Component({
  selector: 'app-meilleurs-biens-agency',
  templateUrl: './meilleurs-biens-agency.component.html',
  styleUrls: ['./meilleurs-biens-agency.component.css'],
  styles: [`
  .star {
    font-size: 1.5rem;
    color: #d7d730;
        }
         `]
})
export class MeilleursBiensAgencyComponent implements OnInit {

  titre = 'google-maps';
  private map: google.maps.Map
  @ViewChild("myElem") MyProp: ElementRef;

  public idAgency: any
  public Agency: any
  public idProjet:any
  public Projet:any
  public allAgencies:any
  public image_url:any
  public image_url_pj:any
  public image_url_ser:any
  public image_url_biens:any
  public titrePromo:any
  public reverseAgency :any
  public reverseAg:any

  options: any;

  overlays: any[];

  dialogVisible: boolean;

  markerTitle: string;

  selectedPosition: any;

  infoWindow: any;

  draggable: boolean;

  searchText = "";
  agenciesProjet:any
  agenciesProduit:any
  images2:any; 
  images:any; 
  responsiveOptions;
  urlSafe:SafeResourceUrl;
  title = 'firstApp';
 

  constructor(private activatedRoute: ActivatedRoute,
    private agencieService:AgenciesService,
    private titleService: Title,
    private meta: Meta,
    private sanitizer:DomSanitizer,
    private _location: Location,
    private router: Router,
    public _seoService: ShareService ) {
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

  ngOnInit(): void {
    this.agencieService.getAllAgencies().subscribe((data:any)=>{
      this.allAgencies=data
      console.log('cc',this.allAgencies)
    })

    this.idAgency= this.activatedRoute.snapshot.paramMap.get('id')
    this.agencieService.getAgencieById(this.idAgency).subscribe(data => {
      console.log(data)
      this.Agency = data;
       //Video_Url
   this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.Agency.videoUrl);
   this.reverseAg= this.Agency.produits.reverse();
     //promo biens
     for(let ImagePromobien of this.Agency?.biens){
       
      this.image_url_biens = ImagePromobien.promoImg
      this.titrePromo = ImagePromobien.promoTitle
  
    }
    console.log(this.image_url_biens)
    
     this.changemetaBiens(this.image_url_biens)
  })
  this.images = [
    {random: 'projet', picture: 'https://picsum.photos/id/101/900/500?blur=10', title:'projet 1',produit:'Produit 1'},
    {random: 'projet', picture: 'https://picsum.photos/seed/picsum/900/500?blur=10', title:'projet 2',produit:'Produit 2'},
    {random: 'projet ', picture: 'https://picsum.photos/id/870/900/500?grayscale&blur=10', title:'projet 3',produit:'Produit 3'},
    {random: 'projet ', picture: 'https://picsum.photos/id/984/900/500?blur=10', title:'projet 4',produit:'Produit 4'},
  ];
  this.images2 = [
    {random: 'projet', picture: 'https://picsum.photos/id/101/900/500?blur=10', title:'projet 1',produit:'Produit 1'},
    {random: 'projet', picture: 'https://picsum.photos/seed/picsum/900/500?blur=10', title:'projet 2',produit:'Produit 2'},
    {random: 'projet ', picture: 'https://picsum.photos/id/870/900/500?grayscale&blur=10', title:'projet 3',produit:'Produit 3'},
    {random: 'projet ', picture: 'https://picsum.photos/id/984/900/500?blur=10', title:'projet 4',produit:'Produit 4'},
  ];
}

changemetaBiens(image_url_biens:any):void{

  this.titleService.setTitle("Boutique");
  this.meta.updateTag({ property: 'og:url', content:'https://tunimmob.com/agency/'+this.idAgency});
  this.meta.updateTag({ property: 'og:title', content:"Boutique " });
  this.meta.updateTag({ property: 'og:image', content: image_url_biens });
  this.meta.updateTag({ property: 'og:description', content:  "Boutique description  "});
}
goToLink() {
  window.open(this.Agency.website_url, '_blank');
}
backClicked() {
  this._location.back();
}

}
