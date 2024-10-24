import { Component, OnInit } from '@angular/core';
import { MateriauxService } from 'src/app/services/materiaux/materiaux.service';

@Component({
  selector: 'app-peinture',
  templateUrl: './peinture.component.html',
  styleUrls: ['./peinture.component.css']
})
export class PeintureComponent implements OnInit {

  searchText = "";
  public allAgencies: any
  public allAgencies1: any
  responsiveOptions;
  filtredDecoration: any
  filtredDecoration1: any
  filtredDecoration2: any
  public MateriauxDecoration:any

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
    this.Servicemateriaux.getMateriauxDecoration().subscribe((data: any) => {
      this.MateriauxDecoration = data;
      // console.log(this.MateriauxDecoration);
  
      // Filter out items with specific IDs
      this.filtredDecoration = this.MateriauxDecoration.filter((item: any) => {
        return item.id !== 6567 && item.id !== 6956;
      });
  
      // Optionally, reverse the filtered array
      this.filtredDecoration.reverse();
    });
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
  formatAgencyName(name: string): string {
    return name.replace(/\s+/g, '-');
}
}
