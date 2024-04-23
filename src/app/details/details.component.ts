import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AgenciesService } from '../services/agencies/agencies.service';
import { ProjetsService } from '../services/projets/projets.service';
import { Location } from '@angular/common';
import { SelectItem } from 'primeng/api';
import { VisitorCounterService } from '../services/VisitorCounter/visitor-counter.service';
import * as moment from 'moment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

interface Duree {
  name: string;
  code: string;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  styles: [`
      :host ::ng-deep .p-button {
          margin: 0 .5rem 0 0;
          min-width: 10rem;
      }
      p {
          margin: 0;
      }
      .confirmation-content {
          display: flex;
          align-items: center;
          justify-content: center;
      }
      :host ::ng-deep .p-dialog .p-button {
          min-width: 6rem;
      }
  `]
})
export class DetailsComponent implements OnInit {

  public idProjet: any
  public Projet: any
  images!: any[]
  agenciesProjet: any
  public idPiece: any
  public Piece: any
  public idAgency: any
  public Agency: any
  displayMaximizable: boolean;
  displayMaximizabled1: boolean;
  contactText = "";
  numText = "";
  @HostListener('window:resize', ['$event'])

  responsiveOptions: any[] = [
    {
      breakpoint: '1192px',
      numVisible: 4
    },
    {
      breakpoint: '1000px',
      numVisible: 3
    },
    {
      breakpoint: '700px',
      numVisible: 3
    },
    {
      breakpoint: '510px',
      numVisible: 3
    }
  ];
  durees: Duree[];
  items: SelectItem[];
  item: string;
  visitorCount: number;
  routeId: string;
  isValid: boolean; // Do not initialize here
 
  agencyId: any;
  NameAgency: any;
  AgencyID: any;
  routerIdLink: any;
  DetailsAgency: void;
  description: any;
  ProjetRealise: any;
  ProjetEnCours: any;
  logo_url: any;
  ProjetDisponoble: any;
  ProjetDispo: any;
  ProjetId: any;
  check: any;
  foundAgency: any;
  AgencyBaniere: any;
  ProduitVendu: any;
  website_url: any;
  facebook_url: any;
  constructor(private activatedRoute: ActivatedRoute,
    private agencieService: AgenciesService,
    private projetService: ProjetsService,
    private _location: Location,
    private router: Router,
    private modalService: NgbModal,
    private visitorCounterService: VisitorCounterService) {
    this.items = [];
    for (let i = 0; i < 10000; i++) {
      this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
    }
    this.durees = [
      { name: '84 Moin', code: '84 Moin' },
      { name: '120 Moin', code: '120 Moin' },
      { name: '180 Moin', code: '180 Moin' },
      { name: '240 Moin', code: '240 Moin' },
    ];
  }

  ngOnInit(): void {


    this.idAgency = this.activatedRoute.snapshot.paramMap.get('id')

    this.agencieService.getAgencieById(this.routerIdLink).subscribe(data => {
      this.Agency = data;
    
    }),
    this.agencieService.getAllAgencies().subscribe((data: any[]) => {
      console.log('foundAgency : s',data)
      let foundAgency = data.find(agency => agency.name === this.NameAgency);
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
        this.facebook_url= foundAgency.facebook_url
        this.website_url= foundAgency.website_url
        // this.ProjetEnCours = foundAgency.description
        this.ProjetEnCours = foundAgency?.projets.filter(project => project.status === 'EN COURS' || project.status === 'EN COURS ');
        this.check =this.ProjetEnCours
        console.log('disponible',this.check)
        if (this.check) {
          this.isValid= true; // Initialize it to false or true based on your initial condition
          console.log('disponible',this.isValid)
        } 
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
  
    //   this.agencieService.getAgencieTunis().subscribe((images: any) => {

    //     this.images = images;
    // })
    this.idProjet = this.activatedRoute.snapshot.paramMap.get('id')

    this.projetService.getProjetById(this.idProjet).subscribe(data => {
      console.log(data)
      this.Projet = data;
      this.NameAgency =this.Projet.agencyName
    })
    this.projetService.getListProjet().subscribe((data) => {
      this.agenciesProjet = data;
    });

    this.idPiece = this.activatedRoute.snapshot.paramMap.get('category')

    this.projetService.getPieceById(this.idPiece).subscribe(data => {
      console.log(data)
      this.Piece = data;

    });
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

    this.routeId = this.activatedRoute.snapshot.params['id'];

    this.visitorCount = this.visitorCounterService.getVisitorCount(this.routeId);
  }

  backClicked() {
    this._location.back();
  }
  showMaximizableDialog() {
    this.displayMaximizable = true;
  

  }
  showMaximizableDialog1() {
    this.displayMaximizabled1 = true;
  

  }


  // getDateDifference() {
  //   let now = moment();
  //   let publication = moment(this.Projet?.createdAt, "DD/MM/YYYY HH:mm:ss");
  //   let diffInMonths = now.diff(publication, 'months');
  //   return `il y a ${diffInMonths} mois`;  
  // }
  getDateDifference() {
    let now = moment();
    let publication = moment(this.Projet?.createdAt, "DD/MM/YYYY HH:mm:ss");
    let diff = now.diff(publication);
    let duration = moment.duration(diff);
    if (duration.asHours() < 24) {
      return `il y a ${duration.hours()} heures`;
    } else if (duration.asDays() < 30) {
      return `il y a ${duration.days()} jours`;
    } else if (duration.asMonths() < 12) {
      return `il y a ${duration.months()} mois`;
    } else {
      return `il y a ${duration.years()} ans`;
    }
  }
  showSubMenu: boolean = false;

    toggleSubMenu() {
        this.showSubMenu = !this.showSubMenu;
    }
    refreshPage(): void {
      // Add a delay of 2 seconds (2000 milliseconds) before reloading the page
      setTimeout(() => {
        location.reload();
      }, 1000);
    }
    openVerticallyCentered(content) {
      this.modalService.open(content, { centered: true });
    }


    displayDialog: boolean = false;
    selectedImage: string = '';
    openImageInDialog(imageUrl: string): void {
    
      if (this.isMobile()) {
        this.selectedImage = imageUrl;
        this.displayDialog = true;
        console.log(this.selectedImage,imageUrl)
      }
    }
    private isMobile(): boolean {
      // Set a threshold for mobile screen width (adjust as needed)
      const mobileScreenWidth = 768;
      return window.innerWidth < mobileScreenWidth;
  }
  }  
