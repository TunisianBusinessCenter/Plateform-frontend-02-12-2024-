import { Component, OnInit } from '@angular/core';
import { AgenceImmobilieresService } from '../services/agence-immob/agence-immobilieres.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AgenciesService } from '../services/agencies/agencies.service';
import { interval, Observable, Subscription } from 'rxjs';
import { ProduitsService } from '../services/produits/produits.service';
import { CoffeeAgencyService } from '../services/coffee/coffee-agency.service';
import { AfterViewInit, ElementRef, ViewChild, Renderer2, HostListener, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, Meta, SafeResourceUrl, Title } from '@angular/platform-browser';
import {  NavigationEnd } from '@angular/router';
import { ShareService } from '../services/share/share.service';
import { filter } from 'rxjs';
import { ProjetsService } from '../services/projets/projets.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
interface date {
  name: string;
  code: string;
  
}
@Component({
  selector: 'app-coffee-details',
  templateUrl: './coffee-details.component.html',
  styleUrls: ['./coffee-details.component.css']
})
export class CoffeeDetailsComponent implements OnInit {
[x: string]: any;
  idProduit: any;
  selectedCategory: string = ''; // Initially, no category is selected
  sousBiens: any;
 
  dataSubscription: any;
  receivedId: any;
  intervaleSubscription: Subscription;
  idA: any;
  agency: any;
  agencyName: any;
  displayMaximizable5: boolean;
  date: date[];
  contactText = "";
  agrencyDescription: any;
  categoryList: any;
  AgencyBaniere: any;
  idCoffee :any
  agencyDescription: any;
  logo: any;
  constructor( private coffeeService:CoffeeAgencyService,private biensImoobService: AgenceImmobilieresService, private activatedRoute: ActivatedRoute, private _location: Location, private as: AgenciesService, private router: Router, private produitService: ProduitsService,    private modalService: NgbModal,
  ) {
    this.idProduit = this.activatedRoute.snapshot.paramMap.get('id')

    this.produitService.getProduitById(this.idProduit).subscribe(data => {

      this.sousBiens = data;
      this.categoryList = this.sousBiens.categoryList

      console.log("here", this.sousBiens)
    });

  }

  displayDialog: boolean = false;
  selectedImage: string = '';
  openImageInDialog(data: string): void {
    this.selectedImage = data;
    this.displayDialog = true;
    console.log("sfdss", this.selectedImage)
  }
  private isMobile(): boolean {
    // Set a threshold for mobile screen width (adjust as needed)
    const mobileScreenWidth = 768;
    return window.innerWidth < mobileScreenWidth;
  }

  click() {
    this.biensImoobService.getSousBiensById(this.idProduit).subscribe(data => {

      this.sousBiens = data;
      console.log(this.sousBiens)
    });
  }
  agencyId: string;
  currentId: any = '';

  id$: Observable<any>;
  private idSubscription: Subscription;

  ngOnInit(): void {
    this.idCoffee = this.coffeeService.getIdAgency()

    const storedId = this.as.getStoredId();
    if (storedId) {
      this.currentId = storedId;
    }
    this.id$ = this.as.getVariable();

    this.idSubscription = this.id$.subscribe((id: number) => {

      this.as.getAgencieById(this.idCoffee).subscribe((data: any) => {
        this.agency = data.produits;

        this.agencyName = data.name;
        this.AgencyBaniere = data?.mobile_apps[0]?.mobile_cover_image_url;

        this.agencyId = data?.id;
        this.agencyDescription = data.description
        this.logo=data.logo_url
        console.log('this is my datathis is my datathis is my datathis is my datathis is my datathis is my datathis is my datathis is my datathis is my datathis is my datathis is my datathis is my data', data, this.agency);

        // Unsubscribe the subscription after receiving the data
        this.idSubscription.unsubscribe();
      });
    });

    // this.updateVariable

  }

  displayMaximizable: boolean;
  showMaximizableDialog() {
    this.displayMaximizable = true;
  }
  backClicked() {
    this._location.back();
  }

  // updateVariable(newValue: any) {
  //   this.as.updateVariable(newValue);
  // }


  clickMe() {

  }


  getValue() {
    return this.as.getVariable();
  }
  refreshPage(): void {

    // Add a delay of 2 seconds (2000 milliseconds) before reloading the page
    setTimeout(() => {

      location.reload();

    }, 1000);
  }
  getId() {
    this.as.currentId.subscribe((id: any) => {
      console.log('Received ID in CoffeeDetailsComponent:', id);
      this.currentId = id;
      // Here you can perform actions when the ID changes, such as fetching new data
    });
  }
  truncateSentence(sentence: string): string {
    if (sentence.length > 70) {
      return sentence.substring(0, 70) + ' . . .';
    }
    return sentence;
  }





  
  navigateAndRefresh(agency: any) {
    // Extract the id from the project object
    const projectId = agency.id;

    // Navigate to the specified route
   
    this.router.navigate(['/coffee-details', projectId])
      .then(() => {
        // If navigation is successful, call the refresh function
        this.refresh();
      });
  }
  refresh(): void {
    this.router.navigateByUrl("/refreshcafe", { skipLocationChange: true }).then(() => {
      console.log(decodeURI(this._location.path()));
      this.router.navigate([decodeURI(this._location.path())]);

      // Set timeout to call the refresh function again after 2 seconds

    });
  }
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
}

