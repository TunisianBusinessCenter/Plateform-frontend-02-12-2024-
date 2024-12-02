import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgenciesService } from 'src/app/services/agencies/agencies.service';

@Component({
  selector: 'app-promoteurs-tunis',
  templateUrl: './promoteurs-tunis.component.html',
  styleUrls: ['./promoteurs-tunis.component.css'],

})
export class PromoteursTunisComponent implements OnInit {

  public AgenciesTunis: any
  public lengthBoutique: any
  public testArraySort: any
  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

  responsiveOptions
  idA: number;
  allAgencies: any;

  // Static fallback content
  staticAgenciesTunis = [
    {
      name: 'Veuillez patienter...',
      logo_url: 'assets/carousel.jpg',
      region: 'Tunis',
      projets: 'static',
      createdAt: '01/01/2020',
      margin: ''
    },
    {
      name: 'Veuillez patienter...',
      logo_url: 'assets/carousel.jpg',
      region: 'Tunis',
      projets: 'static',
      createdAt: '02/01/2020',
      margin: ''
    },
    {
      name: 'Veuillez patienter...',
      logo_url: 'assets/carousel.jpg',
      region: 'Tunis',
      projets: 'static',
      createdAt: '02/01/2020',
      margin: ''
    },
    {
      name: 'Veuillez patienter...',
      logo_url: 'assets/carousel.jpg',
      region: 'Tunis',
      projets: 'static',
      createdAt: '02/01/2020',
      margin: ''
    },
    {
      name: 'Veuillez patienter...',
      logo_url: 'assets/carousel.jpg',
      region: 'Tunis',
      projets: 'static',
      createdAt: '02/01/2020',
      margin: ''
    } 
  ];

  constructor(private agencieService: AgenciesService, private sharedDataService: AgenciesService, private router: Router) {

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
  searchText = "";

  ngOnInit(): void {
    this.agencieService.getAgencieTunis().subscribe((data: any) => {
      this.AgenciesTunis = data.length ? data : this.staticAgenciesTunis;  // Use static data if no backend data

      // Sort AgenciesTunis by `projets` and `createdAt` if data exists
      if (this.AgenciesTunis !== this.staticAgenciesTunis) {
        this.AgenciesTunis.sort((a, b) => {
          const projetsAIsNull = !a.projets || a.projets.length === 0;
          const projetsBIsNull = !b.projets || b.projets.length === 0;

          if (projetsAIsNull && !projetsBIsNull) {
            return 1;
          } else if (!projetsAIsNull && projetsBIsNull) {
            return -1;
          } else {
            const createdAtA = new Date(a.createdAt.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3")).getTime();
            const createdAtB = new Date(b.createdAt.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3")).getTime();
            return createdAtB - createdAtA;
          }
        });
      }
    });
  }



  clickMe(agencyId: number) {
    this.sharedDataService.updateAgencyId(agencyId);
  }
  stopPropagation(event: Event) {
    // Stop the event from propagating to the parent
    event.stopPropagation();
    console.log('Click propagation stopped.');
  }
  formatAgencyName(name: string): string {
    return name.replace(/\s+/g, '-');
  }
  isLoading1: boolean = true;

    imageLoaded() {
      this.isLoading1 = false;
    }
    fnTest(){
      console.log('Click propagation started.');

    }
}
