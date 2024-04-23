import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgenciesService {
  private AgencyBaniereSubject = new BehaviorSubject<any>(null);
  public AgencyBaniere$ = this.AgencyBaniereSubject.asObservable();
  id: any;
  private myVariableSubject: BehaviorSubject<any>;

  private agencyIdSubject = new BehaviorSubject<string>('');
  myVariable: any;
  private idSource = new BehaviorSubject<string>(''); // Initial value is an empty string
  currentId = this.idSource.asObservable();
  constructor(private http:HttpClient) { 
    const initialValue = localStorage.getItem('myVariable');
    this.myVariableSubject = new BehaviorSubject<any>(initialValue ? JSON.parse(initialValue) : null);
  }
  

  setAgencyBaniere(AgencyBaniere: any) {
    this.AgencyBaniereSubject.next(AgencyBaniere);
  }
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
  processData(data: any) {
    // Your logic to process the data goes here
    console.log('Processing data in the service:', data);
  }
  private sharedVariableSource = new BehaviorSubject<any>(null);
  sharedVariable$ = this.sharedVariableSource.asObservable();

  setSharedVariable(data: any) {
    this.sharedVariableSource.next(data);
  }
  // private idSource = new BehaviorSubject<number>(0);
  currentId$ = this.idSource.asObservable();

  // changeId(newId: number) {
  //   this.idSource.next(newId);
  // }
  private sharedData: any;

  setSharedData(data: any) {
    this.sharedData = data;
  }

  getSharedData() {
    return this.sharedData;
  }




















  setVariable(value: any) {
    this.myVariable=value
  }

  getVariable(): Observable<any> {
    return this.myVariableSubject.asObservable();
  }

  changeId(id: string) {
    localStorage.setItem('coffeeId', id); // Store the ID in localStorage
    this.idSource.next(id);
  }

  getStoredId(): string {
    return localStorage.getItem('coffeeId');
  }
}
