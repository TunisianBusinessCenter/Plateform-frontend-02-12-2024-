import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NgbCarouselConfig, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { AgenciesService } from '../services/agencies/agencies.service';
import { HttpClient } from '@angular/common/http';

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
  @Input() AgencyBaniere: any;
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
  categorie: any;
  images: string[] = [
    "../../assets/images/BANIERE-CLIENTS-MEUBLE (-)/PUB-2.jpg",
    "../../assets/images/BANIERE-CLIENTS-MEUBLE (-)/PUB-3.jpg",
    "../../assets/images/BANIERE-CLIENTS-MEUBLE (-)/PUB-4.jpg",
    "../../assets/images/BANIERE-CLIENTS-MEUBLE (-)/PUB-5.jpg",
    "../../assets/images/BANIERE-CLIENTS-MEUBLE (-)/PUB-6.jpg",
    "../../assets/images/BANIERE-CLIENTS-MEUBLE (-)/PUB-7.jpg",
    "../../assets/images/BANIERE-CLIENTS-MEUBLE (-)/PUB-8.jpg",
    "../../assets/images/BANIERE-CLIENTS-MEUBLE (-)/PUB-9.jpg",
    "../../assets/images/BANIERE-CLIENTS-MEUBLE (-)/PUB-10.jpg",
    "../../assets/images/BANIERE-CLIENTS-MEUBLE (-)/PUB-11.jpg",
    "../../assets/images/BANIERE-CLIENTS-MEUBLE (-)/PUB-12.jpg",
    "../../assets/images/BANIERE-CLIENTS-MEUBLE (-)/PUB-13.jpg",
    "../../assets/images/BANIERE-CLIENTS-MEUBLE (-)/PUB-14.jpg",
    
  ];
  imagesPromo: string[] = [
    "../../assets/images/promoteurs tunis/soroubat/BANIERE-CLIENT-PROMOTEURS/1--.jpg",
    "../../assets/images/promoteurs tunis/soroubat/BANIERE-CLIENT-PROMOTEURS/2--.jpg",
    "../../assets/images/promoteurs tunis/soroubat/BANIERE-CLIENT-PROMOTEURS/3--.jpg",
    "../../assets/images/promoteurs tunis/soroubat/BANIERE-CLIENT-PROMOTEURS/4--.jpg",
    "../../assets/images/promoteurs tunis/soroubat/BANIERE-CLIENT-PROMOTEURS/5--.jpg",
    "../../assets/images/promoteurs tunis/soroubat/BANIERE-CLIENT-PROMOTEURS/6--.jpg",

  ];
  // Variable to store the selected image index
  selectedImageIndex: number;
  banner: any;
  currentId: string;
 constructor(public router:Router,
  private agencyService: AgenciesService, private route:ActivatedRoute,private as:AgenciesService,private sharedDataService: AgenciesService,private http: HttpClient){
        this.check = false;

  }
  
  ngOnInit(): void {
    this.agencyService.AgencyBaniere$.subscribe((AgencyBaniere) => {
      // Log the AgencyBaniere data to the console
      console.log('NavbarCarouselComponent - AgencyBaniere:', AgencyBaniere);

      // ... other logic with AgencyBaniere data
    });

    // ... other existing code
  
    this.getCurrentRouteAndGetData();
    console.log('NavbarCarouselComponent - AgencyBaniere:', this.AgencyBaniere);

    // setTimeout(() => {
    //   this.getById();
    // }, 5000);
    //   this.route.paramMap.subscribe((params: ParamMap) => {
    //     this.currentId = params.get('id');
    //     console.log('Current ID:', this.currentId);
    //   });
    this.selectedImageIndex = Math.floor(Math.random() * this.images.length);
    this.selectedImageIndex = Math.floor(Math.random() * this.imagesPromo.length);

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
      console.log('Found agency with matching id:', this.agenceID);
      this.roleMateriaux = true;
      console.log('tttttttttttttttttttttttttttttttttttttttttttttttttttttthis.roleMateriaux: ', this.roleMateriaux);
    
  }

  // console.log("this is my target", this.allAgencies);
});


  }

  slideActivate(ngbSlideEvent: NgbSlideEvent) {
    console.log(ngbSlideEvent.source);
    console.log(ngbSlideEvent.paused);
    console.log(NgbSlideEventSource.INDICATOR);
    console.log(NgbSlideEventSource.ARROW_LEFT);
    console.log(NgbSlideEventSource.ARROW_RIGHT);
  }
  getCurrentRouteAndGetData() {
    // Get the current route
    const currentRoute = this.route.snapshot.url.join('/');

    // Extract the ID from the route (assuming it's the last segment)
    const segments = currentRoute.split('/');
    this.currentId = segments[segments.length - 1];

    // Log the ID to the console
    console.log('Current ID:', this.currentId);

    // Construct the URL based on the current route
    const url = `${currentRoute}`;

    // Make the HTTP request
    this.http.get(url).subscribe(
      (data) => {
        console.log('Response:', data);
        // Handle the response data as needed
      },
      (error) => {
        console.error('Error:', error);
        // Handle the error
      }
    );
  }

  checkRoute() {
    const currentRoute = this.router.url;
  
    // Check if the current route contains "/agency/5494"
    if (currentRoute.includes('/agency/6033') )  {
      this.check=true
      console.log('check works')

    } else {
      this.check=false
      console.log('check works')

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
            this.categorie=agencyData.categorie
            this.banner=agencyData.mobile_apps
            this.banner=agencyData.mobile_apps[0].mobile_cover_image_url;
            console.log('Agency Banner:', this.banner);

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
  getSelectedImagePath(): string {
    return this.images[this.selectedImageIndex];
  }
  getSelectedImagePathPromo(): string {
    return this.imagesPromo[this.selectedImageIndex];
  }
  redirect(): void {
    // Navigate to the home route
    this.router.navigate(['/home']).then(() => {
      console.log('here')
      // Reload the current route to refresh the page
      window.location.reload();
    });
  }
}






