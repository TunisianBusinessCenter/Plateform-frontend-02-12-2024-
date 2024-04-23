import { Component, OnInit } from '@angular/core';
import { MeilleursBiensService } from '../services/meilleurs-bien/meilleurs-biens.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {
  AgenciesCoffee: any;

  constructor(private meilleursBiensService:MeilleursBiensService ) {

   }

  ngOnInit(): void {
    this.meilleursBiensService.getAgencieMeilleursBiens().subscribe((data: any) => {
      // Filter the data where phone_number_commercial is "yes"
      this.AgenciesCoffee = data.filter((item: any) => item.phone_number_commercial === "yes");
      console.log(this.AgenciesCoffee);
  });
  
  }


}
