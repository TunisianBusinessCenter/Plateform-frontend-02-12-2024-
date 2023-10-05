import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeilleursBiensService {

  base_path = 'https://app.titv-store-api.com/';

  constructor(private http:HttpClient) { }
  getAllAgencies(){
    return this.http.get('https://app.titv-store-api.com/agencies/all')
  }
  getAgencieById(idAgencie:number){
    return this.http.get('https://app.titv-store-api.com/agencies/'+idAgencie)
  }
  getAgencieMeilleursBiens(){
    return this.http.get('https://app.titv-store-api.com/search/all/meilleursbiens')
  }

   getMeilleursBiensSousse(){
     return this.http.get('https://app.titv-store-api.com/search/meilleursbiens/sousse')
   }
  getMeilleursBiensTunis(){
    return this.http.get('https://app.titv-store-api.com/search/meilleursbiens/tunis')
  }
  getMeilleursBiensMonastir(){
    return this.http.get('https://app.titv-store-api.com/search/meilleursbiens/monastir')
  }
  getMeilleursBiensMahdia(){
    return this.http.get('https://app.titv-store-api.com/search/meilleursbiens/mahdia')
  }
  getMeilleursBiensBizerte(){
    return this.http.get('https://app.titv-store-api.com/search/meilleursbiens/bizerte')
  }
  getMeilleursBiensSfax(){
    return this.http.get('https://app.titv-store-api.com/search/meilleursbiens/sfax')
  }
  getMeilleursBiensNabeul(){
    return this.http.get('https://app.titv-store-api.com/search/meilleursbiens/nabeul')
  }

  

////////////biensImmobs///////////////

getListMeilleursBiens(){

  return this.http.get(this.base_path + 'biens/all/mb')
}

getMeilleursBiensById(idBiens:number){
  return this.http.get('https://app.titv-store-api.com/biens/'+idBiens)
}

getSousMeilleursBiensByName(nameBiens:string){
  return this.http.get('https://app.titv-store-api.com/biens/sous/category/'+nameBiens)
}

getSousMeilleursBiensById(IdBiens:number){
  return this.http.get('https://app.titv-store-api.com/biens/sous/'+IdBiens)
}

  }

