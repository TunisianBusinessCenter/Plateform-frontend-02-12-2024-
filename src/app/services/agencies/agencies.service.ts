import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgenciesService {

  constructor(private http:HttpClient) { }

  getAllAgencies(){
    return this.http.get('https://app.titv-store-api.com/agencies/all')
  }
  getAllMateriaux(){
    return this.http.get('https://app.titv-store-api.com/search/all/materials')
  }
  getAgencieById(idAgencie:number){
    return this.http.get('https://app.titv-store-api.com/agencies/'+idAgencie)
  }
  getAgencieByRegion(region:string){
    return this.http.get('https://app.titv-store-api.com/search/promoteurs/'+region)
  }
 getAgencieSousse(){
    return this.http.get('https://app.titv-store-api.com/search/promoteurs/sousse')
  }
  getAgencieTunis(){
    return this.http.get('https://app.titv-store-api.com/search/promoteurs/tunis')
  }
 getAgencieMonastir(){
    return this.http.get('https://app.titv-store-api.com/search/promoteurs/monastir')
  }
  getAgencieMahdia(){
    return this.http.get('https://app.titv-store-api.com/search/promoteurs/mahdia')
  }
  getAgencieBizerte(){
    return this.http.get('https://app.titv-store-api.com/search/promoteurs/bizerte')
  }
  getAgencieSfax(){
    return this.http.get('https://app.titv-store-api.com/search/promoteurs/sfax')
  }
  getAgencieNabeul(){
    return this.http.get('https://app.titv-store-api.com/search/promoteurs/nabeul')
  }
  getAgencieTabarka(){
    return this.http.get('https://app.titv-store-api.com/search/promoteurs/tabarka')
  }
  getAgencieDjerba(){
    return this.http.get('https://app.titv-store-api.com/search/promoteurs/djerba')
  }

  getImageExemple(){
    return this.http.get('https://api.unsplash.com/photos/?client_id=1a28e59e586593faf822eb102154d46e8f56c830d3e5d896a0293804233f991a&per_page=30&page=1')
  }
  private agencyIdSource = new BehaviorSubject<number>(null);
  currentAgencyId = this.agencyIdSource.asObservable();

  updateAgencyId(agencyId: number) {
    this.agencyIdSource.next(agencyId);
  }
}
