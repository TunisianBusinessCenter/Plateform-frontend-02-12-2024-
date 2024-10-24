import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgenceMatService {

  private storageKey = 'idAgency'
  private storageKey1 = 'materiaux'
  private storageKey2 = 'changeCoffee'
  private storageKey3 = 'idAgencyMeilleursBiens'

  constructor() { }

  
  setIdAgency(id:any): void {
    localStorage.setItem(this.storageKey1,id)
  }
  getIdAgency():string {
    return localStorage.getItem(this.storageKey1)
  }
}
