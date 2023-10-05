import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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


  
}




