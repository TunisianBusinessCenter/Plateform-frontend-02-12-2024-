import { Component, OnInit } from '@angular/core';
import { AgenciesService } from 'src/app/services/agencies/agencies.service';

@Component({
  selector: 'app-promoteurs-sousse',
  templateUrl: './promoteurs-sousse.component.html',
  styleUrls: ['./promoteurs-sousse.component.css']
})
export class PromoteursSousseComponent implements OnInit {

  public AgenciesSousse: any
  public NvAgenciesSousse: any


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
    this.agencieService.getAgencieSousse().subscribe((data: any) => {
      this.AgenciesSousse = data;
      this.AgenciesSousse.sort((a, b) => {
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
      // let filteredData = [];
      // if (this.AgenciesSousse && Array.isArray(this.AgenciesSousse?.projets)) {
      for (let projectsag of this.AgenciesSousse?.projets) {
        if (projectsag.length !== 0) {
          console.log(this.AgenciesSousse)

          // filteredData.push(projectsag);
        }
      }
      // }
      // this.AgenciesSousse = filteredData
      // console.log(this.AgenciesSousse)
    });
  }





  // ngOnInit(): void {
  //   this.agencieService.getAgencieSousse().subscribe((data: any) => {
  //     this.AgenciesSousse = data;
  //     let filteredData = [];
  //     // Iterate through the AgenciesSousse data
  //     for (let projectsag of this.AgenciesSousse.projets) {
  //       // Check if the projets property is not null
  //       if (projectsag.length !== 0) {
  //         // If the projets property is not null, add the object to the filteredData array
  //         filteredData.push(projectsag);
  //       }
  //     }
  //     // Concatenate the filtered data with the rest of the data
  //     this.AgenciesSousse = filteredData.concat(this.AgenciesSousse);
  //   });
  // }



}
