import { Component, OnInit } from '@angular/core';
import { MeilleursBiensService } from 'src/app/services/meilleurs-bien/meilleurs-biens.service';

@Component({
  selector: 'app-meilleurs-bien-sfax',
  templateUrl: './meilleurs-bien-sfax.component.html',
  styleUrls: ['./meilleurs-bien-sfax.component.css']
})
export class MeilleursBienSfaxComponent implements OnInit {
  AgenciesSfax: any;

  constructor(private meilleursBiensService: MeilleursBiensService) { }
  ngOnInit(): void {
    this.meilleursBiensService.getMeilleursBiensSfax().subscribe((data: any) => {
      this.AgenciesSfax = data.filter((agency: any) => agency.phone_number_commercial != "yes");
      // console.log(this.AgenciesSfax)
   
    })
  }

}
