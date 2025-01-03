import { Component, OnInit } from '@angular/core';
import { AgenciesService } from 'src/app/services/agencies/agencies.service';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-promoteurs-nabeul',
  templateUrl: './promoteurs-nabeul.component.html',
  styleUrls: ['./promoteurs-nabeul.component.css'],

})
export class PromoteursNabeulComponent implements OnInit {

  public AgenciesNabeul:any
  responsiveOptions
searchText=""
  constructor(private agencieService: AgenciesService,
    private primengConfig: PrimeNGConfig) { 
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

  ngOnInit(): void {
    this.agencieService.getAgencieNabeul().subscribe((data: any) => {
      this.AgenciesNabeul = data;
      this.AgenciesNabeul.sort((a, b) => {
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
    this.primengConfig.ripple = true;
  }
  formatAgencyName(name: string): string {
    return name.replace(/\s+/g, '-');
}

}
