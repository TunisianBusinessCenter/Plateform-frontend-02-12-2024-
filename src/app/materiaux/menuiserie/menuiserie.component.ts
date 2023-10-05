import { Component, OnInit } from '@angular/core';
import { MateriauxService } from 'src/app/services/materiaux/materiaux.service';

@Component({
  selector: 'app-menuiserie',
  templateUrl: './menuiserie.component.html',
  styleUrls: ['./menuiserie.component.css']
})
export class MenuiserieComponent implements OnInit {

  
  searchText = "";
  public allAgencies: any
  public allAgencies1: any
  responsiveOptions;
  filtredMenuiserie: any
  filtredMenuiserie1: any
  filtredMenuiserie2: any
  public MateriauxMenuiserie:any

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
    this.Servicemateriaux.getMateriauxMenuiserie().subscribe((data: any) => {
      this.MateriauxMenuiserie = data;
      this.filtredMenuiserie = this.MateriauxMenuiserie.reverse();

      console.log(this.MateriauxMenuiserie)
      this.filtredMenuiserie1 = data;

      this.filtredMenuiserie = this.filtredMenuiserie1.filter((item: { name: string; }) => item.name);
      console.log(this.filtredMenuiserie)
      this.filtredMenuiserie2 = this.filtredMenuiserie;
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
