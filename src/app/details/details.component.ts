import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AgenciesService } from '../services/agencies/agencies.service';
import { Location } from '@angular/common';
import { SelectItem } from 'primeng/api';
import { VisitorCounterService } from '../services/VisitorCounter/visitor-counter.service';
import * as moment from 'moment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { filter } from 'rxjs';
import { ProjetsService } from '../services/projets/projets.service';
import { SharedAgenceImmobilierService } from '../services/shared-agence-immobilier.service';

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
  displayMaximizable1: boolean;
  idForAgency: any;
  IDAgency: any;
  mobile_apps: any;
  constructor(private activatedRoute: ActivatedRoute,
    private agencieService: AgenciesService,
    private sharedAgency:SharedAgenceImmobilierService,
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
this.idForAgency =this.sharedAgency.getIdAgency()

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        console.log('NavigationEnd event:', event);
        // Scroll to the top of the page
        window.scrollTo(0, 0);
      });

    // Rest of your initialization code...

    this.agencieService.getAgencieById(this.idForAgency).subscribe((data) => {
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

   
    

    //   this.agencieService.getAgencieTunis().subscribe((images: any) => {

    //     this.images = images;
    // })
    this.idProjet = this.activatedRoute.snapshot.paramMap.get('id')

    this.projetService.getProjetById(this.idProjet).subscribe(data => {
      console.log(data)
      this.Projet = data;
      this.NameAgency = this.Projet.agencyName
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
    this.displayMaximizable1 = true;


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

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }


  displayDialog: boolean = false;
  selectedImage: string = '';
  openImageInDialog(imageUrl: string): void {

    if (this.isMobile()) {
      this.selectedImage = imageUrl;
      this.displayDialog = true;
      console.log(this.selectedImage, imageUrl)
    }
  }
  private isMobile(): boolean {
    // Set a threshold for mobile screen width (adjust as needed)
    const mobileScreenWidth = 768;
    return window.innerWidth < mobileScreenWidth;
  }
  navigateAndRefresh(project: any) {
    // Extract the id from the project object
    const projectId = project.id;

    // Navigate to the specified route
   
    this.router.navigate(['/details', projectId])
      .then(() => {
        // If navigation is successful, call the refresh function
        this.refresh();
      });
  }
  refresh(): void {
    this.router.navigateByUrl("/refreshPromo", { skipLocationChange: true }).then(() => {
      console.log(decodeURI(this._location.path()));
      this.router.navigate([decodeURI(this._location.path())]);

      // Set timeout to call the refresh function again after 2 seconds

    });
  }
  
}  
