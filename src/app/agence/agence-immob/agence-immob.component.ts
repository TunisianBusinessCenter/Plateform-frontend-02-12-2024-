import { Component, OnInit } from '@angular/core';
import { AgenceImmobService } from './agence-immob.service';
import { AgenciesService } from 'src/app/services/agencies/agencies.service';
import Swal from 'sweetalert2';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MeilleursBiensService } from '../meilleurs-biens/meilleurs-biens.service';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-agence-immob',
  templateUrl: './agence-immob.component.html',
  styleUrls: ['./agence-immob.component.css']
})
export class AgenceImmobComponent implements OnInit {

  idAgency: any;
  Agency: any;
  AgencyBaniere: any;
  AgencyReel: any;
  reverseAgPromoteurs: any;
  displayMaximizable: boolean;
  isMobile: boolean = false;
  urlSafe3: any;
  urlSafe2: any;
  videoLoaded: boolean = false;
  AgencyEmail: any;

  constructor(private AgenceImmob:AgenceImmobService ,private http:HttpClient, private MeilleursBiens : MeilleursBiensService,private sanitizer: DomSanitizer,private activatedRoute: ActivatedRoute,private agencieService: AgenciesService,    private modalService: NgbModal,    private breakpointObserver: BreakpointObserver,
  ) { 
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
    this.idAgency = this.activatedRoute.snapshot.paramMap.get('id')
    this.agencieService.getAgencieById(this.idAgency).subscribe((data:any) => {
      // console.log(data)

      this.Agency = data;
      this.AgencyEmail = this.Agency.email
      this.urlSafe3 = this.sanitizer.bypassSecurityTrustResourceUrl(this.Agency?.twitter_url);
      this.urlSafe2 = this.sanitizer.bypassSecurityTrustResourceUrl(this.Agency?.videoUrl2);

      this.AgencyBaniere = this.Agency.mobile_apps[0]?.mobile_cover_image_url;
      this.AgencyReel = this.Agency?.mobile_apps[0]?.appstore_url
      this.agencieService.setAgencyBaniere(this.AgencyBaniere);

      // console.log('AgencyBaniere', this.AgencyBaniere)
      this.reverseAgPromoteurs = this.Agency?.projets?.reverse();
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

    this.AgenceImmob.setIdAgency(this.Agency?.id)

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
  AgenceImmobService() {
    this.AgenceImmob.setIdAgency(this.idAgency)
  
  }
}


















