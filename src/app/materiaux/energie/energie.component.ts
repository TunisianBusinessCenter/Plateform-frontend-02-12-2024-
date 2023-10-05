import { Component, OnInit } from '@angular/core';
import { MateriauxService } from 'src/app/services/materiaux/materiaux.service';

@Component({
  selector: 'app-energie',
  templateUrl: './energie.component.html',
  styleUrls: ['./energie.component.css']
})
export class EnergieComponent implements OnInit {

  searchText = "";
  public allAgencies:any
  public allAgencies1:any
  responsiveOptions;
  public MateriauxEnergie: any
  filtredEnergie: any
  filtredEnergie1: any
  filtredEnergie2: any

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
    this.Servicemateriaux.getMateriauxEnergie().subscribe((data: any) => {
      this.MateriauxEnergie = data;
      console.log(this.MateriauxEnergie)
      this.filtredEnergie1 = data;

      this.filtredEnergie = this.filtredEnergie1.filter((item: { name: string; }) => item.name);
      console.log(this.filtredEnergie)
      this.filtredEnergie2 = this.filtredEnergie;
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
