import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgenceImmobilieresService {

  base_path = 'https://app.titv-store-api.com/';

  constructor(private http:HttpClient) { }
  getAllAgencies(){
    return this.http.get('https://app.titv-store-api.com/all')
  }
  getAgencieById(idAgencie:number){
    return this.http.get('https://app.titv-store-api.com/agencies/'+idAgencie)
  }
  getAgencieSousse(){
    return this.http.get('https://app.titv-store-api.com/search/agenceimmob/sousse')
  }
  getAgencieTunis(){
    return this.http.get('https://app.titv-store-api.com/search/agenceimmob/tunis')
  }
  getAgencieMonastir(){
    return this.http.get('https://app.titv-store-api.com/search/agenceimmob/monastir')
  }
  getAgencieMahdia(){
    return this.http.get('https://app.titv-store-api.com/search/agenceimmob/mahdia')
  }
  getAgencieBizerte(){
    return this.http.get('https://app.titv-store-api.com/search/agenceimmob/bizerte')
  }
  getAgencieSfax(){
    return this.http.get('https://app.titv-store-api.com/search/agenceimmob/sfax')
  }
  getAgencieNabeul(){
    return this.http.get('https://app.titv-store-api.com/search/agenceimmob/nabeul')
  }
  getAgencieDjerba(){
    return this.http.get('https://app.titv-store-api.com/search/agenceimmob/djerba')
  }

 /* getImageExemple(){
    return this.http.get('https://api.unsplash.com/photos/?client_id=1a28e59e586593faf822eb102154d46e8f56c830d3e5d896a0293804233f991a&per_page=30&page=1')
  }*/

////////////biensImmobs///////////////

getListBiens(){

  return this.http.get(this.base_path + 'biens/all')
}

getBiensById(idBiens:number){
  return this.http.get('https://app.titv-store-api.com/biens/'+idBiens)
}

getSousBiensByName(nameBiens:string){
  return this.http.get('https://app.titv-store-api.com/biens/sous/category/'+nameBiens)
}

getSousBiensById(IdBiens:number){
  return this.http.get('https://app.titv-store-api.com/biens/sous/'+IdBiens)
}

  }

