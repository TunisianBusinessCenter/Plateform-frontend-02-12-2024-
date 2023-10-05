import { MagazineService } from './../services/magazine/magazine.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AgenciesService } from '../services/agencies/agencies.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { DataServiceService } from '../services/conteur/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  clickCounter1 = 0;
  clickCounter2 = 0;
  clickCounter3 = 0;
  clickCounter4 = 0;
  clickCounter5 = 0;
  public linkFBook: any

  @ViewChild("myElem") MyProp: ElementRef;
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);


  images: any

  responsiveOptions;
  public Magazine: any
  public allAgencies: any
  public allAgencies1: any
  searchText = "";
  control = new FormControl();
  streets: string[] = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];
  filteredStreets: Observable<string[]>;

  public AgenciesTunis: any
  constructor(private magazineservice: MagazineService,
    private agencieService: AgenciesService,
    private router: Router,
    private meta: Meta,
    private title: Title,
    private dataService: DataServiceService) {

    this.meta.addTags([
      { name: 'description', content: 'Centre Tunisien des affaires spécialiste dans le domaine de l’immobilier & de construction. Prospecter, acheter, vendre, louer en Tunisie.' },
      { name: 'author', content: 'buttercms' },
      { name: 'keywords', content: 'Angular, ButterCMS' }
    ]);
    this.setTitle('Tunisie Immobilier | Centre tunisien des affaires');

    this.responsiveOptions = [
      {
        breakpoint: '1724px',
        numVisible: 4,
        numScroll: 4
      },
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '650px',
        numVisible: 1,
        numScroll: 1
      }
    ];
    this.clickCounter1 = dataService.getClicks1();
    this.clickCounter2 = dataService.getClicks2();
    this.clickCounter3 = dataService.getClicks3();
    this.clickCounter4 = dataService.getClicks4();
    this.clickCounter5 = dataService.getClicks5();

  }
  public setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

  ngOnInit(): void {
    this.images = [
      { edition: 'Edition 210', image: 'https://tunisie-immob.s3.eu-west-3.amazonaws.com/YS0PoED210.jpg', url: 'https://www.docdroid.net/ulLZVvv/ed-210-pdf', clickCounter: this.clickCounter5 },
      { edition: 'Edition 209', image: 'https://tunisie-immob.s3.eu-west-3.amazonaws.com/0TkVYBIAS%20ED%20209.jpg', url: 'https://docdro.id/EhLxkZj', clickCounter: this.clickCounter5 },
      { edition: 'Edition 208', image: 'https://tunisie-immob.s3.eu-west-3.amazonaws.com/p1yLeED208.jpg', url: 'https://docdro.id/pF789td', clickCounter: this.clickCounter1 },
      { edition: 'Edition 207', image: 'https://tunisie-immob.s3.eu-west-3.amazonaws.com/3lY8TED-207.jpg', url: 'https://www.docdroid.net/wJvlQ7P/ed-207-pdf', clickCounter: this.clickCounter2 },
      { edition: 'Edition 206', image: 'https://tunisie-immob.s3.eu-west-3.amazonaws.com/YeqOjED206web.png', url: 'https://www.docdroid.net/VysuNev/ed-206-pdf?fbclid=IwAR0hnd5rANRQQN4cHcWUjbePJQfrEbuCaWepRiXl5LebVjUfoAuA_hMPrp4', clickCounter: this.clickCounter3 },
      { edition: 'Edition 205', image: 'https://tunisie-immob.s3.eu-west-3.amazonaws.com/APCPmED205WEB.jpg', url: 'https://www.docdroid.net/RheLUtc/ed205-pdf', clickCounter: this.clickCounter4 },
    ];

    this.agencieService.getAllAgencies().subscribe((data: any) => {
      this.allAgencies = data
      console.log('cc', this.allAgencies)
      this.allAgencies1 = data
    })

    this.magazineservice.getMagazine().subscribe((data: any) => {
      this.Magazine = data.sort((a, b) => {
        // extraire les nombres dans les noms
        const numA = parseInt(a.name.match(/\d+/g)?.[0] || '0');
        const numB = parseInt(b.name.match(/\d+/g)?.[0] || '0');
        // comparer les nombres extraits
        if (numA > numB) {
          return -1;
        } else if (numA < numB) {
          return 1;
        } else {
          return 0;
        }
      });
      for (let linkBook of this.Magazine) {
        if (linkBook.id === 3933) {
          this.linkFBook = linkBook.flip_book_link
          console.log("test link", this.linkFBook)
        }
      }
      console.log(this.Magazine)
    });


    ///methode1:
    // this.router.events.subscribe((evt) => {
    //   if (!(evt instanceof NavigationEnd)) {
    //       return;
    //   }
    //    window.scrollTo({ top: 400, behavior: 'auto' }); 

    //    });
    //methode2:
    const element = document.getElementById("box");
    element.scrollIntoView({ block: "start", behavior: "auto" });

  }
  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
  afficheListAgencie() {
    this.agencieService.getAllAgencies().subscribe((data: any) => {
      this.allAgencies = data
    })
    console.log("listAgence")
  }
  tableListBoxSelectEvent(event) {
    console.log('this.choosenTable >> ' + JSON.stringify(event));
    console.log('this.choosenTable >> ' + JSON.stringify(event.value));
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
  incrementCounter1() {
    this.clickCounter1++;
    this.dataService.addClick1();
  }
  incrementCounter2() {
    this.clickCounter2++;
    this.dataService.addClick2();
  }
  incrementCounter3() {
    this.clickCounter3++;
    this.dataService.addClick3();
  }
  incrementCounter4() {
    this.clickCounter4++;
    this.dataService.addClick4();
  }
  incrementCounter5() {
    this.clickCounter5++;
    this.dataService.addClick5();
  }
  onImageClick() {
    const link = document.querySelector('img[data-link]').getAttribute('data-link');
    window.open(link, '_blank');
  }
}

