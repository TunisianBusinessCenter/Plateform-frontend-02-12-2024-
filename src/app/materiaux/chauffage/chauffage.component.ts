import { Component, OnInit } from '@angular/core';
import { MateriauxService } from 'src/app/services/materiaux/materiaux.service';

@Component({
  selector: 'app-chauffage',
  templateUrl: './chauffage.component.html',
  styleUrls: ['./chauffage.component.css']
})
export class ChauffageComponent implements OnInit {

  searchText = "";
  public allAgencies:any
  public allAgencies1:any
  responsiveOptions;
  public MateriauxChauffage: any
  filtredChauffage: any
  filtredChauffage1: any
  filtredChauffage2: any


  constructor(private Servicemateriaux: MateriauxService) { 
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
    this.Servicemateriaux.getMateriauxChauffage().subscribe((data: any) => {
      this.MateriauxChauffage = data;
      console.log(this.MateriauxChauffage)
      this.filtredChauffage1 = data;

      this.filtredChauffage = this.filtredChauffage1.filter((item: { name: string; }) => item.name);
      console.log(this.filtredChauffage)
      this.filtredChauffage2 = this.filtredChauffage;
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
}
