import { Component, OnInit } from '@angular/core';
import { AgenciesService } from 'src/app/services/agencies/agencies.service';
import { MateriauxService } from 'src/app/services/materiaux/materiaux.service';
import { MeilleursBiensService } from 'src/app/services/meilleurs-bien/meilleurs-biens.service';

@Component({
  selector: 'app-coffee-list-tunis',
  templateUrl: './coffee-list-tunis.component.html',
  styleUrls: ['./coffee-list-tunis.component.css']
})
export class CoffeeListTunisComponent implements OnInit {
  
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
      this.AgenciesCoffee = data.filter((item: any) => item.phone_number_commercial === "yes" && item.region === "tunis");
      this.AgenciesCoffee.sort((a: any, b: any) => {
        // Extract the number from the beginning of the name
        const numA = parseInt(a.name.match(/^\d+/));
        const numB = parseInt(b.name.match(/^\d+/));
        
        // Handle cases where the number might not be present
        if (isNaN(numA)) return 1;
        if (isNaN(numB)) return -1;

        return numA - numB;
    });

  });
 
  }

}
