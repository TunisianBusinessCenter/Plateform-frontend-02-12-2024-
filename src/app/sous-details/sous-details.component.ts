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
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { filter } from 'rxjs';
import { ProjetsService } from '../services/projets/projets.service';
import { SharedAgenceImmobilierService } from '../services/shared-agence-immobilier.service';
import { MatTabGroup } from '@angular/material/tabs';
import Swal from "sweetalert2";
import { PromoteurImmobiliersService } from '../agence/promoteur-immobiliers/promoteur-immobiliers.service';
import { VillaDetailsServiceService } from '../villa-details/villa-details-service.service';

@Component({
  selector: 'app-sous-details',
  templateUrl: './sous-details.component.html',
  styleUrls: ['./sous-details.component.css']
})
export class SousDetailsComponent implements OnInit {

  isDesktop: boolean = true;
  @ViewChild('myElem') MyProp: ElementRef;
  public idPiece: any;
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
      numVisible: 4
    },
    {
      breakpoint: '1000px',
      numVisible: 3
    },
    {
      breakpoint: '700px',
      numVisible: 1
    },
    {
      breakpoint: '510px',
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
  foundAgency: any;
  AgencyBaniere: any;
  ProduitVendu: any;
  facebook_url: any;
  website_url: any;
  idVilla: any;
  IDAgency: any;
  mobile_apps: any;
  filteredAgencies: any;
  idAgencyMenu: any;
  ProjetPiece: any;
  selectedCategory: any;
  @ViewChild('tabGroup') tabGroup: MatTabGroup;
  AgencyEmail: any;
  isLoading: boolean = true;
  pieceDetails: any;
  id: string;
  selectedPieceName: any;
  selectedPieceId: any;

  constructor(
    private http:HttpClient,
    private projetService: ProjetsService,
    private agencieService: AgenciesService,
    private activatedRoute: ActivatedRoute,
    private _location: Location,
    private router: Router,
    private sanitizer: DomSanitizer,
    private renderer: Renderer2,
    private el: ElementRef,
    private modalService: NgbModal,
    private sharedSevice: PromoteurImmobiliersService,
    private emailService: VillaDetailsServiceService,
     
  ) { }

  public email_promoteur: String = 'dcgenerale@gmail.com';
  ngAfterViewInit() {
    

    //   .log(this.tabGroup);  
    if (this.tabGroup) {
      this.tabGroup.selectedIndex = this.selectedIndex;
    }    
    

  }
  ngOnInit(): void {
    
// Simulate loading delay
setTimeout(() => {
  this.isLoading = false;
}, 2000); // 2 seconds delay
    // Listen for router events to scroll to top
   
    this.idVilla = this.sharedSevice.getIdAgency();

    this.agencieService.getAgencieById(this.idVilla).subscribe((data:any) => {
      this.Agency = data;

      this.AgencyEmail = this.Agency.email;
      this.setDataAgency();

      // console.log('getAgencieById', this.Agency);
      this.mobile_apps = this.Agency.mobile_apps[0]?.mobile_cover_image_url;

      this.ProjetEnCours = this.Agency?.projets.filter(
        (project) =>
          project.status === 'EN COURS' || project.status === 'EN COURS '
      );
      this.ProjetDispo = this.Agency?.projets.filter(
        (project) => project.status === 'DISPONIBLE'
        //  || 'Diponible'
      );
    }),


     
    // this.idProjet = this.activatedRoute.snapshot.paramMap.get('id');
    this.activatedRoute.paramMap.subscribe((params) => {
      this.idPiece = params.get('id');
      this.idProjet = params.get('idProjet');
      this.projetService.getProjetById(this.idProjet).subscribe((data) => {
        this.Projet = data;
        this.ProjetPiece = this.Projet?.pieces
        this.selectedPieceId = this.ProjetPiece[0]?.id;  // Set default to first item


        this.AgencyProjet = this.Projet.agencyName;
        console.log('projet', this.Projet);
        this.email_promoteur = this.Projet.emailCommercial;
  
        //Video_Url
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.Projet.videoUrlProjet
        );
      });
      // Load project data
      // this.loadProjectData(this.idProjet);
      // // Load piece data
      // this.loadPieceData(this.idPiece);
    });

   

    // this.agencieService.getAllAgencies().subscribe((data) => {
    //   this.Agency = data;
    // });

    this.projetService.getPieceById(this.idPiece).subscribe((data:any) => {
      this.pieceDetails = data;
      console.log(this.piece)
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
        // console.log('Email Data:', emailData);

        this.emailService
          .sendEmail(emailData)
          .subscribe(
            (response) => {
              // console.log('Email Sent Successfully:', response);
              this.resetForm();
            },
            (error) => {
              // console.error('Email Sending Failed:', error);
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
  getAgency() {
    this.agencieService.getAllAgencies().subscribe((data: any) => {
      const filteredAgencies = data.filter(agency => agency.name === this.AgencyProjet);
      // Handle the filtered agencies as needed, for example:
      // If you want to store it in a class variable
      this.filteredAgencies = filteredAgencies[0]?.id
      this.idAgencyMenu = this.filteredAgencies
      // console.log(this.idAgencyMenu);
      this.router.navigate(['/agency', this.idAgencyMenu]);

    });
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
  selectedIndex = 0;

  selectTab(index: number) {
    // console.log(this.tabGroup);  
    this.selectedIndex = index;
    if (this.tabGroup) {
      this.tabGroup.selectedIndex = index;
    }
  }
  onSelectChange(event: Event): void {
    const selectedId = (event.target as HTMLSelectElement).value;
    this.selectedPieceId = selectedId;  // Update the selectedPieceId immediately
    
    if (selectedId) {
      // Find the piece by ID
      const selectedPiece = this.ProjetPiece.find(piece => piece.id === +selectedId);
  
      if (selectedPiece) {
        // Update the selected piece name and handle further logic
        this.selectedPieceName = selectedPiece.name;
        this.navigateAndRefresh(+selectedId, this.Projet.id);
      }
    }
  }
  



  onTabChange(event: any) {
    this.selectedIndex = event.index;
  }
  onDropdownChange(event: Event) {
    const selectedPieceId = (event.target as HTMLSelectElement).value;
    if (selectedPieceId) {
        this.navigateAndRefresh(this.idPiece, this.Projet.id);
    }
}

  photos: string[] = [
    'assets/images/gray.png',
    'assets/images/gray.png',
    'assets/images/gray.png',
    'assets/images/gray.png'  
  ];
  piece: string[] = [
    'assets/images/gray.png',
    'assets/images/gray.png',
    'assets/images/gray.png',
    'assets/images/gray.png'  
  ];
  
  setDataAgency () {
    let dataAgency = this.Agency
    //   .log(dataAgency,this.Agency)
    this.agencieService.setSharedVariable(dataAgency)
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
          //   .log('Email sent successfully!', response);
          
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
          //   .error('Error sending email', error);
        }
      });
  }
  
  isValidEmail(email: string): boolean {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
  }







formatAgencyName(name: string): string {
  if (!name) {
      return ''; // Return an empty string or handle it in another appropriate way
  }
  return name.replace(/\s+/g, '-');
}
navigateAndRefresh(idPiece,idProjet) {
  // Extract the id from the project object

  // Navigate to the specified route
  
  this.router.navigate(['/sous-details', idPiece,idProjet])
    .then(() => {
      // If navigation is successful, call the refresh function
      this.refresh();
    });

}
refresh(): void {
  this.router.navigateByUrl("/refreshPromo", { skipLocationChange: true }).then(() => {
    // console.log(decodeURI(this._location.path()));
    this.router.navigate([decodeURI(this._location.path())]);

    // Set timeout to call the refresh function again after 2 seconds

  });
}
}
