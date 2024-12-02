import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ProjetsService } from '../services/projets/projets.service';
import {Location} from '@angular/common';
import { AgenceImmobilieresService } from '../services/agence-immob/agence-immobilieres.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../services/contact/contact.service';
import { PrimeNGConfig } from 'primeng-lts/api';
import { ModalDismissReasons, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { SharedAgenceImmobilierService } from '../services/shared-agence-immobilier.service';
import { AgenciesService } from '../services/agencies/agencies.service';
import { MagazineService } from '../services/magazine/magazine.service';
import { MeilleursBiensService } from '../agence/meilleurs-biens/meilleurs-biens.service';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { AgenceImmobService } from '../agence/agence-immob/agence-immob.service';
interface Duree {
  name: string;
  code: string;
}
@Component({
  selector: 'app-details-agence-immobilier',
  templateUrl: './details-agence-immobilier.component.html',
  styleUrls: ['./details-agence-immobilier.component.css']
})
export class DetailsAgenceImmobilierComponent implements OnInit {
  private modalRef: NgbModalRef | null = null; // Initialize as null
  ServicesDivers: any;
  filtredServicesDivers2: any;
  filtredServicesDivers1: any;
  filteredSousServices: any;
  public idProjet:any
  public Projet:any
  public idsousBiens:any
  public sousBiens:any
  FormData: FormGroup;
  closeResult: string;
  biens: any;
  agenceName: any;
  idAgencyMenu: any;
  Magazine: any;
  linkFBook: any;
  firstMagazin: any;
  Agence: any;
  Agency: any;
  categoryList: any;
  sousServices: any;
  BienId: any;
  selectedSousCategorie: any;
  displayMaximizable: boolean;
  displayMaximizable1: boolean;
  durees: Duree[];
  contactText = "";
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
  Bien: any;
  AgencyEmail: any;

  constructor(private biensImoobService:AgenceImmobilieresService,
    private magazineservice: MagazineService,
    private agencieService:AgenciesService,
    private activatedRoute: ActivatedRoute,
    private _location:Location,
    private router:Router,
    private builder: FormBuilder,
    private contact:ContactService,
    private sharedService:SharedAgenceImmobilierService,
    private agenceImmob : AgenceImmobService,
    private primengConfig: PrimeNGConfig,
    private http : HttpClient,
    private modalService: NgbModal) { 

   


















      
    }
    
    openVerticallyCentered(content) {
      this.modalService.open(content, { centered: true });
    }
 
  
    idAgence: any;


  ngOnInit(): void {
    this.magazineservice.getMagazine().subscribe((data: any) => {
      this.Magazine = data.sort((a, b) => {
        // extraire les nombres dans les noms
        const numA = parseInt(a.name.match(/\d+/g)?.[0] || '0');
        const numB = parseInt(b.name.match(/\d+/g)?.[0] || '0');
        // comparer les nombres extraits
        if (numA > numB) {
          return -1;
        } else if (numA < numB) {
          return 1;
        } else {
          return 0;
        }
      });
      for (let linkBook of this.Magazine) {
        if (linkBook.id === 3933) {
          this.linkFBook = linkBook.flip_book_link
       
        }
      }
      this.firstMagazin = this.Magazine[0]
// console.log("magazine text",this.firstMagazin)
    });
    this.idAgence = this.agenceImmob.getIdAgency();
    this.Id()

    this.primengConfig.ripple = true;

    this.FormData = this.builder.group({
      Nom: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      description: new FormControl('', [Validators.required]),
    });
   
    this.idsousBiens= this.activatedRoute.snapshot.paramMap.get('id')
    
    this.biensImoobService.getSousBiensById(this.idsousBiens).subscribe((data:any) => {
        this.sousBiens = data;
        console.log(this.sousBiens)

      this.BienId = data.biens;
      this.categoryList = this.sousBiens.categoryList;
      this.sousServices = this.sousBiens?.imagesList;

      this.filteredSousServices = this.sousServices; // Show all initially
      console.log(this.sousServices)
      // console.log(this.sousBiens.imagesList[0])
      // console.log(this.sousBiens)
    });
    
  ///methode1:
  // this.router.events.subscribe((evt) => {
  //   if (!(evt instanceof NavigationEnd)) {
  //       return;
  //   }
  //    window.scrollTo({ top: 250, behavior: 'auto' }); 
  
  //    });
//methode2:
  // const element = document.getElementById("box");
  // element.scrollIntoView({ block: "start", behavior: "auto" });
  }
  


 

  onSubmit(FormData) {
    console.log(FormData)
    this.contact.PostMessage(FormData)
      .subscribe(response => {
        location.href = 'https://mailthis.to/confirm'
        console.log(response)
      }, error => {
        console.warn(error.responseText)
        // console.log({ error })
      })
  }

  backClicked() {
    this._location.back();
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
  Id(){
    this.agencieService.getAgencieById(this.idAgence).subscribe((data:any) => {
      this.biens=data?.biens
      this.agenceName = data?.name
      this.Bien=data
      this.AgencyEmail=this.Bien.email
      console.log(this.biens);
      this.Agency=data
      this.setSharedVariable()
    })
  }











  navigateAndRefresh(project: any) {
    // Extract the id from the project object
    const projectId = project?.id;

    // Navigate to the specified route
   
    this.router.navigate(['/agences-immob-details-plus', projectId])
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
  getAgencyId() {
    this.agencieService.getAllAgencies().subscribe((data: any) => {
      const filteredAgencies = data.filter(agency => agency.name === this.Projet.agencyName);
      if (filteredAgencies.length > 0) {
        this.idAgencyMenu = filteredAgencies[0].id;
        // console.log(this.idAgencyMenu);
        this.router.navigate(['/agency', this.idAgencyMenu]);
      }
    });
  }
  isArabic(text: string): boolean {
    const arabicCharPattern = /[\u0600-\u06FF]/;
    return arabicCharPattern.test(text);
  }

  getDirection(text: string): string {
    return this.isArabic(text) ? 'rtl' : 'ltr';
  }
  setSharedVariable() {
    let data = this.Agency;
    this.agencieService.setSharedVariable(data);
    // console.log("this data", data); 
    //  this.message ="data sended successfully"
  }
  cons(){
    // console.log("data is empty")
  }
  filterSousCategorie(event : any)  {
    
    console.log(this.selectedSousCategorie)
  
    if(this.selectedSousCategorie){
  
    this.ServicesDivers =  this.filtredServicesDivers2.filter((item : any) => item.sous_categorie ==  this.selectedSousCategorie.value);
    // console.log(this.selectedSousCategorie.value)
    }else{
     this.ServicesDivers = this.filtredServicesDivers1
    }
  }
  
  
  filterServices(category: string): void {
    this.filteredSousServices = this.sousServices.filter(sous_service => sous_service.category === category);
  }
  displayModal: boolean = false; // Controls modal visibility

  // Function to open the modal and display the clicked image
  openModal(imageUrl: string) {
    this.selectedImage = imageUrl;
    this.displayModal = true;
  }
  zoomLevel: number = 1;          // Zoom level factor
  zoomStyle: string = '';         // Zoom style string for image
   // Method to zoom in the image
   zoomIn() {
    this.zoomLevel += 0.1;
    this.updateZoomStyle();
  }

  // Method to zoom out the image
  zoomOut() {
    this.zoomLevel = Math.max(0.1, this.zoomLevel - 0.1); // Prevent zoom-out beyond initial scale
    this.updateZoomStyle();
  }

  // Method to update zoom style
  updateZoomStyle() {
    this.zoomStyle = `scale(${this.zoomLevel})`;
  }
  showMaximizableDialog() {
    this.displayMaximizable = true;


  }
  showMaximizableDialog1() {
    this.displayMaximizable1 = true;


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
            timer: 1000,  // Closes after 3 seconds
            timerProgressBar: true  // Shows a progress bar
          });
          console.log('Email sent successfully!', response);
          
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
          console.error('Error sending email', error);
        }
      });
  }
  
  isValidEmail(email: string): boolean {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
  }
  openModal1(content: any) {
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
}
