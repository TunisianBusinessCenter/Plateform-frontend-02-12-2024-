import { Component, OnInit } from '@angular/core';
import { MateriauxService } from 'src/app/services/materiaux/materiaux.service';

@Component({
  selector: 'app-protection',
  templateUrl: './protection.component.html',
  styleUrls: ['./protection.component.css']
})
export class ProtectionComponent implements OnInit {

  searchText = "";
  public allAgencies: any
  public allAgencies1: any
  responsiveOptions
  filtredProtection: any
  filtredProtection1: any
  filtredProtection2: any
  public MateriauxProtection:any

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
    this.Servicemateriaux.getMateriauxProtection().subscribe((data: any) => {
      this.MateriauxProtection = data;
      console.log(this.MateriauxProtection)
      this.filtredProtection1 = data;

      this.filtredProtection = this.filtredProtection1.filter((item: { name: string; }) => item.name);
      console.log(this.filtredProtection)
      this.filtredProtection2 = this.filtredProtection;
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
