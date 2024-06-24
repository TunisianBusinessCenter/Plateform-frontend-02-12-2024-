import { Component, OnInit } from '@angular/core';
import { AgenciesService } from 'src/app/services/agencies/agencies.service';

@Component({
  selector: 'app-promoteurs-mahdia',
  templateUrl: './promoteurs-mahdia.component.html',
  styleUrls: ['./promoteurs-mahdia.component.css']
})
export class PromoteursMahdiaComponent implements OnInit {

  public AgenciesMahdia: any
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

  ngOnInit(): void {
    this.agencieService.getAgencieMahdia().subscribe((data: any) => {
      this.AgenciesMahdia = data;
      this.AgenciesMahdia.sort((a, b) => {
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

}
