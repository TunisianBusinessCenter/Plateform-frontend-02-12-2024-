import { Component, OnInit } from '@angular/core';
import { AgenceImmobilieresService } from '../../services/agence-immob/agence-immobilieres.service';

@Component({
  selector: 'app-agence-immob-tunis',
  templateUrl: './agence-immob-tunis.component.html',
  styleUrls: ['./agence-immob-tunis.component.css']
})
export class AgenceImmobTunisComponent implements OnInit {

  responsiveOptions;

  public AgenciesTunis: any

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
    this.agencieImmobService.getAgencieTunis().subscribe((data: any) => {
    
      this.AgenciesTunis = data;
     
        // console.log(this.AgenciesTunis)
         

    })
  }

}
