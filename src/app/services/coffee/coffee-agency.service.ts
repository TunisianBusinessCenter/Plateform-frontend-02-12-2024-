import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoffeeAgencyService {

  private storageKey = 'idAgency'
  private storageKey2 = 'changeCoffee'
  constructor() { }
  setIdAgency(id:any): void {
    localStorage.setItem(this.storageKey,id)
  }
  getIdAgency():string {
    return localStorage.getItem(this.storageKey)
  }
  setVarChange(id:any): void {
    localStorage.setItem(this.storageKey2,id)
  }
  getVarChange():string {
    return localStorage.getItem(this.storageKey2)
  }
}
