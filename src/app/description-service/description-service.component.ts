import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {Location} from '@angular/common';
import { AgenceServiceService } from '../services/agence-service/agence-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AgenciesService } from '../services/agencies/agencies.service';


@Component({
  selector: 'app-description-service',
  templateUrl: './description-service.component.html',
  styleUrls: ['./description-service.component.css']
})
export class DescriptionServiceComponent implements OnInit {
  @ViewChild("myElem") MyProp: ElementRef;

  public idSousService:any
  public SousService:any
  FormData: FormGroup;
  public Agency:any
  isDesktop: boolean;

  constructor(private activatedRoute: ActivatedRoute,
    private serviceService:AgenceServiceService,
    private _location:Location,
    private router: Router,
    private modalService: NgbModal,
    private builder: FormBuilder,
    private agencieService:AgenciesService
    ) { }

    openVerticallyCentered(content) {
      this.modalService.open(content, { centered: true });
    }

  ngOnInit(): void {
    this.FormData = this.builder.group({
      Nom: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      description: new FormControl('', [Validators.required]),
    });

    this.idSousService= this.activatedRoute.snapshot.paramMap.get('id')
    
    this.serviceService.getSousServiceById(this.idSousService).subscribe(data => {
      console.log(data)
      this.SousService = data;
     
    });
    this.agencieService.getAllAgencies().subscribe(data => {
      this.Agency = data
      console.log(data)
    })
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
  checkScreenWidth() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 800) {
      this.isDesktop = false;
    } else {
      this.isDesktop = true;
    }
  }
}
