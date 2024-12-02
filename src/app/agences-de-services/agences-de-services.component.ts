import { Component, OnInit } from '@angular/core';
import { AgenceImmobilieresService } from '../services/agence-immob/agence-immobilieres.service';
import { AgenceServiceService } from '../services/agence-service/agence-service.service';
import { AgenciesService } from '../services/agencies/agencies.service';
import { Observable, map } from 'rxjs';

interface SousCat {
  name: string,
  value: string
}



@Component({
  selector: 'app-agences-de-services',
  templateUrl: './agences-de-services.component.html',
  styleUrls: ['./agences-de-services.component.css']
})
export class AgencesDeServicesComponent implements OnInit {

  categoryList: string[] = [];
  sousServices: any[] = [];
  filteredSousServices: any[] = [];
  responsiveOptions: any[]; // PrimeNG responsive options
  public AgencieAssurances: any
  public AgencieBanque: any
  public AgenciesLeasing: any
  public BureauxAartisanat: any
  public BureauxCommerces: any
  public AgenciesDecoration: any
  public BureauxDeEtude: any
  public AgencyGeometres:any
  public ServicesDivers:any
  filtredServicesDivers:any
  filtredServicesDivers1:any
  filtredServicesDivers2:any


  public RoleOk = false

  public search: string  = '';
  public valueSearch! : string ;
  public searchList : string[] =[]
  filtred:any


  public selectedSousCategorie!:SousCat;

  listeSousCat: SousCat[] = [
    {name: 'Pro de l’artisanat', value: 'ProDeAartisanat '},
    {name: 'Sociétés industriel', value: 'SocIndustriel '},
    {name: 'Commerces', value: 'Commerces '},
    {name: 'Sociétés des Services', value: 'SocDesServices '},
  ];
  agencieCoffee: any;
  ServiceSoc: any;

  constructor(private agenceServicesServices: AgenceServiceService,private as:AgenciesService) {
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
        breakpoint: '1250px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '954px',
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
  agencieCoffee$: Observable<any>;

  ngOnInit(): void {
    this.agenceServicesServices.getAgencieAssurances().subscribe((data: any) => {
      this.AgencieAssurances = data;
      // console.log(this.AgencieAssurances)
    })
    this.agenceServicesServices.getServiceById(9935).subscribe((data: any) => {
      // console.log('Service data:', data);
      this.categoryList = data.categoryList;
      this.sousServices = data.sous_services;
      this.filteredSousServices = this.sousServices; // Show all initially
    });
    this.agencieCoffee$ = this.as.getAllAgencies().pipe(
      map((data: any) => data.filter(item => item.categorie === 'coffee'))
    );
    this.agenceServicesServices.getAgencieBanque().subscribe((data: any) => {
      this.AgencieBanque = data;
      // console.log(this.AgencieBanque)
    })
    this.agenceServicesServices.getAgencieleasing().subscribe((data: any) => {
      this.AgenciesLeasing = data;
      // console.log(this.AgenciesLeasing)
    })
    this.agenceServicesServices.getAgencieAartisanat().subscribe((data: any) => {
      this.BureauxAartisanat = data;
      // console.log(this.BureauxAartisanat)
    })
    this.agenceServicesServices.getAgencieCommerces().subscribe((data: any) => {
      this.BureauxCommerces = data;
      // console.log(this.BureauxCommerces)
    })
    this.agenceServicesServices.getAgencieDecorations().subscribe((data: any) => {
      this.AgenciesDecoration = data;
      // console.log(this.AgenciesDecoration)
    })

    this.agenceServicesServices.getAgencieServicesDivers().subscribe((data: any) => {
      this.ServicesDivers = data;
      // console.log(this.ServicesDivers)
      this.filtredServicesDivers1= data

      this.filtredServicesDivers = this.filtredServicesDivers1.filter((item: { sous_categorie: string; }) => item.sous_categorie);
      // console.log(this.filtredServicesDivers)
      this.filtredServicesDivers2 = this.filtredServicesDivers;
    })
      
    this.agenceServicesServices.getAgencieServiceSoc().subscribe((data: any) => {
      this.ServiceSoc = data;
      console.log("this.ServiceSoc",this.ServiceSoc)
      // console.log(this.ServicesDivers)
      this.filtredServicesDivers1= data

      this.filtredServicesDivers = this.filtredServicesDivers1.filter((item: { sous_categorie: string; }) => item.sous_categorie);
      // console.log(this.filtredServicesDivers)
      this.filtredServicesDivers2 = this.filtredServicesDivers;
    })
      
   
    this.agenceServicesServices.getAgencieBureauxDeEtudes().subscribe((data: any) => {
      this.BureauxDeEtude = data.reverse();
      // console.log(this.BureauxDeEtude)
    })
  }

  getValueSearch(){
    
  }

  filterSousCategorie(event : any)  {
    
    console.log(this.selectedSousCategorie)
    if(this.selectedSousCategorie){

    this.ServicesDivers =  this.filtredServicesDivers2.filter((item : any) => item.sous_categorie ==  this.selectedSousCategorie.value);
    // console.log(this.selectedSousCategorie.value)
    }else{
     this.ServicesDivers = this.filtredServicesDivers1
    }
  }
  

  filterServices(category: string): void {
    this.filteredSousServices = this.sousServices.filter(sous_service => sous_service.category === category);
  }
  
}
