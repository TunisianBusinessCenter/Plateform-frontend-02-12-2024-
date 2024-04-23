import { Component, OnInit } from '@angular/core';
import { AgenciesService } from 'src/app/services/agencies/agencies.service';
import { MateriauxService } from 'src/app/services/materiaux/materiaux.service';
import { MeilleursBiensService } from 'src/app/services/meilleurs-bien/meilleurs-biens.service';

@Component({
  selector: 'app-coffee-list-sousse',
  templateUrl: './coffee-list-sousse.component.html',
  styleUrls: ['./coffee-list-sousse.component.css']
})
export class CoffeeListSousseComponent implements OnInit {

  AgenciesCoffee: any;
  AgenciesSousse: any;
  responsiveOptions
  constructor(private Servicemateriaux: MateriauxService ) {
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
    this.Servicemateriaux.getMateriauxEquipement().subscribe((data: any) => {
      // Filter the data where phone_number_commercial is "yes"
      this.AgenciesCoffee = data.filter((item: any) => item.phone_number_commercial === "yes" && item.region === "sousse");
      console.log(this.AgenciesCoffee);
      this.AgenciesCoffee
  });
 
  }

}
