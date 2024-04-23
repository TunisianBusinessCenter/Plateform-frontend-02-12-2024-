import { MagazineService } from './../services/magazine/magazine.service';
import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { AgenciesService } from '../services/agencies/agencies.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { DataServiceService } from '../services/conteur/data-service.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
interface Duree {
  name: string;
  code: string;
}
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
  clickCounter6 = 0;
  clickCounter7 = 0;
  clickCounter8 = 0;
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
  dataFromLocalStorage: any[]
  lastItem: any;
  lastItem1: any;
  lastItem2: any;
  lastItem3: any;
  lastItem5: any;
  lastItem4: any;
  lastItem6: any;
  displayMaximizable1: boolean;
  displayMaximizable2: boolean;
  displayMaximizable3: boolean;
  displayMaximizable4: boolean;
  displayMaximizable5: boolean;


  durees: Duree[];
  contactText = "";
  numText = "";
  agencies: any;
  firstMagazin: any;
  constructor(private magazineservice: MagazineService,
    private breakpointObserver: BreakpointObserver,

    private renderer: Renderer2,
    private agencieService: AgenciesService,
    private router: Router,
    private meta: Meta,
    private title: Title,
    private dataService: DataServiceService) {


    this.getDataFromLocalStorage();
    this.lastItem4 = this.getLastItemFromData();
    this.getDataFromLocalStorage1()
    this.lastItem1 = this.getLastItemFromData1();
    this.getDataFromLocalStorage2()
    this.lastItem2 = this.getLastItemFromData2();
    this.getDataFromLocalStorage3()
    this.lastItem3 = this.getLastItemFromData3();
    this.getDataFromLocalStorage5()
    this.lastItem5 = this.getLastItemFromData5();
    this.getDataFromLocalStorage6()

    this.lastItem6 = this.getLastItemFromData6();
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
    this.clickCounter6 = dataService.getClicks6();
    // this.clickCounter7 = dataService.getClicks7();
    // this.clickCounter8 = dataService.getClicks8();


  }
  public setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }
  showMessage: boolean = false;


  showAlert() {
    this.showMessage = true;
  }
  ngOnInit(): void {
    this.getDataFromLocalStorage1()
    this.getDataFromLocalStorage2()
    this.getDataFromLocalStorage3()
    this.getDataFromLocalStorage();
    this.getDataFromLocalStorage5()
    this.getDataFromLocalStorage6()
    this.getDataFromLocalStorage7()
    this.getDataFromLocalStorage8()

    // ... other initialization logic ...

    // Determine the scroll offset based on device mode
    // const scrollOffset = this.breakpointObserver.isMatched(Breakpoints.Handset) ? 400 : 1100;

    // this.scrollDown(scrollOffset);



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
      // console.log('cc', this.allAgencies)
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
      this.firstMagazin = this.Magazine[0]
      console.log("this is my magazin", this.Magazine[0])

    });


    ///methode1:
    // this.router.events.subscribe((evt) => {
    //   if (!(evt instanceof NavigationEnd)) {
    //       return;
    //   }
    //    window.scrollTo({ top: 400, behavior: 'auto' }); 

    //    });
    //methode2:
    // const element = document.getElementById("box");
    // element.scrollIntoView({ block: "start", behavior: "auto" });

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
  incrementCounter6() {
    this.clickCounter6++;
    this.dataService.addClick6();
  }
  incrementCounter7() {
    this.clickCounter7++;
    this.dataService.addClick6();
  }
  incrementCounter8() {
    this.clickCounter8++;
    this.dataService.addClick6();
  }
  onImageClick() {
    const link = document.querySelector('img[data-link]').getAttribute('data-link');
    window.open(link, '_blank');
  }
  // clickMe(){
  //   this.dataService.getClicks1().subscribe(data =>{
  //     console.log("this is a test ")
  //   })
  // }


  getDataFromLocalStorage(): void {
    const data = localStorage.getItem('clicks4');
    this.dataFromLocalStorage = JSON.parse(data) || [];
  }

  getLastItemFromData(): any {
    if (this.dataFromLocalStorage.length > 0) {
      return this.dataFromLocalStorage[this.dataFromLocalStorage.length - 1];
    }
    return null;
  }

  getDataFromLocalStorage1(): void {
    const data = localStorage.getItem('clicks1');
    this.dataFromLocalStorage = JSON.parse(data) || [];
  }
  getLastItemFromData1(): any {
    if (this.dataFromLocalStorage.length > 0) {
      return this.dataFromLocalStorage[this.dataFromLocalStorage.length - 1];
    }
    return null;
  }
  getDataFromLocalStorage2(): void {
    const data = localStorage.getItem('clicks2');
    this.dataFromLocalStorage = JSON.parse(data) || [];
  }
  getLastItemFromData2(): any {
    if (this.dataFromLocalStorage.length > 0) {
      return this.dataFromLocalStorage[this.dataFromLocalStorage.length - 1];
    }
    return null;
  }
  getDataFromLocalStorage3(): void {
    const data = localStorage.getItem('clicks3');
    this.dataFromLocalStorage = JSON.parse(data) || [];
  }
  getLastItemFromData3(): any {
    if (this.dataFromLocalStorage.length > 0) {
      return this.dataFromLocalStorage[this.dataFromLocalStorage.length - 1];
    }
    return null;
  }
  getDataFromLocalStorage5(): void {
    const data = localStorage.getItem('clicks5');
    this.dataFromLocalStorage = JSON.parse(data) || [];
  }
  getLastItemFromData5(): any {
    if (this.dataFromLocalStorage.length > 0) {
      return this.dataFromLocalStorage[this.dataFromLocalStorage.length - 1];
    }
    return null;
  }
  getDataFromLocalStorage6(): void {
    const data = localStorage.getItem('clicks6');
    this.dataFromLocalStorage = JSON.parse(data) || [];
    console.log(data)
  }
  getLastItemFromData6(): any {
    if (this.dataFromLocalStorage.length > 0) {
      return this.dataFromLocalStorage[this.dataFromLocalStorage.length - 1];
    }
    return null;
  }
  getDataFromLocalStorage7(): void {
    const data = localStorage.getItem('clicks6');
    this.dataFromLocalStorage = JSON.parse(data) || [];
    console.log(data)
  }
  getLastItemFromData7(): any {
    if (this.dataFromLocalStorage.length > 0) {
      return this.dataFromLocalStorage[this.dataFromLocalStorage.length - 1];
    }
    return null;
  }
  getDataFromLocalStorage8(): void {
    const data = localStorage.getItem('clicks6');
    this.dataFromLocalStorage = JSON.parse(data) || [];
    console.log(data)
  }
  getLastItemFromData8(): any {
    if (this.dataFromLocalStorage.length > 0) {
      return this.dataFromLocalStorage[this.dataFromLocalStorage.length - 1];
    }
    return null;
  }


  showMaximizableDialog1() {
    this.displayMaximizable1 = true;
  }
  showMaximizableDialog2() {
    this.displayMaximizable2 = true;
  }
  showMaximizableDialog3() {
    this.displayMaximizable3 = true;
  }
  showMaximizableDialog4() {
    this.displayMaximizable4 = true;
  }
  showMaximizableDialog5() {
    this.displayMaximizable5 = true;
  }
  getAgencies() {
    this.magazineservice.getMagazine().subscribe((data: any) => {
      this.agencies = data;
      const lastAgency = this.agencies[this.agencies.length - 1];
      console.log(this.agencies); // Do something with the last agency
      console.log(lastAgency); // Do something with the last agency

    });
  }
  private scrollDown(offset: number): void {
    // Scroll the window down by the specified offset
    window.scrollTo({ top: offset, behavior: 'auto' });
  }
  chunkArray(array: any[], size: number): any[] {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  }

}

