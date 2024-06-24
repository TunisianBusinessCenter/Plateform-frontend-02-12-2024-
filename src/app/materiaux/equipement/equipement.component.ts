import { Component, OnInit } from '@angular/core';
import { AgenciesService } from 'src/app/services/agencies/agencies.service';
import { MateriauxService } from 'src/app/services/materiaux/materiaux.service';

@Component({
  selector: 'app-equipement',
  templateUrl: './equipement.component.html',
  styleUrls: ['./equipement.component.css']
})
export class EquipementComponent implements OnInit {

  searchText = "";
  public allAgencies: any
  public allAgencies1: any
  responsiveOptions;
  public MateriauxEquipement: any
  public filtredEquipement: any



  constructor(private Servicemateriaux: MateriauxService,
    private agencieService: AgenciesService,private sharedDataService:AgenciesService) { 
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
          breakpoint: '1315px',
          numVisible: 3,
          numScroll: 3
        },
        {
          breakpoint: '993px',
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
    this.agencieService.getAllAgencies().subscribe((data: any) => {
      this.allAgencies = data
      console.log('cc', this.allAgencies)
      this.allAgencies1= data
    })

    this.Servicemateriaux.getMateriauxEquipement().subscribe((data: any) => {
      this.MateriauxEquipement =data.filter((agency: any) => agency.phone_number_commercial != "yes");       
      console.log(this.MateriauxEquipement)
      this.filtredEquipement = this.MateriauxEquipement.reverse();
          console.log("reverce equipement",this.filtredEquipement)
          this.filtredEquipement.sort((a: any, b: any) => {
            // Extract the number from the beginning of the name
            const numA = parseInt(a.name.match(/^\d+/));
            const numB = parseInt(b.name.match(/^\d+/));
            
            // Handle cases where the number might not be present
            if (isNaN(numA)) return 1;
            if (isNaN(numB)) return -1;

            return numA - numB;
        });

    })
  }

  Search() {
    if (this.searchText !== "") {
      let searchValue = this.searchText.toLocaleLowerCase();

      this.allAgencies = this.allAgencies.filter((contact: any) => {
        return contact.name.toLocaleLowerCase().match(searchValue);
      });

    }
    else {
      this.allAgencies = this.allAgencies1
    }
  }
  clickMe(agencyId: number) {
    this.sharedDataService.updateAgencyId(agencyId);
  }
}
