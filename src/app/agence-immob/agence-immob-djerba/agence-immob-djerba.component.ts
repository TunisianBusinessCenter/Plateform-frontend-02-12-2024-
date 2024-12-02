import { Component, OnInit } from '@angular/core';
import { AgenceImmobilieresService } from 'src/app/services/agence-immob/agence-immobilieres.service';
@Component({
  selector: 'app-agence-immob-djerba',
  templateUrl: './agence-immob-djerba.component.html',
  styleUrls: ['./agence-immob-djerba.component.css']
})
export class AgenceImmobDjerbaComponent implements OnInit {

  public AgenciesDjerba:any
  responsiveOptions
  
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
    this.agencieImmobService.getAgencieDjerba().subscribe((data: any) => {
      this.AgenciesDjerba = data;
      // console.log(this.AgenciesDjerba)
    })
  }

}
