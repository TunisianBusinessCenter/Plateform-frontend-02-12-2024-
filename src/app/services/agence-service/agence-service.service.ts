import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgenceServiceService {
  base_path = 'https://app.titv-store-api.com/';
  constructor(private http:HttpClient) { }

  getAgencieBanque(){
    return this.http.get('https://app.titv-store-api.com/search/agenceservice/banque')
  }
  getAgencieAssurances(){
    return this.http.get('https://app.titv-store-api.com/search/agenceservice/assurances')
  }
  getAgencieleasing(){
    return this.http.get('https://app.titv-store-api.com/search/agenceservice/leasing')
  }
  getAgencieAartisanat(){
    return this.http.get('https://app.titv-store-api.com/search/agenceservice/ProDeAartisanat')
  }
  getAgencieCommerces(){
    return this.http.get('https://app.titv-store-api.com/search/agenceservice/Commerces')
  }
  getAgencieDecorations(){
    return this.http.get('https://app.titv-store-api.com/search/agenceservice/decorations')
  }
  getAgencieServicesDivers(){
    return this.http.get('https://app.titv-store-api.com/search/agenceservice/servicesDivers')
  }
 
  getAgencieBureauxDeEtudes(){
    return this.http.get('https://app.titv-store-api.com/search/agenceservice/Bureauxdeetudes')
  }
  getAgencieServiceSoc(){
    return this.http.get('https://app.titv-store-api.com/search/agenceservice/SocDesServices')
  }

   /////////SERVICES///////////////

    getListService(){

      return this.http.get(this.base_path + 'services/all')
    }

    getServiceById(idService:number){
      return this.http.get('https://app.titv-store-api.com/services/'+idService)
    }

    getSousServiceByName(nameService:string){
      return this.http.get('https://app.titv-store-api.com/services/sous/category/'+nameService)
    }

    getSousServiceById(IdService:number){
      return this.http.get('https://app.titv-store-api.com/services/sous/'+IdService)
    }
    private sharedVariableSource1 = new BehaviorSubject<any>(null);
    sharedVariable1$ = this.sharedVariableSource1.asObservable();
  
    setSharedVariable1(data: any) {
      this.sharedVariableSource1.next(data);
      // console.log("data comming from service",data)
    }
  
}




