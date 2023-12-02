import { Component, OnInit } from '@angular/core';
import { AgenciesService } from 'src/app/services/agencies/agencies.service';
import { MateriauxService } from 'src/app/services/materiaux/materiaux.service';

@Component({
  selector: 'app-meuble',
  templateUrl: './meuble.component.html',
  styleUrls: ['./meuble.component.css']
})
export class MeubleComponent implements OnInit {

  searchText = "";
  public allAgencies: any
  public allAgencies1: any
  filtredMeuble: any
  filtredMeuble1: any
  filtredMeuble2: any
  public MateriauxMeuble:any
  responsiveOptions;

  constructor(private Servicemateriaux: MateriauxService,private sharedDataService:AgenciesService) {

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
    this.Servicemateriaux.getMateriauxMeuble().subscribe((data: any) => {
      this.MateriauxMeuble = data;
      console.log('here',data)

      console.log('here',this.MateriauxMeuble[0].categorie)
      this.filtredMeuble = this.MateriauxMeuble.reverse();
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
