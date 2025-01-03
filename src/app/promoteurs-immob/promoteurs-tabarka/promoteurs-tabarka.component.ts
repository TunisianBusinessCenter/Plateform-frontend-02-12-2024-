import { Component, OnInit } from '@angular/core';
import { AgenciesService } from 'src/app/services/agencies/agencies.service';

@Component({
  selector: 'app-promoteurs-tabarka',
  templateUrl: './promoteurs-tabarka.component.html',
  styleUrls: ['./promoteurs-tabarka.component.css']
})
export class PromoteursTabarkaComponent implements OnInit {

  public AgenciesTabarka: any
  responsiveOptions
  constructor(private agencieService: AgenciesService) { 
    this.responsiveOptions = [
      {
        breakpoint: '2000px',
        numVisible: 5,
        numScroll: 5
      },
      {
        breakpoint: '1724px',
        numVisible: 4,
        numScroll: 4
      },
      {
        breakpoint: '1250px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '954px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '667px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
  staticAgenciesTunis = [
    {
      name: 'Veuillez patienter...',
      logo_url: 'assets/carousel.jpg',
      region: 'Tabarka',
      projets: 'static',
      createdAt: '01/01/2020',
      margin: ''
    },
    {
      name: 'Veuillez patienter...',
      logo_url: 'assets/carousel.jpg',
      region: 'Tabarka',
      projets: 'static',
      createdAt: '02/01/2020',
      margin: ''
    },
    {
      name: 'Veuillez patienter...',
      logo_url: 'assets/carousel.jpg',
      region: 'Tabarka',
      projets: 'static',
      createdAt: '02/01/2020',
      margin: ''
    },
    {
      name: 'Veuillez patienter...',
      logo_url: 'assets/carousel.jpg',
      region: 'Tabarka',
      projets: 'static',
      createdAt: '02/01/2020',
      margin: ''
    },
    {
      name: 'Veuillez patienter...',
      logo_url: 'assets/carousel.jpg',
      region: 'Tabarka',
      projets: 'static',
      createdAt: '02/01/2020',
      margin: ''
    } 
  ];
  searchText=""
  ngOnInit(): void {
    this.agencieService.getAgencieTabarka().subscribe((data:any)=>{
      this.AgenciesTabarka=data
      this.AgenciesTabarka.sort((a, b) => {
        // Check if projets is null in a and b
        const projetsAIsNull = a.projets === null || a.projets.length === 0;
        const projetsBIsNull = b.projets === null || b.projets.length === 0;
  
        // Sort agencies with non-null projets before agencies with null projets
        if (projetsAIsNull && !projetsBIsNull) {
          return 1;
        } else if (!projetsAIsNull && projetsBIsNull) {
          return -1;
        } else {
          // If projets are the same, sort by createdAt in reversed order
          const createdAtA = new Date(a.createdAt.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3")).getTime();
          const createdAtB = new Date(b.createdAt.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3")).getTime();
  
          return createdAtB - createdAtA;
        }
      });
    })
  }
  formatAgencyName(name: string): string {
    return name.replace(/\s+/g, '-');
}
isLoading1: boolean = true;

imageLoaded() {
  this.isLoading1 = false;
}
}
