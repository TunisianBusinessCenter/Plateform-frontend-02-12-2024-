import { Component, OnInit } from '@angular/core';
import { AgenceImmobilieresService } from '../services/agence-immob/agence-immobilieres.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AgenciesService } from '../services/agencies/agencies.service';
import { interval, Observable, Subscription } from 'rxjs';
import { ProduitsService } from '../services/produits/produits.service';
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
  idProduit: any;
  sousBiens: any;
  private modalService: NgbModal
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

  constructor(private biensImoobService:AgenceImmobilieresService,private activatedRoute:ActivatedRoute,    private _location: Location , private as:AgenciesService  ,private router:Router ,private produitService :ProduitsService) { 
    this.idProduit= this.activatedRoute.snapshot.paramMap.get('id')

    this.produitService.getProduitById(this.idProduit).subscribe(data => {

      this.sousBiens = data;
      console.log("here",this.sousBiens)
    });
  
  }
  
  displayDialog: boolean = false;
  selectedImage: string = '';
  openImageInDialog(data: string): void {
    this.selectedImage = data;
    this.displayDialog = true;
    console.log("sfdss",this.selectedImage)
  }
  private isMobile(): boolean {
    // Set a threshold for mobile screen width (adjust as needed)
    const mobileScreenWidth = 768;
    return window.innerWidth < mobileScreenWidth;
}
openVerticallyCentered(content) {
  this.modalService.open(content, { centered: true });
}
click (){ 
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
   const storedId = this.as.getStoredId();
   if (storedId) {
     this.currentId = storedId;
   }
        this.id$ = this.as.getVariable();

    this.idSubscription = this.id$.subscribe((id: number) => {
      
      this.as.getAgencieById(this.currentId).subscribe((data: any) => {
        
        this.agencyName = data.name;
        this.agencyId = data.id;
        this.agrencyDescription =data.description
        this.agency = data.produits;
        console.log('this is my data', data);
    
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
showMaximizableDialog5() {
  this.displayMaximizable5 = true;
}
getId(){
  this.as.currentId.subscribe((id:any) => {
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
}

