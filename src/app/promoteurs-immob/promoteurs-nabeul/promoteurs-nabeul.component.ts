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
      console.log(this.AgenciesNabeul)
    })
    this.primengConfig.ripple = true;
  }

}
