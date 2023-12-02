 import { Component, ElementRef, Input, OnInit, ViewChild,Renderer2,HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { ProduitsService } from '../services/produits/produits.service';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../services/contact/contact.service';
import { AgenciesService } from '../services/agencies/agencies.service';



@Component({
  selector: 'app-description-details',
  templateUrl: './description-details.component.html',
  styleUrls: ['./description-details.component.css']
})
export class DescriptionDetailsComponent implements OnInit {
  isDesktop: boolean = true;
  @ViewChild("myElem") MyProp: ElementRef;

  public idSousCategorie: any
  public SousCategorie: any
  public idProduit: any
  public Produit: any

  public produit: any
  private contact: ContactService
  public Agency: any
  contactText = "";
  numText = "";
  dt: any;
  dataDisplay: any;
  FormData: FormGroup;
  constructor(private activatedRoute: ActivatedRoute,
    private produitService: ProduitsService,
    private _location: Location,
    private router: Router,
    private modalService: NgbModal,
    private builder: FormBuilder,
    private agencieService: AgenciesService,
    private renderer: Renderer2, private el: ElementRef) { }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  ngOnInit(): void {
    this.FormData = this.builder.group({
      Nom: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      description: new FormControl('', [Validators.required]),
    });

    this.idSousCategorie = this.activatedRoute.snapshot.paramMap.get('id')

    this.produitService.getSousCategorieById(this.idSousCategorie).subscribe(Response => {
      this.SousCategorie = Response;

      console.log(this.SousCategorie,'here')

    });





    this.produitService.getProduitById(this.idProduit).subscribe(data => {

      this.Produit = data;
      console.log("data", this.Produit)


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
    //    window.scrollTo({ top: 200, behavior: 'auto' }); 
    //    });
    //methode2:
    // const element = document.getElementById("box");
    // element.scrollIntoView({ block: "start", behavior: "auto" });
    this.checkScreenWidth(); 
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidth();
  }
  
  checkScreenWidth() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 800) {
      this.isDesktop = false;
    } else {
      this.isDesktop = true;
    }
  }
  onSubmit(FormData) {
    console.log(FormData)
    this.contact.PostMessage(FormData)
      .subscribe(response => {
        location.href = 'https://mailthis.to/confirm'
        console.log(response)
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }
  backClicked() {
    this._location.back();
  }

}
