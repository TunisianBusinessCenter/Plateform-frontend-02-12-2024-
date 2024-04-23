import { Component, OnInit } from '@angular/core';
import { MeilleursBiensService } from 'src/app/services/meilleurs-bien/meilleurs-biens.service';

@Component({
  selector: 'app-meilleurs-bien-mahdia',
  templateUrl: './meilleurs-bien-mahdia.component.html',
  styleUrls: ['./meilleurs-bien-mahdia.component.css']
})
export class MeilleursBienMahdiaComponent implements OnInit {

  responsiveOptions;
  public AgenciesMahdia: any

  constructor(private meilleursBiensService: MeilleursBiensService) { 
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
    this.meilleursBiensService.getMeilleursBiensMahdia().subscribe((data: any) => {
      this.AgenciesMahdia = data.filter((agency: any) => agency.phone_number_commercial != "yes");
      console.log(this.AgenciesMahdia)
   
    })
  }

}
