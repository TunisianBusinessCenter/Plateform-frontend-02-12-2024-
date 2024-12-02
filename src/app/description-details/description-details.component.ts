import { Component, ElementRef, Input, OnInit, ViewChild,Renderer2,HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../services/contact/contact.service';
import { AgenciesService } from '../services/agencies/agencies.service';
import { ProduitsService } from '../services/produits/produits.service';
import { SharedAgenceImmobilierService } from '../services/shared-agence-immobilier.service';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { AgenceMatComponent } from '../agence/agence-mat/agence-mat.component';
import { AgenceMatService } from '../agence/agence-mat/agence-mat.service';



@Component({
  selector: 'app-description-details',
  templateUrl: './description-details.component.html',
  styleUrls: ['./description-details.component.css']
})
export class DescriptionDetailsComponent implements OnInit {
  isDesktop: boolean = true;
  @ViewChild("myElem") MyProp: ElementRef;

  public idSousCategorie: any
  public SousCategorie: any
  public idProduit: any
  public Produit: any
  public produit: any
  private contact: ContactService
  public Agency: any
  contactText = "";
  numText = "";
  dt: any;
  dataDisplay: any;
  FormData: FormGroup;
  firstId: any;
  Projet: any;
  NameAgency: any;
  agencyName: any;
  foundAgency: any;
  AgencyBaniere: any;
  agencyId: any;
  description: any;
  logo_url: any;
  ProduitEnCours: any;
  ProjetId: any;
  ProjetDispo: any;
  routerIdLink: any;
  idAgency: any;
  idAgencyy: any;
  AgencyEmail: any;
  private modalRef: NgbModalRef | null = null; // Initialize as null
  websiteRouter: any;
  pdf: any;

  constructor(private activatedRoute: ActivatedRoute,
    private produitService: ProduitsService,
    private _location: Location,
    private router: Router,
    private modalService: NgbModal,
    private builder: FormBuilder,
    private agencieService: AgenciesService,
    private renderer: Renderer2, private el: ElementRef,
    private projetService:ProduitsService,
    private sharedService:AgenceMatService,
    private http:HttpClient

    ) { }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  ngOnInit(): void {
    
    this.idAgencyy = this.sharedService.getIdAgency()
    this.agencieService.getAgencieById(this.idAgencyy).subscribe((data:any) => {
      // console.log(data)
      this.Agency=data
      
      this.AgencyEmail =this.Agency.email
      this.description=data?.description
      this.logo_url=data?.logo_url
      this.ProduitEnCours = data?.produits;
      this.setSharedVariable()
    })
    this.agencieService.getAllMateriaux().subscribe((data: any[]) => {
      // Assuming data is an array of agencies
      let foundAgency = data.find(agency => agency.name === this.agencyName);
      this.foundAgency=foundAgency?.mobile_apps[0]
      this.AgencyBaniere = this.foundAgency?.mobile_cover_image_url;

      this.agencieService.setAgencyBaniere(this.AgencyBaniere);

      if (foundAgency) {
        this.agencyId = foundAgency.id;
        this.description = foundAgency.description
        this.logo_url = foundAgency.logo_url

        // this.ProduitEnCours = foundAgency.description
        this.ProduitEnCours = foundAgency?.produits
      
     
        this.ProjetId=this.ProduitEnCours.id
        this.ProjetDispo = foundAgency?.projets.filter(project => project.status === 'DISPONIBLE');
 
        this.routerIdLink = this.agencyId;
      } else {
        // Handle the case when the agency is not found
      }
    });
    this.idSousCategorie = this.activatedRoute.snapshot.paramMap.get('id')

    this.produitService.getSousCategorieById(this.idSousCategorie).subscribe(Response => {
      this.SousCategorie = Response;
      this.websiteRouter =this.SousCategorie.website
      console.log("pdf",this.SousCategorie.website)


    });

    this.activatedRoute.params.subscribe(params => {
      // Access the individual parameters
      this.firstId = params['id1'];
    
      // Do something with the ids
    });
    this.projetService.getProduitById(this.firstId).subscribe((data:any) => {
      this.agencyName = data.agencyName;
      this.pdf=data.promoTitle
      // this.NameAgency =this.Projet.agencyName
    })
    this.FormData = this.builder.group({
      Nom: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      description: new FormControl('', [Validators.required]),
    });

 





 


    ///methode1:
    // this.router.events.subscribe((evt) => {
    //   if (!(evt instanceof NavigationEnd)) {
    //       return;
    //   }
    //    window.scrollTo({ top: 200, behavior: 'auto' }); 
    //    });
    //methode2:
    // const element = document.getElementById("box");
    // element.scrollIntoView({ block: "start", behavior: "auto" });
    this.checkScreenWidth(); 
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidth();
  }
  
  checkScreenWidth() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 900) {
      this.isDesktop = false;
    } else {
      this.isDesktop = true;
    }
  }
  onSubmit(FormData) {
    this.contact.PostMessage(FormData)
      .subscribe(response => {
        location.href = 'https://mailthis.to/confirm'
      }, error => {
      })
  }
  backClicked() {
    this._location.back();
  }
  displayMaximizable: boolean;
  showMaximizableDialog() {
    this.displayMaximizable = true;
  }
  isImageLoading: boolean = true;

  // You may need to include logic to set SousCategorie in your component

  onImageLoad(): void {
      this.isImageLoading = false;
  }

  onImageError(): void {
      this.isImageLoading = false;
  }
  setSharedVariable() {
    let data = this.Agency;
    this.agencieService.setSharedVariable(data);
  
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
          confirmButtonText: 'Fermer',
          timer: 1000,  // Closes after 3 seconds
          timerProgressBar: true  // Shows a progress bar
        });
        
        // Reset form fields
        this.emailSource = '';
        this.emailDest = '';
        this.subject = '';
        this.message = '';
        this.closeModal()
      },
      error: (error) => {
        Swal.fire({
          title: 'Error!',
          text: "Une erreur s'est produite lors de l'envoi de l'email.",
          icon: 'error',
          confirmButtonText: 'Fermer'
        });
      }
    });
}

isValidEmail(email: string): boolean {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email);
}
formatAgencyName(name: string): string {
  return name?.replace(/\s+/g, '-');
}
openModal(content: any) {
  this.modalRef = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
}

closeModal() {
  if (this.modalRef) {
    this.modalRef.close();
    this.modalRef = null; // Reset after closing
    // console.log('Modal closed successfully.');
  } else {
    // console.log('Modal reference is undefined; modal might not have been opened.');
  }
}

handleDownload() {
  // Extract the FILE_ID from the given URL
  const match = this.pdf.match(/\/d\/(.+?)\/view/);
  if (match && match[1]) {
    const fileId = match[1];
    // Construct the direct download link
    const directDownloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;
    // Redirect to the direct download link

    // this.router.navigate([this.websiteRouter]);

    window.location.href = directDownloadLink;
  } else {
    console.error('Invalid Google Drive URL');
  }
}

}
