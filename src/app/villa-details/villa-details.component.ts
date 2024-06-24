import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Renderer2,
  HostListener,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AgenciesService } from '../services/agencies/agencies.service';
import { Location } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VillaDetailsServiceService } from './villa-details-service.service';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { filter } from 'rxjs';
import { ProjetsService } from '../services/projets/projets.service';
import { SharedAgenceImmobilierService } from '../services/shared-agence-immobilier.service';

@Component({
  selector: 'app-villa-details',
  templateUrl: './villa-details.component.html',
  styleUrls: ['./villa-details.component.css'],
})
export class VillaDetailsComponent implements OnInit {
  isDesktop: boolean = true;
  @ViewChild('myElem') MyProp: ElementRef;
  public idPiece: any;
  public Piece: any;
  public idAgency: any;
  public Agency: any;
  public idProjet: any;
  public Projet: any;
  public testPieceName: any;
  public testPieceName2: any;
  public okProjet: boolean = true;
  urlSafe: SafeResourceUrl;

  images!: any[];
  public allProject: any;

  responsiveOptions: any[] = [
    {
      breakpoint: '1192px',
      numVisible: 3,
    },
    {
      breakpoint: '700px',
      numVisible: 1,
    },
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
  foundAgency: any;
  AgencyBaniere: any;
  ProduitVendu: any;
  facebook_url: any;
  website_url: any;
  idVilla: any;
  IDAgency: any;
  mobile_apps: any;
  constructor(
    private projetService: ProjetsService,
    private agencieService: AgenciesService,
    private activatedRoute: ActivatedRoute,
    private _location: Location,
    private router: Router,
    private sanitizer: DomSanitizer,
    private renderer: Renderer2,
    private el: ElementRef,
    private modalService: NgbModal,
    private sharedSevice: SharedAgenceImmobilierService,

    private emailService: VillaDetailsServiceService
  ) {}

  public email_promoteur: String = 'dcgenerale@gmail.com';

  ngOnInit(): void {
    this.idVilla = this.sharedSevice.getIdAgency();

    this.agencieService.getAgencieById(this.idVilla).subscribe((data) => {
      this.Agency = data;
      console.log('getAgencieById', this.Agency);
      this.mobile_apps = this.Agency.mobile_apps[0]?.mobile_cover_image_url;

      this.ProjetEnCours = this.Agency?.projets.filter(
        (project) =>
          project.status === 'EN COURS' || project.status === 'EN COURS '
      );
      this.ProjetDispo = this.Agency?.projets.filter(
        (project) => project.status === 'DISPONIBLE'
      );
    }),
      this.router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => {
          // Scroll to the top of the page
          window.scrollTo(0, 0);
        });

    this.projetService.getListProjet().subscribe((data: any) => {
      this.allProject = data;
      // console.log(this.allProject)
      for (let piece of this.allProject) {
        this.testPieceName = piece?.categoryList;
        // console.log(this.testPieceName)

        // this.testpiecess(this.testPieceName2,this.testPieceName)
      }
    });
    this.idProjet = this.activatedRoute.snapshot.paramMap.get('id');

    this.projetService.getProjetById(this.idProjet).subscribe((data) => {
      this.Projet = data;
      this.AgencyProjet = this.Projet.agencyName;
      console.log('projet', this.Projet);
      this.email_promoteur = this.Projet.emailCommercial;

      //Video_Url
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.Projet.videoUrlProjet
      );
    });

    this.agencieService.getAllAgencies().subscribe((data) => {
      this.Agency = data;
    });
    this.idPiece = this.activatedRoute.snapshot.paramMap.get('id');

    this.projetService.getPieceById(this.idPiece).subscribe((data) => {
      console.log(data);
      this.Piece = data;
      this.testPieceName2 = this.Piece.projetName;
      // this.testpiecess(this.testPieceName2, this.testPieceName)
    });

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
  // testpiecess(testPieceName2: any, testPieceName: any): void {
  //   if (testPieceName2 === testPieceName) {
  //     console.log("ok", testPieceName2, "=", testPieceName)
  //     this.okProjet
  //   } else
  //     console.log("non", testPieceName2, "#", testPieceName)
  // }
  backClicked() {
    this._location.back();
  }

  email = {
    from: '',
    to: this.email_promoteur,
    subject: '',
    body: '',
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
        body: this.email.body,
      };

      if (this.email.from) {
        emailData.body += `\nContact the sender email At:${this.email.from}`;
        this.sendingEmail = true;
        console.log('Email Data:', emailData);

        this.emailService
          .sendEmail(emailData)
          .subscribe(
            (response) => {
              console.log('Email Sent Successfully:', response);
              this.resetForm();
            },
            (error) => {
              console.error('Email Sending Failed:', error);
            }
          )
          .add(() => {
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
