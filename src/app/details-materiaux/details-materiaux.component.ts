import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AgenciesService } from '../services/agencies/agencies.service';
import { ProduitsService } from '../services/produits/produits.service';
import {Location} from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


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
  @ViewChild("myElem") MyProp: ElementRef;
  
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


  constructor(private activatedRoute: ActivatedRoute,
    private produitService:ProduitsService,
    private agencieService:AgenciesService,
    private _location: Location,
    private router:Router,
    private sanitizer:DomSanitizer
    ) { }

  ngOnInit(): void {
    // this.activatedRoute.parent.params.subscribe(parentParams => {
    //   this.agencyId = parentParams['id'];
    // });
    // this.activatedRoute.params.subscribe(params => {
    //   this.materiauId = params['id'];
    // });

    this.agencieService.getAllMateriaux().subscribe(data => {

      this.AllAgency = data;
      console.log(data)
      this.reverseAg= this.AllAgency.produits.reverse();
    
    })
     
      this.idProduit= this.activatedRoute.snapshot.paramMap.get('id')
      this.produitService.getProduitById(this.idProduit).subscribe(data => {
        this.Produit = data;
        console.log(this.Produit)

           //Video_Url
      this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.Produit.videoUrlProduit);
      

        for(let categorie of this.Produit?.sous_cat){
          this.webSite = categorie.website
          console.log(this.webSite)
        }
        
      });
      this.idSousCategorie= this.activatedRoute.snapshot.paramMap.get('id')
      this.agencieService.getAgencieById(this.idSousCategorie).subscribe(data => {
        console.log(data)
        this.SousCategorie = data;
      })
  ///methode1:
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
       window.scrollTo({ top: 200, behavior: 'auto' }); 
       });
      

    //methode2:
    // const element = document.getElementById("box");
    // element.scrollIntoView({ block: "start", behavior: "auto" });
    }  
   
 
  goToLink() {
    window.open(this.webSite);
    
  }
  backClicked() {
    this._location.back();
  }
 
}