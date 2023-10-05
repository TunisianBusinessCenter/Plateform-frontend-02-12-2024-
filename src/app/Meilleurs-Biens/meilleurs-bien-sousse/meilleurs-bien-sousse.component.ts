import { Component, OnInit } from '@angular/core';
import { AgenceImmobilieresService } from 'src/app/services/agence-immob/agence-immobilieres.service';
import { MeilleursBiensService } from 'src/app/services/meilleurs-bien/meilleurs-biens.service';

@Component({
  selector: 'app-meilleurs-bien-sousse',
  templateUrl: './meilleurs-bien-sousse.component.html',
  styleUrls: ['./meilleurs-bien-sousse.component.css']
})
export class MeilleursBienSousseComponent implements OnInit {

  responsiveOptions;
  public AgenciesSousse: any

  constructor(private meilleursBiensService: MeilleursBiensService,
    ) {
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
    this.meilleursBiensService.getMeilleursBiensSousse().subscribe((data: any) => {
      this.AgenciesSousse = data;
      console.log(this.AgenciesSousse)
   
    })
  }

}
