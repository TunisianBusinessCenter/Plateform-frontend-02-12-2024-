import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NgbCarouselConfig, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { AgenciesService } from '../services/agencies/agencies.service';

@Component({
  selector: 'app-navbar-carousel-const',
  templateUrl: './navbar-carousel.component.html',
  styleUrls: ['./navbar-carousel.component.css'],
  styles: [`
    /deep/ .carousel-item.active {
     
    }
  `]
})
export class NavbarCarouselConstComponent implements OnInit {
  agenceID ='5494'
  allAgencies:any
  roleMateriaux:boolean=false;
  check:boolean
  receivedAgencyId: number;
agencyData: any;
  name: any;
  role: any;
  id: any;
  excludedIds = [4750, 4388, 4254, 3882, 3799, 3754, 3615, 511, 64, 827, 5948, 6033, 6028, 127, 126, 122, 118, 117, 116, 115, 114, 113, 112, 111, 90, 91, 92, 80, 82, 83, 84, 86, 87, 88, 78];

 constructor(public router:Router,
  private agencyService: AgenciesService, private route:ActivatedRoute,private as:AgenciesService,private sharedDataService: AgenciesService){
        this.check = false;

  }
  
  ngOnInit(): void {
  

this.getById()
// Assuming 'id' is the value you want to check against agence.id
const targetId = this.route.snapshot.paramMap.get('id');
this.checkRoute();
if (event instanceof NavigationEnd) {
  this.checkRoute();
  // Reload the page if the condition is met
  if (this.check) {
    window.location.reload();
  }
}

this.agencyService.getAllAgencies().subscribe(data => {
  this.allAgencies = data;

    // Check if agence.id is equal to the targetId
    if (this.agenceID === targetId) {
      // console.log('Found agency with matching id:', this.agenceID);
      this.roleMateriaux = true;
      // console.log('tttttttttttttttttttttttttttttttttttttttttttttttttttttthis.roleMateriaux: ', this.roleMateriaux);
    
  }

  // console.log("this is my target", this.allAgencies);
});


  }

  slideActivate(ngbSlideEvent: NgbSlideEvent) {
    // console.log(ngbSlideEvent.source);
    // console.log(ngbSlideEvent.paused);
    // console.log(NgbSlideEventSource.INDICATOR);
    // console.log(NgbSlideEventSource.ARROW_LEFT);
    // console.log(NgbSlideEventSource.ARROW_RIGHT);
  }

  checkRoute() {
    const currentRoute = this.router.url;
  
    // Check if the current route contains "/agency/5494"
    if (currentRoute.includes('/agency/6033') )  {
      this.check=true
      // console.log('check works')

    } else {
      this.check=false
      // console.log('check works')

    }

  }













  getById() {
    // Replace the hard-coded ID (113) with the receivedAgencyId
    this.sharedDataService.currentAgencyId.subscribe((agencyId) => {
      this.receivedAgencyId = agencyId;
      console.log("yessssssssssssssssssss   from carousel", this.receivedAgencyId);
  
      // Move the rest of the logic inside the subscription callback
      if (this.receivedAgencyId) {
        this.as.getAgencieById(this.receivedAgencyId).subscribe(
          (agencyData: any) => {
            // Handle the agency data here
            this.name=agencyData.name
            this.role=agencyData.role
            this.id=agencyData.id

            console.log('Agency Name:', this.name);
            console.log('Agency Role:', this.role);
            console.log('Agency id:', this.id);

          },
          (error) => {
            // Handle errors here
            console.error('Error fetching agency details:', error);
          }
        );
      } else {
        console.error('Received Agency ID is undefined or null.');
      }
    });
  }
  
}






