import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {Location} from '@angular/common';
import { AgenceServiceService } from '../services/agence-service/agence-service.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AgenciesService } from '../services/agencies/agencies.service';
import { CommerceServiceService } from '../commerce-service-agency/commerce-service.service';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-description-service',
  templateUrl: './description-service.component.html',
  styleUrls: ['./description-service.component.css']
})
export class DescriptionServiceComponent implements OnInit {
  @ViewChild("myElem") MyProp: ElementRef;
  private modalRef: NgbModalRef | null = null; // Initialize as null

  public idSousService:any
  public SousService:any
  FormData: FormGroup;
  public Agency:any
  isDesktop: boolean;
  idAgence: any;
  CommerceServiceAgency: any;
  NameAgency: any;
  AgencyEmail: any;

  constructor(private activatedRoute: ActivatedRoute,
    private serviceService:AgenceServiceService,
    private _location:Location,
    private router: Router,
    private modalService: NgbModal,
    private builder: FormBuilder,
    private agencieService:AgenciesService,
    private commerceService :CommerceServiceService,
    private http : HttpClient
    ) { }

    openVerticallyCentered(content) {
      this.modalService.open(content, { centered: true });
    }

  ngOnInit(): void {

    this.checkScreenWidth();
    this.idAgence = this.commerceService.getIdAgency()
    this.agencieService.getAgencieById(this.idAgence).subscribe((data:any) => {

      this.CommerceServiceAgency = data;
      this.AgencyEmail=this.CommerceServiceAgency.email
      this.NameAgency =this.CommerceServiceAgency.name
      this.setSharedVariable()
    })


    this.FormData = this.builder.group({
      Nom: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      description: new FormControl('', [Validators.required]),
    });

    this.idSousService= this.activatedRoute.snapshot.paramMap.get('id')
    
    this.serviceService.getSousServiceById(this.idSousService).subscribe(data => {
      console.log(data)
      this.SousService = data;
     
    });
 
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
  backClicked() {
    this._location.back();
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
  
  // checkScreenWidth() {
  //   const screenWidth = window.innerWidth;
  //   if (screenWidth <= 800) {
  //     this.isDesktop = false;
  //   } else {
  //     this.isDesktop = true;
  //   }
  // }
  displayMaximizable: boolean;
  showMaximizableDialog() {
    this.displayMaximizable = true;
  }
  setSharedVariable() {
    let data = this.CommerceServiceAgency;
    this.agencieService.setSharedVariable(data);
    console.log("this data", data); // Corrected to use the 'data' variable
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
  navigateAndRefresh(project: any) {
    // Extract the id from the project object
    const projectId = project.id;
  
    // Navigate to the specified route
   
    this.router.navigate(['/details-service', project.id])
      .then(() => {
        // If navigation is successful, call the refresh function
        this.refresh();
      });
  }
  refresh(): void {
    this.router.navigateByUrl("/refreshMat", { skipLocationChange: true }).then(() => {
      console.log(decodeURI(this._location.path()));
      this.router.navigate([decodeURI(this._location.path())]);
  
      // Set timeout to call the refresh function again after 2 seconds
  
    });
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
}
