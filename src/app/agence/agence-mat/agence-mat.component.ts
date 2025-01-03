import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DomSanitizer } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { CommerceServiceService } from 'src/app/commerce-service-agency/commerce-service.service';
import { AgenciesService } from 'src/app/services/agencies/agencies.service';
import { AgenceMatService } from './agence-mat.service';
@Component({
  selector: 'app-agence-mat',
  templateUrl: './agence-mat.component.html',
  styleUrls: ['./agence-mat.component.css']
})
export class AgenceMatComponent implements OnInit {
    idAgency: any;
    Agency: any;
    AgencyBaniere: any;
    AgencyReel: any;
    reverseAgPromoteurs: any;
    displayMaximizable: boolean;
    isMobile: boolean = false;
    urlSafe3: any;
    urlSafe2: any;
    facebook_url: any;
    AgencyEmail: any;
  list: any;
  private modalRef: NgbModalRef | null = null; // Initialize as null

  private parseDate(dateString: string): Date {
    const [day, month, year, time] = dateString.split(/\/|\s/);
    const [hour, minute, second] = time.split(':');
  
    // Month is 0-indexed in JavaScript Date, so subtract 1 from the month
    return new Date(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute), Number(second));
  }
    constructor(private http:HttpClient , private agenceMateriaux : AgenceMatService,private sanitizer: DomSanitizer,private activatedRoute: ActivatedRoute,private agencieService: AgenciesService,    private modalService: NgbModal,    private breakpointObserver: BreakpointObserver,
    ) { 
      this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
        this.isMobile = result.matches;
      });
      this.idAgency = this.activatedRoute.snapshot.paramMap.get('id')
      this.agencieService.getAgencieById(this.idAgency).subscribe((data:any) => {
        // console.log(data)
  
        this.Agency = data;
        this.reverseAgPromoteurs = this.Agency?.produits.reverse();
  
        // Sort the projets array by createdAt
        if (this.reverseAgPromoteurs) {
          this.reverseAgPromoteurs.sort((a, b) => {
            const createdAtA = this.parseDate(a.createdAt);
            const createdAtB = this.parseDate(b.createdAt);
    
            return createdAtA.getTime() - createdAtB.getTime();
          });
        }
        
        this.AgencyEmail =this.Agency.email
        this.facebook_url = this.Agency.facebook_url
  
        this.urlSafe3 = this.sanitizer.bypassSecurityTrustResourceUrl(this.Agency?.twitter_url);
        this.urlSafe2 = this.sanitizer.bypassSecurityTrustResourceUrl(this.Agency?.videoUrl2);
  
        this.AgencyBaniere = this.Agency.mobile_apps[0]?.mobile_cover_image_url;
        this.AgencyReel = this.Agency?.mobile_apps[0]?.appstore_url
        this.agencieService.setAgencyBaniere(this.AgencyBaniere);
  
        // console.log('AgencyBaniere', this.AgencyBaniere)
      })
    }
    
    ngAfterViewInit() {
      this.setSharedVariable();
      this.CommerceService()
    }
    ngOnInit(): void {
      this.CommerceService()
    }
    showMaximizableDialog() {
      this.displayMaximizable = true;
    }
    openVerticallyCentered(content) {
      this.modalService.open(content, { centered: true });
    }
    isArabic(text: string): boolean {
      const arabicCharPattern = /[\u0600-\u06FF]/;
      return arabicCharPattern.test(text);
    }
  
    getDirection(text: string): string {
      return this.isArabic(text) ? 'rtl' : 'ltr';
    }
    displayMaximizable1: boolean;
    showMaximizableDialog1() {
      this.displayMaximizable = true;
    }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    CommerceService() {
  
      this.agenceMateriaux.setIdAgency(this.idAgency)
  
    }
    
    setSharedVariable() {
      let data = this.Agency;
      this.agencieService.setSharedVariable(data);
      console.log("this data", data); 
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
            this.closeModal();

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
    openModal(content: any) {
      this.modalRef = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    }
    
    closeModal() {
      if (this.modalRef) {
        this.modalRef.close();
        this.modalRef = null; // Reset after closing
        console.log('Modal closed successfully.');
      } else {
        console.log('Modal reference is undefined; modal might not have been opened.');
      }
    }
  }
  