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
  public MateriauxMenuiserie: any

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
      this.MateriauxMenuiserie = data.sort((a: any, b: any) => {
        const dateA = this.parseDate(a.createdAt);
        const dateB = this.parseDate(b.createdAt);
        return dateB.getTime() - dateA.getTime();
      });
      console.log("this is menuiserie",this.MateriauxMenuiserie);
    });
  }


  parseDate(dateString: string): Date {
    const parts = dateString.split(/[\s/:]/);
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // Months are zero-based
    const year = parseInt(parts[2], 10);
    const hours = parseInt(parts[3], 10);
    const minutes = parseInt(parts[4], 10);
    const seconds = parseInt(parts[5], 10);
    return new Date(year, month, day, hours, minutes, seconds);
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
