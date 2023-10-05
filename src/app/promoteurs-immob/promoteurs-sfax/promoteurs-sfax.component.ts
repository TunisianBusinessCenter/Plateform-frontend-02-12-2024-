import { Component, OnInit } from '@angular/core';
import { AgenciesService } from 'src/app/services/agencies/agencies.service';

@Component({
  selector: 'app-promoteurs-sfax',
  templateUrl: './promoteurs-sfax.component.html',
  styleUrls: ['./promoteurs-sfax.component.css']
})
export class PromoteursSfaxComponent implements OnInit {

 public AgenciesSfax: any
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
    this.agencieService.getAgencieSfax().subscribe((data: any) => {
      this.AgenciesSfax = data;
      console.log(this.AgenciesSfax)
    })
  }

}
