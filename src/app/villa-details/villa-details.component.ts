import { AfterViewInit, Component, ElementRef, OnInit, ViewChild,Renderer2,HostListener } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AgenciesService } from '../services/agencies/agencies.service';
import { ProjetsService } from '../services/projets/projets.service';
import {Location} from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';  
import { VillaDetailsServiceService } from './villa-details-service.service';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-villa-details',
  templateUrl: './villa-details.component.html',
  styleUrls: ['./villa-details.component.css']
})
export class VillaDetailsComponent implements OnInit {
  isDesktop: boolean = true;
  @ViewChild("myElem") MyProp: ElementRef;
  public idPiece: any
  public Piece:any
  public idAgency: any
  public Agency: any
  public idProjet: any
  public Projet: any
  public testPieceName: any
  public testPieceName2: any
  public okProjet:boolean=true
  urlSafe:SafeResourceUrl;






  images!: any[];
  public allProject:any

  responsiveOptions:any[] = [
      {
          breakpoint: '1192px',
          numVisible: 3
      },
      {
          breakpoint: '700px',
          numVisible: 1
      }
  ];
  AgencyProjet: Object;
  agencyId: any;
  description: any;
  logo_url: any;
  ProjetEnCours: any;
  check: any;
  isValid: boolean;
  ProjetId: any;
  ProjetDispo: any;
  routerIdLink: any;
  foundAgency: any;
  AgencyBaniere: any;
  ProduitVendu: any;
  facebook_url: any;
  website_url: any;
  constructor(private projetService:ProjetsService,
    private agencieService:AgenciesService,
    private activatedRoute: ActivatedRoute,
    private _location: Location,
    private router:Router,
    private sanitizer:DomSanitizer,
    private renderer: Renderer2, 
    private el: ElementRef,
    private modalService: NgbModal,

    private emailService : VillaDetailsServiceService) { }

    public email_promoteur: String ='' ;

  ngOnInit(): void {

    this.agencieService.getAllAgencies().subscribe((data: any[]) => {
      // Assuming data is an array of agencies
      console.log('foundAgency :',data)
      let foundAgency = data.find(agency => agency.name === this.AgencyProjet);
      this.foundAgency=foundAgency?.mobile_apps[0]
      this.AgencyBaniere = this.foundAgency?.mobile_cover_image_url;
      console.log("AgencyBaniere", this.AgencyBaniere)
      console.log('foundAgency 1:',foundAgency)

      if (foundAgency) {
        this.agencyId = foundAgency.id;
        this.description = foundAgency.description
        this.logo_url = foundAgency.logo_url
        this.facebook_url= foundAgency.facebook_url
        this.website_url= foundAgency.website_url

        // this.ProjetEnCours = foundAgency.description
        this.ProjetEnCours = foundAgency?.projets.filter(project => project.status === 'EN COURS' || project.status === 'EN COURS ');
        this.check =this.ProjetEnCours
      
        this.ProjetId=this.ProjetEnCours.id
        console.log('cours',this.ProjetEnCours)
        this.ProjetDispo = foundAgency?.projets.filter(project => project.status === 'DISPONIBLE' || project.status === 'Disponible');
        this.ProduitVendu = foundAgency?.projets.filter(project => project.status === 'VENDU');

        console.log('dispo',this.ProjetDispo)
        console.log("Found Agency", this.agencyId);
        this.routerIdLink = this.agencyId;
      } else {
        console.log("Agency not found");
        // Handle the case when the agency is not found
      }
    });














    this.projetService.getListProjet().subscribe((data:any) => {
      this.allProject = data
      console.log(this.allProject)
      for(let piece of this.allProject){
        
        this.testPieceName = piece?.categoryList
      console.log(this.testPieceName)
      
      // this.testpiecess(this.testPieceName2,this.testPieceName)
      }
      
    })
    this.idProjet = this.activatedRoute.snapshot.paramMap.get('id')

    this.projetService.getProjetById(this.idProjet).subscribe(data => {

      this.Projet = data;
      this.AgencyProjet = this.Projet.agencyName;
      console.log("projet",this.Projet);
      this.email_promoteur= this.Projet.emailCommercial ;
      console.log("email promoteur",this.email_promoteur);

      //Video_Url
      this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.Projet.videoUrlProjet);
    })  
        
    this.agencieService.getAllAgencies().subscribe(data => {
      this.Agency = data
      console.log(data)


    })
    this.idPiece = this.activatedRoute.snapshot.paramMap.get('id')

    this.projetService.getPieceById(this.idPiece).subscribe(data => {
      console.log(data)
      this.Piece = data;
      this.testPieceName2=this.Piece.projetName
      console.log(this.testPieceName2)
      this.testpiecess(this.testPieceName2,this.testPieceName)

    })

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
  testpiecess(testPieceName2:any,testPieceName:any):void{
  if(testPieceName2===testPieceName){
    console.log("ok",testPieceName2,"=",testPieceName)
    this.okProjet
  }else
  console.log("non",testPieceName2,"#",testPieceName)
  }
  backClicked() {
    this._location.back();
  }

  email = {
    from: '',
    to: this.email_promoteur,
    subject: '',
    body: ''
  };

  sendingEmail = false;


  resetForm() {
    this.email.from = '';
    this.email.subject = '';
    this.email.body = '';
  }

  sendEmail() {
    if (!this.sendingEmail) {
      const emailData = {
        from: this.email.from,
        to: this.email.to,
        subject: this.email.subject,
        body: this.email.body
      };

      if (this.email.from) {
        emailData.body += `\nContact the sender email At:${this.email.from}`;
        this.sendingEmail = true;
        console.log('Email Data:', emailData);


        this.emailService.sendEmail(emailData).subscribe(
          (response) => {
            console.log('Email Sent Successfully:', response);
            this.resetForm();
          },
          (error) => {
            console.error('Email Sending Failed:', error);
          }
        ).add(() => {
          this.sendingEmail = false;
        });
      }
    }
  }
  displayMaximizable: boolean;
  showMaximizableDialog() {
    this.displayMaximizable = true;
    
  }
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
    }
}

