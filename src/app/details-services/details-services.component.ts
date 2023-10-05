import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Location} from '@angular/common';
import { AgenciesService } from '../services/agencies/agencies.service';
import { AgenceServiceService } from '../services/agence-service/agence-service.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-details-services',
  templateUrl: './details-services.component.html',
  styleUrls: ['./details-services.component.css']
})
export class DetailsServicesComponent implements OnInit {
  @ViewChild("myElem") MyProp: ElementRef;

public AllAgency:any
public idService:any
public Service:any

  constructor(private _location: Location,
    private activatedRoute: ActivatedRoute,
    private agenceServiceService:AgenceServiceService,
    private agencieService:AgenciesService,
    private router:Router) { }

  ngOnInit(): void {
    this.agencieService.getAllAgencies().subscribe(data => {
      this.AllAgency = data;
      console.log(data)
    })

    this.idService= this.activatedRoute.snapshot.paramMap.get('id')
    
    this.agenceServiceService.getServiceById(this.idService).subscribe(data => {
      console.log(data)
      this.Service = data;

      // for(let categorie of this.Service?.sous_service){
      //   this.webSite = categorie.website
      //   console.log(this.webSite)
      // }
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
  backClicked() {
    this._location.back();
  }

}
