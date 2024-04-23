import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig, NgbModal, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { AgenciesService } from '../services/agencies/agencies.service';

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
  private modalService: NgbModal

  constructor(public router:Router,private route: ActivatedRoute,private as:AgenciesService) { }

  ngOnInit(): void {
    // this.click()
  }
  showMaximizableDialog() {
    this.displayMaximizable = true;

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



}

