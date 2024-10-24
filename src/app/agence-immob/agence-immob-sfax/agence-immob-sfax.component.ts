import { Component, OnInit } from '@angular/core';
import { AgenceImmobilieresService } from 'src/app/services/agence-immob/agence-immobilieres.service';

@Component({
  selector: 'app-agence-immob-sfax',
  templateUrl: './agence-immob-sfax.component.html',
  styleUrls: ['./agence-immob-sfax.component.css']
})
export class AgenceImmobSfaxComponent implements OnInit {

  public AgenciesSfax: any
  responsiveOptions;

  constructor(private agencieImmobService: AgenceImmobilieresService) {
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
    this.agencieImmobService.getAgencieMonastir().subscribe((data: any) => {
      this.AgenciesSfax = data;
      // console.log(this.AgenciesSfax)
    })
  }

}
