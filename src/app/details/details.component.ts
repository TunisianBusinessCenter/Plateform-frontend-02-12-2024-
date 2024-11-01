import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AgenciesService } from '../services/agencies/agencies.service';
import { Location } from '@angular/common';
import { SelectItem } from 'primeng/api';
import { VisitorCounterService } from '../services/VisitorCounter/visitor-counter.service';
import * as moment from 'moment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { filter, Subscription } from 'rxjs';
import { ProjetsService } from '../services/projets/projets.service';
import { SharedAgenceImmobilierService } from '../services/shared-agence-immobilier.service';
import { TestService } from '../services/test.service';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { PromoteurImmobiliersService } from '../agence/promoteur-immobiliers/promoteur-immobiliers.service';

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
  private routerSubscription: Subscription;

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
  filteredAgencies: any[];
  idAgencyMenu: any[];
  AgencyEmail: any;
  linkedin_url: any;
  instagram_url: any;
  constructor(private activatedRoute: ActivatedRoute,
    private agencieService: AgenciesService,
    private sharedAgency:PromoteurImmobiliersService,
    private projetService: ProjetsService,
    private _location: Location,
    private router: Router,
    private modalService: NgbModal,
    private testVariable:TestService,
    private visitorCounterService: VisitorCounterService,
    private http:HttpClient
  ) {

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


  ngOnDestroy() {
    // Unsubscribe from the router events when the component is destroyed
  }
  ngAfterViewInit() {

    this.setSharedVariable()
  }
  ngOnInit(): void {
    // this.getAgency()

this.idForAgency =this.sharedAgency.getIdAgency()

// console.log(' ForAgency',this.idForAgency)

    // Rest of your initialization code...

    this.agencieService.getAgencieById(this.idForAgency).subscribe(data => {
      this.Agency = data;
      this.facebook_url = this.Agency?.facebook_url
      this.linkedin_url = this.Agency?.linkedin_url
      this.instagram_url = this.Agency?.instagram_url
      this.AgencyEmail = this.Agency.email;

      // console.log('getAgencieById', this.Agency);
      this.mobile_apps = this.Agency.mobile_apps[0]?.mobile_cover_image_url;

      this.ProjetEnCours = this.Agency?.projets.filter(
        (project) =>
          project.status === 'EN COURS' || project.status === 'EN COURS '
      );
      this.ProjetDispo = this.Agency?.projets.filter(
        (project) => project.status === 'DISPONIBLE' || 'Disponible'
        // || 'Disponible'
      );
    
    }),

   
    

    //   this.agencieService.getAgencieTunis().subscribe((images: any) => {

    //     this.images = images;
    // })
    this.idProjet = this.activatedRoute.snapshot.paramMap.get('id')

    this.projetService.getProjetById(this.idProjet).subscribe((data:any) => {
      // console.log (data)
      this.Projet = data;

      this.NameAgency = this.Projet.agencyName
      // console.log(this.NameAgency)
    })
    this.projetService.getListProjet().subscribe((data) => {
      this.agenciesProjet = data;
    });

    this.idPiece = this.activatedRoute.snapshot.paramMap.get('category')

    this.projetService.getPieceById(this.idPiece).subscribe(data => {
      // console.log(data)
      this.Piece = data;

    });
    ///methode1:
   
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
      // console.log(this.selectedImage, imageUrl)
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
  getAgency() {
    this.agencieService.getAllAgencies().subscribe((data: any) => {
      const filteredAgencies = data.filter(agency => agency.name === this.Projet.agencyName);
      if (filteredAgencies.length > 0) {
        this.idAgencyMenu = filteredAgencies[0].id;
        // console.log(this.idAgencyMenu);
        this.router.navigate(['/agency', this.idAgencyMenu]);
      }
    });
  }

  setSharedVariable() {
    let data = this.Agency;
    this.agencieService.setSharedVariable(data);
    // console.log("this data", data); 
    
    //  this.message ="data sended successfully"
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
            confirmButtonText: 'Fermer'
          });
          console.log('Email sent successfully!', response);
          
          // Reset form fields
          this.emailSource = '';
          this.emailDest = '';
          this.subject = '';
          this.message = '';
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















  setVariableTest() {
    let data = this.Agency.name
    this.testVariable.setSharedVariable1(data)
  }
}  


