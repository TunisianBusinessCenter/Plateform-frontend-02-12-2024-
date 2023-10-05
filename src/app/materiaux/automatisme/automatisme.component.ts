import { Component, OnInit } from '@angular/core';
import { AgenciesService } from 'src/app/services/agencies/agencies.service';
import { MateriauxService } from 'src/app/services/materiaux/materiaux.service';

@Component({
  selector: 'app-automatisme',
  templateUrl: './automatisme.component.html',
  styleUrls: ['./automatisme.component.css']
})
export class AutomatismeComponent implements OnInit {

  responsiveOptions;
  searchText = "";
  public allAgencies: any
  public allAgencies1: any
  filtredAutomatisme: any
  filtredAutomatisme1: any
  filtredAutomatisme2: any
  public MateriauxAutomatisme: any

  constructor(private Servicemateriaux: MateriauxService,
    private agencieService: AgenciesService) { 
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
//filtrage  
  ngOnInit(): void {
    this.Servicemateriaux.getMateriauxAutomatisme().subscribe((data: any) => {
      this.MateriauxAutomatisme = data;
      console.log(this.MateriauxAutomatisme)
      this.filtredAutomatisme1 = data;
      this.filtredAutomatisme = this.filtredAutomatisme1.filter((item: { name: string; }) => item.name);
      console.log(this.filtredAutomatisme)
      this.filtredAutomatisme2 = this.filtredAutomatisme;
    })
  }
  //rechercher  
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
