import { Component, OnInit } from '@angular/core';
import { AgenceImmobilieresService } from 'src/app/services/agence-immob/agence-immobilieres.service';
import { MeilleursBiensService } from 'src/app/services/meilleurs-bien/meilleurs-biens.service';

@Component({
  selector: 'app-meilleurs-bien-tunis',
  templateUrl: './meilleurs-bien-tunis.component.html',
  styleUrls: ['./meilleurs-bien-tunis.component.css']
})
export class MeilleursBienTunisComponent implements OnInit {

  responsiveOptions;

  public AgenciesTunis: any

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
  
    this.meilleursBiensService.getMeilleursBiensTunis().subscribe((data: any) => {
      this.AgenciesTunis = data.filter((agency: any) => agency.phone_number_commercial != "yes");
  
      // Tri par 'id' en ordre croissant
      // this.AgenciesTunis.sort((a: any, b: any) => a.id - b.id);
  
      // console.log(this.AgenciesTunis);
  });
  
}

}
