import { Component, OnInit } from '@angular/core';
import { AgenceImmobilieresService } from 'src/app/services/agence-immob/agence-immobilieres.service';

@Component({
  selector: 'app-agence-immob-nabeul',
  templateUrl: './agence-immob-nabeul.component.html',
  styleUrls: ['./agence-immob-nabeul.component.css']
})
export class AgenceImmobNabeulComponent implements OnInit {

  responsiveOptions
  public AgenciesNabeul: any


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
    this.agencieImmobService.getAgencieNabeul().subscribe((data: any) => {
      this.AgenciesNabeul = data;
      console.log(this.AgenciesNabeul)
    })
  }

}
