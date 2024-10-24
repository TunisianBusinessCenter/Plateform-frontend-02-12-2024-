import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig, NgbModal, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { AgenciesService } from '../services/agencies/agencies.service';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  displayMaximizable:boolean
  sharedVariable: any;
  projetDispo: any;
  ProjetEnCours: any;
  ProduitVendu: any;
  AgencyEmail='dcgenerale@gmail.com'
  constructor(public router:Router,private route: ActivatedRoute,private as:AgenciesService,private modalService: NgbModal,private http:HttpClient) { }

  ngOnInit(): void {
    // this.click()
  }
  showMaximizableDialog() {
    this.displayMaximizable = true;

}
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
slideActivate(ngbSlideEvent: NgbSlideEvent) {
  console.log(ngbSlideEvent.source);
  console.log(ngbSlideEvent.paused);
  console.log(NgbSlideEventSource.INDICATOR);
  console.log(NgbSlideEventSource.ARROW_LEFT);
  console.log(NgbSlideEventSource.ARROW_RIGHT);
}
// click(){
//   this.as.sharedVariable$.subscribe((data) => {
//     this.sharedVariable = data;
//     console.log('got me side bar', this.sharedVariable);
//     this.projetDispo = this.sharedVariable.projets.filter(project => project.status === 'DISPONIBLE'       || project.status === 'Disponible'      );
//     this.ProduitVendu = this.sharedVariable.projets.filter(project => project.status === 'VENDU');
//     this.ProjetEnCours  = this.sharedVariable.projets.filter(project => project.status === 'EN COURS' || project.status === 'EN COURS ')
//     console.log('this projetDispooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo ',this.projetDispo)
//   });
  

// }
showNavigation(): boolean {
  // Get the current full route path
  const currentPath = this.route.snapshot['_routerState'].url;

  // Check if the current path starts with the specified routes
  return currentPath.startsWith('/details/') || currentPath.startsWith('/agency/' ) || currentPath.startsWith('/villa-details/' );
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
}
