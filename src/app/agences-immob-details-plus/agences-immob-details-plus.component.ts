import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AgenciesService } from '../services/agencies/agencies.service';
import {Location} from '@angular/common';
import { ProjetsService } from '../services/projets/projets.service';
import { AgenceImmobilieresService } from '../services/agence-immob/agence-immobilieres.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ThemePalette } from '@angular/material/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-agences-immob-details-plus',
  templateUrl: './agences-immob-details-plus.component.html',
  styleUrls: ['./agences-immob-details-plus.component.css'],
  styles: [`
  .star {
    font-size: 1.5rem;
    color: #d7d730;
    
  }
`]
})
export class AgencesImmobDetailsPlusComponent implements OnInit {

  @ViewChild("myElem") MyProp: ElementRef;

  public idAgency: any
  public Agency: any
  public AllAgency:any
  public idBiens:any
  public Biens:any
  public webSite:any
  public AllBiens:any
  public idPiece:any
  public Piece:any
  urlSafe:SafeResourceUrl;
  title = 'app';
  navLinks: any[];
  activeLinkIndex = -1;
  FormData: FormGroup;


  constructor(private activatedRoute: ActivatedRoute,
    private agenceImmobService:AgenceImmobilieresService,
    private agencieService:AgenciesService,
    private sanitizer:DomSanitizer,
    private _location: Location,
    private modalService: NgbModal,
    private router: Router,
    private builder: FormBuilder,) { 
      this.navLinks = [
        {
            label: 'TabTest1',
            link: '/tabtest1',
            index: 0
        }, {
            label: 'Tab Test2',
            link: '/tabtest2',
            index: 1
        }, {
            label: 'Tab Test3',
            link: '/tabtest3',
            index: 2
        }, 
    ];
    }

    openVerticallyCentered(content) {
      this.modalService.open(content, { centered: true });
    }

  ngOnInit(): void {

    this.FormData = this.builder.group({
      Nom: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      description: new FormControl('', [Validators.required]),
    });
    
    this.agencieService.getAllAgencies().subscribe(data => {
      this.AllAgency = data;
      console.log(data)
      //Video_url
      this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.AllAgency.videoUrl);
    
    })

    this.agenceImmobService.getListBiens().subscribe(data => {
      this.AllBiens = data;
      console.log(data)
    })

    this.idBiens= this.activatedRoute.snapshot.paramMap.get('id')
    
    this.agenceImmobService.getBiensById(this.idBiens).subscribe(data => {
      console.log(data)
      this.Biens = data;
      
      // for(let categorie of this.Biens?.sous_biens){
      //   this.webSite = categorie.website
      //   console.log(this.webSite)
      // }
      // this.agenceImmobService.getListBiens().subscribe(data => {
      //   this.AllBiens = data;
      //   console.log(this.AllBiens)
      // })

    });
    this.idAgency= this.activatedRoute.snapshot.paramMap.get('id')
    
    this.agencieService.getAgencieById(this.idAgency).subscribe(data => {
      console.log(data)
      this.Agency = data;
    console.log(this.Agency.role)
    }) 
   
 
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
    
  
 

  goToLink() {
    window.open(this.webSite);
  }
  backClicked() {
    this._location.back();
   
  }
  
  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;

  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }

  addLink() {
    this.links.push(`Link ${this.links.length + 1}`);
  }

  }
  

