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

  ngOnInit(): void {
    this.agencieService.getAgencieTabarka().subscribe((data:any)=>{
      this.AgenciesTabarka=data
      console.log(this.AgenciesTabarka)
    })
  }

}
