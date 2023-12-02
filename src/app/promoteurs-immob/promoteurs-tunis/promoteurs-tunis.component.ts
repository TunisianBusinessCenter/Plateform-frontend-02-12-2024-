import { Component, OnInit } from '@angular/core';
import { AgenciesService } from 'src/app/services/agencies/agencies.service';

@Component({
  selector: 'app-promoteurs-tunis',
  templateUrl: './promoteurs-tunis.component.html',
  styleUrls: ['./promoteurs-tunis.component.css']
})
export class PromoteursTunisComponent implements OnInit {

  public AgenciesTunis: any
  public lengthBoutique:any
  public testArraySort: any

  responsiveOptions
  idA: number;



  constructor(private agencieService: AgenciesService,private sharedDataService:AgenciesService) {
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
    this.agencieService.getAgencieTunis().subscribe((data: any) => {
      this.AgenciesTunis = data;
      for(let lengthProjets of  this.AgenciesTunis.projets){
        this.lengthBoutique = lengthProjets.length
        console.log("length of boutique",this.lengthBoutique)

      }
      
     
      if(this.lengthBoutique!==0){
        
      }
      this.testArraySort=this.AgenciesTunis.sort((a:any, b:any) => a - b)
        console.log("arraySort",this.testArraySort)
        
    })
  }

  clickMe(agencyId: number) {
    this.sharedDataService.updateAgencyId(agencyId);
  }
}
