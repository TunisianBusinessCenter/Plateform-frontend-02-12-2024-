import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { AgenciesService } from '../services/agencies/agencies.service';

@Component({
  selector: 'app-navbar-carousel',
  templateUrl: './navbar-carousel.component.html',
  styleUrls: ['./navbar-carousel.component.css'],
  styles: [`
    /deep/ .carousel-item.active {
     
    }
  `]
})
export class NavbarCarouselComponent implements OnInit {

  allAgencies:any
  roleMateriaux:boolean=false;
 constructor(public router:Router,
  private agencyService: AgenciesService){}
  
  ngOnInit(): void {
this.agencyService.getAllAgencies().subscribe(data => {
  this.allAgencies = data
  // for(let agence of this.allAgencies) {
  //   if ( agence.role=="materiaux-construction") {
  //     console.log('test role agence',agence)
  //     this.roleMateriaux=true;
  //   }
    
  // }
  console.log(this.allAgencies)
})

  }

  slideActivate(ngbSlideEvent: NgbSlideEvent) {
    console.log(ngbSlideEvent.source);
    console.log(ngbSlideEvent.paused);
    console.log(NgbSlideEventSource.INDICATOR);
    console.log(NgbSlideEventSource.ARROW_LEFT);
    console.log(NgbSlideEventSource.ARROW_RIGHT);
  }


}
