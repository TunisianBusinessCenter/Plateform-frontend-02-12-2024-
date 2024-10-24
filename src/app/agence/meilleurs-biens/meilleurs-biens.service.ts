import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeilleursBiensService {

  private storageKey = 'idAgency'
  private storageKey1 = 'idAgencyCommerce'
  private storageKey2 = 'changeCoffee'
  private storageKey3 = 'idAgencyMeilleursBiens'

  constructor() { }


  setIdAgency(id:any): void {
    localStorage.setItem(this.storageKey3,id)
  }
  getIdAgency():string {
    return localStorage.getItem(this.storageKey3)
  }
}